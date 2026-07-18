import fs from "node:fs";
import path from "node:path";

const rendererRoot = path.resolve("src/renderer");
const sourceRoot = path.join(rendererRoot, "runtime/current-app-initial");
const targetRoot = path.join(rendererRoot, "shared/legacy-current-app-initial");
const sourceExtensions = ["", ".ts", ".tsx", ".js", ".jsx"];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function resolvesInsideSource(importer, specifier) {
  if (!specifier.startsWith(".")) return false;
  const base = path.resolve(path.dirname(importer), specifier);
  return sourceExtensions.some((extension) => {
    const candidate = `${base}${extension}`;
    return candidate === sourceRoot || candidate.startsWith(`${sourceRoot}${path.sep}`);
  });
}

function rewriteSpecifier(importer, specifier) {
  const absoluteTarget = path.resolve(path.dirname(importer), specifier);
  const relativeInsideSource = path.relative(sourceRoot, absoluteTarget);
  const migratedTarget = path.join(targetRoot, relativeInsideSource);
  let migratedSpecifier = path.relative(path.dirname(importer), migratedTarget);
  if (!migratedSpecifier.startsWith(".")) migratedSpecifier = `./${migratedSpecifier}`;
  return migratedSpecifier.split(path.sep).join("/");
}

if (!fs.existsSync(sourceRoot)) {
  console.log("Renderer runtime source is already migrated.");
  process.exit(0);
}
if (fs.existsSync(targetRoot)) {
  throw new Error(`Migration target already exists: ${targetRoot}`);
}

let rewrittenFiles = 0;
for (const file of walk(rendererRoot)) {
  if (!/\.(?:[cm]?[jt]sx?)$/.test(file) || file.startsWith(sourceRoot)) continue;
  const source = fs.readFileSync(file, "utf8");
  const rewritten = source.replace(
    /((?:from\s*|import\s*\(|require\s*\()\s*["'])(\.[^"']+)(["'])/g,
    (match, prefix, specifier, suffix) =>
      resolvesInsideSource(file, specifier)
        ? `${prefix}${rewriteSpecifier(file, specifier)}${suffix}`
        : match,
  );
  if (rewritten !== source) {
    fs.writeFileSync(file, rewritten);
    rewrittenFiles += 1;
  }
}

fs.mkdirSync(path.dirname(targetRoot), { recursive: true });
fs.renameSync(sourceRoot, targetRoot);
fs.rmdirSync(path.join(rendererRoot, "runtime"));
console.log(`Migrated runtime and rewrote ${rewrittenFiles} consumer files.`);
