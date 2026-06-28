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
} from "../boundaries/current-ref/appg-thread-shared-producer";
import { initAppScopeSignalRuntime } from "./app-scope-runtime";

export {
  animateSignalValue,
  createMotionSignal,
  createSignal,
  motion,
  reducedMotionPreferenceSignal,
  useMotionValueEvent,
};

export function initMotionSignalRuntime(): void {
  initAppScopeSignalRuntime();
  initMotionRuntime();
  initReducedMotionPreference();
}
