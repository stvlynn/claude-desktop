// Restored from ref/.vite/build/index.js

import type { DesktopUpdateManager } from "../infrastructure/desktop-runtime-types";

export type UpdaterState = {
  status:
    "idle" | "checking" | "downloading" | "ready" | "error" | "install-failed";
  version?: string;
  versionNumber?: string;
  errorMessage?: string;
  isManualCheck?: boolean;
};

export type RunningLocalSession = {
  sessionId: string;
  title?: string;
  kind: string;
};

export class AutoUpdaterService {
  private pendingRestart = false;
  private readonly listeners = new Set<(state: UpdaterState) => void>();
  private lastSerializedState = "";
  private readonly pollTimer: NodeJS.Timeout;

  constructor(
    private readonly updateManager: DesktopUpdateManager,
    private readonly getRunningSessions: () => RunningLocalSession[],
  ) {
    this.pollTimer = setInterval(() => this.publishIfChanged(), 500);
    this.pollTimer.unref();
  }

  getState(): UpdaterState {
    const lifecycle = this.updateManager.getUpdateLifecycleState();
    if (this.updateManager.getIsUpdateReady() || lifecycle === "ready") {
      return { status: "ready" };
    }
    switch (lifecycle) {
      case "checking":
        return { status: "checking", isManualCheck: false };
      case "downloading":
        return { status: "downloading" };
      case "installing":
        return { status: "ready" };
      default:
        return { status: "idle" };
    }
  }

  subscribe(listener: (state: UpdaterState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  async restartToUpdate(): Promise<boolean> {
    if (this.getState().status !== "ready") return false;
    this.pendingRestart = false;
    return this.updateManager.installUpdatesIfAvailable();
  }

  async checkForUpdates(): Promise<void> {
    await this.updateManager.checkForUpdates();
    this.publishIfChanged();
  }

  getRunningLocalSessions(): RunningLocalSession[] {
    return this.getRunningSessions();
  }

  async restartToUpdateWhenIdle(): Promise<boolean> {
    if (this.getState().status !== "ready") return false;
    if (this.getRunningSessions().length === 0) return this.restartToUpdate();
    this.pendingRestart = true;
    return true;
  }

  cancelPendingRestart(): void {
    this.pendingRestart = false;
  }

  dispose(): void {
    clearInterval(this.pollTimer);
    this.listeners.clear();
  }

  private publishIfChanged(): void {
    if (this.pendingRestart && this.getRunningSessions().length === 0) {
      this.pendingRestart = false;
      void this.restartToUpdate();
    }
    const state = this.getState();
    const serialized = JSON.stringify(state);
    if (serialized === this.lastSerializedState) return;
    this.lastSerializedState = serialized;
    for (const listener of this.listeners) listener(state);
  }
}
