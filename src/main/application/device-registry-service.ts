// Restored from ref/.vite/build/index.js (current claude-native-unavailable branch)

import * as fs from "node:fs/promises";
import * as os from "node:os";
import { getClaudeAccountDetails } from "../domain/account-details";
import { getDesktopInstallIdPath } from "../infrastructure/desktop-sentry";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export class DeviceRegistryService {
  getAvailability(accountUuid: string): {
    available: boolean;
    isHardwareBacked: boolean;
    reason?: string;
  } {
    this.assertActiveAccount(accountUuid);
    return {
      available: false,
      isHardwareBacked: false,
      reason: "native_missing",
    };
  }

  getPublicKey(accountUuid: string): never {
    this.assertActiveAccount(accountUuid);
    throw new Error("DeviceRegistry: claude-native unavailable");
  }

  signAttestationPreimage(accountUuid: string, preimageB64: string): never {
    this.assertActiveAccount(accountUuid);
    const preimage = Buffer.from(preimageB64, "base64");
    if (
      !preimage
        .subarray(0, Buffer.byteLength("anthropic.ccr.client_event.v1\0"))
        .equals(Buffer.from("anthropic.ccr.client_event.v1\0", "utf8"))
    ) {
      throw new Error(
        "DeviceRegistry: preimage domain tag not in the allowlist",
      );
    }
    throw new Error("DeviceRegistry: claude-native unavailable");
  }

  signForSessionHeader(
    accountUuid: string,
    orgUuid: string,
    sessionUuid: string,
  ): never {
    this.assertAccountAndOrg(accountUuid, orgUuid);
    this.assertUuid(sessionUuid, "sessionUuid");
    throw new Error("DeviceRegistry: claude-native unavailable");
  }

  signCreateSessionBind(accountUuid: string, orgUuid: string): never {
    this.assertAccountAndOrg(accountUuid, orgUuid);
    throw new Error("DeviceRegistry: claude-native unavailable");
  }

  signTriggerOp(
    accountUuid: string,
    orgUuid: string,
    op: string,
    subjectId: string,
    fireContentHashHex: string,
  ): never {
    this.assertAccountAndOrg(accountUuid, orgUuid);
    if (!new Set(["create", "update", "fork"]).has(op)) {
      throw new Error("DeviceRegistry: op must be one of create/update/fork");
    }
    if ((op === "create") !== (subjectId === "")) {
      throw new Error(
        "DeviceRegistry: subjectId must be empty for create, set for update/fork",
      );
    }
    if (subjectId.includes("\0")) {
      throw new Error("DeviceRegistry: subjectId contains NUL");
    }
    if (!/^[0-9a-f]{64}$/.test(fireContentHashHex)) {
      throw new Error(
        "DeviceRegistry: fireContentHashHex must be 64 lowercase hex chars",
      );
    }
    throw new Error("DeviceRegistry: claude-native unavailable");
  }

  async getLocalDeviceInfo(accountUuid: string): Promise<{
    deviceId: string;
    platform: string;
    displayName: string;
  }> {
    this.assertActiveAccount(accountUuid);
    const encoded = await fs.readFile(getDesktopInstallIdPath(), "utf8");
    const deviceId = Buffer.from(encoded, "base64").toString("utf8");
    if (!UUID_PATTERN.test(deviceId)) {
      throw new Error("DeviceRegistry: install id unavailable");
    }
    const platformName =
      process.platform === "darwin"
        ? "macOS"
        : process.platform === "win32"
          ? "Windows"
          : os.type();
    return {
      deviceId,
      platform: process.platform,
      displayName: `Claude Desktop (${platformName})`,
    };
  }

  notifyRegistered(accountUuid: string): void {
    this.assertActiveAccount(accountUuid);
  }

  private assertAccountAndOrg(accountUuid: string, orgUuid: string): void {
    this.assertActiveAccount(accountUuid);
    this.assertUuid(orgUuid, "orgUuid");
  }

  private assertActiveAccount(accountUuid: string): void {
    this.assertUuid(accountUuid, "accountUuid");
    if (getClaudeAccountDetails()?.accountUuid !== accountUuid) {
      throw new Error("DeviceRegistry: accountUuid is not the active account");
    }
  }

  private assertUuid(value: string, label: string): void {
    if (!UUID_PATTERN.test(value)) {
      throw new Error(`DeviceRegistry: malformed ${label}`);
    }
  }
}
