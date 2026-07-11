#!/usr/bin/env node
// Roll back the last promote-runtime-boundaries batch that introduced
// broken import rewrites and an obfuscated vendor bundle.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC_ROOT = path.join(ROOT, "src");
const RESTORED_ROOT = path.join(ROOT, "restored");

const toRollback = [
  // boundaries -> src
  {
    src: "src/renderer/shared/lib/settings-group-producer.ts",
    restored: "restored/boundaries/current-ref/settings-group-producer.ts",
  },
  {
    src: "src/renderer/shared/runtime/thread-context-inputs.facade.ts",
    restored: "restored/boundaries/thread-context-inputs.facade.ts",
  },
  {
    src: "src/renderer/shared/runtime/vscode-api.ts",
    restored: "restored/boundaries/vscode-api.ts",
  },
  {
    src: "src/renderer/shared/runtime/workbook-runtime.ts",
    restored: "restored/boundaries/workbook-runtime.ts",
  },
  // runtime -> src
  { src: "src/renderer/shared/runtime/app-main-plugin-matching.ts", restored: "restored/runtime/app-main-plugin-matching.ts" },
  { src: "src/renderer/shared/runtime/build-channel-runtime.ts", restored: "restored/runtime/build-channel-runtime.ts" },
  { src: "src/renderer/shared/runtime/codex-api/types.ts", restored: "restored/runtime/codex-api/types.ts" },
  { src: "src/renderer/shared/runtime/current-app-initial/current-app-initial-shared-backing.ts", restored: "restored/runtime/current-app-initial/current-app-initial-shared-backing.ts" },
  { src: "src/renderer/shared/runtime/error-boundary/types.ts", restored: "restored/runtime/error-boundary/types.ts" },
  { src: "src/renderer/shared/runtime/git-query/conversation-branch-override.ts", restored: "restored/runtime/git-query/conversation-branch-override.ts" },
  { src: "src/renderer/shared/runtime/git-query/global-setting-value.ts", restored: "restored/runtime/git-query/global-setting-value.ts" },
  { src: "src/renderer/shared/runtime/google-workspace-resource-runtime/open-url.ts", restored: "restored/runtime/google-workspace-resource-runtime/open-url.ts" },
  { src: "src/renderer/shared/runtime/image-preview-shortcut-state-runtime.ts", restored: "restored/runtime/image-preview-shortcut-state-runtime.ts" },
  { src: "src/renderer/shared/runtime/markdown-lite-runtime.ts", restored: "restored/runtime/markdown-lite-runtime.ts" },
  { src: "src/renderer/shared/runtime/onboarding-scope-runtime.ts", restored: "restored/runtime/onboarding-scope-runtime.ts" },
  { src: "src/renderer/shared/runtime/open-target-selection-runtime.ts", restored: "restored/runtime/open-target-selection-runtime.ts" },
  { src: "src/renderer/shared/runtime/plan-type-runtime.ts", restored: "restored/runtime/plan-type-runtime.ts" },
  { src: "src/renderer/shared/runtime/platform-content-runtime.ts", restored: "restored/runtime/platform-content-runtime.ts" },
  { src: "src/renderer/shared/runtime/pointer-velocity-signals.ts", restored: "restored/runtime/pointer-velocity-signals.ts" },
  { src: "src/renderer/shared/runtime/shared-object-host-runtime.ts", restored: "restored/runtime/shared-object-host-runtime.ts" },
  { src: "src/renderer/shared/runtime/thread-permissions-runtime.ts", restored: "restored/runtime/thread-permissions-runtime.ts" },
  { src: "src/renderer/shared/runtime/thread-start-runtime.ts", restored: "restored/runtime/thread-start-runtime.ts" },
];

let restoredCount = 0;
let removedCount = 0;
let skippedCount = 0;

for (const { src: srcRel, restored: restoredRel } of toRollback) {
  const srcAbs = path.join(ROOT, srcRel);
  const restoredAbs = path.join(ROOT, restoredRel);

  if (!fs.existsSync(srcAbs)) {
    console.log(`SKIP (not in src): ${srcRel}`);
    skippedCount++;
    continue;
  }

  // Restore original from git index
  const result = spawnSync("git", ["checkout", "--", restoredRel], { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
  if (result.status !== 0) {
    console.error(`FAILED to restore ${restoredRel}: ${result.stderr}`);
    process.exit(1);
  }

  // Remove the promoted copy from src/
  fs.unlinkSync(srcAbs);
  restoredCount++;

  // Clean up empty parent directories in src/ if they are now empty
  let dir = path.dirname(srcAbs);
  while (dir !== SRC_ROOT) {
    try {
      const entries = fs.readdirSync(dir);
      if (entries.length === 0) {
        fs.rmdirSync(dir);
      } else {
        break;
      }
    } catch {
      break;
    }
    dir = path.dirname(dir);
  }

  console.log(`ROLLED BACK: ${srcRel} -> ${restoredRel}`);
}

console.log(`\nDone. Restored ${restoredCount} files, skipped ${skippedCount}.`);
