// Restored from ref/.vite/build/index.js

import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { isIP } from "node:net";
import path from "node:path";
import { EventEmitter } from "node:events";
import { dialog, net, shell, type App } from "electron";

type ConfigEntry = { id: string; name: string };
type ConfigLibrary = { appliedId: string; entries: ConfigEntry[] };

export class Custom3pSetupService extends EventEmitter {
  private readonly mcpOAuthState = new Map<string, unknown>();
  private bootstrapState = {
    configured: false,
    origin: "none",
    health: "never",
    suppliedValues: {} as Record<string, unknown>,
  };

  constructor(private readonly app: App) {
    super();
  }

  async exportConfig(config: Record<string, unknown>, format: string) {
    const extensions: Record<string, string> = {
      mobileconfig: "mobileconfig",
      reg: "reg",
      admx: "zip",
      profileManifest: "plist",
    };
    const extension = extensions[format];
    if (!extension) return { ok: false, error: "Unknown export format" };
    const result = await dialog.showSaveDialog({
      defaultPath: `Claude.${extension}`,
    });
    if (result.canceled || !result.filePath) return { ok: false };
    await writeFile(result.filePath, serializeExport(config, format), {
      mode: 0o600,
    });
    return { ok: true, path: result.filePath };
  }

  relaunchApp(): void {
    this.app.relaunch();
    this.app.exit(0);
  }

  async probeEgressHosts(hosts: string[]) {
    return Promise.all(hosts.slice(0, 200).map((host) => probeHost(host)));
  }

  async scanOrgPlugins() {
    return { dirStatus: "absent", entryCount: 0, plugins: [] };
  }

  async probeMcpServer(config: Record<string, unknown>) {
    return probeMcp(config);
  }

  async authorizeAndProbeMcpServer(config: Record<string, unknown>) {
    return probeMcp(config);
  }

  forgetMcpOAuth(serverName: string): void {
    this.mcpOAuthState.delete(requiredName(serverName));
  }

  async getLoginDesktop3pStatus() {
    const config = await this.appliedConfig();
    const provider =
      typeof config.inferenceProvider === "string"
        ? config.inferenceProvider
        : undefined;
    return {
      enabled: true,
      source: { type: "local", remote: false },
      provider,
      needsInteractiveAuth: false,
    };
  }

  async getConfigHealth() {
    return this.computeConfigHealth();
  }

  async recheckConfigHealth() {
    return this.computeConfigHealth();
  }

  async setDeploymentMode(mode: string): Promise<void> {
    if (!["3p", "1p", "clear"].includes(mode))
      throw new Error("Invalid deployment mode");
    await atomicJsonWrite(path.join(this.dataRoot, "deployment-mode.json"), {
      mode,
    });
  }

  async openSetupWindow(): Promise<void> {
    this.emit("openSetupWindow");
  }

  async signInWithAnthropicApi() {
    return { ok: false, errorKind: "ERR_FAILED" };
  }

  async applyAnthropicApiShortcut(): Promise<void> {
    const library = await this.loadLibrary();
    let entry = library.entries.find(
      (candidate) => candidate.name === "Claude API",
    );
    if (!entry) entry = await this.createConfig("Claude API");
    const existing = await this.readConfigValue(entry.id);
    await this.writeConfig(entry.id, {
      ...existing,
      inferenceProvider: "anthropic",
    });
    await this.setAppliedConfig(entry.id);
    await this.setDeploymentMode("3p");
  }

  async openDeviceCodeWindowForE2e(): Promise<void> {
    if (process.env.CLAUDE_CDP_AUTH) this.emit("openDeviceCodeWindow");
  }

  async listConfigs() {
    const library = await this.loadLibrary();
    return {
      ...library,
      entries: await Promise.all(
        library.entries.map(async (entry) => {
          const config = await this.readConfigValue(entry.id);
          const provider =
            typeof config.inferenceProvider === "string"
              ? config.inferenceProvider
              : undefined;
          return { ...entry, provider };
        }),
      ),
      isManaged: false,
      platform: process.platform,
      isInternalBuild: false,
    };
  }

