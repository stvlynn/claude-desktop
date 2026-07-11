// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8cplf.js
// @ts-nocheck
// Minimal stub for git-root-query to unblock thread-summary promotion.

export function initGitRootQueryRuntime(): void {}

export function useGitRootQuery(
  _workspaceRoot: string | null | undefined,
  _options?: {
    enabled?: boolean;
    hostId?: string | null;
    source?: string;
  },
): {
  gitRoot: string | null;
  isLoading: boolean;
} {
  return { gitRoot: null, isLoading: false };
}
