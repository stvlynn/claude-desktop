// Restored from ref/.vite/build/workspace-root-drop-handler-Cejfos9U.js
// Typed open boundary for the mixed workspace-root, updater, protocol, and Sentry chunk.
import { createRequire } from "node:module";
import * as path from "node:path";
import { app, nativeTheme } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  readPackageMetadataField,
  type BuildFlavorValue,
} from "../logging/file-based-logger";

type KeyValueStore = {
  get(key: string): unknown;
  set(key: string, value: unknown): void | Promise<void>;
  flush?(): Promise<void>;
};
type NativeIntl = {
  formatMessage(message: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string;
};
type NativeIntlLoader = {
  load(repoRoot: string): Promise<NativeIntl>;
  createDefault(): NativeIntl;
};
type DesktopRuntimeState = {
  startedAtMs: number;
  buildFlavor: BuildFlavorValue;
  desktopSentry: {
    captureException(error: unknown, context?: unknown): void;
  };
  sparkleManager: {
    initialize(): Promise<void>;
    hasUpdater(): boolean;
    getIsUpdateReady(): boolean;
    checkForUpdates(): Promise<void>;
    installUpdatesIfAvailable(): Promise<void>;
  };
  queueSecondInstanceArgs(args: string[]): void;
  setSecondInstanceArgsHandler?(handler: (args: string[]) => void): void;
  setSparkleBridgeHandlers?(handlers: Record<string, unknown>): void;
};
type WorkspaceRootState = {
  activeRoots: string[];
  roots: string[];
  labels: Record<string, string>;
};

const requireFromWorkspaceBoundary = createRequire(import.meta.url);
const loggerFactory = sharedRuntime.ni as (scope: string) => () => {
  error(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};
const runtimeLogger = loggerFactory("workspace-root-boundary");
const parseAppBrand = sharedRuntime.xc as (value: string | undefined) => unknown;
const defaultBrand = (sharedRuntime.yc as { Codex?: unknown }).Codex;
const brandDisplayName = sharedRuntime.bc as (brand: unknown) => string;

const AVATAR_OVERLAY_OPEN_CHANNEL = "electron-avatar-overlay-open";
const LOCAL_REMOTE_CONTROL_INSTALLATION_ID_KEY =
  "electron-local-remote-control-installation-id";
const OPENAI_MCP_FORM_ELICITATIONS_ENABLED_KEY =
  "electron-openai-mcp-form-elicitations-enabled";
const PERSISTED_ATOM_STATE_KEY = "electron-persisted-atom-state";
const CHROME_EXTENSION_SYNC_MANAGED_PLUGIN_IDS_KEY =
  "electron-chrome-extension-sync-managed-plugin-ids";
const INTEGRITY_STATE_ENVELOPE_KEY = "electron-integrity-state-envelope";
const LOCAL_REMOTE_CONTROL_ENVIRONMENT_ID_KEY =
  "electron-local-remote-control-environment-id";
const REMOTE_CONTROL_CLIENT_ENROLLMENTS_KEY =
  "electron-remote-control-client-enrollments";
const BROWSER_DOWNLOAD_HISTORY_KEY = "electron-browser-download-history";
const AVATAR_OVERLAY_BOUNDS_KEY = "electron-avatar-overlay-bounds";
const WORKTREE_CLEANUP_BUFFER_START_MS_KEY =
  "electron-worktree-cleanup-buffer-start-ms";

const codexAppSessionId = crypto.randomUUID();
const desktopReleaseMetadata = {
  codexAppSessionId,
  buildFlavor: BuildFlavor.resolve(),
  buildNumber:
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    readPackageMetadataField("codexBuildNumber"),
  appVersion: app.getVersion(),
};

let configuredNativeIntl: { repoRoot: string | null; nativeIntl: NativeIntl } | null =
  null;
let desktopRuntimeState: DesktopRuntimeState | null = null;
let queuedOpenPaths: string[] = [];
let openPathsHandler: ((paths: string[]) => void) | null = null;
let openFileListener: ((event: Event, filePath: string) => void) | null = null;

async function configureNativeIntl(repoRoot: string): Promise<void> {
  if (configuredNativeIntl?.repoRoot === repoRoot) return;
  try {
    configuredNativeIntl = {
      repoRoot,
      nativeIntl: await NativeIntlMessages.load(repoRoot),
    };
  } catch {
    configuredNativeIntl = {
      repoRoot: null,
      nativeIntl: NativeIntlMessages.createDefault(),
    };
  }
}

function getNativeIntl(): NativeIntl {
  if (configuredNativeIntl == null) {
    throw Error("NativeIntl has not been configured.");
  }
  return configuredNativeIntl.nativeIntl;
}

class NativeIntlMessages {
  constructor(readonly messages: Record<string, string>) {}

  static async load(repoRoot: string): Promise<NativeIntlMessages> {
    const locale = app.getLocale().replace(/_/g, "-");
    const [language] = locale.split("-");
    const localeRoot = app.isPackaged
      ? path.join(app.getAppPath(), "native-menu-locales")
      : path.join(repoRoot, "webview", "src", "locales");
    const candidates = [
      path.join(localeRoot, `${locale}.json`),
      language ? path.join(localeRoot, `${language}.json`) : null,
    ].filter((item): item is string => item != null);

    for (const candidate of candidates) {
      try {
        const fs = await import("node:fs/promises");
        return new NativeIntlMessages(JSON.parse(await fs.readFile(candidate, "utf8")));
      } catch {}
    }

    return NativeIntlMessages.createDefault();
  }

  static createDefault(): NativeIntlMessages {
    return new NativeIntlMessages({});
  }

  formatMessage({
    defaultMessage,
    messageId,
    values = {},
  }: {
    messageId: string;
    defaultMessage: string;
    values?: Record<string, unknown>;
  }): string {
    const template = this.messages[messageId] ?? defaultMessage;
    return template.replace(/\{([^}]+)\}/g, (match, key: string) =>
      values[key] == null ? match : String(values[key]),
    );
  }
}

function getNativeIntlLoader(): NativeIntlLoader {
  return NativeIntlMessages;
}

function getRuntimeAppBrand(): unknown {
  return (
    readPackageMetadataField("codexAppBrand", { parse: parseAppBrand }) ??
    parseAppBrand(process.env.CODEX_APP_BRAND) ??
    defaultBrand
  );
}

function getRuntimeAppName(): string {
  return brandDisplayName(getRuntimeAppBrand());
}

function webviewRootFromModuleDir(moduleDir: string): string {
  return path.join(moduleDir, "..", "..", "webview");
}

function createWebviewAppUrl(
  initialRoute?: string | null,
  options?: { mcpAppSandboxDevtools?: boolean },
): string {
  const url = new URL('app://-/index.html');
  if (initialRoute) url.searchParams.set("initialRoute", initialRoute);
  if (options?.mcpAppSandboxDevtools) {
    url.searchParams.set("mcpAppSandboxDevtools", "1");
  }
  return url.toString();
}

function filePathFromAppFileUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (
      url.protocol !== "app:" ||
      url.host !== "fs" ||
      !url.pathname.startsWith("/@fs")
    ) {
      return null;
    }
    return decodeURIComponent(url.pathname.slice(4));
  } catch {
    return null;
  }
}

