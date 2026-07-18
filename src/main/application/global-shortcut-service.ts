// Restored from ref/.vite/build/index.js

import { globalShortcut } from "electron";
import { isValidElectronAccelerator } from "../domain/app-preferences";
import { ClaudeAppConfigurationRepository } from "../infrastructure/claude-app-configuration";
import { desktopLogger } from "./desktop-logger";

const DEFAULT_GLOBAL_SHORTCUT = "Alt+Space";

export class GlobalShortcutService {
  private registeredAccelerator: string | null = null;
  private readonly listeners = new Set<(accelerator: string) => void>();

  constructor(
    private readonly configuration: ClaudeAppConfigurationRepository,
    private readonly onTriggered: () => void,
  ) {}

  async initialize(): Promise<void> {
    const accelerator = await this.getGlobalShortcut();
    const failure = this.replaceRegistration(accelerator);
    if (failure !== null) {
      desktopLogger.warning("Failed to register configured global shortcut", {
        accelerator,
        failure,
      });
    }
  }

  async getGlobalShortcut(): Promise<string> {
    const configuration = await this.configuration.getConfiguration();
    return typeof configuration.globalShortcut === "string"
      ? configuration.globalShortcut
      : DEFAULT_GLOBAL_SHORTCUT;
  }

  async setGlobalShortcut(accelerator: string): Promise<void> {
    const failure = this.replaceRegistration(accelerator);
    if (failure !== null) {
      throw new Error(
        `Shortcut "${accelerator}" could not be registered: ${failure}`,
      );
    }
    await this.configuration.setGlobalShortcut(accelerator);
    for (const listener of this.listeners) listener(accelerator);
  }

  subscribe(listener: (accelerator: string) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  dispose(): void {
    if (this.registeredAccelerator !== null) {
      globalShortcut.unregister(this.registeredAccelerator);
      this.registeredAccelerator = null;
    }
    this.listeners.clear();
  }

  private replaceRegistration(
    accelerator: string,
  ): "invalid-accelerator" | "registration-failed" | null {
    const previous = this.registeredAccelerator;
    if (previous !== null) {
      globalShortcut.unregister(previous);
      this.registeredAccelerator = null;
    }
    if (!isValidElectronAccelerator(accelerator)) {
      this.restore(previous);
      return "invalid-accelerator";
    }
    try {
      if (!globalShortcut.register(accelerator, this.onTriggered)) {
        this.restore(previous);
        return "registration-failed";
      }
      this.registeredAccelerator = accelerator;
      return null;
    } catch {
      this.restore(previous);
      return "invalid-accelerator";
    }
  }

  private restore(accelerator: string | null): void {
    if (accelerator === null) return;
    try {
      if (globalShortcut.register(accelerator, this.onTriggered)) {
        this.registeredAccelerator = accelerator;
      }
    } catch {}
  }
}