  async readConfig(id: string) {
    try {
      await this.requireEntry(id);
      return { ok: true, config: await this.readConfigValue(id) };
    } catch (error) {
      return { ok: false, error: errorMessage(error) };
    }
  }

  async writeConfig(id: string, config: Record<string, unknown>) {
    try {
      await this.requireEntry(id);
      await atomicJsonWrite(this.configPath(id), config);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: errorMessage(error) };
    }
  }

  async createConfig(name: string): Promise<ConfigEntry> {
    const entry = { id: randomUUID(), name: requiredName(name) };
    const library = await this.loadLibrary();
    await atomicJsonWrite(this.configPath(entry.id), {});
    library.entries.push(entry);
    await this.saveLibrary(library);
    return entry;
  }

  async duplicateConfig(sourceId: string, name: string): Promise<ConfigEntry> {
    await this.requireEntry(sourceId);
    const entry = await this.createConfig(name);
    await atomicJsonWrite(
      this.configPath(entry.id),
      await this.readConfigValue(sourceId),
    );
    return entry;
  }

  async renameConfig(id: string, name: string): Promise<void> {
    const library = await this.loadLibrary();
    const entry = library.entries.find((candidate) => candidate.id === id);
    if (!entry) throw new Error("Unknown config id");
    entry.name = requiredName(name);
    await this.saveLibrary(library);
  }

  async deleteConfig(id: string) {
    const library = await this.loadLibrary();
    if (library.entries.length <= 1)
      throw new Error("Cannot delete the last configuration");
    const remaining = library.entries.filter((entry) => entry.id !== id);
    if (remaining.length === library.entries.length)
      throw new Error("Unknown config id");
    library.entries = remaining;
    if (library.appliedId === id) library.appliedId = remaining[0].id;
    await Promise.all([
      this.saveLibrary(library),
      rm(this.configPath(id), { force: true }),
    ]);
    return this.listConfigs();
  }

  async setAppliedConfig(id: string): Promise<void> {
    const library = await this.loadLibrary();
    if (!library.entries.some((entry) => entry.id === id))
      throw new Error("Unknown config id");
    library.appliedId = id;
    await this.saveLibrary(library);
  }

  async revealConfig(id: string): Promise<void> {
    await this.requireEntry(id);
    shell.showItemInFolder(this.configPath(id));
  }

  async triggerBootstrapAuth(args?: Record<string, unknown>) {
    const bootstrapUrl =
      typeof args?.bootstrapUrl === "string" ? args.bootstrapUrl : undefined;
    if (!bootstrapUrl)
      return { ok: false, error: "Bootstrap URL is not configured" };
    try {
      const url = new URL(bootstrapUrl);
      if (url.protocol !== "https:")
        throw new Error("Bootstrap URL must use HTTPS");
      const response = await net.fetch(url.toString());
      if (!response.ok)
        throw new Error(`Bootstrap request failed: HTTP ${response.status}`);
      const suppliedValues = (await response.json()) as Record<string, unknown>;
      this.bootstrapState = {
        configured: true,
        origin: "local",
        health: "ok",
        suppliedValues,
      };
      this.emit("bootstrapStateChanged", this.bootstrapState);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: errorMessage(error) };
    }
  }

  getInitialBootstrapState() {
    return { ...this.bootstrapState };
  }

  private async computeConfigHealth() {
    const config = await this.appliedConfig();
    const provider =
      typeof config.inferenceProvider === "string"
        ? config.inferenceProvider
        : undefined;
    return {
      state: provider ? "not_testable" : "invalid_config",
      source: { type: "local", remote: false },
      provider,
      message: provider
        ? "Configuration has not been probed."
        : "No inference provider configured.",
      checkedAt: new Date().toISOString(),
    };
  }

  private async appliedConfig(): Promise<Record<string, unknown>> {
    const library = await this.loadLibrary();
    return this.readConfigValue(library.appliedId);
  }

  private async loadLibrary(): Promise<ConfigLibrary> {
    await mkdir(this.libraryRoot, { recursive: true, mode: 0o700 });
    try {
      const value = JSON.parse(
        await readFile(this.libraryPath, "utf8"),
      ) as ConfigLibrary;
      if (value.entries.length > 0) return value;
    } catch {}
    const entry = { id: randomUUID(), name: "Default" };
    const library = { appliedId: entry.id, entries: [entry] };
    await Promise.all([
      atomicJsonWrite(this.configPath(entry.id), {}),
      this.saveLibrary(library),
    ]);
    return library;
  }

  private async saveLibrary(library: ConfigLibrary): Promise<void> {
    await atomicJsonWrite(this.libraryPath, library);
  }

  private async requireEntry(id: string): Promise<void> {
    if (!/^[a-f0-9-]{36}$/i.test(id)) throw new Error("Unknown config id");
    const library = await this.loadLibrary();
    if (!library.entries.some((entry) => entry.id === id))
      throw new Error("Unknown config id");
  }

  private async readConfigValue(id: string): Promise<Record<string, unknown>> {
    try {
      return JSON.parse(await readFile(this.configPath(id), "utf8")) as Record<
        string,
        unknown
      >;
    } catch {
      return {};
    }
  }

  private configPath(id: string): string {
    if (!/^[a-f0-9-]{36}$/i.test(id)) throw new Error("Invalid config id");
    return path.join(this.libraryRoot, `${id}.json`);
  }

  private get dataRoot(): string {
    if (process.env.CLAUDE_USER_DATA_DIR) return this.app.getPath("userData");
    const current = this.app.getPath("userData");
    return current.endsWith("-3p") ? current : `${current}-3p`;
  }
  private get libraryRoot(): string {
    return path.join(this.dataRoot, "configLibrary");
  }
  private get libraryPath(): string {
    return path.join(this.libraryRoot, "_meta.json");
  }
}

