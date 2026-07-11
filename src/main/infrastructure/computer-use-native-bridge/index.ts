// @ts-nocheck
// Restored from ref/.vite/build/worker.js
// Barrel for the macOS Apple Event Computer Use capture bridge.

export type {
  AppleEventRuntime,
  ComputerUseCaptureUpdate,
  ComputerUseStartCaptureResult,
} from "./types";
export {
  getAppleEventRuntime,
  createKernelProcessDescriptor,
  putAppleEventUtf8Param,
  putAppleEventDataParam,
  getAppleEventParamPtr,
  assertAppleEventStatus,
  formatAppleEventStatus,
  fourCharCode,
  fourCharString,
  createAppleEventDescriptorBuffer,
} from "./apple-event-runtime";
export {
  startComputerUseCaptureNativeBridge,
  getNextComputerUseCaptureUpdate,
} from "./bridge";
