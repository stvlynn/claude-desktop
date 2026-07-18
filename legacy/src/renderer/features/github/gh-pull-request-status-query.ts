// Restored from ref/webview/assets/use-diff-comment-sources-K8MB00rv.js
// Minimal stub for gh-pull-request-status-query to unblock github cluster promotion.

export const ghPullRequestStatusResultSignal = (() => ({
  type: "success",
  data: {
    commentAttachments: undefined,
  },
})) as unknown as { type: string; data: { commentAttachments: unknown } };

export const ghPullRequestStatusQuery = undefined as never;
export const ghPullRequestUrlSignal = undefined as never;
export const hasOpenPullRequestSignal = undefined as never;
export const ghCliAvailabilitySignal = undefined as never;
export const initGhCliStatusQueryChunk = undefined as never;
