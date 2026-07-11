import fs from "node:fs";
import path from "node:path";

const RESTORED_ROOT = new URL("../restored", import.meta.url).pathname;
const SRC_ROOT = new URL("../src", import.meta.url).pathname;

function extractProvenanceHeader(source) {
  const firstLines = source.slice(0, 500);
  const match = firstLines.match(/Restored from\s+([^\n]+)/);
  return match ? match[1].trim() : null;
}
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

const clusters = ["host","i18n","inbox","thread-summary","browser/sidebar-manager","features/popcorn","vendor/lodash-is-equal","vendor/lodash-merge"];
for (const cluster of clusters){
  const clusterDir = path.join(RESTORED_ROOT, cluster);
  if (!fs.existsSync(clusterDir)) { console.log(`MISSING ${cluster}`); continue; }
  const files = [];
  function walk(dir){ for (const entry of fs.readdirSync(dir,{withFileTypes:true})){ const full=path.join(dir,entry.name); if (entry.isDirectory()) walk(full); else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) files.push(full); } }
  walk(clusterDir);
  console.log(`\n=== ${cluster} (${files.length} files) ===`);
  for (const file of files){
    const rel = path.relative(RESTORED_ROOT, file);
    const source = fs.readFileSync(file,"utf8");
    const header = extractProvenanceHeader(source);
    const base = path.basename(rel);
    const contentHash = hashString(source);
    let mapping = null;
    if (srcByContent.has(contentHash)) mapping = srcByContent.get(contentHash)[0];
    else if (header){ const key=`${base}::${header}`; const matches=srcByBaseProvenance.get(key); if (matches) mapping = matches[0]; }
    console.log(`  ${rel} -> ${mapping || "(no mapping)"}`);
  }
}
