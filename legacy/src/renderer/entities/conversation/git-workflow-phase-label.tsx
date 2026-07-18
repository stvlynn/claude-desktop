// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { FormattedMessage } from "../../shared/runtime/react-intl";
import {
  getGitWorkflowPhaseMessageDescriptor,
  type GitWorkflowPhase,
} from "../../features/review/git-action-messages";

export function GitWorkflowPhaseLabel({ phase }: { phase: GitWorkflowPhase }) {
  return <FormattedMessage {...getGitWorkflowPhaseMessageDescriptor(phase)} />;
}

export function initGitWorkflowPhaseLabelChunk(): void {}
