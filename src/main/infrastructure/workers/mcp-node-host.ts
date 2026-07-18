// Restored from ref/.vite/build/mcp-runtime/nodeHost.js

import path from "node:path";
import { Readable } from "node:stream";
import { StringDecoder } from "node:string_decoder";
import { pathToFileURL } from "node:url";
import {
  getUtilityProcessParentPort,
  registerUtilityProcessExitHandlers,
  type UtilityProcessMessagePort,
} from "./utility-process-port";

type WritableChunk = string | Uint8Array;
type WriteCallback = (error?: Error | null) => void;
type NodeHostMessage =
  { type: "stdin"; data: string } | { type: string; [key: string]: unknown };

let parentMessagePort: UtilityProcessMessagePort | undefined;
const rawStderrWrite = process.stderr.write.bind(process.stderr);
const stdoutDecoder = new StringDecoder("utf8");
const stderrDecoder = new StringDecoder("utf8");

export function decodeNodeHostChunk(
  decoder: StringDecoder,
  chunk: WritableChunk,
): string {
  return typeof chunk === "string"
    ? chunk
    : decoder.write(
        Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength),
      );
}

export function postNodeHostMessage(message: unknown): void {
  try {
    parentMessagePort?.postMessage(message);
  } catch (error) {
    try {
      rawStderrWrite(`[nodeHost] postToParent failed: ${String(error)}\n`);
    } catch {
      // stderr may already be torn down during process exit.
    }
  }
}

export function reportNodeHostFatal(kind: string, reason: unknown): void {
  const error = reason instanceof Error ? reason : new Error(String(reason));
  postNodeHostMessage({
    type: "fatal-error",
    kind,
    message: error.message,
    stack: typeof error.stack === "string" ? error.stack : undefined,
  });
  console.error(`[nodeHost] ${kind}:`, error.message);
  setImmediate(() => process.exit(1));
}

function resolveWriteCallback(
  encodingOrCallback: BufferEncoding | WriteCallback | undefined,
  callback: WriteCallback | undefined,
): WriteCallback | undefined {
  return typeof encodingOrCallback === "function"
    ? encodingOrCallback
    : callback;
}

export function installNodeHostOutputForwarding(): void {
  const stdoutWrite = (
    chunk: WritableChunk,
    encodingOrCallback?: BufferEncoding | WriteCallback,
    callback?: WriteCallback,
  ): boolean => {
    const content = decodeNodeHostChunk(stdoutDecoder, chunk);
    if (content.length > 0) {
      postNodeHostMessage({ type: "stdout", content });
    }
    const writeCallback = resolveWriteCallback(encodingOrCallback, callback);
    if (writeCallback) process.nextTick(writeCallback);
    return true;
  };
  process.stdout.write = stdoutWrite as typeof process.stdout.write;

  const originalStderrWrite = process.stderr.write.bind(process.stderr);
  const stderrWrite = (
    chunk: WritableChunk,
    encodingOrCallback?: BufferEncoding | WriteCallback,
    callback?: WriteCallback,
  ): boolean => {
    const content = decodeNodeHostChunk(stderrDecoder, chunk);
    if (content.length > 0) {
      postNodeHostMessage({ type: "stderr", content });
    }
    return typeof encodingOrCallback === "function"
      ? originalStderrWrite(chunk, encodingOrCallback)
      : originalStderrWrite(chunk, encodingOrCallback, callback);
  };
  process.stderr.write = stderrWrite as typeof process.stderr.write;
}

export function installNodeHostStdinForwarding(
  port: UtilityProcessMessagePort,
): void {
  const stdinStream = new Readable({ read() {} });
  const methodNames = [
    "read",
    "push",
    "unshift",
    "pause",
    "resume",
    "pipe",
    "unpipe",
    "on",
    "once",
    "removeListener",
    "removeAllListeners",
    "setEncoding",
    "destroy",
    "isPaused",
  ] as const;
  const mutableStdin = process.stdin as unknown as Record<string, unknown>;
  const streamMethods = stdinStream as unknown as Record<string, unknown>;
  for (const methodName of methodNames) {
    const method = streamMethods[methodName];
    if (typeof method === "function") {
      mutableStdin[methodName] = method.bind(stdinStream);
    }
  }
  for (const propertyName of [
    "readableHighWaterMark",
    "readableLength",
    "destroyed",
    "readable",
  ] as const) {
    Object.defineProperty(process.stdin, propertyName, {
      get: () => stdinStream[propertyName],
      configurable: true,
    });
  }

  port.on("message", (event) => {
    const message = event.data as NodeHostMessage | null;
    if (message?.type === "stdin") stdinStream.push(`${message.data}\n`);
  });
}

export async function importNodeHostEntry(entryPoint: string): Promise<void> {
  const absolutePath = path.resolve(entryPoint);
  delete require.cache[absolutePath];
  await import(pathToFileURL(absolutePath).toString());
}

export function registerMcpNodeHost(
  entryPoint: string | undefined,
  entryArgs: string[],
): void {
  process.on("uncaughtException", (error) =>
    reportNodeHostFatal("uncaughtException", error),
  );
  process.on("unhandledRejection", (reason) =>
    reportNodeHostFatal("unhandledRejection", reason),
  );
  if (!entryPoint) {
    console.error("Error: No entry point specified");
    process.exit(1);
  }

  getUtilityProcessParentPort()?.once("message", (event) => {
    const init = event.data as { type?: unknown } | null;
    const port = event.ports?.[0];
    if (init?.type !== "init" || !port) {
      console.error("Error: Expected init message with MessagePort");
      process.exit(1);
    }

    parentMessagePort = port;
    installNodeHostOutputForwarding();
    installNodeHostStdinForwarding(port);
    port.start();
    process.argv = [
      process.platform === "win32" ? "node.exe" : "node",
      entryPoint,
      ...entryArgs,
    ];
    void importNodeHostEntry(entryPoint).catch((error: unknown) => {
      reportNodeHostFatal("import-failed", error);
    });
  });
  registerUtilityProcessExitHandlers();
}

const [entryPoint, ...entryArgs] = process.argv.slice(2);
registerMcpNodeHost(entryPoint, entryArgs);
