import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mts", ".cts"]);
const placeholderPattern = /undefined as never|export declare const/;
const noCheckPattern = /^\s*\/\/\s*@ts-nocheck\b/m;
const restorationDebtPattern =
  /^\s*\/\/[^\n]*(?:\b(?:minimal|partial|boundary|compatibility)\s+stub\b|\bstub(?:bed)?\s+(?:backend|implementation|returns?|surface)\b|\b(?:is|as|left as)\s+a\s+no-op\b|\bnot yet (?:implemented|restored|routed|supported|wired)\b|\bto unblock\b)/im;
const currentReferencePattern = /Restored from (ref\/\.vite\/[^\s)]+)/g;
const recoveryMetadata = new Set([
  "src/main/domain/application-bundle.ts",
  "src/main/domain/restoration-frontier.ts",
  "src/main/infrastructure/extracted-bundle-layout.ts",
]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return entry.name === ".deobfuscate-javascript" ? [] : walk(target);
    }
    return extensions.has(path.extname(entry.name)) ||
      entry.name.endsWith(".d.ts")
      ? [target]
      : [];
  });
}

const configPath = ts.findConfigFile(root, ts.sys.fileExists, "tsconfig.json");
const parsedConfig = ts.parseJsonConfigFileContent(
  ts.readConfigFile(configPath, ts.sys.readFile).config,
  ts.sys,
  root,
);

const entries = [
  "src/main/index.ts",
  "src/main/infrastructure/workers/shell-path-worker.ts",
  "src/main/infrastructure/workers/transcript-search-worker.ts",
  "src/main/infrastructure/workers/mcp-node-host.ts",
  "src/main/infrastructure/workers/direct-mcp-host.ts",
  "src/main/infrastructure/preload.ts",
  "src/main/preload/about-window-preload.ts",
  "src/main/preload/quick-window-preload.ts",
  "src/main/preload/find-in-page-preload.ts",
  "src/main/preload/main-view-preload.ts",
  "src/main/preload/buddy-preload.ts",
  "src/main/preload/claude-page-preview-preload.ts",
  "src/main/preload/computer-use-teach-preload.ts",
  "src/main/preload/computer-use-watch-record-preload.ts",
  "src/main/preload/cowork-artifact-preload.ts",
  "src/main/preload/watch-record-chooser-preload.ts",
  "src/renderer/main-window.tsx",
  "src/renderer/about-window.tsx",
  "src/renderer/buddy-window.tsx",
  "src/renderer/find-in-page-window.tsx",
  "src/renderer/quick-window.tsx",
].map((file) => path.join(root, file));

function traceReachable(entryFiles) {
  const traced = new Set();
  const queue = [...entryFiles];
  while (queue.length > 0) {
    const file = queue.pop();
    if (!file || traced.has(file) || !fs.existsSync(file)) continue;
    traced.add(file);
    const source = fs.readFileSync(file, "utf8");
    const sourceFile = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
    );
    const specifiers = [];
    function visit(node) {
      if (
        (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
        node.moduleSpecifier &&
        ts.isStringLiteral(node.moduleSpecifier)
      ) {
        specifiers.push(node.moduleSpecifier.text);
      } else if (
        ts.isCallExpression(node) &&
        (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
          (ts.isIdentifier(node.expression) &&
            node.expression.text === "require")) &&
        node.arguments.length === 1 &&
        ts.isStringLiteral(node.arguments[0])
      ) {
        specifiers.push(node.arguments[0].text);
      }
      ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    for (const specifier of specifiers) {
      const resolution = ts.resolveModuleName(
        specifier,
        file,
        parsedConfig.options,
        ts.sys,
      ).resolvedModule;
      const resolved = resolution?.resolvedFileName;
      if (resolved && resolved.startsWith(srcRoot)) queue.push(resolved);
    }
  }
  return traced;
}

const reachable = traceReachable(entries);

const allFiles = walk(srcRoot);
const unreachable = allFiles.filter(
  (file) => !reachable.has(file) && !file.endsWith(".d.ts"),
);
function hasExistingCurrentReference(file) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(currentReferencePattern)) {
    if (fs.existsSync(path.join(root, match[1]))) return true;
  }
  return false;
}

const currentRecoveryRoots = allFiles.filter((file) => {
  const relativePath = path.relative(root, file);
  return (
    recoveryMetadata.has(relativePath) || hasExistingCurrentReference(file)
  );
});
const currentRecoveryClosure = traceReachable(currentRecoveryRoots);
const archiveCandidates = unreachable.filter((file) => {
  return !currentRecoveryClosure.has(file);
});
const summarize = (files) => ({
  files: files.length,
  noCheck: files.filter((file) =>
    noCheckPattern.test(fs.readFileSync(file, "utf8")),
  ).length,
  placeholders: files.filter((file) =>
    placeholderPattern.test(fs.readFileSync(file, "utf8")),
  ).length,
  restorationDebt: files.filter((file) =>
    restorationDebtPattern.test(fs.readFileSync(file, "utf8")),
  ).length,
});

console.log("Reachable:", summarize([...reachable]));
console.log("Unreachable:", summarize(unreachable));
console.log(
  "Unreachable historical archive candidates:",
  summarize(archiveCandidates),
);
console.log(
  "Current-reference recovery closure:",
  summarize([...currentRecoveryClosure]),
);
if (process.argv.includes("--list")) {
  for (const file of unreachable) console.log(path.relative(root, file));
}
if (process.argv.includes("--archive-candidates")) {
  for (const file of archiveCandidates) console.log(path.relative(root, file));
}
if (process.argv.includes("--apply-archive")) {
  const archiveRoot = path.join(root, "legacy", "src");
  const moves = archiveCandidates.map((file) => ({
    file,
    target: path.join(archiveRoot, path.relative(srcRoot, file)),
  }));
  const collision = moves.find(({ target }) => fs.existsSync(target));
  if (collision) {
    throw new Error(
      `Archive target already exists: ${path.relative(root, collision.target)}`,
    );
  }
  for (const { file, target } of moves) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.renameSync(file, target);
  }
  console.log(
    `Archived ${archiveCandidates.length} historical source files under ${path.relative(root, archiveRoot)}`,
  );
}
if (process.argv.includes("--debt")) {
  for (const file of reachable) {
    if (restorationDebtPattern.test(fs.readFileSync(file, "utf8"))) {
      console.log(`debt: ${path.relative(root, file)}`);
    }
  }
}
