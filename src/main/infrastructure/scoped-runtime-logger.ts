// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import {
  createLazyScopedStructuredLogger,
  type StructuredLogger,
  type StructuredLogDetails,
} from "./structured-logger";

export const loggerFactory = createLazyScopedStructuredLogger;

export const runtimeLogger = loggerFactory("workspace-root-boundary");

export const sparkleLogger = loggerFactory("sparkle");

export const windowsUpdaterLogger = loggerFactory("windows-updater");

export const windowsStoreUpdaterLogger = loggerFactory("windows-store-updater");

export function logScopedMessage(
  logger: StructuredLogger,
  level: string,
  message: string,
  details?: unknown,
): void {
  const safeDetails = details as StructuredLogDetails | undefined;
  if (typeof logger.log === "function") {
    logger.log(level, message, safeDetails);
    return;
  }
  if (level === "error") {
    logger.error(message, safeDetails);
    return;
  }
  if (level === "warning") {
    logger.warning(message, safeDetails);
    return;
  }
  if (typeof logger.info === "function") {
    logger.info(message, safeDetails);
    return;
  }
  logger.debug(message, safeDetails);
}
