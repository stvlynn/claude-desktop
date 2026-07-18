// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { App } from "electron";
import type {
  ClaudeVmApiReachabilityState,
  ClaudeVmDownloadStatus,
  ClaudeVmRunningStatus,
  ClaudeVmStartOptions,
  YukonSilverConfig,
} from "../domain/claude-vm";
import { ClaudeVmBundleRepository } from "../infrastructure/claude-vm-bundle-repository";
import { loadClaudeVmNativeApi } from "../infrastructure/claude-vm-native";

export class ClaudeVmService extends EventEmitter {
  private readonly app: App;
  private readonly bundles: ClaudeVmBundleRepository;
  private config: YukonSilverConfig | null = null;
  private forceDisableHostLoop = false;
  private readonly reachability: ClaudeVmApiReachabilityState = {
    reachability: "unknown",
    willTryRecover: false,
  };

  constructor(app: App) {
    super();
    this.app = app;
    this.bundles = new ClaudeVmBundleRepository(app);
    void this.loadSettings();
  }

  async download(): Promise<{ success: boolean; error?: string }> {
    try {
      await this.bundles.download((percent) =>
        this.emit("downloadProgress", percent),
      );
      this.emit("downloadStatusChanged", "ready");
      return { success: await this.bundles.isReady() };
    } catch (error) {
      this.emit("downloadStatusChanged", "not_downloaded");
      const code = (error as NodeJS.ErrnoException).code;
      return {
        success: false,
        error:
          code === "ENOSPC"
            ? "VM_DISK_SPACE_INSUFFICIENT"
            : error instanceof Error
              ? error.message
              : String(error),
      };
    }
  }

  async startVM(
    options?: ClaudeVmStartOptions,
  ): Promise<{ success: boolean; error?: string }> {
    const native = loadClaudeVmNativeApi();
    if (!native)
      return { success: false, error: "Swift VM addon not available" };
    try {
      const support = native.isVirtualizationSupported?.();
      if (support && support !== "supported") {
        return { success: false, error: support };
      }
      if (!(await this.bundles.isReady())) {
        const downloaded = await this.download();
        if (!downloaded.success) return downloaded;
      }
      this.setRunningStatus("booting");
      await native.configure?.();
      await native.startVM(
        this.bundles.bundlePath,
        options?.memoryGB ?? this.config?.memoryGB ?? 4,
        undefined,
        "gvisor",
      );
      this.setRunningStatus(
        (await native.isGuestConnected().catch(() => false))
          ? "ready"
          : "booting",
      );
      return { success: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.setRunningStatus("offline");
      this.emit("startupError", message);
      return { success: false, error: message };
    }
  }

  async getDownloadStatus(): Promise<ClaudeVmDownloadStatus> {
    if (this.bundles.isDownloading) return "downloading";
    return (await this.bundles.isReady()) ? "ready" : "not_downloaded";
  }

  async getRunningStatus(): Promise<ClaudeVmRunningStatus> {
    const native = loadClaudeVmNativeApi();
    if (!native) return "offline";
    if (await native.isGuestConnected().catch(() => false)) return "ready";
    if (await native.isRunning().catch(() => false)) return "booting";
    return "offline";
  }

  isHostLoopModeEnabled(): boolean {
    return (
      !this.forceDisableHostLoop &&
      (
        globalThis as typeof globalThis & {
          isDeveloperApprovedDevUrlOverrideEnabled?: boolean;
        }
      ).isDeveloperApprovedDevUrlOverrideEnabled === true &&
      process.env.CLAUDE_FORCE_HOST_LOOP === "1"
    );
  }

  isHostLoopDevOverrideActive(): boolean {
    return false;
  }

  async setForceDisableHostLoop(value: boolean): Promise<void> {
    this.forceDisableHostLoop = value;
    await this.persistSettings();
  }

  async setYukonSilverConfig(config: YukonSilverConfig): Promise<void> {
    this.config = config;
    if (config.autoDownloadInBackground && !(await this.bundles.isReady())) {
      void this.download();
    }
  }

  getInitialApiReachabilityState(): ClaudeVmApiReachabilityState {
    return { ...this.reachability };
  }

  async checkVirtualMachinePlatform(): Promise<boolean> {
    if (process.platform !== "darwin") return true;
    const support = loadClaudeVmNativeApi()?.isVirtualizationSupported?.();
    return support === undefined || support === "supported";
  }

  async enableVirtualMachinePlatform(): Promise<{
    success: boolean;
    restartNeeded: boolean;
    error?: string;
  }> {
    return process.platform === "win32"
      ? {
          success: false,
          restartNeeded: false,
          error: "The Windows VM service is not included in this build.",
        }
      : { success: true, restartNeeded: false };
  }

  async restartAfterVMPInstall(): Promise<boolean> {
    return false;
  }

  async deleteAndReinstall(): Promise<void> {
    const native = loadClaudeVmNativeApi();
    await native?.stopVM?.(true);
    await this.bundles.deleteInstallFiles();
    this.app.relaunch();
    this.app.exit(0);
  }

  private setRunningStatus(status: ClaudeVmRunningStatus): void {
    this.emit("runningStatusChanged", status);
  }

  private get settingsPath(): string {
    return path.join(this.app.getPath("userData"), "claude-vm-settings.json");
  }

  private async loadSettings(): Promise<void> {
    try {
      const settings = JSON.parse(
        await readFile(this.settingsPath, "utf8"),
      ) as {
        forceDisableHostLoop?: unknown;
      };
      this.forceDisableHostLoop = settings.forceDisableHostLoop === true;
    } catch {
      this.forceDisableHostLoop = false;
    }
  }

  private async persistSettings(): Promise<void> {
    await writeFile(
      this.settingsPath,
      `${JSON.stringify({ forceDisableHostLoop: this.forceDisableHostLoop })}\n`,
      { mode: 0o600 },
    );
  }
}
