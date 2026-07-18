// Restored from ref/webview/assets/custom-avatars-query-Bodwj8U-.js
// Boundary facade for custom avatars, pet install state, and workspace dependency UI helpers.
// This is a lightweight src/ stub that wires existing runtime boundaries together so that
// restored clusters depending on feature-support-runtime can be promoted under FSD.

export {
  appScopeRoot,
  createAppScopeSignal as createSignal,
  initAppScope,
  initScopeRuntime,
} from "./app-scope.tsx";

export {
  getChunkModuleExports,
  getJsxRuntime,
  initReactRuntime,
} from "./app-main-host-runtime";

export {
  GlobeIcon as FallbackGlobeIcon,
  initGlobeIcon as initGlobeIconChunk,
} from "../icons/globe-icon";

export { initClassNameRuntime } from "../lib/class-names";

export { sendHostRequest } from "./host-request-runtime";

export { initVscodeBridgeRuntime as initPetInstallSignalRuntime } from "./platform-content-runtime";

// Placeholders for runtime initializers whose full producer has not yet been promoted.
export function initAppServicesRuntime(): void {}

export function initQueryDurationConstants(): void {}
