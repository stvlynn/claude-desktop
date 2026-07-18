// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

import * as Sentry from "@sentry/electron/renderer";

/** Initialize the renderer SDK once, matching the bundle's telemetry gates. */
export function initializeRendererSentry(): void {
  if (
    window.desktopEssentialTelemetryDisabled === true ||
    window.process?.env?.CI ||
    window.__SENTRY__RENDERER_INIT__
  ) {
    return;
  }

  Sentry.init();
}
