// Promote 0-unresolved renderer shared modules into src/.
//
// Handles runtime/, boundaries/, ui/, icons/, utils/, and small vendor/ leaves.
// These files only import things already present in src/ or safe externals, so
// they are safe to lift without updating restored importers.
//
// Usage: bun scripts/promote-shared-modules.mjs [--dry-run]

import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;
const PROMOTION_MAP_PATH = new URL("./promotion-map.json", import.meta.url).pathname;

const DRY_RUN = process.argv.includes("--dry-run");

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

// Files that are known obfuscated vendor bundles and should not be promoted
// until they are deobfuscated / typed.
const BLOCKLIST = new Set([
  "runtime/current-app-initial/current-app-initial-shared-backing.ts",
  "vendor/radix-ui-core.tsx",
  "vendor/radix-helpers.tsx",
  "vendor/diagram-definition-current-runtime.ts",
  "ui/toast-signal.tsx",
  "ui/modal-controller-state.tsx",
  "ui/button.tsx",
  "ui/avatar-mascot-button.tsx",
  "ui/rich-link-g-oum-tm-pc.tsx",
  "utils/class-names.ts",
  "utils/markdown-to-search-text/values.ts",
  "utils/app-intl-signal.ts",
  "utils/build-start-conversation-params.ts",
  "utils/checkbox.ts",
  "utils/extension-info.ts",
  "utils/get-skill-icon.tsx",
  "utils/open-in-targets-query.ts",
  "utils/pinned-threads-query.ts",
  "utils/transcribe-audio/multipart.ts",
  "utils/use-active-conversation-id.ts",
  "utils/use-navigate-to-local-conversation.ts",
  "boundaries/current-ref/current-app-initial-diagram-definition-runtime-producer.ts",
  "boundaries/current-ref/thread-resource-card-producer.ts",
  "runtime/app-main-host-runtime.ts",
  "runtime/current-app-initial/diagram-definition-runtime.ts",
  "runtime/mcp-server-status-runtime.ts",
  "runtime/route-scope-provider.tsx",
  "runtime/scope-signal-runtime.tsx",
  "runtime/theme-preference-runtime.ts",
  "runtime/use-electron-message-handler.ts",
  "runtime/current-app-initial/typed-array-clone-runtime.ts",
  "runtime/query-client/query-client-provider.tsx",
  "utils/command-keybindings.ts",
  "utils/segmented-toggle.tsx",
  "utils/base-order-by.ts",
  "ui/pdb-preview/sequence-strip.tsx",
  "runtime/query-client/react-query-context.tsx",
  "runtime/query-client/query-client-provider.tsx",
]);

// Maximum file size (bytes) for a single promoted module. Anything larger is
// likely a bundled vendor chunk rather than a hand-written module.
const MAX_PROMOTE_BYTES = 200_000;

// Heuristic: vendor files that still use minified/obfuscated identifiers need
// deobfuscation before they can pass typecheck.
const OBFUSCATED_IDENTIFIER_RE = /\b(distParam\d+|distValue\d+)\b/;
const MINIFIED_IDENTIFIER_RE = /\b[e,t,n,r,i,a,o,s,l,c,d,u]\b/g;

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

function srcHasExact(source) {
  return srcByContent.has(hashString(source));
}

// ---------------------------------------------------------------------------
// Collect restored files and imports
// ---------------------------------------------------------------------------
const restoredFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) restoredFiles.push(full);
  }
}
walk(RESTORED_ROOT);

// Matches import/export/dynamic-import statements and captures the module path.
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

function possibleExtensions(rel) {
  const candidates = [
    rel,
    rel + ".ts",
    rel + ".tsx",
    rel + ".js",
    rel + ".jsx",
    path.join(rel, "index.ts"),
    path.join(rel, "index.tsx"),
    path.join(rel, "index.js"),
    path.join(rel, "index.jsx"),
  ];
  return [...new Set(candidates)];
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

function savePromotionMap(map) {
  fs.writeFileSync(PROMOTION_MAP_PATH, JSON.stringify(map, null, 2), "utf8");
}

const promotionMap = loadPromotionMap();

for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = fs.readFileSync(file, "utf8");
  restoredRelToSource.set(rel, source);
  const contentHash = hashString(source);
  if (srcByContent.has(contentHash)) restoredToSrc.set(rel, srcByContent.get(contentHash)[0]);
}