function registerAppProtocolHandler(webviewRoot: string): void {
  void webviewRoot;
  openBoundary("registerAppProtocolHandler");
}

function normalizeFeatureFlagList(values: string[] | null | undefined): string[] {
  return Array.isArray(values) ? values.filter(Boolean) : [];
}

function createOwlFeatureSettingsApi(): {
  getState(): Promise<Record<string, unknown>>;
  isOwlFeatureEnabled(name: string): Promise<boolean>;
  setFeatureNames(value: unknown): Promise<Record<string, unknown>>;
} {
  return {
    async getState() {
      return {};
    },
    async isOwlFeatureEnabled(name) {
      return isOwlFeatureEnabled(name);
    },
    async setFeatureNames() {
      return {};
    },
  };
}

function isOwlFeatureEnabled(_name: string): boolean {
  return false;
}

function loadWindowsUpdaterNativeAddon(): unknown {
  try {
    return requireFromWorkspaceBoundary(
      path.join(process.resourcesPath, "native", "windows-updater.node"),
    );
  } catch (error) {
    runtimeLogger().error("Failed to load native Windows updater addon", {
      safe: {},
      sensitive: { error },
    });
    return null;
  }
}

function applyNativeThemeSource(theme: string): void {
  nativeTheme.themeSource =
    theme === "light" || theme === "dark" ? theme : "system";
}

