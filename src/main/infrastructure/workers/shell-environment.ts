// Restored from ref/.vite/build/shell-path-worker/shellPathWorker.js

import { existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { spawnUntrusted } from "./untrusted-process";

const SHELL_TIMEOUT_MS = 4_000;
const PATH_SENTINEL = "___CLAUDE_PATH_EXTRACT___";
const ENV_SENTINEL = "___CLAUDE_ENV_EXTRACT___";
const PROBE_ONLY_ENV = {
  DISABLE_AUTO_UPDATE: "true",
  ZSH_DISABLE_COMPFIX: "true",
  CLAUDE_DESKTOP_RESOLVING_ENVIRONMENT: "1",
} as const;
const PROBE_SESSION_VARIABLES = ["PWD", "OLDPWD", "SHLVL", "_"] as const;
const COMMON_SHELLS = [
  { path: "/bin/zsh", hints: [path.resolve(homedir(), ".zshrc")] },
  { path: "/bin/bash", hints: [path.resolve(homedir(), ".bashrc")] },
  { path: "/bin/sh" },
] as const;

export function getSafeShell(): string {
  const environmentShell = process.env.SHELL;
  if (environmentShell?.startsWith("/") && existsSync(environmentShell)) {
    return environmentShell;
  }
  for (const shell of COMMON_SHELLS) {
    if (
      existsSync(shell.path) &&
      ("hints" in shell ? shell.hints.some((hint) => existsSync(hint)) : false)
    ) {
      return shell.path;
    }
  }
  return (
    COMMON_SHELLS.find((shell) => existsSync(shell.path))?.path ?? "/bin/sh"
  );
}

function shellProbeEnvironment(): NodeJS.ProcessEnv {
  return {
    HOME: process.env.HOME,
    PATH: process.env.PATH,
    SHELL: process.env.SHELL,
    USER: process.env.USER,
    ...PROBE_ONLY_ENV,
  };
}

export async function extractPathFromShell(): Promise<string> {
  if (process.platform === "win32") return process.env.PATH || "";
  const { stdout } = await spawnUntrusted(
    getSafeShell(),
    [
      "-l",
      "-i",
      "-c",
      `/bin/sh -c 'printf "%s%s\\n" "${PATH_SENTINEL}" "$PATH"'`,
    ],
    { timeout: SHELL_TIMEOUT_MS, env: shellProbeEnvironment() },
  );
  return (
    stdout.match(new RegExp(`${PATH_SENTINEL}(.*)$`, "m"))?.[1]?.trim() ||
    process.env.PATH ||
    ""
  );
}

export function parseShellEnvironmentDump(
  output: string,
): Record<string, string> {
  const result: Record<string, string> = {};
  let currentKey: string | null = null;
  let currentValue: string | null = null;
  const flush = () => {
    if (currentKey !== null && currentValue !== null) {
      result[currentKey] = currentValue;
    }
  };

  for (const line of output.split("\n")) {
    const equalsIndex = line.indexOf("=");
    if (
      equalsIndex > 0 &&
      /^[A-Za-z_][A-Za-z0-9_]*$/.test(line.slice(0, equalsIndex))
    ) {
      flush();
      currentKey = line.slice(0, equalsIndex);
      currentValue = line.slice(equalsIndex + 1);
    } else if (equalsIndex > 0) {
      flush();
      currentKey = null;
      currentValue = null;
    } else if (currentKey !== null && currentValue !== null) {
      currentValue += `\n${line}`;
    }
  }
  flush();

  for (const [key, injectedValue] of Object.entries(PROBE_ONLY_ENV)) {
    if (result[key] === injectedValue) delete result[key];
  }
  for (const key of PROBE_SESSION_VARIABLES) delete result[key];
  return result;
}

export async function extractShellEnvironment(): Promise<
  Record<string, string>
> {
  if (process.platform === "win32") {
    return Object.fromEntries(
      Object.entries(process.env).filter(
        (entry): entry is [string, string] => entry[1] !== undefined,
      ),
    );
  }
  const { stdout } = await spawnUntrusted(
    getSafeShell(),
    ["-l", "-i", "-c", `echo "${ENV_SENTINEL}"; env`],
    { timeout: SHELL_TIMEOUT_MS, env: shellProbeEnvironment() },
  );
  const sentinelIndex = stdout.indexOf(ENV_SENTINEL);
  if (sentinelIndex === -1) return { PATH: process.env.PATH || "" };

  const environment = parseShellEnvironmentDump(
    stdout.slice(sentinelIndex + ENV_SENTINEL.length + 1).trim(),
  );
  environment.PATH ||= process.env.PATH || "";
  return environment;
}
