// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { CustomPluginsService } from "../application/custom-plugins-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CustomPlugins", method);

export function registerCurrentCustomPluginsIpc({
  service,
  trustedWebContents,
}: {
  service: CustomPluginsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const handlers: Record<string, (args: unknown[]) => unknown> = {
    addMarketplace: (args) => service.addMarketplace(stringArg(args, 0)),
    removeMarketplace: (args) => service.removeMarketplace(stringArg(args, 0)),
    refreshMarketplace: (args) =>
      service.refreshMarketplace(stringArg(args, 0)),
    listMarketplaces: () => service.listMarketplaces(),
    installPlugin: (args) => service.installPlugin(stringArg(args, 0)),
    updatePlugin: (args) => service.updatePlugin(stringArg(args, 0)),
    uninstallPlugin: (args) => service.uninstallPlugin(stringArg(args, 0)),
    listInstalledPlugins: () => service.listInstalledPlugins(),
    listAvailablePlugins: () => service.listAvailablePlugins(),
    getCachedCommands: () => service.getCachedCommands(),
    getInstallCounts: () => service.getInstallCounts(),
    listRemotePluginsPage: (args) =>
      service.listRemotePluginsPage(integerArg(args, 0), integerArg(args, 1)),
    checkPluginHasLocalChanges: () => service.checkPluginHasLocalChanges(),
    getAndClearMigrationIssues: () => service.getAndClearMigrationIssues(),
    listLocalOrgPlugins: () => service.listLocalOrgPlugins(),
    installLocalOrgPlugin: (args) =>
      service.installLocalOrgPlugin(stringArg(args, 0)),
    syncLocalOrgPlugins: () => service.syncLocalOrgPlugins(),
  };
  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender))
        throw new Error(
          "Rejected CustomPlugins request from an untrusted view",
        );
      return handler(args);
    });
  }
  const progressListener = (pluginId: string, message: string): void => {
    for (const contents of trustedWebContents)
      if (!contents.isDestroyed())
        contents.send(channel("installProgress"), pluginId, message);
  };
  service.on("installProgress", progressListener);
  return () => {
    for (const method of Object.keys(handlers))
      ipcMain.removeHandler(channel(method));
    service.off("installProgress", progressListener);
  };
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}
function integerArg(args: unknown[], index: number): number {
  const value = args[index];
  if (!Number.isInteger(value) || (value as number) < 0)
    throw new TypeError(`Argument ${index} must be a non-negative integer`);
  return value as number;
}
