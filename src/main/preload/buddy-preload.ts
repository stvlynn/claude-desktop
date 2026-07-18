// Restored from ref/.vite/build/buddy.js
// Restored IPC surface: claude.buddy.Buddy

import { contextBridge, ipcRenderer, webUtils } from "electron";
import { webFrame } from "electron/renderer";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { registerDesktopIntlPreload } from "./claude-window-preload-runtime";

const buddyChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.buddy", "Buddy", method);

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

if (isTopFrame()) {
  const onBuddyEvent = (
    method: string,
    listener: (value: string) => void,
  ): (() => void) => {
    const channel = buddyChannel(method);
    const handler = (_event: Electron.IpcRendererEvent, value: string) =>
      listener(value);
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.off(channel, handler);
  };
  contextBridge.exposeInMainWorld("claude.buddy", {
    Buddy: {
      status: () => ipcRenderer.invoke(buddyChannel("status")),
      deviceStatus: () => ipcRenderer.invoke(buddyChannel("deviceStatus")),
      setName: (name: string) =>
        ipcRenderer.invoke(buddyChannel("setName"), name),
      pairDevice: () => ipcRenderer.invoke(buddyChannel("pairDevice")),
      scanDevices: () => ipcRenderer.invoke(buddyChannel("scanDevices")),
      pickDevice: (deviceId: string) =>
        ipcRenderer.invoke(buddyChannel("pickDevice"), deviceId),
      cancelScan: () => ipcRenderer.invoke(buddyChannel("cancelScan")),
      submitPin: (pin: string | null) =>
        ipcRenderer.invoke(buddyChannel("submitPin"), pin),
      forgetDevice: () => ipcRenderer.invoke(buddyChannel("forgetDevice")),
      pickFolder: () => ipcRenderer.invoke(buddyChannel("pickFolder")),
      preview: (folderPath: string) =>
        ipcRenderer.invoke(buddyChannel("preview"), folderPath),
      install: (folderPath: string) =>
        ipcRenderer.invoke(buddyChannel("install"), folderPath),
      onProgress: (listener: (message: string) => void) =>
        onBuddyEvent("progress", listener),
      onPairingPrompt: (listener: (deviceName: string) => void) =>
        onBuddyEvent("pairingPrompt", listener),
    },
  });
}

registerDesktopIntlPreload();
contextBridge.exposeInMainWorld("buddy", {
  getPathForFile: (file: File) => webUtils.getPathForFile(file),
});
