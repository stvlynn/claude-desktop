// Promote a cluster of restored files into src, automatically creating minimal
// stubs for any relative imports that do not have restored source, then rewrite
// imports and update scripts/promotion-map.json.
//
// Usage:
//   bun scripts/promote-with-stubs.mjs <files.json>

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
  "roughjs",
  "katex",
  "dayjs",
  "@shikijs/langs",
  "@shikijs/themes",
  "react-router",
  "cmdk",
  "@lottiefiles/dotlottie-react",
  "fuse.js",
  "file-type",
  "rrule",
  "better-sqlite3",
  "@sentry/electron",
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

function targetExists(targetRel) {
  return possibleExtensions(path.join(SRC_ROOT, targetRel)).some((p) =>
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

function inferTarget(rel) {
  // Trust the path prefix first.
  if (rel.startsWith("shared/")) return `shared/${rel.slice(7)}`;
  if (rel.startsWith("entities/")) return `renderer/entities/${rel.slice(9)}`;
  if (rel.startsWith("runtime/current-app-initial/"))
    return `renderer/shared/runtime/current-app-initial/${rel.slice(28)}`;
  if (rel.startsWith("runtime/"))
    return `renderer/shared/runtime/${rel.slice(8)}`;
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

  if (rel.startsWith("conversations/")) {
    const base = path.basename(rel);
    if (base.includes("-runtime") || base.includes("-state"))
      return `renderer/shared/conversations/${rel.slice(14)}`;
    return `renderer/entities/conversation/${rel.slice(14)}`;
  }

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

  if (rel.startsWith("home/"))
    return `renderer/entities/home/${rel.slice(5)}`;
  if (rel.startsWith("main/")) return rel;

  return `renderer/features/${rel}`;
}

function inferStubExtension(targetRel) {
  if (path.extname(targetRel)) return targetRel;
  // Shared / vendor / runtime / boundaries / lib files are almost always .ts.
  if (
    targetRel.startsWith("renderer/shared/") ||
    targetRel.startsWith("shared/") ||
    targetRel.startsWith("renderer/entities/") // entities can be either, .tsx is safe
  ) {
    return targetRel + ".ts";
  }
  return targetRel + ".tsx";
}

function getImports(source) {
  const imports = new Set();
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(source))) imports.add(m[1]);
  return [...imports];
}

function getImportDetails(source) {
  const details = [];
  const importFromRe = /import\s+([\s\S]*?)\s+from\s*["']([^"']+)["']/g;
  const exportFromRe = /export\s+([\s\S]*?)\s+from\s*["']([^"']+)["']/g;
  const exportAllFromRe = /export\s*\*\s+from\s*["']([^"']+)["']/g;
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
    const [, local, , imported] =
      trimmed.match(/^(\w+)(\s+as\s+(\w+))?$/i) ?? [];
    if (!local) continue;
    names.push(imported ?? local);
  }
  return names;
}

