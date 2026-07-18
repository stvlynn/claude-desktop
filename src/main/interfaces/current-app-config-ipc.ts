// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { ClaudeAppConfigurationRepository } from "../infrastructure/claude-app-configuration";

const appConfigChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "AppConfig", method);

export function registerCurrentAppConfigIpc({
  configuration,
  trustedWebContents,
}: {
  configuration: ClaudeAppConfigurationRepository;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const channels: string[] = [];
  function handle(
    method: string,
    implementation: (...args: unknown[]) => unknown,
  ): void {
    const channel = appConfigChannel(method);
    channels.push(channel);
    ipcMain.handle(channel, (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(`Rejected AppConfig.${method} from an untrusted view`);
      }
      return implementation(...args);
    });
  }

  handle("getAppConfig", () => configuration.getConfiguration());
  handle("setAppFeature", (feature, enabled) => {
    if (typeof feature !== "string" || typeof enabled !== "boolean") {
      throw new TypeError(
        "AppConfig.setAppFeature expects a string and boolean",
      );
    }
    return configuration.setAppFeature(feature, enabled);
  });
  for (const [method, key] of [
    ["setIsUsingBuiltInNodeForMcp", "isUsingBuiltInNodeForMcp"],
    ["setIsDxtAutoUpdatesEnabled", "isDxtAutoUpdatesEnabled"],
  ] as const) {
    handle(method, (enabled) => {
      if (typeof enabled !== "boolean") {
        throw new TypeError(`AppConfig.${method} expects a boolean`);
      }
      return configuration.setBooleanSetting(key, enabled);
    });
  }

  return () => {
    for (const channel of channels) ipcMain.removeHandler(channel);
  };
}
