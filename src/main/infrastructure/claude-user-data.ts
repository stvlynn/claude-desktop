// Restored from ref/.vite/build/index.pre.js

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
} from "node:fs";
import path from "node:path";
import type { App } from "electron";
import {
  CLAUDE_CONFIG_FILE_NAME,
  CLAUDE_THIRD_PARTY_SUFFIX,
  type ClaudeDesktopConfiguration,
  isThirdPartyConfiguration,
} from "../domain/claude-startup";

const LEGACY_THIRD_PARTY_FILES = [
  "config.json",
  CLAUDE_CONFIG_FILE_NAME,
  "developer_settings.json",
  "local-agent-mode-sessions",
  "claude-code-sessions",
  "configLibrary",
  "Claude Extensions Settings",
  "extensions-installations.json",
] as const;

function withThirdPartySuffix(value: string): string {
  return value.endsWith(CLAUDE_THIRD_PARTY_SUFFIX)
    ? value
    : `${value}${CLAUDE_THIRD_PARTY_SUFFIX}`;
}

export function resolveThirdPartyUserDataDirectory(app: App): string {
  if (process.env.CLAUDE_USER_DATA_DIR) return app.getPath("userData");
  if (process.platform === "win32" && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, "Claude-3p");
  }
  return withThirdPartySuffix(app.getPath("userData"));
}

export function readThirdPartyConfiguration(
  app: App,
): ClaudeDesktopConfiguration | null {
  try {
    const configurationPath = path.join(
      resolveThirdPartyUserDataDirectory(app),
      CLAUDE_CONFIG_FILE_NAME,
    );
    const parsed: unknown = JSON.parse(readFileSync(configurationPath, "utf8"));
    return typeof parsed === "object" && parsed != null
      ? (parsed as ClaudeDesktopConfiguration)
      : null;
  } catch {
    return null;
  }
}

export function migrateLegacyWindowsThirdPartyUserData(app: App): void {
  if (process.platform !== "win32" || !process.env.APPDATA) return;
  const legacyDirectory = path.join(process.env.APPDATA, "Claude-3p");
  const targetDirectory = resolveThirdPartyUserDataDirectory(app);
  if (existsSync(targetDirectory) || !existsSync(legacyDirectory)) return;

  try {
    renameSync(legacyDirectory, targetDirectory);
    return;
  } catch {
    try {
      mkdirSync(targetDirectory, { recursive: true, mode: 0o700 });
    } catch {
      return;
    }
  }

  for (const fileName of LEGACY_THIRD_PARTY_FILES) {
    try {
      const source = path.join(legacyDirectory, fileName);
      if (existsSync(source)) {
        cpSync(source, path.join(targetDirectory, fileName), {
          recursive: true,
        });
      }
    } catch {}
  }
}

export function configureClaudeUserData(app: App): {
  configuration: ClaudeDesktopConfiguration | null;
  deploymentMode: "1p" | "3p";
} {
  const explicitDirectory = process.env.CLAUDE_USER_DATA_DIR?.trim();
  if (explicitDirectory) {
    app.setPath("userData", explicitDirectory);
    app.setPath("logs", path.resolve(explicitDirectory, "Logs"));
  }

  migrateLegacyWindowsThirdPartyUserData(app);
  const configuration = readThirdPartyConfiguration(app);
  const isThirdParty = configuration
    ? isThirdPartyConfiguration(configuration)
    : false;
  if (!explicitDirectory && isThirdParty) {
    const directory = resolveThirdPartyUserDataDirectory(app);
    if (app.getPath("userData") !== directory) {
      app.setPath("userData", directory);
      try {
        mkdirSync(directory, { recursive: true, mode: 0o700 });
      } catch {}
      app.setPath("crashDumps", path.join(directory, "Crashpad"));
      if (process.platform === "darwin") {
        app.setAppLogsPath(withThirdPartySuffix(app.getPath("logs")));
      }
    }
  }

  return {
    configuration,
    deploymentMode: isThirdParty ? "3p" : "1p",
  };
}
