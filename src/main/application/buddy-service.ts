// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import path from "node:path";
import { readFile, readdir, stat } from "node:fs/promises";
import { dialog, type App, type WebContents } from "electron";
import {
  BuddyDeviceRepository,
  type PairedBuddyDevice,
} from "../infrastructure/buddy-device-repository";
import type { BuddyRemoteFeedService } from "./buddy-remote-feed-service";

type DeviceAck = {
  ack: string;
  ok: boolean;
  n?: number;
  data?: unknown;
  error?: string;
};

type PendingAck = {
  resolve: (value: DeviceAck) => void;
  reject: (error: Error) => void;
  timer: NodeJS.Timeout;
};

type DeviceScan = {
  found: Map<string, string>;
  choose?: (deviceId: string) => void;
  timer: NodeJS.Timeout;
  finish: () => void;
};

type CharacterFolder = {
  dir: string;
  name: string;
  totalBytes: number;
  files: Array<{ name: string; size: number }>;
};

const MAX_CHARACTER_BYTES = 1_800_000;
const CHUNK_BYTES = 256;

export class BuddyService extends EventEmitter {
  private readonly repository: BuddyDeviceRepository;
  private readonly pendingAcks = new Map<string, PendingAck>();
  private paired: PairedBuddyDevice | null = null;
  private connected = false;
  private connectionError: string | null = null;
  private scan: DeviceScan | null = null;
  private pairingReply: ((response: Electron.Response) => void) | null = null;
  private installRunning = false;
  private feedTimer: NodeJS.Timeout | null = null;
  private readonly ready: Promise<void>;

  constructor(
    app: App,
    private readonly mainView: WebContents,
    private readonly remoteFeed: BuddyRemoteFeedService,
  ) {
    super();
    this.repository = new BuddyDeviceRepository(app);
    this.ready = this.repository.getPaired().then((paired) => {
      this.paired = paired;
    });
    this.attachBluetoothBridge();
  }

  async status() {
    await this.ready;
    return {
      connected: this.connected,
      error: this.connectionError,
      paired: this.paired,
    };
  }

  async deviceStatus(): Promise<unknown | null> {
    if (!this.connected) return null;
    try {
      const response = await this.sendCommand(
        { cmd: "status" },
        "status",
        3_000,
      );
      return response.ok ? (response.data ?? null) : null;
    } catch {
      return null;
    }
  }

  async setName(name: string): Promise<boolean> {
    const trimmed = name.trim().slice(0, 20);
    if (!trimmed) return false;
    try {
      const response = await this.sendCommand(
        { cmd: "name", name: trimmed },
        "name",
        3_000,
      );
      if (response.ok && this.paired) {
        this.paired = { ...this.paired, name: trimmed };
        await this.repository.setPaired(this.paired);
      }
      return response.ok;
    } catch {
      return false;
    }
  }

  async pairDevice(): Promise<boolean> {
    await this.ready;
    if (this.mainView.isDestroyed()) return false;
    try {
      return Boolean(
        await this.mainView.executeJavaScript(
          "window.buddyBle?.pair?.() ?? false",
          true,
        ),
      );
    } catch (error) {
      this.connectionError = errorMessage(error);
      return false;
    }
  }

  async scanDevices(): Promise<Array<{ id: string; name: string }>> {
    if (this.scan) return [];
    if (this.mainView.isDestroyed()) return [];
    const scan = await new Promise<DeviceScan>((resolve) => {
      const value = {} as DeviceScan;
      Object.assign(value, {
        found: new Map(),
        timer: setTimeout(() => resolve(value), 5_000),
        finish: () => resolve(value),
      });
      this.scan = value;
      void this.mainView
        .executeJavaScript("window.buddyBle?.pair?.() ?? false", true)
        .catch(() => this.finishScan(""));
    });
    const devices = [...scan.found].map(([id, name]) => ({ id, name }));
    if (this.scan !== scan) return [];
    if (devices.length === 0) this.finishScan("");
    return devices;
  }

