// Restored from ref/.vite/build/index.js

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { App } from "electron";
import { CLAUDE_CONFIG_FILE_NAME } from "../domain/claude-startup";
import {
  APP_PREFERENCE_DEFAULTS,
  appPreferenceSchema,
  type AppPreferences,
  isValidElectronAccelerator,
  RENDERER_FORBIDDEN_APP_PREFERENCES,
} from "../domain/app-preferences";

type JsonObject = Record<string, unknown>;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

export class ClaudeAppConfigurationRepository {
  private writeQueue: Promise<void> = Promise.resolve();
  private readonly preferenceListeners = new Set<
    (preferences: AppPreferences) => void
  >();

  constructor(private readonly app: App) {}

  get path(): string {
    return path.join(this.app.getPath("userData"), CLAUDE_CONFIG_FILE_NAME);
  }

  async getMenuBarEnabled(): Promise<boolean> {
    return (await this.getPreferences()).menuBarEnabled;
  }

  async getPreferences(): Promise<AppPreferences> {
    const configuration = await this.read();
    const stored = isJsonObject(configuration.preferences)
      ? configuration.preferences
      : {};
    const preferences = appPreferenceSchema.parse({
      ...APP_PREFERENCE_DEFAULTS,
      ...stored,
      louderPenguinEnabled: false,
    });
    return preferences;
  }

  async setPreference(key: string, value: unknown): Promise<void> {
    if (!(key in appPreferenceSchema.shape)) return;
    const preferenceKey = key as keyof AppPreferences;
    if (RENDERER_FORBIDDEN_APP_PREFERENCES.has(preferenceKey)) {
      throw new Error(
        `Preference "${key}" is main-process-only and cannot be set via renderer IPC. Use setAppPreference() from the main process, or add a dedicated IPC handler.`,
      );
    }
    const schema = appPreferenceSchema.shape[preferenceKey];
    const result = schema.safeParse(value);
    if (!result.success) {
      throw new Error(
        `Failed to validate inbound preference (key=${key}): ${result.error.toString()}`,
      );
    }
    if (
      typeof result.data === "object" &&
      result.data !== null &&
      "accelerator" in result.data &&
      typeof result.data.accelerator === "string" &&
      result.data.accelerator !== "" &&
      !isValidElectronAccelerator(result.data.accelerator)
    ) {
      throw new Error(
        `Invalid accelerator "${result.data.accelerator}": contains keys not supported by Electron`,
      );
    }
    await this.writePreference(preferenceKey, result.data);
  }

  subscribePreferences(
    listener: (preferences: AppPreferences) => void,
  ): () => void {
    this.preferenceListeners.add(listener);
    return () => this.preferenceListeners.delete(listener);
  }

  async getConfiguration(): Promise<JsonObject> {
    return this.read();
  }

  async setAppFeature(feature: string, enabled: boolean): Promise<void> {
    await this.enqueueWrite(async () => {
      const configuration = await this.read();
      const currentFeatures = configuration.features;
      const features = isJsonObject(currentFeatures) ? currentFeatures : {};
      await this.write({
        ...configuration,
        features: { ...features, [feature]: enabled },
      });
    });
  }

  async setBooleanSetting(key: string, enabled: boolean): Promise<void> {
    await this.enqueueWrite(async () => {
      const configuration = await this.read();
      await this.write({ ...configuration, [key]: enabled });
    });
  }

  async setConfigurationValue(key: string, value: unknown): Promise<void> {
    await this.enqueueWrite(async () => {
      const configuration = await this.read();
      await this.write({ ...configuration, [key]: value });
    });
  }

  async ensureFile(): Promise<void> {
    try {
      await readFile(this.path, "utf8");
    } catch (error) {
      if (
        !(error instanceof Error) ||
        !("code" in error) ||
        error.code !== "ENOENT"
      ) {
        throw error;
      }
      await this.enqueueWrite(async () => this.write(await this.read()));
    }
  }

  async setGlobalShortcut(accelerator: string): Promise<void> {
    await this.enqueueWrite(async () => {
      const configuration = await this.read();
      await this.write({ ...configuration, globalShortcut: accelerator });
    });
  }

  async setMenuBarEnabled(enabled: boolean): Promise<void> {
    await this.writePreference("menuBarEnabled", enabled);
  }

  private async writePreference(
    key: keyof AppPreferences,
    value: unknown,
  ): Promise<void> {
    await this.enqueueWrite(async () => {
      const configuration = await this.read();
      const currentPreferences = configuration.preferences;
      const preferences = isJsonObject(currentPreferences)
        ? currentPreferences
        : {};
      await this.write({
        ...configuration,
        preferences: { ...preferences, [key]: value },
      });
    });
    const preferences = await this.getPreferences();
    for (const listener of this.preferenceListeners) listener(preferences);
  }

  private async read(): Promise<JsonObject> {
    try {
      const parsed: unknown = JSON.parse(await readFile(this.path, "utf8"));
      return isJsonObject(parsed) ? parsed : {};
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        error.code !== "ENOENT"
      ) {
        throw error;
      }
      return {};
    }
  }

  private async write(configuration: JsonObject): Promise<void> {
    const target = this.path;
    const temporary = `${target}.tmp`;
    await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
    await writeFile(temporary, `${JSON.stringify(configuration, null, 2)}\n`, {
      encoding: "utf8",
      mode: 0o600,
    });
    await rename(temporary, target);
  }

  private enqueueWrite(operation: () => Promise<void>): Promise<void> {
    const next = this.writeQueue.then(operation, operation);
    this.writeQueue = next.catch(() => {});
    return next;
  }
}
