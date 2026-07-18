// Restored from ref/package.json
// Stub for restored/app-shell/nux-state.ts. Deep-restore when NUX wiring is
// explicitly scoped.
export type NuxState =
  | "2025-09-15-apikey-auth"
  | "2025-09-15-full-chatgpt-auth"
  | "none";

export function useNux(): NuxState {
  return "none";
}

export function initUseNuxChunk(): void {}