async function setInternalUpdateCdnEnabled(
  store: KeyValueStore,
  enabled: boolean,
): Promise<void> {
  store.set("electron-internal-update-cdn-enabled", enabled);
  await store.flush?.();
}

function createDesktopRuntimePaths({ moduleDir }: { moduleDir: string }): {
  codexHome: string;
  preloadPath: string;
  desktopRoot: string;
  repoRoot: string;
  globalState: KeyValueStore;
  settingsStore: unknown;
} {
  const codexHome = (sharedRuntime.Ur as () => string)();
  const desktopRoot = path.join(moduleDir, "..", "..");
  const repoRoot = path.join(desktopRoot, "..");
  return {
    codexHome,
    preloadPath: path.join(moduleDir, "preload.js"),
    desktopRoot,
    repoRoot,
    globalState: createMemoryStore(),
    settingsStore: {},
  };
}

function getDesktopRuntimeState(
  buildFlavor = BuildFlavor.resolve(),
): DesktopRuntimeState {
  desktopRuntimeState ??= {
    startedAtMs: Date.now(),
    buildFlavor,
    desktopSentry: {
      captureException() {},
    },
    sparkleManager: {
      async initialize() {},
      hasUpdater: () => false,
      getIsUpdateReady: () => false,
      async checkForUpdates() {},
      async installUpdatesIfAvailable() {},
    },
    queueSecondInstanceArgs() {},
  };
  return desktopRuntimeState;
}

function getCurrentAppBundlePath(): string {
  let current = process.execPath;
  for (;;) {
    if (path.extname(current) === ".app") return current;
    const parent = path.dirname(current);
    if (parent === current) return process.execPath;
    current = parent;
  }
}

function shouldUseSingleInstanceLock({
  isMacOS,
  isPackaged,
}: {
  isMacOS: boolean;
  isPackaged: boolean;
}): boolean {
  return isPackaged ? !isMacOS : false;
}

function ignoreConsolePipeErrors(
  streams: Array<NodeJS.WriteStream & { __codexIgnoreConsoleWriteErrors?: boolean }> = [
    process.stdout,
    process.stderr,
  ],
): void {
  for (const stream of streams) {
    if (stream.__codexIgnoreConsoleWriteErrors) continue;
    stream.__codexIgnoreConsoleWriteErrors = true;
    stream.on("error", (error) => {
      if (!isIgnoredConsoleWriteError(error)) throw error;
    });
  }
}

function createDeepLinkCoordinator(): unknown {
  openBoundary("createDeepLinkCoordinator");
}

async function verifyStateDatabaseAvailable(): Promise<boolean> {
  return true;
}

function extractStateDatabasePathFromError(error: unknown): string | null {
  const message = error instanceof Error ? error.message : String(error);
  return /failed to initialize sqlite state db at (.*?): /.exec(message)?.[1] ?? null;
}

async function recoverStateDatabaseAccess({
  open,
}: {
  open(): void | Promise<void>;
}): Promise<boolean> {
  await open();
  return true;
}

async function showStateDatabaseRebuiltDialog(): Promise<void> {
  openBoundary("showStateDatabaseRebuiltDialog");
}

