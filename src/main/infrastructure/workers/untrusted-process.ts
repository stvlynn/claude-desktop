// Restored from ref/.vite/build/shell-path-worker/shellPathWorker.js

import path from "node:path";
import { spawn, type SpawnOptions } from "node:child_process";

const DEFAULT_MAX_BUFFER = 512 * 1024 * 1024;

export type SpawnAsyncOptions = SpawnOptions & {
  ignoreExitCode?: boolean;
  maxBuffer?: number;
  stdin?: string | Uint8Array;
  destroyStdioOnExit?: boolean;
  hardTimeoutMs?: number;
  signal?: AbortSignal;
};

export type SpawnAsyncResult = {
  stdout: string;
  stdoutBuffer: Buffer;
  stderr: string;
  stderrBuffer: Buffer;
  code: number | null;
};

function disclaimerBinaryPath(): string {
  const resourcesPath = (process as NodeJS.Process & { resourcesPath: string })
    .resourcesPath;
  return path.join(path.dirname(resourcesPath), "Helpers", "disclaimer");
}

function abortError(signal: AbortSignal, command: string): Error {
  return signal.reason instanceof Error
    ? signal.reason
    : new DOMException(`spawnAsync(${command}) aborted`, "AbortError");
}

export async function spawnUntrusted(
  command: string,
  args: string[] = [],
  options: SpawnAsyncOptions = {},
): Promise<SpawnAsyncResult> {
  const disclaimer = disclaimerBinaryPath();
  try {
    return await spawnDirect(disclaimer, [command, ...args], options);
  } catch (error) {
    if (
      options.signal?.aborted &&
      (error === options.signal.reason ||
        (error instanceof Error && error.name === "AbortError"))
    ) {
      if (disclaimer !== command && error !== options.signal.reason) {
        throw new DOMException(
          `spawnAsync(${command}) aborted (via disclaimer)`,
          "AbortError",
        );
      }
      throw error;
    }
    if (error instanceof Error) {
      if (error.message.includes("ENOENT")) {
        throw new Error(
          `Failed to spawn ${command} (disclaimer binary not found): ${error.message}`,
        );
      }
      throw new Error(
        `Failed to spawn ${command} (via disclaimer): ${error.message}`,
      );
    }
    throw error;
  }
}

export function spawnDirect(
  command: string,
  args: string[] = [],
  options: SpawnAsyncOptions = {},
): Promise<SpawnAsyncResult> {
  const {
    ignoreExitCode,
    maxBuffer = DEFAULT_MAX_BUFFER,
    stdin,
    destroyStdioOnExit,
    hardTimeoutMs,
    signal,
    ...spawnOptions
  } = options;
  if (signal?.aborted) return Promise.reject(abortError(signal, command));

  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      ...spawnOptions,
      stdio: [stdin !== undefined ? "pipe" : "ignore", "pipe", "pipe"],
    });
    if (stdin !== undefined && child.stdin) {
      child.stdin.on("error", () => undefined);
      child.stdin.end(stdin);
    }

    const stdoutChunks: Buffer[] = [];
    const stderrChunks: Buffer[] = [];
    let totalBytes = 0;
    let exceededBuffer = false;
    const collect = (chunks: Buffer[]) => (data: Buffer) => {
      totalBytes += data.length;
      if (totalBytes > maxBuffer) {
        exceededBuffer = true;
        child.kill();
      } else {
        chunks.push(data);
      }
    };
    child.stdout?.on("data", collect(stdoutChunks));
    child.stderr?.on("data", collect(stderrChunks));

    const processGroupId =
      process.platform !== "win32" &&
      spawnOptions.detached &&
      typeof child.pid === "number"
        ? child.pid
        : undefined;
    const killGroup = (killSignal: NodeJS.Signals) => {
      if (processGroupId !== undefined) {
        try {
          process.kill(-processGroupId, killSignal);
          return;
        } catch {}
      }
      child.kill(killSignal);
    };

    let aborted = false;
    const onAbort = () => {
      const exited = child.exitCode !== null || child.signalCode !== null;
      if (!exited) {
        aborted = true;
        child.kill(spawnOptions.killSignal);
      }
      if (processGroupId !== undefined) killGroup("SIGTERM");
      setTimeout(() => killGroup("SIGKILL"), 1_000).unref();
    };
    signal?.addEventListener("abort", onAbort, { once: true });

    let hardKilled = false;
    const hardTimer = hardTimeoutMs
      ? setTimeout(() => {
          hardKilled = true;
          killGroup("SIGKILL");
          child.stdout?.destroy();
          child.stderr?.destroy();
        }, hardTimeoutMs)
      : undefined;
    const cleanup = () => {
      if (hardTimer) clearTimeout(hardTimer);
      signal?.removeEventListener("abort", onAbort);
    };

    child.on("error", (error) => {
      cleanup();
      reject(new Error(`Failed to spawn ${command}: ${error.message}`));
    });
    child.on("exit", () => {
      if (child.killed && processGroupId !== undefined) {
        killGroup("SIGTERM");
        setTimeout(() => killGroup("SIGKILL"), 1_000).unref();
      }
      if (child.killed || destroyStdioOnExit) {
        setTimeout(() => {
          child.stdout?.destroy();
          child.stderr?.destroy();
        }, 1_000);
      }
    });
    child.on("close", (code) => {
      cleanup();
      if (aborted && signal) return reject(abortError(signal, command));
      if (exceededBuffer) {
        return reject(
          new Error(
            `${command} output exceeded maxBuffer limit (${maxBuffer} bytes)`,
          ),
        );
      }

      const stdoutBuffer = Buffer.concat(stdoutChunks);
      const stderrBuffer = Buffer.concat(stderrChunks);
      const rawStderr = stderrBuffer.toString();
      const result: SpawnAsyncResult = {
        stdout: stdoutBuffer.toString(),
        stdoutBuffer,
        stderrBuffer,
        stderr: hardKilled
          ? `${rawStderr}${rawStderr ? "\n" : ""}killed after ${hardTimeoutMs}ms hard deadline`
          : rawStderr,
        code,
      };
      if (!ignoreExitCode && code !== 0) {
        const error = new Error(
          `${command} exited with code ${code}: ${result.stderr || result.stdout}`,
        ) as Error & { result?: SpawnAsyncResult };
        error.result = result;
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
