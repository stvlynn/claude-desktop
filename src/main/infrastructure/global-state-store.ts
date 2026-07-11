// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// Minimal file-backed global state store for the main process.

import * as fs from "node:fs";
import * as path from "node:path";
import { getDefaultGlobalStateValue } from "../domain/global-state";
import type { KeyValueStore } from "./desktop-runtime-types";
import { isRecord, writeFileAtomically } from "./desktop-runtime-utils";
import { createLazyScopedStructuredLogger } from "./structured-logger";

const globalStateLogger = createLazyScopedStructuredLogger("global-state-store");

export function loadGlobalStateMap(filePath: string): Map<string, unknown> {
  if (!fs.existsSync(filePath)) return new Map();
  const primary = readGlobalStateMap(filePath);
  if (primary != null) return primary;
  const backup = readGlobalStateMap(`${filePath}.bak`);
  if (backup == null) return new Map();
  globalStateLogger().warning("Loaded global state from backup", {
    safe: {},
    sensitive: {},
  });
  return backup;
}

function readGlobalStateMap(filePath: string): Map<string, unknown> | null {
  if (!fs.existsSync(filePath)) return null;
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (!isRecord(parsed))
      throw Error("Expected global state to be a JSON object");
    return new Map(Object.entries(parsed));
  } catch (error) {
    globalStateLogger().warning("Failed to load global state", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}

export function persistGlobalStateMap(
  filePath: string,
  state: Map<string, unknown>,
): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  try {
    const serialized = JSON.stringify(Object.fromEntries(state));
    writeFileAtomically(filePath, serialized);
    writeFileAtomically(`${filePath}.bak`, serialized);
  } catch (error) {
    globalStateLogger().warning("Failed to persist global state", {
      safe: {},
      sensitive: {
        error,
      },
    });
  }
}

export class FileBackedGlobalStateStore implements KeyValueStore {
  private readonly filePath: string;
  private readonly state: Map<string, unknown>;
  private persistQueued: Promise<void> = Promise.resolve();

  constructor(filePath: string) {
    this.filePath = filePath;
    this.state = loadGlobalStateMap(filePath);
  }

  getStateFilePath(): string {
    return this.filePath;
  }

  get(key: string): unknown {
    const storedValue = this.state.get(key);
    return storedValue !== undefined && storedValue != null
      ? storedValue
      : (getDefaultGlobalStateValue(key) ?? null);
  }

  getStored(key: string): unknown {
    return this.state.get(key);
  }

  set(key: string, value: unknown): void {
    if (value === undefined) {
      this.state.delete(key);
    } else {
      this.state.set(key, value);
    }
    this.persistForKey(key);
  }

  update(
    key: string,
    updater: (value: unknown | null) => unknown | undefined,
  ): void {
    const nextValue = updater(this.state.has(key) ? this.state.get(key) : null);
    if (nextValue === undefined) {
      this.state.delete(key);
    } else {
      this.state.set(key, nextValue);
    }
    this.persistForKey(key);
  }

  delete(key: string): void {
    this.state.delete(key);
    this.persistForKey(key);
  }

  flush(): Promise<void> {
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(() => {
        persistGlobalStateMap(this.filePath, this.state);
      });
    return this.persistQueued;
  }

  private persistForKey(_key: string): void {
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(() => {
        persistGlobalStateMap(this.filePath, this.state);
      });
    void this.persistQueued;
  }
}
