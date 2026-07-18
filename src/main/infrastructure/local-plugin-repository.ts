// Restored from ref/.vite/build/index.js

import { homedir } from "node:os";
import path from "node:path";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import type {
  InstalledPluginRecord,
  LocalPluginContext,
} from "../domain/local-plugin";

type InstalledFile = {
  version: number;
  plugins: Record<string, InstalledPluginRecord[]>;
};

export class LocalPluginRepository {
  readonly root =
    process.env.CLAUDE_CONFIG_DIR ?? path.join(homedir(), ".claude");

  async installed(): Promise<InstalledFile> {
    return readJson(path.join(this.root, "plugins", "installed_plugins.json"), {
      version: 2,
      plugins: {},
    });
  }

  async saveInstalled(value: InstalledFile): Promise<void> {
    await atomicJson(
      path.join(this.root, "plugins", "installed_plugins.json"),
      value,
    );
  }

  async enabled(
    context?: LocalPluginContext,
  ): Promise<Record<string, boolean>> {
    const settings = await readJson<Record<string, unknown>>(
      this.settingsPath(context),
      {},
    );
    return isRecord(settings.enabledPlugins)
      ? Object.fromEntries(
          Object.entries(settings.enabledPlugins).filter(
            (entry): entry is [string, boolean] =>
              typeof entry[1] === "boolean",
          ),
        )
      : {};
  }

  async setEnabled(
    pluginId: string,
    enabled: boolean,
    context?: LocalPluginContext,
  ): Promise<void> {
    const target = this.settingsPath(context);
    const settings = await readJson<Record<string, unknown>>(target, {});
    const current = isRecord(settings.enabledPlugins)
      ? settings.enabledPlugins
      : {};
    await atomicJson(target, {
      ...settings,
      enabledPlugins: { ...current, [pluginId]: enabled },
    });
  }

  async removeInstall(pluginId: string): Promise<boolean> {
    const installed = await this.installed();
    const records = installed.plugins[pluginId];
    if (!records) return false;
    for (const record of records)
      await rm(record.installPath, { recursive: true, force: true });
    delete installed.plugins[pluginId];
    await this.saveInstalled(installed);
    return true;
  }

  private settingsPath(context?: LocalPluginContext): string {
    if (
      context?.workspacePath &&
      (context.settingsLevel === "local" || context.settingsLevel === "project")
    ) {
      return path.join(
        context.workspacePath,
        ".claude",
        context.settingsLevel === "local"
          ? "settings.local.json"
          : "settings.json",
      );
    }
    return path.join(this.root, "settings.json");
  }
}

async function readJson<T>(target: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(target, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

async function atomicJson(target: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, target);
}
