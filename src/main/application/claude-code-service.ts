// Restored from ref/.vite/build/index.js

import * as crypto from "node:crypto";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import * as zlib from "node:zlib";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import { net, type App } from "electron";

const execFileAsync = promisify(execFile);
const zstdDecompress = promisify(zlib.zstdDecompress);
const VERSION = "2.1.197";
const BASE_URL = "https://downloads.claude.ai/claude-code-releases";
const PLATFORM = process.arch === "arm64" ? "darwin-arm64" : "darwin-x64";
const BUNDLE_CHECKSUMS = {
  "darwin-arm64":
    "c921aa65eb8f10a3f387a86526f97b94dee721f26b741dadf0d2357ac376c437",
  "darwin-x64":
    "f2d6011db80732e4f0850d5c27e0ce83bb4d2c4a66374072134232214dddedab",
} as const;

type SettingSource = "user" | "project" | "projectLocal" | "managed";
type ResolvedSetting = { value: unknown; source: SettingSource; path: string };
type ClaudeCodeSettings = Record<string, ResolvedSetting>;
type UserSettingsPatch = Record<string, string | boolean | undefined>;

const SETTINGS_KEYS = new Set([
  "model",
  "availableModels",
  "fastMode",
  "fastModePerSessionOptIn",
  "defaultPermissionMode",
  "sshHostAllowlist",
  "disableBypassPermissionsMode",
  "disableAutoMode",
  "enableWorkflows",
  "disableWorkflows",
  "switchModelsOnFlag",
]);

export class ClaudeCodeService {
  private preparing: Promise<{ success: boolean; error?: string }> | null =
    null;
  private downloadFailed = false;

  constructor(private readonly app: App) {}

  async getStatus(): Promise<
    "not_installed" | "updating" | "ready" | "download_failed"
  > {
    if (await this.isReady()) return "ready";
    if (this.preparing != null) return "updating";
    return this.downloadFailed ? "download_failed" : "not_installed";
  }

  prepare(): Promise<{ success: boolean; error?: string }> {
    if (this.preparing != null) return this.preparing;
    this.downloadFailed = false;
    this.preparing = this.prepareOnce().finally(() => {
      this.preparing = null;
    });
    return this.preparing;
  }

  async checkGitAvailable(): Promise<{
    available: boolean;
    errorMessage?: string;
  }> {
    try {
      await execFileAsync("git", ["--version"], { timeout: 10_000 });
      return { available: true };
    } catch (error) {
      return {
        available: false,
        errorMessage: error instanceof Error ? error.message : String(error),
      };
    }
  }

  async resolveLocalSettings(
    workspacePath?: string,
  ): Promise<ClaudeCodeSettings> {
    if (workspacePath != null && !path.isAbsolute(workspacePath)) {
      throw new Error("workspacePath must be absolute");
    }
    const sources: Array<{ file: string; source: SettingSource }> = [
      {
        file: path.join(os.homedir(), ".claude", "settings.json"),
        source: "user",
      },
    ];
    if (workspacePath != null) {
      const root = path.resolve(path.normalize(workspacePath));
      sources.push(
        {
          file: path.join(root, ".claude", "settings.json"),
          source: "project",
        },
        {
          file: path.join(root, ".claude", "settings.local.json"),
          source: "projectLocal",
        },
      );
    }
    if (process.platform === "darwin") {
      sources.push({
        file: "/Library/Application Support/ClaudeCode/managed-settings.json",
        source: "managed",
      });
    }
    const result: ClaudeCodeSettings = {};
    for (const source of sources) {
      const settings = await readJsonObject(source.file);
      if (settings == null) continue;
      for (const [key, value] of Object.entries(settings)) {
        if (SETTINGS_KEYS.has(key) && isSupportedSettingValue(value)) {
          result[key] = { value, source: source.source, path: source.file };
        }
      }
    }
    return result;
  }

  async patchUserSettings(patch: UserSettingsPatch): Promise<boolean> {
    const file = path.join(os.homedir(), ".claude", "settings.json");
    const settings = (await readJsonObject(file)) ?? {};
    for (const [key, value] of Object.entries(patch)) {
      if (!SETTINGS_KEYS.has(key)) continue;
      if (value === undefined) delete settings[key];
      else settings[key] = value;
    }
    await writeJsonAtomic(file, settings);
    return true;
  }

  setEnableWorkflows(value?: boolean): Promise<boolean> {
    return this.patchUserSettings({
      enableWorkflows: value,
      disableWorkflows: undefined,
    });
  }

  getPeriodUsage(): null {
    return null;
  }

  private get versionDirectory(): string {
    return path.join(this.app.getPath("userData"), "claude-code", VERSION);
  }

  private get binaryPath(): string {
    return process.platform === "darwin"
      ? path.join(
          this.versionDirectory,
          "claude.app",
          "Contents",
          "MacOS",
          "claude",
        )
      : path.join(
          this.versionDirectory,
          process.platform === "win32" ? "claude.exe" : "claude",
        );
  }

