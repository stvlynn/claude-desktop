// Restored from ref/.vite/build/index.js (Jfe/showLogsInFileManager)

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import type { App } from "electron";
import { dialog, shell } from "electron";
import JSZip from "jszip";
import { scrubDiagnosticBuffer } from "./diagnostic-scrubber";
import { createLazyScopedStructuredLogger } from "./structured-logger";

const logger = createLazyScopedStructuredLogger("show-logs");
const excludedNames = new Set(["echo.log", "echo1.log"]);
const MAX_FILE_BYTES = 32 * 1024 * 1024;
const MAX_TOTAL_BYTES = 128 * 1024 * 1024;
const MAX_FILES = 2_000;

type DiagnosticEntry = {
  archivePath: string;
  contents: Buffer;
};

export class ClaudeLogExportService {
  constructor(private readonly app: App) {}

  getSystemInfo(): {
    app_version: string;
    os_version: string;
    cpu_model: string | null;
    platform: NodeJS.Platform;
    arch: string;
    total_memory: number;
    can_elevate_to_admin: null;
    is_msix: boolean;
    installer_variant: "msix" | "squirrel";
  } {
    return {
      app_version: this.app.getVersion(),
      os_version: process.getSystemVersion(),
      cpu_model: os.cpus()[0]?.model ?? null,
      platform: process.platform,
      arch: process.arch,
      total_memory: os.totalmem(),
      can_elevate_to_admin: null,
      is_msix: false,
      installer_variant: "squirrel",
    };
  }

  async showLogsInFileManager(): Promise<void> {
    try {
      const logsDirectory = await fs.realpath(this.app.getPath("logs"));
      const downloadsDirectory = await fs.realpath(
        this.app.getPath("downloads"),
      );
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const baseName = `${this.app.getName()}-logs-${timestamp}`;
      const archivePath = path.join(downloadsDirectory, `${baseName}.zip`);
      const entries = await this.collectEntries(logsDirectory);
      entries.push(this.systemInfoEntry());

      try {
        await fs.writeFile(
          archivePath,
          await this.createArchiveBuffer(entries),
          {
            mode: 0o600,
          },
        );
        const archive = await fs.stat(archivePath);
        if (!archive.isFile() || archive.size === 0) {
          throw new Error("Zip file was not created successfully");
        }
        shell.showItemInFolder(archivePath);
      } catch (error) {
        logger().warning("Failed to create zip; exporting a scrubbed folder", {
          sensitive: { error },
        });
        const folder = await uniqueDirectory(downloadsDirectory, baseName);
        await fs.mkdir(folder, { recursive: false, mode: 0o700 });
        for (const entry of entries) {
          const destination = path.join(folder, entry.archivePath);
          await fs.mkdir(path.dirname(destination), {
            recursive: true,
            mode: 0o700,
          });
          await fs.writeFile(destination, entry.contents, { mode: 0o600 });
        }
        shell.showItemInFolder(folder);
      }
    } catch (error) {
      logger().error("Error handling logs", { sensitive: { error } });
      dialog.showErrorBox(
        "Error accessing logs",
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  async createDiagnosticArchiveBuffer(): Promise<Buffer> {
    const logsDirectory = await fs.realpath(this.app.getPath("logs"));
    const entries = await this.collectEntries(logsDirectory);
    entries.push(this.systemInfoEntry());
    return this.createArchiveBuffer(entries);
  }

  private async collectEntries(
    logsDirectory: string,
  ): Promise<DiagnosticEntry[]> {
    const entries: DiagnosticEntry[] = [];
    let totalBytes = 0;
    const visit = async (directory: string, prefix: string): Promise<void> => {
      const children = await fs.readdir(directory, { withFileTypes: true });
      children.sort((left, right) => left.name.localeCompare(right.name));
      for (const child of children) {
        if (entries.length >= MAX_FILES) return;
        if (excludedNames.has(child.name)) continue;
        const absolutePath = path.join(directory, child.name);
        const archivePath = prefix ? `${prefix}/${child.name}` : child.name;
        const metadata = await fs.lstat(absolutePath).catch(() => null);
        if (metadata == null || metadata.isSymbolicLink()) continue;
        if (metadata.isDirectory()) {
          await visit(absolutePath, archivePath);
          continue;
        }
        if (!metadata.isFile() || metadata.size > MAX_FILE_BYTES) continue;
        if (totalBytes + metadata.size > MAX_TOTAL_BYTES) return;
        const contents = await fs.readFile(absolutePath).catch(() => null);
        if (contents == null) continue;
        entries.push({
          archivePath,
          contents: scrubDiagnosticBuffer(archivePath, contents),
        });
        totalBytes += metadata.size;
      }
    };
    await visit(logsDirectory, "");
    return entries;
  }

  private systemInfoEntry(): DiagnosticEntry {
    const info = this.getSystemInfo();
    const contents = [
      `App Name: ${this.app.getName()}`,
      `App Version: ${info.app_version}`,
      `Electron Version: ${process.versions.electron}`,
      `Chrome Version: ${process.versions.chrome}`,
      `Node Version: ${process.versions.node}`,
      `Platform: ${info.platform}`,
      `Architecture: ${info.arch}`,
      `OS Version: ${info.os_version}`,
      `CPU: ${info.cpu_model ?? "unknown"}`,
      `CPU Cores: ${os.cpus().length}`,
      `Total Memory: ${info.total_memory}`,
      `Is Packaged: ${this.app.isPackaged}`,
    ].join("\n");
    return {
      archivePath: "system-info.txt",
      contents: scrubDiagnosticBuffer(
        "system-info.txt",
        Buffer.from(contents, "utf8"),
      ),
    };
  }

  private async createArchiveBuffer(
    entries: DiagnosticEntry[],
  ): Promise<Buffer> {
    const zip = new JSZip();
    for (const entry of entries) {
      zip.file(entry.archivePath, entry.contents, {
        binary: true,
        unixPermissions: 0o600,
      });
    }
    return zip.generateAsync({
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
      platform: process.platform === "win32" ? "DOS" : "UNIX",
      type: "nodebuffer",
    });
  }
}

async function uniqueDirectory(
  parent: string,
  baseName: string,
): Promise<string> {
  for (let suffix = 0; ; suffix += 1) {
    const candidate = path.join(
      parent,
      suffix === 0 ? baseName : `${baseName}-${suffix}`,
    );
    try {
      await fs.access(candidate);
    } catch {
      return candidate;
    }
  }
}
