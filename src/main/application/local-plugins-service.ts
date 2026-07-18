// Restored from ref/.vite/build/index.js

import path from "node:path";
import {
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import type { Dirent } from "node:fs";
import JSZip from "jszip";
import type { LocalPluginContext } from "../domain/local-plugin";
import { LocalPluginRepository } from "../infrastructure/local-plugin-repository";

export class LocalPluginsService {
  constructor(private readonly repository = new LocalPluginRepository()) {}

  async getPlugins(_options?: unknown, context?: LocalPluginContext) {
    const [installed, enabled] = await Promise.all([
      this.repository.installed(),
      this.repository.enabled(context),
    ]);
    return Promise.all(
      Object.entries(installed.plugins).flatMap(([id, records]) =>
        records.map((record) => scanPlugin(id, record, enabled[id] ?? true)),
      ),
    );
  }

  getDownloadedRemotePlugins(_context?: LocalPluginContext): unknown[] {
    return [];
  }

  syncRemotePlugins(_context?: LocalPluginContext) {
    return { newlyInstalled: [] };
  }

  async listSkillFiles(
    pluginId: string,
    skillName: string,
    context?: LocalPluginContext,
  ) {
    const plugin = (await this.getPlugins(undefined, context)).find(
      (candidate) =>
        candidate.id === pluginId ||
        candidate.id === pluginId.replace(/^local_/, ""),
    );
    const skill = plugin?.skills.find(
      (candidate) => candidate.name === skillName,
    );
    if (!skill)
      return { success: false, error: `Skill not found: ${skillName}` };
    const root = path.dirname(skill.location);
    const files = await listFiles(root, 200);
    return { success: true, files };
  }

  async uploadPlugin(
    filename: string,
    base64Content: string,
    replaceExisting = false,
    context?: LocalPluginContext,
  ) {
    try {
      const archiveName = path.basename(filename).replace(/\.plugin$/i, ".zip");
      if (!archiveName.toLowerCase().endsWith(".zip")) {
        return uploadError("Only .zip or .plugin files are accepted.");
      }
      if (base64Content.length * 0.75 > MAX_PLUGIN_ARCHIVE_BYTES) {
        return uploadError("File exceeds 200MB size limit.");
      }

      const archive = await readPluginArchive(
        Buffer.from(base64Content, "base64"),
      );
      const manifestBytes = archive.files.get(
        `${archive.rootPrefix}.claude-plugin/plugin.json`,
      );
      if (!manifestBytes) {
        return uploadError(
          "Plugin archive is missing .claude-plugin/plugin.json.",
        );
      }
      const manifest = JSON.parse(manifestBytes.toString("utf8")) as unknown;
      if (!isRecord(manifest) || typeof manifest.name !== "string") {
        return uploadError("Plugin manifest is missing a valid name.");
      }

      const pluginName = safePluginSegment(manifest.name);
      const version = safePluginSegment(
        stringValue(manifest.version) ?? "0.0.0",
      );
      const marketplace = "local";
      const pluginId = `${pluginName}@${marketplace}`;
      const installPath = path.join(
        this.repository.root,
        "plugins",
        "cache",
        marketplace,
        pluginName,
        version,
      );
      const installed = await this.repository.installed();
      const previous = installed.plugins[pluginId];
      if (previous && !replaceExisting) {
        return uploadError(`Plugin already exists: ${pluginId}`);
      }

      const temporary = `${installPath}.${process.pid}.tmp`;
      await rm(temporary, { recursive: true, force: true });
      await mkdir(temporary, { recursive: true, mode: 0o700 });
      for (const [archivePath, content] of archive.files) {
        const relative = archivePath.slice(archive.rootPrefix.length);
        if (!relative) continue;
        const target = path.join(temporary, ...relative.split("/"));
        await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
        await writeFile(target, content, { mode: 0o600 });
      }
      await mkdir(path.dirname(installPath), { recursive: true, mode: 0o700 });
      await rm(installPath, { recursive: true, force: true });
      await rename(temporary, installPath);

      const now = new Date().toISOString();
      installed.plugins[pluginId] = [
        {
          scope: context?.settingsLevel ?? "user",
          installPath,
          version,
          installedAt: previous?.[0]?.installedAt ?? now,
          lastUpdated: now,
        },
      ];
      await this.repository.saveInstalled(installed);
      await this.repository.setEnabled(pluginId, true, context);
      return {
        success: true,
        filePath: installPath,
        pluginId,
        isNew: previous === undefined,
      };
    } catch (error) {
      return uploadError(
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  async deletePlugin(pluginId: string) {
    return (await this.repository.removeInstall(pluginId))
      ? { success: true }
      : { success: false, error: `Plugin not found: ${pluginId}` };
  }

  async setPluginEnabled(
    pluginId: string,
    enabled: boolean,
    context?: LocalPluginContext,
  ) {
    if (!pluginId.trim())
      return { success: false, error: "Plugin ID is required." };
    await this.repository.setEnabled(pluginId, enabled, context);
    return { success: true, enabled };
  }

  getPluginOAuthStatus() {
    return {};
  }
  startPluginOAuthFlow() {
    return { success: false, error: "Plugin OAuth is not configured." };
  }
  revokePluginOAuth(): void {}
  getPluginCliStatus() {
    return {};
  }
  setPluginEnvVars() {
    return {
      success: false,
      error: "Plugin environment settings are not configured.",
    };
  }
  setPluginOAuthClient() {
    return { success: false, error: "Plugin OAuth is not configured." };
  }
  getPluginShimOps() {
    return [];
  }
  getPluginCliBatch() {
    return [];
  }
  setPluginShimPermission() {
    return {
      success: false,
      error: "Plugin shim permissions are not available.",
    };
  }
}

const MAX_PLUGIN_ARCHIVE_BYTES = 200 * 1024 * 1024;
const MAX_PLUGIN_EXTRACTED_BYTES = 500 * 1024 * 1024;
const MAX_PLUGIN_FILES = 10_000;

async function readPluginArchive(bytes: Buffer): Promise<{
  files: Map<string, Buffer>;
  rootPrefix: string;
}> {
  const zip = await JSZip.loadAsync(bytes);
  const files = new Map<string, Buffer>();
  let extractedBytes = 0;
  for (const [rawName, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue;
    const name = rawName.replaceAll("\\", "/");
    if (
      name.startsWith("/") ||
      name.split("/").includes("..") ||
      path.posix.normalize(name) !== name
    ) {
      throw new Error(`Unsafe plugin archive path: ${rawName}`);
    }
    const unixMode =
      typeof entry.unixPermissions === "number" ? entry.unixPermissions : 0;
    if ((unixMode & 0o170000) === 0o120000) {
      throw new Error(`Symbolic links are not allowed: ${rawName}`);
    }
    if (files.size >= MAX_PLUGIN_FILES) {
      throw new Error("Plugin archive contains too many files.");
    }
    const content = await entry.async("nodebuffer");
    extractedBytes += content.byteLength;
    if (extractedBytes > MAX_PLUGIN_EXTRACTED_BYTES) {
      throw new Error("Plugin archive expands beyond the 500MB limit.");
    }
    files.set(name, content);
  }
  const manifestSuffix = ".claude-plugin/plugin.json";
  const manifests = [...files.keys()].filter(
    (name) => name === manifestSuffix || name.endsWith(`/${manifestSuffix}`),
  );
  if (manifests.length !== 1) {
    throw new Error("Plugin archive must contain exactly one plugin manifest.");
  }
  return {
    files,
    rootPrefix: manifests[0].slice(0, -manifestSuffix.length),
  };
}

function safePluginSegment(value: string): string {
  const normalized = value.trim();
  if (
    !normalized ||
    normalized === "." ||
    normalized === ".." ||
    !/^[A-Za-z0-9._-]+$/.test(normalized)
  ) {
    throw new Error(`Invalid plugin name or version: ${value}`);
  }
  return normalized;
}

function uploadError(error: string) {
  return {
    success: false,
    error,
    isUserFacingError: true,
    errorCode: "VALIDATION",
  } as const;
}

async function scanPlugin(
  id: string,
  record: {
    installPath: string;
    scope: string;
    version?: string;
    installedAt?: string;
    lastUpdated?: string;
  },
  enabled: boolean,
) {
  const manifest = await readRecord(
    path.join(record.installPath, ".claude-plugin", "plugin.json"),
  );
  const [skills, agents, commands, mcp] = await Promise.all([
    scanMarkdownDirectory(record.installPath, "skills", "SKILL.md"),
    scanMarkdownDirectory(record.installPath, "agents"),
    scanMarkdownDirectory(record.installPath, "commands"),
    readRecord(path.join(record.installPath, ".mcp.json")),
  ]);
  const name = stringValue(manifest.name) ?? id.split("@")[0];
  return {
    id,
    name,
    displayName: stringValue(manifest.displayName),
    installPath: record.installPath,
    scope: record.scope,
    enabled,
    installedAt: record.installedAt,
    lastUpdated: record.lastUpdated,
    description: stringValue(manifest.description),
    version: record.version ?? stringValue(manifest.version),
    author: authorValue(manifest.author),
    skills,
    agents,
    commands,
    mcpServers: Object.entries(mcp).map(([serverName, config]) => ({
      name: serverName,
      config,
      hostFilesystemLocation: path.join(record.installPath, ".mcp.json"),
      isMcpb: false,
    })),
    hooks: [],
  };
}

async function scanMarkdownDirectory(
  root: string,
  folder: string,
  fixedName?: string,
) {
  const directory = path.join(root, folder);
  const files = await listFiles(directory, 200);
  return Promise.all(
    files
      .filter((file) =>
        fixedName ? path.basename(file) === fixedName : file.endsWith(".md"),
      )
      .map(async (location) => {
        const content = await readFile(location, "utf8");
        const metadata = frontmatter(content);
        return {
          name:
            stringValue(metadata.name) ??
            path.basename(fixedName ? path.dirname(location) : location, ".md"),
          description: stringValue(metadata.description) ?? "",
          location,
          hostFilesystemLocation: location,
          source: "plugin",
          content,
        };
      }),
  );
}

async function listFiles(root: string, limit: number): Promise<string[]> {
  const output: string[] = [];
  async function visit(directory: string): Promise<void> {
    let entries: Dirent[];
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (output.length >= limit || entry.isSymbolicLink()) break;
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(target);
      else if (entry.isFile()) output.push(target);
    }
  }
  await visit(root);
  return output;
}

async function readRecord(target: string): Promise<Record<string, unknown>> {
  try {
    const value = JSON.parse(await readFile(target, "utf8")) as unknown;
    return value && typeof value === "object" && !Array.isArray(value)
      ? (value as Record<string, unknown>)
      : {};
  } catch {
    return {};
  }
}

function frontmatter(content: string): Record<string, unknown> {
  if (!content.startsWith("---\n")) return {};
  const end = content.indexOf("\n---", 4);
  if (end < 0) return {};
  return Object.fromEntries(
    content
      .slice(4, end)
      .split("\n")
      .map((line) => line.match(/^([A-Za-z][\w-]*):\s*(.*)$/))
      .filter((match): match is RegExpMatchArray => match !== null)
      .map((match) => [match[1], match[2].replace(/^['"]|['"]$/g, "")]),
  );
}

function stringValue(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function authorValue(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "name" in value) {
    return stringValue((value as { name?: unknown }).name);
  }
  return undefined;
}
