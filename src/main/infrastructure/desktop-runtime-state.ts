// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import * as path from "node:path";
import { app } from "electron";
import { openDesktopStateDatabase } from "./desktop-state-database";
import { BuildFlavor, type BuildFlavorValue } from "../domain/app-brand";
import { readPackageMetadataField } from "./package-metadata";
import {
  registerShouldSpawnInsideWsl,
  resolveCodexHome,
  resolveDefaultWslDistro,
} from "./wsl-runtime";
import {
  getAppearanceThemeSettingKey,
  getDesktopFirstSeenAtMsKey,
  getRunCodexInWslSettingKey,
} from "../domain/desktop-setting-keys";
import {
  FileBackedGlobalStateStore,
  FileBackedSettingsStoreBoundary,
} from "./desktop-settings-store";
import { DesktopUpdateManagerImpl } from "../application/desktop-update-manager";
import { applyNativeThemeSource } from "../application/desktop-update-service";
import type { FlushableStore } from "../application/desktop-app-lifecycle/types";
import {
  DesktopRuntimeState,
  InstallUpdatesRequest,
  KeyValueStore,
  RelaunchNotice,
  SettingsStoreBoundary,
  SparkleBridgeHandlers,
  UpdateLifecycleState,
} from "./desktop-runtime-types";

export const codexAppSessionId = randomUUID();

function resolveBuildFlavor(): BuildFlavorValue {
  const envValue = process.env.BUILD_FLAVOR ?? process.env.CODEX_BUILD_FLAVOR;
  const parsed = BuildFlavor.parse(envValue);
  if (parsed) return parsed;
  const fromPackage = readPackageMetadataField<BuildFlavorValue>(
    "codexBuildFlavor",
    {
      parse: (candidate) =>
        BuildFlavor.isValid(candidate) ? candidate : null,
    },
  ) as BuildFlavorValue | null;
  return (
    fromPackage ??
    (process.env.NODE_ENV === "production" ? BuildFlavor.Prod : BuildFlavor.Dev)
  );
}

const desktopReleaseMetadata = {
  codexAppSessionId,
  buildFlavor: resolveBuildFlavor(),
  buildNumber:
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    readPackageMetadataField("codexBuildNumber"),
  appVersion: app.getVersion(),
};

let desktopRuntimeState: DesktopRuntimeState | null = null;

export function createDesktopRuntimePaths({
  moduleDir,
}: {
  moduleDir: string;
}): {
  codexHome: string;
  preloadPath: string;
  desktopRoot: string;
  repoRoot: string;
  globalState: KeyValueStore & FlushableStore;
  settingsStore: SettingsStoreBoundary;
} {
  openDesktopStateDatabase();
  const codexHome = resolveCodexHome();
  const desktopRoot = path.join(moduleDir, "..", "..");
  const repoRoot = path.join(desktopRoot, "..");
  const globalStatePath = path.join(codexHome, ".codex-global-state.json");
  const globalState = new FileBackedGlobalStateStore(globalStatePath);
  if (!existsSync(globalStatePath) && !existsSync(`${globalStatePath}.bak`)) {
    globalState.set(getDesktopFirstSeenAtMsKey(), Date.now());
  }
  const settingsStore = new FileBackedSettingsStoreBoundary(
    path.join(codexHome, "config.toml"),
    globalState,
  );
  const shouldSpawnInsideWsl =
    process.platform === "win32" &&
    process.env.WSL_DISTRO_NAME == null &&
    settingsStore.getEffective(getRunCodexInWslSettingKey()) === true &&
    resolveDefaultWslDistro() != null;
  registerShouldSpawnInsideWsl(() => shouldSpawnInsideWsl);
  applyNativeThemeSource(
    String(
      settingsStore.getEffective(getAppearanceThemeSettingKey()) ?? "system",
    ),
  );
  return {
    codexHome,
    preloadPath: path.join(desktopRoot, "preload", "preload.cjs"),
    desktopRoot,
    repoRoot,
    globalState,
    settingsStore,
  };
}

