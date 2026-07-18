// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Application service: keep the Computer Use overlay config file in sync with
// desktop settings, locale, and native appearance.

import { app, nativeTheme } from "electron";
import { scheduleComputerUseConfigWrite } from "../infrastructure/computer-use-config/files";
import { desktopLogger } from "./desktop-logger";
import type { ComputerUseSettingsStore } from "../domain/computer-use-config-types";

// Note: Electron 42 does not expose a system-locale-changed event on `app`.
// Locale-driven rewrites are triggered through the renderer-requested locale
// override callback exposed by DesktopIntlService.

export type ComputerUseConfigSyncService = {
  start(): void;
  stop(): void;
  requestWrite(): void;
};

export type ComputerUseConfigSyncOptions = {
  codexHome: string;
  repoRoot: string;
  settingsStore: ComputerUseSettingsStore;
  getAppLocale(): string;
};

export function createComputerUseConfigSync({
  codexHome,
  repoRoot,
  settingsStore,
  getAppLocale,
}: ComputerUseConfigSyncOptions): ComputerUseConfigSyncService {
  let started = false;

  const write = () => {
    if (!started) return;
    scheduleComputerUseConfigWrite({
      appLocale: getAppLocale(),
      appPath: app.getAppPath(),
      codexHome,
      isPackaged: app.isPackaged,
      repoRoot,
      settingsStore,
      shouldUseDarkColors: nativeTheme.shouldUseDarkColors,
      logger: desktopLogger,
    });
  };

  const handleNativeThemeUpdated = () => write();

  return {
    start() {
      if (started) return;
      started = true;
      write();
      nativeTheme.on("updated", handleNativeThemeUpdated);
    },
    stop() {
      if (!started) return;
      started = false;
      nativeTheme.off("updated", handleNativeThemeUpdated);
    },
    requestWrite() {
      write();
    },
  };
}
