// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "Extensions", method);

export function createCurrentExtensionsPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  const event = (method: string, listener: (...args: unknown[]) => void) => {
    const eventChannel = channel(method);
    const handler = (_event: Electron.IpcRendererEvent, ...args: unknown[]) =>
      listener(...args);
    ipcRenderer.on(eventChannel, handler);
    return () => ipcRenderer.off(eventChannel, handler);
  };
  return {
    isExtensionsEnabled: () => invoke("isExtensionsEnabled"),
    isDirectoryEnabled: () => invoke("isDirectoryEnabled"),
    isDesktopExtensionSignatureRequired: () =>
      invoke("isDesktopExtensionSignatureRequired"),
    isDesktopExtensionDirectoryEnabled: () =>
      invoke("isDesktopExtensionDirectoryEnabled"),
    getInstalledExtensionsWithState: () =>
      invoke("getInstalledExtensionsWithState"),
    getIsUpdateAvailable: (...args: unknown[]) =>
      invoke("getIsUpdateAvailable", ...args),
    getManifestCompatibilityResult: (...args: unknown[]) =>
      invoke("getManifestCompatibilityResult", ...args),
    getAvailableExtensionRuntimes: () =>
      invoke("getAvailableExtensionRuntimes"),
    getExtensionSettings: (...args: unknown[]) =>
      invoke("getExtensionSettings", ...args),
    setExtensionSettings: (...args: unknown[]) =>
      invoke("setExtensionSettings", ...args),
    installDxt: (...args: unknown[]) => invoke("installDxt", ...args),
    installDxtUnpacked: (...args: unknown[]) =>
      invoke("installDxtUnpacked", ...args),
    installDxtFromDirectory: (...args: unknown[]) =>
      invoke("installDxtFromDirectory", ...args),
    handleDxtFile: (...args: unknown[]) => invoke("handleDxtFile", ...args),
    showInstallDxtDialog: () => invoke("showInstallDxtDialog"),
    deleteExtension: (...args: unknown[]) => invoke("deleteExtension", ...args),
    showExtensionInFolder: (...args: unknown[]) =>
      invoke("showExtensionInFolder", ...args),
    openExtensionsFolder: () => invoke("openExtensionsFolder"),
    openExtensionSettingsFolder: () => invoke("openExtensionSettingsFolder"),
    getDirectoryUrl: () => invoke("getDirectoryUrl"),
    getExtension: (...args: unknown[]) => invoke("getExtension", ...args),
    getExtensions: (...args: unknown[]) => invoke("getExtensions", ...args),
    getExtensionVersion: (...args: unknown[]) =>
      invoke("getExtensionVersion", ...args),
    getExtensionVersions: (...args: unknown[]) =>
      invoke("getExtensionVersions", ...args),
    onExtensionsChanged: (listener: (...args: unknown[]) => void) =>
      event("extensionsChanged", listener),
    onExtensionSettingsChanged: (listener: (...args: unknown[]) => void) =>
      event("extensionSettingsChanged", listener),
    onPreviewExtensionInstallation: (listener: (...args: unknown[]) => void) =>
      event("previewExtensionInstallation", listener),
    installExtensionFromPreview: (...args: unknown[]) =>
      invoke("installExtensionFromPreview", ...args),
    refreshAllowlistCheck: () => invoke("refreshAllowlistCheck"),
    onExtensionDownloadProgress: (listener: (...args: unknown[]) => void) =>
      event("extensionDownloadProgress", listener),
  };
}
