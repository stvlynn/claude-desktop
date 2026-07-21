import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const rendererRoot = path.join(srcRoot, "renderer");
const mainRoot = path.join(srcRoot, "main");
const importMapPath = path.join(root, "restored", "IMPORT_MAP.json");
const referencePackagePath = path.join(root, "ref", "package.json");
const restorationFrontierPath = path.join(
  mainRoot,
  "domain",
  "restoration-frontier.ts",
);

const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx"]);
const allowedRendererDirectories = new Set([
  ".deobfuscate-javascript",
  "app",
  "pages",
  "widgets",
  "features",
  "entities",
  "shared",
]);
const allowedMainDirectories = new Set([
  ".deobfuscate-javascript",
  "domain",
  "application",
  "infrastructure",
  "interfaces",
  "preload",
]);

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".deobfuscate-javascript") continue;
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(absolutePath));
    else if (sourceExtensions.has(path.extname(entry.name)))
      files.push(absolutePath);
  }
  return files;
}

function unexpectedDirectories(directory, allowed) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !allowed.has(entry.name))
    .map((entry) => path.relative(root, path.join(directory, entry.name)));
}

function currentReferenceCoverage(sourceFiles) {
  const packageJson = JSON.parse(fs.readFileSync(referencePackagePath, "utf8"));
  if (packageJson.name !== "@ant/desktop") return null;

  const buildRoot = path.join(root, "ref", ".vite", "build");
  const referenceEntries = walk(buildRoot).filter(
    (file) => path.extname(file) === ".js",
  );
  const sourceBodies = sourceFiles.map((file) => ({
    file,
    body: fs.readFileSync(file, "utf8"),
  }));
  return referenceEntries.map((file) => {
    const reference = path.relative(root, file);
    const marker = `Restored from ${reference}`;
    return {
      reference,
      restoredBy: sourceBodies
        .filter(({ body }) => body.includes(marker))
        .map(({ file: sourceFile }) => path.relative(root, sourceFile)),
    };
  });
}

function currentReferenceIpcSurfaceCoverage(sourceFiles) {
  const packageJson = JSON.parse(fs.readFileSync(referencePackagePath, "utf8"));
  if (packageJson.name !== "@ant/desktop") return null;

  const buildRoot = path.join(root, "ref", ".vite", "build");
  const expectedSurfaces = new Set();
  const surfacePattern =
    /\["(claude\.[^"]+)"\]\.([A-Za-z_$][A-Za-z0-9_$]*)\s*=/g;
  for (const file of walk(buildRoot)) {
    if (path.extname(file) !== ".js") continue;
    const body = fs.readFileSync(file, "utf8");
    for (const match of body.matchAll(surfacePattern)) {
      expectedSurfaces.add(`${match[1]}.${match[2]}`);
    }
  }

  const sourceBodies = sourceFiles.map((file) => ({
    body: fs.readFileSync(file, "utf8"),
    file,
  }));
  return [...expectedSurfaces].sort().map((surface) => ({
    restoredBy: sourceBodies
      .filter(({ body }) => body.includes(`Restored IPC surface: ${surface}`))
      .map(({ file }) => path.relative(root, file)),
    surface,
  }));
}

function currentReferenceIpcMethodCoverage(sourceFiles) {
  const buildRoot = path.join(root, "ref", ".vite", "build");
  const endpointPattern =
    /\$_(claude\.[A-Za-z]+)_\$_([A-Za-z0-9_$]+)_\$_([A-Za-z0-9_$]+)/g;
  const expected = new Map();
  for (const file of walk(buildRoot)) {
    if (path.extname(file) !== ".js") continue;
    for (const match of fs
      .readFileSync(file, "utf8")
      .matchAll(endpointPattern)) {
      const endpoint = match.slice(1, 4);
      expected.set(endpoint.join("."), endpoint);
    }
  }

  const sourceBodies = sourceFiles.map((file) => fs.readFileSync(file, "utf8"));
  return [...expected]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([endpoint, [, contract, method]]) => {
      const storeParts = method.match(/^(.+)_\$store\$_(.+)$/);
      const restored = sourceBodies.some((body) => {
        if (!body.includes(contract)) return false;
        if (body.includes(JSON.stringify(method))) return true;
        return Boolean(
          storeParts &&
          body.includes(JSON.stringify(storeParts[1])) &&
          body.includes(`_$store$_${storeParts[2]}`),
        );
      });
      return { endpoint, restored };
    });
}

function currentRendererEntryCoverage(frontierBody) {
  const rendererReferenceRoot = path.join(root, "ref", ".vite", "renderer");
  const expected = walk(rendererReferenceRoot)
    .filter((file) => path.extname(file) === ".js")
    .map((file) => path.relative(root, file))
    .sort();
  const declared = new Set(
    [...frontierBody.matchAll(/sourcePath:\s*"([^"]+)"/g)].map(
      (match) => match[1],
    ),
  );
  return expected.filter((entry) => !declared.has(entry));
}

