// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { GrandPrixService } from "../application/grand-prix-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "GrandPrix", method);

export function registerCurrentGrandPrixIpc({
  service,
  trustedWebContents,
}: {
  service: GrandPrixService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected GrandPrix request from an untrusted view");
    }
  };
  ipcMain.handle(
    channel("pair"),
    (event, partnerId: unknown, context: unknown) => {
      assertTrusted(event.sender);
      if (typeof partnerId !== "string") {
        throw new TypeError("GrandPrix.pair expects a partner id");
      }
      if (
        context !== undefined &&
        (typeof context !== "object" ||
          context === null ||
          !("hasUserActivation" in context) ||
          typeof context.hasUserActivation !== "boolean")
      ) {
        throw new TypeError("GrandPrix.pair received an invalid context");
      }
      return service.pair(
        partnerId,
        context as { hasUserActivation: boolean } | undefined,
      );
    },
  );
  ipcMain.handle(channel("disconnect"), (event, partnerId: unknown) => {
    assertTrusted(event.sender);
    if (typeof partnerId !== "string") {
      throw new TypeError("GrandPrix.disconnect expects a partner id");
    }
    return service.disconnect(partnerId);
  });
  ipcMain.handle(channel("request"), (event, request: unknown) => {
    assertTrusted(event.sender);
    if (typeof request !== "object" || request === null) {
      throw new TypeError("GrandPrix.request expects an object");
    }
    return service.request(request);
  });
  const asyncStateChannel = channel("grandPrixStatus_$store$_getState");
  const syncStateChannel = channel("grandPrixStatus_$store$_getStateSync");
  ipcMain.handle(asyncStateChannel, (event) => {
    assertTrusted(event.sender);
    return service.getStatus();
  });
  const syncStateHandler = (event: Electron.IpcMainEvent): void => {
    try {
      assertTrusted(event.sender);
      event.returnValue = { result: service.getStatus() };
    } catch (error) {
      event.returnValue = {
        error: error instanceof Error ? error.message : String(error),
      };
    }
  };
  ipcMain.on(syncStateChannel, syncStateHandler);

  return () => {
    ipcMain.removeHandler(channel("pair"));
    ipcMain.removeHandler(channel("disconnect"));
    ipcMain.removeHandler(channel("request"));
    ipcMain.removeHandler(asyncStateChannel);
    ipcMain.off(syncStateChannel, syncStateHandler);
  };
}
