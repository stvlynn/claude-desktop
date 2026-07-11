#!/usr/bin/env node
// Roll back specific promoted files that fail typecheck.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = new URL("..", import.meta.url).pathname;

const toRollback = [
  { src: "src/renderer/shared/vendor/radix-helpers.tsx", restored: "restored/vendor/radix-helpers.tsx" },
  { src: "src/renderer/shared/ui/toast-signal.tsx", restored: "restored/ui/toast-signal.tsx" },
  { src: "src/renderer/shared/ui/modal-controller-state.tsx", restored: "restored/ui/modal-controller-state.tsx" },
  { src: "src/renderer/shared/lib/markdown-to-search-text/values.ts", restored: "restored/utils/markdown-to-search-text/values.ts" },
];

for (const { src: srcRel, restored: restoredRel } of toRollback) {
  const srcAbs = path.join(ROOT, srcRel);
  if (!fs.existsSync(srcAbs)) {
    console.log(`SKIP (not in src): ${srcRel}`);
    continue;
  }
  const result = spawnSync("git", ["checkout", "--", restoredRel], { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
  if (result.status !== 0) {
    console.error(`FAILED to restore ${restoredRel}: ${result.stderr}`);
    process.exit(1);
  }
  fs.unlinkSync(srcAbs);
  console.log(`ROLLED BACK: ${srcRel} -> ${restoredRel}`);
}
