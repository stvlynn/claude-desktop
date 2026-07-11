// @ts-nocheck
// Restored from ref/.vite/build/buddy.js
// Application: Buddy (BLE maker device) service.
//
// The real implementation needs a native BLE module. This version provides the
// full IPC surface and a deterministic stub backend so the renderer page can
// mount and exercise all API methods. Replace the backend methods when a BLE
// library is available.

import { ipcMain, type WebContents } from "electron";
import { buddyIpcChannels } from "../../shared/contracts/preload-api";
import type {
  BuddyConnectionStatus,
  BuddyDeviceStatus,
  BuddyDiscoveredDevice,
  BuddyPreview,
} from "../../renderer/shared/api/claude-desktop-api";

type ProgressListener = (message: string) => void;
type PairingPromptListener = (deviceName: string) => void;

export class BuddyService {
  private windowContents: WebContents | null = null;
  private progressListeners = new Set<ProgressListener>();
  private pairingListeners = new Set<PairingPromptListener>();
  private paired: { id: string; name: string } | null = null;
  private scanning = false;

  registerWindow(contents: WebContents) {
    this.windowContents = contents;
  }

  listen() {
    ipcMain.handle(buddyIpcChannels.status, async () => this.status());
    ipcMain.handle(buddyIpcChannels.deviceStatus, async () => this.deviceStatus());
    ipcMain.handle(buddyIpcChannels.scanDevices, async () => this.scanDevices());
    ipcMain.handle(buddyIpcChannels.cancelScan, async () => this.cancelScan());
    ipcMain.handle(buddyIpcChannels.pickDevice, async (_event, deviceId: string) =>
      this.pickDevice(deviceId),
    );
    ipcMain.handle(buddyIpcChannels.pairDevice, async () => this.pairDevice());
    ipcMain.handle(buddyIpcChannels.submitPin, async (_event, pin: string | null) =>
      this.submitPin(pin),
    );
    ipcMain.handle(buddyIpcChannels.forgetDevice, async () => this.forgetDevice());
    ipcMain.handle(buddyIpcChannels.setName, async (_event, name: string) =>
      this.setName(name),
    );
    ipcMain.handle(buddyIpcChannels.preview, async (_event, folderPath: string) =>
      this.preview(folderPath),
    );
    ipcMain.handle(buddyIpcChannels.install, async (_event, folderPath: string) =>
      this.install(folderPath),
    );
    ipcMain.handle(buddyIpcChannels.pickFolder, async () => this.pickFolder());

    ipcMain.on(buddyIpcChannels.getPathForFile, (event, file: File) => {
      // The renderer only needs this for drag-and-drop File objects. In the
      // main process we do not have a DOM File, so this handler is a no-op.
      // The preload exposes the same bridge for renderer-side files.
      event.returnValue = null;
    });
  }

  private emitProgress(message: string) {
    this.windowContents?.send(buddyIpcChannels.progress, message);
    for (const listener of this.progressListeners) {
      listener(message);
    }
  }

  private emitPairingPrompt(deviceName: string) {
    this.windowContents?.send(buddyIpcChannels.pairingPrompt, deviceName);
    for (const listener of this.pairingListeners) {
      listener(deviceName);
    }
  }

  async status(): Promise<BuddyConnectionStatus> {
    return { connected: false, paired: this.paired };
  }

  async deviceStatus(): Promise<BuddyDeviceStatus | null> {
    if (!this.paired) return null;
    return {
      name: this.paired.name,
      bat: { mA: 12, pct: 87, usb: true },
      stats: { appr: 42, lvl: 3, vel: 2.1 },
      sys: { heap: 245760, up: 1847 },
      sec: true,
    };
  }

  async scanDevices(): Promise<BuddyDiscoveredDevice[] | null> {
    this.scanning = true;
    await this.delay(1500);
    if (!this.scanning) return [];
    this.scanning = false;
    return [
      { id: "claude-buddy-stub-01", name: "Claude Buddy (Stub)" },
    ];
  }

  async cancelScan(): Promise<void> {
    this.scanning = false;
  }

  async pickDevice(deviceId: string): Promise<void> {
    this.paired = { id: deviceId, name: "Claude Buddy (Stub)" };
  }

  async pairDevice(): Promise<void> {
    if (!this.paired) return;
    this.emitPairingPrompt(this.paired.name);
  }

  async submitPin(_pin: string | null): Promise<void> {
    // Stub: accept any pin.
  }

  async forgetDevice(): Promise<void> {
    this.paired = null;
  }

  async setName(name: string): Promise<boolean> {
    if (this.paired) {
      this.paired.name = name;
      return true;
    }
    return false;
  }

  async preview(folderPath: string): Promise<BuddyPreview | null> {
    if (!folderPath) return null;
    return {
      kind: "text",
      color: "#a5b4fc",
      frames: ["Hello from\nBuddy preview"],
    };
  }

  async install(folderPath: string): Promise<void> {
    this.emitProgress("Uploading… 0%");
    await this.delay(400);
    this.emitProgress("Uploading… 50%");
    await this.delay(400);
    this.emitProgress("Uploading… 100%");
    await this.delay(200);
    this.emitProgress("✓ Install complete");
  }

  async pickFolder(): Promise<string | null> {
    const { dialog } = await import("electron");
    const result = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    return result.canceled || result.filePaths.length === 0
      ? null
      : result.filePaths[0];
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
