// Restored from ref/.vite/build/mainView.js and mainWindow.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { createCurrentExtensionsPreloadApi } from "./current-extensions-preload";
import { createCurrentCustom3pSetupPreloadApi } from "./current-custom-3p-setup-preload";

const settingsChannel = (contract: string, method: string): string =>
  currentClaudeIpcChannel("claude.settings", contract, method);

export function createCurrentClaudeSettingsPreloadApi() {
  return {
    Extensions: createCurrentExtensionsPreloadApi(),
    Custom3pSetup: createCurrentCustom3pSetupPreloadApi(),
    ClaudeAiImport: {
      isAvailable: () =>
        ipcRenderer.invoke(settingsChannel("ClaudeAiImport", "isAvailable")),
      getAuthState: () =>
        ipcRenderer.invoke(settingsChannel("ClaudeAiImport", "getAuthState")),
      startAuth: () =>
        ipcRenderer.invoke(settingsChannel("ClaudeAiImport", "startAuth")),
      reopenAuthTab: () =>
        ipcRenderer.invoke(settingsChannel("ClaudeAiImport", "reopenAuthTab")),
      clearAuth: () =>
        ipcRenderer.invoke(settingsChannel("ClaudeAiImport", "clearAuth")),
      runImport: () =>
        ipcRenderer.invoke(settingsChannel("ClaudeAiImport", "runImport")),
      onAuthUserCode: (listener: (code: string) => void) => {
        const channel = settingsChannel("ClaudeAiImport", "onAuthUserCode");
        const handler = (_event: Electron.IpcRendererEvent, code: string) =>
          listener(code);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
      onAuthStateChange: (listener: (state: unknown) => void) => {
        const channel = settingsChannel("ClaudeAiImport", "onAuthStateChange");
        const handler = (_event: Electron.IpcRendererEvent, state: unknown) =>
          listener(state);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
    },
    AppFeatures: {
      getSupportedFeatures: () =>
        ipcRenderer.invoke(
          settingsChannel("AppFeatures", "getSupportedFeatures"),
        ),
    },
    AppPreferences: {
      getPreferences: () =>
        ipcRenderer.invoke(settingsChannel("AppPreferences", "getPreferences")),
      setPreference: (key: string, value: unknown) =>
        ipcRenderer.invoke(
          settingsChannel("AppPreferences", "setPreference"),
          key,
          value,
        ),
      onPreferencesChanged: (listener: (preferences: unknown) => void) => {
        const channel = settingsChannel("AppPreferences", "preferencesChanged");
        const handler = (
          _event: Electron.IpcRendererEvent,
          preferences: unknown,
        ) => listener(preferences);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
    },
    AppConfig: {
      getAppConfig: () =>
        ipcRenderer.invoke(settingsChannel("AppConfig", "getAppConfig")),
      setAppFeature: (feature: string, enabled: boolean) =>
        ipcRenderer.invoke(
          settingsChannel("AppConfig", "setAppFeature"),
          feature,
          enabled,
        ),
      setIsUsingBuiltInNodeForMcp: (enabled: boolean) =>
        ipcRenderer.invoke(
          settingsChannel("AppConfig", "setIsUsingBuiltInNodeForMcp"),
          enabled,
        ),
      setIsDxtAutoUpdatesEnabled: (enabled: boolean) =>
        ipcRenderer.invoke(
          settingsChannel("AppConfig", "setIsDxtAutoUpdatesEnabled"),
          enabled,
        ),
    },
    Custom3pHelperRun: {
      runCredentialHelper: (
        helperPath: string,
        environment: Record<string, string>,
        timeoutSeconds: number,
      ) =>
        ipcRenderer.invoke(
          settingsChannel("Custom3pHelperRun", "runCredentialHelper"),
          helperPath,
          environment,
          timeoutSeconds,
        ),
      probeInference: (options: unknown) =>
        ipcRenderer.invoke(
          settingsChannel("Custom3pHelperRun", "probeInference"),
          options,
        ),
      discoverModels: (options: unknown) =>
        ipcRenderer.invoke(
          settingsChannel("Custom3pHelperRun", "discoverModels"),
          options,
        ),
      onProbeDeviceCode: (
        listener: (userCode: string, verificationUri: string) => void,
      ) => {
        const channel = settingsChannel("Custom3pHelperRun", "probeDeviceCode");
        const handler = (
          _event: Electron.IpcRendererEvent,
          userCode: string,
          verificationUri: string,
        ) => listener(userCode, verificationUri);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
    },
    DesktopInfo: {
      getSystemInfo: () =>
        ipcRenderer.invoke(settingsChannel("DesktopInfo", "getSystemInfo")),
      showLogsInFileManager: () =>
        ipcRenderer.invoke(
          settingsChannel("DesktopInfo", "showLogsInFileManager"),
        ),
    },
    FilePickers: {
      getDirectoryPath: (multiple = false) =>
        ipcRenderer.invoke(
          settingsChannel("FilePickers", "getDirectoryPath"),
          multiple,
        ),
      getFilePath: (multiple = false) =>
        ipcRenderer.invoke(
          settingsChannel("FilePickers", "getFilePath"),
          multiple,
        ),
    },
    GlobalShortcut: {
      setGlobalShortcut: (accelerator: string) =>
        ipcRenderer.invoke(
          settingsChannel("GlobalShortcut", "setGlobalShortcut"),
          accelerator,
        ),
      getGlobalShortcut: () =>
        ipcRenderer.invoke(
          settingsChannel("GlobalShortcut", "getGlobalShortcut"),
        ),
      onGlobalShortcutChange: (listener: (accelerator: string) => void) => {
        const channel = settingsChannel(
          "GlobalShortcut",
          "globalShortcutChange",
        );
        const handler = (
          _event: Electron.IpcRendererEvent,
          accelerator: string,
        ) => listener(accelerator);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
    },
    MCP: {
      isLocalDevMcpEnabled: () =>
        ipcRenderer.invoke(settingsChannel("MCP", "isLocalDevMcpEnabled")),
      setMcpServerConfigs: (configs: unknown) =>
        ipcRenderer.invoke(
          settingsChannel("MCP", "setMcpServerConfigs"),
          configs,
        ),
      getMcpServersConfig: (forceReload: boolean | null = null) =>
        ipcRenderer.invoke(
          settingsChannel("MCP", "getMcpServersConfig"),
          forceReload,
        ),
      getMcpServersConfigWithStatus: () =>
        ipcRenderer.invoke(
          settingsChannel("MCP", "getMcpServersConfigWithStatus"),
        ),
      revealConfig: () =>
        ipcRenderer.invoke(settingsChannel("MCP", "revealConfig")),
      revealLogs: () =>
        ipcRenderer.invoke(settingsChannel("MCP", "revealLogs")),
      revealServerLog: (serverName: string) =>
        ipcRenderer.invoke(
          settingsChannel("MCP", "revealServerLog"),
          serverName,
        ),
      onMcpConfigChange: (listener: (configs: unknown) => void) => {
        const channel = settingsChannel("MCP", "mcpConfigChange");
        const handler = (_event: Electron.IpcRendererEvent, configs: unknown) =>
          listener(configs);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
      onMcpStatusChanged: (
        listener: (name: string, status: string, error: string | null) => void,
      ) => {
        const channel = settingsChannel("MCP", "mcpStatusChanged");
        const handler = (
          _event: Electron.IpcRendererEvent,
          name: string,
          status: string,
          error: string | null,
        ) => listener(name, status, error);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
      onRevealMcpServerSettingsRequested: (
        listener: (serverName: string) => void,
      ) => {
        const channel = settingsChannel(
          "MCP",
          "revealMcpServerSettingsRequested",
        );
        const handler = (
          _event: Electron.IpcRendererEvent,
          serverName: string,
        ) => listener(serverName);
        ipcRenderer.on(channel, handler);
        return () => ipcRenderer.off(channel, handler);
      },
    },
    Startup: {
      isStartupOnLoginEnabled: () =>
        ipcRenderer.invoke(
          settingsChannel("Startup", "isStartupOnLoginEnabled"),
        ),
      setStartupOnLoginEnabled: (enabled: boolean) =>
        ipcRenderer.invoke(
          settingsChannel("Startup", "setStartupOnLoginEnabled"),
          enabled,
        ),
      isMenuBarEnabled: () =>
        ipcRenderer.invoke(settingsChannel("Startup", "isMenuBarEnabled")),
      setMenuBarEnabled: (enabled: boolean) =>
        ipcRenderer.invoke(
          settingsChannel("Startup", "setMenuBarEnabled"),
          enabled,
        ),
    },
    SupportBundle: {
      submitAction: (action: string) =>
        ipcRenderer.invoke(
          settingsChannel("SupportBundle", "submitAction"),
          action,
        ),
      supportBundleStateStore: {
        getState: () =>
          ipcRenderer.invoke(
            settingsChannel(
              "SupportBundle",
              "supportBundleState_$store$_getState",
            ),
          ),
        getStateSync: () => {
          const response = ipcRenderer.sendSync(
            settingsChannel(
              "SupportBundle",
              "supportBundleState_$store$_getStateSync",
            ),
          ) as { error?: string; result?: unknown };
          if (response.error) throw new Error(response.error);
          return response.result;
        },
        onStateChange: (listener: (state: unknown) => void) => {
          const eventChannel = settingsChannel(
            "SupportBundle",
            "supportBundleState_$store$_update",
          );
          const handler = (_event: Electron.IpcRendererEvent, state: unknown) =>
            listener(state);
          ipcRenderer.on(eventChannel, handler);
          return () => ipcRenderer.off(eventChannel, handler);
        },
      },
    },
    WakeScheduler: {
      getStatus: () =>
        ipcRenderer.invoke(settingsChannel("WakeScheduler", "getStatus")),
      openSettings: () =>
        ipcRenderer.invoke(settingsChannel("WakeScheduler", "openSettings")),
    },
  };
}
