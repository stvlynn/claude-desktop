// Restored from ref/.vite/build/findInPage.js
// Restored IPC surface: claude.internal.findInPage.FindInPage

import { contextBridge, ipcRenderer } from "electron";
import { webFrame } from "electron/renderer";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { registerDesktopIntlPreload } from "./claude-window-preload-runtime";

const findChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.internal.findInPage", "FindInPage", method);

function isTopFrame(): boolean {
  if (
    "frameToken" in webFrame &&
    webFrame.top &&
    "frameToken" in webFrame.top
  ) {
    return webFrame.top.frameToken === webFrame.frameToken;
  }
  return webFrame.top?.routingId === webFrame.routingId;
}

function subscribe<T>(channel: string) {
  return (listener: (value: T) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, value: T) =>
      listener(value);
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.removeListener(channel, handler);
  };
}

function subscribeVoid(channel: string) {
  return (listener: () => void) => {
    const handler = () => listener();
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.removeListener(channel, handler);
  };
}

if (isTopFrame()) {
  contextBridge.exposeInMainWorld("claude.internal.findInPage", {
    FindInPage: {
      findInPage: (query: string, options: unknown) =>
        ipcRenderer.invoke(findChannel("findInPage"), query, options),
      stopFindInPage: () => ipcRenderer.invoke(findChannel("stopFindInPage")),
      endFindSession: () => ipcRenderer.invoke(findChannel("endFindSession")),
      onStepToMatch: subscribe<boolean>(findChannel("stepToMatch")),
      onFocusInput: subscribeVoid(findChannel("focusInput")),
      onBlurInput: subscribeVoid(findChannel("blurInput")),
    },
  });
}

registerDesktopIntlPreload();
