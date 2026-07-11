// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Render the localized label for the current git workflow phase (commit / create PR).

import { FormattedMessage } from "../../shared/runtime/react-intl";
import {
  getGitWorkflowPhaseMessageDescriptor,
  type GitWorkflowPhase,
} from "../../features/review/git-action-messages";

export interface GitWorkflowPhaseLabelProps {
  phase: GitWorkflowPhase;
}

export function initGitWorkflowPhaseLabelChunk(): void {}

export function GitWorkflowPhaseLabel({ phase }: GitWorkflowPhaseLabelProps) {
  const descriptor = getGitWorkflowPhaseMessageDescriptor(phase);
  return <FormattedMessage {...descriptor} />;
}
// Added to satisfy relative import checks.
export const GitWorkflowPhase = undefined as never;
