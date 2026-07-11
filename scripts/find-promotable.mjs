// Temporary helper: list restored renderer files whose relative imports all resolve to
// already-promoted src/ boundaries or other files in the same cluster.
import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;
const PROMOTION_MAP_PATH = new URL("./promotion-map.json", import.meta.url)
  .pathname;

function loadPromotionMap() {
  try {
    const raw = JSON.parse(fs.readFileSync(PROMOTION_MAP_PATH, "utf8"));
    const map = new Map();
    for (const [key, value] of Object.entries(raw)) {
      map.set(key.replace(/^restored\//, ""), value);
    }
    return map;
  } catch {
    return new Map();
  }
}

const promotionMap = loadPromotionMap();

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
  "clsx",
  "jotai",
  "jotai/react",
  "zod",
  "electron",
]);

const BUILTIN_RE =
  /^(node:|bun:|fs|path|os|crypto|url|util|events|stream|child_process|worker_threads|http|https|net|tls|dgram|dns|cluster|module|vm|process|querystring|punycode|string_decoder|timers|async_hooks|perf_hooks|diagnostics_channel|readline|repl|stream\/promises)$/;

function promotedCandidates(importPath) {
  const parts = importPath.split("/");
  const base = parts.at(-1);
  const parent = parts.at(-2);
  const candidates = [];

  // Normalize relative paths like ../../utils/foo → shared/lib/foo
  if (parent === "boundaries") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/boundaries", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/boundaries", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/boundaries", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/boundaries", base, "index.tsx"));
  } else if (parent === "runtime") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/runtime", base, "index.tsx"));
  } else if (parent === "lib") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base, "index.tsx"));
  } else if (parent === "app-shell") {
    candidates.push(path.join(SRC_ROOT, "renderer/app-shell", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/app-shell", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/app-shell", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/app-shell", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/app-shell", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/app-shell", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/app-shell", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/app-shell", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/app-shell", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/app-shell", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/app-shell", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/app-shell", base, "index.tsx"));
  } else if (parent === "browser") {
    candidates.push(path.join(SRC_ROOT, "renderer/browser", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/browser", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/browser", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/browser", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/browser", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/browser", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/browser", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/features/browser", base, "index.tsx"));
  } else if (parent === "utils") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/lib", base, "index.tsx"));
  } else if (parent === "ui") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/ui", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/ui", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/ui", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/ui", base, "index.ts"));
  } else if (parent === "icons") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/icons", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/icons", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/icons", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/icons", base + ".ts"));
  } else if (parent === "vendor") {
    candidates.push(path.join(SRC_ROOT, "renderer/shared/vendor", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/vendor", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/vendor", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/shared/vendor", base, "index.tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/vendor", base + ".ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/vendor", base + ".tsx"));
    candidates.push(path.join(SRC_ROOT, "renderer/vendor", base, "index.ts"));
    candidates.push(path.join(SRC_ROOT, "renderer/vendor", base, "index.tsx"));
  } else if (importPath.startsWith("../shared/")) {
    candidates.push(path.join(SRC_ROOT, "shared", ...parts.slice(2)) + ".ts");
    candidates.push(path.join(SRC_ROOT, "shared", ...parts.slice(2)) + ".tsx");
    candidates.push(path.join(SRC_ROOT, "shared", ...parts.slice(2), "index.ts"));
    candidates.push(path.join(SRC_ROOT, "shared", ...parts.slice(2), "index.tsx"));
  } else if (parent === "entities") {
    const entityParts = parts.slice(parts.indexOf("entities") + 1);
    candidates.push(
      path.join(SRC_ROOT, "renderer/entities", ...entityParts) + ".ts",
    );
    candidates.push(
      path.join(SRC_ROOT, "renderer/entities", ...entityParts) + ".tsx",
    );
    candidates.push(
      path.join(SRC_ROOT, "renderer/entities", ...entityParts, "index.ts"),
    );
    candidates.push(
      path.join(SRC_ROOT, "renderer/entities", ...entityParts, "index.tsx"),
    );
  }
  return candidates;
}

function existsAny(paths) {
  return paths.some((p) => fs.existsSync(p));
}

function findResolvedTarget(importPath) {
  const candidates = promotedCandidates(importPath);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function findPromotedTarget(fromFileRel, importPath) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) {
    return findResolvedTarget(importPath);
  }
  const fromDir = path.dirname(path.join(RESTORED_ROOT, fromFileRel));
  const resolved = path.resolve(fromDir, importPath);
  const rel = path.relative(RESTORED_ROOT, resolved);
  const extensions = ["", ".ts", ".tsx", ".js", ".jsx"];
  for (const ext of extensions) {
    const key = rel + ext;
    if (promotionMap.has(key)) {
      const mapped = path.join(SRC_ROOT, promotionMap.get(key));
      if (fs.existsSync(mapped)) return mapped;
    }
  }
  // Also allow directory index lookups.
  for (const ext of ["index.ts", "index.tsx", "index.js", "index.jsx"]) {
    const key = path.join(rel, ext);
    if (promotionMap.has(key)) {
      const mapped = path.join(SRC_ROOT, promotionMap.get(key));
      if (fs.existsSync(mapped)) return mapped;
    }
  }
  return findResolvedTarget(importPath);
}

const importFromRe = /import\s+([\s\S]*?)\s+from\s+["']([^"']+)["']/g;
const exportFromRe = /export\s+([\s\S]*?)\s+from\s+["']([^"']+)["']/g;
const exportAllFromRe = /export\s*\*\s+from\s+["']([^"']+)["']/g;

