// Restored from ref/.vite/build/transcript-search-worker/transcriptSearchWorker.js

export type UtilityProcessMessageEvent<T> = {
  data: T;
  ports?: UtilityProcessMessagePort[];
};

export type UtilityProcessMessagePort = {
  on(
    event: "message",
    listener: (event: UtilityProcessMessageEvent<unknown>) => void,
  ): void;
  postMessage(message: unknown): void;
  start(): void;
};

export type UtilityProcessParentPort = {
  once(
    event: "message",
    listener: (event: UtilityProcessMessageEvent<unknown>) => void,
  ): void;
};

export function getUtilityProcessParentPort():
  UtilityProcessParentPort | undefined {
  return (
    process as NodeJS.Process & {
      parentPort?: UtilityProcessParentPort;
    }
  ).parentPort;
}

export function postToUtilityProcessParent(
  port: UtilityProcessMessagePort,
  message: unknown,
): void {
  try {
    port.postMessage(message);
  } catch {
    // The parent may have exited while an asynchronous operation was finishing.
  }
}

export function registerUtilityProcessExitHandlers(): void {
  process.on("SIGTERM", () => process.exit(0));
  process.on("SIGINT", () => process.exit(0));
}
