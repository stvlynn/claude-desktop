// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Motion values, animation helpers, and reduced-motion signal facade.
import {
  AP as motion,
  CP as animateSignalValue,
  LN as initReducedMotionPreference,
  OP as createMotionSignal,
  RN as reducedMotionPreferenceSignal,
  SP as initMotionRuntime,
  kP as useMotionValueEvent,
  yV as createSignal,
} from "../vendor/appg-thread-shared-runtime";
import { initAppScopeSignalRuntime } from "../runtime/app-scope-runtime";

export {
  animateSignalValue,
  createMotionSignal,
  createSignal,
  initMotionRuntime,
  motion,
  reducedMotionPreferenceSignal,
  useMotionValueEvent,
};

export function initMotionSignalRuntime(): void {
  initAppScopeSignalRuntime();
  initMotionRuntime();
  initReducedMotionPreference();
}
