// Find restored files that are already represented in src/.
//
// Usage: bun scripts/find-duplicate-restored.mjs
//
// The script reports three categories:
// - IDENTICAL: restored file has the exact same content as a src file.
// - REFACTORED: restored file shares a provenance header and basename with a
//   src file (likely promoted then refactored).
// - SAFE TO DELETE: identical files that are not imported by any other restored
//   file. These can be removed without breaking the restored import graph.

import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;

function extractProvenanceHeader(source) {
  const firstLines = source.slice(0, 500);
  const match = firstLines.match(/Restored from\s+([^\n]+)/);
  return match ? match[1].trim() : null;
}

// Index src files by content hash and by basename + provenance
const srcFiles = [];
const srcByContent = new Map();
const srcByBaseProvenance = new Map();

for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  const srcPath = path.join(SRC_ROOT, entry);
  try {
    const source = fs.readFileSync(srcPath, "utf8");
    const header = extractProvenanceHeader(source);
    const base = path.basename(entry);
    srcFiles.push({ rel: entry, source, header, base });
    if (!srcByContent.has(source)) srcByContent.set(source, []);
    srcByContent.get(source).push(entry);
    if (header) {
      const key = `${base}::${header}`;
      if (!srcByBaseProvenance.has(key)) srcByBaseProvenance.set(key, []);
      srcByBaseProvenance.get(key).push(entry);
    }
  } catch {
    // ignore
  }
}

// Collect all restored files
const restoredFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      restoredFiles.push(full);
    }
  }
}
walk(RESTORED_ROOT);

const importRe = /(?:import\b[^"']*from|export\b[^"']*from|import)\s+["']([^"']+)["']/g;

function resolveImportTargets(fromDir, importPath) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return [];
  const resolved = path.resolve(fromDir, importPath);
  const rel = path.relative(RESTORED_ROOT, resolved);
  const ext = path.extname(rel);
  const knownExts = new Set([".ts", ".tsx", ".js", ".jsx"]);
  if (knownExts.has(ext)) return [rel];
  return [
    rel + ".ts",
    rel + ".tsx",
    rel + ".js",
    rel + ".jsx",
    path.join(rel, "index.ts"),
    path.join(rel, "index.tsx"),
    path.join(rel, "index.js"),
    path.join(rel, "index.jsx"),
  ];
}

// Build set of all relative paths imported from restored files
const importedTargets = new Set();
const restoredImports = new Map();
for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = fs.readFileSync(file, "utf8");
  const imports = [];
  let m;
  while ((m = importRe.exec(source))) {
    imports.push(m[1]);
  }
  restoredImports.set(rel, imports);
  const dir = path.dirname(file);
  for (const imp of imports) {
    for (const target of resolveImportTargets(dir, imp)) {
      importedTargets.add(target);
    }
  }
}

const identical = [];
const refactored = [];

for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = fs.readFileSync(file, "utf8");
  const header = extractProvenanceHeader(source);
  const base = path.basename(rel);

  // Exact content match
  if (srcByContent.has(source)) {
    identical.push({ rel, srcMatches: srcByContent.get(source) });
    continue;
  }

  // Basename + provenance match
  if (header) {
    const key = `${base}::${header}`;
    const srcMatches = srcByBaseProvenance.get(key);
    if (srcMatches) {
      refactored.push({ rel, srcMatches });
    }
  }
}

const safeToDelete = identical.filter(({ rel }) => !importedTargets.has(rel));

console.log(`=== IDENTICAL DUPLICATES (${identical.length}) ===`);
for (const { rel, srcMatches } of identical) {
  console.log(`${rel} -> ${srcMatches.join(", ")}`);
}

console.log(`\n=== REFACTORED DUPLICATES (${refactored.length}) ===`);
for (const { rel, srcMatches } of refactored.slice(0, 200)) {
  console.log(`${rel} -> ${srcMatches.join(", ")}`);
}
if (refactored.length > 200) {
  console.log(`... and ${refactored.length - 200} more`);
}

console.log(`\n=== SAFE TO DELETE (${safeToDelete.length} identical + unused) ===`);
for (const { rel } of safeToDelete) {
  console.log(rel);
}
