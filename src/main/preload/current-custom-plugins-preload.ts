// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "CustomPlugins", method);

export function createCurrentCustomPluginsPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  const api: Record<string, (...args: unknown[]) => unknown> = {};
  for (const method of [
    "addMarketplace",
    "removeMarketplace",
    "refreshMarketplace",
    "listMarketplaces",
    "installPlugin",
    "updatePlugin",
    "uninstallPlugin",
    "listInstalledPlugins",
    "listAvailablePlugins",
    "getCachedCommands",
    "getInstallCounts",
    "listRemotePluginsPage",
    "checkPluginHasLocalChanges",
    "getAndClearMigrationIssues",
    "listLocalOrgPlugins",
    "installLocalOrgPlugin",
    "syncLocalOrgPlugins",
  ])
    api[method] = (...args: unknown[]) => invoke(method, ...args);
  return {
    ...api,
    onInstallProgress: (
      listener: (pluginId: string, message: string) => void,
    ) => {
      const eventChannel = channel("installProgress");
      const handler = (
        _event: Electron.IpcRendererEvent,
        pluginId: string,
        message: string,
      ) => listener(pluginId, message);
      ipcRenderer.on(eventChannel, handler);
      return () => ipcRenderer.off(eventChannel, handler);
    },
  };
}
