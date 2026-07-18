// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { AppFeaturesService } from "../application/app-features-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const getSupportedFeaturesChannel = currentClaudeIpcChannel(
  "claude.settings",
  "AppFeatures",
  "getSupportedFeatures",
);

export function registerCurrentAppFeaturesIpc({
  service,
  trustedWebContents,
}: {
  service: AppFeaturesService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  ipcMain.handle(getSupportedFeaturesChannel, (event) => {
    if (!trustedWebContents.has(event.sender)) {
      throw new Error("Rejected AppFeatures request from an untrusted view");
    }
    return service.getSupportedFeatures();
  });
  return () => ipcMain.removeHandler(getSupportedFeaturesChannel);
}
