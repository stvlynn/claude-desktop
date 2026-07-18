// Restored from ref/.vite/build/index.js

import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import { homedir } from "node:os";
import * as path from "node:path";
import { promisify } from "node:util";
import { desktopLogger } from "../application/desktop-logger";

const execFileAsync = promisify(execFile);
const CURRENT_EXTENSION_ID = "fcoeoabgfenejglbffodgkkbkcdhcgfn";
const LEGACY_EXTENSION_ID = "dihbgbndebgnbjfmelmegjepbnkhlgni";
const EXTENSION_IDS = [CURRENT_EXTENSION_ID, LEGACY_EXTENSION_ID] as const;
const EXTERNAL_UPDATE_URL = "https://clients2.google.com/service/update2/crx";
const CHROME_ROOT = path.join(
  homedir(),
  "Library",
  "Application Support",
  "Google",
  "Chrome",
);

type JsonObject = Record<string, unknown>;

export type ChromeExtensionInstallResult =
  | { status: "succeeded" }
  | { status: "skipped" }
  | { status: "error"; error: string };

function objectMember(value: JsonObject, key: string): JsonObject {
  const member = value[key];
  return typeof member === "object" && member !== null && !Array.isArray(member)
    ? (member as JsonObject)
    : {};
}

function parseJsonObject(value: string): JsonObject | null {
  try {
    const parsed: unknown = JSON.parse(value);
    return typeof parsed === "object" &&
      parsed !== null &&
      !Array.isArray(parsed)
      ? (parsed as JsonObject)
      : null;
  } catch {
    return null;
  }
}

function cleanUninstallState(
  preferences: JsonObject,
  extensionId: string,
): string[] {
  const cleaned: string[] = [];
  const extensions = objectMember(preferences, "extensions");
  const externalUninstalls = extensions.external_uninstalls;
  if (
    Array.isArray(externalUninstalls) &&
    externalUninstalls.includes(extensionId)
  ) {
    extensions.external_uninstalls = externalUninstalls.filter(
      (entry) => entry !== extensionId,
    );
    cleaned.push("external_uninstalls");
  }

  const settings = objectMember(extensions, "settings");
  if (extensionId in settings) {
    delete settings[extensionId];
    cleaned.push("settings");
  }

  const installSignature = objectMember(extensions, "install_signature");
  const signatureIds = installSignature.ids;
  if (Array.isArray(signatureIds) && signatureIds.includes(extensionId)) {
    installSignature.ids = signatureIds.filter(
      (entry) => entry !== extensionId,
    );
    delete installSignature.signature;
    delete installSignature.expire_date;
    cleaned.push("install_signature");
  }

  const apps = objectMember(
    objectMember(preferences, "updateclientdata"),
    "apps",
  );
  if (extensionId in apps) {
    delete apps[extensionId];
    cleaned.push("updateclientdata");
  }
  return cleaned;
}

async function chromeProfiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(CHROME_ROOT, { withFileTypes: true });
    const profiles: string[] = [];
    for (const entry of entries) {
      if (
        !entry.isDirectory() ||
        (entry.name !== "Default" && !entry.name.startsWith("Profile "))
      ) {
        continue;
      }
      const profile = path.join(CHROME_ROOT, entry.name);
      try {
        await fs.readFile(path.join(profile, "Preferences"));
        profiles.push(profile);
      } catch {}
    }
    return profiles;
  } catch {
    return [];
  }
}

async function cleanPreferencesFile(
  filePath: string,
  extensionId: string,
  secure: boolean,
): Promise<string[]> {
  try {
    const preferences = parseJsonObject(await fs.readFile(filePath, "utf8"));
    if (preferences === null) return [];
    const cleaned = cleanUninstallState(preferences, extensionId);
    if (cleaned.length === 0) return [];

    if (secure) {
      const protection = objectMember(preferences, "protection");
      const macs = objectMember(protection, "macs");
      const extensions = objectMember(macs, "extensions");
      if (cleaned.includes("external_uninstalls")) {
        delete extensions.external_uninstalls;
      }
      const settings = objectMember(extensions, "settings");
      delete settings[extensionId];
      if (cleaned.includes("install_signature")) {
        delete extensions.install_signature;
      }
      const apps = objectMember(objectMember(macs, "updateclientdata"), "apps");
      delete apps[extensionId];
      delete protection.super_mac;
    }

    await fs.writeFile(filePath, JSON.stringify(preferences), "utf8");
    const prefix = secure ? "SecurePreferences" : "Preferences";
    return cleaned.map((key) => `${prefix}.${key}`);
  } catch {
    return [];
  }
}

