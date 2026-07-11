// Analyze which restored files are ready to be promoted to src/.
//
// This improves on find-promotable-clusters.mjs by:
// - Building an exact content-based map from restored files to their src
//   counterparts (identical or refactored).
// - For every restored file, reporting which imports are still unresolved in
//   src/ and which restored files import it.
// - Listing "safe-to-delete" duplicates (identical + no restored importers) and
//   "promotion candidates" (identical/refactored with a small number of
//   restored importers, so we can promote them and update the importers).
//
// Usage: bun scripts/analyze-promotion-readiness.mjs

import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;

const SAFE_EXTERNAL = new Set([
  "react",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-dom",
  "react-dom/client",
  "react-dom/server",
  "react-intl",
  "framer-motion",
  "@floating-ui/react-dom",
  "@radix-ui/react-context-menu",
  "@radix-ui/react-dialog",
  "@radix-ui/react-dropdown-menu",
  "@radix-ui/react-popover",
  "mime-types",
  "electron",
  "zod",
  "clsx",
  "jotai",
]);

const BUILTIN_RE = /^(node:|bun:)/;

function extractProvenanceHeader(source) {
  const firstLines = source.slice(0, 500);
  const match = firstLines.match(/Restored from\s+([^\n]+)/);
  return match ? match[1].trim() : null;
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h.toString(16);
}

// ---------------------------------------------------------------------------
// Index src files by content hash and by basename + provenance
// ---------------------------------------------------------------------------
const srcFiles = [];
const srcByContent = new Map();
const srcByBaseProvenance = new Map();
const srcByBase = new Map();

for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  const srcPath = path.join(SRC_ROOT, entry);
  try {
    const source = fs.readFileSync(srcPath, "utf8");
    const header = extractProvenanceHeader(source);
    const base = path.basename(entry);
    const rel = entry;
    srcFiles.push({ rel, source, header, base, path: srcPath });

    const contentHash = hashString(source);
    if (!srcByContent.has(contentHash)) srcByContent.set(contentHash, []);
    srcByContent.get(contentHash).push(rel);

    if (header) {
      const key = `${base}::${header}`;
      if (!srcByBaseProvenance.has(key)) srcByBaseProvenance.set(key, []);
      srcByBaseProvenance.get(key).push(rel);
    }

    if (!srcByBase.has(base)) srcByBase.set(base, []);
    srcByBase.get(base).push(rel);
  } catch {
    // ignore
  }
}

// ---------------------------------------------------------------------------
// Collect restored files and build import graph
// ---------------------------------------------------------------------------
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

const restoredImports = new Map(); // rel -> [importPath]
const restoredImportTargets = new Map(); // rel -> [targetRel]
const importedBy = new Map(); // targetRel -> [importerRel]
const restoredRelToSource = new Map();
const restoredRelToHeader = new Map();

for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = fs.readFileSync(file, "utf8");
  const header = extractProvenanceHeader(source);
  restoredRelToSource.set(rel, source);
  restoredRelToHeader.set(rel, header);

  const imports = [];
  const targets = [];
  let m;
  while ((m = importRe.exec(source))) {
    const imp = m[1];
    imports.push(imp);
    const dir = path.dirname(file);
    for (const target of resolveImportTargets(dir, imp)) {
      targets.push(target);
      if (!importedBy.has(target)) importedBy.set(target, []);
      importedBy.get(target).push(rel);
    }
  }
  restoredImports.set(rel, imports);
  restoredImportTargets.set(rel, targets);
}

// ---------------------------------------------------------------------------
// Map restored files to src counterparts
// ---------------------------------------------------------------------------
const restoredToSrc = new Map(); // restored rel -> src rel
const srcToRestored = new Map(); // src rel -> [restored rel]

for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = restoredRelToSource.get(rel);
  const header = restoredRelToHeader.get(rel);
  const base = path.basename(rel);
  const contentHash = hashString(source);

  // Exact content match
  if (srcByContent.has(contentHash)) {
    const matches = srcByContent.get(contentHash);
    restoredToSrc.set(rel, matches[0]);
    for (const s of matches) {
      if (!srcToRestored.has(s)) srcToRestored.set(s, []);
      srcToRestored.get(s).push(rel);
    }
    continue;
  }

  // Basename + provenance match
  if (header) {
    const key = `${base}::${header}`;
    const matches = srcByBaseProvenance.get(key);
    if (matches) {
      restoredToSrc.set(rel, matches[0]);
      for (const s of matches) {
        if (!srcToRestored.has(s)) srcToRestored.set(s, []);
        srcToRestored.get(s).push(rel);
      }
      continue;
    }
  }

  // Basename-only matching is intentionally disabled because too many
  // unrelated modules share names like `analytics.ts`, `queries.ts`, or
  // `button.tsx`. Rely on exact content or provenance headers instead.
}

