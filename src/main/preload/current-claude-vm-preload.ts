// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "ClaudeVM", method);

export function createCurrentClaudeVmPreloadApi(
  onEvent: (
    contract: string,
    method: string,
    listener: (...args: unknown[]) => void,
  ) => () => void,
) {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  const sync = (method: string): unknown => {
    const response = ipcRenderer.sendSync(channel(method)) as {
      error?: string;
      result?: unknown;
    };
    if (response.error) throw new Error(response.error);
    return response.result;
  };
  return {
    download: () => invoke("download"),
    startVM: (options?: { memoryGB?: number }) => invoke("startVM", options),
    getDownloadStatus: () => invoke("getDownloadStatus"),
    getRunningStatus: () => invoke("getRunningStatus"),
    isHostLoopModeEnabled: () => sync("isHostLoopModeEnabled"),
    isHostLoopDevOverrideActive: () => sync("isHostLoopDevOverrideActive"),
    setForceDisableHostLoop: (value: boolean) =>
      invoke("setForceDisableHostLoop", value),
    setYukonSilverConfig: (config: unknown) =>
      invoke("setYukonSilverConfig", config),
    deleteAndReinstall: () => invoke("deleteAndReinstall"),
    checkVirtualMachinePlatform: () => invoke("checkVirtualMachinePlatform"),
    enableVirtualMachinePlatform: () => invoke("enableVirtualMachinePlatform"),
    restartAfterVMPInstall: () => invoke("restartAfterVMPInstall"),
    onDownloadProgress: (listener: (...args: unknown[]) => void) =>
      onEvent("ClaudeVM", "downloadProgress", listener),
    onDownloadStatusChanged: (listener: (...args: unknown[]) => void) =>
      onEvent("ClaudeVM", "downloadStatusChanged", listener),
    onRunningStatusChanged: (listener: (...args: unknown[]) => void) =>
      onEvent("ClaudeVM", "runningStatusChanged", listener),
    onStartupError: (listener: (...args: unknown[]) => void) =>
      onEvent("ClaudeVM", "startupError", listener),
    apiReachability: {
      getState: () => invoke("apiReachability_$store$_getState"),
      getStateSync: () => sync("apiReachability_$store$_getStateSync"),
      onStateChange: (listener: (...args: unknown[]) => void) =>
        onEvent("ClaudeVM", "apiReachability_$store$_update", listener),
    },
  };
}
