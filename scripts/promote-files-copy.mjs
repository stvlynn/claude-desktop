// Promote a list of restored files into src/ by copying (never deleting),
// rewriting relative imports, adding @ts-nocheck to large/obfuscated files,
// and updating scripts/promotion-map.json.
//
// Usage:
//   bun scripts/promote-files-copy.mjs <files.json>
// where files.json is an array of restored relative paths (without restored/ prefix).
// The script will also recursively promote any restored relative imports that are
// not already promoted.

import fs from "node:fs";
import path from "node:path";

const ROOT = new URL("../", import.meta.url).pathname;
const RESTORED_ROOT = path.join(ROOT, "restored");
const SRC_ROOT = path.join(ROOT, "src");
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
  "@radix-ui/react-popover",
  "mime-types",
  "electron",
  "zod",
  "clsx",
  "jotai",
  "jotai/react",
  "cytoscape",
  "@segment/analytics-next/dist/types/plugins/ajs-destination",
  "d3-array",
  "d3-interpolate",
  "d3-scale",
  "d3-shape",
  "d3-time",
  "@radix-ui/react-menu",
  "@radix-ui/react-popper",
]);

const BUILTIN_RE = /^(node:|bun:)/;
const importRe =
  /(?:import\b[^"']*from\s*["']|export\b[^"']*from\s*["']|import\s*\(\s*["']|\.\s*then\s*\(\s*\(\s*\)\s*=>\s*import\s*\(\s*["'])([^"']+)["']/g;

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

function normalizeName(p) {
  return path.basename(p).replace(/\.(ts|tsx|js|jsx)$/, "");
}

function readSource(rel) {
  const abs = path.join(RESTORED_ROOT, rel);
  try {
    return fs.readFileSync(abs, "utf8");
  } catch {
    return null;
  }
}

function existsInRestored(rel) {
  return possibleExtensions(path.join(RESTORED_ROOT, rel)).some((p) =>
    fs.existsSync(p),
  );
}

function loadPromotionMap() {
  try {
    return JSON.parse(fs.readFileSync(PROMOTION_MAP_PATH, "utf8"));
  } catch {
    return {};
  }
}

function savePromotionMap(map) {
  fs.writeFileSync(PROMOTION_MAP_PATH, JSON.stringify(map, null, 2), "utf8");
}

function isFeatureWrapperRuntime(rel, source) {
  if (!rel.startsWith("runtime/current-app-initial/")) return false;
  // If it imports from ../../settings/ or ../../<feature>/ treat as route wrapper.
  return /(?:^|\n)\s*(?:import|export)\b[^"']*from\s*["']\.\.\/\.\.\/(settings|[^./][^/]+)\//m.test(
    source,
  );
}

function inferTarget(rel, source, promotionMap) {
  // Trust an existing map entry whose target actually exists in src.
  const mapped = promotionMap[`restored/${rel}`];
  if (mapped && fs.existsSync(path.join(SRC_ROOT, mapped))) return mapped;

  // Runtime wrappers.
  if (rel.startsWith("runtime/current-app-initial/")) {
    if (isFeatureWrapperRuntime(rel, source)) {
      return `renderer/runtime/current-app-initial/${rel.slice(28)}`;
    }
    return `renderer/shared/runtime/current-app-initial/${rel.slice(28)}`;
  }
  if (rel.startsWith("runtime/"))
    return `renderer/shared/runtime/${rel.slice(8)}`;

  // Shared libraries / boundaries / vendors.
  if (rel.startsWith("boundaries/current-ref/"))
    return `renderer/shared/lib/${rel.slice(23)}`;
  if (rel.startsWith("boundaries/"))
    return `renderer/shared/runtime/${rel.slice(11)}`;
  if (rel.startsWith("utils/")) return `renderer/shared/lib/${rel.slice(6)}`;
  if (rel.startsWith("ui/")) return `renderer/shared/ui/${rel.slice(3)}`;
  if (rel.startsWith("icons/"))
    return `renderer/shared/icons/${rel.slice(6)}`;
  if (rel.startsWith("i18n/"))
    return `renderer/shared/i18n/${rel.slice(5)}`;
  if (rel.startsWith("vendor/"))
    return `renderer/shared/vendor/${rel.slice(7)}`;

  // Conversations: runtime-ish files live in shared/conversations, UI/types in entities.
  if (rel.startsWith("conversations/")) {
    const base = path.basename(rel);
    if (base.includes("-runtime") || base.includes("-state"))
      return `renderer/shared/conversations/${rel.slice(14)}`;
    return `renderer/entities/conversation/${rel.slice(14)}`;
  }

  // Feature domains.
  const featureDomains = new Set([
    "app-shell",
    "threads",
    "appgen",
    "composer",
    "review",
    "routes",
    "debug",
    "browser",
    "worktree",
    "profile",
    "hotkey-window",
    "environments",
    "thread-summary",
    "onboarding",
    "requests",
    "sidebar",
    "projects",
    "plugins",
    "settings",
    "terminal",
    "workspace",
    "github",
    "collaboration",
    "markdown",
    "remote",
    "app-server",
    "sites",
    "connectors",
    "config",
    "auth",
  ]);
  const first = rel.match(/^([^/]+)\//)?.[1];
  if (first && featureDomains.has(first))
    return `renderer/features/${rel}`;

  // Remaining legacy domains.
  if (rel.startsWith("home/"))
    return `renderer/entities/home/${rel.slice(5)}`;
  if (rel.startsWith("main/")) return rel;

  return `renderer/features/${rel}`;
}

function inferRestoredTarget(targetRel) {
  if (targetRel.startsWith("renderer/runtime/current-app-initial/"))
    return `runtime/current-app-initial/${targetRel.slice(37)}`;
  if (targetRel.startsWith("renderer/shared/runtime/current-app-initial/"))
    return `runtime/current-app-initial/${targetRel.slice(44)}`;
  if (targetRel.startsWith("renderer/shared/runtime/"))
    return `runtime/${targetRel.slice(24)}`;
  if (targetRel.startsWith("renderer/shared/lib/")) {
    const rest = targetRel.slice(20);
    if (rest.startsWith("current-ref/"))
      return `boundaries/current-ref/${rest.slice(12)}`;
    if (rest.startsWith("conversations/")) return rest;
    return `utils/${rest}`;
  }
  if (targetRel.startsWith("renderer/shared/ui/"))
    return `ui/${targetRel.slice(19)}`;
  if (targetRel.startsWith("renderer/shared/icons/"))
    return `icons/${targetRel.slice(22)}`;
  if (targetRel.startsWith("renderer/shared/i18n/"))
    return `i18n/${targetRel.slice(21)}`;
  if (targetRel.startsWith("renderer/shared/vendor/"))
    return `vendor/${targetRel.slice(23)}`;
  if (targetRel.startsWith("renderer/shared/boundaries/"))
    return `boundaries/${targetRel.slice(27)}`;
  if (targetRel.startsWith("renderer/shared/conversations/"))
    return `conversations/${targetRel.slice(30)}`;
  if (targetRel.startsWith("renderer/features/"))
    return targetRel.slice(18);
  if (targetRel.startsWith("renderer/entities/conversation/"))
    return `conversations/${targetRel.slice(31)}`;
  if (targetRel.startsWith("renderer/entities/thread/"))
    return `threads/${targetRel.slice(25)}`;
  if (targetRel.startsWith("renderer/entities/home/"))
    return `home/${targetRel.slice(23)}`;
  if (targetRel.startsWith("renderer/app-shell/"))
    return `app-shell/${targetRel.slice(19)}`;
  return null;
}

function getImports(source) {
  const imports = new Set();
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(source))) imports.add(m[1]);
  return [...imports];
}

function resolveRestoredImport(importPath, fromRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return null;
  const fromDir = path.dirname(path.join(RESTORED_ROOT, fromRel));
  const resolved = path.resolve(fromDir, importPath);
  if (!resolved.startsWith(RESTORED_ROOT + path.sep)) return null;
  const rel = path.relative(RESTORED_ROOT, resolved);
  for (const p of possibleExtensions(rel)) {
    if (fs.existsSync(path.join(RESTORED_ROOT, p))) return p;
  }
  return null;
}

function main() {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error("Usage: bun scripts/promote-files-copy.mjs <files.json>");
    process.exit(1);
  }

  const seedFiles = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const promotionMap = loadPromotionMap();

  // Build a map of promoted files that actually exist in src.
  const promotedToTarget = new Map();
  for (const [rawRel, targetRel] of Object.entries(promotionMap)) {
    const rel = rawRel.replace(/^restored\//, "");
    if (fs.existsSync(path.join(SRC_ROOT, targetRel))) {
      promotedToTarget.set(rel, targetRel);
    }
  }

  // Build a reverse map from inferred restored paths to existing src targets.
  // This lets us resolve imports even when the restored source was deleted.
  const restoredToExistingTarget = new Map();
  for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
    if (typeof entry !== "string") continue;
    if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
    const inferred = inferRestoredTarget(entry.replace(/\\/g, "/"));
    if (inferred) restoredToExistingTarget.set(inferred, entry.replace(/\\/g, "/"));
  }
  // Promotion map entries override inference.
  for (const [rawRel, targetRel] of Object.entries(promotionMap)) {
    if (fs.existsSync(path.join(SRC_ROOT, targetRel))) {
      const rel = rawRel.replace(/^restored\//, "");
      restoredToExistingTarget.set(rel, targetRel);
    }
  }

  // Add directory aliases so directory imports (e.g. ../utils/score-query-match)
  // resolve to the corresponding index file.
  for (const [rel, target] of [...restoredToExistingTarget.entries()]) {
    const dirAlias = rel.replace(/\/index\.(ts|tsx|js|jsx)$/, "");
    if (dirAlias !== rel && !restoredToExistingTarget.has(dirAlias)) {
      restoredToExistingTarget.set(dirAlias, target);
    }
  }

  const batch = new Map(); // restoredRel -> { source, targetRel }
  const unresolved = new Map(); // restoredRel -> Set(importPath)

  function getTarget(rel) {
    if (batch.has(rel)) return batch.get(rel).targetRel;
    if (promotedToTarget.has(rel)) return promotedToTarget.get(rel);
    const source = readSource(rel);
    if (!source) return null;
    const inferred = inferTarget(rel, source, promotionMap);
    return inferred;
  }

  function addFile(rel) {
    if (batch.has(rel) || promotedToTarget.has(rel)) return;
    const source = readSource(rel);
    if (!source) {
      console.warn(`Source not found: restored/${rel}`);
      return;
    }
    const targetRel = inferTarget(rel, source, promotionMap);
    batch.set(rel, { source, targetRel });
  }

  // Initial seed.
  for (const rel of seedFiles) addFile(rel);

  // Iterate until closure is stable.
  let changed = true;
  while (changed) {
    changed = false;
    for (const [rel, { source }] of batch) {
      for (const imp of getImports(source)) {
        if (
          BUILTIN_RE.test(imp) ||
          SAFE_EXTERNAL.has(imp) ||
          imp.startsWith("@shikijs/langs/")
        )
          continue;
        if (!imp.startsWith("./") && !imp.startsWith("../")) continue;
        const resolvedRel = resolveRestoredImport(imp, rel);
        if (!resolvedRel) {
          // Could be a file whose restored source was deleted but which
          // already exists in src. Look it up by basename.
          const importBase = normalizeName(imp);
          let found = null;
          for (const [promotedRel, targetRel] of promotedToTarget) {
            if (normalizeName(promotedRel) === importBase) {
              found = targetRel;
              break;
            }
          }
          if (!found) {
            for (const [existingRel, targetRel] of restoredToExistingTarget) {
              if (normalizeName(existingRel) === importBase) {
                found = targetRel;
                break;
              }
            }
          }
          if (!found) {
            if (!unresolved.has(rel)) unresolved.set(rel, new Set());
            unresolved.get(rel).add(imp);
          }
          continue;
        }
        if (!batch.has(resolvedRel) && !promotedToTarget.has(resolvedRel)) {
          addFile(resolvedRel);
          changed = true;
        }
      }
    }
  }

  // Rewrite imports for every file in the batch.
  const batchTargets = new Map(); // restoredRel -> targetRel
  for (const [rel, { targetRel }] of batch) batchTargets.set(rel, targetRel);

  function findTargetForImport(resolvedRel, importPath) {
    if (resolvedRel) {
      if (batchTargets.has(resolvedRel)) return batchTargets.get(resolvedRel);
      if (promotedToTarget.has(resolvedRel))
        return promotedToTarget.get(resolvedRel);
      if (restoredToExistingTarget.has(resolvedRel))
        return restoredToExistingTarget.get(resolvedRel);
    }
    // Fallback by basename for files whose restored source is gone.
    const importBase = normalizeName(importPath);
    for (const [promotedRel, targetRel] of promotedToTarget) {
      if (normalizeName(promotedRel) === importBase) return targetRel;
    }
    for (const [batchRel, targetRel] of batchTargets) {
      if (normalizeName(batchRel) === importBase) return targetRel;
    }
    for (const [existingRel, targetRel] of restoredToExistingTarget) {
      if (normalizeName(existingRel) === importBase) return targetRel;
    }
    return null;
  }

  const promoted = [];
  const skipped = [];

  for (const [rel, { source, targetRel }] of batch) {
    const targetAbs = path.join(SRC_ROOT, targetRel);
    if (fs.existsSync(targetAbs)) {
      skipped.push({ rel, reason: `target already exists: ${targetRel}` });
      continue;
    }

    const lineCount = source.split(/\n/).length;
    let newSource = source;
    if (lineCount > 500 && !/^\/\/\s*@ts-nocheck/m.test(newSource)) {
      newSource = "// @ts-nocheck\n" + newSource;
    }

    newSource = newSource.replace(importRe, (match, importPath) => {
      if (
        BUILTIN_RE.test(importPath) ||
        SAFE_EXTERNAL.has(importPath) ||
        importPath.startsWith("@shikijs/langs/") ||
        (!importPath.startsWith("./") && !importPath.startsWith("../"))
      ) {
        return match;
      }
      const resolvedRel = resolveRestoredImport(importPath, rel);
      const targetForImport = findTargetForImport(resolvedRel, importPath);
      if (!targetForImport) {
        // Leave unchanged; will be reported as unresolved.
        return match;
      }
      const targetDir = path.dirname(targetAbs);
      const importAbs = path.join(SRC_ROOT, targetForImport);
      let newRel = path.relative(targetDir, importAbs);
      if (!newRel.startsWith(".")) newRel = "./" + newRel;
      newRel = newRel.replace(/\\/g, "/").replace(/\.(ts|tsx|js|jsx)$/, "");
      const idx = match.indexOf(importPath);
      return match.slice(0, idx) + newRel + match.slice(idx + importPath.length);
    });

    // Verify all relative imports resolve.
    const stillUnresolved = [];
    for (const imp of getImports(newSource)) {
      if (
        BUILTIN_RE.test(imp) ||
        SAFE_EXTERNAL.has(imp) ||
        imp.startsWith("@shikijs/langs/")
      )
        continue;
      if (!imp.startsWith("./") && !imp.startsWith("../")) continue;
      const targetDir = path.dirname(targetAbs);
      const resolved = path.resolve(targetDir, imp);
      const exists = possibleExtensions(resolved).some((p) => fs.existsSync(p));
      if (!exists) stillUnresolved.push(imp);
    }

    if (stillUnresolved.length > 0) {
      skipped.push({
        rel,
        reason: `unresolved relative imports: ${stillUnresolved.join(", ")}`,
      });
      continue;
    }

    fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
    fs.writeFileSync(targetAbs, newSource, "utf8");
    promotionMap[`restored/${rel}`] = targetRel;
    promoted.push({ rel, targetRel });
  }

  savePromotionMap(promotionMap);

  console.log(`Promoted ${promoted.length} files:`);
  for (const { rel, targetRel } of promoted) {
    console.log(`  ${rel} -> ${targetRel}`);
  }
  if (skipped.length > 0) {
    console.log(`\nSkipped ${skipped.length} files:`);
    for (const { rel, reason } of skipped) {
      console.log(`  ${rel}: ${reason}`);
    }
  }
  if (unresolved.size > 0) {
    console.log(`\nUnresolved imports during closure discovery:`);
    for (const [rel, imps] of unresolved) {
      console.log(`  ${rel}: ${[...imps].join(", ")}`);
    }
  }
}

main();
