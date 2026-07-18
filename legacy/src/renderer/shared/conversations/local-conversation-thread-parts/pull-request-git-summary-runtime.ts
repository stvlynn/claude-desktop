// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// GitHub pull-request summary signals, queries, and create-PR workflow controls.
import React, { type ComponentProps } from "react";
import { GitBranchIcon as BranchChangesIcon } from "../../icons/git-branch-icon";
import { CancelGitActionButton as CancelCreatePullRequestButton } from "../../../entities/conversation/cancel-git-action-button";
import { GitWorkflowPhaseLabel } from "../../../entities/conversation/git-workflow-phase-label";
import { useScopedValue } from "../../runtime/app-scope-hooks";
import {
  ghCliAvailabilitySignal as githubCliAvailabilitySignal,
  ghPullRequestStatusResultSignal as pullRequestStatusQuerySignal,
} from "../../../entities/github/gh-pull-request-status-query";
import { activeGitWorkflowAtom as activeWorkflowSignal } from "../../../features/review/local-git-action-state";
import { conversationHeadBranchAtom } from "../../../features/review/local-git-action-branch-atoms";
import { createPullRequestActionStateAtom as createPullRequestActionStateSignal } from "../../../features/review/local-git-actions-scope";
import { cancelActiveGitWorkflow as cancelCreatePullRequestWorkflow } from "../../../features/review/git-actions-runtime";

type GitWorkflowPhase = ComponentProps<typeof GitWorkflowPhaseLabel>["phase"];

export function CreatePullRequestWorkflowPhaseLabel({
  phase,
}: {
  phase: unknown;
}) {
  return React.createElement(GitWorkflowPhaseLabel, {
    phase: phase as GitWorkflowPhase,
  });
}

export function useHeadBranchQuery(
  cwd: string | null | undefined,
  hostConfig: { id: string },
  _operationSource: string,
): { data: string | null; isSuccess: boolean } {
  const data = useScopedValue<string | null>(conversationHeadBranchAtom, {
    cwd: cwd ?? "",
    hostConfig,
  });
  return { data: data ?? null, isSuccess: cwd != null };
}

export {
  activeWorkflowSignal,
  BranchChangesIcon,
  CancelCreatePullRequestButton,
  cancelCreatePullRequestWorkflow,
  createPullRequestActionStateSignal,
  githubCliAvailabilitySignal,
  pullRequestStatusQuerySignal,
};

export function initBranchChangesIconRuntime(): void {}
export function initPullRequestGitSummaryRuntime(): void {}
