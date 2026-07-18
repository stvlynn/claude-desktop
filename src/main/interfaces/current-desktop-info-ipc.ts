// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { ClaudeLogExportService } from "../infrastructure/claude-log-export-service";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "DesktopInfo", method);

export function registerCurrentDesktopInfoIpc({
  service,
  trustedWebContents,
}: {
  service: ClaudeLogExportService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected DesktopInfo request from an untrusted view");
    }
  };
  ipcMain.handle(channel("getSystemInfo"), (event) => {
    assertTrusted(event.sender);
    return service.getSystemInfo();
  });
  ipcMain.handle(channel("showLogsInFileManager"), async (event) => {
    assertTrusted(event.sender);
    await service.showLogsInFileManager();
  });
  return () => {
    ipcMain.removeHandler(channel("getSystemInfo"));
    ipcMain.removeHandler(channel("showLogsInFileManager"));
  };
}
