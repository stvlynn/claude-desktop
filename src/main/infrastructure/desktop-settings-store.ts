// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// File-backed desktop-settings store boundary.

import { createLazyScopedStructuredLogger } from "./structured-logger";
import { arrayOfStrings, isRecord } from "./desktop-runtime-utils";
import { getDesktopSettingDefinitions } from "../domain/desktop-setting-definitions";
import { getDefaultDesktopSettingValue } from "../application/desktop-settings";
import { FileBackedGlobalStateStore } from "./global-state-store";
import {
  getFollowUpQueueModeSettingKey,
  getWorkspaceRootOptionsKey,
} from "../domain/desktop-setting-keys";
import {
  loadDesktopConfigFromToml,
  migrateLegacyDesktopSettings,
  parseDesktopSettings,
  readDesktopConfigFromAppServer,
} from "./desktop-settings-config";
import {
  clearMigratedLegacySettings,
  parseSettingInputValue,
  serializeDesktopSettingValue,
} from "./desktop-settings-migration";
import type {
  KeyValueStore,
  SettingsConfigClient,
  SettingsStoreBoundary,
} from "./desktop-runtime-types";
import { PERSISTED_ATOM_STATE_KEY } from "../domain/desktop-state-keys";

export { FileBackedGlobalStateStore } from "./global-state-store";

export class FileBackedSettingsStoreBoundary implements SettingsStoreBoundary {
  private readonly filePath: string;
  private readonly globalState: KeyValueStore;
  private state: Map<string, unknown>;
  private pendingLegacyMigrations = new Map<string, unknown>();
  private pendingWrites = new Map<string, unknown>();
  private desktopConfig: Record<string, unknown>;
  private configClient: SettingsConfigClient | null = null;
  private persistQueued: Promise<void> = Promise.resolve();
  constructor(filePath: string, globalState: KeyValueStore) {
    this.filePath = filePath;
    this.globalState = globalState;
    this.desktopConfig = loadDesktopConfigFromToml(filePath);
    this.state = parseDesktopSettings(this.desktopConfig);
    migrateLegacyDesktopSettings(
      this.state,
      this.pendingLegacyMigrations,
      this.globalState,
    );
  }
  getStateFilePath(): string {
    return this.filePath;
  }
  getDesktopConfig(): Record<string, unknown> {
    return this.desktopConfig;
  }
  async initialize(configClient: SettingsConfigClient): Promise<void> {
    this.configClient = configClient;
    this.desktopConfig = readDesktopConfigFromAppServer(
      await configClient.readConfig(),
    );
    const appServerState = parseDesktopSettings(this.desktopConfig);
    const migratedAwayKeys = new Set<string>();
    for (const definition of getDesktopSettingDefinitions()) {
      if (this.pendingWrites.has(definition.key)) continue;
      if (appServerState.has(definition.key)) {
        this.state.set(definition.key, appServerState.get(definition.key));
        if (this.pendingLegacyMigrations.delete(definition.key)) {
          migratedAwayKeys.add(definition.key);
        }
        continue;
      }
      if (!this.pendingLegacyMigrations.has(definition.key)) {
        this.state.delete(definition.key);
      }
    }
    this.migrateExistingUserFollowUpQueueMode();
    clearMigratedLegacySettings(migratedAwayKeys, this.globalState);
    await this.persistPendingSettings();
  }
  get(key: string): unknown {
    return this.state.get(key);
  }
  getEffective(key: string): unknown {
    return this.get(key) ?? getDefaultDesktopSettingValue(key);
  }
  set(key: string, value: unknown): void {
    const parsedValue = parseSettingInputValue(key, value);
    this.state.set(key, parsedValue);
    this.desktopConfig[key] = serializeDesktopSettingValue(key, parsedValue);
    this.pendingWrites.set(key, parsedValue);
    void this.persistPendingSettings();
  }
  flush(): Promise<void> {
    return this.persistQueued.then(() => this.persistPendingSettings());
  }
  private migrateExistingUserFollowUpQueueMode(): void {
    const followUpQueueModeKey = getFollowUpQueueModeSettingKey();
    if (this.state.has(followUpQueueModeKey)) return;
    const persistedAtoms = this.globalState.getStored?.(
      PERSISTED_ATOM_STATE_KEY,
    );
    const projectlessOnboardingCompleted =
      isRecord(persistedAtoms) &&
      persistedAtoms["electron:onboarding-projectless-completed"] === true;
    const hasWorkspaceRoots =
      arrayOfStrings(this.globalState.getStored?.(getWorkspaceRootOptionsKey()))
        .length > 0;
    if (!projectlessOnboardingCompleted && !hasWorkspaceRoots) return;
    this.state.set(followUpQueueModeKey, "queue");
    this.desktopConfig[followUpQueueModeKey] = serializeDesktopSettingValue(
      followUpQueueModeKey,
      "queue",
    );
    this.pendingWrites.set(followUpQueueModeKey, "queue");
  }
  private persistPendingSettings(): Promise<void> {
    if (this.configClient == null) return this.persistQueued;
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(async () => {
        const legacyMigrationSnapshot = new Map(this.pendingLegacyMigrations);
        const writeSnapshot = new Map(this.pendingWrites);
        const editsByKey = new Map(legacyMigrationSnapshot);
        for (const [key, value] of writeSnapshot) editsByKey.set(key, value);
        if (editsByKey.size === 0) return;
        try {
          await this.configClient?.batchWriteConfigValues({
            edits: [...editsByKey.entries()].map(([key, value]) => ({
              keyPath: `desktop.${key}`,
              mergeStrategy: "replace",
              value: serializeDesktopSettingValue(key, value),
            })),
          });
          for (const [key, value] of legacyMigrationSnapshot) {
            if (this.pendingLegacyMigrations.get(key) === value) {
              this.pendingLegacyMigrations.delete(key);
            }
          }
          for (const [key, value] of writeSnapshot) {
            if (this.pendingWrites.get(key) === value) {
              this.pendingWrites.delete(key);
            }
          }
          clearMigratedLegacySettings(
            new Set(legacyMigrationSnapshot.keys()),
            this.globalState,
          );
        } catch (error) {
          settingsLogger().warning("Failed to persist desktop settings", {
            safe: {},
            sensitive: {
              error,
            },
          });
        }
      });
    return this.persistQueued;
  }
}

export const settingsLogger = createLazyScopedStructuredLogger("settings-store");
