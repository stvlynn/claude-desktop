// Restored from ref/.vite/build/index.pre.js

import { randomUUID } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { app } from "electron";
import {
  CLAUDE_APP_NAME,
  hasRemoteDebuggingArgument,
  isTrustedClaudeAiOverrideUrl,
} from "../domain/claude-startup";
import { verifyCdpAuthorization } from "../infrastructure/cdp-authorization";
import { configureClaudeUserData } from "../infrastructure/claude-user-data";
import { prepareClaudeElectronRuntime } from "../infrastructure/desktop-early-startup";
import {
  getDesktopInstallIdPath,
  initializeDesktopSentry,
} from "../infrastructure/desktop-sentry";
import { reportClaudeStartupFailure } from "../infrastructure/startup-error-handler";
import { bootstrapApp } from "./bootstrap";
import { desktopLogger } from "./desktop-logger";

function installBrokenPipeHandlers(): void {
  for (const stream of [process.stdout, process.stderr]) {
    stream.on?.("error", (error: NodeJS.ErrnoException) => {
      if (error.code !== "EPIPE") throw error;
    });
  }
}

function getDesktopInstallId(): string {
  const installIdPath = getDesktopInstallIdPath();
  try {
    if (existsSync(installIdPath)) {
      return Buffer.from(
        readFileSync(installIdPath, "utf8"),
        "base64",
      ).toString("utf8");
    }
    const installId = randomUUID();
    writeFileSync(
      installIdPath,
      Buffer.from(installId, "utf8").toString("base64"),
      { mode: 0o600 },
    );
    return installId;
  } catch (error) {
    desktopLogger.error("Failed to read or write install file", { error });
    return randomUUID();
  }
}

function enableApprovedClaudeAiOverride(): void {
  const override = process.env.CLAUDE_AI_URL;
  if (
    override &&
    isTrustedClaudeAiOverrideUrl(override) &&
    verifyCdpAuthorization()
  ) {
    (
      globalThis as typeof globalThis & {
        isDeveloperApprovedDevUrlOverrideEnabled?: boolean;
      }
    ).isDeveloperApprovedDevUrlOverrideEnabled = true;
  }
}

export function bootstrapClaudeApplication(): void {
  if (process.argv.includes("--version")) {
    process.stdout.write(`${app.getVersion()}\n`);
    return;
  }

  Error.stackTraceLimit = 20;
  process.env.NoDefaultCurrentDirectoryInExePath = "1";
  if (!app.isPackaged) app.setName(CLAUDE_APP_NAME);
  installBrokenPipeHandlers();

  if (hasRemoteDebuggingArgument(process.argv) && !verifyCdpAuthorization()) {
    process.exitCode = 1;
    return;
  }

  const startup = configureClaudeUserData(app);
  if (!prepareClaudeElectronRuntime()) return;
  enableApprovedClaudeAiOverride();
  process.on("uncaughtException", () => {});
  desktopLogger.info("Starting app", {
    appVersion: app.getVersion(),
    isPackaged: app.isPackaged,
    platform: process.platform,
    arch: process.arch,
    nodeVersion: process.versions.node,
  });
  initializeDesktopSentry({
    configuration: startup.configuration,
    deploymentMode: startup.deploymentMode,
    installId: getDesktopInstallId(),
  });

  try {
    bootstrapApp();
  } catch (error) {
    reportClaudeStartupFailure(error);
  }
}
