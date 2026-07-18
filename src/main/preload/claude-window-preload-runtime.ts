// Restored from ref/.vite/build/aboutWindow.js
// Restored IPC surface: claude.internal.ui.AboutWindow
// Restored IPC surface: claude.internal.ui.QuickWindow
// Restored IPC surface: claude.internal.ui.MainWindowTitleBar
// Restored IPC surface: claude.hybrid.DesktopIntl

import { contextBridge, ipcRenderer } from "electron";
import { webFrame } from "electron/renderer";

const EIPC_PREFIX = "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_";

const channel = (namespace: string, contract: string, method: string) =>
  `${EIPC_PREFIX}${namespace}_$_${contract}_$_${method}`;

const isTopFrame = (): boolean => {
  if (
    "frameToken" in webFrame &&
    webFrame.top &&
    "frameToken" in webFrame.top
  ) {
    return webFrame.top.frameToken === webFrame.frameToken;
  }
  return webFrame.top?.routingId === webFrame.routingId;
};

type NamespaceMap = Record<string, Record<string, unknown>>;

function installContract(
  namespaces: NamespaceMap,
  namespace: string,
  contract: string,
  implementation: object,
): void {
  if (!isTopFrame()) return;
  namespaces[namespace] ??= {};
  namespaces[namespace][contract] = implementation;
}

export function registerClaudeWindowPreload(): void {
  const namespaces: NamespaceMap = {};
  installContract(namespaces, "claude.internal.ui", "AboutWindow", {
    openHelp: () =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "AboutWindow", "openHelp"),
      ),
    getSupport: () =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "AboutWindow", "getSupport"),
      ),
    getAppName: () =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "AboutWindow", "getAppName"),
      ),
    getBuildProps: () =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "AboutWindow", "getBuildProps"),
      ),
  });
  installContract(namespaces, "claude.internal.ui", "QuickWindow", {
    requestDismiss: (prompt: string) =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "QuickWindow", "requestDismiss"),
        prompt,
      ),
    requestDismissWithPayload: (payload: unknown) =>
      ipcRenderer.invoke(
        channel(
          "claude.internal.ui",
          "QuickWindow",
          "requestDismissWithPayload",
        ),
        payload,
      ),
    requestSkooch: (width: number, height: number) =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "QuickWindow", "requestSkooch"),
        width,
        height,
      ),
  });
  installContract(namespaces, "claude.internal.ui", "MainWindowTitleBar", {
    titleBarReady: () =>
      ipcRenderer.invoke(
        channel("claude.internal.ui", "MainWindowTitleBar", "titleBarReady"),
      ),
    requestReloadMainView: () =>
      ipcRenderer.invoke(
        channel(
          "claude.internal.ui",
          "MainWindowTitleBar",
          "requestReloadMainView",
        ),
      ),
    requestMainMenuPopup: () =>
      ipcRenderer.invoke(
        channel(
          "claude.internal.ui",
          "MainWindowTitleBar",
          "requestMainMenuPopup",
        ),
      ),
    isClaudeCurrentlyHealthy: () =>
      ipcRenderer.invoke(
        channel(
          "claude.internal.ui",
          "MainWindowTitleBar",
          "isClaudeCurrentlyHealthy",
        ),
      ),
    onUpdateTitleBar: subscribe(
      channel("claude.internal.ui", "MainWindowTitleBar", "updateTitleBar"),
    ),
    onShowLoadError: subscribe(
      channel("claude.internal.ui", "MainWindowTitleBar", "showLoadError"),
    ),
    onHideLoadError: subscribeVoid(
      channel("claude.internal.ui", "MainWindowTitleBar", "hideLoadError"),
    ),
  });
  for (const [namespace, contracts] of Object.entries(namespaces)) {
    contextBridge.exposeInMainWorld(namespace, contracts);
  }

  registerDesktopIntlPreload();
}

export function registerDesktopIntlPreload(): void {
  const desktopIntl = {
    getInitialLocale: () => {
      const response = ipcRenderer.sendSync(
        channel("claude.hybrid", "DesktopIntl", "getInitialLocale"),
      ) as { error?: string; result?: unknown };
      if (response.error) throw new Error(response.error);
      return response.result;
    },
    requestLocaleChange: (locale: string) =>
      ipcRenderer.invoke(
        channel("claude.hybrid", "DesktopIntl", "requestLocaleChange"),
        locale,
      ),
    onLocaleChanged: subscribePair(
      channel("claude.hybrid", "DesktopIntl", "localeChanged"),
    ),
  };
  contextBridge.exposeInMainWorld("claude.hybrid", {
    DesktopIntl: desktopIntl,
  });

  const initialLocale = desktopIntl.getInitialLocale() as {
    locale?: string;
    messages?: Record<string, string>;
  };
  const safeProcess = Object.fromEntries(
    ["arch", "platform", "type", "versions"].map((key) => [
      key,
      process[key as keyof NodeJS.Process],
    ]),
  ) as Record<string, unknown>;
  safeProcess.version = "1.18286.0";
  safeProcess.env = process.env.CI ? { CI: process.env.CI } : {};
  contextBridge.exposeInMainWorld("process", safeProcess);
  contextBridge.exposeInMainWorld("initialMessages", initialLocale.messages);
  contextBridge.exposeInMainWorld("initialLocale", initialLocale.locale);
  contextBridge.exposeInMainWorld(
    "desktopEssentialTelemetryDisabled",
    readEssentialTelemetryDisabled(process.argv),
  );
}

function subscribe(channelName: string) {
  return (listener: (payload: unknown) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, payload: unknown) =>
      listener(payload);
    ipcRenderer.on(channelName, handler);
    return () => ipcRenderer.removeListener(channelName, handler);
  };
}

function subscribeVoid(channelName: string) {
  return (listener: () => void) => {
    const handler = () => listener();
    ipcRenderer.on(channelName, handler);
    return () => ipcRenderer.removeListener(channelName, handler);
  };
}

function subscribePair(channelName: string) {
  return (
    listener: (locale: string, messages: Record<string, string>) => void,
  ) => {
    const handler = (
      _event: Electron.IpcRendererEvent,
      locale: string,
      messages: Record<string, string>,
    ) => listener(locale, messages);
    ipcRenderer.on(channelName, handler);
    return () => ipcRenderer.removeListener(channelName, handler);
  };
}

function readEssentialTelemetryDisabled(argv: string[]): boolean {
  const prefix = "--desktop-enterprise-config=";
  const argument = argv.find((value) => value.startsWith(prefix));
  if (!argument) return false;
  try {
    const config = JSON.parse(argument.slice(prefix.length)) as {
      disableEssentialTelemetry?: boolean;
    };
    return config.disableEssentialTelemetry === true;
  } catch {
    return false;
  }
}