function resolveRestoredImport(importPath, fromRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../"))
    return null;
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
    console.error("Usage: bun scripts/promote-with-stubs.mjs <files.json>");
    process.exit(1);
  }

  const seedFiles = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const promotionMap = loadPromotionMap();

  const promotedToTarget = new Map();
  for (const [rawRel, targetRel] of Object.entries(promotionMap)) {
    const rel = rawRel.replace(/^restored\//, "");
    if (targetExists(targetRel)) {
      promotedToTarget.set(rel, targetRel);
    }
  }

  // Reverse map of existing src files back to restored paths.
  const restoredToExistingTarget = new Map();
  for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
    if (typeof entry !== "string") continue;
    if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
    const inferred = inferRestoredTarget(entry.replace(/\\/g, "/"));
    if (inferred) restoredToExistingTarget.set(inferred, entry.replace(/\\/g, "/"));
  }
  for (const [rawRel, targetRel] of Object.entries(promotionMap)) {
    if (targetExists(targetRel)) {
      const rel = rawRel.replace(/^restored\//, "");
      restoredToExistingTarget.set(rel, targetRel);
    }
  }
  for (const [rel, target] of [...restoredToExistingTarget.entries()]) {
    const dirAlias = rel.replace(/\/index\.(ts|tsx|js|jsx)$/, "");
    if (dirAlias !== rel && !restoredToExistingTarget.has(dirAlias)) {
      restoredToExistingTarget.set(dirAlias, target);
    }
  }

  // Build closure and collect stubs.
  const queue = [...seedFiles];
  const visited = new Set();
  const filesToPromote = new Map(); // restoredRel -> targetRel
  const stubs = new Map(); // restoredRel -> { targetRel, default: boolean, named: Set<string> }

  while (queue.length > 0) {
    const rel = queue.shift();
    if (visited.has(rel)) continue;
    visited.add(rel);

    const source = readSource(rel);
    if (!source) {
      console.warn(`Seed/dependency source not found: restored/${rel}`);
      continue;
    }

    const targetRel = inferTarget(rel);
    if (!promotedToTarget.has(rel) && !filesToPromote.has(rel)) {
      filesToPromote.set(rel, targetRel);
    }

    for (const detail of getImportDetails(source)) {
      const imp = detail.source;
      if (
        BUILTIN_RE.test(imp) ||
        SAFE_EXTERNAL.has(imp) ||
        imp.startsWith("@shikijs/langs/")
      )
        continue;
      if (!imp.startsWith("./") && !imp.startsWith("../")) continue;

      const resolvedRel = resolveRestoredImport(imp, rel);
      if (resolvedRel) {
        if (
          !visited.has(resolvedRel) &&
          !promotedToTarget.has(resolvedRel) &&
          !filesToPromote.has(resolvedRel)
        ) {
          queue.push(resolvedRel);
        }
        continue;
      }

      // Missing restored source -> stub target.
      const fromDir = path.dirname(path.join(RESTORED_ROOT, rel));
      const resolvedAbs = path.resolve(fromDir, imp);
      let importRestoredRel = path.relative(RESTORED_ROOT, resolvedAbs);
      if (importRestoredRel.startsWith("..")) {
        // Should not happen for relative imports inside restored, but skip if it does.
        continue;
      }
      // Normalize extensionless path so the map key is stable.
      importRestoredRel = importRestoredRel.replace(/\.(ts|tsx|js|jsx)$/, "");

      let stubTarget = inferTarget(importRestoredRel);
      stubTarget = inferStubExtension(stubTarget);

      if (!stubs.has(importRestoredRel)) {
        // If an existing promoted file already covers this, no new stub needed.
        if (
          promotedToTarget.has(importRestoredRel) ||
          restoredToExistingTarget.has(importRestoredRel) ||
          targetExists(stubTarget)
        ) {
          continue;
        }
        stubs.set(importRestoredRel, {
          targetRel: stubTarget,
          default: false,
          named: new Set(),
        });
      }

      const stub = stubs.get(importRestoredRel);
      const spec = detail.specifiers;
      if (spec === "*") {
        // Re-export all; no specific names needed.
      } else if (spec.startsWith("*")) {
        stub.default = true;
      } else {
        const named = parseNamedSpecifiers(spec);
        if (named) {
          for (const n of named) stub.named.add(n);
        } else {
          // Default import.
          const id = spec.trim();
          if (id) stub.default = true;
        }
      }
    }
  }

  console.log(`Closure: ${filesToPromote.size} restored files to promote`);
  console.log(`Stubs to create: ${stubs.size}`);

  // Write stubs.
  const stubEntries = [];
  for (const [rel, stub] of stubs) {
    const targetAbs = path.join(SRC_ROOT, stub.targetRel);
    if (fs.existsSync(targetAbs)) {
      console.log(`Stub target already exists, skipping: ${stub.targetRel}`);
      continue;
    }
    const lines = ["// @ts-nocheck"];
    if (stub.default) {
      lines.push("export default undefined as never;");
    }
    for (const name of [...stub.named].sort()) {
      lines.push(`export const ${name} = undefined as never;`);
    }
    if (!stub.default && stub.named.size === 0) {
      lines.push("export default undefined as never;");
    }
    fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
    fs.writeFileSync(targetAbs, lines.join("\n") + "\n", "utf8");
    promotionMap[`restored/${rel}`] = stub.targetRel;
    promotedToTarget.set(rel, stub.targetRel);
    restoredToExistingTarget.set(rel, stub.targetRel);
    stubEntries.push({ rel, targetRel: stub.targetRel });
  }

  // Helper to find a target for a resolved restored import.
  function findTargetForImport(resolvedRel, importPath) {
    if (resolvedRel) {
      if (filesToPromote.has(resolvedRel))
        return filesToPromote.get(resolvedRel);
      if (promotedToTarget.has(resolvedRel))
        return promotedToTarget.get(resolvedRel);
      if (restoredToExistingTarget.has(resolvedRel))
        return restoredToExistingTarget.get(resolvedRel);
    }
    const importBase = normalizeName(importPath);
    for (const [promotedRel, targetRel] of promotedToTarget) {
      if (normalizeName(promotedRel) === importBase) return targetRel;
    }
    for (const [batchRel, targetRel] of filesToPromote) {
      if (normalizeName(batchRel) === importBase) return targetRel;
    }
    for (const [existingRel, targetRel] of restoredToExistingTarget) {
      if (normalizeName(existingRel) === importBase) return targetRel;
    }
    return null;
  }

  // Promote restored files. We write stubs first so all targets exist.
  const promoted = [];
  const skipped = [];

  for (const [rel, targetRel] of filesToPromote) {
    const targetAbs = path.join(SRC_ROOT, targetRel);
    if (fs.existsSync(targetAbs)) {
      skipped.push({ rel, reason: `target already exists: ${targetRel}` });
      continue;
    }

    const source = readSource(rel);
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

    fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
    fs.writeFileSync(targetAbs, newSource, "utf8");
    promotionMap[`restored/${rel}`] = targetRel;
    promoted.push({ rel, targetRel });
  }

  savePromotionMap(promotionMap);

  console.log(`\nPromoted ${promoted.length} restored files:`);
  for (const { rel, targetRel } of promoted) {
    console.log(`  ${rel} -> ${targetRel}`);
  }
  if (stubEntries.length > 0) {
    console.log(`\nCreated ${stubEntries.length} stubs:`);
    for (const { rel, targetRel } of stubEntries) {
      console.log(`  ${rel} -> ${targetRel}`);
    }
  }
  if (skipped.length > 0) {
    console.log(`\nSkipped ${skipped.length} files (target already exists):`);
    for (const { rel, reason } of skipped) {
      console.log(`  ${rel}: ${reason}`);
    }
  }
}

function inferRestoredTarget(targetRel) {
  if (targetRel.startsWith("shared/")) return targetRel; // no restored mirror for shared
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
  return null;
}

main();
