// Restored from ref/.vite/build/index.js (CoworkUserFiles)

import * as fs from "node:fs/promises";
import * as path from "node:path";
import { BrowserWindow, dialog, shell, type App } from "electron";
import type { ClaudeAppConfigurationRepository } from "./claude-app-configuration";

type MigrationErrorCode =
  | "sessions-running"
  | "target-invalid"
  | "target-unc"
  | "target-inside-current"
  | "target-not-writable"
  | "copy-failed"
  | "state-write-failed";

type MigrationResult =
  { ok: true; newRoot: string } | { ok: false; errorCode: MigrationErrorCode };

const metadataNames = new Set([
  ".ds_store",
  ".localized",
  "desktop.ini",
  "thumbs.db",
  "ehthumbs.db",
]);

export class CoworkUserFilesService {
  private resolvedRoot: string | null = null;

  constructor(
    private readonly app: App,
    private readonly configuration: ClaudeAppConfigurationRepository,
    private readonly hasRunningSessions: () => boolean,
  ) {}

  async getInfo(): Promise<{
    currentRoot: string;
    homeRoot: string;
    isLegacyDocumentsRoot: boolean;
  }> {
    const currentRoot = await this.resolveRoot();
    return {
      currentRoot,
      homeRoot: this.homeRoot,
      isLegacyDocumentsRoot: currentRoot === this.documentsRoot,
    };
  }

  async pickTarget(): Promise<{ path: string } | null> {
    const options: Electron.OpenDialogOptions = {
      title: "Choose Claude data folder",
      defaultPath: this.homeRoot,
      buttonLabel: "Choose",
      properties: ["openDirectory", "createDirectory"],
    };
    const focusedWindow = BrowserWindow.getFocusedWindow();
    const result = focusedWindow
      ? await dialog.showOpenDialog(focusedWindow, options)
      : await dialog.showOpenDialog(options);
    return result.canceled || !result.filePaths[0]
      ? null
      : { path: result.filePaths[0] };
  }

  async migrate(targetRoot: string): Promise<MigrationResult> {
    if (this.hasRunningSessions()) {
      return { ok: false, errorCode: "sessions-running" };
    }
    const validation = await this.validateTarget(targetRoot);
    if (!validation.ok) return validation;
    const { canonicalTarget, canonicalCurrent } = validation;
    let sourceExists = true;
    try {
      await fs.access(canonicalCurrent);
    } catch (error) {
      if (!isFileSystemError(error, "ENOENT")) {
        return { ok: false, errorCode: "copy-failed" };
      }
      sourceExists = false;
    }
    if (sourceExists) {
      try {
        await fs.cp(canonicalCurrent, canonicalTarget, {
          recursive: true,
          force: true,
        });
      } catch {
        return { ok: false, errorCode: "copy-failed" };
      }
    }
    try {
      await this.configuration.setConfigurationValue(
        "coworkUserFilesPathUncRedirectedFrom",
        undefined,
      );
      await this.configuration.setConfigurationValue(
        "coworkUserFilesPath",
        canonicalTarget,
      );
      this.resolvedRoot = canonicalTarget;
    } catch {
      return { ok: false, errorCode: "state-write-failed" };
    }
    setImmediate(() => {
      this.app.relaunch();
      this.app.exit(0);
    });
    return { ok: true, newRoot: canonicalTarget };
  }

  async reveal(): Promise<void> {
    const root = await this.resolveRoot();
    await fs.mkdir(root, { recursive: true, mode: 0o700 }).catch(() => {});
    shell.showItemInFolder(path.join(root, "."));
  }

  private get homeRoot(): string {
    return path.join(this.app.getPath("home"), "Claude");
  }

  private get documentsRoot(): string {
    return path.join(this.app.getPath("documents"), "Claude");
  }

  private get fallbackRoot(): string {
    return path.join(this.app.getPath("userData"), "cowork-user-files");
  }

  private async resolveRoot(): Promise<string> {
    if (this.resolvedRoot) return this.resolvedRoot;
    const configuration = await this.configuration.getConfiguration();
    const stored = configuration.coworkUserFilesPath;
    if (typeof stored === "string" && path.isAbsolute(stored)) {
      this.resolvedRoot = path.normalize(stored);
      return this.resolvedRoot;
    }
    let selected = this.homeRoot;
    if (!(await hasUserFiles(selected))) {
      if (await hasUserFiles(this.documentsRoot)) selected = this.documentsRoot;
    }
    if (isUncPath(selected)) selected = this.fallbackRoot;
    this.resolvedRoot = selected;
    void this.configuration
      .setConfigurationValue("coworkUserFilesPath", selected)
      .catch(() => {});
    return selected;
  }

  private async validateTarget(targetRoot: string): Promise<
    | {
        ok: true;
        canonicalTarget: string;
        canonicalCurrent: string;
      }
    | { ok: false; errorCode: MigrationErrorCode }
  > {
    if (!path.isAbsolute(targetRoot)) {
      return { ok: false, errorCode: "target-invalid" };
    }
    if (isUncPath(targetRoot)) {
      return { ok: false, errorCode: "target-unc" };
    }
    let canonicalTarget: string;
    let canonicalCurrent: string;
    try {
      canonicalTarget = await canonicalizeWritePath(targetRoot);
      canonicalCurrent = await canonicalizeWritePath(await this.resolveRoot());
    } catch {
      return { ok: false, errorCode: "target-invalid" };
    }
    if (
      isPathWithin(canonicalTarget, canonicalCurrent) ||
      isPathWithin(canonicalCurrent, canonicalTarget)
    ) {
      return { ok: false, errorCode: "target-inside-current" };
    }
    try {
      await fs.mkdir(canonicalTarget, { recursive: true, mode: 0o700 });
      await fs.access(canonicalTarget, 2);
    } catch {
      return { ok: false, errorCode: "target-not-writable" };
    }
    return { ok: true, canonicalTarget, canonicalCurrent };
  }
}

async function hasUserFiles(directory: string): Promise<boolean> {
  try {
    return (await fs.readdir(directory)).some(
      (name) => !metadataNames.has(name.toLowerCase()),
    );
  } catch (error) {
    return !isFileSystemError(error, "ENOENT");
  }
}

async function canonicalizeWritePath(value: string): Promise<string> {
  const resolved = path.resolve(value);
  try {
    return await fs.realpath(resolved);
  } catch {}
  const suffix: string[] = [];
  let cursor = resolved;
  while (cursor !== path.dirname(cursor)) {
    const metadata = await fs.lstat(cursor).catch(() => null);
    if (metadata?.isSymbolicLink()) {
      const link = await fs.readlink(cursor);
      const parent = await fs.realpath(path.dirname(cursor));
      return canonicalizeWritePath(path.resolve(parent, link, ...suffix));
    }
    suffix.unshift(path.basename(cursor));
    cursor = path.dirname(cursor);
    try {
      return path.join(await fs.realpath(cursor), ...suffix);
    } catch {}
  }
  return resolved;
}

function isPathWithin(candidate: string, root: string): boolean {
  const relative = path.relative(root, candidate);
  return (
    relative === "" ||
    (!path.isAbsolute(relative) &&
      relative !== ".." &&
      !relative.startsWith(`..${path.sep}`))
  );
}

function isUncPath(value: string): boolean {
  if (value.startsWith("\\\\") || value.startsWith("//")) return true;
  const normalized = path.normalize(value);
  return normalized.startsWith("\\\\") || normalized.startsWith("//");
}

function isFileSystemError(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    error.code === code
  );
}
