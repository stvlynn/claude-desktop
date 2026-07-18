// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { GlobalShortcutService } from "../application/global-shortcut-service";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "GlobalShortcut", method);

export function registerCurrentGlobalShortcutIpc({
  service,
  trustedWebContents,
}: {
  service: GlobalShortcutService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  ipcMain.handle(channel("getGlobalShortcut"), (event) => {
    if (!trustedWebContents.has(event.sender)) {
      throw new Error(
        "Rejected GlobalShortcut.getGlobalShortcut from an untrusted view",
      );
    }
    return service.getGlobalShortcut();
  });
  ipcMain.handle(
    channel("setGlobalShortcut"),
    (event, accelerator: unknown) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(
          "Rejected GlobalShortcut.setGlobalShortcut from an untrusted view",
        );
      }
      if (typeof accelerator !== "string") {
        throw new TypeError(
          "GlobalShortcut.setGlobalShortcut expects a string",
        );
      }
      return service.setGlobalShortcut(accelerator);
    },
  );
  const unsubscribe = service.subscribe((accelerator) => {
    for (const webContents of trustedWebContents) {
      if (!webContents.isDestroyed()) {
        webContents.send(channel("globalShortcutChange"), accelerator);
      }
    }
  });
  return () => {
    unsubscribe();
    ipcMain.removeHandler(channel("getGlobalShortcut"));
    ipcMain.removeHandler(channel("setGlobalShortcut"));
    service.dispose();
  };
}
