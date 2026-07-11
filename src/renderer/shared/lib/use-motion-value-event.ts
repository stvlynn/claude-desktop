// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Framer Motion's useMotionValueEvent helper: subscribe during insertion
// effects so style-bound motion values see updates before layout effects run.
import React from "react";
import type { MotionValue, MotionValueEventCallbacks } from "framer-motion";

function useMotionValueEvent<V, EventName extends keyof MotionValueEventCallbacks<V>>(
  motionValue: MotionValue<V>,
  eventName: EventName,
  callback: MotionValueEventCallbacks<V>[EventName],
): void {
  React.useInsertionEffect(
    () => motionValue.on(eventName, callback),
    [motionValue, eventName, callback],
  );
}

export { useMotionValueEvent };