function isSupportedDesktopOpenFile(filePath: string): boolean {
  return new Set([".csv", ".tsv", ".xls", ".xlsm", ".xlsx"]).has(
    path.extname(filePath).toLowerCase(),
  );
}

function extractDesktopOpenFileArgs(
  argv: string[],
  platform: NodeJS.Platform | string = process.platform,
): string[] {
  return argv
    .slice(1)
    .filter((arg) => !arg.startsWith("-") && !arg.toLowerCase().startsWith("codex://"))
    .map((arg) => (arg.toLowerCase().startsWith("file://") ? new URL(arg).pathname : arg))
    .filter((arg) =>
      platform === "win32" ? path.win32.isAbsolute(arg) : path.posix.isAbsolute(arg),
    )
    .filter(isSupportedDesktopOpenFile);
}

function initializeOpenFileQueue(isMacOS: boolean): () => void {
  if (!isMacOS || openFileListener) return () => {};
  openFileListener = (event: Event, filePath: string) => {
    event.preventDefault();
    queueDesktopOpenPaths([filePath]);
  };
  app.on("open-file", openFileListener as never);
  return () => {
    if (!openFileListener) return;
    app.removeListener("open-file", openFileListener as never);
    openFileListener = null;
  };
}

function queueDesktopOpenPaths(pathsToOpen: string[]): boolean {
  if (pathsToOpen.length === 0) return false;
  if (openPathsHandler) {
    openPathsHandler(pathsToOpen);
  } else {
    queuedOpenPaths.push(...pathsToOpen);
  }
  return true;
}

function createDesktopOpenPathHandler({
  handlePaths,
}: {
  handlePaths?: (pathsToOpen: string[]) => void;
} = {}): () => void {
  openPathsHandler = handlePaths ?? ((pathsToOpen) => queuedOpenPaths.push(...pathsToOpen));
  const pending = queuedOpenPaths.splice(0, queuedOpenPaths.length);
  if (pending.length > 0) openPathsHandler(pending);
  return () => {
    openPathsHandler = null;
  };
}

function getRemoteWorkspaceRootsForHost(
  store: KeyValueStore,
  hostId: string,
): { roots: string[]; labels: Record<string, string> } {
  const projects = Array.isArray(store.get("REMOTE_PROJECTS"))
    ? (store.get("REMOTE_PROJECTS") as Array<Record<string, unknown>>)
    : [];
  const roots: string[] = [];
  const labels: Record<string, string> = {};
  const seen = new Set<string>();
  for (const project of projects) {
    if (project.hostId !== hostId || typeof project.remotePath !== "string") continue;
    const remotePath = project.remotePath.trim();
    if (!remotePath || seen.has(remotePath)) continue;
    roots.push(remotePath);
    seen.add(remotePath);
    if (typeof project.label === "string" && project.label.trim()) {
      labels[remotePath] = project.label.trim();
    }
  }
  return { roots, labels };
}

function readWorkspaceRootState(store: KeyValueStore): WorkspaceRootState {
  const activeRoots = filterStringArray(store.get("ACTIVE_WORKSPACE_ROOTS"));
  const roots = filterStringArray(store.get("WORKSPACE_ROOT_OPTIONS"));
  const labels = filterStringRecord(store.get("WORKSPACE_ROOT_LABELS"));
  return { activeRoots, roots, labels };
}

function getActiveWorkspaceRoots(store: KeyValueStore): string[] {
  return readWorkspaceRootState(store).activeRoots;
}

function getWorkspaceRootOptions(store: KeyValueStore): string[] {
  return readWorkspaceRootState(store).roots;
}

function getWorkspaceRootLabels(store: KeyValueStore): Record<string, string> {
  return readWorkspaceRootState(store).labels;
}

function setActiveWorkspaceRoots(store: KeyValueStore, roots: string[]): void {
  store.set("ACTIVE_WORKSPACE_ROOTS", roots);
}

function setWorkspaceRootOptions(store: KeyValueStore, roots: string[]): void {
  store.set("WORKSPACE_ROOT_OPTIONS", roots);
}

