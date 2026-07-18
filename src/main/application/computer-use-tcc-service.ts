// Restored from ref/.vite/build/index.js (claude-native-unavailable branch)

import { shell } from "electron";

export type ComputerUsePermissionState =
  "granted" | "denied" | "not-determined" | "not-supported";

export type ComputerUseGrant = {
  bundleId: string;
  displayName: string;
  grantedAt: number;
};

export type InstalledComputerUseApp = {
  bundleId: string;
  displayName: string;
};

export class ComputerUseTccService {
  getState(): {
    accessibility: ComputerUsePermissionState;
    screenRecording: ComputerUsePermissionState;
  } {
    return {
      accessibility: "not-supported",
      screenRecording: "not-supported",
    };
  }

  requestAccessibility(): ComputerUsePermissionState {
    return "not-supported";
  }

  requestScreenRecording(): ComputerUsePermissionState {
    return "not-supported";
  }

  async openSystemSettings(pane: string): Promise<void> {
    if (process.platform !== "darwin") return;
    await shell.openExternal(
      `x-apple.systempreferences:com.apple.preference.security?${pane}`,
    );
  }

  getCurrentSessionGrants(_sessionId: string): ComputerUseGrant[] {
    return [];
  }

  revokeGrant(_sessionId: string, _bundleId: string): void {}

  listInstalledApps(): InstalledComputerUseApp[] {
    return [];
  }
}
