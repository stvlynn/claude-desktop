// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "Launch", method);

export function createCurrentLaunchPreloadApi(
  onEvent: (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ) => () => void,
) {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  return {
    isAvailable: () => invoke("isAvailable"),
    getLogs: (...args: unknown[]) => invoke("getLogs", ...args),
    stopServer: (...args: unknown[]) => invoke("stopServer", ...args),
    showPreview: (...args: unknown[]) => invoke("showPreview", ...args),
    hidePreview: (...args: unknown[]) => invoke("hidePreview", ...args),
    destroyPreview: (...args: unknown[]) => invoke("destroyPreview", ...args),
    refreshPreview: (...args: unknown[]) => invoke("refreshPreview", ...args),
    setPreviewViewport: (...args: unknown[]) =>
      invoke("setPreviewViewport", ...args),
    clearPreviewViewport: (...args: unknown[]) =>
      invoke("clearPreviewViewport", ...args),
    setPreviewColorScheme: (...args: unknown[]) =>
      invoke("setPreviewColorScheme", ...args),
    toggleSelectionMode: (...args: unknown[]) =>
      invoke("toggleSelectionMode", ...args),
    startFromConfig: (...args: unknown[]) => invoke("startFromConfig", ...args),
    focusOrOpenPreviewTab: (...args: unknown[]) =>
      invoke("focusOrOpenPreviewTab", ...args),
    openExternalLinkInPreview: (...args: unknown[]) =>
      invoke("openExternalLinkInPreview", ...args),
    getConfiguredServices: (...args: unknown[]) =>
      invoke("getConfiguredServices", ...args),
    getAutoVerify: (...args: unknown[]) => invoke("getAutoVerify", ...args),
    setAutoVerify: (...args: unknown[]) => invoke("setAutoVerify", ...args),
    getPreviewUrl: (...args: unknown[]) => invoke("getPreviewUrl", ...args),
    navigatePreview: (...args: unknown[]) => invoke("navigatePreview", ...args),
    goBack: (...args: unknown[]) => invoke("goBack", ...args),
    goForward: (...args: unknown[]) => invoke("goForward", ...args),
    setActivePreviewTab: (...args: unknown[]) =>
      invoke("setActivePreviewTab", ...args),
    closePreviewTab: (...args: unknown[]) => invoke("closePreviewTab", ...args),
    openPreviewTab: (...args: unknown[]) => invoke("openPreviewTab", ...args),
    closeAllPreviewTabs: (...args: unknown[]) =>
      invoke("closeAllPreviewTabs", ...args),
    getPreviewTabs: (...args: unknown[]) => invoke("getPreviewTabs", ...args),
    capturePreviewScreenshot: (...args: unknown[]) =>
      invoke("capturePreviewScreenshot", ...args),
    capturePreviewScreenshotIfChanged: (...args: unknown[]) =>
      invoke("capturePreviewScreenshotIfChanged", ...args),
    exportPreview: (...args: unknown[]) => invoke("exportPreview", ...args),
    getPreviewNavState: (...args: unknown[]) =>
      invoke("getPreviewNavState", ...args),
    loadHtmlPreview: (...args: unknown[]) => invoke("loadHtmlPreview", ...args),
    loadClaudePagePreview: (...args: unknown[]) =>
      invoke("loadClaudePagePreview", ...args),
    loadHtmlPreviewContent: (...args: unknown[]) =>
      invoke("loadHtmlPreviewContent", ...args),
    getPreviewAllowedOrigins: () => invoke("getPreviewAllowedOrigins"),
    removePreviewAllowedOrigin: (...args: unknown[]) =>
      invoke("removePreviewAllowedOrigin", ...args),
    clearPreviewAllowedOrigins: () => invoke("clearPreviewAllowedOrigins"),
    addPreviewAllowedOrigin: (...args: unknown[]) =>
      invoke("addPreviewAllowedOrigin", ...args),
    openPreviewInBrowser: (...args: unknown[]) =>
      invoke("openPreviewInBrowser", ...args),
    startBrowserPreview: (...args: unknown[]) =>
      invoke("startBrowserPreview", ...args),
    pickHtmlFile: (...args: unknown[]) => invoke("pickHtmlFile", ...args),
    sendClaudePageShareCommand: (...args: unknown[]) =>
      invoke("sendClaudePageShareCommand", ...args),
    sendClaudePageDismissCommand: (...args: unknown[]) =>
      invoke("sendClaudePageDismissCommand", ...args),
    onElementSelected: (listener: (...args: unknown[]) => void) =>
      onEvent("Launch", "elementSelected", listener),
    onPreviewUrlChanged: (listener: (...args: unknown[]) => void) =>
      onEvent("Launch", "previewUrlChanged", listener),
    onPreviewTabsChanged: (listener: (...args: unknown[]) => void) =>
      onEvent("Launch", "previewTabsChanged", listener),
    onPreviewSelectionShortcut: (listener: (...args: unknown[]) => void) =>
      onEvent("Launch", "previewSelectionShortcut", listener),
    activeServers: {
      getState: () => invoke("activeServers_$store$_getState"),
      getStateSync: () => {
        const response = ipcRenderer.sendSync(
          channel("activeServers_$store$_getStateSync"),
        ) as { error?: string; result?: unknown };
        if (response.error) throw new Error(response.error);
        return response.result;
      },
      onStateChange: (listener: (...args: unknown[]) => void) =>
        onEvent("Launch", "activeServers_$store$_update", listener),
    },
  };
}
