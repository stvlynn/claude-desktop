// @ts-nocheck
// Restored from ref/.vite/build/index.pre.js
// Electron preload script for the restored src/ build.
//
// Exposes a minimal version of the Claude renderer APIs so the restored pages
// can mount. MainWindowTitleBar APIs are backed by IPC to the main process;
// other namespaces are stubbed.

import { contextBridge, ipcRenderer } from "electron";
import {
  aboutWindowIpcChannels,
  buddyIpcChannels,
  desktopIntlIpcChannels,
  findInPageIpcChannels,
  mainWindowIpcChannels,
  menuIpcChannels,
  overlayIpcChannels,
  quickWindowIpcChannels,
  windowIpcChannels,
} from "../../shared/contracts/preload-api";
import type {
  ClaudeBuddyApi,
  ClaudeFindInPageApi,
  ClaudeHybridApi,
  ClaudeInternalUiApi,
  ClaudeMenuApi,
  ClaudePreloadGlobals,
} from "../../shared/contracts/preload-api";
import type {
  BuddyApi,
  DesktopIntlInitialLocale,
  FindInPageApi,
  LoadErrorDetails,
  NativeContextMenuItem,
  NativeContextMenuResult,
  ShowApplicationMenuRequest,
} from "../../renderer/shared/api/claude-desktop-api";
import type { ClaudeWindowKind } from "../../shared/contracts/window-entry";

const initialLocale = ipcRenderer.sendSync(
  desktopIntlIpcChannels.getInitialLocale,
) as DesktopIntlInitialLocale;

const hybridApi: ClaudeHybridApi = {
  DesktopIntl: {
    getInitialLocale: () => initialLocale,
    requestLocaleChange: async (locale) =>
      ipcRenderer.invoke(desktopIntlIpcChannels.requestLocaleChange, locale),
    onLocaleChanged: (listener) => {
      const handler = (
        _event: Electron.IpcRendererEvent,
        locale: string,
        messages: Record<string, string>,
      ) => listener(locale, messages);
      ipcRenderer.on(desktopIntlIpcChannels.localeChanged, handler);
      return () => {
        ipcRenderer.off(desktopIntlIpcChannels.localeChanged, handler);
      };
    },
  },
};

const internalUiApi: ClaudeInternalUiApi = {
  AboutWindow: {
    getAppName: async () =>
      ipcRenderer.invoke(aboutWindowIpcChannels.getAppName),
    getBuildProps: async () =>
      ipcRenderer.invoke(aboutWindowIpcChannels.getBuildProps),
    getSupport: async () =>
      ipcRenderer.invoke(aboutWindowIpcChannels.getSupport),
    openHelp: async () =>
      ipcRenderer.invoke(aboutWindowIpcChannels.openHelp),
  },
  MainWindowTitleBar: {
    isClaudeCurrentlyHealthy: () =>
      ipcRenderer.invoke(mainWindowIpcChannels.isClaudeCurrentlyHealthy),
    onHideLoadError: (listener) => {
      const handler = () => listener();
      ipcRenderer.on(mainWindowIpcChannels.subscribeHideLoadError, handler);
      return () => {
        ipcRenderer.off(mainWindowIpcChannels.subscribeHideLoadError, handler);
      };
    },
    onShowLoadError: (listener) => {
      const handler = (_event: Electron.IpcRendererEvent, details: LoadErrorDetails) =>
        listener(details);
      ipcRenderer.on(mainWindowIpcChannels.subscribeLoadError, handler);
      return () => {
        ipcRenderer.off(mainWindowIpcChannels.subscribeLoadError, handler);
      };
    },
    onUpdateTitleBar: (listener) => {
      const handler = (_event: Electron.IpcRendererEvent, title: string) =>
        listener(title);
      ipcRenderer.on(mainWindowIpcChannels.subscribeTitle, handler);
      return () => {
        ipcRenderer.off(mainWindowIpcChannels.subscribeTitle, handler);
      };
    },
    requestMainMenuPopup: async () =>
      ipcRenderer.invoke(mainWindowIpcChannels.requestMainMenuPopup),
    requestReloadMainView: () => {
      ipcRenderer.send(mainWindowIpcChannels.requestReloadMainView);
    },
    titleBarReady: () => {
      ipcRenderer.send(mainWindowIpcChannels.titleBarReady);
    },
  },
  QuickWindow: {
    requestDismiss: async (prompt) =>
      ipcRenderer.invoke(quickWindowIpcChannels.requestDismiss, prompt),
    requestSkooch: async (width, height) =>
      ipcRenderer.invoke(quickWindowIpcChannels.requestSkooch, width, height),
  },
};

