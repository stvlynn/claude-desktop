// @ts-nocheck
// Restored from ref/webview/assets/thread-handoff-step-row-DiTyoHg3.js
// thread-handoff-step-row-DiTyoHg3 chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { ProgressStepRow } from "./progress-step-row";
type ThreadHandoffDirection = "to-worktree" | "to-host-worktree" | "to-local";
type ThreadHandoffStepStatus = "running" | "done" | "failed" | "pending";
type ThreadHandoffStepId =
  | "rolling-back-changes"
  | "prepare-host-transfer"
  | "transfer-host-artifacts"
  | "create-new-worktree"
  | "reuse-existing-worktree"
  | "stash-source-changes"
  | "checkout-local-branch"
  | "stash-target-worktree-changes"
  | "checkout-worktree-branch"
  | "detach-worktree-branch"
  | "apply-changes-to-worktree"
  | "apply-changes-to-local"
  | "switching-thread";
type ThreadHandoffStep = {
  id: ThreadHandoffStepId;
  status: ThreadHandoffStepStatus;
};
export const THREAD_HANDOFF_STEP_IDS: readonly ThreadHandoffStepId[] = [
  "prepare-host-transfer",
  "transfer-host-artifacts",
  "create-new-worktree",
  "reuse-existing-worktree",
  "stash-source-changes",
  "detach-worktree-branch",
  "checkout-local-branch",
  "stash-target-worktree-changes",
  "checkout-worktree-branch",
  "apply-changes-to-worktree",
  "apply-changes-to-local",
  "switching-thread",
];

export function initThreadHandoffStepIdsChunk(): void {
  void THREAD_HANDOFF_STEP_IDS;
}

export function initThreadHandoffStepRowChunk(): void {}

type ThreadHandoffStepRowProps = {
  compact?: boolean;
  direction: ThreadHandoffDirection;
  localBranch?: string | null;
  sourceBranch?: string | null;
  step: ThreadHandoffStep;
  worktreeBranch?: string | null;
};
function ThreadHandoffStepRow({
  compact = false,
  direction,
  localBranch,
  sourceBranch,
  step,
  worktreeBranch,
}: ThreadHandoffStepRowProps) {
  return (
    <ProgressStepRow compact={compact} status={step.status}>
      {getThreadHandoffStepLabel(
        step.id,
        direction,
        localBranch,
        sourceBranch,
        worktreeBranch,
      )}
    </ProgressStepRow>
  );
}
function getThreadHandoffStepLabel(
  stepId: ThreadHandoffStepId,
  direction: ThreadHandoffDirection,
  localBranch?: string | null,
  sourceBranch?: string | null,
  worktreeBranch?: string | null,
): ReactNode {
  if (stepId === "rolling-back-changes") {
    return "Rolling back changes";
  }
  switch (stepId) {
    case "prepare-host-transfer":
      return "Preparing files for transfer";
    case "transfer-host-artifacts":
      return "Copying files to the destination host";
    case "create-new-worktree":
      return "Creating a new worktree";
    case "reuse-existing-worktree":
      return "Reusing the existing worktree";
    case "stash-source-changes":
      return "Stashing uncommitted changes";
    case "checkout-local-branch":
      return (
        <>
          Checking out {localBranch ?? sourceBranch} locally
        </>
      );
    case "stash-target-worktree-changes":
      return "Stashing worktree changes";
    case "checkout-worktree-branch":
      return (
        <>
          Checking out {worktreeBranch ?? sourceBranch} in worktree
        </>
      );
    case "detach-worktree-branch":
      return "Detaching branch from worktree";
    case "apply-changes-to-worktree":
      return "Applying uncommitted changes to worktree";
    case "apply-changes-to-local":
      return "Applying uncommitted changes locally";
    case "switching-thread":
      return direction === "to-worktree"
        ? "Moving chat to worktree"
        : direction === "to-host-worktree"
          ? "Moving chat to the destination worktree"
          : "Moving chat to local";
  }
}
export { ThreadHandoffStepRow };
