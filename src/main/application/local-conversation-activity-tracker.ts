// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Tracks whether any local thread is currently active.
//
// The renderer mirrors the app-server registry state via
// `local-thread-activity-changed` messages on the renderer-to-main view
// channel. This tracker listens for those messages and exposes the latest
// value so the quit confirmation dialog can warn about interrupting active
// threads.

import { ipcMain } from "electron";
import { MESSAGE_FROM_VIEW_CHANNEL } from "../../shared/contracts/view-message-ipc";
import { desktopLogger } from "./desktop-logger";

type LocalThreadActivityChangedMessage = {
  type: "local-thread-activity-changed";
  hasInProgressLocalConversation: boolean;
};

function isLocalThreadActivityChangedMessage(
  value: unknown,
): value is LocalThreadActivityChangedMessage {
  return (
    typeof value === "object" &&
    value != null &&
    (value as Record<string, unknown>).type ===
      "local-thread-activity-changed" &&
    typeof (value as Record<string, unknown>).hasInProgressLocalConversation ===
      "boolean"
  );
}

export type LocalConversationActivityTracker = {
  getHasInProgressLocalConversation(): boolean;
  dispose(): void;
};

export function createLocalConversationActivityTracker(): LocalConversationActivityTracker {
  let hasInProgressLocalConversation = false;

  const handler = (_event: Electron.IpcMainEvent, rawMessage: unknown) => {
    if (!isLocalThreadActivityChangedMessage(rawMessage)) return;
    hasInProgressLocalConversation = rawMessage.hasInProgressLocalConversation;
    desktopLogger.info("[Lifecycle] local thread activity changed", {
      hasInProgressLocalConversation,
    });
  };

  ipcMain.on(MESSAGE_FROM_VIEW_CHANNEL, handler);

  return {
    getHasInProgressLocalConversation() {
      return hasInProgressLocalConversation;
    },
    dispose() {
      ipcMain.off(MESSAGE_FROM_VIEW_CHANNEL, handler);
    },
  };
}
