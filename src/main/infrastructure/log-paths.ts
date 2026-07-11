// @ts-nocheck
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
      return "com.openai.codex.agent";
    case BuildFlavors.Dev:
      return "com.openai.codex.dev";
    case BuildFlavors.Nightly:
      return "com.openai.codex.nightly";
    case BuildFlavors.InternalAlpha:
      return "com.openai.codex.alpha";
    case BuildFlavors.PublicBeta:
      return "com.openai.codex.beta";
    case BuildFlavors.Prod:
      return "com.openai.codex";
    default:
      return "com.openai.codex";
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
      "Codex",
      "Logs",
    );
  }

  if (platform === "linux") {
    return path.join(
      env.XDG_STATE_HOME ?? path.join(homeDir, ".local", "state"),
      "codex",
      "logs",
    );
  }

  return path.join(homeDir, ".codex", "logs");
}
