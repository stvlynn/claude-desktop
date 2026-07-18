// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { ComputerUseTccService } from "../application/computer-use-tcc-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "ComputerUseTcc", method);

export function registerCurrentComputerUseTccIpc({
  service,
  trustedWebContents,
}: {
  service: ComputerUseTccService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected ComputerUseTcc request from an untrusted view");
    }
  };
  const noArgumentMethods = {
    getState: () => service.getState(),
    requestAccessibility: () => service.requestAccessibility(),
    requestScreenRecording: () => service.requestScreenRecording(),
    listInstalledApps: () => service.listInstalledApps(),
  };
  for (const [method, handler] of Object.entries(noArgumentMethods)) {
    ipcMain.handle(channel(method), (event) => {
      assertTrusted(event.sender);
      return handler();
    });
  }
  ipcMain.handle(channel("openSystemSettings"), (event, pane: unknown) => {
    assertTrusted(event.sender);
    if (typeof pane !== "string") {
      throw new TypeError("ComputerUseTcc.openSystemSettings expects a string");
    }
    return service.openSystemSettings(pane);
  });
  ipcMain.handle(
    channel("getCurrentSessionGrants"),
    (event, sessionId: unknown) => {
      assertTrusted(event.sender);
      if (typeof sessionId !== "string") {
        throw new TypeError(
          "ComputerUseTcc.getCurrentSessionGrants expects a string",
        );
      }
      return service.getCurrentSessionGrants(sessionId);
    },
  );
  ipcMain.handle(
    channel("revokeGrant"),
    (event, sessionId: unknown, bundleId: unknown) => {
      assertTrusted(event.sender);
      if (typeof sessionId !== "string" || typeof bundleId !== "string") {
        throw new TypeError("ComputerUseTcc.revokeGrant expects two strings");
      }
      return service.revokeGrant(sessionId, bundleId);
    },
  );

  return () => {
    for (const method of Object.keys(noArgumentMethods)) {
      ipcMain.removeHandler(channel(method));
    }
    ipcMain.removeHandler(channel("openSystemSettings"));
    ipcMain.removeHandler(channel("getCurrentSessionGrants"));
    ipcMain.removeHandler(channel("revokeGrant"));
  };
}
