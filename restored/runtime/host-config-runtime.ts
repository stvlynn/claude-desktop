// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Host config helper initialization.
import {
  Hn as initHostConfigHelpersRaw,
  Vn as hostConfigByIdSignalRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import { useScopedValue } from "./app-scope-hooks";

export type HostConfigRecord = {
  id: string;
  kind?: string;
} & Record<string, unknown>;

export const hostConfigByIdSignal = hostConfigByIdSignalRaw as unknown;

export function initHostConfigRuntime(): void {
  initHostConfigHelpersRaw();
}

export function initLocalHostConstantsRuntime(): void {
  // The original local-host constants initializer is a no-op in this bundle.
}

export function getHostConfigKey(hostConfig: HostConfigRecord): string {
  return hostConfig.id;
}

export function useHostConfigById<THostConfig extends HostConfigRecord>(
  hostId: string,
): THostConfig {
  return useScopedValue<THostConfig>(hostConfigByIdSignal, hostId);
}
