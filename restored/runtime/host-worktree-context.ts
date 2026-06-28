// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Host Codex-home and worktree path helpers used by local conversation surfaces.
import {
  Mu as initHostCodexHomeQuery,
  Nu as getHostCodexHome,
  pI as isPathInCodexWorktree,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export { getHostCodexHome, isPathInCodexWorktree };

export function initHostWorktreeContextRuntime(): void {
  initHostCodexHomeQuery();
}