function getImportDetails(source) {
  const details = [];
  let m;
  while ((m = importFromRe.exec(source))) {
    details.push({ specifiers: m[1], source: m[2] });
  }
  while ((m = exportFromRe.exec(source))) {
    details.push({ specifiers: m[1], source: m[2] });
  }
  while ((m = exportAllFromRe.exec(source))) {
    details.push({ specifiers: "*", source: m[1] });
  }
  return details;
}

function parseNamedSpecifiers(specifiers) {
  const namedMatch = specifiers.match(/\{([^}]*)\}/);
  if (!namedMatch) return null;
  const names = [];
  for (const part of namedMatch[1].split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const [, local, , imported] = trimmed.match(/^(\w+)(\s+as\s+(\w+))?$/i) ?? [];
    if (!local) continue;
    names.push(imported ?? local);
  }
  return names;
}

const stubbedExportCache = new Map();

function getStubbedExportNames(targetPath) {
  if (stubbedExportCache.has(targetPath)) return stubbedExportCache.get(targetPath);
  const stubs = new Set();
  try {
    const source = fs.readFileSync(targetPath, "utf8");

    // Direct exported const stub: export const X = undefined as never;
    const directRe = /(?:^|;|\s)export\s+const\s+(\w+)\s*=\s*undefined\s+as\s+never\s*;/g;
    let m;
    while ((m = directRe.exec(source))) stubs.add(m[1]);

    // Local const stub that may be re-exported: const X = undefined as never;
    const localRe = /(?:^|;|\s)const\s+(\w+)\s*=\s*undefined\s+as\s+never\s*;/g;
    const localStubs = new Set();
    while ((m = localRe.exec(source))) localStubs.add(m[1]);

    // Re-exports: export { X as Y, Z };
    const exportBlockRe = /export\s*\{([^}]+)\}\s*(?!from)/g;
    let changed = true;
    while (changed) {
      changed = false;
      let bm;
      exportBlockRe.lastIndex = 0;
      while ((bm = exportBlockRe.exec(source))) {
        for (const part of bm[1].split(",")) {
          const trimmed = part.trim();
          if (!trimmed) continue;
          const [, local, , aliased] = trimmed.match(/^(\w+)(\s+as\s+(\w+))?$/i) ?? [];
          if (!local) continue;
          if (localStubs.has(local) && !stubs.has(aliased ?? local)) {
            stubs.add(aliased ?? local);
            changed = true;
          }
        }
      }
    }
  } catch {
    // ignore
  }
  stubbedExportCache.set(targetPath, stubs);
  return stubs;
}

function hasStubbedImports(targetPath, importedNames) {
  const stubs = getStubbedExportNames(targetPath);
  if (importedNames.length === 1 && importedNames[0] === "*") {
    return stubs.size > 0;
  }
  return importedNames.some((name) => stubs.has(name));
}

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
}
walk(RESTORED_ROOT);

const srcFiles = new Set();
const srcHeaders = new Set();
for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  srcFiles.add(entry);
  try {
    const srcPath = path.join(SRC_ROOT, entry);
    const srcSource = fs.readFileSync(srcPath, "utf8");
    const header = extractProvenanceHeader(srcSource);
    if (header) srcHeaders.add(header);
  } catch {
    // ignore unreadable files
  }
}

function extractProvenanceHeader(source) {
  const firstLines = source.slice(0, 500);
  const match = firstLines.match(/Restored from\s+([^\n]+)/);
  return match ? match[1].trim() : null;
}

function normalizeBaseName(name) {
  return name
    .toLowerCase()
    .replace(/[._-]/g, "")
    .replace(/^(home|appgen|global|local)/, "");
}

function isAlreadyPromoted(relativePath, source) {
  const base = path.basename(relativePath, path.extname(relativePath));
  const normalizedBase = normalizeBaseName(base);
  const header = extractProvenanceHeader(source);
  if (header && srcHeaders.has(header)) return true;

  for (const srcEntry of srcFiles) {
    const srcBase = path.basename(srcEntry, path.extname(srcEntry));
    if (srcBase === base) return true;
    if (normalizeBaseName(srcBase) === normalizedBase) return true;
  }
  return false;
}

const promotable = [];
const blocked = [];

for (const file of files) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = fs.readFileSync(file, "utf8");
  if (isAlreadyPromoted(rel, source)) continue;
  const importDetails = getImportDetails(source);
  const unresolved = [];
  let safe = true;

  for (const { specifiers, source: imp } of importDetails) {
    if (
      BUILTIN_RE.test(imp) ||
      SAFE_EXTERNAL.has(imp) ||
      imp.startsWith("@shikijs/langs/")
    )
      continue;
    if (imp.startsWith("./") || imp.startsWith("../")) {
      const resolved = findPromotedTarget(rel, imp);
      if (resolved) {
        const importedNames = parseNamedSpecifiers(specifiers);
        if (importedNames && hasStubbedImports(resolved, importedNames)) {
          unresolved.push(`${imp} (stub export)`);
          safe = false;
          continue;
        }
        continue;
      }
      unresolved.push(imp);
      safe = false;
    } else {
      unresolved.push(imp);
      safe = false;
    }
  }

  if (safe) {
    promotable.push(rel);
  } else if (unresolved.length <= 3) {
    blocked.push({ file: rel, unresolved });
  }
}

console.log("=== PROMOTABLE (all imports resolve to promoted boundaries) ===");
for (const f of promotable) console.log(f);

console.log("\n=== BLOCKED BY 1-3 UNPROMOTED IMPORTS ===");
for (const { file, unresolved } of blocked.slice(0, 200)) {
  console.log(file, "->", unresolved.join(", "));
}
