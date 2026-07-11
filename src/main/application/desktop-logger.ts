// @ts-nocheck
// Restored from ref/.vite/build/index.pre.js
// Minimal structured logger for the main process until a fuller telemetry
// pipeline is restored.

export type LogDetails = Record<string, unknown>;

export type StructuredLogger = {
  info(message: string, details?: LogDetails): void;
  warning(message: string, details?: LogDetails): void;
  error(message: string, details?: LogDetails): void;
};

export const desktopLogger: StructuredLogger = {
  info(message, details) {
    console.log(`[desktop] ${message}`, details ?? "");
  },
  warning(message, details) {
    console.warn(`[desktop] ${message}`, details ?? "");
  },
  error(message, details) {
    console.error(`[desktop] ${message}`, details ?? "");
  },
};
