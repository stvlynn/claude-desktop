// Restored from ref/webview/assets/conversation-markdown-BBR-zfID.js
// Boundary facade for conversation markdown rendering and formatting helpers.
import {
  Kg as initCommandMarkdownRuntime,
  qg as formatShellCommand,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import { initPathHelpersRuntime as initPathHelpers } from "./path-helpers-runtime";
import { initArtifactPreviewRuntime } from "./artifact-preview-runtime";

import { normalizeArtifactPathKey } from "../conversations/output-artifact-runtime";

import { normalizeConfigPath } from "./config-path-runtime";

import {
  isAbsolutePath,
  normalizeWorkspacePath,
} from "../boundaries/src-l0hb-mz-p";
import {
  Ba as groupClosedActivityUnits,
  dt as initPersonalityChangedItems,
  Et as isConversationItemInProgress,
  ft as resolveRenderableAgentItems,
  Ha as initPostAssistantItemGrouping,
  La as shouldRenderCollapsedActivityDetails,
  lt as initRenderableOutputGrouping,
  Ra as closeActivitySlices,
  Tt as initRemoteTaskCreatedItems,
  ut as getTurnAgentItemGroups,
  Va as collectRenderableAgentUnits,
  za as wrapActivityUnits,
} from "../vendor/profile-page-runtime";
import {
  Gv as initMarkdownNormalizationRuntime,
  Kg as initNormalizedPathUtilities,
  qg as resolveProjectlessResourcePath,
  Vv as initMarkdownContentRuntime,
  Wv as rewriteMarkdownResourceLinks,
  zv as renderChangeAsUnifiedDiff,
} from "../vendor/projects-app-shared-runtime";

export {
  closeActivitySlices,
  collectRenderableAgentUnits,
  formatShellCommand,
  getTurnAgentItemGroups,
  groupClosedActivityUnits,
  initArtifactPreviewRuntime,
  initCommandMarkdownRuntime,
  initMarkdownContentRuntime,
  initMarkdownNormalizationRuntime,
  initNormalizedPathUtilities,
  initPathHelpers,
  initPersonalityChangedItems,
  initPostAssistantItemGrouping,
  initRemoteTaskCreatedItems,
  initRenderableOutputGrouping,
  isAbsolutePath,
  isConversationItemInProgress,
  normalizeArtifactPathKey,
  normalizeConfigPath,
  normalizeWorkspacePath,
  renderChangeAsUnifiedDiff,
  resolveProjectlessResourcePath,
  resolveRenderableAgentItems,
  rewriteMarkdownResourceLinks,
  shouldRenderCollapsedActivityDetails,
  wrapActivityUnits,
};
