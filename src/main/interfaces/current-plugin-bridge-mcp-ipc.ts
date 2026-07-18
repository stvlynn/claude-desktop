// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { PluginBridgeMcpService } from "../application/plugin-bridge-mcp-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "PluginBridgeMcp", method);

export function registerCurrentPluginBridgeMcpIpc({
  service,
  trustedWebContents,
}: {
  service: PluginBridgeMcpService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  ipcMain.handle(channel("listServers"), (event) => {
    if (!trustedWebContents.has(event.sender)) {
      throw new Error(
        "Rejected PluginBridgeMcp request from an untrusted view",
      );
    }
    return service.listServers();
  });
  return () => ipcMain.removeHandler(channel("listServers"));
}
