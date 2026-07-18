// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { ClaudeAppConfigurationRepository } from "../infrastructure/claude-app-configuration";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "AppPreferences", method);

export function registerCurrentAppPreferencesIpc({
  configuration,
  trustedWebContents,
}: {
  configuration: ClaudeAppConfigurationRepository;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const methods = ["getPreferences", "setPreference"] as const;
  ipcMain.handle(channel("getPreferences"), (event) => {
    if (!trustedWebContents.has(event.sender)) {
      throw new Error(
        "Rejected AppPreferences.getPreferences from an untrusted view",
      );
    }
    return configuration.getPreferences();
  });
  ipcMain.handle(
    channel("setPreference"),
    (event, key: unknown, value: unknown) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(
          "Rejected AppPreferences.setPreference from an untrusted view",
        );
      }
      if (typeof key !== "string") {
        throw new TypeError(
          "AppPreferences.setPreference expects a string key",
        );
      }
      return configuration.setPreference(key, value);
    },
  );
  const unsubscribe = configuration.subscribePreferences((preferences) => {
    for (const webContents of trustedWebContents) {
      if (!webContents.isDestroyed()) {
        webContents.send(channel("preferencesChanged"), preferences);
      }
    }
  });
  return () => {
    unsubscribe();
    for (const method of methods) ipcMain.removeHandler(channel(method));
  };
}
