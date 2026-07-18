// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { Custom3pSetupService } from "../application/custom-3p-setup-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.settings", "Custom3pSetup", method);

export function registerCurrentCustom3pSetupIpc({
  service,
  trustedWebContents,
}: {
  service: Custom3pSetupService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected Custom3pSetup request from an untrusted view");
    }
  };
  const handlers: Record<string, (args: unknown[]) => unknown> = {
    exportConfig: (args) =>
      service.exportConfig(objectArg(args, 0), stringArg(args, 1)),
    relaunchApp: () => service.relaunchApp(),
    probeEgressHosts: (args) =>
      service.probeEgressHosts(stringArrayArg(args, 0)),
    scanOrgPlugins: () => service.scanOrgPlugins(),
    probeMcpServer: (args) => service.probeMcpServer(objectArg(args, 0)),
    authorizeAndProbeMcpServer: (args) =>
      service.authorizeAndProbeMcpServer(objectArg(args, 0)),
    forgetMcpOAuth: (args) => service.forgetMcpOAuth(stringArg(args, 0)),
    getLoginDesktop3pStatus: () => service.getLoginDesktop3pStatus(),
    getConfigHealth: () => service.getConfigHealth(),
    recheckConfigHealth: () => service.recheckConfigHealth(),
    setDeploymentMode: (args) => service.setDeploymentMode(stringArg(args, 0)),
    openSetupWindow: () => service.openSetupWindow(),
    signInWithAnthropicApi: () => service.signInWithAnthropicApi(),
    applyAnthropicApiShortcut: () => service.applyAnthropicApiShortcut(),
    openDeviceCodeWindowForE2e: () => service.openDeviceCodeWindowForE2e(),
    listConfigs: () => service.listConfigs(),
    readConfig: (args) => service.readConfig(stringArg(args, 0)),
    writeConfig: (args) =>
      service.writeConfig(stringArg(args, 0), objectArg(args, 1)),
    createConfig: (args) => service.createConfig(stringArg(args, 0)),
    duplicateConfig: (args) =>
      service.duplicateConfig(stringArg(args, 0), stringArg(args, 1)),
    renameConfig: (args) =>
      service.renameConfig(stringArg(args, 0), stringArg(args, 1)),
    deleteConfig: (args) => service.deleteConfig(stringArg(args, 0)),
    setAppliedConfig: (args) => service.setAppliedConfig(stringArg(args, 0)),
    revealConfig: (args) => service.revealConfig(stringArg(args, 0)),
    triggerBootstrapAuth: (args) =>
      service.triggerBootstrapAuth(optionalObjectArg(args, 0)),
    bootstrapState_$store$_getState: () => service.getInitialBootstrapState(),
  };
  for (const [method, handler] of Object.entries(handlers)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      assertTrusted(event.sender);
      return handler(args);
    });
  }

  const syncChannel = channel("bootstrapState_$store$_getStateSync");
  const syncHandler = (event: Electron.IpcMainEvent): void => {
    try {
      assertTrusted(event.sender);
      event.returnValue = { result: service.getInitialBootstrapState() };
    } catch (error) {
      event.returnValue = { error: errorMessage(error) };
    }
  };
  ipcMain.on(syncChannel, syncHandler);

  const updateChannel = channel("bootstrapState_$store$_update");
  const updateListener = (state: unknown): void => {
    for (const contents of trustedWebContents) {
      if (!contents.isDestroyed()) contents.send(updateChannel, state);
    }
  };
  service.on("bootstrapStateChanged", updateListener);

  return () => {
    for (const method of Object.keys(handlers))
      ipcMain.removeHandler(channel(method));
    ipcMain.off(syncChannel, syncHandler);
    service.off("bootstrapStateChanged", updateListener);
  };
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}

function stringArrayArg(args: unknown[], index: number): string[] {
  const value = args[index];
  if (
    !Array.isArray(value) ||
    !value.every((entry) => typeof entry === "string")
  ) {
    throw new TypeError(`Argument ${index} must be an array of strings`);
  }
  return value;
}

function objectArg(args: unknown[], index: number): Record<string, unknown> {
  const value = args[index];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`Argument ${index} must be an object`);
  }
  return value as Record<string, unknown>;
}

function optionalObjectArg(
  args: unknown[],
  index: number,
): Record<string, unknown> | undefined {
  return args[index] === undefined ? undefined : objectArg(args, index);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