// Include historical promotions so files deleted from restored/ can still be
// resolved as src/ targets by their former importers.
for (const [rawRestoredRel, srcRel] of Object.entries(promotionMap)) {
  const restoredRel = rawRestoredRel.replace(/^restored\//, "");
  if (!restoredToSrc.has(restoredRel)) restoredToSrc.set(restoredRel, srcRel);
}

// Map a restored relative path to its likely FSD target path in src/.
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
  if (rel.startsWith("boundaries/src-l0hb/"))
    return check(`renderer/shared/boundaries/src-l0hb/${rel.slice(20)}`);
  if (rel.startsWith("boundaries/")) return check(`renderer/shared/boundaries/${rel.slice(11)}`);
  if (rel.startsWith("utils/")) return check(`renderer/shared/lib/${rel.slice(6)}`);
  if (rel.startsWith("ui/")) return check(`renderer/shared/ui/${rel.slice(3)}`);
  if (rel.startsWith("icons/")) return check(`renderer/shared/icons/${rel.slice(6)}`);
  if (rel.startsWith("i18n/")) return check(`renderer/shared/i18n/${rel.slice(5)}`);
  if (rel.startsWith("inbox/")) return check(`renderer/shared/lib/inbox/${rel.slice(6)}`);
  if (rel.startsWith("host/")) return check(`renderer/shared/runtime/host/${rel.slice(5)}`);
  if (rel.startsWith("vendor/")) return check(`renderer/shared/vendor/${rel.slice(7)}`);
  if (rel.startsWith("features/")) return check(`renderer/features/${rel.slice(9)}`);
  if (rel.startsWith("app-shell/")) return check(`renderer/features/app-shell/${rel.slice(10)}`);
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
  if (rel.startsWith("browser/")) return check(`renderer/features/browser/${rel.slice(8)}`);
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
    // Same relative path already exists in src/
    if (fs.existsSync(path.join(SRC_ROOT, p))) return p;
    // Known mapping from restored file to src file (by content/provenance)
    if (restoredToSrc.has(p)) {
      const mapped = restoredToSrc.get(p);
      if (fs.existsSync(path.join(SRC_ROOT, mapped))) return mapped;
    }
    const fsd = findFsdTarget(p);
    if (fsd) return fsd;
  }

  return null;
}

function countUnresolved(rel) {
  const source = restoredRelToSource.get(rel);
  if (!source) return { count: 999, unresolved: [], imports: [] };
  const imports = getImports(source);
  const unresolved = [];
  for (const imp of imports) {
    if (BUILTIN_RE.test(imp) || SAFE_EXTERNAL.has(imp)) continue;
    if (!imp.startsWith("./") && !imp.startsWith("../")) {
      unresolved.push(imp);
      continue;
    }
    const srcMatch = findSrcForImport(imp, rel);
    if (srcMatch) continue;
    unresolved.push(imp);
  }
  return { count: unresolved.length, unresolved, imports };
}

function isPromotableDir(rel) {
  return (
    rel.startsWith("runtime/") ||
    rel.startsWith("boundaries/") ||
    rel.startsWith("ui/") ||
    rel.startsWith("icons/") ||
    rel.startsWith("utils/") ||
    rel.startsWith("i18n/") ||
    rel.startsWith("inbox/") ||
    rel.startsWith("host/") ||
    rel.startsWith("vendor/") ||
    rel.startsWith("config/")
  );
}

function targetPathFor(rel) {
  if (rel.startsWith("boundaries/current-ref/")) {
    return path.join(SRC_ROOT, "renderer/shared/lib", path.relative("boundaries/current-ref", rel));
  }
  if (rel.startsWith("boundaries/src-l0hb/")) {
    return path.join(SRC_ROOT, "renderer/shared/boundaries/src-l0hb", path.relative("boundaries/src-l0hb", rel));
  }
  if (rel.startsWith("boundaries/")) {
    return path.join(SRC_ROOT, "renderer/shared/boundaries", path.relative("boundaries", rel));
  }
  if (rel.startsWith("runtime/")) {
    return path.join(SRC_ROOT, "renderer/shared/runtime", path.relative("runtime", rel));
  }
  if (rel.startsWith("ui/")) {
    return path.join(SRC_ROOT, "renderer/shared/ui", path.relative("ui", rel));
  }
  if (rel.startsWith("icons/")) {
    return path.join(SRC_ROOT, "renderer/shared/icons", path.relative("icons", rel));
  }
  if (rel.startsWith("utils/")) {
    return path.join(SRC_ROOT, "renderer/shared/lib", path.relative("utils", rel));
  }
  if (rel.startsWith("i18n/")) {
    return path.join(SRC_ROOT, "renderer/shared/i18n", path.relative("i18n", rel));
  }
  if (rel.startsWith("inbox/")) {
    return path.join(SRC_ROOT, "renderer/shared/lib/inbox", path.relative("inbox", rel));
  }
  if (rel.startsWith("host/")) {
    return path.join(SRC_ROOT, "renderer/shared/runtime/host", path.relative("host", rel));
  }
  if (rel.startsWith("vendor/")) {
    return path.join(SRC_ROOT, "renderer/shared/vendor", path.relative("vendor", rel));
  }
  if (rel.startsWith("config/")) {
    return path.join(SRC_ROOT, "renderer/features/config", path.relative("config", rel));
  }
  return null;
}

