// Restored from ref/.vite/build/index.js

import path from "node:path";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import type { App } from "electron";

export class LocalSessionSettingsRepository {
  private readonly root: string;

  constructor(app: App) {
    this.root = path.join(app.getPath("userData"), "local-session-settings");
  }

  async read<T>(name: string, fallback: T): Promise<T> {
    assertName(name);
    try {
      return JSON.parse(
        await readFile(path.join(this.root, name), "utf8"),
      ) as T;
    } catch {
      return fallback;
    }
  }

  async write(name: string, value: unknown): Promise<void> {
    assertName(name);
    await mkdir(this.root, { recursive: true, mode: 0o700 });
    const target = path.join(this.root, name);
    const temporary = `${target}.${process.pid}.tmp`;
    await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
      mode: 0o600,
    });
    await rename(temporary, target);
  }
}

function assertName(value: string): void {
  if (!/^[a-z0-9][a-z0-9-]*\.json$/.test(value))
    throw new Error("Invalid local session settings file name");
}
