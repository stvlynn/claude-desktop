// Restored from ref/.vite/build/index.js

import { ipcMain, type WebContents } from "electron";
import type { DeviceRegistryService } from "../application/device-registry-service";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";

const channel = (method: string): string =>
  currentClaudeIpcChannel("claude.web", "DeviceRegistry", method);

export function registerCurrentDeviceRegistryIpc({
  service,
  trustedWebContents,
}: {
  service: DeviceRegistryService;
  trustedWebContents: ReadonlySet<WebContents>;
}): () => void {
  const assertTrusted = (sender: WebContents): void => {
    if (!trustedWebContents.has(sender)) {
      throw new Error("Rejected DeviceRegistry request from an untrusted view");
    }
  };
  const methods = {
    getAvailability: (accountUuid: string) =>
      service.getAvailability(accountUuid),
    getPublicKey: (accountUuid: string) => service.getPublicKey(accountUuid),
    signAttestationPreimage: (accountUuid: string, preimage: string) =>
      service.signAttestationPreimage(accountUuid, preimage),
    signForSessionHeader: (
      accountUuid: string,
      orgUuid: string,
      sessionUuid: string,
    ) => service.signForSessionHeader(accountUuid, orgUuid, sessionUuid),
    signCreateSessionBind: (accountUuid: string, orgUuid: string) =>
      service.signCreateSessionBind(accountUuid, orgUuid),
    signTriggerOp: (
      accountUuid: string,
      orgUuid: string,
      op: string,
      subjectId: string,
      fireContentHashHex: string,
    ) =>
      service.signTriggerOp(
        accountUuid,
        orgUuid,
        op,
        subjectId,
        fireContentHashHex,
      ),
    getLocalDeviceInfo: (accountUuid: string) =>
      service.getLocalDeviceInfo(accountUuid),
    notifyRegistered: (accountUuid: string) =>
      service.notifyRegistered(accountUuid),
  };
  for (const [method, handler] of Object.entries(methods)) {
    ipcMain.handle(channel(method), (event, ...args: unknown[]) => {
      assertTrusted(event.sender);
      if (!args.every((argument) => typeof argument === "string")) {
        throw new TypeError(
          `DeviceRegistry.${method} expects string arguments`,
        );
      }
      return (handler as (...values: string[]) => unknown)(
        ...(args as string[]),
      );
    });
  }
  return () => {
    for (const method of Object.keys(methods)) {
      ipcMain.removeHandler(channel(method));
    }
  };
}