function architectureDependencyViolations() {
  const configPath = ts.findConfigFile(
    root,
    ts.sys.fileExists,
    "tsconfig.json",
  );
  const parsedConfig = ts.parseJsonConfigFileContent(
    ts.readConfigFile(configPath, ts.sys.readFile).config,
    ts.sys,
    root,
  );
  const violations = [];
  const rendererRanks = new Map([
    ["shared", 0],
    ["entities", 1],
    ["features", 2],
    ["widgets", 3],
    ["pages", 4],
    ["app", 5],
  ]);

  for (const file of sourceFiles) {
    const body = fs.readFileSync(file, "utf8");
    const sourceFile = ts.createSourceFile(
      file,
      body,
      ts.ScriptTarget.Latest,
      true,
      file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
    );
    const imports = [];
    sourceFile.forEachChild((node) => {
      if (
        (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
        node.moduleSpecifier &&
        ts.isStringLiteral(node.moduleSpecifier)
      ) {
        imports.push(node.moduleSpecifier.text);
      }
    });
    for (const specifier of imports) {
      const resolved = ts.resolveModuleName(
        specifier,
        file,
        parsedConfig.options,
        ts.sys,
      ).resolvedModule?.resolvedFileName;
      if (!resolved?.startsWith(srcRoot)) continue;

      if (file.startsWith(rendererRoot) && resolved.startsWith(rendererRoot)) {
        const fromLayer = path.relative(rendererRoot, file).split(path.sep)[0];
        const toLayer = path
          .relative(rendererRoot, resolved)
          .split(path.sep)[0];
        const fromRank = rendererRanks.get(fromLayer);
        const toRank = rendererRanks.get(toLayer);
        if (
          fromRank !== undefined &&
          toRank !== undefined &&
          toRank > fromRank
        ) {
          violations.push(
            `${path.relative(root, file)} -> ${path.relative(root, resolved)}`,
          );
        }
      }

      const domainRoot = path.join(mainRoot, "domain");
      if (
        file.startsWith(domainRoot) &&
        !resolved.startsWith(domainRoot) &&
        !resolved.startsWith(path.join(srcRoot, "shared"))
      ) {
        violations.push(
          `${path.relative(root, file)} -> ${path.relative(root, resolved)}`,
        );
      }
    }
  }
  return [...new Set(violations)].sort();
}

const sourceFiles = walk(srcRoot);
const noCheckFiles = sourceFiles.filter((file) =>
  /^\s*\/\/\s*@ts-nocheck\b/m.test(fs.readFileSync(file, "utf8")),
);
const placeholderFiles = sourceFiles.filter(
  (file) =>
    /undefined as never|export declare const/.test(
      fs.readFileSync(file, "utf8"),
    ) ||
    (!file.endsWith(".d.ts") &&
      /^\s*export \{\s*\}\s*;?\s*$/m.test(fs.readFileSync(file, "utf8"))),
);
const restorationDebtPattern =
  /^\s*\/\/[^\n]*(?:\b(?:minimal|partial|boundary|compatibility)\s+stub\b|\bstub(?:bed)?\s+(?:backend|implementation|returns?|surface)\b|\b(?:is|as|left as)\s+a\s+no-op\b|\bnot yet (?:implemented|restored|routed|supported|wired)\b|\bto unblock\b)/im;
const restorationDebtFiles = sourceFiles.filter((file) =>
  restorationDebtPattern.test(fs.readFileSync(file, "utf8")),
);
const restorationFrontierBody = fs.readFileSync(
  restorationFrontierPath,
  "utf8",
);
const unfinishedFrontierEntries = [
  ...restorationFrontierBody.matchAll(/status:\s*"(mechanical|planned)"/g),
];

const referenceCoverage = currentReferenceCoverage(sourceFiles);
const ipcSurfaceCoverage = currentReferenceIpcSurfaceCoverage(sourceFiles);
const ipcMethodCoverage = currentReferenceIpcMethodCoverage(sourceFiles);
const missingRendererEntries = currentRendererEntryCoverage(
  restorationFrontierBody,
);
const dependencyViolations = architectureDependencyViolations();
const importMap = referenceCoverage
  ? null
  : JSON.parse(fs.readFileSync(importMapPath, "utf8"));
const incompleteChunks = referenceCoverage
  ? referenceCoverage
      .filter(({ restoredBy }) => restoredBy.length === 0)
      .map(({ reference }) => [reference, { status: "missing" }])
  : Object.entries(importMap.chunks ?? {}).filter(
      ([, chunk]) => chunk.status !== "done",
    );
const incompleteIpcSurfaces = (ipcSurfaceCoverage ?? []).filter(
  ({ restoredBy }) => restoredBy.length === 0,
);
const incompleteIpcMethods = ipcMethodCoverage.filter(
  ({ restored }) => !restored,
);
const rendererLayerViolations = unexpectedDirectories(
  rendererRoot,
  allowedRendererDirectories,
);
const mainLayerViolations = unexpectedDirectories(
  mainRoot,
  allowedMainDirectories,
);

const failures = [];
if (incompleteChunks.length > 0) {
  failures.push(`${incompleteChunks.length} import-map chunks are not done`);
}
if (noCheckFiles.length > 0) {
  failures.push(`${noCheckFiles.length} source files still use @ts-nocheck`);
}
if (placeholderFiles.length > 0) {
  failures.push(
    `${placeholderFiles.length} source files still contain placeholders`,
  );
}
if (restorationDebtFiles.length > 0) {
  failures.push(
    `${restorationDebtFiles.length} source files still declare restoration stubs or no-op behavior`,
  );
}
if (unfinishedFrontierEntries.length > 0) {
  failures.push(
    `${unfinishedFrontierEntries.length} current Claude restoration-frontier entries are not semantically restored`,
  );
}
if (incompleteIpcSurfaces.length > 0) {
  failures.push(
    `${incompleteIpcSurfaces.length} current Claude preload IPC surfaces are not restored`,
  );
}
if (incompleteIpcMethods.length > 0) {
  failures.push(
    `${incompleteIpcMethods.length} current Claude IPC endpoints are not represented in source`,
  );
}
if (missingRendererEntries.length > 0) {
  failures.push(
    `${missingRendererEntries.length} current Claude renderer entries are absent from the restoration frontier`,
  );
}
if (dependencyViolations.length > 0) {
  failures.push(
    `${dependencyViolations.length} FSD/DDD dependency rules are violated`,
  );
}
if (rendererLayerViolations.length > 0) {
  failures.push(
    `${rendererLayerViolations.length} renderer top-level directories are outside FSD`,
  );
}
if (mainLayerViolations.length > 0) {
  failures.push(
    `${mainLayerViolations.length} main top-level directories are outside DDD`,
  );
}

console.log(`Source files checked: ${sourceFiles.length}`);
console.log(
  referenceCoverage
    ? `Uncovered current Claude build entries: ${incompleteChunks.length}`
    : `Incomplete import-map chunks: ${incompleteChunks.length}`,
);
for (const [chunk, metadata] of incompleteChunks) {
  console.log(`  - ${chunk}: ${metadata.status ?? "missing status"}`);
}
console.log(`@ts-nocheck files: ${noCheckFiles.length}`);
for (const file of noCheckFiles.slice(0, 20)) {
  console.log(`  - ${path.relative(root, file)}`);
}
if (noCheckFiles.length > 20)
  console.log(`  ... ${noCheckFiles.length - 20} more`);
console.log(`Placeholder files: ${placeholderFiles.length}`);
for (const file of placeholderFiles.slice(0, 20)) {
  console.log(`  - ${path.relative(root, file)}`);
}
if (placeholderFiles.length > 20) {
  console.log(`  ... ${placeholderFiles.length - 20} more`);
}
console.log(`Declared restoration-debt files: ${restorationDebtFiles.length}`);
for (const file of restorationDebtFiles.slice(0, 20)) {
  console.log(`  - ${path.relative(root, file)}`);
}
if (restorationDebtFiles.length > 20) {
  console.log(`  ... ${restorationDebtFiles.length - 20} more`);
}
console.log(
  `Unfinished current Claude frontier entries: ${unfinishedFrontierEntries.length}`,
);
console.log(
  `Unrestored current Claude preload IPC surfaces: ${incompleteIpcSurfaces.length}`,
);
console.log(
  `Unrepresented current Claude IPC endpoints: ${incompleteIpcMethods.length}`,
);
for (const { endpoint } of incompleteIpcMethods.slice(0, 30)) {
  console.log(`  - ${endpoint}`);
}
console.log(
  `Current Claude renderer entries missing from frontier: ${missingRendererEntries.length}`,
);
for (const entry of missingRendererEntries) console.log(`  - ${entry}`);
console.log(`FSD/DDD dependency violations: ${dependencyViolations.length}`);
for (const violation of dependencyViolations.slice(0, 30)) {
  console.log(`  - ${violation}`);
}
const ipcSurfacePrintLimit = process.argv.includes("--all-ipc")
  ? incompleteIpcSurfaces.length
  : 30;
for (const { surface } of incompleteIpcSurfaces.slice(
  0,
  ipcSurfacePrintLimit,
)) {
  console.log(`  - ${surface}`);
}
if (incompleteIpcSurfaces.length > ipcSurfacePrintLimit) {
  console.log(
    `  ... ${incompleteIpcSurfaces.length - ipcSurfacePrintLimit} more`,
  );
}
console.log(`Renderer FSD layer violations: ${rendererLayerViolations.length}`);
for (const directory of rendererLayerViolations)
  console.log(`  - ${directory}`);
console.log(`Main DDD layer violations: ${mainLayerViolations.length}`);
for (const directory of mainLayerViolations) console.log(`  - ${directory}`);

if (failures.length > 0) {
  console.error(`Restoration incomplete: ${failures.join("; ")}.`);
  process.exit(1);
}

console.log("Restoration completeness check passed.");
