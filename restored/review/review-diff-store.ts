// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility barrel for the review diff store, split by state, helpers,
// mode/query atoms, per-file diff queries, and imperative actions.

import { refreshReviewDiff, reviewDiffFilterAtom } from "./review-diff-model";
import {
  isReviewRefreshingAtom,
  reviewBaseBranchOverrideAtom,
  reviewBaseBranchOverrideForScopeAtom,
  reviewCommitShaAtom,
  reviewDiffTargetPathAtom,
  reviewDiffTargetPathReadonlyAtom,
  reviewDiffTargetTextAtom,
} from "./review-diff-target-state";
import {
  isReviewBranchModeAtom,
  isReviewDiffEnabledAtom,
  isReviewIndexModeAtom,
  reviewCurrentBranchAtom,
  reviewDiffSourceAtom,
  reviewGitMetadataReadinessQueryAtom,
  reviewLocationKindAtom,
  reviewRootAtom,
} from "./review-diff-mode-atoms";
import {
  reviewBaseBranchAtom,
  reviewBaseBranchQueryAtom,
  reviewBaseBranchQueryFamily,
  reviewBranchCommitsQueryAtom,
  reviewIndexInfoQueryAtom,
  reviewIndexInfoQueryFamily,
  reviewRecentBranchesQueryAtom,
} from "./review-branch-query-atoms";
import {
  reviewBranchDiffStatsQueryFamily,
  reviewDiffMetricsAtom,
  reviewDiffStatsAtom,
  reviewFilesByDisplayPathAtom,
  reviewSummaryAtom,
  reviewSummaryQueryAtom,
} from "./review-summary-query-atoms";
import {
  reviewDiffTargetParsedAtom,
  reviewFileDiffQueryFamily,
} from "./review-file-diff-query";
import {
  refetchReviewFileDiff,
  refreshReviewFilesForPaths,
  refreshReviewIndexInfo,
  selectReviewCommit,
  setReviewDiffTarget,
  watchReviewDiffEffect,
} from "./review-diff-actions";

export function initReviewSourceRuntime(): void {
  // Legacy chunks exposed Rollup initializers; ESM imports initialize the split
  // review source, branch, summary, and per-file query atoms eagerly.
  void reviewDiffFilterAtom;
  void reviewLocationKindAtom;
  void isReviewDiffEnabledAtom;
  void reviewDiffSourceAtom;
  void isReviewBranchModeAtom;
  void isReviewIndexModeAtom;
  void reviewGitMetadataReadinessQueryAtom;
  void reviewRootAtom;
  void reviewCurrentBranchAtom;
  void reviewBaseBranchAtom;
  void reviewBaseBranchQueryAtom;
  void reviewBaseBranchQueryFamily;
  void reviewBranchCommitsQueryAtom;
  void reviewIndexInfoQueryAtom;
  void reviewIndexInfoQueryFamily;
  void reviewRecentBranchesQueryAtom;
  void reviewSummaryQueryAtom;
  void reviewBranchDiffStatsQueryFamily;
  void reviewDiffStatsAtom;
  void reviewSummaryAtom;
  void reviewDiffMetricsAtom;
  void reviewFilesByDisplayPathAtom;
  void reviewFileDiffQueryFamily;
}

export function initReviewDiffStateRuntime(): void {
  void reviewDiffTargetTextAtom;
  void reviewDiffTargetPathAtom;
  void reviewDiffTargetPathReadonlyAtom;
  void reviewCommitShaAtom;
  void reviewBaseBranchOverrideAtom;
  void reviewBaseBranchOverrideForScopeAtom;
  void isReviewRefreshingAtom;
  void reviewDiffTargetParsedAtom;
  void refreshReviewDiff;
  void setReviewDiffTarget;
  void selectReviewCommit;
  void watchReviewDiffEffect;
  void refreshReviewIndexInfo;
  void refreshReviewFilesForPaths;
}

export function initReviewFileListRuntime(): void {
  void reviewFilesByDisplayPathAtom;
  void reviewDiffTargetParsedAtom;
  void reviewFileDiffQueryFamily;
  void refetchReviewFileDiff;
}

export {
  buildReviewSummaryParams,
  buildReviewSummaryQueryParams,
  isIndexDiffFilter,
  mergeQueryResults,
  parseReviewDiff,
  queryKeysShareBaseExceptLast,
  resolveReviewBaseBranch,
  reviewDiffRetryDelay,
  shouldRetryReviewDiff,
  toRepoRelativePaths,
} from "./review-diff-store-helpers";
export {
  isReviewRefreshingAtom,
  reviewBaseBranchOverrideAtom,
  reviewBaseBranchOverrideForScopeAtom,
  reviewCommitShaAtom,
  reviewDiffTargetPathAtom,
  reviewDiffTargetPathReadonlyAtom,
  reviewDiffTargetTextAtom,
} from "./review-diff-target-state";
export {
  isReviewBranchModeAtom,
  isReviewDiffEnabledAtom,
  isReviewIndexModeAtom,
  reviewCurrentBranchAtom,
  reviewDiffSourceAtom,
  reviewGitMetadataReadinessQueryAtom,
  reviewLocationKindAtom,
  reviewRootAtom,
} from "./review-diff-mode-atoms";
export {
  reviewBaseBranchAtom,
  reviewBaseBranchQueryAtom,
  reviewBaseBranchQueryFamily,
  reviewBranchCommitsQueryAtom,
  reviewIndexInfoQueryAtom,
  reviewIndexInfoQueryFamily,
  reviewRecentBranchesQueryAtom,
} from "./review-branch-query-atoms";
export {
  reviewBranchDiffStatsQueryFamily,
  reviewDiffMetricsAtom,
  reviewDiffStatsAtom,
  reviewFilesByDisplayPathAtom,
  reviewSummaryAtom,
  reviewSummaryQueryAtom,
} from "./review-summary-query-atoms";
export {
  reviewDiffTargetParsedAtom,
  reviewFileDiffQueryFamily,
} from "./review-file-diff-query";
export {
  refetchReviewFileDiff,
  refreshReviewFilesForPaths,
  refreshReviewIndexInfo,
  selectReviewCommit,
  setReviewDiffTarget,
  watchReviewDiffEffect,
} from "./review-diff-actions";
export type {
  ComputedAtomContext,
  GitMetadata,
  QueryResult,
  ReviewDiffFilter,
  ReviewDiffMetrics,
  ReviewDiffMetricsState,
  ReviewStore,
  ReviewSummaryRequestInput,
} from "./review-diff-store-types";