  private async isReady(): Promise<boolean> {
    try {
      const expected = BUNDLE_CHECKSUMS[PLATFORM];
      const marker = (
        await fs.readFile(path.join(this.versionDirectory, ".verified"), "utf8")
      ).trim();
      await fs.access(this.binaryPath, fs.constants.X_OK);
      return marker === expected;
    } catch {
      return false;
    }
  }

  private async prepareOnce(): Promise<{ success: boolean; error?: string }> {
    if (await this.isReady()) return { success: true };
    if (process.platform !== "darwin") {
      return {
        success: false,
        error: "This version is not available for your device.",
      };
    }
    const checksum = BUNDLE_CHECKSUMS[PLATFORM];
    const url = `${BASE_URL}/${VERSION}/${PLATFORM}/claude.app.tar.zst`;
    const parent = path.dirname(this.versionDirectory);
    const temporary = `${this.versionDirectory}.partial-${crypto.randomUUID()}`;
    try {
      const response = await net.fetch(url, {
        signal: AbortSignal.timeout(120_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const compressed = Buffer.from(await response.arrayBuffer());
      const actual = crypto
        .createHash("sha256")
        .update(compressed)
        .digest("hex");
      if (actual !== checksum)
        throw new Error("Downloaded bundle checksum mismatch");
      const tar = Buffer.from(await zstdDecompress(compressed));
      await fs.mkdir(parent, { recursive: true, mode: 0o700 });
      await fs.rm(temporary, { recursive: true, force: true });
      await fs.mkdir(temporary, { recursive: true, mode: 0o700 });
      await extractTarSafely(tar, temporary);
      await fs.access(
        path.join(temporary, "claude.app", "Contents", "MacOS", "claude"),
      );
      await fs.writeFile(path.join(temporary, ".verified"), checksum, {
        mode: 0o600,
      });
      await fs.rm(this.versionDirectory, { recursive: true, force: true });
      await fs.rename(temporary, this.versionDirectory);
      return { success: true };
    } catch {
      this.downloadFailed = true;
      await fs.rm(temporary, { recursive: true, force: true }).catch(() => {});
      return {
        success: false,
        error: "Download failed. Check your internet connection and try again.",
      };
    }
  }
}

async function readJsonObject(
  file: string,
): Promise<Record<string, unknown> | null> {
  try {
    const value: unknown = JSON.parse(await fs.readFile(file, "utf8"));
    return typeof value === "object" && value != null && !Array.isArray(value)
      ? (value as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

function isSupportedSettingValue(value: unknown): boolean {
  return (
    typeof value === "string" ||
    typeof value === "boolean" ||
    (Array.isArray(value) && value.every((entry) => typeof entry === "string"))
  );
}

async function writeJsonAtomic(
  file: string,
  value: Record<string, unknown>,
): Promise<void> {
  const temporary = `${file}.tmp`;
  await fs.mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  await fs.writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await fs.rename(temporary, file);
}

async function extractTarSafely(
  tar: Buffer,
  destination: string,
): Promise<void> {
  for (let offset = 0; offset + 512 <= tar.length;) {
    const header = tar.subarray(offset, offset + 512);
    if (header.every((byte) => byte === 0)) return;
    const name = readTarString(header.subarray(0, 100));
    const prefix = readTarString(header.subarray(345, 500));
    const entryName = prefix ? `${prefix}/${name}` : name;
    const sizeText = readTarString(header.subarray(124, 136)).trim();
    const size = sizeText ? Number.parseInt(sizeText, 8) : 0;
    if (!Number.isSafeInteger(size) || size < 0)
      throw new Error("Invalid tar size");
    const type = String.fromCharCode(header[156] || 48);
    const normalized = path.posix.normalize(entryName).replace(/^\.\//, "");
    if (
      normalized === "" ||
      normalized === "." ||
      normalized.startsWith("../") ||
      path.posix.isAbsolute(normalized)
    ) {
      throw new Error("Unsafe path in bundle archive");
    }
    const target = path.join(destination, ...normalized.split("/"));
    const relative = path.relative(destination, target);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      throw new Error("Unsafe path in bundle archive");
    }
    const dataStart = offset + 512;
    const dataEnd = dataStart + size;
    if (dataEnd > tar.length) throw new Error("Truncated tar archive");
    if (type === "5") {
      await fs.mkdir(target, { recursive: true, mode: 0o755 });
    } else if (type === "0" || type === "\0") {
      await fs.mkdir(path.dirname(target), { recursive: true, mode: 0o755 });
      await fs.writeFile(target, tar.subarray(dataStart, dataEnd), {
        mode: normalized.endsWith("/MacOS/claude") ? 0o755 : 0o644,
      });
    } else if (type !== "x" && type !== "g") {
      throw new Error(`Unsupported tar entry type ${type}`);
    }
    offset = dataStart + Math.ceil(size / 512) * 512;
  }
}

function readTarString(value: Buffer): string {
  const end = value.indexOf(0);
  return value.subarray(0, end < 0 ? value.length : end).toString("utf8");
}
