// Promote a closed restored directory cluster into src/ under a target FSD path.
// Usage: bun scripts/promote-cluster.mjs <restored-dir> <src-target-dir>
// Example: bun scripts/promote-cluster.mjs vendor/lodash-merge renderer/shared/lib/lodash-merge
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
  /(?:import\b[^"']*from\s*["']|export\b[^"']*from\s*["']|import\s*\(\s*["']|\\.\s*then\s*\(\s*\(\s*\)\s*=>\s*import\s*\(\s*["'])([^"']+)["']/g;

function getImports(source) {
  const imports = new Set();
  let m;
  while ((m = importRe.exec(source))) imports.add(m[1]);
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
  if (rel.startsWith("sites/")) return check(`renderer/features/sites/${rel.slice(6)}`);
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

function rewriteImport(importPath, sourceRel, targetRel, restoredDir, targetBaseDir) {
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return importPath;

  // If the import points to another file within the same cluster, compute the
  // new relative path directly without requiring it to already exist in src/.
  const fromDir = path.join(RESTORED_ROOT, path.dirname(sourceRel));
  const resolved = path.resolve(fromDir, importPath);
  if (resolved.startsWith(restoredDir + path.sep)) {
    const withinCluster = path.relative(restoredDir, resolved);
    const targetFile = path.join(targetBaseDir, withinCluster);
    const targetDir = path.dirname(path.join(SRC_ROOT, targetRel));
    let newRel = path.relative(targetDir, targetFile);
    if (!newRel.startsWith(".")) newRel = "./" + newRel;
    newRel = newRel.replace(/\.(ts|tsx|js|jsx)$/, "");
    return newRel;
  }

  const srcMatch = findSrcForImport(importPath, sourceRel);
  if (!srcMatch) return importPath;
  const targetDir = path.dirname(path.join(SRC_ROOT, targetRel));
  const targetFile = path.join(SRC_ROOT, srcMatch);
  let newRel = path.relative(targetDir, targetFile);
  if (!newRel.startsWith(".")) newRel = "./" + newRel;
  newRel = newRel.replace(/\.(ts|tsx|js|jsx)$/, "");
  return newRel;
}

function verifyFromTarget(newSource, targetAbs, restoredDir, targetBaseDir) {
  const imports = getImports(newSource);
  const unresolved = [];
  for (const imp of imports) {
    if (
      BUILTIN_RE.test(imp) ||
      SAFE_EXTERNAL.has(imp) ||
      imp.startsWith("@shikijs/langs/")
    )
      continue;
    if (!imp.startsWith("./") && !imp.startsWith("../")) {
      unresolved.push(imp);
      continue;
    }
    const targetDir = path.dirname(targetAbs);
    const resolved = path.resolve(targetDir, imp);
    // Within-cluster imports are only safe if the source file actually exists
    // inside the restored cluster; otherwise it will not be created.
    if (resolved.startsWith(targetBaseDir + path.sep)) {
      const withinCluster = path.relative(targetBaseDir, resolved);
      const sourceFile = path.join(restoredDir, withinCluster);
      const sourceExists = possibleExtensions(sourceFile).some((e) =>
        fs.existsSync(e),
      );
      if (sourceExists) continue;
      // The within-cluster target may already exist in src from a prior promotion.
      const targetExists = possibleExtensions(resolved).some((e) =>
        fs.existsSync(e),
      );
      if (targetExists) continue;
    }
    const exists = possibleExtensions(resolved).some((e) => fs.existsSync(e));
    if (!exists) unresolved.push(imp);
  }
  return unresolved;
}

function collectFiles(dir) {
  const files = [];
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) files.push(full);
    }
  }
  walk(dir);
  return files;
}

const [restoredDirArg, srcTargetArg] = process.argv.slice(2);
if (!restoredDirArg || !srcTargetArg) {
  console.error("Usage: bun scripts/promote-cluster.mjs <restored-dir> <src-target-dir>");
  console.error("Example: bun scripts/promote-cluster.mjs vendor/lodash-merge renderer/shared/lib/lodash-merge");
  process.exit(1);
}

const restoredDir = path.join(RESTORED_ROOT, restoredDirArg);
const targetBaseDir = path.join(SRC_ROOT, srcTargetArg);

if (!fs.existsSync(restoredDir)) {
  console.error(`Restored directory not found: ${restoredDir}`);
  process.exit(1);
}

