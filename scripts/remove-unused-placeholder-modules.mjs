import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const sourceExtensions = [".ts", ".tsx", ".js", ".jsx"];
const placeholderPattern = /undefined as never|export declare const/;
const importPattern = /(?:import\s+(?:type\s+)?[^"']*?from\s*|export\s+[^"']*?from\s*|import\s*\(\s*|import\s*)["']([^"']+)["']/g;

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".deobfuscate-javascript") continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(file));
    else if (sourceExtensions.includes(path.extname(entry.name))) files.push(file);
  }
  return files;
}

function resolveImport(importer, specifier) {
  if (!specifier.startsWith(".")) return [];
  const base = path.resolve(path.dirname(importer), specifier);
  if (sourceExtensions.includes(path.extname(base))) return [base];
  return [
    ...sourceExtensions.map((extension) => `${base}${extension}`),
    ...sourceExtensions.map((extension) => path.join(base, `index${extension}`)),
  ];
}

const sourceFiles = walk(srcRoot);
const importedFiles = new Set();
for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(importPattern)) {
    for (const target of resolveImport(file, match[1])) {
      if (fs.existsSync(target)) {
        importedFiles.add(target);
        break;
      }
    }
  }
}

const protectedEntryBasenames = new Set([
  "index.ts",
  "index.tsx",
  "main-window.tsx",
  "about-window.tsx",
  "buddy-window.tsx",
  "find-in-page-window.tsx",
  "quick-window.tsx",
]);
const candidates = sourceFiles.filter((file) => {
  if (importedFiles.has(file) || protectedEntryBasenames.has(path.basename(file))) {
    return false;
  }
  return placeholderPattern.test(fs.readFileSync(file, "utf8"));
});

if (process.argv.includes("--list")) {
  for (const file of candidates) console.log(path.relative(root, file));
  process.exit(0);
}

const originals = new Map(
  candidates.map((file) => [file, fs.readFileSync(file, "utf8")]),
);
for (const file of candidates) fs.unlinkSync(file);

const typecheck = spawnSync("bun", ["run", "typecheck"], {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 256 * 1024 * 1024,
});
if (typecheck.status !== 0) {
  for (const [file, source] of originals) fs.writeFileSync(file, source);
  process.stderr.write(typecheck.stdout ?? "");
  process.stderr.write(typecheck.stderr ?? "");
  throw new Error("Deleting unused placeholder modules broke typecheck; restored all candidates");
}

console.log(`Removed ${candidates.length} unreferenced placeholder modules.`);
