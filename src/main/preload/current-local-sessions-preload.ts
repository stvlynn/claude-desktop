// Restored from ref/.vite/build/mainView.js

import { ipcRenderer } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import {
  LOCAL_SESSIONS_CONTRACT,
  LOCAL_SESSION_METHODS,
} from "../../shared/contracts/local-sessions";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", LOCAL_SESSIONS_CONTRACT, method);

export function createCurrentLocalSessionsPreloadApi() {
  const methods: Record<string, (...args: unknown[]) => Promise<unknown>> = {};
  for (const method of LOCAL_SESSION_METHODS) {
    methods[method] = (...args) => ipcRenderer.invoke(channel(method), ...args);
  }
  return {
    ...methods,
    onOnEvent: event("onEvent"),
    onOnToolPermissionRequest: event("onToolPermissionRequest"),
    onOnSSHPasswordRequired: event("onSSHPasswordRequired"),
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
