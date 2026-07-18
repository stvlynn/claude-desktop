// Restored from ref/.vite/build/mainView.js and mainWindow.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "Custom3pSetup", method);

export function createCurrentCustom3pSetupPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  return {
    exportConfig: (...args: unknown[]) => invoke("exportConfig", ...args),
    relaunchApp: () => invoke("relaunchApp"),
    probeEgressHosts: (...args: unknown[]) =>
      invoke("probeEgressHosts", ...args),
    scanOrgPlugins: () => invoke("scanOrgPlugins"),
    probeMcpServer: (...args: unknown[]) => invoke("probeMcpServer", ...args),
    authorizeAndProbeMcpServer: (...args: unknown[]) =>
      invoke("authorizeAndProbeMcpServer", ...args),
    forgetMcpOAuth: (...args: unknown[]) => invoke("forgetMcpOAuth", ...args),
    getLoginDesktop3pStatus: () => invoke("getLoginDesktop3pStatus"),
    getConfigHealth: () => invoke("getConfigHealth"),
    recheckConfigHealth: () => invoke("recheckConfigHealth"),
    setDeploymentMode: (...args: unknown[]) =>
      invoke("setDeploymentMode", ...args),
    openSetupWindow: () => invoke("openSetupWindow"),
    signInWithAnthropicApi: () => invoke("signInWithAnthropicApi"),
    applyAnthropicApiShortcut: () => invoke("applyAnthropicApiShortcut"),
    openDeviceCodeWindowForE2e: () => invoke("openDeviceCodeWindowForE2e"),
    listConfigs: () => invoke("listConfigs"),
    readConfig: (...args: unknown[]) => invoke("readConfig", ...args),
    writeConfig: (...args: unknown[]) => invoke("writeConfig", ...args),
    createConfig: (...args: unknown[]) => invoke("createConfig", ...args),
    duplicateConfig: (...args: unknown[]) => invoke("duplicateConfig", ...args),
    renameConfig: (...args: unknown[]) => invoke("renameConfig", ...args),
    deleteConfig: (...args: unknown[]) => invoke("deleteConfig", ...args),
    setAppliedConfig: (...args: unknown[]) =>
      invoke("setAppliedConfig", ...args),
    revealConfig: (...args: unknown[]) => invoke("revealConfig", ...args),
    triggerBootstrapAuth: (...args: unknown[]) =>
      invoke("triggerBootstrapAuth", ...args),
    bootstrapStateStore: {
      getState: () => invoke("bootstrapState_$store$_getState"),
      getStateSync: () => {
        const response = ipcRenderer.sendSync(
          channel("bootstrapState_$store$_getStateSync"),
        ) as { error?: string; result?: unknown };
        if (response.error) throw new Error(response.error);
        return response.result;
      },
      onStateChange: (listener: (state: unknown) => void) => {
        const eventChannel = channel("bootstrapState_$store$_update");
        const handler = (_event: Electron.IpcRendererEvent, state: unknown) =>
          listener(state);
        ipcRenderer.on(eventChannel, handler);
        return () => ipcRenderer.off(eventChannel, handler);
      },
    },
  };
}
