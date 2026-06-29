// Restored from ref/webview/assets/app-initial~app-main~personalization-settings~appearance-settings~general-settings-DCerg-br.js
// App info query signal backed by the app-host service bridge.
import {
  Ao as initScopeRuntimeRaw,
  Ts as createQuerySignalFamilyRaw,
  g as initQueryDurationConstantsRaw,
  h as queryDurations,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";
import {
  Ab as appHostServices,
  jb as initProjectsAppEntryChunkRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import {
  appScopeRoot,
  initSharedObjectAppScopeRoot,
} from "./shared-object-host-runtime";

export type AppInfoQueryResult = Awaited<
  ReturnType<typeof appHostServices.appInfo.get>
>;

export let appInfoQuerySignal: unknown;

export function initAppInfoQueryRuntime(): void {
  initScopeRuntimeRaw();
  initProjectsAppEntryChunkRaw();
  initSharedObjectAppScopeRoot();
  initQueryDurationConstantsRaw();

  appInfoQuerySignal ??= createQuerySignalFamilyRaw(appScopeRoot, () => ({
    queryKey: ["app-info"],
    queryFn: () => appHostServices.appInfo.get(),
    staleTime: queryDurations.INFINITE,
  }));
}
