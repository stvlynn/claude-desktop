// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Local conversation review-panel state and side-effect helpers.
import {
  focusPendingReviewPanelTarget,
  initReviewDiffStateChunk as initReviewDiffStateChunkRaw,
  initReviewFileListChunk as initReviewFileListChunkRaw,
  initReviewRouteContextChunk as initReviewRouteContextChunkRaw,
  initReviewSourceChunk as initReviewSourceChunkRaw,
  initReviewSourceModeChunk as initReviewSourceModeChunkRaw,
  openInitialReviewPanelTarget,
  pendingReviewPanelTargetSignal,
  resetReviewPanelEmptyState,
  revealChangedFilesInReviewPanel,
  scheduleReviewRestore,
  shouldExpandReviewPanelSignal,
  syncReviewPanelForRestoredSource,
} from "../app-shared-runtime";

export {
  focusPendingReviewPanelTarget,
  openInitialReviewPanelTarget,
  pendingReviewPanelTargetSignal,
  resetReviewPanelEmptyState,
  revealChangedFilesInReviewPanel,
  scheduleReviewRestore,
  shouldExpandReviewPanelSignal,
  syncReviewPanelForRestoredSource,
};

export function initPullRequestThreadActionsChunk(): void {
  initReviewRouteContextChunkRaw();
  initReviewSourceModeChunkRaw();
  initReviewSourceChunkRaw();
  initReviewDiffStateChunkRaw();
  initReviewFileListChunkRaw();
}