async function cleanChromeUninstallState(extensionId: string): Promise<void> {
  for (const profile of await chromeProfiles()) {
    const regular = await cleanPreferencesFile(
      path.join(profile, "Preferences"),
      extensionId,
      false,
    );
    const secure = await cleanPreferencesFile(
      path.join(profile, "Secure Preferences"),
      extensionId,
      true,
    );
    if (regular.length > 0 || secure.length > 0) {
      desktopLogger.info("[Chrome Extension Install] cleaned uninstall state", {
        profile: path.basename(profile),
        fields: [...regular, ...secure],
      });
    }
  }
}

async function hasManifest(extensionRoot: string): Promise<boolean> {
  try {
    const versions = await fs.readdir(extensionRoot, { withFileTypes: true });
    return await Promise.any(
      versions
        .filter((entry) => entry.isDirectory())
        .map(async (entry) => {
          await fs.access(
            path.join(extensionRoot, entry.name, "manifest.json"),
          );
          return true;
        }),
    ).catch(() => false);
  } catch {
    return false;
  }
}

async function browserHasExtension(browserRoot: string): Promise<boolean> {
  try {
    const profiles = (await fs.readdir(browserRoot, { withFileTypes: true }))
      .filter(
        (entry) =>
          entry.isDirectory() &&
          (entry.name === "Default" || entry.name.startsWith("Profile ")),
      )
      .map((entry) => entry.name);
    for (const profile of profiles) {
      for (const extensionId of EXTENSION_IDS) {
        if (
          await hasManifest(
            path.join(browserRoot, profile, "Extensions", extensionId),
          )
        ) {
          return true;
        }
      }
    }
  } catch {}
  return false;
}

export class ChromeExtensionService {
  async isInstalled(): Promise<boolean> {
    if (process.platform !== "darwin") return false;
    const applicationSupport = path.join(
      homedir(),
      "Library",
      "Application Support",
    );
    const roots = [
      path.join(applicationSupport, "Google", "Chrome"),
      path.join(applicationSupport, "Microsoft Edge"),
    ];
    return (await Promise.all(roots.map(browserHasExtension))).some(Boolean);
  }

  async installExtension(): Promise<ChromeExtensionInstallResult> {
    if (process.platform !== "darwin") {
      return {
        status: "error",
        error: `Unsupported platform: ${process.platform}. Only macOS is supported.`,
      };
    }
    try {
      if (await this.isInstalled()) return { status: "skipped" };
      await cleanChromeUninstallState(CURRENT_EXTENSION_ID);
      const externalExtensions = path.join(CHROME_ROOT, "External Extensions");
      await fs.mkdir(externalExtensions, { recursive: true });
      await fs.writeFile(
        path.join(externalExtensions, `${CURRENT_EXTENSION_ID}.json`),
        JSON.stringify({ external_update_url: EXTERNAL_UPDATE_URL }, null, 2),
        "utf8",
      );
      return { status: "succeeded" };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      desktopLogger.error(
        "[Chrome Extension Install] failed to install extension",
        {
          error: message,
        },
      );
      return { status: "error", error: message };
    }
  }

  async restartChrome(): Promise<boolean> {
    if (process.platform !== "darwin") return false;
    try {
      await execFileAsync("/usr/bin/osascript", [
        "-e",
        'tell application "Google Chrome" to quit',
      ]);
      await new Promise((resolve) => setTimeout(resolve, 3_000));
      await cleanChromeUninstallState(CURRENT_EXTENSION_ID);
      await execFileAsync("/usr/bin/open", ["-a", "Google Chrome"]);
      return true;
    } catch (error) {
      desktopLogger.error(
        "[Chrome Extension Install] failed to restart Chrome",
        {
          error: error instanceof Error ? error.message : String(error),
        },
      );
      return false;
    }
  }
}
