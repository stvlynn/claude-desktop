// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// App logger facade used by restored conversation modules.
import {
  N as appLogger,
  M as initLoggerRuntimeRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js";

export type AppLogger = {
  debug(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  error(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  warning(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
  info(
    message: string,
    fields?: {
      safe?: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ): void;
};

export function initAppLoggerRuntime(): void {
  initLoggerRuntimeRaw();
}

export { appLogger };
