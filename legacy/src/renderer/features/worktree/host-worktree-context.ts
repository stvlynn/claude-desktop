// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Host Codex-home and managed worktree path helpers for local conversation surfaces.
import {
  getCodexHome,
  isPathInCodexWorktree,
} from "../../shared/vendor/worktree-path-runtime";

export { isPathInCodexWorktree };

export function getHostCodexHome(_hostId?: string | null): string {
  return getCodexHome(
    typeof process === "undefined"
      ? undefined
      : { CODEX_HOME: process.env.CODEX_HOME, HOME: process.env.HOME },
  );
}

export function initHostWorktreeContextRuntime(): void {}