function pushProjectOrder(store: KeyValueStore, projectPath: string): void {
  const existing = filterStringArray(store.get("PROJECT_ORDER"));
  store.set("PROJECT_ORDER", [
    projectPath,
    ...existing.filter((item) => item !== projectPath),
  ]);
}

function updateWorkspaceRootOptions(
  store: KeyValueStore,
  update: (roots: unknown) => string[],
): string[] {
  const roots = update(store.get("WORKSPACE_ROOT_OPTIONS") ?? null);
  store.set("WORKSPACE_ROOT_OPTIONS", roots);
  return roots;
}

function updateWorkspaceRootLabels(
  store: KeyValueStore,
  update: (labels: unknown) => Record<string, string>,
): Record<string, string> {
  const labels = update(store.get("WORKSPACE_ROOT_LABELS") ?? null);
  store.set("WORKSPACE_ROOT_LABELS", labels);
  return labels;
}

function ensureInitialWorkspaceRootSelection(
  store: KeyValueStore,
  fallbackProjects?: Array<{ path: string; name: string }>,
): void {
  if (getActiveWorkspaceRoots(store).length > 0) return;
  const roots = getWorkspaceRootOptions(store);
  if (roots.length > 0) {
    setActiveWorkspaceRoots(store, [roots[0]]);
    return;
  }
  const fallbackRoots = Array.from(
    new Set((fallbackProjects ?? []).map((project) => project.path.trim()).filter(Boolean)),
  );
  if (fallbackRoots.length === 0) return;
  setWorkspaceRootOptions(store, fallbackRoots);
  setActiveWorkspaceRoots(store, [fallbackRoots[0]]);
  updateWorkspaceRootLabels(store, (current) => ({
    ...filterStringRecord(current),
    ...Object.fromEntries(
      (fallbackProjects ?? [])
        .map((project) => [project.path, project.name.trim()] as const)
        .filter(([, name]) => Boolean(name)),
    ),
  }));
}

function createMemoryStore(): KeyValueStore {
  const values = new Map<string, unknown>();
  return {
    get: (key) => values.get(key),
    set: (key, value) => values.set(key, value),
    async flush() {},
  };
}

function filterStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}

function filterStringRecord(value: unknown): Record<string, string> {
  if (typeof value !== "object" || value == null || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => typeof item === "string"),
  ) as Record<string, string>;
}

function isIgnoredConsoleWriteError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    (error.code === "EPIPE" ||
      error.code === "ERR_STREAM_DESTROYED" ||
      error.code === "EBADF")
  );
}

function openBoundary(name: string): never {
  throw Error(
    `${name} belongs to the workspace-root mixed app/runtime chunk and remains an open restoration boundary.`,
  );
}

