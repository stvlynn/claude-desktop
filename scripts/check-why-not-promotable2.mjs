import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;
const PROMOTION_MAP_PATH = new URL("./promotion-map.json", import.meta.url).pathname;

const SAFE_EXTERNAL = new Set(["react","react/jsx-runtime","react/jsx-dev-runtime","react-dom","react-dom/client","react-dom/server","react-intl","framer-motion","@floating-ui/react-dom","@radix-ui/react-context-menu","@radix-ui/react-dialog","@radix-ui/react-dropdown-menu","@radix-ui/react-popover","mime-types","electron","zod","clsx","jotai"]);
const BUILTIN_RE = /^(node:|bun:)/;

function extractProvenanceHeader(source) { const firstLines = source.slice(0, 500); const match = firstLines.match(/Restored from\s+([^\n]+)/); return match ? match[1].trim() : null; }
function hashString(str) { let h=0; for (let i=0;i<str.length;i++){ h=(h<<5)-h+str.charCodeAt(i); h|=0;} return h.toString(16); }

const srcByContent=new Map(), srcByBaseProvenance=new Map();
for (const entry of fs.readdirSync(SRC_ROOT,{recursive:true})){
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  try {
    const source=fs.readFileSync(path.join(SRC_ROOT,entry),"utf8");
    const header=extractProvenanceHeader(source);
    const base=path.basename(entry);
    const contentHash=hashString(source);
    if (!srcByContent.has(contentHash)) srcByContent.set(contentHash,[]);
    srcByContent.get(contentHash).push(entry);
    if (header){ const key=`${base}::${header}`; if (!srcByBaseProvenance.has(key)) srcByBaseProvenance.set(key,[]); srcByBaseProvenance.get(key).push(entry); }
  } catch {}
}

const restoredFiles=[];
function walk(dir){ for (const entry of fs.readdirSync(dir,{withFileTypes:true})){ const full=path.join(dir,entry.name); if (entry.isDirectory()) walk(full); else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) restoredFiles.push(full); } }
walk(RESTORED_ROOT);

const importRe=/(?:import\b[^"']*from\s*["']|export\b[^"']*from\s*["']|import\s*\(\s*["']|\.\s*then\s*\(\s*\(\s*\)\s*=>\s*import\s*\(\s*["'])([^"']+)["']/g;
function getImports(source){ const imports=new Set(); let m; while ((m=importRe.exec(source))) imports.add(m[1]); return [...imports]; }
function possibleExtensions(rel){ if (path.extname(rel)) return [rel]; return [rel+".ts",rel+".tsx",rel+".js",rel+".jsx",path.join(rel,"index.ts"),path.join(rel,"index.tsx"),path.join(rel,"index.js"),path.join(rel,"index.jsx")]; }

const restoredRelToSource=new Map(), restoredToSrc=new Map();
for (const file of restoredFiles){
  const rel=path.relative(RESTORED_ROOT,file);
  const source=fs.readFileSync(file,"utf8");
  const header=extractProvenanceHeader(source);
  const base=path.basename(rel);
  restoredRelToSource.set(rel,source);
  const contentHash=hashString(source);
  if (srcByContent.has(contentHash)) restoredToSrc.set(rel,srcByContent.get(contentHash)[0]);
  else if (header){ const key=`${base}::${header}`; const matches=srcByBaseProvenance.get(key); if (matches) restoredToSrc.set(rel,matches[0]); }
}

// load promotion map
let promotionMap = {};
try { promotionMap = JSON.parse(fs.readFileSync(PROMOTION_MAP_PATH, "utf8")); } catch {}
for (const [restoredRel, srcRel] of Object.entries(promotionMap)) {
  if (!restoredToSrc.has(restoredRel)) restoredToSrc.set(restoredRel, srcRel);
}

function findSrcForImport(importPath,fromFileRel){
  if (!importPath.startsWith("./") && !importPath.startsWith("../")) return null;
  const fromDir=path.join(RESTORED_ROOT,path.dirname(fromFileRel));
  const resolved=path.resolve(fromDir,importPath);
  const rel=path.relative(RESTORED_ROOT,resolved);
  for (const p of possibleExtensions(rel)){
    if (fs.existsSync(path.join(SRC_ROOT,p))) return p;
    if (restoredToSrc.has(p)) return restoredToSrc.get(p);
  }
  return null;
}

function countUnresolved(rel){
  const source=restoredRelToSource.get(rel); if (!source) return {count:999,unresolved:[]};
  const unresolved=[];
  for (const imp of getImports(source)){
    if (BUILTIN_RE.test(imp) || SAFE_EXTERNAL.has(imp)) continue;
    if (!imp.startsWith("./") && !imp.startsWith("../")){ unresolved.push(imp); continue; }
    const match = findSrcForImport(imp,rel);
    if (!match) unresolved.push(imp);
  }
  return {count:unresolved.length,unresolved};
}

for (const rel of ["host/host-message-error-handlers.ts","i18n/locale-resolver.ts","inbox/automation-next-run-format.ts","vendor/lodash-is-equal/deep-equality.ts","vendor/lodash-merge/clone.ts","vendor/lodash-merge/deep-merge.ts"]){
  const {count,unresolved}=countUnresolved(rel);
  console.log(`${rel}: ${count} unresolved${unresolved.length?" -> "+unresolved.join(", "):""}`);
}
