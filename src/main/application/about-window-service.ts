// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Application service backing the native About window renderer surface.

import { shell } from "electron";
import type { AboutWindowBuildProps } from "../../renderer/shared/api/claude-desktop-api";

const APP_NAME = "Claude";
const HELP_URL = "https://support.anthropic.com";
const SUPPORT_URL = "https://support.anthropic.com";

export function getAppName(): string {
  return APP_NAME;
}

export function getBuildProps(): AboutWindowBuildProps {
  return {
    commitHash: process.env.CLAUDE_COMMIT_HASH?.trim() || "unknown",
    commitTimestamp: process.env.CLAUDE_COMMIT_TIMESTAMP?.trim() || "unknown",
  };
}

export function openHelp(): void {
  void shell.openExternal(HELP_URL);
}

export function getSupport(): void {
  void shell.openExternal(SUPPORT_URL);
}
