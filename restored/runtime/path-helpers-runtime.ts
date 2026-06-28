// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Path helpers shared by local conversation environment surfaces.
import {
  OL as normalizeWorkspaceBrowserRootRaw,
  Dj as joinPathRaw,
} from "../vendor/appg-thread-shared-runtime";
import { initAppgRouteAndIntlRuntime } from "./appg-shared-runtime-initializers";

export function initPathHelpersRuntime(): void {
  initAppgRouteAndIntlRuntime();
}

export function joinPath(...parts: string[]): string {
  return joinPathRaw(...parts);
}

export function normalizeWorkspaceBrowserRoot(path: string): string {
  return normalizeWorkspaceBrowserRootRaw(path);
}
