// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Thread summary environment, remote handoff, terminal, and pull-request controls.
import {
  $i as getConversationRemoteState,
  Dd as initConversationRemoteStateHelpersRaw,
  Ds as openEnvironmentTerminalSession,
  Ec as initEnvironmentTerminalSessionHelpersRaw,
  Es as initWorkspaceRouteStateHelpersRaw,
  Gl as conversationDisplayTitleSignal,
  js as environmentTerminalControllerSignal,
  kc as diffStatsSignal,
  So as initWorkspaceRouteHelpersRaw,
  Wl as initConversationDisplayTitleSignalsRaw,
  wo as isCompactWindow,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  El as initSummaryPanelPullRequestControlsChunkRaw,
  Tl as SummaryPanelPullRequestControls,
} from "../boundaries/current-ref/profile-page-producer";
import {
  a as CloudEnvironmentDropdown,
  i as initThreadHandoffHelpersChunkRaw,
  n as initLocalRemoteDropdownChunkRaw,
  o as initCloudEnvironmentDropdownChunkRaw,
  r as shouldShowThreadHandoffInSummary,
  t as LocalRemoteDropdown,
} from "../boundaries/current-ref/local-remote-dropdown-producer";

export {
  CloudEnvironmentDropdown,
  conversationDisplayTitleSignal,
  diffStatsSignal,
  environmentTerminalControllerSignal,
  getConversationRemoteState,
  isCompactWindow,
  LocalRemoteDropdown,
  openEnvironmentTerminalSession,
  shouldShowThreadHandoffInSummary,
  SummaryPanelPullRequestControls,
};

export function initThreadSummaryEnvironmentRuntime(): void {
  initSummaryPanelPullRequestControlsChunkRaw();
  initEnvironmentTerminalSessionHelpersRaw();
  initWorkspaceRouteStateHelpersRaw();
  initCloudEnvironmentDropdownChunkRaw();
  initThreadHandoffHelpersChunkRaw();
  initLocalRemoteDropdownChunkRaw();
  initConversationRemoteStateHelpersRaw();
  initConversationDisplayTitleSignalsRaw();
  initWorkspaceRouteHelpersRaw();
}