export function getDesktopRuntimeState(
  buildFlavor: BuildFlavorValue = resolveBuildFlavor(),
): DesktopRuntimeState {
  if (desktopRuntimeState) return desktopRuntimeState;
  const startedAtMs = Date.now();
  const queuedSecondInstanceArgs: string[][] = [];
  let secondInstanceArgsHandler: ((args: string[]) => void) | null = null;
  let onInstallUpdatesRequested = (_request?: InstallUpdatesRequest): void => {
    if (process.platform === "win32" && app.isPackaged) {
      app.exit(0);
      return;
    }
    app.quit();
  };
  let onUpdateLifecycleStateChanged = (
    _state: UpdateLifecycleState,
  ): void => {};
  let onRelaunchNoticeChanged = (_notice: RelaunchNotice | null): void => {};
  let onUpdateReadyChanged = (_isReady: boolean): void => {};
  let onInstallProgressChanged = (_percent: number | null): void => {};
  let onDownloadProgressChanged = (_percent: number | null): void => {};
  let isTrustedIpcEvent = (_event: Electron.IpcMainInvokeEvent): boolean =>
    false;
  desktopRuntimeState ??= {
    startedAtMs,
    buildFlavor,
    desktopSentry: {
      captureException() {},
    },
    sparkleManager: new DesktopUpdateManagerImpl({
      buildFlavor,
      enableUpdater:
        typeof BuildFlavor.shouldIncludeUpdater === "function"
          ? BuildFlavor.shouldIncludeUpdater(
              buildFlavor,
              process.platform,
              process.env,
            )
          : false,
      getInternalUpdateCdnRequestHeaders: undefined,
      isPackaged: app.isPackaged,
      isTrustedIpcEvent: (event) => isTrustedIpcEvent(event),
      onDownloadProgressChanged: (percent) => {
        onDownloadProgressChanged(percent);
      },
      onInstallProgressChanged: (percent) => {
        onInstallProgressChanged(percent);
      },
      onInstallUpdatesRequested: (request) => {
        onInstallUpdatesRequested(request);
      },
      onRelaunchNoticeChanged: (notice) => {
        onRelaunchNoticeChanged(notice);
      },
      onUpdateLifecycleStateChanged: (state) => {
        onUpdateLifecycleStateChanged(state);
      },
      onUpdateReadyChanged: (isReady) => {
        onUpdateReadyChanged(isReady);
      },
      useInternalUpdateCdn: false,
    }),
    queueSecondInstanceArgs(args: string[]): void {
      if (secondInstanceArgsHandler) {
        secondInstanceArgsHandler(args);
      } else {
        queuedSecondInstanceArgs.push(args);
      }
    },
    setSecondInstanceArgsHandler(handler: (args: string[]) => void): void {
      secondInstanceArgsHandler = handler;
      for (const args of queuedSecondInstanceArgs) handler(args);
      queuedSecondInstanceArgs.length = 0;
    },
    setSparkleBridgeHandlers(handlers: SparkleBridgeHandlers): void {
      if (handlers.onInstallUpdatesRequested) {
        onInstallUpdatesRequested = handlers.onInstallUpdatesRequested;
      }
      if (handlers.onUpdateLifecycleStateChanged) {
        onUpdateLifecycleStateChanged = handlers.onUpdateLifecycleStateChanged;
      }
      if (handlers.onRelaunchNoticeChanged) {
        onRelaunchNoticeChanged = handlers.onRelaunchNoticeChanged;
      }
      if (handlers.onUpdateReadyChanged) {
        onUpdateReadyChanged = handlers.onUpdateReadyChanged;
      }
      if (handlers.onInstallProgressChanged) {
        onInstallProgressChanged = handlers.onInstallProgressChanged;
      }
      if (handlers.onDownloadProgressChanged) {
        onDownloadProgressChanged = handlers.onDownloadProgressChanged;
      }
      if (handlers.isTrustedIpcEvent) {
        isTrustedIpcEvent = handlers.isTrustedIpcEvent;
      }
    },
  };
  return desktopRuntimeState;
}
