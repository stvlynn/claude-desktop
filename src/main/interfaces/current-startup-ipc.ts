// Restored from ref/.vite/build/index.js

import { ipcMain, type App, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { ClaudeAppConfigurationRepository } from "../infrastructure/claude-app-configuration";

const startupChannel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "Startup", method);

export function registerCurrentStartupIpc({
  app,
  configuration,
  onMenuBarEnabledChange,
  trustedWebContents,
}: {
  app: App;
  configuration: ClaudeAppConfigurationRepository;
  onMenuBarEnabledChange: (enabled: boolean) => void;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const channels: string[] = [];

  function handle(
    method: string,
    implementation: (...args: unknown[]) => unknown,
  ): void {
    const channel = startupChannel(method);
    channels.push(channel);
    ipcMain.handle(channel, (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(`Rejected Startup.${method} from an untrusted view`);
      }
      return implementation(...args);
    });
  }

  handle("isStartupOnLoginEnabled", () => {
    if (process.env.CLAUDE_AVOID_READING_LOGING_ITEM_SETTINGS) return false;
    const settings = app.getLoginItemSettings({
      path: process.execPath,
      args: [],
    });
    return settings.openAtLogin || settings.executableWillLaunchAtLogin;
  });
  handle("setStartupOnLoginEnabled", (value) => {
    if (typeof value !== "boolean") {
      throw new TypeError("Startup.setStartupOnLoginEnabled expects a boolean");
    }
    app.setLoginItemSettings({
      openAtLogin: value,
      enabled: value,
      path: process.execPath,
      args: [],
      name: "Claude",
    });
  });
  handle("isMenuBarEnabled", () => configuration.getMenuBarEnabled());
  handle("setMenuBarEnabled", async (value) => {
    if (typeof value !== "boolean") {
      throw new TypeError("Startup.setMenuBarEnabled expects a boolean");
    }
    await configuration.setMenuBarEnabled(value);
    onMenuBarEnabledChange(value);
  });

  return () => {
    for (const channel of channels) ipcMain.removeHandler(channel);
  };
}
