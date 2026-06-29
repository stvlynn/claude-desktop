// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Local conversation review-panel state and side-effect helpers.
import {
  av as shouldExpandReviewPanelSignal,
  Fv as initReviewRouteContextChunkRaw,
  fv as initReviewSourceChunkRaw,
  gv as syncReviewPanelForRestoredSource,
  hv as openInitialReviewPanelTarget,
  j_ as scheduleReviewRestore,
  lv as pendingReviewPanelTargetSignal,
  mv as revealChangedFilesInReviewPanel,
  ov as initReviewDiffStateChunkRaw,
  pv as resetReviewPanelEmptyState,
  rv as initReviewFileListChunkRaw,
  sv as focusPendingReviewPanelTarget,
  zv as initReviewSourceModeChunkRaw,
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
