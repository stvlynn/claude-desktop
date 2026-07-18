// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Thread summary environment, remote handoff, terminal, and pull-request controls.
import {
  createAppScopeSignal,
  appScopeO,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
} from "./conversation-state-runtime";
import { isCurrentCompactWindow } from "../../features/is-compact-window-context";
import {
  environmentTerminalControllerSignal,
  type EnvironmentTerminalController,
} from "./environment-terminal-runtime";
import { LocalConversationGitActions as SummaryPanelPullRequestControls } from "../../entities/conversation/local-conversation-git-actions";
import {
  CloudEnvironmentDropdown,
  initCloudEnvironmentDropdownChunk as initCloudEnvironmentDropdownChunkRaw,
  initLocalRemoteDropdownChunk as initLocalRemoteDropdownChunkRaw,
  initThreadHandoffSummaryHelpersChunk as initThreadHandoffHelpersChunkRaw,
  LocalRemoteDropdown,
  shouldShowThreadHandoffInSummary,
} from "../../features/thread-summary/local-remote-dropdown";

export type ConversationRemoteState = {
  cwd: string | null;
  hostId: string;
};

export type DiffStatsQueryState = {
  isLoading: boolean;
  metrics: { additions: number; deletions: number } | null;
};

export const conversationDisplayTitleSignal = createAppScopeSignal<
  string | null
>(appScopeRoot, null);

export const diffStatsSignal = createAppScopeSignal<DiffStatsQueryState>(
  appScopeRoot,
  () => ({ isLoading: false, metrics: null }),
);

export function getConversationRemoteState(
  conversationId?: string | null,
): ConversationRemoteState {
  const store = appScopeO();
  return {
    cwd:
      store.get<string | null>(conversationCwdSignal, conversationId) ?? null,
    hostId:
      store.get<string | null>(conversationHostIdSignal, conversationId) ??
      "local",
  };
}

export function openEnvironmentTerminalSession(
  _routeScope: unknown,
  sessionId: string,
  controller: EnvironmentTerminalController | null | undefined,
): void {
  controller?.attach({ sessionId });
}

export {
  CloudEnvironmentDropdown,
  environmentTerminalControllerSignal,
  LocalRemoteDropdown,
  shouldShowThreadHandoffInSummary,
  SummaryPanelPullRequestControls,
};

export function isCompactWindow(): boolean {
  return isCurrentCompactWindow();
}

export function initThreadSummaryEnvironmentRuntime(): void {
  initCloudEnvironmentDropdownChunkRaw();
  initThreadHandoffHelpersChunkRaw();
  initLocalRemoteDropdownChunkRaw();
}