const files = collectFiles(restoredDir);
const fileData = [];
const skipped = [];

// First pass: determine which files can be promoted based on external imports
// and target existence. Within-cluster imports are checked in the second pass.
for (const file of files) {
  const rel = path.relative(RESTORED_ROOT, file);
  const source = restoredRelToSource.get(rel);
  if (!source) {
    skipped.push({ rel, reason: "could not read source" });
    continue;
  }

  const withinCluster = path.relative(restoredDir, file);
  const targetAbs = path.join(targetBaseDir, withinCluster);
  const targetRel = path.relative(SRC_ROOT, targetAbs);

  if (fs.existsSync(targetAbs)) {
    skipped.push({ rel, reason: `target already exists: ${targetRel}` });
    continue;
  }

  const newSource = source.replace(importRe, (match, importPath) => {
    const newPath = rewriteImport(importPath, rel, targetRel, restoredDir, targetBaseDir);
    const pathStart = match.indexOf(importPath);
    return match.slice(0, pathStart) + newPath + match.slice(pathStart + importPath.length);
  });

  const unresolved = verifyFromTarget(newSource, targetAbs, restoredDir, targetBaseDir);
  if (unresolved.length > 0) {
    skipped.push({ rel, reason: `unresolved after rewrite: ${unresolved.join(", ")}` });
    continue;
  }

  fileData.push({ rel, file, targetAbs, targetRel, newSource });
}

// Build a set of files that passed the first pass.
const promotableRels = new Set(fileData.map((d) => d.rel));

// Second pass: a file is only safe to promote if every file it imports within
// the same cluster is also in promotableRels. Iterate until stable.
let changed = true;
while (changed) {
  changed = false;
  for (let i = fileData.length - 1; i >= 0; i--) {
    const { rel, newSource, targetAbs } = fileData[i];
    const imports = getImports(newSource);
    for (const imp of imports) {
      if (!imp.startsWith("./") && !imp.startsWith("../")) continue;
      const targetDir = path.dirname(targetAbs);
      const resolved = path.resolve(targetDir, imp);
      if (!resolved.startsWith(targetBaseDir + path.sep)) continue;
      // Map the target-side relative import back to the restored source file.
      const restoredSourceFile = path.resolve(
        RESTORED_ROOT,
        rel.replace(/\.(ts|tsx|js|jsx)$/, ""),
        "..",
        imp,
      );
      const sourceRel = path.relative(RESTORED_ROOT, restoredSourceFile);
      const sourceExists = possibleExtensions(sourceRel).some((p) =>
        fs.existsSync(path.join(RESTORED_ROOT, p)),
      );
      const sourceRelVariants = new Set(possibleExtensions(sourceRel));
      const withinClusterTarget = path.join(
        targetBaseDir,
        path.relative(restoredDir, restoredSourceFile),
      );
      const sourcePromoted =
        [...promotableRels].some((r) => sourceRelVariants.has(r)) ||
        [...sourceRelVariants].some((r) =>
          fs.existsSync(path.join(SRC_ROOT, findFsdTarget(r) || r)),
        ) ||
        possibleExtensions(withinClusterTarget).some((p) => fs.existsSync(p));
      if (!sourcePromoted) {
        skipped.push({
          rel,
          reason: `imports missing or skipped within-cluster file: ${imp}`,
        });
        promotableRels.delete(rel);
        fileData.splice(i, 1);
        changed = true;
        break;
      }
    }
  }
}

const promoted = [];
for (const { rel, file, targetAbs, targetRel, newSource } of fileData) {
  fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
  fs.writeFileSync(targetAbs, newSource, "utf8");
  fs.unlinkSync(file);
  promotionMap[`restored/${rel}`] = targetRel;
  promoted.push({ rel, targetRel });
}

// Remove empty directories left behind
function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) removeEmptyDirs(full);
  }
  if (fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}
removeEmptyDirs(restoredDir);

savePromotionMap(promotionMap);

console.log(`Promoted ${promoted.length} files from ${restoredDirArg} to ${srcTargetArg}:`);
for (const { rel, targetRel } of promoted) {
  console.log(`  ${rel} -> ${targetRel}`);
}
if (skipped.length > 0) {
  console.log(`\nSkipped ${skipped.length} files:`);
  for (const { rel, reason } of skipped) {
    console.log(`  ${rel}: ${reason}`);
  }
}
