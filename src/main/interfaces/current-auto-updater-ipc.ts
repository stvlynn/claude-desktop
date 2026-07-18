// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { AutoUpdaterService } from "../application/auto-updater-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "AutoUpdater", method);

export function registerCurrentAutoUpdaterIpc({
  service,
  trustedWebContents,
}: {
  service: AutoUpdaterService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected AutoUpdater request from an untrusted view");
    }
  };
  const handlers = {
    restartToUpdate: (event: Electron.IpcMainInvokeEvent) => {
      assertTrusted(event.sender);
      return service.restartToUpdate();
    },
    checkForUpdates: (event: Electron.IpcMainInvokeEvent) => {
      assertTrusted(event.sender);
      return service.checkForUpdates();
    },
    getRunningLocalSessionCount: (event: Electron.IpcMainInvokeEvent) => {
      assertTrusted(event.sender);
      return service.getRunningLocalSessions().length;
    },
    getRunningLocalSessions: (event: Electron.IpcMainInvokeEvent) => {
      assertTrusted(event.sender);
      return service.getRunningLocalSessions();
    },
    restartToUpdateWhenIdle: (event: Electron.IpcMainInvokeEvent) => {
      assertTrusted(event.sender);
      return service.restartToUpdateWhenIdle();
    },
    cancelPendingRestart: (event: Electron.IpcMainInvokeEvent) => {
      assertTrusted(event.sender);
      service.cancelPendingRestart();
    },
  };
  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), handler);
  }
  const getStateChannel = channel("updaterState_$store$_getState");
  const getStateSyncChannel = channel("updaterState_$store$_getStateSync");
  const updateChannel = channel("updaterState_$store$_update");
  ipcMain.handle(getStateChannel, (event) => {
    assertTrusted(event.sender);
    return service.getState();
  });
  const syncHandler = (event: Electron.IpcMainEvent): void => {
    try {
      assertTrusted(event.sender);
      event.returnValue = { result: service.getState() };
    } catch (error) {
      event.returnValue = {
        error: error instanceof Error ? error.message : String(error),
      };
    }
  };
  ipcMain.on(getStateSyncChannel, syncHandler);
  const unsubscribe = service.subscribe((state) => {
    for (const webContents of trustedWebContents) {
      if (!webContents.isDestroyed()) webContents.send(updateChannel, state);
    }
  });
  return () => {
    unsubscribe();
    for (const method of Object.keys(handlers)) {
      ipcMain.removeHandler(channel(method));
    }
    ipcMain.removeHandler(getStateChannel);
    ipcMain.off(getStateSyncChannel, syncHandler);
    service.dispose();
  };
}
