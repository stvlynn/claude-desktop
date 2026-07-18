// Restored from ref/.vite/build/index.js

import { BrowserWindow, ipcMain } from "electron";
import type { DesktopIntlInitialLocale } from "../../renderer/shared/api/claude-desktop-api";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const uiChannel = (contract: string, method: string): string =>
  currentClaudeIpcChannel("claude.internal.ui", contract, method);
const intlChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.hybrid", "DesktopIntl", method);

export type CurrentWindowIpcHandlers = {
  getAppName(): unknown;
  getBuildProps(): unknown;
  getInitialLocale(): DesktopIntlInitialLocale;
  getSupport(): unknown;
  isClaudeCurrentlyHealthy(): boolean | Promise<boolean>;
  openHelp(): unknown;
  requestDismiss(prompt: string | null): unknown;
  requestDismissWithPayload(payload: unknown): unknown;
  requestLocaleChange(locale: string): unknown;
  requestMainMenuPopup(ownerWindow: BrowserWindow | null): unknown;
  requestReloadMainView(): unknown;
  requestSkooch(width: number, height: number): unknown;
  titleBarReady(): unknown;
};

export function registerCurrentWindowIpc(
  handlers: CurrentWindowIpcHandlers,
): () => void {
  const invokeHandlers = new Map<string, (...args: unknown[]) => unknown>([
    [uiChannel("AboutWindow", "openHelp"), () => handlers.openHelp()],
    [uiChannel("AboutWindow", "getSupport"), () => handlers.getSupport()],
    [uiChannel("AboutWindow", "getAppName"), () => handlers.getAppName()],
    [uiChannel("AboutWindow", "getBuildProps"), () => handlers.getBuildProps()],
    [
      uiChannel("QuickWindow", "requestDismiss"),
      (prompt) =>
        handlers.requestDismiss(typeof prompt === "string" ? prompt : null),
    ],
    [
      uiChannel("QuickWindow", "requestDismissWithPayload"),
      (payload) => handlers.requestDismissWithPayload(payload),
    ],
    [
      uiChannel("QuickWindow", "requestSkooch"),
      (width, height) => handlers.requestSkooch(Number(width), Number(height)),
    ],
    [
      uiChannel("MainWindowTitleBar", "titleBarReady"),
      () => handlers.titleBarReady(),
    ],
    [
      uiChannel("MainWindowTitleBar", "requestReloadMainView"),
      () => handlers.requestReloadMainView(),
    ],
    [
      uiChannel("MainWindowTitleBar", "isClaudeCurrentlyHealthy"),
      () => handlers.isClaudeCurrentlyHealthy(),
    ],
    [
      intlChannel("requestLocaleChange"),
      (locale) => handlers.requestLocaleChange(String(locale)),
    ],
  ]);

  for (const [channel, handler] of invokeHandlers) {
    ipcMain.handle(channel, (_event, ...args: unknown[]) => handler(...args));
  }
  const menuChannel = uiChannel("MainWindowTitleBar", "requestMainMenuPopup");
  ipcMain.handle(menuChannel, (event) =>
    handlers.requestMainMenuPopup(BrowserWindow.fromWebContents(event.sender)),
  );

  const initialLocaleChannel = intlChannel("getInitialLocale");
  const initialLocaleHandler = (event: Electron.IpcMainEvent): void => {
    try {
      event.returnValue = { result: handlers.getInitialLocale() };
    } catch (error) {
      event.returnValue = {
        error: error instanceof Error ? error.message : String(error),
      };
    }
  };
  ipcMain.on(initialLocaleChannel, initialLocaleHandler);

  return () => {
    for (const channel of invokeHandlers.keys()) ipcMain.removeHandler(channel);
    ipcMain.removeHandler(menuChannel);
    ipcMain.off(initialLocaleChannel, initialLocaleHandler);
  };
}

export function broadcastCurrentLocaleChanged(
  locale: string,
  messages: Record<string, string>,
): void {
  const channel = intlChannel("localeChanged");
  for (const window of BrowserWindow.getAllWindows()) {
    if (!window.webContents.isDestroyed()) {
      window.webContents.send(channel, locale, messages);
    }
  }
}