async function probeHost(host: string) {
  const hostname = host.replace(/:\d+$/, "");
  if (!/^[a-z0-9.-]+(:\d+)?$/i.test(host) || isIP(hostname) !== 0) {
    return { host, reachable: false, error: "invalid host" };
  }
  const startedAt = Date.now();
  try {
    await net.fetch(`https://${host}`, {
      method: "HEAD",
      signal: AbortSignal.timeout(8_000),
      redirect: "manual",
    });
    return { host, reachable: true, latencyMs: Date.now() - startedAt };
  } catch (error) {
    return { host, reachable: false, error: errorMessage(error) };
  }
}

async function probeMcp(config: Record<string, unknown>) {
  if (typeof config.url !== "string" || typeof config.name !== "string") {
    return {
      kind: "err",
      title: "Invalid configuration",
      message: "Server URL and name are required.",
    };
  }
  try {
    const url = new URL(config.url);
    if (url.protocol !== "https:")
      throw new Error("Only HTTPS MCP servers are allowed");
    const startedAt = Date.now();
    const response = await net.fetch(url.toString(), {
      method: "HEAD",
      signal: AbortSignal.timeout(8_000),
    });
    return response.ok
      ? {
          kind: "ok",
          serverName: config.name,
          latencyMs: Date.now() - startedAt,
          tools: [],
        }
      : {
          kind: "err",
          title: "Connection test failed",
          message: `HTTP ${response.status}`,
        };
  } catch (error) {
    return {
      kind: "err",
      title: "Connection test failed",
      message: errorMessage(error),
    };
  }
}

function serializeExport(
  config: Record<string, unknown>,
  format: string,
): string {
  if (format === "reg") {
    return `Windows Registry Editor Version 5.00\r\n\r\n; ${JSON.stringify(config)}\r\n`;
  }
  return `${JSON.stringify(config, null, 2)}\n`;
}

function requiredName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) throw new Error("Configuration name is required");
  return trimmed.slice(0, 120);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function atomicJsonWrite(target: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, target);
}
