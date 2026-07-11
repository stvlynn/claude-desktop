#!/usr/bin/env node
// Promote a single restored file into src/ under a target FSD path.
// Rewrites relative imports to point at existing src/ boundaries.
// Usage: bun scripts/promote-single-file.mjs <restored-file> <src-target-file>
// Example: bun scripts/promote-single-file.mjs auth/use-auth.tsx renderer/features/auth/use-auth.tsx
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
  "@radix-ui/react-popover",
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
  while ((m = importRe.exec(source))) imports.add(m[1]);
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

for (const entry of fs.readdirSync(RESTORED_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  const file = path.join(RESTORED_ROOT, entry);
  const source = fs.readFileSync(file, "utf8");
  restoredRelToSource.set(entry, source);
  const contentHash = hashString(source);
  if (srcByContent.has(contentHash)) restoredToSrc.set(entry, srcByContent.get(contentHash)[0]);
}

const promotionMap = loadPromotionMap();
for (const [rawRestoredRel, srcRel] of Object.entries(promotionMap)) {
  const restoredRel = rawRestoredRel.replace(/^restored\//, "");
  if (!restoredToSrc.has(restoredRel)) restoredToSrc.set(restoredRel, srcRel);
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h.toString(16);
}

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

function rewriteImport(importPath, sourceRel, targetRel) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return importPath;
  const srcMatch = findSrcForImport(importPath, sourceRel);
  if (!srcMatch) return importPath;
  const targetDir = path.dirname(path.join(SRC_ROOT, targetRel));
  const targetFile = path.join(SRC_ROOT, srcMatch);
  let newRel = path.relative(targetDir, targetFile);
  if (!newRel.startsWith(".")) newRel = "./" + newRel;
  newRel = newRel.replace(/\.(ts|tsx|js|jsx)$/, "");
  return newRel;
}

const [restoredFileArg, srcTargetArg] = process.argv.slice(2);
if (!restoredFileArg || !srcTargetArg) {
  console.error("Usage: bun scripts/promote-single-file.mjs <restored-file> <src-target-file>");
  console.error("Example: bun scripts/promote-single-file.mjs auth/use-auth.tsx renderer/features/auth/use-auth.tsx");
  process.exit(1);
}

const restoredFile = path.join(RESTORED_ROOT, restoredFileArg);
const targetAbs = path.join(SRC_ROOT, srcTargetArg);
const targetRel = srcTargetArg;

if (!fs.existsSync(restoredFile)) {
  console.error(`Restored file not found: ${restoredFile}`);
  process.exit(1);
}

if (fs.existsSync(targetAbs)) {
  console.error(`Target already exists: ${targetAbs}`);
  process.exit(1);
}

const source = fs.readFileSync(restoredFile, "utf8");
const newSource = source.replace(importRe, (match, importPath) => {
  const newPath = rewriteImport(importPath, restoredFileArg, targetRel);
  const pathStart = match.indexOf(importPath);
  return match.slice(0, pathStart) + newPath + match.slice(pathStart + importPath.length);
});

const unresolved = [];
for (const imp of getImports(newSource)) {
  if (BUILTIN_RE.test(imp) || SAFE_EXTERNAL.has(imp)) continue;
  if (!imp.startsWith("./") && !imp.startsWith("../")) {
    unresolved.push(imp);
    continue;
  }
  const targetDir = path.dirname(targetAbs);
  const resolved = path.resolve(targetDir, imp);
  const exists = possibleExtensions(resolved).some((e) => fs.existsSync(e));
  if (!exists) unresolved.push(imp);
}

if (unresolved.length > 0) {
  console.error(`Unresolved imports after rewrite: ${unresolved.join(", ")}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
fs.writeFileSync(targetAbs, newSource, "utf8");
fs.unlinkSync(restoredFile);
promotionMap[`restored/${restoredFileArg}`] = targetRel;
savePromotionMap(promotionMap);

console.log(`Promoted ${restoredFileArg} -> ${targetRel}`);
