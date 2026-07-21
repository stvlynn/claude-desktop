// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import {
  LOCAL_AGENT_MODE_SESSIONS_CONTRACT,
  localAgentModeSessionMethods,
} from "../../shared/contracts/local-agent-mode-sessions";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel(
    "claude.web",
    LOCAL_AGENT_MODE_SESSIONS_CONTRACT,
    method,
  );

export function createCurrentLocalAgentModeSessionsPreloadApi() {
  const invoke = (method: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel(method), ...args);
  const methods: Record<string, (...args: unknown[]) => Promise<unknown>> = {};
  for (const method of localAgentModeSessionMethods)
    methods[method] = (...args) => invoke(method, ...args);
  return {
    ...methods,
    onOnDirectMcpServerStatusesChanged: event(
      "onDirectMcpServerStatusesChanged",
    ),
    onOnManagedAskToolNamesChanged: event("onManagedAskToolNamesChanged"),
    onOnBridgePermissionPreflight: event("onBridgePermissionPreflight"),
    onOnEvent: event("onEvent"),
    onOnToolPermissionRequest: event("onToolPermissionRequest"),
    onOnCoworkFromMain: event("onCoworkFromMain"),
    onOnRemoteSessionStart: event("onRemoteSessionStart"),
    onOnCuEmergencyStop: event("onCuEmergencyStop"),
    onWatchRecordingComplete: event("watchRecordingComplete"),
    sessionsBridgeStatusStore: store("sessionsBridgeStatus"),
    interactiveAuthStore: store("interactiveAuth"),
  };
}

function event(name: string) {
  return (listener: (...args: unknown[]) => void): (() => void) => {
    const eventChannel = channel(name);
    const handler = (_event: Electron.IpcRendererEvent, ...args: unknown[]) =>
      listener(...args);
    ipcRenderer.on(eventChannel, handler);
    return () => ipcRenderer.off(eventChannel, handler);
  };
}

function store(name: string) {
  return {
    getState: () => ipcRenderer.invoke(channel(`${name}_$store$_getState`)),
    getStateSync: () => {
      const response = ipcRenderer.sendSync(
        channel(`${name}_$store$_getStateSync`),
      ) as { error?: string; result?: unknown };
      if (response.error) throw new Error(response.error);
      return response.result;
    },
    onStateChange: event(`${name}_$store$_update`),
  };
}
