// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// Motion sequence helper stub for app-shell panel animations.
// @ts-nocheck
import { animate, type AnimationPlaybackControls, type Transition } from "framer-motion";

export function appShellStateMtState(
  motionValue: { get(): number; set(value: number): void; stop?(): void },
  targetValue: number,
  transition: Transition = {},
): AnimationPlaybackControls {
  motionValue.stop?.();
  return animate(motionValue as any, targetValue, transition);
}
