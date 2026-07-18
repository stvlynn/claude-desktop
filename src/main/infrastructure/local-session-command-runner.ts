// Restored from ref/.vite/build/index.js

import { spawn } from "node:child_process";

export type CommandResult = {
  code: number | null;
  signal: NodeJS.Signals | null;
  stdout: string;
  stderr: string;
};

export function runCommand(
  executable: string,
  args: string[],
  options: {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    input?: string;
    maxOutputBytes?: number;
    timeoutMs?: number;
  } = {},
): Promise<CommandResult> {
  const maxOutputBytes = options.maxOutputBytes ?? 16 * 1024 * 1024;
  return new Promise((resolve, reject) => {
    const child = spawn(executable, args, {
      cwd: options.cwd,
      env: options.env ?? process.env,
      stdio: "pipe",
      windowsHide: true,
    });
    const stdout: Buffer[] = [];
    const stderr: Buffer[] = [];
    let bytes = 0;
    let outputLimitExceeded = false;
    const append = (target: Buffer[], chunk: Buffer): void => {
      bytes += chunk.byteLength;
      if (bytes > maxOutputBytes) {
        outputLimitExceeded = true;
        child.kill();
        return;
      }
      target.push(chunk);
    };
    child.stdout.on("data", (chunk: Buffer) => append(stdout, chunk));
    child.stderr.on("data", (chunk: Buffer) => append(stderr, chunk));
    child.once("error", reject);
    const timer = setTimeout(() => child.kill(), options.timeoutMs ?? 60_000);
    child.once("close", (code, signal) => {
      clearTimeout(timer);
      if (outputLimitExceeded) {
        reject(new Error(`Command output exceeded ${maxOutputBytes} bytes`));
        return;
      }
      resolve({
        code,
        signal,
        stdout: Buffer.concat(stdout).toString("utf8"),
        stderr: Buffer.concat(stderr).toString("utf8"),
      });
    });
    if (options.input !== undefined) child.stdin.end(options.input);
    else child.stdin.end();
  });
}

export async function requireCommand(
  executable: string,
  args: string[],
  options: Parameters<typeof runCommand>[2] = {},
): Promise<CommandResult> {
  const result = await runCommand(executable, args, options);
  if (result.code !== 0) {
    throw new Error(
      result.stderr.trim() ||
        result.stdout.trim() ||
        `${executable} exited with code ${result.code ?? "unknown"}`,
    );
  }
  return result;
}
