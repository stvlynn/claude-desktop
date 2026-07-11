// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js
//
// Stable public runtime barrel for renderer entry points.
// New runtime pieces should be exported here so pages can import from a
// single `shared/runtime` path.

export {
  React,
  useIntl,
  objectWithoutProperties,
  shallowEqualObjects,
  mainWindowRuntimeExportMap,
} from "./main-window-runtime";

export { attachReactToElement } from "./attach-react-to-element";
export { applyInitialTheme, themeClassName } from "./theme";
export { claudeFontFamilies, injectFontPreloadLinks } from "./fonts";
export { preloadAndRun } from "./preload-helper";
