// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import { homedir } from "node:os";
import path from "node:path";
import {
  cp,
  lstat,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { spawn } from "node:child_process";
import { LocalPluginRepository } from "../infrastructure/local-plugin-repository";

type MarketplaceRecord = {
  source: Record<string, unknown>;
  installLocation: string;
  lastUpdated?: string;
};

export class CustomPluginsService extends EventEmitter {
  private readonly repository = new LocalPluginRepository();
  private migrationIssues: unknown = null;

  async addMarketplace(source: string) {
    const normalized = normalizeMarketplaceSource(source);
    const name = marketplaceName(normalized);
    const installLocation = path.join(this.marketplacesRoot, name);
    if (await exists(installLocation))
      throw new Error(`Marketplace already exists: ${name}`);
    await mkdir(this.marketplacesRoot, { recursive: true, mode: 0o700 });
    if (normalized.startsWith("https://")) {
      await runGit(["clone", "--depth", "1", normalized, installLocation]);
    } else {
      await assertDirectoryWithoutSymlinks(normalized);
      await cp(normalized, installLocation, {
        recursive: true,
        errorOnExist: true,
      });
    }
    const manifest = await readMarketplaceManifest(installLocation);
    const known = await this.knownMarketplaces();
    known[name] = {
      source: normalized.startsWith("https://")
        ? { source: "url", url: normalized }
        : { source: "directory", path: normalized },
      installLocation,
      lastUpdated: new Date().toISOString(),
    };
    await this.saveKnownMarketplaces(known);
    return marketplaceSummary(name, known[name], manifest);
  }

  async removeMarketplace(name: string): Promise<void> {
    const known = await this.knownMarketplaces();
    const record = known[name];
    if (!record) throw new Error(`Unknown marketplace: ${name}`);
    await rm(record.installLocation, { recursive: true, force: true });
    delete known[name];
    await this.saveKnownMarketplaces(known);
  }

  async refreshMarketplace(name: string) {
    const known = await this.knownMarketplaces();
    const record = known[name];
    if (!record) throw new Error(`Unknown marketplace: ${name}`);
    if (await exists(path.join(record.installLocation, ".git"))) {
      await runGit(["-C", record.installLocation, "pull", "--ff-only"]);
    }
    record.lastUpdated = new Date().toISOString();
    await this.saveKnownMarketplaces(known);
    return {};
  }

  async listMarketplaces() {
    const known = await this.knownMarketplaces();
    return Promise.all(
      Object.entries(known).map(async ([name, record]) =>
        marketplaceSummary(
          name,
          record,
          await readMarketplaceManifest(record.installLocation),
        ),
      ),
    );
  }

  async installPlugin(pluginId: string) {
    try {
      const [pluginName, marketplace] = requirePluginId(pluginId);
      const available = await this.findAvailablePlugin(pluginName, marketplace);
      const version = stringValue(available.plugin.version) ?? "0.0.0";
      const installPath = path.join(
        this.repository.root,
        "plugins",
        "cache",
        marketplace,
        pluginName,
        safeSegment(version),
      );
      if (await exists(installPath))
        await rm(installPath, { recursive: true, force: true });
      await assertDirectoryWithoutSymlinks(available.sourcePath);
      await mkdir(path.dirname(installPath), { recursive: true, mode: 0o700 });
      await cp(available.sourcePath, installPath, { recursive: true });
      const installed = await this.repository.installed();
      const isNew = !(pluginId in installed.plugins);
      const now = new Date().toISOString();
      installed.plugins[pluginId] = [
        {
          scope: "user",
          installPath,
          version,
          installedAt: installed.plugins[pluginId]?.[0]?.installedAt ?? now,
          lastUpdated: now,
        },
      ];
      await this.repository.saveInstalled(installed);
      await this.repository.setEnabled(pluginId, true);
      this.emit("installProgress", pluginId, "Installed");
      return { success: true, pluginId, isNew };
    } catch (error) {
      return { success: false, pluginId, error: errorMessage(error) };
    }
  }

  updatePlugin(pluginId: string) {
    return this.installPlugin(pluginId);
  }

  async uninstallPlugin(pluginId: string): Promise<void> {
    if (!(await this.repository.removeInstall(pluginId))) {
      throw new Error(`Plugin not found: ${pluginId}`);
    }
    await this.repository.setEnabled(pluginId, false);
  }

  async listInstalledPlugins() {
    const installed = await this.repository.installed();
    return Object.entries(installed.plugins).flatMap(([id, records]) =>
      records.map((record) => ({
        id,
        name: id.split("@")[0],
        ...record,
        enabled: true,
      })),
    );
  }

  async listAvailablePlugins() {
    const marketplaces = await this.listMarketplacesWithPlugins();
    const installed = await this.repository.installed();
    return marketplaces.flatMap(({ name, plugins }) =>
      plugins.map((plugin) => {
        const id = `${stringValue(plugin.name) ?? "unknown"}@${name}`;
        return {
          id,
          name: stringValue(plugin.name) ?? "unknown",
          displayName: stringValue(plugin.displayName),
          description: stringValue(plugin.description),
          marketplaceName: name,
          version: stringValue(plugin.version),
          category: stringValue(plugin.category),
          author: authorValue(plugin.author),
          isInstalled: id in installed.plugins,
          source: "local",
        };
      }),
    );
  }

  getCachedCommands(): unknown[] {
    return [];
  }
  async getInstallCounts() {
    return readJson(
      path.join(this.repository.root, "plugins", "install-counts-cache.json"),
      null,
    );
  }
  async listRemotePluginsPage(limit: number, offset: number) {
    const plugins = await this.listAvailablePlugins();
    return {
      plugins: plugins.slice(offset, offset + limit),
      hasMore: offset + limit < plugins.length,
    };
  }
  checkPluginHasLocalChanges(): boolean {
    return false;
  }
  getAndClearMigrationIssues() {
    const value = this.migrationIssues;
    this.migrationIssues = null;
    return value;
  }
  listLocalOrgPlugins() {
    return { plugins: [], indexUnavailable: false };
  }
  installLocalOrgPlugin(name: string) {
    return {
      success: false,
      pluginId: `${name}@org`,
      error: "Local organization plugin index is unavailable.",
    };
  }
  syncLocalOrgPlugins() {
    return { newlyInstalled: [] };
  }

  private get marketplacesRoot(): string {
    return path.join(this.repository.root, "plugins", "marketplaces");
  }
  private get knownPath(): string {
    return path.join(
      this.repository.root,
      "plugins",
      "known_marketplaces.json",
    );
  }
  private knownMarketplaces() {
    return readJson<Record<string, MarketplaceRecord>>(this.knownPath, {});
  }
  private saveKnownMarketplaces(value: Record<string, MarketplaceRecord>) {
    return atomicJson(this.knownPath, value);
  }
  private async listMarketplacesWithPlugins() {
    const known = await this.knownMarketplaces();
    return Promise.all(
      Object.entries(known).map(async ([name, record]) => ({
        name,
        plugins: arrayValue(
          (await readMarketplaceManifest(record.installLocation)).plugins,
        ),
        root: record.installLocation,
      })),
    );
  }
  private async findAvailablePlugin(pluginName: string, marketplace: string) {
    const match = (await this.listMarketplacesWithPlugins()).find(
      (item) => item.name === marketplace,
    );
    if (!match) throw new Error(`Marketplace not found: ${marketplace}`);
    const plugin = match.plugins.find(
      (item) => stringValue(item.name) === pluginName,
    );
    if (!plugin) throw new Error(`Plugin not found: ${pluginName}`);
    const source = stringValue(plugin.source);
    if (!source || path.isAbsolute(source))
      throw new Error("Plugin source must be marketplace-relative");
    const sourcePath = path.resolve(match.root, source);
    if (!sourcePath.startsWith(`${path.resolve(match.root)}${path.sep}`))
      throw new Error("Plugin source escapes marketplace");
    return { plugin, sourcePath };
  }
}

async function readMarketplaceManifest(
  root: string,
): Promise<Record<string, unknown>> {
  return readJson(path.join(root, ".claude-plugin", "marketplace.json"), {});
}
function marketplaceSummary(
  name: string,
  record: MarketplaceRecord,
  manifest: Record<string, unknown>,
) {
  return {
    name,
    displayName: stringValue(manifest.name),
    sourceType: stringValue(record.source.source),
    url: stringValue(record.source.url),
    source: "local",
    isDefault: name === "claude-plugins-official",
    lastUpdated: record.lastUpdated,
  };
}
function normalizeMarketplaceSource(source: string): string {
  const trimmed = source.trim().replace(/\.git$/, "");
  if (/^[\w.-]+\/[\w.-]+$/.test(trimmed))
    return `https://github.com/${trimmed}.git`;
  if (trimmed.startsWith("https://github.com/")) return `${trimmed}.git`;
  if (path.isAbsolute(trimmed)) return trimmed;
  throw new Error(
    "Marketplace must be an absolute directory or GitHub HTTPS URL",
  );
}
function marketplaceName(source: string): string {
  return safeSegment(path.basename(source, ".git"));
}
function safeSegment(value: string): string {
  if (!/^[A-Za-z0-9._-]+$/.test(value) || value === "." || value === "..")
    throw new Error("Invalid path segment");
  return value;
}
function requirePluginId(id: string): [string, string] {
  const index = id.lastIndexOf("@");
  if (index <= 0 || index === id.length - 1)
    throw new Error("Invalid plugin ID");
  return [safeSegment(id.slice(0, index)), safeSegment(id.slice(index + 1))];
}
async function assertDirectoryWithoutSymlinks(root: string): Promise<void> {
  const info = await lstat(root);
  if (!info.isDirectory() || info.isSymbolicLink())
    throw new Error("Plugin source must be a real directory");
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const target = path.join(root, entry.name);
    if (entry.isSymbolicLink())
      throw new Error(`Symbolic links are not allowed: ${entry.name}`);
    if (entry.isDirectory()) await assertDirectoryWithoutSymlinks(target);
  }
}
async function runGit(args: string[]): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const child = spawn("git", args, { stdio: ["ignore", "ignore", "pipe"] });
    let error = "";
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (chunk: string) => {
      error += chunk.slice(0, 4096);
    });
    child.once("error", reject);
    child.once("close", (code) =>
      code === 0
        ? resolve()
        : reject(new Error(error.trim() || `git exited with ${code}`)),
    );
  });
}
async function exists(target: string): Promise<boolean> {
  try {
    await lstat(target);
    return true;
  } catch {
    return false;
  }
}
async function readJson<T>(target: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(target, "utf8")) as T;
  } catch {
    return fallback;
  }
}
async function atomicJson(target: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, target);
}
function arrayValue(value: unknown): Record<string, unknown>[] {
  return Array.isArray(value)
    ? value.filter(
        (item): item is Record<string, unknown> =>
          !!item && typeof item === "object" && !Array.isArray(item),
      )
    : [];
}
function stringValue(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}
function authorValue(value: unknown): string | undefined {
  return typeof value === "string"
    ? value
    : value && typeof value === "object" && "name" in value
      ? stringValue((value as { name?: unknown }).name)
      : undefined;
}
function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