export {
  configureNativeIntl,
  AVATAR_OVERLAY_OPEN_CHANNEL,
  loadWindowsUpdaterNativeAddon,
  createDeepLinkCoordinator,
  setInternalUpdateCdnEnabled,
  createDesktopRuntimePaths,
  LOCAL_REMOTE_CONTROL_INSTALLATION_ID_KEY,
  isOwlFeatureEnabled,
  desktopReleaseMetadata,
  OPENAI_MCP_FORM_ELICITATIONS_ENABLED_KEY,
  createWebviewAppUrl,
  normalizeFeatureFlagList,
  PERSISTED_ATOM_STATE_KEY,
  CHROME_EXTENSION_SYNC_MANAGED_PLUGIN_IDS_KEY,
  INTEGRITY_STATE_ENVELOPE_KEY,
  applyNativeThemeSource,
  LOCAL_REMOTE_CONTROL_ENVIRONMENT_ID_KEY,
  NativeIntlMessages,
  REMOTE_CONTROL_CLIENT_ENROLLMENTS_KEY,
  getCurrentAppBundlePath,
  getDesktopRuntimeState,
  codexAppSessionId,
  createOwlFeatureSettingsApi,
  filePathFromAppFileUrl,
  webviewRootFromModuleDir,
  registerAppProtocolHandler,
  showStateDatabaseRebuiltDialog,
  getRemoteWorkspaceRootsForHost,
  ignoreConsolePipeErrors,
  pushProjectOrder,
  setWorkspaceRootOptions,
  getNativeIntl,
  updateWorkspaceRootLabels,
  extractStateDatabasePathFromError,
  extractDesktopOpenFileArgs,
  getActiveWorkspaceRoots,
  BROWSER_DOWNLOAD_HISTORY_KEY,
  AVATAR_OVERLAY_BOUNDS_KEY,
  ensureInitialWorkspaceRootSelection,
  isSupportedDesktopOpenFile,
  initializeOpenFileQueue,
  getRuntimeAppName,
  getWorkspaceRootLabels,
  updateWorkspaceRootOptions,
  recoverStateDatabaseAccess,
  createDesktopOpenPathHandler,
  getWorkspaceRootOptions,
  queueDesktopOpenPaths,
  getRuntimeAppBrand,
  setActiveWorkspaceRoots,
  verifyStateDatabaseAvailable,
  shouldUseSingleInstanceLock,
  WORKTREE_CLEANUP_BUFFER_START_MS_KEY,
  configureNativeIntl as $,
  AVATAR_OVERLAY_OPEN_CHANNEL as A,
  loadWindowsUpdaterNativeAddon as B,
  createDeepLinkCoordinator as C,
  setInternalUpdateCdnEnabled as D,
  createDesktopRuntimePaths as E,
  LOCAL_REMOTE_CONTROL_INSTALLATION_ID_KEY as F,
  isOwlFeatureEnabled as G,
  desktopReleaseMetadata as H,
  OPENAI_MCP_FORM_ELICITATIONS_ENABLED_KEY as I,
  createWebviewAppUrl as J,
  normalizeFeatureFlagList as K,
  PERSISTED_ATOM_STATE_KEY as L,
  CHROME_EXTENSION_SYNC_MANAGED_PLUGIN_IDS_KEY as M,
  INTEGRITY_STATE_ENVELOPE_KEY as N,
  applyNativeThemeSource as O,
  LOCAL_REMOTE_CONTROL_ENVIRONMENT_ID_KEY as P,
  NativeIntlMessages as Q,
  REMOTE_CONTROL_CLIENT_ENROLLMENTS_KEY as R,
  getCurrentAppBundlePath as S,
  getDesktopRuntimeState as T,
  codexAppSessionId as U,
  createOwlFeatureSettingsApi as W,
  filePathFromAppFileUrl as X,
  webviewRootFromModuleDir as Y,
  registerAppProtocolHandler as Z,
  showStateDatabaseRebuiltDialog as _,
  getRemoteWorkspaceRootsForHost as a,
  ignoreConsolePipeErrors as b,
  pushProjectOrder as c,
  setWorkspaceRootOptions as d,
  getNativeIntl as et,
  updateWorkspaceRootLabels as f,
  extractStateDatabasePathFromError as g,
  extractDesktopOpenFileArgs as h,
  getActiveWorkspaceRoots as i,
  BROWSER_DOWNLOAD_HISTORY_KEY as j,
  AVATAR_OVERLAY_BOUNDS_KEY as k,
  ensureInitialWorkspaceRootSelection as l,
  isSupportedDesktopOpenFile as m,
  initializeOpenFileQueue as n,
  getRuntimeAppName as nt,
  getWorkspaceRootLabels as o,
  updateWorkspaceRootOptions as p,
  recoverStateDatabaseAccess as q,
  createDesktopOpenPathHandler as r,
  getWorkspaceRootOptions as s,
  queueDesktopOpenPaths as t,
  getRuntimeAppBrand as tt,
  setActiveWorkspaceRoots as u,
  verifyStateDatabaseAvailable as v,
  shouldUseSingleInstanceLock as w,
  WORKTREE_CLEANUP_BUFFER_START_MS_KEY as z,
};
