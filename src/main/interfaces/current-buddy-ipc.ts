// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import {
  BUDDY_BLE_METHODS,
  BUDDY_METHODS,
  type BuddyMethod,
} from "../../shared/contracts/buddy";
import type { BuddyService } from "../application/buddy-service";

const buddyChannel = (
  contract: "Buddy" | "BuddyBleTransport",
  method: string,
) => currentClaudeIpcChannel("claude.buddy", contract, method);

export type BuddyIpcController = {
  attachWindow: (contents: WebContents) => () => void;
  dispose: () => void;
};

export function registerCurrentBuddyIpc(
  service: BuddyService,
  mainView: WebContents,
): BuddyIpcController {
  const buddyViews = new Set<WebContents>();
  for (const method of BUDDY_METHODS) {
    ipcMain.handle(
      buddyChannel("Buddy", method),
      (event, ...args: unknown[]) => {
        if (!buddyViews.has(event.sender)) {
          throw new Error("Rejected Buddy request from an untrusted view");
        }
        return invokeBuddy(service, method, args);
      },
    );
  }
  for (const method of BUDDY_BLE_METHODS) {
    ipcMain.handle(
      buddyChannel("BuddyBleTransport", method),
      (event, ...args: unknown[]) => {
        if (event.sender !== mainView) {
          throw new Error("Rejected Buddy BLE request from an untrusted view");
        }
        if (method === "rx") service.receiveLine(stringArg(args, 0));
        else if (method === "reportState") {
          service.reportState(stringArg(args, 0), optionalString(args, 1));
        } else service.log(stringArg(args, 0));
      },
    );
  }

  const progress = (message: string): void => {
    sendToBuddyViews(buddyViews, "progress", message);
  };
  const pairingPrompt = (deviceName: string): void => {
    sendToBuddyViews(buddyViews, "pairingPrompt", deviceName);
  };
  const tx = (line: string): void => {
    if (!mainView.isDestroyed()) {
      mainView.send(buddyChannel("BuddyBleTransport", "tx"), line);
    }
  };
  service.on("progress", progress);
  service.on("pairingPrompt", pairingPrompt);
  service.on("tx", tx);

  return {
    attachWindow(contents) {
      buddyViews.add(contents);
      const detach = (): void => {
        buddyViews.delete(contents);
      };
      contents.once("destroyed", detach);
      return () => {
        contents.off("destroyed", detach);
        detach();
      };
    },
    dispose() {
      for (const method of BUDDY_METHODS) {
        ipcMain.removeHandler(buddyChannel("Buddy", method));
      }
      for (const method of BUDDY_BLE_METHODS) {
        ipcMain.removeHandler(buddyChannel("BuddyBleTransport", method));
      }
      service.off("progress", progress);
      service.off("pairingPrompt", pairingPrompt);
      service.off("tx", tx);
      buddyViews.clear();
    },
  };
}

function invokeBuddy(
  service: BuddyService,
  method: BuddyMethod,
  args: unknown[],
): unknown {
  switch (method) {
    case "status":
      return service.status();
    case "deviceStatus":
      return service.deviceStatus();
    case "setName":
      return service.setName(stringArg(args, 0));
    case "pairDevice":
      return service.pairDevice();
    case "scanDevices":
      return service.scanDevices();
    case "pickDevice":
      return service.pickDevice(stringArg(args, 0));
    case "cancelScan":
      return service.cancelScan();
    case "submitPin":
      return service.submitPin(nullableStringArg(args, 0));
    case "forgetDevice":
      return service.forgetDevice();
    case "pickFolder":
      return service.pickFolder();
    case "preview":
      return service.preview(stringArg(args, 0));
    case "install":
      return service.install(stringArg(args, 0));
  }
}

function sendToBuddyViews(
  views: ReadonlySet<WebContents>,
  event: string,
  value: string,
): void {
  for (const contents of views) {
    if (!contents.isDestroyed()) {
      contents.send(buddyChannel("Buddy", event), value);
    }
  }
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string") {
    throw new TypeError(`Argument ${index} must be a string`);
  }
  return value;
}

function optionalString(args: unknown[], index: number): string | undefined {
  return args[index] === undefined ? undefined : stringArg(args, index);
}

function nullableStringArg(args: unknown[], index: number): string | null {
  return args[index] === null ? null : stringArg(args, index);
}
