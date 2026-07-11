// @ts-nocheck
// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Global dictation lifecycle manager.
//
// The original bundle keeps a single process-wide dictation orchestrator here
// (listening on the renderer "message-from-view" channel, forwarding OS
// dictation events, and tearing down on quit). This restored version tracks
// in-app dictation state and handles start/stop/force-lock messages from the
// renderer. The actual OS speech capture backend is still a future hook once
// the renderer settings and native speech modules are promoted.

import type { IpcMainInvokeEvent } from "electron";
import { desktopLogger } from "./desktop-logger";

export type DictationMessageHandler = (
  event: IpcMainInvokeEvent,
  message: Record<string, unknown>,
) => Promise<boolean> | boolean;

export type GlobalDictationLifecycleManager = {
  getIsDictating(): boolean;
  getForceLock(): boolean;
  handleMessage(
    event: IpcMainInvokeEvent,
    message: Record<string, unknown>,
  ): Promise<boolean> | boolean;
  dispose(): void;
};

const KNOWN_DICTATION_MESSAGE_TYPES = new Set([
  "global-dictation-in-app-start",
  "global-dictation-in-app-started",
  "global-dictation-in-app-stop",
  "global-dictation-force-lock-changed",
]);

function isDictationMessage(
  message: Record<string, unknown>,
): message is { type: string } & Record<string, unknown> {
  return (
    typeof message.type === "string" &&
    (message.type.startsWith("global-dictation-") ||
      KNOWN_DICTATION_MESSAGE_TYPES.has(message.type))
  );
}

function isForceLockChangedMessage(
  message: Record<string, unknown>,
): message is { type: "global-dictation-force-lock-changed"; locked: boolean } {
  return (
    message.type === "global-dictation-force-lock-changed" &&
    typeof (message as Record<string, unknown>).locked === "boolean"
  );
}

export function createGlobalDictationLifecycleManager(
  onMessage?: DictationMessageHandler,
): GlobalDictationLifecycleManager {
  let isDictating = false;
  let forceLock = false;

  const handleDictationMessage = (
    event: IpcMainInvokeEvent,
    message: Record<string, unknown>,
  ): boolean => {
    switch (message.type) {
      case "global-dictation-in-app-start": {
        isDictating = true;
        desktopLogger.info("[Dictation] in-app dictation started", {
          senderId: event.sender.id,
        });
        break;
      }
      case "global-dictation-in-app-started": {
        isDictating = true;
        desktopLogger.info("[Dictation] in-app dictation started ack", {
          senderId: event.sender.id,
        });
        break;
      }
      case "global-dictation-in-app-stop": {
        isDictating = false;
        desktopLogger.info("[Dictation] in-app dictation stopped", {
          senderId: event.sender.id,
        });
        break;
      }
      case "global-dictation-force-lock-changed": {
        if (isForceLockChangedMessage(message)) {
          forceLock = message.locked;
          desktopLogger.info("[Dictation] force lock changed", {
            forceLock,
            senderId: event.sender.id,
          });
        }
        break;
      }
      default:
        desktopLogger.info("[Dictation] received message", {
          type: message.type,
          senderId: event.sender.id,
        });
    }
    return true;
  };

  return {
    getIsDictating() {
      return isDictating;
    },
    getForceLock() {
      return forceLock;
    },
    handleMessage(event, message) {
      if (!isDictationMessage(message)) {
        return false;
      }

      if (onMessage != null) {
        return onMessage(event, message);
      }

      return handleDictationMessage(event, message);
    },
    dispose() {
      isDictating = false;
      forceLock = false;
      desktopLogger.info("[Dictation] disposing lifecycle manager");
    },
  };
}
