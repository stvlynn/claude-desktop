// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// Loads and sanitizes desktop settings from config.toml / app-server config.

import { existsSync, readFileSync } from "node:fs";
import { getDesktopSettingDefinition } from "../application/desktop-settings";
import {
  getDesktopSettingDefinitions,
  isJsonConfigValue,
} from "../domain/desktop-setting-definitions";
import { PERSISTED_ATOM_STATE_KEY } from "../domain/desktop-state-keys";
import { isRecord } from "./desktop-runtime-utils";
import { parseTomlConfig } from "./toml-config-parser";
import { createLazyScopedStructuredLogger } from "./structured-logger";
import type { KeyValueStore } from "./desktop-runtime-types";
import {
  readLegacySettingValue,
  safeParseSettingValue,
} from "./desktop-settings-migration";

const settingsConfigLogger = createLazyScopedStructuredLogger(
  "desktop-settings-config",
);

export function loadDesktopConfigFromToml(
  filePath: string,
): Record<string, unknown> {
  if (!existsSync(filePath)) return {};
  try {
    return sanitizeDesktopConfig(
      extractDesktopConfig(parseTomlConfig(readFileSync(filePath, "utf8"))),
    );
  } catch (error) {
    settingsConfigLogger().warning(
      "Failed to load desktop settings from config.toml",
      {
        safe: {},
        sensitive: {
          error,
        },
      },
    );
    return {};
  }
}

export function readDesktopConfigFromAppServer(
  config: unknown,
): Record<string, unknown> {
  return sanitizeDesktopConfig(extractDesktopConfig(config));
}

function extractDesktopConfig(config: unknown): Record<string, unknown> {
  return isRecord(config) && isRecord(config.desktop) ? config.desktop : {};
}

function sanitizeDesktopConfig(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(config)) {
    if (!isJsonConfigValue(value)) {
      settingsConfigLogger().warning("Dropping unsupported desktop config value", {
        safe: {
          key,
        },
        sensitive: {},
      });
      continue;
    }
    sanitized[key] = value;
  }
  return sanitized;
}

export function parseDesktopSettings(
  desktopConfig: Record<string, unknown>,
): Map<string, unknown> {
  const state = new Map<string, unknown>();
  for (const [key, rawValue] of Object.entries(desktopConfig)) {
    const definition = getDesktopSettingDefinition(key);
    if (definition == null) continue;
    const parsedValue = safeParseSettingValue(definition.key, rawValue, true);
    if (parsedValue.success) {
      state.set(definition.key, parsedValue.value);
      continue;
    }
    settingsConfigLogger().warning("Dropping invalid desktop setting", {
      safe: {
        key,
      },
      sensitive: {},
    });
  }
  return state;
}

export function migrateLegacyDesktopSettings(
  state: Map<string, unknown>,
  pendingLegacyMigrations: Map<string, unknown>,
  globalState: KeyValueStore,
): void {
  const persistedAtoms = globalState.getStored?.(PERSISTED_ATOM_STATE_KEY);
  for (const definition of getDesktopSettingDefinitions()) {
    if (state.has(definition.key)) continue;
    const legacyValue = readLegacySettingValue(
      definition,
      globalState,
      persistedAtoms,
    );
    if (legacyValue === undefined) continue;
    const parsedValue = safeParseSettingValue(
      definition.key,
      legacyValue,
      false,
    );
    if (!parsedValue.success) {
      settingsConfigLogger().warning("Dropping invalid migrated setting", {
        safe: {
          key: definition.key,
        },
        sensitive: {},
      });
      continue;
    }
    state.set(definition.key, parsedValue.value);
    pendingLegacyMigrations.set(definition.key, parsedValue.value);
  }
}
