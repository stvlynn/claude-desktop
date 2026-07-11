// @ts-nocheck
// Restored from ref/.vite/build/index.js
// Application: manage the active locale and broadcast locale changes to all
// renderer processes. This replaces the stub `claude.hybrid.DesktopIntl` with a
// real IPC-backed implementation.

import { BrowserWindow, app, ipcMain } from "electron";
import { desktopIntlIpcChannels } from "../../shared/contracts/preload-api";

export type DesktopIntlServiceOptions = {
  initialLocale?: string;
  onLocaleChanged?(locale: string): void;
};

export class DesktopIntlService {
  private locale: string;
  private messages: Record<string, string>;
  private readonly onLocaleChanged?: (locale: string) => void;

  constructor(options: DesktopIntlServiceOptions = {}) {
    this.locale = options.initialLocale ?? app.getLocale() ?? "en";
    this.messages = {};
    this.onLocaleChanged = options.onLocaleChanged;
  }

  listen() {
    ipcMain.on(desktopIntlIpcChannels.getInitialLocale, (event) => {
      event.returnValue = { locale: this.locale, messages: this.messages };
    });

    ipcMain.handle(
      desktopIntlIpcChannels.requestLocaleChange,
      async (_event, locale: unknown) => {
        if (typeof locale !== "string") {
          throw new TypeError(
            `requestLocaleChange expected a string, received ${typeof locale}`,
          );
        }
        this.setLocale(locale);
      },
    );
  }

  getLocale(): string {
    return this.locale;
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.broadcastLocaleChanged();
    this.onLocaleChanged?.(locale);
  }

  private broadcastLocaleChanged() {
    for (const window of BrowserWindow.getAllWindows()) {
      const contents = window.webContents;
      if (contents.isDestroyed()) continue;
      contents.send(
        desktopIntlIpcChannels.localeChanged,
        this.locale,
        this.messages,
      );
    }
  }
}
