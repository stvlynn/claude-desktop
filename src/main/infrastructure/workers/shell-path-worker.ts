// Restored from ref/.vite/build/shell-path-worker/shellPathWorker.js

import {
  extractPathFromShell,
  extractShellEnvironment,
} from "./shell-environment";
import {
  getUtilityProcessParentPort,
  postToUtilityProcessParent,
  registerUtilityProcessExitHandlers,
} from "./utility-process-port";

function postWorkerError(
  port: Parameters<typeof postToUtilityProcessParent>[0],
) {
  return (error: unknown) =>
    postToUtilityProcessParent(port, {
      type: "error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
}

export function registerShellPathWorker(): void {
  getUtilityProcessParentPort()?.once("message", (event) => {
    const port = event.ports?.[0];
    const init = event.data as { type?: unknown } | null;
    if (init?.type !== "init" || !port) return process.exit(1);

    port.on("message", (messageEvent) => {
      const request = messageEvent.data as { type?: unknown } | null;
      if (request?.type === "getPath") {
        void extractPathFromShell()
          .then((resolvedPath) =>
            postToUtilityProcessParent(port, {
              type: "result",
              path: resolvedPath,
            }),
          )
          .catch(postWorkerError(port));
      } else if (request?.type === "getEnvironment") {
        void extractShellEnvironment()
          .then((environment) =>
            postToUtilityProcessParent(port, {
              type: "envResult",
              env: environment,
            }),
          )
          .catch(postWorkerError(port));
      }
    });
    port.start();
  });
  registerUtilityProcessExitHandlers();
}

registerShellPathWorker();
