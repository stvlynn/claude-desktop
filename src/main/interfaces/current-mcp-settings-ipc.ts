// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import type { McpSettingsService } from "../infrastructure/mcp-settings-service";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "MCP", method);

export function registerCurrentMcpSettingsIpc({
  service,
  trustedWebContents,
}: {
  service: McpSettingsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const methods = [
    "isLocalDevMcpEnabled",
    "setMcpServerConfigs",
    "getMcpServersConfig",
    "getMcpServersConfigWithStatus",
    "revealConfig",
    "revealLogs",
    "revealServerLog",
  ] as const;
  const handle = (
    method: (typeof methods)[number],
    implementation: (...args: unknown[]) => unknown,
  ): void => {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error(`Rejected MCP.${method} from an untrusted view`);
      }
      return implementation(...args);
    });
  };
  handle("isLocalDevMcpEnabled", () => service.isLocalDevMcpEnabled());
  handle("getMcpServersConfig", (forceReload) => {
    if (!(forceReload === null || typeof forceReload === "boolean")) {
      throw new TypeError("MCP.getMcpServersConfig expects boolean or null");
    }
    return service.getMcpServersConfig();
  });
  handle("getMcpServersConfigWithStatus", () =>
    service.getMcpServersConfigWithStatus(),
  );
  handle("setMcpServerConfigs", async (configs) => {
    const retained = await service.setMcpServerConfigs(configs);
    const status = await service.getMcpServersConfigWithStatus();
    for (const webContents of trustedWebContents) {
      if (webContents.isDestroyed()) continue;
      webContents.send(channel("mcpConfigChange"), status);
    }
    return retained;
  });
  handle("revealConfig", () => service.revealConfig());
  handle("revealLogs", () => service.revealLogs());
  handle("revealServerLog", (serverName) => {
    if (typeof serverName !== "string") {
      throw new TypeError("MCP.revealServerLog expects a string");
    }
    return service.revealServerLog(serverName);
  });
  return () => {
    for (const method of methods) ipcMain.removeHandler(channel(method));
  };
}
