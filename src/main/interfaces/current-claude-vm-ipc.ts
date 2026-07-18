// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { ClaudeVmService } from "../application/claude-vm-service";
import type { YukonSilverConfig } from "../domain/claude-vm";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "ClaudeVM", method);

export function registerCurrentClaudeVmIpc({
  service,
  trustedWebContents,
}: {
  service: ClaudeVmService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected ClaudeVM request from an untrusted view");
    }
  };
  const noArgumentMethods = {
    download: () => service.download(),
    getDownloadStatus: () => service.getDownloadStatus(),
    getRunningStatus: () => service.getRunningStatus(),
    deleteAndReinstall: () => service.deleteAndReinstall(),
    checkVirtualMachinePlatform: () => service.checkVirtualMachinePlatform(),
    enableVirtualMachinePlatform: () => service.enableVirtualMachinePlatform(),
    restartAfterVMPInstall: () => service.restartAfterVMPInstall(),
  };
  for (const [method, handler] of Object.entries(noArgumentMethods)) {
    ipcMain.handle(channel(method), (event) => {
      assertTrusted(event.sender);
      return handler();
    });
  }
  const syncBooleanMethods = {
    isHostLoopModeEnabled: () => service.isHostLoopModeEnabled(),
    isHostLoopDevOverrideActive: () => service.isHostLoopDevOverrideActive(),
  };
  const syncBooleanHandlers = Object.entries(syncBooleanMethods).map(
    ([method, handler]) => {
      const eventHandler = (event: Electron.IpcMainEvent): void => {
        if (!trustedWebContents.has(event.sender)) {
          event.returnValue = { error: `Rejected ClaudeVM ${method} request` };
          return;
        }
        event.returnValue = { result: handler() };
      };
      ipcMain.on(channel(method), eventHandler);
      return { method, eventHandler };
    },
  );
  ipcMain.handle(channel("startVM"), (event, options: unknown) => {
    assertTrusted(event.sender);
    if (
      options !== undefined &&
      (options === null ||
        typeof options !== "object" ||
        ("memoryGB" in options && typeof options.memoryGB !== "number"))
    ) {
      throw new TypeError("ClaudeVM.startVM received invalid options");
    }
    return service.startVM(options);
  });
  ipcMain.handle(
    channel("setForceDisableHostLoop"),
    (event, value: unknown) => {
      assertTrusted(event.sender);
      if (typeof value !== "boolean") {
        throw new TypeError(
          "ClaudeVM.setForceDisableHostLoop expects a boolean",
        );
      }
      return service.setForceDisableHostLoop(value);
    },
  );
  ipcMain.handle(channel("setYukonSilverConfig"), (event, config: unknown) => {
    assertTrusted(event.sender);
    if (!isYukonSilverConfig(config)) {
      throw new TypeError(
        "ClaudeVM.setYukonSilverConfig received invalid config",
      );
    }
    return service.setYukonSilverConfig(config);
  });
  ipcMain.handle(channel("apiReachability_$store$_getState"), (event) => {
    assertTrusted(event.sender);
    return service.getInitialApiReachabilityState();
  });
  const syncChannel = channel("apiReachability_$store$_getStateSync");
  const syncHandler = (event: Electron.IpcMainEvent): void => {
    if (!trustedWebContents.has(event.sender)) {
      event.returnValue = { error: "Rejected ClaudeVM store request" };
      return;
    }
    event.returnValue = { result: service.getInitialApiReachabilityState() };
  };
  ipcMain.on(syncChannel, syncHandler);

  const events = [
    "downloadProgress",
    "downloadStatusChanged",
    "runningStatusChanged",
    "startupError",
  ] as const;
  const listeners = events.map((eventName) => {
    const listener = (value: unknown): void => {
      for (const contents of trustedWebContents) {
        if (!contents.isDestroyed()) contents.send(channel(eventName), value);
      }
    };
    service.on(eventName, listener);
    return { eventName, listener };
  });

  return () => {
    for (const method of Object.keys(noArgumentMethods)) {
      ipcMain.removeHandler(channel(method));
    }
    for (const method of [
      "startVM",
      "setForceDisableHostLoop",
      "setYukonSilverConfig",
      "apiReachability_$store$_getState",
    ]) {
      ipcMain.removeHandler(channel(method));
    }
    ipcMain.off(syncChannel, syncHandler);
    for (const { method, eventHandler } of syncBooleanHandlers) {
      ipcMain.off(channel(method), eventHandler);
    }
    for (const { eventName, listener } of listeners) {
      service.off(eventName, listener);
    }
  };
}

function isYukonSilverConfig(value: unknown): value is YukonSilverConfig {
  return (
    value !== null &&
    typeof value === "object" &&
    "autoDownloadInBackground" in value &&
    typeof value.autoDownloadInBackground === "boolean" &&
    "autoStartOnUserIntent" in value &&
    typeof value.autoStartOnUserIntent === "boolean" &&
    "memoryGB" in value &&
    typeof value.memoryGB === "number"
  );
}
