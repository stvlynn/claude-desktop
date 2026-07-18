// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Worktree status type definitions and status constants.

export const AVAILABLE_STATUS = "available" as const;
export const INSPECTION_FAILED_STATUS = "inspection_failed" as const;
export const WORKTREE_GONE = "worktree_gone" as const;
export const WORKTREE_RESTORE_REQUIRED = "worktree_restore_required" as const;
export const WORKTREE_STATUS_UNAVAILABLE = "worktree_status_unavailable" as const;

export type WorktreeStatus =
  | typeof AVAILABLE_STATUS
  | typeof INSPECTION_FAILED_STATUS
  | typeof WORKTREE_GONE
  | typeof WORKTREE_RESTORE_REQUIRED
  | typeof WORKTREE_STATUS_UNAVAILABLE;

export type WorktreeStatusTarget = {
  conversationId?: string | null;
  cwd?: string | null;
  hostId?: string | null;
};

export type QueryStateHandle = {
  queryClient: unknown;
};
