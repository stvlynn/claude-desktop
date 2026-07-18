// Restored from ref/.vite/build/index.js

import { systemPreferences, type App } from "electron";
import {
  evaluateSupportedAppFeatures,
  type SupportedAppFeatures,
} from "../domain/app-features";
import type { ClaudeAppConfigurationRepository } from "../infrastructure/claude-app-configuration";
import { readThirdPartyConfiguration } from "../infrastructure/claude-user-data";

type ObjectMap = Record<string, unknown>;

function objectValue(value: unknown): ObjectMap {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as ObjectMap)
    : {};
}

function booleanValue(
  object: ObjectMap,
  key: string,
  fallback: boolean,
): boolean {
  return typeof object[key] === "boolean" ? object[key] : fallback;
}

function parseSystemVersion(): {
  macOsMajor: number;
  windowsBuild?: number;
} {
  const parts = process
    .getSystemVersion()
    .split(".")
    .map((part) => Number.parseInt(part.match(/^\d+/)?.[0] ?? "0", 10));
  return {
    macOsMajor: process.platform === "darwin" ? (parts[0] ?? 0) : 0,
    windowsBuild: process.platform === "win32" ? parts[2] : undefined,
  };
}

export class AppFeaturesService {
  constructor(
    private readonly app: App,
    private readonly configuration: ClaudeAppConfigurationRepository,
  ) {}

  async getSupportedFeatures(): Promise<SupportedAppFeatures> {
    const preferences = await this.configuration.getPreferences();
    const managed = objectValue(readThirdPartyConfiguration(this.app));
    const coworkSurface = objectValue(managed.coworkSurface);
    const codeSurface = objectValue(managed.codeSurface);
    const chatSurface = objectValue(managed.chatSurface);
    const workspace = objectValue(managed.workspace);
    const disabledTools = Array.isArray(managed.disabledTools)
      ? managed.disabledTools
      : [];
    const { macOsMajor, windowsBuild } = parseSystemVersion();
    const isWayland =
      process.platform === "linux" &&
      process.env.XDG_SESSION_TYPE?.toLowerCase() === "wayland";

    return evaluateSupportedAppFeatures({
      platform: process.platform,
      arch: process.arch,
      macOsMajor,
      windowsBuild,
      isPackaged: this.app.isPackaged,
      isWindowsStore: process.windowsStore === true,
      microphoneRestricted:
        process.platform === "darwin" &&
        systemPreferences.getMediaAccessStatus("microphone") === "restricted",
      waylandGlobalShortcutsPortalAvailable:
        !isWayland ||
        process.env.CLAUDE_GLOBAL_SHORTCUTS_PORTAL_AVAILABLE === "1",
      codeSurfaceEnabled: booleanValue(codeSurface, "enabled", true),
      coworkSurfaceEnabled: booleanValue(coworkSurface, "enabled", true),
      chatSurfaceEnabled: booleanValue(chatSurface, "enabled", false),
      chatAdvancedFileAnalysisEnabled: booleanValue(
        chatSurface,
        "advancedFileAnalysis",
        false,
      ),
      bashDisabled: disabledTools.includes("Bash"),
      secureVmEnabledByEnterprise: booleanValue(
        workspace,
        "secureVmEnabled",
        true,
      ),
      secureVmEnabledByUser: preferences.secureVmFeaturesEnabled,
    });
  }
}
