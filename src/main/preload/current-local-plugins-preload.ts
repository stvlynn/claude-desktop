// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "LocalPlugins", method);

export function createCurrentLocalPluginsPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  return {
    getPlugins: (...args: unknown[]) => invoke("getPlugins", ...args),
    getDownloadedRemotePlugins: (...args: unknown[]) =>
      invoke("getDownloadedRemotePlugins", ...args),
    syncRemotePlugins: (...args: unknown[]) =>
      invoke("syncRemotePlugins", ...args),
    listSkillFiles: (...args: unknown[]) => invoke("listSkillFiles", ...args),
    uploadPlugin: (...args: unknown[]) => invoke("uploadPlugin", ...args),
    deletePlugin: (...args: unknown[]) => invoke("deletePlugin", ...args),
    setPluginEnabled: (...args: unknown[]) =>
      invoke("setPluginEnabled", ...args),
    getPluginOAuthStatus: (...args: unknown[]) =>
      invoke("getPluginOAuthStatus", ...args),
    startPluginOAuthFlow: (...args: unknown[]) =>
      invoke("startPluginOAuthFlow", ...args),
    revokePluginOAuth: (...args: unknown[]) =>
      invoke("revokePluginOAuth", ...args),
    getPluginCliStatus: (...args: unknown[]) =>
      invoke("getPluginCliStatus", ...args),
    setPluginEnvVars: (...args: unknown[]) =>
      invoke("setPluginEnvVars", ...args),
    setPluginOAuthClient: (...args: unknown[]) =>
      invoke("setPluginOAuthClient", ...args),
    getPluginShimOps: (...args: unknown[]) =>
      invoke("getPluginShimOps", ...args),
    getPluginCliBatch: (...args: unknown[]) =>
      invoke("getPluginCliBatch", ...args),
    setPluginShimPermission: (...args: unknown[]) =>
      invoke("setPluginShimPermission", ...args),
    onOnCliOpAlwaysAllowed: (listener: (value: unknown) => void) => {
      const eventChannel = channel("onCliOpAlwaysAllowed");
      const handler = (_event: Electron.IpcRendererEvent, value: unknown) =>
        listener(value);
      ipcRenderer.on(eventChannel, handler);
      return () => ipcRenderer.off(eventChannel, handler);
    },
  };
}
