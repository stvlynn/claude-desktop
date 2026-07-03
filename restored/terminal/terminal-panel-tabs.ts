// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative actions that open a new embedded-terminal session as a side-panel
// tab for the conversation currently targeted by the app scope.
import {
  getTerminalPanelTarget,
  registerTerminalPanelSubscription,
  syncTerminalPanelTabs,
  terminalSessionManager,
} from "../boundaries/onboarding-commons-externals.facade";

type TerminalPanelPlacement = "bottom" | "right";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

export function openTerminalPanel(
  scope: AppScope,
  placement: TerminalPanelPlacement,
): void {
  const target = getTerminalPanelTarget(scope);
  if (target == null) {
    return;
  }
  const sessionId = terminalSessionManager.addSessionForConversation(
    target.conversationId,
  );
  registerTerminalPanelSubscription(scope, target, placement);
  syncTerminalPanelTabs(scope, target, sessionId, true, placement, sessionId);
}

export function openTerminalPanelAtBottom(scope: AppScope): void {
  openTerminalPanel(scope, "bottom");
}

export function hasTerminalPanelTarget(scope: AppScope): boolean {
  return getTerminalPanelTarget(scope) != null;
}
