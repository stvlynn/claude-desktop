// Restored from ref/.vite/build/index.js

import { createHash } from "node:crypto";
import { createWriteStream } from "node:fs";
import {
  access,
  mkdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createZstdDecompress } from "node:zlib";
import { net, type App } from "electron";
import {
  CLAUDE_VM_BUNDLE_FILES,
  CLAUDE_VM_BUNDLE_VERSION,
  type ClaudeVmBundleFile,
} from "../domain/claude-vm";

export class ClaudeVmBundleRepository {
  private downloadPromise: Promise<boolean> | null = null;

  constructor(private readonly app: App) {}

  get bundlePath(): string {
    return path.join(
      this.app.getPath("userData"),
      "vm_bundles",
      "claudevm.bundle",
    );
  }

  get isDownloading(): boolean {
    return this.downloadPromise !== null;
  }

  files(): readonly ClaudeVmBundleFile[] {
    return CLAUDE_VM_BUNDLE_FILES[process.arch === "x64" ? "x64" : "arm64"];
  }

  async isReady(): Promise<boolean> {
    const results = await Promise.all(
      this.files().map(async (file) => {
        try {
          const origin = await readFile(
            path.join(this.bundlePath, `.${file.name}.origin`),
            "utf8",
          );
          await access(path.join(this.bundlePath, file.name));
          return origin === CLAUDE_VM_BUNDLE_VERSION;
        } catch {
          return false;
        }
      }),
    );
    return results.length > 0 && results.every(Boolean);
  }

  download(onProgress: (percent: number) => void): Promise<boolean> {
    if (this.downloadPromise) return this.downloadPromise;
    this.downloadPromise = this.downloadFiles(onProgress).finally(() => {
      this.downloadPromise = null;
    });
    return this.downloadPromise;
  }

  async deleteInstallFiles(): Promise<boolean> {
    let removed = false;
    for (const file of this.files()) {
      for (const name of [file.name, `.${file.name}.origin`]) {
        try {
          await rm(path.join(this.bundlePath, name), { force: true });
          removed = true;
        } catch {
          // Locked VM files are retained, matching the current app's reinstall path.
        }
      }
    }
    return removed;
  }

  private async downloadFiles(
    onProgress: (percent: number) => void,
  ): Promise<boolean> {
    await mkdir(this.bundlePath, { recursive: true });
    let changed = false;
    for (const file of this.files()) {
      if (await this.fileIsReady(file)) continue;
      await this.downloadFile(file, onProgress);
      changed = true;
    }
    return changed;
  }

  private async fileIsReady(file: ClaudeVmBundleFile): Promise<boolean> {
    try {
      return (
        (await readFile(
          path.join(this.bundlePath, `.${file.name}.origin`),
          "utf8",
        )) === CLAUDE_VM_BUNDLE_VERSION &&
        (await access(path.join(this.bundlePath, file.name)), true)
      );
    } catch {
      return false;
    }
  }

  private async downloadFile(
    file: ClaudeVmBundleFile,
    onProgress: (percent: number) => void,
  ): Promise<void> {
    const arch = process.arch === "x64" ? "x64" : "arm64";
    const url = `https://downloads.claude.ai/vms/linux/${arch}/${CLAUDE_VM_BUNDLE_VERSION}/${file.name}.zst`;
    const response = await net.fetch(url);
    if (!response.ok || !response.body) {
      throw new Error(`VM bundle download failed with HTTP ${response.status}`);
    }
    const total = Number(response.headers.get("content-length") ?? 0);
    const hash = createHash("sha256");
    let received = 0;
    const progress = new Transform({
      transform(chunk: Buffer, _encoding, callback) {
        received += chunk.length;
        hash.update(chunk);
        const ratio = total > 0 ? received / total : 0;
        onProgress(
          Math.round(
            file.progressStart +
              ratio * (file.progressEnd - file.progressStart),
          ),
        );
        callback(null, chunk);
      },
    });
    const destination = path.join(this.bundlePath, file.name);
    const temporary = `${destination}.tmp`;
    try {
      await pipeline(
        Readable.fromWeb(response.body as never),
        progress,
        createZstdDecompress(),
        createWriteStream(temporary, { mode: 0o600 }),
      );
      const digest = hash.digest("hex");
      if (digest !== file.checksum) {
        throw new Error(
          `VM bundle checksum mismatch: expected ${file.checksum}, got ${digest}`,
        );
      }
      await rename(temporary, destination);
      await writeFile(
        path.join(this.bundlePath, `.${file.name}.origin`),
        CLAUDE_VM_BUNDLE_VERSION,
        { mode: 0o600 },
      );
      onProgress(file.progressEnd);
    } catch (error) {
      await rm(temporary, { force: true }).catch(() => undefined);
      throw error;
    }
  }
}
