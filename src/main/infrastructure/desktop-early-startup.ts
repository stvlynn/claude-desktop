// Restored from ref/.vite/build/index.js

import { spawn } from "node:child_process";
import path from "node:path";
import { app, protocol, systemPreferences } from "electron";

const CLAUDE_PROTOCOL = "claude";

const privilegedSchemes: Electron.CustomScheme[] = [
  {
    scheme: "cowork-artifact",
    privileges: { standard: true, secure: true, supportFetchAPI: true },
  },
  {
    scheme: "cowork-file",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      stream: true,
    },
  },
  {
    scheme: "claude-media",
    privileges: { standard: true, secure: true, stream: true, bypassCSP: true },
  },
  {
    scheme: "claude-simulator",
    privileges: {
      standard: true,
      secure: true,
      stream: true,
      bypassCSP: true,
      supportFetchAPI: true,
      corsEnabled: true,
    },
  },
  {
    scheme: "app",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      allowServiceWorkers: true,
    },
  },
];

export function handleWindowsSquirrelStartup(
  platform: NodeJS.Platform = process.platform,
  argv: readonly string[] = process.argv,
  executablePath: string = process.execPath,
): boolean {
  if (platform !== "win32") return false;
  const command = argv[1];
  const executableName = path.basename(executablePath);
  const updateExecutable = path.resolve(
    path.dirname(executablePath),
    "..",
    "Update.exe",
  );

  switch (command) {
    case "--squirrel-install":
    case "--squirrel-updated":
      spawn(
        updateExecutable,
        [
          `--createShortcut=${executableName}`,
          "--shortcut-locations=StartMenu",
        ],
        { detached: true },
      );
      return true;
    case "--squirrel-uninstall":
      spawn(updateExecutable, [`--removeShortcut=${executableName}`], {
        detached: true,
      });
      return true;
    case "--squirrel-obsolete":
      return true;
    default:
      return false;
  }
}

export function prepareClaudeElectronRuntime(): boolean {
  if (handleWindowsSquirrelStartup()) {
    app.quit();
    return false;
  }

  if (process.platform === "darwin") {
    systemPreferences.setUserDefault(
      "NSAutoFillHeuristicsEnabled",
      "boolean",
      false,
    );
  }
  protocol.registerSchemesAsPrivileged(privilegedSchemes);
  return true;
}

export function updateClaudeProtocolClient(disabled: boolean): void {
  if (disabled) app.removeAsDefaultProtocolClient(CLAUDE_PROTOCOL);
  else app.setAsDefaultProtocolClient(CLAUDE_PROTOCOL);
}
