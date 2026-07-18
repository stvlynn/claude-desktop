// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Typed compatibility barrel for query/scope utilities.

import { recordProductEvent as recordProductEventRaw } from "./query-scope-runtime/index";

export * from "../../features/automation/automation-schedule/index";

export const recordProductEvent = recordProductEventRaw as (
  store: unknown,
  event: unknown,
  payload?: Record<string, unknown>,
) => void;