const findInPageApi: ClaudeFindInPageApi = {
  FindInPage: {
    findInPage: async (query, options) =>
      ipcRenderer.invoke(findInPageIpcChannels.findInPage, query, options),
    stopFindInPage: async () =>
      ipcRenderer.invoke(findInPageIpcChannels.stopFindInPage),
    endFindSession: async () =>
      ipcRenderer.invoke(findInPageIpcChannels.endFindSession),
    onBlurInput: (listener) => {
      const handler = () => listener();
      ipcRenderer.on(findInPageIpcChannels.blurInput, handler);
      return () => {
        ipcRenderer.off(findInPageIpcChannels.blurInput, handler);
      };
    },
    onFocusInput: (listener) => {
      const handler = () => listener();
      ipcRenderer.on(findInPageIpcChannels.focusInput, handler);
      return () => {
        ipcRenderer.off(findInPageIpcChannels.focusInput, handler);
      };
    },
    onStepToMatch: (listener) => {
      const handler = (_event: Electron.IpcRendererEvent, forward: boolean) =>
        listener(forward);
      ipcRenderer.on(findInPageIpcChannels.stepToMatch, handler);
      return () => {
        ipcRenderer.off(findInPageIpcChannels.stepToMatch, handler);
      };
    },
  } satisfies FindInPageApi,
};

const buddyApi: ClaudeBuddyApi = {
  Buddy: {
    status: async () => ipcRenderer.invoke(buddyIpcChannels.status),
    deviceStatus: async () => ipcRenderer.invoke(buddyIpcChannels.deviceStatus),
    scanDevices: async () => ipcRenderer.invoke(buddyIpcChannels.scanDevices),
    cancelScan: async () => ipcRenderer.invoke(buddyIpcChannels.cancelScan),
    pickDevice: async (deviceId: string) =>
      ipcRenderer.invoke(buddyIpcChannels.pickDevice, deviceId),
    pairDevice: async () => ipcRenderer.invoke(buddyIpcChannels.pairDevice),
    submitPin: async (pin: string | null) =>
      ipcRenderer.invoke(buddyIpcChannels.submitPin, pin),
    forgetDevice: async () => ipcRenderer.invoke(buddyIpcChannels.forgetDevice),
    setName: async (name: string) =>
      ipcRenderer.invoke(buddyIpcChannels.setName, name),
    preview: async (folderPath: string) =>
      ipcRenderer.invoke(buddyIpcChannels.preview, folderPath),
    install: async (folderPath: string) =>
      ipcRenderer.invoke(buddyIpcChannels.install, folderPath),
    pickFolder: async () => ipcRenderer.invoke(buddyIpcChannels.pickFolder),
    onPairingPrompt: (listener) => {
      const handler = (_event: Electron.IpcRendererEvent, deviceName: string) =>
        listener(deviceName);
      ipcRenderer.on(buddyIpcChannels.pairingPrompt, handler);
      return () => {
        ipcRenderer.off(buddyIpcChannels.pairingPrompt, handler);
      };
    },
    onProgress: (listener) => {
      const handler = (_event: Electron.IpcRendererEvent, message: string) =>
        listener(message);
      ipcRenderer.on(buddyIpcChannels.progress, handler);
      return () => {
        ipcRenderer.off(buddyIpcChannels.progress, handler);
      };
    },
  } satisfies BuddyApi,
};

const menuApi: ClaudeMenuApi = {
  showApplicationMenu: async (request) =>
    ipcRenderer.invoke(menuIpcChannels.showApplicationMenu, request),
  showContextMenu: async (items) =>
    ipcRenderer.invoke(menuIpcChannels.showContextMenu, items),
  onNewWindow: (listener) => {
    const handler = () => listener();
    ipcRenderer.on(menuIpcChannels.menuNewWindow, handler);
    return () => {
      ipcRenderer.off(menuIpcChannels.menuNewWindow, handler);
    };
  },
  onHelp: (listener) => {
    const handler = () => listener();
    ipcRenderer.on(menuIpcChannels.menuHelp, handler);
    return () => {
      ipcRenderer.off(menuIpcChannels.menuHelp, handler);
    };
  },
};

contextBridge.exposeInMainWorld("claude.hybrid", hybridApi);
contextBridge.exposeInMainWorld("claude.internal.ui", internalUiApi);
contextBridge.exposeInMainWorld("claude.internal.findInPage", findInPageApi);
contextBridge.exposeInMainWorld("claude.buddy", buddyApi);
contextBridge.exposeInMainWorld("claude.menu", menuApi);

contextBridge.exposeInMainWorld("openClaudeWindow", (kind: ClaudeWindowKind) => {
  ipcRenderer.send(windowIpcChannels.openClaudeWindow, kind);
});

contextBridge.exposeInMainWorld("notifyOverlayShown", () => {
  ipcRenderer.send(overlayIpcChannels.overlayShown);
});

contextBridge.exposeInMainWorld("notifyOverlayHidden", () => {
  ipcRenderer.send(overlayIpcChannels.overlayHidden);
});

// The buddy file bridge is only meaningful for drag-and-drop File objects in
// the renderer. Electron does not expose a real file path through the standard
// File API, so this stub returns an empty string.
contextBridge.exposeInMainWorld("buddy", {
  getPathForFile: (_file: File) => "",
});

window.initialLocale = initialLocale.locale;
window.initialMessages = initialLocale.messages;

// Re-export the channel names so the main process and preload stay in sync.
export {
  buddyIpcChannels,
  findInPageIpcChannels,
  mainWindowIpcChannels,
  menuIpcChannels,
  overlayIpcChannels,
  windowIpcChannels,
};
