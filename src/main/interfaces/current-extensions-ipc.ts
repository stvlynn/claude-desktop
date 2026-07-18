// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { ExtensionsService } from "../application/extensions-service";
import type { DxtManifest } from "../infrastructure/dxt-package";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "Extensions", method);

export function registerCurrentExtensionsIpc({
  service,
  trustedWebContents,
}: {
  service: ExtensionsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const handlers: Record<string, (args: unknown[]) => unknown> = {
    isExtensionsEnabled: () => service.isExtensionsEnabled(),
    isDirectoryEnabled: () => service.isDirectoryEnabled(),
    isDesktopExtensionSignatureRequired: () =>
      service.isDesktopExtensionSignatureRequired(),
    isDesktopExtensionDirectoryEnabled: () =>
      service.isDesktopExtensionDirectoryEnabled(),
    getInstalledExtensionsWithState: () =>
      service.getInstalledExtensionsWithState(),
    getIsUpdateAvailable: () => service.getIsUpdateAvailable(),
    getManifestCompatibilityResult: (args) =>
      service.getManifestCompatibilityResult(objectArg(args, 0) as DxtManifest),
    getAvailableExtensionRuntimes: () =>
      service.getAvailableExtensionRuntimes(),
    getExtensionSettings: (args) =>
      service.getExtensionSettings(stringArg(args, 0)),
    setExtensionSettings: (args) =>
      service.setExtensionSettings(stringArg(args, 0), objectArg(args, 1)),
    installDxt: (args) =>
      service.installDxt(stringArg(args, 0), stringArg(args, 1)),
    installDxtUnpacked: (args) =>
      service.installDxtUnpacked(stringArg(args, 0)),
    installDxtFromDirectory: () => service.installDxtFromDirectory(),
    handleDxtFile: (args) => service.handleDxtFile(stringArg(args, 0)),
    showInstallDxtDialog: () => service.showInstallDxtDialog(),
    deleteExtension: (args) => service.deleteExtension(stringArg(args, 0)),
    showExtensionInFolder: (args) =>
      service.showExtensionInFolder(stringArg(args, 0)),
    openExtensionsFolder: () => service.openExtensionsFolder(),
    openExtensionSettingsFolder: () => service.openExtensionSettingsFolder(),
    getDirectoryUrl: () => service.getDirectoryUrl(),
    getExtension: () => service.getExtension(),
    getExtensions: () => service.getExtensions(),
    getExtensionVersion: () => service.getExtensionVersion(),
    getExtensionVersions: () => service.getExtensionVersions(),
    installExtensionFromPreview: (args) =>
      service.installExtensionFromPreview(
        stringArg(args, 0),
        stringArg(args, 1),
      ),
    refreshAllowlistCheck: () => service.refreshAllowlistCheck(),
  };
  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error("Rejected Extensions request from an untrusted view");
      }
      return handler(args);
    });
  }
  const eventNames = [
    "extensionsChanged",
    "extensionSettingsChanged",
    "previewExtensionInstallation",
    "extensionDownloadProgress",
  ] as const;
  const listeners = eventNames.map((eventName) => {
    const listener = (...args: unknown[]): void => {
      for (const contents of trustedWebContents) {
        if (!contents.isDestroyed()) contents.send(channel(eventName), ...args);
      }
    };
    service.on(eventName, listener);
    return { eventName, listener };
  });
  return () => {
    for (const method of Object.keys(handlers))
      ipcMain.removeHandler(channel(method));
    for (const { eventName, listener } of listeners)
      service.off(eventName, listener);
  };
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}

function objectArg(args: unknown[], index: number): Record<string, unknown> {
  const value = args[index];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`Argument ${index} must be an object`);
  }
  return value as Record<string, unknown>;
}
