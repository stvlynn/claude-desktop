// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// @ts-nocheck
// Barrel for the thread find bar compound component and initializer.
import { once } from "../../shared/runtime/commonjs-interop";
import { initButtonComponentPrimitives } from "../../shared/ui/button";
import { initBrowserWindowIconChunk } from "../../shared/icons/browser-window-icon";
import { initChevronDownIcon } from "../../shared/icons/chevron-icon";
import { initXIcon } from "../../shared/icons/x-icon";
import { ThreadFindBar } from "./thread-find-bar-parts/surface";

export { ThreadFindBar };

export const initThreadFindBarChunk = once(() => {
  initButtonComponentPrimitives();
  initBrowserWindowIconChunk();
  initChevronDownIcon();
  initXIcon();
});
