// Restored from ref/.vite/build/index.js

import path from "node:path";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import type { App } from "electron";

export type PairedBuddyDevice = { id: string; name: string };

export class BuddyDeviceRepository {
  constructor(private readonly app: App) {}

  async getPaired(): Promise<PairedBuddyDevice | null> {
    try {
      const value = JSON.parse(await readFile(this.path, "utf8")) as unknown;
      const candidate =
        isRecord(value) && "paired" in value ? value.paired : value;
      return isPairedDevice(candidate) ? candidate : null;
    } catch {
      return null;
    }
  }

  async setPaired(value: PairedBuddyDevice | null): Promise<void> {
    await mkdir(path.dirname(this.path), { recursive: true, mode: 0o700 });
    const temporary = `${this.path}.${process.pid}.tmp`;
    await writeFile(
      temporary,
      `${JSON.stringify({ paired: value }, null, 2)}\n`,
      { mode: 0o600 },
    );
    await rename(temporary, this.path);
  }

  private get path(): string {
    return path.join(this.app.getPath("userData"), "buddy-state.json");
  }
}

function isPairedDevice(value: unknown): value is PairedBuddyDevice {
  if (!isRecord(value)) return false;
  return typeof value.id === "string" && typeof value.name === "string";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
