// Restored from ref/.vite/build/file-based-logger-D5VNAgCV.js
// file-based-logger-D5VNAgCV chunk restored from the Codex webview bundle.
import { shouldUseOwlAppShell } from "./app-shell";
import { BuildFlavor } from "./build-flavor";
import { createFileBasedLogger } from "./file-based-logger";
import { bundleIdentifierForBuildFlavor, resolveLogRootDir } from "./log-paths";
import { readPackageMetadataField } from "./package-metadata";
export {
  shouldUseOwlAppShell,
  BuildFlavor,
  resolveLogRootDir,
  readPackageMetadataField,
  bundleIdentifierForBuildFlavor,
  createFileBasedLogger,
};
export type {
  BuildFlavorApi,
  BuildFlavorValue,
  Environment,
  FileLoggerOptions,
  FileLoggerRuntimeOptions,
  LoggerSink,
  NonFatalReporter,
  Platform,
  WindowsStoreConfig,
  WindowsUpdaterConfig,
} from "./types";
