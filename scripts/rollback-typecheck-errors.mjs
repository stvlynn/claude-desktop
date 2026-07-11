#!/usr/bin/env node
// Automatically roll back promoted files that cause typecheck errors.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = new URL("..", import.meta.url).pathname;
const PROMOTION_MAP_PATH = new URL("./promotion-map.json", import.meta.url).pathname;

function loadPromotionMap() {
  try { return JSON.parse(fs.readFileSync(PROMOTION_MAP_PATH, "utf8")); } catch { return {}; }
}

function savePromotionMap(map) {
  fs.writeFileSync(PROMOTION_MAP_PATH, JSON.stringify(map, null, 2), "utf8");
}

function runTypecheck() {
  const result = spawnSync("bun", ["run", "typecheck"], { cwd: ROOT, encoding: "utf8" });
  return { code: result.status, stdout: result.stdout, stderr: result.stderr };
}

function getErrorFiles(output) {
  const files = new Set();
  const re = /^(src\/[^:]+)\(/gm;
  let m;
  while ((m = re.exec(output))) {
    files.add(m[1]);
  }
  return [...files];
}

function rollback(srcRel) {
  // Find restored path from promotion map
  const map = loadPromotionMap();
  let restoredRel = null;
  for (const [rawRestored, src] of Object.entries(map)) {
    const srcWithPrefix = src.startsWith("src/") ? src : `src/${src}`;
    if (srcWithPrefix === srcRel) {
      restoredRel = rawRestored;
      break;
    }
  }
  if (!restoredRel) {
    console.log(`SKIP (no mapping): ${srcRel}`);
    return false;
  }
  const srcAbs = path.join(ROOT, srcRel);
  const result = spawnSync("git", ["checkout", "--", restoredRel], { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
  if (result.status !== 0) {
    console.error(`FAILED to restore ${restoredRel}: ${result.stderr}`);
    return false;
  }
  if (fs.existsSync(srcAbs)) fs.unlinkSync(srcAbs);
  console.log(`ROLLED BACK: ${srcRel} -> ${restoredRel}`);
  return true;
}

let iteration = 0;
while (iteration < 20) {
  iteration++;
  console.log(`\n=== Iteration ${iteration} ===`);
  const { code, stdout, stderr } = runTypecheck();
  const output = stdout + stderr;
  if (code === 0) {
    console.log("typecheck passes");
    break;
  }
  const errorFiles = getErrorFiles(output);
  console.log(`Typecheck failed with ${errorFiles.length} error files`);
  if (errorFiles.length === 0) {
    console.log(output);
    break;
  }
  let rolled = 0;
  for (const srcRel of errorFiles) {
    if (rollback(srcRel)) rolled++;
  }
  if (rolled === 0) {
    console.log("Could not roll back any error files");
    console.log(output.slice(0, 2000));
    break;
  }
}
