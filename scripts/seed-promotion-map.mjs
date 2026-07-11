import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = new URL("..", import.meta.url).pathname;
const RESTORED_ROOT = path.join(ROOT, "restored");
const SRC_ROOT = path.join(ROOT, "src");
const PROMOTION_MAP_PATH = path.join(ROOT, "scripts", "promotion-map.json");

function hashString(str) { let h=0; for (let i=0;i<str.length;i++){ h=(h<<5)-h+str.charCodeAt(i); h|=0;} return h.toString(16); }

// Get deleted restored files from git
const status = spawnSync("git", ["status", "--short"], { cwd: ROOT, encoding: "utf8" }).stdout;
const deletedRestored = status
  .split("\n")
  .filter((line) => line[1] === "D" && line.includes("restored/"))
  .map((line) => line.slice(3).trim());

console.log(`Found ${deletedRestored.length} deleted restored files`);

// Index src files by content hash
const srcByContent = new Map();
for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
  if (typeof entry !== "string") continue;
  if (!/\.(ts|tsx|js|jsx)$/.test(entry)) continue;
  try {
    const source = fs.readFileSync(path.join(SRC_ROOT, entry), "utf8");
    const h = hashString(source);
    if (!srcByContent.has(h)) srcByContent.set(h, []);
    srcByContent.get(h).push(entry);
  } catch {}
}

const map = {};
let matched = 0;
for (const rel of deletedRestored) {
  // Get original content from git
  const result = spawnSync("git", ["show", `HEAD:${rel}`], { cwd: ROOT, encoding: "utf8" });
  if (result.status !== 0) continue;
  const source = result.stdout;
  const h = hashString(source);
  const srcMatches = srcByContent.get(h);
  if (srcMatches && srcMatches.length === 1) {
    map[rel] = srcMatches[0];
    matched++;
  }
}

console.log(`Matched ${matched} by exact content hash`);

// For files not matched by content (imports were rewritten), try to find by basename + directory heuristic
for (const rel of deletedRestored) {
  if (map[rel]) continue;
  const basename = path.basename(rel);
  const dirHint = path.dirname(rel); // e.g. runtime, boundaries, utils
  // Search src for same basename
  const candidates = [];
  for (const entry of fs.readdirSync(SRC_ROOT, { recursive: true })) {
    if (typeof entry !== "string") continue;
    if (path.basename(entry) === basename && /\.(ts|tsx|js|jsx)$/.test(entry)) {
      candidates.push(entry);
    }
  }
  if (candidates.length === 1) {
    map[rel] = candidates[0];
    console.log(`Heuristic match: ${rel} -> ${candidates[0]}`);
  } else if (candidates.length > 1) {
    console.log(`Ambiguous basename ${basename} for ${rel}: ${candidates.join(", ")}`);
  }
}

fs.writeFileSync(PROMOTION_MAP_PATH, JSON.stringify(map, null, 2), "utf8");
console.log(`Wrote ${Object.keys(map).length} entries to ${PROMOTION_MAP_PATH}`);
