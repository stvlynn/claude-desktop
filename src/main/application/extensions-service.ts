// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
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
import path from "node:path";
import { dialog, shell, type App } from "electron";
import {
  extensionId,
  parseDxtManifest,
  readDxtPackage,
  type DxtManifest,
  type DxtPackage,
} from "../infrastructure/dxt-package";

export class ExtensionsService extends EventEmitter {
  constructor(private readonly app: App) {
    super();
  }

  async isExtensionsEnabled(): Promise<boolean> {
    return true;
  }
  async isDirectoryEnabled(): Promise<boolean> {
    return false;
  }
  async isDesktopExtensionSignatureRequired(): Promise<boolean> {
    return false;
  }
  async isDesktopExtensionDirectoryEnabled(): Promise<boolean> {
    return false;
  }

  async getInstalledExtensionsWithState() {
    await mkdir(this.extensionsRoot, { recursive: true, mode: 0o700 });
    const entries = await readdir(this.extensionsRoot, { withFileTypes: true });
    const installed = [];
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      try {
        const manifest = parseDxtManifest(
          JSON.parse(
            await readFile(
              path.join(this.extensionsRoot, entry.name, "manifest.json"),
              "utf8",
            ),
          ),
        );
        installed.push({
          id: entry.name,
          manifest,
          displayName: manifest.display_name || manifest.name,
          settings: await this.getExtensionSettings(entry.name),
          path: path.join(this.extensionsRoot, entry.name),
        });
      } catch {
        continue;
      }
    }
    return installed;
  }

  async getIsUpdateAvailable(): Promise<null> {
    return null;
  }

  getManifestCompatibilityResult(manifest: DxtManifest) {
    const platforms = (
      manifest.compatibility as { platforms?: unknown } | undefined
    )?.platforms;
    const platformCompatible =
      !Array.isArray(platforms) ||
      platforms.length === 0 ||
      platforms.includes(process.platform);
    return {
      compatible: platformCompatible,
      requirements: Array.isArray(platforms)
        ? [{ name: process.platform, met: platformCompatible }]
        : [],
    };
  }

  async getAvailableExtensionRuntimes() {
    return [
      {
        name: "Node.js",
        versions: [process.versions.node],
        builtInVersion: process.versions.node,
      },
      { name: "Python", versions: [], builtInVersion: null },
    ];
  }

  async getExtensionSettings(id: string): Promise<Record<string, unknown>> {
    try {
      const value = JSON.parse(
        await readFile(this.settingsPath(id), "utf8"),
      ) as unknown;
      return value && typeof value === "object"
        ? (value as Record<string, unknown>)
        : { isEnabled: false };
    } catch {
      return { isEnabled: false };
    }
  }

  async setExtensionSettings(
    id: string,
    settings: Record<string, unknown>,
  ): Promise<void> {
    assertSafeId(id);
    await mkdir(this.settingsRoot, { recursive: true, mode: 0o700 });
    await atomicJsonWrite(this.settingsPath(id), settings);
    this.emit("extensionSettingsChanged", id, settings);
  }

  async installDxt(
    requestedId: string,
    dxtFilePath: string,
  ): Promise<string | null> {
    const archive = await readDxtPackage(dxtFilePath);
    const id = requestedId || extensionId(archive.manifest, "local.dxt");
    return this.installArchive(id, archive);
  }

  async installDxtUnpacked(folderPath: string): Promise<string | null> {
    await assertDirectoryWithoutSymlinks(folderPath);
    const manifest = parseDxtManifest(
      JSON.parse(
        await readFile(path.join(folderPath, "manifest.json"), "utf8"),
      ),
    );
    const id = extensionId(manifest, "local.dxt");
    assertSafeId(id);
    const temporary = `${path.join(this.extensionsRoot, id)}.tmp`;
    await mkdir(this.extensionsRoot, { recursive: true, mode: 0o700 });
    await rm(temporary, { recursive: true, force: true });
    await cp(folderPath, temporary, { recursive: true, dereference: false });
    await rm(path.join(this.extensionsRoot, id), {
      recursive: true,
      force: true,
    });
    await rename(temporary, path.join(this.extensionsRoot, id));
    await this.setExtensionSettings(id, { isEnabled: true });
    this.emit("extensionsChanged");
    return id;
  }

  async installDxtFromDirectory(): Promise<null> {
    return null;
  }

  async handleDxtFile(filePath: string): Promise<void> {
    const archive = await readDxtPackage(filePath);
    this.emit(
      "previewExtensionInstallation",
      archive.manifest,
      filePath,
      extensionId(archive.manifest, "local.dxt"),
      undefined,
    );
  }

  async showInstallDxtDialog(): Promise<void> {
    const result = await dialog.showOpenDialog({
      title: "Select extension",
      buttonLabel: "Preview",
      filters: [{ name: "Extensions", extensions: ["dxt", "mcpb"] }],
      properties: ["openFile"],
      defaultPath: this.app.getPath("downloads"),
    });
    if (!result.canceled && result.filePaths[0]) {
      await this.handleDxtFile(result.filePaths[0]);
    }
  }

  async deleteExtension(id: string): Promise<void> {
    assertSafeId(id);
    await Promise.all([
      rm(path.join(this.extensionsRoot, id), { recursive: true, force: true }),
      rm(this.settingsPath(id), { force: true }),
    ]);
    this.emit("extensionsChanged");
  }

  showExtensionInFolder(id: string): void {
    assertSafeId(id);
    shell.showItemInFolder(path.join(this.extensionsRoot, id));
  }

  async openExtensionsFolder(): Promise<void> {
    await mkdir(this.extensionsRoot, { recursive: true, mode: 0o700 });
    await shell.openPath(this.extensionsRoot);
  }

  async openExtensionSettingsFolder(): Promise<void> {
    await mkdir(this.settingsRoot, { recursive: true, mode: 0o700 });
    await shell.openPath(this.settingsRoot);
  }

  async getDirectoryUrl(): Promise<never> {
    throw new Error(
      "The extension directory has been disabled on your computer.",
    );
  }

  async getExtension(): Promise<never> {
    return this.directoryUnavailable();
  }
  async getExtensions(): Promise<never> {
    return this.directoryUnavailable();
  }
  async getExtensionVersion(): Promise<never> {
    return this.directoryUnavailable();
  }
  async getExtensionVersions(): Promise<never> {
    return this.directoryUnavailable();
  }

  async installExtensionFromPreview(
    id: string,
    filePath: string,
  ): Promise<string | null> {
    return this.installDxt(id, filePath);
  }

  async refreshAllowlistCheck(): Promise<void> {
    const installed = await this.getInstalledExtensionsWithState();
    for (const extension of installed) {
      if (!this.getManifestCompatibilityResult(extension.manifest).compatible) {
        await this.setExtensionSettings(extension.id, {
          ...extension.settings,
          isEnabled: false,
        });
      }
    }
    this.emit("extensionsChanged");
  }

  private async installArchive(
    id: string,
    archive: DxtPackage,
  ): Promise<string> {
    assertSafeId(id);
    const target = path.join(this.extensionsRoot, id);
    const temporary = `${target}.tmp`;
    await mkdir(this.extensionsRoot, { recursive: true, mode: 0o700 });
    await rm(temporary, { recursive: true, force: true });
    for (const [relative, content] of archive.files) {
      const output = path.join(temporary, ...relative.split("/"));
      await mkdir(path.dirname(output), { recursive: true, mode: 0o700 });
      await writeFile(output, content, { mode: 0o600 });
    }
    await rm(target, { recursive: true, force: true });
    await rename(temporary, target);
    await this.setExtensionSettings(id, { isEnabled: true });
    this.emit("extensionsChanged");
    return id;
  }

  private directoryUnavailable(): never {
    throw new Error(
      "The extension directory has been disabled on your computer.",
    );
  }

  private get extensionsRoot(): string {
    return path.join(this.app.getPath("userData"), "Claude Extensions");
  }
  private get settingsRoot(): string {
    return path.join(
      this.app.getPath("userData"),
      "Claude Extensions Settings",
    );
  }
  private settingsPath(id: string): string {
    assertSafeId(id);
    return path.join(this.settingsRoot, `${id}.json`);
  }
}

function assertSafeId(id: string): void {
  if (!id.trim() || id !== path.basename(id) || id.includes("..")) {
    throw new Error(`Invalid extension id: ${id}`);
  }
}

async function atomicJsonWrite(target: string, value: unknown): Promise<void> {
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, target);
}

async function assertDirectoryWithoutSymlinks(root: string): Promise<void> {
  const rootInfo = await lstat(root);
  if (!rootInfo.isDirectory() || rootInfo.isSymbolicLink()) {
    throw new Error("Unpacked extension must be a real directory");
  }
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isSymbolicLink()) {
      throw new Error(`Symbolic links are not allowed: ${entry.name}`);
    }
    if (entry.isDirectory()) {
      await assertDirectoryWithoutSymlinks(path.join(root, entry.name));
    }
  }
}
