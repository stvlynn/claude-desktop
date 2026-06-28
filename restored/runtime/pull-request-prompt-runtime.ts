// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Pull-request prompt copy and review-comment helper facade.
import {
  AO as PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  HO as getReviewCommentAttachmentKeyValue,
  YO as initPullRequestReviewCommentHelpers,
  kO as MY_REQUEST_PROMPT_HEADER,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Ba as pullRequestReviewCommentAttachmentsSignal,
  Ha as updatePullRequestReviewCommentAttachmentsRaw,
  Va as initPullRequestReviewCommentAttachmentStateChunkRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";

export {
  getReviewCommentAttachmentKeyValue,
  MY_REQUEST_PROMPT_HEADER,
  PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  pullRequestReviewCommentAttachmentsSignal,
};

export type PullRequestReviewCommentAttachmentUpdater<TAttachment> = (
  currentAttachments: TAttachment[],
) => TAttachment[];

export function updatePullRequestReviewCommentAttachments<TAttachment>(
  scope: unknown,
  conversationId: string,
  updater: PullRequestReviewCommentAttachmentUpdater<TAttachment>,
): void {
  updatePullRequestReviewCommentAttachmentsRaw(scope, conversationId, updater);
}

export function initPullRequestReviewCommentRuntime(): void {
  initPullRequestReviewCommentHelpers();
}

export function initPullRequestReviewCommentAttachmentStateRuntime(): void {
  initPullRequestReviewCommentAttachmentStateChunkRaw();
}
