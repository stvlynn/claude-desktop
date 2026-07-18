// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Automation state tracker.
//
// The original bundle checks whether the user has any enabled automations before
// quitting, so it can warn that "enabled automations won't run while the app is
// closed". The canonical source of automation enablement lives in the renderer
// app-server state.
//
// This tracker listens for `automations-enabled-state-changed` messages on the
// renderer-to-main view channel and exposes the latest value to the lifecycle
// service. A manual setter is also provided for tests and future integrations.

import { ipcMain } from "electron";
import { MESSAGE_FROM_VIEW_CHANNEL } from "../../shared/contracts/view-message-ipc";
import { desktopLogger } from "./desktop-logger";

type AutomationsEnabledStateChangedMessage = {
  type: "automations-enabled-state-changed";
  hasEnabledAutomations: boolean;
};

function isAutomationsEnabledStateChangedMessage(
  value: unknown,
): value is AutomationsEnabledStateChangedMessage {
  return (
    typeof value === "object" &&
    value != null &&
    (value as Record<string, unknown>).type ===
      "automations-enabled-state-changed" &&
    typeof (value as Record<string, unknown>).hasEnabledAutomations === "boolean"
  );
}

export type AutomationStateTracker = {
  getHasEnabledAutomations(): boolean;
  setHasEnabledAutomations(value: boolean): void;
  dispose(): void;
};

export function createAutomationStateTracker(): AutomationStateTracker {
  let hasEnabledAutomations = false;

  const handler = (_event: Electron.IpcMainEvent, rawMessage: unknown) => {
    if (!isAutomationsEnabledStateChangedMessage(rawMessage)) return;
    hasEnabledAutomations = rawMessage.hasEnabledAutomations;
    desktopLogger.info("[Automation] enabled automations state changed", {
      hasEnabledAutomations,
    });
  };

  ipcMain.on(MESSAGE_FROM_VIEW_CHANNEL, handler);

  return {
    getHasEnabledAutomations() {
      return hasEnabledAutomations;
    },
    setHasEnabledAutomations(value) {
      hasEnabledAutomations = value;
      desktopLogger.info("[Automation] enabled automations state changed", {
        hasEnabledAutomations,
      });
    },
    dispose() {
      ipcMain.off(MESSAGE_FROM_VIEW_CHANNEL, handler);
    },
  };
}
