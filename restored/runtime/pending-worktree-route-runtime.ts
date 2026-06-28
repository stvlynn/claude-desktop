// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Pending worktree route and pull request prompt helpers.
import {
  NI as buildPendingWorktreeRouteRaw,
  aO as extractPullRequestNumberRaw,
} from "../vendor/appg-thread-shared-runtime";

const buildPendingWorktreeRouteImpl =
  buildPendingWorktreeRouteRaw as unknown as (
    pendingWorktreeId: string,
  ) => string;

const extractPullRequestNumberImpl = extractPullRequestNumberRaw as unknown as (
  prompt?: string | null,
) => string | number | null;

export function buildPendingWorktreeRoute(pendingWorktreeId: string): string {
  return buildPendingWorktreeRouteImpl(pendingWorktreeId);
}

export const routeToPendingWorktree = buildPendingWorktreeRoute;

export function extractPullRequestNumber(
  prompt?: string | null,
): string | number | null {
  return extractPullRequestNumberImpl(prompt);
}
