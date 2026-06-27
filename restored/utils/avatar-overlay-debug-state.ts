// Restored from ref/webview/assets/avatar-overlay-debug-state-Bc374YAh.js
// Persistent debug flag for hiding the avatar overlay resize button.

import { once } from "../runtime/commonjs-interop";
import {
  MM as createPersistentSignal,
  jM as initPersistentSignalRuntime,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export let avatarOverlayResizeButtonHiddenSignal: unknown;

export const initAvatarOverlayDebugStateChunk = once(() => {
  initPersistentSignalRuntime();
  avatarOverlayResizeButtonHiddenSignal = createPersistentSignal(
    "avatar-overlay-resize-button-hidden",
    false,
  );
});