function rewriteImport(importPath, sourceRel, targetRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return importPath;

  const srcMatch = findSrcForImport(importPath, sourceRel);
  if (!srcMatch) {
    // If we couldn't resolve it, leave the path untouched so the failure is
    // obvious rather than silently rewriting to a broken path.
    return importPath;
  }

  const targetDir = path.dirname(path.join(SRC_ROOT, targetRel));
  const targetFile = path.join(SRC_ROOT, srcMatch);
  let newRel = path.relative(targetDir, targetFile);
  if (!newRel.startsWith(".")) newRel = "./" + newRel;
  // Strip TypeScript extension for ESM-style imports
  newRel = newRel.replace(/\.(ts|tsx|js|jsx)$/, "");
  return newRel;
}

function isBlocked(rel) {
  if (BLOCKLIST.has(rel)) return "blocklisted obfuscated bundle";
  const source = restoredRelToSource.get(rel);
  if (!source) return null;
  if (Buffer.byteLength(source, "utf8") > MAX_PROMOTE_BYTES) {
    return `exceeds ${MAX_PROMOTE_BYTES} bytes`;
  }
  if (rel.startsWith("vendor/")) {
    if (OBFUSCATED_IDENTIFIER_RE.test(source)) {
      return "obfuscated vendor identifiers (distParam/distValue)";
    }
    // Minified vendor bundles use single-letter variables heavily.
    const identifierMatches = source.match(MINIFIED_IDENTIFIER_RE);
    if (identifierMatches && identifierMatches.length > 300) {
      return "minified vendor identifiers";
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Find promotable leaves
// ---------------------------------------------------------------------------
const promotable = [];
for (const file of restoredFiles) {
  const rel = path.relative(RESTORED_ROOT, file);
  if (restoredToSrc.has(rel)) continue;
  if (!isPromotableDir(rel)) continue;
  const { count, unresolved } = countUnresolved(rel);
  if (count === 0) promotable.push(rel);
}

promotable.sort();

console.log(`Found ${promotable.length} 0-unresolved runtime/boundary files to promote.`);
if (DRY_RUN) console.log("DRY RUN - no files will be changed.");

let promoted = 0;
let skippedDuplicate = 0;
let skippedBlocked = 0;
let skippedUnresolvedAfterRewrite = 0;

for (const rel of promotable) {
  const source = restoredRelToSource.get(rel);
  const targetAbs = targetPathFor(rel);
  if (!targetAbs) {
    console.log(`SKIP (no target): ${rel}`);
    continue;
  }

  if (srcHasExact(source)) {
    const existingSrc = srcByContent.get(hashString(source))[0];
    console.log(`SKIP (already identical in src): ${rel}`);
    skippedDuplicate++;
    if (!DRY_RUN) {
      fs.unlinkSync(path.join(RESTORED_ROOT, rel));
      promotionMap[`restored/${rel}`] = existingSrc;
      savePromotionMap(promotionMap);
    }
    continue;
  }

  const blockReason = isBlocked(rel);
  if (blockReason) {
    console.log(`SKIP (${blockReason}): ${rel}`);
    skippedBlocked++;
    continue;
  }

  const targetRel = path.relative(SRC_ROOT, targetAbs);

  if (fs.existsSync(targetAbs) && !srcHasExact(source)) {
    console.log(`SKIP (target already exists in src): ${rel} -> ${targetRel}`);
    continue;
  }
  const newSource = source.replace(importRe, (match, importPath) => {
    const newPath = rewriteImport(importPath, rel, targetRel);
    const pathStart = match.indexOf(importPath);
    return match.slice(0, pathStart) + newPath + match.slice(pathStart + importPath.length);
  });

  // Verify the rewritten source still has 0 unresolved imports from its new
  // location. This catches path rewrite bugs before they break typecheck.
  const rewrittenImports = getImports(newSource);
  const stillUnresolved = [];
  for (const imp of rewrittenImports) {
    if (BUILTIN_RE.test(imp) || SAFE_EXTERNAL.has(imp)) continue;
    if (!imp.startsWith("./") && !imp.startsWith("../")) {
      stillUnresolved.push(imp);
      continue;
    }
    const targetDir = path.dirname(targetAbs);
    const resolved = path.resolve(targetDir, imp);
    const candidateExts = possibleExtensions(resolved);
    const exists = candidateExts.some((e) => fs.existsSync(e));
    if (!exists) stillUnresolved.push(imp);
  }

  if (stillUnresolved.length > 0) {
    console.log(`SKIP (unresolved after rewrite): ${rel}`);
    console.log(`  -> ${stillUnresolved.join(", ")}`);
    skippedUnresolvedAfterRewrite++;
    continue;
  }

  if (DRY_RUN) {
    console.log(`WOULD PROMOTE: ${rel} -> ${targetRel}`);
  } else {
    fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
    fs.writeFileSync(targetAbs, newSource, "utf8");
    fs.unlinkSync(path.join(RESTORED_ROOT, rel));
    promotionMap[`restored/${rel}`] = targetRel;
    savePromotionMap(promotionMap);
    console.log(`PROMOTED: ${rel} -> ${targetRel}`);
  }
  promoted++;
}

console.log(
  `\nDone. Promoted: ${promoted}, skipped duplicates: ${skippedDuplicate}, blocked: ${skippedBlocked}, unresolved-after-rewrite: ${skippedUnresolvedAfterRewrite}.`
);
