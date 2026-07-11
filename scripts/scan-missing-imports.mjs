import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const RESTORED = path.join(ROOT, "restored");
const SRC = path.join(ROOT, "src");
const PROMO = path.join(ROOT, "scripts/promotion-map.json");

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
const importRe =
  /(?:import\b[^"']*from\s*["']|export\b[^"']*from\s*["']|import\s*\(\s*["']|\.\s*then\s*\(\s*\(\s*\)\s*=>\s*import\s*\(\s*["'])([^"']+)["']/g;

function possibleExtensions(rel) {
  return [
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
}

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) out.push(full);
  }
  return out;
}

const srcFiles = walk(SRC).map((f) => path.relative(SRC, f));
const srcSet = new Set(srcFiles);
const promo = JSON.parse(fs.readFileSync(PROMO, "utf8"));
const restoredToSrc = new Map();
for (const [k, v] of Object.entries(promo)) {
  const restoredRel = k.replace(/^restored\//, "");
  if (!restoredToSrc.has(restoredRel)) restoredToSrc.set(restoredRel, v.startsWith("src/") ? v.slice(4) : v);
}

function findFsdTarget(rel) {
  const mappings = [
    ["runtime/", "renderer/shared/runtime/"],
    ["boundaries/current-ref/", "renderer/shared/lib/"],
    ["boundaries/", "renderer/shared/boundaries/"],
    ["utils/", "renderer/shared/lib/"],
    ["ui/", "renderer/shared/ui/"],
    ["icons/", "renderer/shared/icons/"],
    ["i18n/", "renderer/shared/i18n/"],
    ["inbox/", "renderer/shared/lib/inbox/"],
    ["host/", "renderer/shared/runtime/host/"],
    ["vendor/", "renderer/shared/vendor/"],
    ["features/", "renderer/features/"],
    ["app-shell/", "renderer/features/app-shell/"],
    ["threads/", "renderer/entities/thread/"],
    ["github/", "renderer/features/github/"],
    ["projects/", "renderer/features/projects/"],
    ["plugins/", "renderer/features/plugins/"],
    ["settings/", "renderer/features/settings/"],
    ["onboarding/", "renderer/features/onboarding/"],
    ["composer/", "renderer/features/composer/"],
    ["conversations/", "renderer/entities/conversation/"],
    ["home/", "renderer/entities/home/"],
    ["appgen/", "renderer/features/appgen/"],
    ["browser/", "renderer/features/browser/"],
    ["sidebar/", "renderer/features/sidebar/"],
    ["connectors/", "renderer/features/connectors/"],
    ["config/", "renderer/features/config/"],
    ["auth/", "renderer/features/auth/"],
    ["environments/", "renderer/features/environments/"],
    ["collaboration/", "renderer/features/collaboration/"],
    ["markdown/", "renderer/features/markdown/"],
    ["remote/", "renderer/features/remote/"],
    ["app-server/", "renderer/features/app-server/"],
    ["main/", ""],
  ];
  for (const [prefix, targetPrefix] of mappings) {
    if (rel.startsWith(prefix)) {
      const mapped = targetPrefix + rel.slice(prefix.length);
      for (const p of possibleExtensions(mapped)) {
        if (srcSet.has(p)) return p;
        if (restoredToSrc.has(p)) {
          const mapped2 = restoredToSrc.get(p);
          if (srcSet.has(mapped2)) return mapped2;
        }
      }
    }
  }
  return null;
}

function findSrcForImport(importPath, fromFileRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return null;
  const fromDir = path.join(RESTORED, path.dirname(fromFileRel));
  const resolved = path.resolve(fromDir, importPath);
  const rel = path.relative(RESTORED, resolved).replace(/\\/g, "/");
  for (const p of possibleExtensions(rel)) {
    if (srcSet.has(p)) return p;
    if (restoredToSrc.has(p)) {
      const mapped = restoredToSrc.get(p);
      if (srcSet.has(mapped)) return mapped;
    }
    const fsd = findFsdTarget(p);
    if (fsd) return fsd;
  }
  return null;
}

const restoredFiles = walk(RESTORED);
const missingCounts = new Map();
for (const file of restoredFiles) {
  const rel = path.relative(RESTORED, file).replace(/\\/g, "/");
  const source = fs.readFileSync(file, "utf8");
  let m;
  while ((m = importRe.exec(source))) {
    const imp = m[1];
    if (BUILTIN_RE.test(imp) || SAFE_EXTERNAL.has(imp)) continue;
    if (!imp.startsWith("./") && !imp.startsWith("../")) continue;
    const resolved = findSrcForImport(imp, rel);
    if (!resolved) {
      const fromDir = path.join(RESTORED, path.dirname(rel));
      const abs = path.resolve(fromDir, imp);
      const targetRel = path.relative(RESTORED, abs).replace(/\\/g, "/");
      missingCounts.set(targetRel, (missingCounts.get(targetRel) || 0) + 1);
    }
  }
}

const sorted = [...missingCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 80);
console.log("Top 80 missing import targets in restored/ (by reference count):");
for (const [k, v] of sorted) console.log(v.toString().padStart(4), k);
