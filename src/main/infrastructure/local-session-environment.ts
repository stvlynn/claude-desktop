// Restored from ref/.vite/build/index.js

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { app, safeStorage } from "electron";

const MASK = "••••••";
const MASK_SEPARATOR = "...";
const PROTECTED_VARIABLES = [
  "PATH",
  "CLAUDE_CODE_ENTRYPOINT",
  "CLAUDE_CODE_OAUTH_TOKEN",
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "ANTHROPIC_CUSTOM_HEADERS",
  "ANTHROPIC_BASE_URL",
  "DISABLE_AUTOUPDATER",
  "CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES",
  "CLAUDE_CODE_DISABLE_CRON",
] as const;

type EnvironmentVariables = Record<string, string>;

function environmentFilePath(): string {
  return path.join(app.getPath("userData"), "ccd-environment-config.json");
}

function isEnvironmentVariables(value: unknown): value is EnvironmentVariables {
  return (
    typeof value === "object" &&
    value != null &&
    !Array.isArray(value) &&
    Object.values(value).every((entry) => typeof entry === "string")
  );
}

function isMasked(value: string): boolean {
  return (
    value === MASK ||
    (value.length === 17 && value.slice(10, -4) === MASK_SEPARATOR)
  );
}

function maskValue(value: string): string {
  return value.length < 17
    ? MASK
    : `${value.slice(0, 10)}${MASK_SEPARATOR}${value.slice(-4)}`;
}

async function readEncryptedEnvironment(): Promise<EnvironmentVariables> {
  if (!safeStorage.isEncryptionAvailable()) return {};
  try {
    const raw = JSON.parse(await readFile(environmentFilePath(), "utf8")) as {
      envVars?: unknown;
    };
    if (typeof raw.envVars !== "string" || raw.envVars.length === 0) return {};
    const decrypted = safeStorage.decryptString(
      Buffer.from(raw.envVars, "base64"),
    );
    const parsed: unknown = JSON.parse(decrypted);
    return isEnvironmentVariables(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function getMaskedLocalSessionEnvironment(): Promise<EnvironmentVariables> {
  const environment = await readEncryptedEnvironment();
  return Object.fromEntries(
    Object.entries(environment).map(([key, value]) => [key, maskValue(value)]),
  );
}

export async function saveLocalSessionEnvironment(
  incoming: EnvironmentVariables,
): Promise<{ success: true }> {
  if (!safeStorage.isEncryptionAvailable()) {
    throw new Error("Encryption not available on this system");
  }
  const existing = await readEncryptedEnvironment();
  const protectedNames = new Set(
    PROTECTED_VARIABLES.map((name) => name.toLowerCase()),
  );
  const next: EnvironmentVariables = {};
  for (const [key, value] of Object.entries(incoming)) {
    if (protectedNames.has(key.toLowerCase())) continue;
    if (isMasked(value)) {
      if (key in existing) next[key] = existing[key];
    } else {
      next[key] = value;
    }
  }
  const encrypted = safeStorage
    .encryptString(JSON.stringify(next))
    .toString("base64");
  const target = environmentFilePath();
  const temporary = `${target}.tmp`;
  await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
  await writeFile(
    temporary,
    `${JSON.stringify({ envVars: encrypted }, null, 2)}\n`,
    {
      encoding: "utf8",
      mode: 0o600,
    },
  );
  await rename(temporary, target);
  return { success: true };
}

export function parseEnvironmentVariables(
  value: unknown,
): EnvironmentVariables {
  if (!isEnvironmentVariables(value)) {
    throw new TypeError("Environment variables must be a string-to-string map");
  }
  return value;
}
