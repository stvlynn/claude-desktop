// Find restored directories whose files only import:
// - built-ins / safe externals
// - already-promoted src/ boundaries
// - other files within the same directory
import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;
const PROMOTION_MAP_PATH = new URL("./promotion-map.json", import.meta.url).pathname;
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
  "@radix-ui/react-menu",
  "@radix-ui/react-popover",
  "@radix-ui/react-popper",
  "d3-array",
  "d3-interpolate",
  "d3-scale",
  "d3-shape",
  "d3-time",
  "mime-types",
  "electron",
  "zod",
  "clsx",
  "jotai",
  "jotai/react",
]);

const BUILTIN_RE = /^(node:|bun:)/;

const importRe =
  /(?:import\b[^"']*from\s*["']|export\b[^"']*from\s*["']|import\s*\(\s*["']|\.\s*then\s*\(\s*\(\s*\)\s*=>\s*import\s*\(\s*["'])([^"']+)["']/g;

function getImports(source) {
  const imports = new Set();
  let m;
  while ((m = importRe.exec(source))) {
    imports.add(m[1]);
  }
  return [...imports];
}

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

function possibleExtensions(rel) {
  const candidates = [];
  if (path.extname(rel)) candidates.push(rel);
  candidates.push(
    rel + ".ts",
    rel + ".tsx",
    rel + ".js",
    rel + ".jsx",
    path.join(rel, "index.ts"),
    path.join(rel, "index.tsx"),
    path.join(rel, "index.js"),
    path.join(rel, "index.jsx"),
  );
  return [...new Set(candidates)];
}

// ---------------------------------------------------------------------------
// Index src files by exact content hash
// ---------------------------------------------------------------------------
const srcByContent = new Map();

for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  try {
    const source = fs.readFileSync(path.join(SRC_ROOT, entry), "utf8");
    const contentHash = hashString(source);
    if (!srcByContent.has(contentHash)) srcByContent.set(contentHash, []);
    srcByContent.get(contentHash).push(entry);
  } catch {}
}

const restoredRelToSource = new Map();
const restoredToSrc = new Map();

function loadPromotionMap() {
  try {
    const raw = fs.readFileSync(PROMOTION_MAP_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

const promotionMap = loadPromotionMap();

for (const entry of fs.readdirSync(RESTORED_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  const file = path.join(RESTORED_ROOT, entry);
  const source = fs.readFileSync(file, "utf8");
  restoredRelToSource.set(entry, source);
  const contentHash = hashString(source);
  if (srcByContent.has(contentHash)) restoredToSrc.set(entry, srcByContent.get(contentHash)[0]);
}

// Include historical promotions so files deleted from restored/ can still be
// resolved as src/ targets by their former importers.
for (const [rawRestoredRel, srcRel] of Object.entries(promotionMap)) {
  const restoredRel = rawRestoredRel.replace(/^restored\//, "");
  if (!restoredToSrc.has(restoredRel)) restoredToSrc.set(restoredRel, srcRel);
}

// Map a restored relative path to its likely FSD target path in src/.
// This catches files that were promoted by hand or by older scripts and are not
// yet in the promotion map.
function findFsdTarget(rel) {
  function check(mappedRel) {
    for (const p of possibleExtensions(mappedRel)) {
      if (fs.existsSync(path.join(SRC_ROOT, p))) return p;
    }
    return null;
  }
  if (rel.startsWith("runtime/")) return check(`renderer/shared/runtime/${rel.slice(8)}`);
  if (rel.startsWith("boundaries/current-ref/"))
    return check(`renderer/shared/lib/${rel.slice(23)}`);
  if (rel.startsWith("boundaries/")) return check(`renderer/shared/runtime/${rel.slice(11)}`);
  if (rel.startsWith("utils/")) return check(`renderer/shared/lib/${rel.slice(6)}`);
  if (rel.startsWith("ui/")) return check(`renderer/shared/ui/${rel.slice(3)}`);
  if (rel.startsWith("icons/")) return check(`renderer/shared/icons/${rel.slice(6)}`);
  if (rel.startsWith("i18n/")) return check(`renderer/shared/i18n/${rel.slice(5)}`);
  if (rel.startsWith("inbox/")) return check(`renderer/shared/lib/inbox/${rel.slice(6)}`);
  if (rel.startsWith("host/")) return check(`renderer/shared/runtime/host/${rel.slice(5)}`);
  if (rel.startsWith("vendor/")) return check(`renderer/shared/vendor/${rel.slice(7)}`);
  if (rel.startsWith("features/")) return check(`renderer/features/${rel.slice(9)}`);
  if (rel.startsWith("app-shell/"))
    return (
      check(`renderer/app-shell/${rel.slice(10)}`) ??
      check(`renderer/shared/app-shell/${rel.slice(10)}`) ??
      check(`renderer/features/app-shell/${rel.slice(10)}`)
    );
  if (rel.startsWith("threads/")) return check(`renderer/entities/thread/${rel.slice(8)}`);
  if (rel.startsWith("github/")) return check(`renderer/features/github/${rel.slice(7)}`);
  if (rel.startsWith("projects/")) return check(`renderer/features/projects/${rel.slice(9)}`);
  if (rel.startsWith("plugins/")) return check(`renderer/features/plugins/${rel.slice(8)}`);
  if (rel.startsWith("settings/")) return check(`renderer/features/settings/${rel.slice(9)}`);
  if (rel.startsWith("onboarding/")) return check(`renderer/features/onboarding/${rel.slice(11)}`);
  if (rel.startsWith("composer/")) return check(`renderer/features/composer/${rel.slice(9)}`);
  if (rel.startsWith("conversations/"))
    return check(`renderer/entities/conversation/${rel.slice(14)}`);
  if (rel.startsWith("home/")) return check(`renderer/entities/home/${rel.slice(5)}`);
  if (rel.startsWith("appgen/")) return check(`renderer/features/appgen/${rel.slice(7)}`);
  if (rel.startsWith("browser/"))
    return (
      check(`renderer/browser/${rel.slice(8)}`) ??
      check(`renderer/features/browser/${rel.slice(8)}`) ??
      check(`renderer/shared/browser/${rel.slice(8)}`)
    );
  if (rel.startsWith("sidebar/")) return check(`renderer/features/sidebar/${rel.slice(8)}`);
  if (rel.startsWith("connectors/")) return check(`renderer/features/connectors/${rel.slice(11)}`);
  if (rel.startsWith("config/")) return check(`renderer/features/config/${rel.slice(7)}`);
  if (rel.startsWith("auth/")) return check(`renderer/features/auth/${rel.slice(5)}`);
  if (rel.startsWith("environments/"))
    return check(`renderer/features/environments/${rel.slice(13)}`);
  if (rel.startsWith("collaboration/"))
    return check(`renderer/features/collaboration/${rel.slice(14)}`);
  if (rel.startsWith("markdown/")) return check(`renderer/features/markdown/${rel.slice(9)}`);
  if (rel.startsWith("remote/")) return check(`renderer/features/remote/${rel.slice(7)}`);
  if (rel.startsWith("app-server/")) return check(`renderer/features/app-server/${rel.slice(11)}`);
  if (rel.startsWith("main/")) return check(rel);
  return null;
}

// Resolve a relative import path from a restored file to the corresponding
// src/ path. Returns null if the target cannot be found in src/.
function findSrcForImport(importPath, fromFileRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return null;
  const fromDir = path.join(RESTORED_ROOT, path.dirname(fromFileRel));
  const resolved = path.resolve(fromDir, importPath);
  const rel = path.relative(RESTORED_ROOT, resolved);

  for (const p of possibleExtensions(rel)) {
    if (fs.existsSync(path.join(SRC_ROOT, p))) return p;
    if (restoredToSrc.has(p)) {
      const mapped = restoredToSrc.get(p);
      if (fs.existsSync(path.join(SRC_ROOT, mapped))) return mapped;
    }
    const fsd = findFsdTarget(p);
    if (fsd) return fsd;
  }

  return null;
}

function isAlreadyPromoted(relativePath, source) {
  // Identical content already in src/
  if (srcByContent.has(hashString(source))) return true;
  // Known mapping from promotion map
  if (restoredToSrc.has(relativePath)) {
    const mapped = restoredToSrc.get(relativePath);
    if (fs.existsSync(path.join(SRC_ROOT, mapped))) return true;
  }
  // FSD target already exists in src/ (e.g. promoted by hand and reformatted)
  const fsdTarget = findFsdTarget(relativePath);
  if (fsdTarget && fs.existsSync(path.join(SRC_ROOT, fsdTarget))) return true;
  return false;
}

// Collect all files and their directories
const dirFiles = new Map();
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      const dirPath = path.dirname(full);
      if (!dirFiles.has(dirPath)) dirFiles.set(dirPath, []);
      dirFiles.get(dirPath).push(full);
    }
  }
}
walk(RESTORED_ROOT);

function resolveRelative(fromDir, importPath) {
  return path.resolve(fromDir, importPath);
}

const promotableClusters = [];
const nearClusters = [];

for (const [dirPath, files] of dirFiles) {
  const dirRel = path.relative(RESTORED_ROOT, dirPath);
  let allSafe = true;
  let internalOnly = true;
  let externalUnresolved = [];
  let skippedCount = 0;

  for (const file of files) {
    const rel = path.relative(RESTORED_ROOT, file);
    const source = restoredRelToSource.get(rel);
    if (!source) continue;
    if (isAlreadyPromoted(rel, source)) {
      skippedCount++;
      continue;
    }

    const imports = getImports(source);
    for (const imp of imports) {
      if (
        BUILTIN_RE.test(imp) ||
        SAFE_EXTERNAL.has(imp) ||
        imp.startsWith("@shikijs/langs/")
      )
        continue;
      if (imp.startsWith("./") || imp.startsWith("../")) {
        const resolved = resolveRelative(dirPath, imp);
        const resolvedRel = path.relative(RESTORED_ROOT, resolved);
        const resolvedDir = path.dirname(resolved);

        // Already promoted to src/ (same path, identical content, or via map)
        const srcMatch = findSrcForImport(imp, rel);
        if (srcMatch) {
          continue;
        }

        if (resolvedDir === dirPath) {
          // Same-directory import: safe only if the target file actually exists
          // in this cluster (it will be promoted together).
          const existsInCluster = possibleExtensions(resolvedRel).some((p) =>
            fs.existsSync(path.join(RESTORED_ROOT, p)),
          );
          if (existsInCluster) {
            continue;
          }
          // Otherwise it's a dangling relative import.
          allSafe = false;
          internalOnly = false;
          externalUnresolved.push(imp);
          continue;
        }

        // Still exists in restored/ outside this directory -> blocks cluster
        const existingRestoredPath = possibleExtensions(resolvedRel).find((p) =>
          fs.existsSync(path.join(RESTORED_ROOT, p)),
        );
        if (existingRestoredPath) {
          internalOnly = false;
          allSafe = false;
          externalUnresolved.push(`${imp} (sibling dir)`);
          continue;
        }

        // Cannot resolve anywhere
        allSafe = false;
        internalOnly = false;
        externalUnresolved.push(imp);
      } else {
        allSafe = false;
        internalOnly = false;
        externalUnresolved.push(imp);
      }
    }
  }

  if (skippedCount === files.length) continue;

  if (allSafe) {
    promotableClusters.push(dirRel);
  } else if (internalOnly) {
    // all unresolved are within same directory; still promotable as a cluster
    promotableClusters.push(dirRel);
  } else if (externalUnresolved.length <= 3) {
    nearClusters.push({ dir: dirRel, unresolved: externalUnresolved });
  }
}

console.log("=== PROMOTABLE CLUSTERS (self-contained or all deps promoted) ===");
for (const d of promotableClusters.sort(
  (a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b),
)) {
  console.log(d);
}

console.log("\n=== NEAR CLUSTERS (<=3 external unresolved) ===");
for (const { dir, unresolved } of nearClusters.slice(0, 40)) {
  console.log(dir, "->", unresolved.join(", "));
}
