// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type {
  SupportBundleAction,
  SupportBundleService,
} from "../application/support-bundle-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "SupportBundle", method);

const actions = new Set<SupportBundleAction>([
  "export",
  "send",
  "reveal",
  "cancel",
]);

export function registerCurrentSupportBundleIpc({
  service,
  trustedWebContents,
}: {
  service: SupportBundleService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected SupportBundle request from an untrusted view");
    }
  };
  const submitActionChannel = channel("submitAction");
  const getStateChannel = channel("supportBundleState_$store$_getState");
  const getStateSyncChannel = channel(
    "supportBundleState_$store$_getStateSync",
  );
  const updateChannel = channel("supportBundleState_$store$_update");

  ipcMain.handle(submitActionChannel, (event, action: unknown) => {
    assertTrusted(event.sender);
    if (
      typeof action !== "string" ||
      !actions.has(action as SupportBundleAction)
    ) {
      throw new Error("Invalid SupportBundle action");
    }
    return service.submitAction(action as SupportBundleAction);
  });
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
    ipcMain.removeHandler(submitActionChannel);
    ipcMain.removeHandler(getStateChannel);
    ipcMain.off(getStateSyncChannel, syncHandler);
  };
}