  async pickDevice(deviceId: string): Promise<boolean> {
    const scan = this.scan;
    const name = scan?.found.get(deviceId);
    if (!scan || name === undefined) return false;
    this.paired = { id: deviceId, name };
    await this.repository.setPaired(this.paired);
    this.finishScan(deviceId);
    return true;
  }

  cancelScan(): void {
    this.finishScan("");
  }

  submitPin(pin: string | null): void {
    const reply = this.pairingReply;
    this.pairingReply = null;
    if (!reply) return;
    reply(pin ? { confirmed: true, pin } : { confirmed: false });
    if (!pin) this.forgetDevice();
  }

  forgetDevice(): void {
    if (this.connected) {
      this.sendLine(JSON.stringify({ cmd: "unpair" }));
      if (!this.mainView.isDestroyed()) {
        void this.mainView.executeJavaScript(
          "window.buddyBle?.disconnect?.()",
          true,
        );
      }
    }
    this.connected = false;
    this.paired = null;
    void this.repository.setPaired(null);
  }

  async pickFolder(): Promise<string | null> {
    const result = await dialog.showOpenDialog({
      title: "Choose Data Folder",
      message: "Pick a folder to send to your device",
      properties: ["openDirectory"],
    });
    return result.canceled ? null : (result.filePaths[0] ?? null);
  }

  async preview(folderPath: string): Promise<unknown | null> {
    try {
      const manifest = JSON.parse(
        await readFile(path.join(folderPath, "manifest.json"), "utf8"),
      ) as Record<string, unknown>;
      const states = isRecord(manifest.states) ? manifest.states : null;
      const state = states?.idle ?? (states ? Object.values(states)[0] : null);
      if (state && manifest.mode === "text" && isRecord(state)) {
        if (Array.isArray(state.frames)) {
          return {
            kind: "text",
            frames: state.frames,
            delay: typeof state.delay === "number" ? state.delay : 200,
            color:
              isRecord(manifest.colors) &&
              typeof manifest.colors.body === "string"
                ? manifest.colors.body
                : "#C05630",
          };
        }
      } else if (state) {
        const fileName = Array.isArray(state) ? state[0] : state;
        if (
          typeof fileName === "string" &&
          fileName === path.basename(fileName)
        ) {
          const bytes = await readFile(path.join(folderPath, fileName));
          return {
            kind: "gif",
            dataUrl: `data:image/gif;base64,${bytes.toString("base64")}`,
          };
        }
      }
    } catch {}

    try {
      const folder = await inspectCharacterFolder(folderPath);
      const unit = folder.files.length === 1 ? "file" : "files";
      return {
        kind: "text",
        frames: [
          `${folder.files.length} ${unit}\n${Math.round(folder.totalBytes / 1024)} KB`,
        ],
        delay: 0,
        color: "#888",
      };
    } catch {
      return null;
    }
  }

  async install(folderPath: string): Promise<void> {
    if (this.installRunning) throw new Error("install already in progress");
    this.installRunning = true;
    try {
      const folder = await inspectCharacterFolder(folderPath);
      await this.uploadCharacter(folder);
      this.emit(
        "progress",
        `✓ sent ${folder.name} (${Math.round(folder.totalBytes / 1024)}KB)`,
      );
    } catch (error) {
      this.emit("progress", `✗ ${errorMessage(error)}`);
      throw error;
    } finally {
      this.installRunning = false;
    }
  }

  receiveLine(line: string): void {
    try {
      const message = JSON.parse(line.trim()) as Record<string, unknown>;
      if (typeof message.ack !== "string") return;
      const pending = this.pendingAcks.get(message.ack);
      if (!pending) return;
      this.pendingAcks.delete(message.ack);
      clearTimeout(pending.timer);
      pending.resolve({
        ack: message.ack,
        ok: Boolean(message.ok),
        n: typeof message.n === "number" ? message.n : undefined,
        data: message.data,
        error: typeof message.error === "string" ? message.error : undefined,
      });
    } catch {}
  }

