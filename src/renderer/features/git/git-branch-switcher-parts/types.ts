// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// @ts-nocheck
// Boundary stub for git branch switcher types.

export type HostConfig = {
  hostId?: string;
  cwd?: string | null;
};

export type QueryOptions = {
  staleTime?: number;
  enabled?: boolean;
};

export type GitOperationResult<T = unknown> = {
  data?: T;
  error?: Error | null;
  isLoading?: boolean;
};

export type GitMutationResponse = {
  success: boolean;
};

export type CheckoutBranchPayload = {
  branchName: string;
};

export type CreateBranchPayload = {
  branchName: string;
  baseBranch?: string;
};

export type MutationCallbacks<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

export type MutationResult<T> = {
  mutate: (variables: T) => void;
  mutateAsync: (variables: T) => Promise<unknown>;
  isPending: boolean;
};

export type BranchSwitchNextAction = "continue" | "cancel" | "commit";
