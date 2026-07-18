// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { LocalPluginsService } from "../application/local-plugins-service";
import type { LocalPluginContext } from "../domain/local-plugin";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "LocalPlugins", method);

export function registerCurrentLocalPluginsIpc({
  service,
  trustedWebContents,
}: {
  service: LocalPluginsService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const handlers: Record<string, (args: unknown[]) => unknown> = {
    getPlugins: (args) => service.getPlugins(args[0], contextArg(args, 1)),
    getDownloadedRemotePlugins: (args) =>
      service.getDownloadedRemotePlugins(contextArg(args, 0)),
    syncRemotePlugins: (args) => service.syncRemotePlugins(contextArg(args, 0)),
    listSkillFiles: (args) =>
      service.listSkillFiles(
        stringArg(args, 0),
        stringArg(args, 1),
        contextArg(args, 2),
      ),
    uploadPlugin: (args) =>
      service.uploadPlugin(
        stringArg(args, 0),
        stringArg(args, 1),
        optionalBooleanArg(args, 2),
        contextArg(args, 3),
      ),
    deletePlugin: (args) => service.deletePlugin(stringArg(args, 0)),
    setPluginEnabled: (args) =>
      service.setPluginEnabled(
        stringArg(args, 0),
        booleanArg(args, 1),
        contextArg(args, 2),
      ),
    getPluginOAuthStatus: () => service.getPluginOAuthStatus(),
    startPluginOAuthFlow: () => service.startPluginOAuthFlow(),
    revokePluginOAuth: () => service.revokePluginOAuth(),
    getPluginCliStatus: () => service.getPluginCliStatus(),
    setPluginEnvVars: () => service.setPluginEnvVars(),
    setPluginOAuthClient: () => service.setPluginOAuthClient(),
    getPluginShimOps: () => service.getPluginShimOps(),
    getPluginCliBatch: () => service.getPluginCliBatch(),
    setPluginShimPermission: () => service.setPluginShimPermission(),
  };
  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      if (!trustedWebContents.has(event.sender)) {
        throw new Error("Rejected LocalPlugins request from an untrusted view");
      }
      return handler(args);
    });
  }
  return () => {
    for (const method of Object.keys(handlers))
      ipcMain.removeHandler(channel(method));
  };
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}

function booleanArg(args: unknown[], index: number): boolean {
  const value = args[index];
  if (typeof value !== "boolean")
    throw new TypeError(`Argument ${index} must be a boolean`);
  return value;
}

function optionalBooleanArg(args: unknown[], index: number): boolean {
  const value = args[index];
  if (value === undefined) return false;
  if (typeof value !== "boolean")
    throw new TypeError(`Argument ${index} must be a boolean`);
  return value;
}

function contextArg(
  args: unknown[],
  index: number,
): LocalPluginContext | undefined {
  const value = args[index];
  if (value === undefined) return undefined;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`Argument ${index} must be an object`);
  }
  return value as LocalPluginContext;
}
