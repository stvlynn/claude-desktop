// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { LaunchService } from "../application/launch-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "Launch", method);

export function registerCurrentLaunchIpc({
  service,
  trustedWebContents,
}: {
  service: LaunchService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const methods = [
    "isAvailable",
    "getLogs",
    "stopServer",
    "showPreview",
    "hidePreview",
    "destroyPreview",
    "refreshPreview",
    "setPreviewViewport",
    "clearPreviewViewport",
    "setPreviewColorScheme",
    "toggleSelectionMode",
    "startFromConfig",
    "focusOrOpenPreviewTab",
    "openExternalLinkInPreview",
    "getConfiguredServices",
    "getAutoVerify",
    "setAutoVerify",
    "getPreviewUrl",
    "navigatePreview",
    "goBack",
    "goForward",
    "setActivePreviewTab",
    "closePreviewTab",
    "openPreviewTab",
    "closeAllPreviewTabs",
    "getPreviewTabs",
    "capturePreviewScreenshot",
    "capturePreviewScreenshotIfChanged",
    "exportPreview",
    "getPreviewNavState",
    "loadHtmlPreview",
    "loadClaudePagePreview",
    "loadHtmlPreviewContent",
    "getPreviewAllowedOrigins",
    "removePreviewAllowedOrigin",
    "clearPreviewAllowedOrigins",
    "addPreviewAllowedOrigin",
    "openPreviewInBrowser",
    "startBrowserPreview",
    "pickHtmlFile",
    "sendClaudePageShareCommand",
    "sendClaudePageDismissCommand",
  ] as const;
  for (const method of methods) {
    ipcMain.handle(channel(method), (event, ..._args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error("Rejected Launch request from an untrusted view");
      }
      return service[method]();
    });
  }
  ipcMain.handle(channel("activeServers_$store$_getState"), (event) => {
    if (!trustedWebContents.has(event.sender)) {
      throw new Error("Rejected Launch store request from an untrusted view");
    }
    return service.getActiveServers();
  });
  const syncChannel = channel("activeServers_$store$_getStateSync");
  const syncHandler = (event: Electron.IpcMainEvent): void => {
    if (!trustedWebContents.has(event.sender)) {
      event.returnValue = { error: "Rejected Launch store request" };
      return;
    }
    event.returnValue = { result: service.getActiveServers() };
  };
  ipcMain.on(syncChannel, syncHandler);
  return () => {
    for (const method of methods) ipcMain.removeHandler(channel(method));
    ipcMain.removeHandler(channel("activeServers_$store$_getState"));
    ipcMain.off(syncChannel, syncHandler);
  };
}
