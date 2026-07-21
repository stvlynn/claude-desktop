// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

import * as Sentry from "@sentry/electron/renderer";

/**
 * Initialize the renderer SDK once, matching the bundle's telemetry gates:
 * skip when essential telemetry is disabled, when CI is set, or when the
 * one-shot `__SENTRY__RENDERER_INIT__` sentinel is already set.
 */
export function initializeRendererSentry(
  initializeSdk: () => void = Sentry.init,
): void {
  if (
    window.desktopEssentialTelemetryDisabled === true ||
    window.process?.env?.CI ||
    window.__SENTRY__RENDERER_INIT__
  ) {
    return;
  }

  // The renderer SDK itself sets __SENTRY__RENDERER_INIT__ before delegating
  // to the browser SDK, exactly as the reference bundle's j1() does. Setting
  // it here would make Sentry.init() mistake the first call for a duplicate.
  initializeSdk();
}
