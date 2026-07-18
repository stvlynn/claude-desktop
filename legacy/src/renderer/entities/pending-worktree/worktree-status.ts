// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared status shapes and sentinel values for managed-worktree inspection.

export type WorktreeStatus =
  | { kind: "available" }
  | { kind: "restorable"; worktreePath: string | null; [key: string]: unknown }
  | { kind: "gone"; worktreePath: string | null }
  | {
      kind: "unavailable";
      reason?: string;
      worktreePath: string | null;
    };

export interface WorktreeStatusTarget {
  conversationId: string;
  cwd: string | null;
  hostId: string;
}

export interface QueryStateHandle {
  query: {
    getOrFetch<T>(atom: unknown, params: unknown): Promise<T>;
    invalidate(
      atom: unknown,
      params: unknown,
      options?: { exact?: boolean },
    ): Promise<void>;
    fetch<T>(atom: unknown, params: unknown): Promise<T>;
  };
  queryClient: {
    invalidateQueries(filter: { queryKey: unknown }): Promise<void>;
  };
}

export const AVAILABLE_STATUS: WorktreeStatus = { kind: "available" };
export const INSPECTION_FAILED_STATUS: WorktreeStatus = {
  kind: "unavailable",
  reason: "inspection-failed",
  worktreePath: null,
};

export const WORKTREE_RESTORE_REQUIRED = "worktree_restore_required";
export const WORKTREE_GONE = "worktree_gone";
export const WORKTREE_STATUS_UNAVAILABLE = "worktree_status_unavailable";
