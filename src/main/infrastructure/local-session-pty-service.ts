// Restored from ref/.vite/build/index.js

import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { EventEmitter } from "node:events";
import * as pty from "node-pty";
import type { IPty } from "node-pty";

const require = createRequire(import.meta.url);
const bufferLimit = 256 * 1024;

type Terminal = { process: IPty; buffer: string };

export class LocalSessionPtyService extends EventEmitter {
  private readonly resumed = new Map<string, Terminal>();
  private readonly shells = new Map<string, Terminal>();

  startResumePty(
    sessionId: string,
    sdkSessionId: string,
    cwd: string,
    model: string | undefined,
    cols = 80,
    rows = 24,
  ): boolean {
    if (this.resumed.has(sessionId)) return true;
    const args = ["--resume", sdkSessionId];
    if (model) args.push("--model", model);
    const process = this.spawn(claudeExecutable(), args, cwd, cols, rows);
    const terminal = { process, buffer: "" };
    this.resumed.set(sessionId, terminal);
    process.onData((data) => {
      if (this.resumed.get(sessionId) !== terminal) return;
      this.emit("event", { type: "pty_data", sessionId, data });
    });
    process.onExit(({ exitCode }) => {
      if (this.resumed.get(sessionId) !== terminal) return;
      this.resumed.delete(sessionId);
      this.emit("event", { type: "pty_close", sessionId, code: exitCode });
    });
    return true;
  }

  stopResumePty(sessionId: string): void {
    this.stop(this.resumed, sessionId, "pty_close");
  }
  resizeResumePty(sessionId: string, cols: number, rows: number): void {
    this.resize(this.resumed.get(sessionId), cols, rows);
  }
  writeResumePty(sessionId: string, data: string): void {
    this.resumed.get(sessionId)?.process.write(data);
  }

  startShellPty(
    key: string,
    cwd: string,
    cols = 80,
    rows = 24,
  ): { ok: true; buffered?: string; cols?: number; rows?: number } {
    const existing = this.shells.get(key);
    if (existing) {
      const oldCols = existing.process.cols;
      const oldRows = existing.process.rows;
      this.resize(existing, cols, rows);
      return {
        ok: true,
        buffered: existing.buffer,
        cols: oldCols,
        rows: oldRows,
      };
    }
    const { executable, args } = defaultShell();
    const process = this.spawn(executable, args, cwd, cols, rows);
    const terminal = { process, buffer: "" };
    this.shells.set(key, terminal);
    process.onData((data) => {
      if (this.shells.get(key) !== terminal) return;
      terminal.buffer = `${terminal.buffer}${data}`.slice(-bufferLimit);
      this.emit("event", { type: "shell_pty_data", sessionId: key, data });
    });
    process.onExit(({ exitCode }) => {
      if (this.shells.get(key) !== terminal) return;
      this.shells.delete(key);
      this.emit("event", {
        type: "shell_pty_close",
        sessionId: key,
        code: exitCode,
      });
    });
    return { ok: true };
  }

  stopShellPty(key: string): void {
    this.stop(this.shells, key, "shell_pty_close");
  }
  resizeShellPty(key: string, cols: number, rows: number): void {
    this.resize(this.shells.get(key), cols, rows);
  }
  writeShellPty(key: string, data: string): void {
    this.shells.get(key)?.process.write(data);
  }
  getShellPtyBuffer(key: string): string | null {
    return this.shells.get(key)?.buffer ?? null;
  }
  getBusyShellPtyKeys(sessionId: string): string[] {
    return [...this.shells.keys()].filter(
      (key) => key === sessionId || key.startsWith(`${sessionId}::`),
    );
  }

  dispose(): void {
    for (const terminal of [...this.resumed.values(), ...this.shells.values()])
      kill(terminal.process);
    this.resumed.clear();
    this.shells.clear();
  }

  private spawn(
    executable: string,
    args: string[],
    cwd: string,
    cols: number,
    rows: number,
  ): IPty {
    return pty.spawn(executable, args, {
      name: "xterm-256color",
      cols: dimension(cols, 80),
      rows: dimension(rows, 24),
      cwd: path.resolve(cwd),
      env: cleanEnvironment({
        ...process.env,
        TERM: "xterm-256color",
        COLORTERM: "truecolor",
      }),
    });
  }

  private stop(
    collection: Map<string, Terminal>,
    key: string,
    eventType: "pty_close" | "shell_pty_close",
  ): void {
    const terminal = collection.get(key);
    if (!terminal) return;
    collection.delete(key);
    kill(terminal.process);
    this.emit("event", { type: eventType, sessionId: key });
  }

  private resize(terminal: Terminal | undefined, cols: number, rows: number) {
    terminal?.process.resize(dimension(cols, 80), dimension(rows, 24));
  }
}

function defaultShell(): { executable: string; args: string[] } {
  if (process.platform === "win32") {
    return { executable: process.env.COMSPEC ?? "powershell.exe", args: [] };
  }
  return {
    executable: process.env.SHELL ?? "/bin/zsh",
    args: ["-l"],
  };
}

function claudeExecutable(): string {
  const platform = process.platform === "win32" ? "win32" : process.platform;
  const packageName = `@anthropic-ai/claude-agent-sdk-${platform}-${process.arch}`;
  const packageJson = require.resolve(`${packageName}/package.json`);
  return path.join(
    path.dirname(packageJson),
    process.platform === "win32" ? "claude.exe" : "claude",
  );
}

function cleanEnvironment(env: NodeJS.ProcessEnv): Record<string, string> {
  return Object.fromEntries(
    Object.entries(env).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string",
    ),
  );
}

function dimension(value: number, fallback: number): number {
  return Number.isInteger(value) && value > 0
    ? Math.min(value, 1000)
    : fallback;
}

function kill(processHandle: IPty): void {
  try {
    if (processHandle.pid > 0 && process.platform !== "win32") {
      process.kill(-processHandle.pid, "SIGKILL");
    }
  } catch {}
  try {
    processHandle.kill();
  } catch {}
}
