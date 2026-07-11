// @ts-nocheck
// Restored from ref/.vite/build/file-based-logger-DZ6052-3.js
// OWL (Overlay Window Layer) app-shell detection for the main process.

export function shouldUseOwlAppShell(
  platform: NodeJS.Platform = process.platform,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return platform !== "linux" && env.CODEX_USE_OWL_APP_SHELL !== "0";
}
