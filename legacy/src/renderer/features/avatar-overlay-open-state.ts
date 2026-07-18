// Restored from ref/webview/assets/app-initial~app-main~pets-settings-CPYQX7qb.js
// @ts-nocheck
// Shared state for whether the avatar overlay is open.
import {
  createAppScopedSignal,
  initAppScopeSignalRuntime,
} from "../shared/runtime/app-scope-runtime";
export const avatarOverlayOpenSignal = createAppScopedSignal<boolean>(false);
export function initAvatarOverlayOpenStateChunk(): void {
  initAppScopeSignalRuntime();
}
