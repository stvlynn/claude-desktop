// Restored from ref/.vite/build/file-based-logger-DZ6052-3.js
// Platform-specific log directory resolution used by the file-based logger and
// feedback log archive.

import * as os from "node:os";
import * as path from "node:path";
import { BuildFlavors, type BuildFlavorValue } from "../domain/app-brand";
import { Platform } from "./file-based-logger-types";

export function bundleIdentifierForBuildFlavor(
  buildFlavor: BuildFlavorValue,
): string {
  switch (buildFlavor) {
    case BuildFlavors.Agent:
      return "com.anthropic.claude.agent";
    case BuildFlavors.Dev:
      return "com.anthropic.claude.dev";
    case BuildFlavors.Nightly:
      return "com.anthropic.claude.nightly";
    case BuildFlavors.InternalAlpha:
      return "com.anthropic.claude.alpha";
    case BuildFlavors.PublicBeta:
      return "com.anthropic.claude.beta";
    case BuildFlavors.Prod:
      return "com.anthropic.claude";
    default:
      return "com.anthropic.claude";
  }
}

export function resolveLogRootDir(
  buildFlavor?: BuildFlavorValue | null,
  platform: Platform = process.platform,
): string {
  const env = process.env;
  const homeDir = os.homedir();

  const effectiveBuildFlavor =
    buildFlavor ??
    BuildFlavors.parse(process.env.BUILD_FLAVOR) ??
    BuildFlavors.Prod;

  if (platform === "darwin") {
    return path.join(
      homeDir,
      "Library",
      "Logs",
      bundleIdentifierForBuildFlavor(effectiveBuildFlavor),
    );
  }

  if (platform === "win32") {
    return path.join(
      env.LOCALAPPDATA ?? path.join(homeDir, "AppData", "Local"),
      "Claude",
      "Logs",
    );
  }

  if (platform === "linux") {
    return path.join(
      env.XDG_STATE_HOME ?? path.join(homeDir, ".local", "state"),
      "claude",
      "logs",
    );
  }

  return path.join(homeDir, ".claude", "logs");
}
