// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "WakeScheduler", method);

export function registerCurrentWakeSchedulerIpc(
  trustedWebContents: ReadonlySet<WebContents>,
): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected WakeScheduler request from an untrusted view");
    }
  };
  ipcMain.handle(channel("getStatus"), (event) => {
    assertTrusted(event.sender);
    return {
      status: "notFound",
      requiresSetup: false,
      approvedThisCycle: false,
      supported: false,
    };
  });
  ipcMain.handle(channel("openSettings"), (event) => {
    assertTrusted(event.sender);
  });
  return () => {
    ipcMain.removeHandler(channel("getStatus"));
    ipcMain.removeHandler(channel("openSettings"));
  };
}