// ---------------------------------------------------------------------------
// Determine readiness of each restored file
// ---------------------------------------------------------------------------
function fileExistsInRestored(rel) {
  return restoredRelToSource.has(rel);
}

function findSrcForImport(importPath, fromFileRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return null;
  const fromDir = path.join(RESTORED_ROOT, path.dirname(fromFileRel));
  const resolved = path.resolve(fromDir, importPath);
  const rel = path.relative(RESTORED_ROOT, resolved);
  const possibleExts = [".ts", ".tsx", ".js", ".jsx"];
  const possible = path.extname(rel)
    ? [rel]
    : [
        ...possibleExts.map((e) => rel + e),
        ...possibleExts.map((e) => path.join(rel, `index${e}`)),
      ];

  for (const p of possible) {
    // Direct src counterpart?
    const srcDirect = path.join(SRC_ROOT, p);
    if (fs.existsSync(srcDirect)) return path.relative(SRC_ROOT, srcDirect);

    // Restored file that maps to src?
    if (restoredToSrc.has(p)) return restoredToSrc.get(p);
  }
  return null;
}

const safeToDelete = [];
const promotionCandidates = [];
const blockedFiles = [];

for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);

  // If it already maps to src, check if anyone in restored still imports it.
  if (restoredToSrc.has(rel)) {
    const importers = importedBy.get(rel) || [];
    if (importers.length === 0) {
      safeToDelete.push({ rel, srcMatch: restoredToSrc.get(rel) });
    } else {
      promotionCandidates.push({ rel, srcMatch: restoredToSrc.get(rel), importers });
    }
    continue;
  }

  // Otherwise check if all imports resolve.
  const imports = restoredImports.get(rel);
  const unresolved = [];
  let ready = true;
  for (const imp of imports) {
    if (BUILTIN_RE.test(imp) || SAFE_EXTERNAL.has(imp)) continue;
    if (!imp.startsWith("./") && !imp.startsWith("../")) {
      unresolved.push(imp);
      ready = false;
      continue;
    }
    const srcMatch = findSrcForImport(imp, rel);
    if (srcMatch) continue;

    // Import target is another restored file that is not yet mapped.
    const targets = resolveImportTargets(path.dirname(file), imp);
    const existingRestoredTarget = targets.find((t) => fileExistsInRestored(t));
    if (existingRestoredTarget) {
      // Internal to the restored graph; not ready on its own unless we promote
      // as part of a cluster.
      unresolved.push(`${imp} -> restored:${existingRestoredTarget}`);
      ready = false;
    } else {
      unresolved.push(`${imp} -> missing`);
      ready = false;
    }
  }

  if (!ready) {
    blockedFiles.push({ rel, unresolved });
  }
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------
console.log(`=== SUMMARY ===`);
console.log(`Restored files total: ${restoredFiles.length}`);
console.log(`Already represented in src (identical/refactored/basename): ${restoredToSrc.size}`);
console.log(`Safe to delete (duplicates with no restored importers): ${safeToDelete.length}`);
console.log(`Promotion candidates (duplicates with restored importers): ${promotionCandidates.length}`);
console.log(`Blocked files (not in src and unresolved imports): ${blockedFiles.length}`);

console.log(`\n=== SAFE TO DELETE (${safeToDelete.length}) ===`);
for (const { rel, srcMatch } of safeToDelete) {
  console.log(`${rel} -> ${srcMatch}`);
}

console.log(`\n=== PROMOTION CANDIDATES (duplicates still imported from restored) ===`);
const sortedCandidates = promotionCandidates.sort(
  (a, b) => a.importers.length - b.importers.length || a.rel.localeCompare(b.rel),
);
for (const { rel, srcMatch, importers } of sortedCandidates.slice(0, 80)) {
  console.log(`${rel} -> ${srcMatch} [${importers.length} importers]`);
  for (const imp of importers.slice(0, 5)) {
    console.log(`    imported by: ${imp}`);
  }
  if (importers.length > 5) console.log(`    ... and ${importers.length - 5} more`);
}
if (sortedCandidates.length > 80) {
  console.log(`... and ${sortedCandidates.length - 80} more`);
}

console.log(`\n=== BLOCKED FILES (sample, sorted by unresolved count) ===`);
const sortedBlocked = blockedFiles.sort(
  (a, b) => a.unresolved.length - b.unresolved.length || a.rel.localeCompare(b.rel),
);
for (const { rel, unresolved } of sortedBlocked.slice(0, 40)) {
  console.log(`${rel}: ${unresolved.join(", ")}`);
}
if (sortedBlocked.length > 40) {
  console.log(`... and ${sortedBlocked.length - 40} more`);
}
