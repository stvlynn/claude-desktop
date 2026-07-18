// Restored from ref/.vite/build/worker.js
// Stub for the worker feature-context type used by the Git worker dispatcher.
// The full Computer Use native bridge implementation is not restored because it
// depends on the `objc-js` package, which is not in package.json.

import type {
  WorkerExecutionHostClient,
  WorkerExecutionHostConfig,
} from "./worker-execution-host-client";

export type WorkerRequestDispatcher = {
  handleRequest(request: { id: string; method: string; params?: unknown }): void;
  handleCancel(requestId: string): void;
};

export type ShortcutLink = {
  target?: string | null;
  icon?: string | null;
};

export type WorkerFeatureContext = {
  computerUseCapture?: {
    getNextCaptureUpdate?(
      params: Record<string, unknown>,
    ): Promise<Record<string, unknown> & { type: string }>;
    startCapture?(params: Record<string, unknown>): Promise<unknown>;
  };
  git?: {
    createExecutionHost(
      hostConfig: WorkerExecutionHostConfig,
    ): WorkerExecutionHostClient;
  };
  openIn?: {
    readShortcutLink(path: string): Promise<ShortcutLink>;
  };
};