  reportState(state: string, deviceName?: string): void {
    this.connected = state === "connected";
    this.connectionError = null;
    if (this.connected && this.paired && deviceName) {
      this.paired = { ...this.paired, name: deviceName };
      void this.repository.setPaired(this.paired);
    }
    if (this.connected) this.startFeed();
    else this.stopFeed();
  }

  log(message: string): void {
    this.emit("log", message);
  }

  dispose(): void {
    this.cancelScan();
    this.stopFeed();
    this.mainView.off("select-bluetooth-device", this.selectBluetoothDevice);
    this.mainView.session.setBluetoothPairingHandler(null);
    for (const pending of this.pendingAcks.values()) {
      clearTimeout(pending.timer);
      pending.reject(new Error("Buddy service disposed"));
    }
    this.pendingAcks.clear();
    this.removeAllListeners();
  }

  private readonly selectBluetoothDevice = (
    event: Electron.Event,
    devices: Electron.BluetoothDevice[],
    callback: (deviceId: string) => void,
  ): void => {
    event.preventDefault();
    const candidates = devices.filter((device) => {
      const name = (device.deviceName || "").toLowerCase();
      return name.startsWith("nibblet") || name.startsWith("claude");
    });
    if (this.scan) {
      for (const device of candidates) {
        this.scan.found.set(device.deviceId, device.deviceName || "");
      }
      this.scan.choose = callback;
      return;
    }
    const paired = this.paired;
    callback(
      candidates.find((device) => device.deviceId === paired?.id)?.deviceId ??
        "",
    );
  };

  private attachBluetoothBridge(): void {
    this.mainView.on("select-bluetooth-device", this.selectBluetoothDevice);
    this.mainView.session.setBluetoothPairingHandler((details, callback) => {
      if (details.pairingKind !== "providePin") {
        callback({ confirmed: details.pairingKind === "confirm" });
        return;
      }
      this.pairingReply = callback;
      this.emit("pairingPrompt", this.paired?.name ?? details.deviceId);
    });
  }

  private finishScan(deviceId: string): void {
    const scan = this.scan;
    if (!scan) return;
    this.scan = null;
    clearTimeout(scan.timer);
    scan.choose?.(deviceId);
    scan.finish();
  }

  private sendLine(line: string): boolean {
    if (!this.connected || this.mainView.isDestroyed()) return false;
    this.emit("tx", line);
    return true;
  }

  private sendCommand(
    command: Record<string, unknown>,
    ack: string,
    timeoutMs = 5_000,
  ): Promise<DeviceAck> {
    return new Promise((resolve, reject) => {
      if (!this.connected) {
        reject(new Error("device: not connected"));
        return;
      }
      const previous = this.pendingAcks.get(ack);
      if (previous) {
        clearTimeout(previous.timer);
        previous.reject(new Error(`device: ${ack} superseded`));
      }
      const pending: PendingAck = {
        resolve,
        reject,
        timer: setTimeout(() => {
          if (this.pendingAcks.get(ack) === pending) {
            this.pendingAcks.delete(ack);
          }
          reject(new Error(`device: ${ack} ack timeout`));
        }, timeoutMs),
      };
      this.pendingAcks.set(ack, pending);
      if (!this.sendLine(JSON.stringify(command))) {
        this.pendingAcks.delete(ack);
        clearTimeout(pending.timer);
        reject(new Error("device: BLE write failed"));
      }
    });
  }

