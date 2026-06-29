// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Capture the open browser/terminal/artifact/review panel tabs of a source
// conversation and re-materialize them on a forked (or pending-worktree) target
// conversation, remapping tab ids, terminal sessions and workspace-relative
// file paths along the way.

import { _appScopeT, appScopeUnderscore } from "../boundaries/app-scope";

import { capturePanelState } from "./fork-conversation-panel-state-capture";
import { deriveBrowserConversationId } from "./fork-conversation-panel-state-deps";
import { remapPanelStateToTarget } from "./fork-conversation-panel-state-remap";
import type {
  AppScope,
  CapturedPanelState,
} from "./fork-conversation-panel-state-types";

export const forkedConversationPanelStateStore = appScopeUnderscore(
  _appScopeT,
  () => null as CapturedPanelState | null,
);

export const pendingWorktreePanelStateStore = appScopeUnderscore(
  _appScopeT,
  () =>
    null as {
      sourceWorkspaceRoot: string;
      state: CapturedPanelState;
    } | null,
);

export function applyForkedConversationPanelState(
  scope: AppScope,
  {
    sourceConversationId,
    targetConversationId,
  }: {
    sourceConversationId: string;
    targetConversationId: string;
  },
): void {
  scope.set(
    forkedConversationPanelStateStore,
    targetConversationId,
    remapPanelStateToTarget(
      capturePanelState(scope, sourceConversationId),
      deriveBrowserConversationId(scope, targetConversationId),
    ),
  );
}

export function stashPendingWorktreePanelState(
  scope: AppScope,
  {
    pendingWorktreeId,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: {
    pendingWorktreeId: string;
    sourceConversationId: string;
    sourceWorkspaceRoot: string;
  },
): void {
  scope.set(pendingWorktreePanelStateStore, pendingWorktreeId, {
    sourceWorkspaceRoot,
    state: capturePanelState(scope, sourceConversationId),
  });
}
