// Restored from ref/.vite/build/index.js

import path from "node:path";
import { chmod, mkdir, writeFile } from "node:fs/promises";
import type { App } from "electron";

const launcherSource = `const { spawn } = require("node:child_process");
const encoded = process.env.CLAUDE_DESKTOP_SSH_CONFIG;
if (!encoded) throw new Error("Missing SSH launcher configuration");
const config = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
const quote = (value) => "'" + String(value).replace(/'/g, "'\\\"'\\\"'") + "'";
const remote = "cd " + quote(config.cwd) + " && exec claude " + process.argv.slice(2).map(quote).join(" ");
const args = ["-T", "-o", "BatchMode=yes", "-o", "ConnectTimeout=15"];
if (config.port) args.push("-p", String(config.port));
if (config.identity) args.push("-i", config.identity);
args.push("--", config.host, remote);
const child = spawn("ssh", args, { stdio: "inherit", env: process.env });
for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) process.on(signal, () => child.kill(signal));
child.once("exit", (code, signal) => signal ? process.kill(process.pid, signal) : process.exit(code ?? 1));
child.once("error", (error) => { console.error(error.message); process.exit(1); });
`;

export class SshClaudeLauncher {
  private readonly target: string;
  private readonly runtimeTarget: string;
  private ready?: Promise<string>;

  constructor(app: App) {
    const root = path.join(app.getPath("userData"), "runtime");
    this.target = path.join(root, "ssh-claude-launcher.sh");
    this.runtimeTarget = path.join(root, "ssh-claude-launcher.cjs");
  }

  executable(): Promise<string> {
    this.ready ??= this.materialize();
    return this.ready;
  }

  environment(config: Record<string, unknown>, cwd: string): string {
    const host = requiredHost(config.sshHost);
    const port = optionalPort(config.sshPort);
    const identity = optionalIdentity(config.sshIdentityFile);
    if (/\0|\r|\n/.test(cwd))
      throw new Error("Invalid remote working directory");
    return Buffer.from(
      JSON.stringify({ host, port, identity, cwd }),
      "utf8",
    ).toString("base64url");
  }

  private async materialize(): Promise<string> {
    await mkdir(path.dirname(this.target), { recursive: true, mode: 0o700 });
    await Promise.all([
      writeFile(
        this.target,
        '#!/bin/sh\nexec "$CLAUDE_DESKTOP_NODE_RUNTIME" "${0%/*}/ssh-claude-launcher.cjs" "$@"\n',
        { mode: 0o700 },
      ),
      writeFile(this.runtimeTarget, launcherSource, { mode: 0o600 }),
    ]);
    await chmod(this.target, 0o700);
    return this.target;
  }
}

function requiredHost(value: unknown): string {
  if (
    typeof value !== "string" ||
    !/^[A-Za-z0-9.@_:-]+$/.test(value) ||
    value.startsWith("-")
  )
    throw new Error("Invalid SSH host");
  return value;
}

function optionalPort(value: unknown): number | undefined {
  if (value === undefined) return undefined;
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    value < 1 ||
    value > 65_535
  )
    throw new Error("Invalid SSH port");
  return value;
}

function optionalIdentity(value: unknown): string | undefined {
  if (value === undefined) return undefined;
  if (
    typeof value !== "string" ||
    value.startsWith("-") ||
    /[\0\r\n]/.test(value)
  )
    throw new Error("Invalid SSH identity file");
  return value;
}