  private async uploadCharacter(folder: CharacterFolder): Promise<void> {
    let begun = false;
    let lastError = "";
    for (let attempt = 0; attempt < 8; attempt += 1) {
      try {
        const response = await this.sendCommand(
          { cmd: "char_begin", name: folder.name, total: folder.totalBytes },
          "char_begin",
          2_000,
        );
        if (response.ok) {
          begun = true;
          break;
        }
        if (response.error) {
          lastError = response.error;
          break;
        }
      } catch {}
    }
    if (!begun)
      throw new Error(lastError || "Stick did not respond to char_begin");

    let bytesDone = 0;
    for (const file of folder.files) {
      const bytes = await readFile(path.join(folder.dir, file.name));
      const opened = await this.sendCommand(
        { cmd: "file", path: file.name, size: bytes.length },
        "file",
      );
      if (!opened.ok) throw new Error(`Stick failed to open ${file.name}`);
      for (let offset = 0; offset < bytes.length; offset += CHUNK_BYTES) {
        const chunk = bytes.subarray(offset, offset + CHUNK_BYTES);
        const response = await this.sendCommand(
          { cmd: "chunk", d: chunk.toString("base64") },
          "chunk",
          3_000,
        );
        if (!response.ok)
          throw new Error(`chunk failed at ${file.name}+${offset}`);
        bytesDone += chunk.length;
        this.emit(
          "progress",
          `uploading ${file.name} — ${Math.round((bytesDone / folder.totalBytes) * 100)}% (${Math.round(bytesDone / 1024)}KB)`,
        );
      }
      const ended = await this.sendCommand(
        { cmd: "file_end" },
        "file_end",
        10_000,
      );
      if (!ended.ok || ended.n !== bytes.length) {
        throw new Error(
          `${file.name}: wrote ${ended.n ?? 0} of ${bytes.length}`,
        );
      }
    }
    const ended = await this.sendCommand(
      { cmd: "char_end" },
      "char_end",
      10_000,
    );
    if (!ended.ok)
      throw new Error("char_end failed — character did not reload");
  }

  private startFeed(): void {
    if (this.feedTimer) return;
    const update = (): void => {
      const sessions = this.remoteFeed.getAllSessions();
      const running = sessions.filter((session) => session.isRunning).length;
      const waiting = sessions.reduce(
        (count, session) => count + session.pendingToolPermissions.length,
        0,
      );
      this.sendLine(
        JSON.stringify({
          total: sessions.length,
          running,
          waiting,
          msg:
            waiting > 0
              ? `${waiting} waiting`
              : running > 0
                ? `${running} running`
                : sessions.length > 0
                  ? `${sessions.length} idle`
                  : "ready",
        }),
      );
    };
    update();
    this.feedTimer = setInterval(update, 10_000);
    this.feedTimer.unref();
  }

  private stopFeed(): void {
    if (this.feedTimer) clearInterval(this.feedTimer);
    this.feedTimer = null;
  }
}

async function inspectCharacterFolder(
  folderPath: string,
): Promise<CharacterFolder> {
  const files = (await readdir(folderPath, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
    .map((entry) => entry.name);
  if (files.length === 0) throw new Error("Folder is empty");
  const entries = await Promise.all(
    files.map(async (name) => ({
      name,
      size: (await stat(path.join(folderPath, name))).size,
    })),
  );
  const totalBytes = entries.reduce((sum, entry) => sum + entry.size, 0);
  if (totalBytes > MAX_CHARACTER_BYTES) {
    throw new Error(
      `Folder is ${Math.round(totalBytes / 1024)}KB; device limit is ${Math.round(MAX_CHARACTER_BYTES / 1024)}KB`,
    );
  }
  let name = path.basename(folderPath);
  if (files.includes("manifest.json")) {
    try {
      const manifest = JSON.parse(
        await readFile(path.join(folderPath, "manifest.json"), "utf8"),
      ) as Record<string, unknown>;
      if (typeof manifest.name === "string" && manifest.name)
        name = manifest.name;
    } catch {}
  }
  return { dir: folderPath, name, totalBytes, files: entries };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
