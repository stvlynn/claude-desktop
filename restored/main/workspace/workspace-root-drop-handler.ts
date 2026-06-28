// Restored from ref/.vite/build/workspace-root-drop-handler-Cejfos9U.js
// Typed open boundary for the mixed workspace-root, updater, protocol, and Sentry chunk.
import { randomUUID } from "node:crypto";
import {
  createReadStream,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  type Stats,
  writeFileSync,
} from "node:fs";
import * as fsPromises from "node:fs/promises";
import { createRequire } from "node:module";
import * as path from "node:path";
import { Readable } from "node:stream";
import { app, dialog, nativeTheme, protocol, session } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  createFileBasedLogger,
  readPackageMetadataField,
  type BuildFlavorValue,
  type LoggerSink,
  type NonFatalReporter,
} from "../logging/file-based-logger";

type KeyValueStore = {
  get(key: string): unknown;
  getStored?(key: string): unknown;
  set(key: string, value: unknown): void | Promise<void>;
  update?(
    key: string,
    updater: (value: unknown | null) => unknown | undefined,
  ): void | Promise<void>;
  delete?(key: string): void | Promise<void>;
  flush?(): Promise<void>;
  getStateFilePath?(): string;
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
type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};
type DesktopStructuredLogger = {
  log(
    level: string,
    message: string,
    safeDetails?: Record<string, unknown>,
  ): void;
};
type StateDatabaseRecoveryOptions = {
  databasePath: string | ((error: unknown) => string | null);
  onBackfillWait?: () => void | Promise<void>;
  open(): void | Promise<void>;
  shouldHandleError?: (error: unknown) => boolean;
};
type BrowserWindowLike = {
  isDestroyed(): boolean;
};
type DeepLinkRoute =
  | { kind: "applyCodexAppConfig" }
  | { kind: "automations" }
  | {
      kind: "connectorOAuthCallback";
      fullRedirectUrl: string;
      returnTo: string | null;
    }
  | { kind: "launch" }
  | { kind: "localConversation"; [key: string]: unknown }
  | {
      kind: "localPluginDetail";
      hostId: string | null;
      marketplacePath: string;
      pluginName: string;
      openShareDialog: boolean;
    }
  | {
      kind: "newThread";
      originUrl?: string | null;
      path?: string | null;
      prompt?: string;
    }
  | {
      kind: "petInstall";
      description: string | null;
      imageUrl: string;
      name: string;
    }
  | {
      kind: "pluginDetail";
      hostId: string | null;
      pluginId: unknown;
      source: unknown;
    }
  | {
      kind: "pluginInstall";
      marketplaceName: string | undefined;
      pluginName: string;
    }
  | { kind: "settings"; section?: string; search?: string }
  | { kind: "skills" };
type DeepLinkCoordinatorOptions = {
  app: typeof app;
  isMacOS: boolean;
  ensurePrimaryWindowVisible(): Promise<unknown>;
  navigateToRoute(window: unknown, route: DeepLinkRoute): Promise<void>;
  initialArgv: string[];
  errorReporter: {
    reportNonFatal(error: Error, context: Record<string, unknown>): void;
  };
};
type DeepLinkCoordinator = {
  registerProtocolClient(): void;
  queueProcessArgs(args: string[]): boolean;
  flushPendingDeepLinks(): Promise<void>;
  queueCodexDeepLinkUrl(url: string, hostId?: string | null): boolean;
};
type RecoveryErrorPair = {
  originalError: unknown;
  recoveryError: unknown;
};
type OwlFeatureNameState = {
  enabledFeatureNames: string[];
  disabledFeatureNames: string[];
};
type OwlFeatureSettingsState = {
  activeFeatureNames: string[];
  activeDisabledFeatureNames: string[];
  pendingFeatureNames: string[];
  pendingDisabledFeatureNames: string[];
  restartRequired: boolean;
};
type OwlFeatureNativeBinding = {
  isOwlFeatureEnabled(name: string): boolean;
};
type ProcessWithLinkedBinding = NodeJS.Process & {
  _linkedBinding?: (name: string) => unknown;
};

const requireFromWorkspaceBoundary = createRequire(import.meta.url);
const loggerFactory = sharedRuntime.ni as (scope: string) => () => {
  error(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};
const runtimeLogger = loggerFactory("workspace-root-boundary");
const parseAppBrand = sharedRuntime.xc as (
  value: string | undefined,
) => unknown;
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
const APP_PROTOCOL_ORIGIN = "app://-";
const APP_FILE_ORIGIN = "app://fs";
const APP_FILE_PATH_PREFIX = "/@fs";
const APP_INDEX_FILE = "index.html";
const OPEN_PROJECT_ARG = "--open-project";
const OWL_FEATURE_BOOTSTRAP_CACHE_FILE = "owl-feature-bootstrap-cache.json";
const OWL_FEATURES_LINKED_BINDING_NAME = "electron_common_owl_features";
const SETTINGS_SECTIONS = [
  "browser-use",
  "computer-use/google-chrome",
  "connections",
  "connections/computer",
  "connections/devices",
  "connections/ssh",
  "connections/ssh/add",
];
const PLUGIN_INSTALL_QUERY_KEYS = new Set(["marketplace"]);
const LOCAL_PLUGIN_DETAIL_QUERY_KEYS = new Set(["marketplacePath", "mode"]);
const SSH_ADD_QUERY_KEYS = new Set(["name"]);
const PET_INSTALL_QUERY_KEYS = new Set(["name", "description", "imageUrl"]);
const STATE_DATABASE_DIALOG_LABELS = {
  retry: "Retry",
  recover: "Back Up and Rebuild",
  quit: "Quit",
} as const;
const STATE_DATABASE_BACKUP_DIRECTORY = "db-backups";

const codexAppSessionId = randomUUID();
const desktopReleaseMetadata = {
  codexAppSessionId,
  buildFlavor: BuildFlavor.resolve(),
  buildNumber:
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    readPackageMetadataField("codexBuildNumber"),
  appVersion: app.getVersion(),
};

let configuredNativeIntl: {
  repoRoot: string | null;
  nativeIntl: NativeIntl;
} | null = null;
let desktopRuntimeState: DesktopRuntimeState | null = null;
let queuedOpenPaths: string[] = [];
let openPathsHandler: ((paths: string[]) => void) | null = null;
let openFileListener: ((event: Event, filePath: string) => void) | null = null;
let owlBootstrapFeatureNames: string[] = [];

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
        return new NativeIntlMessages(
          JSON.parse(await fs.readFile(candidate, "utf8")),
        );
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
  const url = new URL(`${APP_PROTOCOL_ORIGIN}/${APP_INDEX_FILE}`);
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
      !url.pathname.startsWith(APP_FILE_PATH_PREFIX)
    ) {
      return null;
    }
    return decodeAppFilePathname(url.pathname);
  } catch {
    return null;
  }
}

function registerAppProtocolHandler(webviewRoot: string): void {
  registerAppSchemePrivileges();
  session.defaultSession.webRequest.onBeforeRequest(
    { urls: [`${APP_FILE_ORIGIN}/*`] },
    (details, callback) => {
      callback({ cancel: !isTrustedAppFileRequest(details) });
    },
  );
  protocol.handle("app", async (request) => {
    const filePath = resolveAppProtocolPath(request.url, webviewRoot);
    if (!filePath) return notFoundResponse();
    return isVideoFile(filePath)
      ? createVideoFileResponse(request, filePath)
      : createStaticFileResponse(filePath);
  });
}

function registerAppSchemePrivileges(): void {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: "app",
      privileges: {
        standard: true,
        secure: true,
        stream: true,
        supportFetchAPI: true,
      },
    },
  ]);
}

function resolveAppProtocolPath(
  requestUrl: string,
  webviewRoot: string,
): string | null {
  const rawPath = extractAppUrlPath(requestUrl);
  if (!rawPath) return null;
  try {
    if (hasPathTraversal(normalizeBundlePath(decodeURIComponent(rawPath)))) {
      return null;
    }
  } catch {
    return null;
  }

  const url = new URL(requestUrl);
  if (url.protocol !== "app:") return null;
  if (url.pathname.startsWith(APP_FILE_PATH_PREFIX)) {
    return url.host === "fs" ? decodeAppFilePathname(url.pathname) : null;
  }
  if (url.host && url.host !== "-") return null;

  const normalizedPath = normalizeBundlePath(url.pathname || "/");
  const relativePath = normalizedPath.startsWith("/")
    ? normalizedPath.slice(1)
    : normalizedPath;
  const normalizedRelativePath = path.posix.normalize(relativePath);
  if (normalizedRelativePath === "." || normalizedRelativePath === "") {
    return path.join(webviewRoot, APP_INDEX_FILE);
  }
  if (
    normalizedRelativePath.startsWith("..") ||
    normalizedRelativePath.includes("/..")
  ) {
    return null;
  }

  const filePath = path.join(webviewRoot, ...normalizedRelativePath.split("/"));
  const relativeToRoot = path.relative(webviewRoot, filePath);
  return relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)
    ? null
    : filePath;
}

function extractAppUrlPath(value: string): string | null {
  if (!value.startsWith("app://")) return null;
  const withoutProtocol = value.slice("app://".length);
  const slashIndex = withoutProtocol.indexOf("/");
  return (
    (slashIndex >= 0 ? withoutProtocol.slice(slashIndex) : "/")
      .split("?")[0]
      ?.split("#")[0] ?? null
  );
}

function hasPathTraversal(value: string): boolean {
  return value.split("/").some((segment) => {
    return segment === ".." || /^\.\.[. ]+$/.test(segment);
  });
}

function normalizeBundlePath(value: string): string {
  const normalize = sharedRuntime.Ts as
    | ((pathValue: string) => string)
    | undefined;
  return typeof normalize === "function" ? normalize(value) : value;
}

function toNativeFilePath(value: string): string {
  const convert = sharedRuntime.Es as
    | ((pathValue: string) => string)
    | undefined;
  return typeof convert === "function" ? convert(value) : value;
}

function isSafeAbsoluteFilePath(value: string): boolean {
  const isSafe = sharedRuntime.Ss as
    | ((pathValue: string) => boolean)
    | undefined;
  if (typeof isSafe === "function") return isSafe(value);
  return path.posix.isAbsolute(value) || path.win32.isAbsolute(value);
}

function decodeAppFilePathname(pathname: string): string | null {
  const encodedPath = pathname.slice(APP_FILE_PATH_PREFIX.length);
  if (!encodedPath) return null;
  let decodedPath: string;
  try {
    decodedPath = decodeURIComponent(encodedPath);
  } catch {
    return null;
  }
  const normalizedPath = normalizeBundlePath(decodedPath);
  if (!isSafeAbsoluteFilePath(normalizedPath)) return null;
  const filePath = path.resolve(toNativeFilePath(normalizedPath));
  return isImageOrVideoFile(filePath) ? filePath : null;
}

async function createStaticFileResponse(filePath: string): Promise<Response> {
  let stats;
  try {
    stats = await fsPromises.stat(filePath);
  } catch {
    return notFoundResponse();
  }
  if (!stats.isFile()) return notFoundResponse();
  return new Response(readableStreamBody(createReadStream(filePath)), {
    headers: {
      "Content-Length": String(stats.size),
      "Content-Type": mimeTypeForPath(filePath),
    },
  });
}

function notFoundResponse(): Response {
  return new Response(null, {
    status: 404,
    statusText: "Not Found",
  });
}

function isVideoFile(filePath: string): boolean {
  return mimeTypeForPath(filePath).startsWith("video/");
}

function isImageOrVideoFile(filePath: string): boolean {
  const mimeType = mimeTypeForPath(filePath);
  return mimeType.startsWith("image/") || mimeType.startsWith("video/");
}

async function createVideoFileResponse(
  request: Request,
  filePath: string,
): Promise<Response> {
  let stats;
  try {
    stats = await fsPromises.stat(filePath);
  } catch {
    return notFoundResponse();
  }
  const headers = new Headers({
    "Accept-Ranges": "bytes",
    "Content-Type": mimeTypeForPath(filePath),
  });
  const rangeHeader = request.headers.get("range");
  if (!rangeHeader) {
    headers.set("Content-Length", String(stats.size));
    return new Response(readableStreamBody(createReadStream(filePath)), {
      headers,
    });
  }

  const range = parseHttpByteRange(rangeHeader, stats.size);
  if (!range) {
    headers.set("Content-Range", `bytes */${stats.size}`);
    return new Response(null, {
      status: 416,
      statusText: "Range Not Satisfiable",
      headers,
    });
  }

  headers.set("Content-Length", String(range.end - range.start + 1));
  headers.set(
    "Content-Range",
    `bytes ${range.start}-${range.end}/${stats.size}`,
  );
  return new Response(readableStreamBody(createReadStream(filePath, range)), {
    status: 206,
    statusText: "Partial Content",
    headers,
  });
}

function parseHttpByteRange(
  headerValue: string,
  fileSize: number,
): { start: number; end: number } | null {
  const match = /^bytes=(\d*)-(\d*)$/.exec(headerValue);
  if (!match) return null;
  const [, startText, endText] = match;
  if (startText === "" && endText === "") return null;
  if (startText === "") {
    const suffixLength = Number(endText);
    return suffixLength <= 0 || fileSize === 0
      ? null
      : { start: Math.max(fileSize - suffixLength, 0), end: fileSize - 1 };
  }
  const start = Number(startText);
  const requestedEnd = endText === "" ? fileSize - 1 : Number(endText);
  return start < 0 || requestedEnd < start || start >= fileSize
    ? null
    : { start, end: Math.min(requestedEnd, fileSize - 1) };
}

function readableStreamBody(
  stream: ReturnType<typeof createReadStream>,
): BodyInit {
  return Readable.toWeb(stream) as unknown as BodyInit;
}

function isTrustedAppFileRequest(details: {
  frame?: { url?: string | null } | null;
}): boolean {
  const frameOrigin = originFromUrl(details.frame?.url ?? null);
  return (
    frameOrigin === APP_PROTOCOL_ORIGIN || frameOrigin === rendererDevOrigin()
  );
}

function originFromUrl(value: string | null): string | null {
  if (value == null) return null;
  try {
    const url = new URL(value);
    return url.protocol === "app:" ? `app://${url.host}` : url.origin;
  } catch {
    return null;
  }
}

function rendererDevOrigin(): string | null {
  if (app.isPackaged) return null;
  const value = process.env.ELECTRON_RENDERER_URL;
  if (value == null || value.trim().length === 0) return null;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : null;
  } catch {
    return null;
  }
}

function mimeTypeForPath(filePath: string): string {
  switch (path.extname(filePath).toLowerCase()) {
    case ".avif":
      return "image/avif";
    case ".css":
      return "text/css; charset=utf-8";
    case ".gif":
      return "image/gif";
    case ".html":
      return "text/html; charset=utf-8";
    case ".ico":
      return "image/x-icon";
    case ".jpeg":
    case ".jpg":
      return "image/jpeg";
    case ".js":
    case ".mjs":
      return "text/javascript; charset=utf-8";
    case ".json":
    case ".map":
      return "application/json; charset=utf-8";
    case ".mp4":
      return "video/mp4";
    case ".ogg":
    case ".ogv":
      return "video/ogg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml; charset=utf-8";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".wasm":
      return "application/wasm";
    case ".webm":
      return "video/webm";
    case ".webp":
      return "image/webp";
    case ".woff":
      return "font/woff";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}

function applyOwlFeatureBootstrapCache(featureNames: string[] = []): void {
  owlBootstrapFeatureNames = normalizeOwlFeatureNames(featureNames);
  const pendingState = getPendingOwlFeatureState();
  const enabledFromCommandLine = readOwlCommandLineSwitch(
    "enable-features",
  ).filter(
    (featureName) => !pendingState.disabledFeatureNames.includes(featureName),
  );
  const disabledFromCommandLine = readOwlCommandLineSwitch(
    "disable-features",
  ).filter(
    (featureName) => !pendingState.enabledFeatureNames.includes(featureName),
  );
  writeOwlCommandLineSwitch("enable-features", [
    ...enabledFromCommandLine,
    ...pendingState.enabledFeatureNames,
  ]);
  writeOwlCommandLineSwitch("disable-features", [
    ...disabledFromCommandLine,
    ...pendingState.disabledFeatureNames,
  ]);
}

function createOwlFeatureSettingsApi(): {
  getState(): Promise<OwlFeatureSettingsState>;
  isOwlFeatureEnabled(name: string): Promise<boolean>;
  setFeatureNames(value: unknown): Promise<OwlFeatureSettingsState>;
} {
  return {
    async getState() {
      return getOwlFeatureSettingsState();
    },
    async isOwlFeatureEnabled(name) {
      return isOwlFeatureEnabled(name);
    },
    async setFeatureNames(value) {
      setPendingOwlFeatureState(value);
      return getOwlFeatureSettingsState();
    },
  };
}

function isOwlFeatureEnabled(name: string): boolean {
  const binding = getOwlFeatureNativeBinding();
  if (binding == null) return false;
  try {
    return binding.isOwlFeatureEnabled(name);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Unsupported Owl feature:")
    ) {
      return false;
    }
    throw error;
  }
}

function setPendingOwlFeatureState(value: unknown): void {
  const pendingState = normalizeOwlFeatureState(
    parseOwlFeatureNameState(value),
  );
  const cachePath = getOwlFeatureBootstrapCachePath();
  mkdirSync(path.dirname(cachePath), { recursive: true });
  writeFileAtomically(
    cachePath,
    JSON.stringify({
      enabledOwlFeatureNames: pendingState.enabledFeatureNames,
      disabledOwlFeatureNames: pendingState.disabledFeatureNames,
    }),
  );
}

function getOwlFeatureSettingsState(): OwlFeatureSettingsState {
  const activeFeatureNames = normalizeOwlFeatureNames(
    readOwlCommandLineSwitch("enable-features"),
  );
  const activeDisabledFeatureNames = normalizeOwlFeatureNames(
    readOwlCommandLineSwitch("disable-features"),
  ).filter((featureName) => !activeFeatureNames.includes(featureName));
  const pendingState = getPendingOwlFeatureState();
  return {
    activeFeatureNames,
    activeDisabledFeatureNames,
    pendingFeatureNames: pendingState.enabledFeatureNames,
    pendingDisabledFeatureNames: pendingState.disabledFeatureNames,
    restartRequired: !(
      sameFeatureNameSet(
        activeFeatureNames,
        pendingState.enabledFeatureNames,
      ) &&
      sameFeatureNameSet(
        activeDisabledFeatureNames,
        pendingState.disabledFeatureNames,
      )
    ),
  };
}

function getOwlFeatureNativeBinding(): OwlFeatureNativeBinding | null {
  const linkedBinding = (process as ProcessWithLinkedBinding)._linkedBinding;
  if (typeof linkedBinding !== "function") return null;
  let binding: unknown;
  try {
    binding = linkedBinding.call(process, OWL_FEATURES_LINKED_BINDING_NAME);
  } catch (error) {
    if (isMissingOwlFeatureBindingError(error)) return null;
    throw error;
  }
  return parseOwlFeatureNativeBinding(binding);
}

function getPendingOwlFeatureState(): OwlFeatureNameState {
  const cachedState = readCachedOwlFeatureState();
  return normalizeOwlFeatureState({
    enabledFeatureNames: [
      ...cachedState.enabledFeatureNames,
      ...owlBootstrapFeatureNames,
    ],
    disabledFeatureNames: cachedState.disabledFeatureNames,
  });
}

function readCachedOwlFeatureState(): OwlFeatureNameState {
  try {
    const value = JSON.parse(
      readFileSync(getOwlFeatureBootstrapCachePath(), "utf8"),
    );
    if (!isRecord(value)) throw Error("Invalid Owl feature cache");
    return normalizeOwlFeatureState({
      enabledFeatureNames: arrayOfStrings(value.enabledOwlFeatureNames),
      disabledFeatureNames: arrayOfStrings(value.disabledOwlFeatureNames),
    });
  } catch {
    return { enabledFeatureNames: [], disabledFeatureNames: [] };
  }
}

function parseOwlFeatureNameState(value: unknown): OwlFeatureNameState {
  if (!isRecord(value))
    return { enabledFeatureNames: [], disabledFeatureNames: [] };
  return {
    enabledFeatureNames: arrayOfStrings(value.enabledFeatureNames),
    disabledFeatureNames: arrayOfStrings(value.disabledFeatureNames),
  };
}

function normalizeOwlFeatureState(
  state: OwlFeatureNameState,
): OwlFeatureNameState {
  const enabledFeatureNames = normalizeOwlFeatureNames(
    state.enabledFeatureNames,
  );
  return {
    enabledFeatureNames,
    disabledFeatureNames: normalizeOwlFeatureNames(
      state.disabledFeatureNames,
    ).filter((featureName) => !enabledFeatureNames.includes(featureName)),
  };
}

function normalizeOwlFeatureNames(featureNames: unknown): string[] {
  const supportedFeatureNames = getSupportedOwlFeatureNames();
  const result: string[] = [];
  for (const featureName of arrayOfStrings(featureNames)) {
    if (
      supportedFeatureNames != null &&
      !supportedFeatureNames.includes(featureName)
    ) {
      continue;
    }
    if (!result.includes(featureName)) result.push(featureName);
  }
  return result;
}

function getSupportedOwlFeatureNames(): readonly string[] | null {
  return Array.isArray(sharedRuntime.qi)
    ? (sharedRuntime.qi as readonly string[])
    : null;
}

function readOwlCommandLineSwitch(name: string): string[] {
  return app.commandLine.getSwitchValue(name).split(",").filter(Boolean);
}

function writeOwlCommandLineSwitch(name: string, values: string[]): void {
  const normalizedValues = normalizeOwlFeatureNames(values);
  app.commandLine.removeSwitch(name);
  if (normalizedValues.length > 0) {
    app.commandLine.appendSwitch(name, normalizedValues.join(","));
  }
}

function sameFeatureNameSet(left: string[], right: string[]): boolean {
  const normalizedLeft = [...normalizeOwlFeatureNames(left)].sort();
  const normalizedRight = [...normalizeOwlFeatureNames(right)].sort();
  return (
    normalizedLeft.length === normalizedRight.length &&
    normalizedLeft.every(
      (featureName, index) => normalizedRight[index] === featureName,
    )
  );
}

function getOwlFeatureBootstrapCachePath(): string {
  return path.join(app.getPath("userData"), OWL_FEATURE_BOOTSTRAP_CACHE_FILE);
}

function isMissingOwlFeatureBindingError(error: unknown): boolean {
  return error instanceof Error
    ? error.message.includes(OWL_FEATURES_LINKED_BINDING_NAME) &&
        error.message.includes("No such binding was linked:")
    : false;
}

function parseOwlFeatureNativeBinding(value: unknown): OwlFeatureNativeBinding {
  if (isRecord(value) && typeof value.isOwlFeatureEnabled === "function") {
    return {
      isOwlFeatureEnabled: value.isOwlFeatureEnabled as (
        name: string,
      ) => boolean,
    };
  }
  throw Error("Invalid Owl feature native binding");
}

function writeFileAtomically(filePath: string, data: string): void {
  const tempPath = path.join(
    path.dirname(filePath),
    `.${path.basename(filePath)}.tmp-${Date.now()}-${randomUUID()}`,
  );
  try {
    writeFileSync(tempPath, data, "utf8");
    renameSync(tempPath, filePath);
  } catch (error) {
    rmSync(tempPath, { force: true });
    throw error;
  }
}

function arrayOfStrings(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
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
  (sharedRuntime.Ar as (() => void) | undefined)?.();
  const codexHome = (sharedRuntime.Ur as () => string)();
  const desktopRoot = path.join(moduleDir, "..", "..");
  const repoRoot = path.join(desktopRoot, "..");
  const globalStatePath = path.join(codexHome, ".codex-global-state.json");
  const globalState = new FileBackedGlobalStateStore(globalStatePath);
  if (!existsSync(globalStatePath) && !existsSync(`${globalStatePath}.bak`)) {
    globalState.set(getDesktopFirstSeenAtMsKey(), Date.now());
  }
  return {
    codexHome,
    preloadPath: path.join(moduleDir, "preload.js"),
    desktopRoot,
    repoRoot,
    globalState,
    settingsStore: createSettingsStoreBoundary(
      path.join(codexHome, "config.toml"),
      globalState,
    ),
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
  streams: Array<
    NodeJS.WriteStream & { __codexIgnoreConsoleWriteErrors?: boolean }
  > = [process.stdout, process.stderr],
): void {
  for (const stream of streams) {
    if (stream.__codexIgnoreConsoleWriteErrors) continue;
    stream.__codexIgnoreConsoleWriteErrors = true;
    stream.on("error", (error) => {
      if (!isIgnoredConsoleWriteError(error)) throw error;
    });
  }
}

function installDesktopLogBridge(
  nonFatalReporter: NonFatalReporter,
  structuredLogger: DesktopStructuredLogger,
  appSessionId: string,
  enabledLevels: Iterable<string>,
): void {
  const fileLogger = createFileBasedLogger({ appSessionId, nonFatalReporter });
  const consoleLog = createConsoleLogWriter();
  const enabledLevelSet = new Set(enabledLevels);
  const shouldLog = (level: string) => {
    const runtimeShouldLog = sharedRuntime.h as
      | ((level: string, enabled: Iterable<string>) => boolean)
      | undefined;
    return typeof runtimeShouldLog === "function"
      ? runtimeShouldLog(level, enabledLevels)
      : enabledLevelSet.has(level);
  };
  const logAtLevel = (
    level: string,
    message: string,
    details?: StructuredLogDetails,
  ) => {
    if (!shouldLog(level)) return;
    const normalizedDetails = normalizeStructuredLogDetails(details);
    const flatDetails = {
      ...normalizedDetails.safe,
      ...normalizedDetails.sensitive,
    };
    const printableMessage =
      Object.keys(flatDetails).length === 0
        ? message
        : `${message} ${formatStructuredLogDetails(flatDetails)}`;
    consoleLog(level, printableMessage);
    writeFileLoggerLine(fileLogger, level, printableMessage);
    structuredLogger.log(level, message, normalizedDetails.safe);
  };
  const registeredLogger = {
    trace: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("trace", message, details),
    debug: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("debug", message, details),
    info: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("info", message, details),
    warning: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("warning", message, details),
    error: (message: string, details?: StructuredLogDetails) =>
      logAtLevel("error", message, details),
    log: (level: string, message: string, details?: StructuredLogDetails) =>
      logAtLevel(level, message, details),
    dispose() {},
  };
  const registerLogger = sharedRuntime.ii as
    | ((logger: typeof registeredLogger) => void)
    | undefined;
  registerLogger?.(registeredLogger);
}

function parseCodexDeepLink(value: string): DeepLinkRoute | null {
  if (!value.startsWith("codex://")) return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "codex:") return null;

  switch (url.host) {
    case "plugins":
      return (
        parsePluginInstallDeepLink(url) ??
        parseLocalPluginDetailDeepLink(url) ??
        parsePluginDetailDeepLink(url)
      );
    case "pets":
      return parsePetInstallDeepLink(url);
    case "automations":
      return { kind: "automations" };
    case "codex-app":
      return parseCodexAppDeepLink(url);
    case "connector":
      return parseConnectorDeepLink(url, value);
    case "launch":
      return deepLinkPathSegments(url).length === 0 ? { kind: "launch" } : null;
    case "new":
      return parseNewThreadDeepLink(url);
    case "settings":
      return parseSettingsDeepLink(url);
    case "skills":
      return { kind: "skills" };
    case "threads": {
      if (deepLinkPathSegments(url)[0] === "new") {
        return parseNewThreadDeepLink(url) ?? { kind: "newThread" };
      }
      const parseLocalConversation = sharedRuntime.ha as
        | ((
            url: URL,
            options: { allowExtraPathSegments: boolean },
          ) => object | null)
        | undefined;
      const route = parseLocalConversation?.(url, {
        allowExtraPathSegments: true,
      });
      return route == null ? null : { kind: "localConversation", ...route };
    }
    default:
      return null;
  }
}

function parseProcessDeepLinks(
  argv: string[],
  {
    allowBareWindowsProjectPathArg = false,
  }: { allowBareWindowsProjectPathArg?: boolean } = {},
): DeepLinkRoute[] {
  const routes: DeepLinkRoute[] = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === OPEN_PROJECT_ARG) {
      const projectPath = argv[index + 1]?.trim();
      index += 1;
      if (projectPath) routes.push({ kind: "newThread", path: projectPath });
      continue;
    }
    if (arg.startsWith(`${OPEN_PROJECT_ARG}=`)) {
      const projectPath = arg.slice(`${OPEN_PROJECT_ARG}=`.length).trim();
      if (projectPath) routes.push({ kind: "newThread", path: projectPath });
      continue;
    }
    const deepLinkRoute = parseCodexDeepLink(arg);
    if (deepLinkRoute) {
      routes.push(deepLinkRoute);
      continue;
    }
    if (
      allowBareWindowsProjectPathArg &&
      index > 0 &&
      isWindowsProjectPath(arg)
    ) {
      routes.push({ kind: "newThread", path: arg });
    }
  }
  return routes;
}

function deepLinkPathSegments(url: URL): string[] {
  return url.pathname.split("/").filter(Boolean);
}

function deepLinkSearchParam(url: URL, name: string): string | null {
  const value = url.searchParams.get(name);
  return value == null || value.trim().length === 0 ? null : value;
}

function parseSettingsDeepLink(url: URL): DeepLinkRoute {
  const sectionPath = deepLinkPathSegments(url).join("/");
  const section = SETTINGS_SECTIONS.find(
    (candidate) => candidate === sectionPath,
  );
  if (section == null) return { kind: "settings" };
  if (section === "connections/ssh/add") {
    const name = deepLinkSearchParam(url, "name")?.trim();
    return name == null || !hasOnlyQueryKeys(url, SSH_ADD_QUERY_KEYS)
      ? { kind: "settings", section: "connections/ssh" }
      : {
          kind: "settings",
          section,
          search: `?name=${encodeURIComponent(name)}`,
        };
  }
  return { kind: "settings", section };
}

function parseCodexAppDeepLink(url: URL): DeepLinkRoute | null {
  const [action] = deepLinkPathSegments(url);
  return action === "apply-config" ? { kind: "applyCodexAppConfig" } : null;
}

function parseNewThreadDeepLink(url: URL): DeepLinkRoute | null {
  const prompt = deepLinkSearchParam(url, "prompt");
  const originUrl = deepLinkSearchParam(url, "originUrl");
  const projectPath = deepLinkSearchParam(url, "path");
  return prompt == null && originUrl == null && projectPath == null
    ? null
    : {
        kind: "newThread",
        prompt: prompt ?? undefined,
        originUrl,
        path: projectPath,
      };
}

function parsePluginInstallDeepLink(url: URL): DeepLinkRoute | null {
  const [action, encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (action !== "install" || extraSegment != null) return null;
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  if (pluginName == null || !hasOnlyQueryKeys(url, PLUGIN_INSTALL_QUERY_KEYS)) {
    return null;
  }
  const marketplaceName = deepLinkSearchParam(url, "marketplace")?.trim();
  return isValidMarketplaceName(marketplaceName)
    ? { kind: "pluginInstall", marketplaceName, pluginName }
    : null;
}

function parseLocalPluginDetailDeepLink(url: URL): DeepLinkRoute | null {
  const [encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (
    extraSegment != null ||
    !hasOnlyQueryKeys(url, LOCAL_PLUGIN_DETAIL_QUERY_KEYS)
  ) {
    return null;
  }
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  const marketplacePath = deepLinkSearchParam(url, "marketplacePath")?.trim();
  const mode = deepLinkSearchParam(url, "mode")?.trim();
  return pluginName == null ||
    marketplacePath == null ||
    (mode != null && mode !== "share") ||
    !isSafeMarketplacePath(marketplacePath)
    ? null
    : {
        kind: "localPluginDetail",
        hostId: null,
        marketplacePath,
        pluginName,
        openShareDialog: mode === "share",
      };
}

function parsePluginDetailDeepLink(url: URL): DeepLinkRoute | null {
  const [encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (extraSegment != null) return null;
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  if (pluginName == null) return null;
  const toPluginId = sharedRuntime.da as
    | ((name: string) => unknown)
    | undefined;
  const pluginId = toPluginId?.(pluginName);
  if (pluginId == null) return null;
  return {
    kind: "pluginDetail",
    hostId: deepLinkSearchParam(url, "hostId"),
    pluginId,
    source:
      deepLinkSearchParam(url, "source") === "manage" ? sharedRuntime.aa : null,
  };
}

function parsePetInstallDeepLink(url: URL): DeepLinkRoute | null {
  const [action, extraSegment] = deepLinkPathSegments(url);
  if (
    action !== "install" ||
    extraSegment != null ||
    !hasOnlyQueryKeys(url, PET_INSTALL_QUERY_KEYS)
  ) {
    return null;
  }
  const name = deepLinkSearchParam(url, "name")?.trim();
  const description = deepLinkSearchParam(url, "description")?.trim() ?? null;
  const imageUrl = deepLinkSearchParam(url, "imageUrl");
  if (name == null || imageUrl == null) return null;
  try {
    const parsedImageUrl = new URL(imageUrl);
    return parsedImageUrl.protocol === "https:"
      ? {
          kind: "petInstall",
          name,
          description,
          imageUrl: parsedImageUrl.toString(),
        }
      : null;
  } catch {
    return null;
  }
}

function parseConnectorDeepLink(
  url: URL,
  fullRedirectUrl: string,
): DeepLinkRoute | null {
  const [action] = deepLinkPathSegments(url);
  return action === "oauth_callback"
    ? {
        kind: "connectorOAuthCallback",
        fullRedirectUrl,
        returnTo: deepLinkSearchParam(url, "returnTo"),
      }
    : null;
}

function hasOnlyQueryKeys(url: URL, allowedKeys: ReadonlySet<string>): boolean {
  for (const key of url.searchParams.keys()) {
    if (!allowedKeys.has(key)) return false;
  }
  return true;
}

function decodeDeepLinkSegment(value: string | undefined): string | null {
  if (value == null || value.trim().length === 0) return null;
  try {
    const decoded = decodeURIComponent(value).trim();
    return decoded.length > 0 ? decoded : null;
  } catch {
    return null;
  }
}

function isValidMarketplaceName(value: string | undefined): boolean {
  const validate = sharedRuntime.ma as
    | ((name: string | undefined) => boolean)
    | undefined;
  return typeof validate === "function" ? validate(value) : Boolean(value);
}

function isSafeMarketplacePath(value: string): boolean {
  const isSafePath = sharedRuntime.Ss as
    | ((pathValue: string) => boolean)
    | undefined;
  const isPluginPathBlocked = sharedRuntime.Cs as
    | ((pathValue: string) => boolean)
    | undefined;
  const safe =
    typeof isSafePath === "function" ? isSafePath(value) : value.length > 0;
  const blocked =
    typeof isPluginPathBlocked === "function"
      ? isPluginPathBlocked(value)
      : false;
  return safe && !blocked;
}

function isWindowsProjectPath(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.length > 0 &&
    (/^[a-zA-Z]:[\\/]/.test(trimmed) || trimmed.startsWith("\\\\"))
  );
}

function normalizeError(error: unknown): Error {
  if (error instanceof Error) return error;
  const convert = sharedRuntime.bs as ((error: unknown) => Error) | undefined;
  return typeof convert === "function" ? convert(error) : Error(String(error));
}

function createDeepLinkCoordinator({
  app: electronApp,
  ensurePrimaryWindowVisible,
  errorReporter,
  initialArgv,
  isMacOS,
  navigateToRoute,
}: DeepLinkCoordinatorOptions): DeepLinkCoordinator {
  const pendingRoutes: DeepLinkRoute[] = [];
  const logger =
    typeof sharedRuntime.ei === "function"
      ? (sharedRuntime.ei as () => ReturnType<typeof runtimeLogger>)()
      : runtimeLogger();

  async function flushPendingDeepLinks(): Promise<void> {
    if (pendingRoutes.length === 0 || !electronApp.isReady()) return;
    const targetWindow = await ensurePrimaryWindowVisible();
    if (!targetWindow) return;
    const route = pendingRoutes.at(-1);
    pendingRoutes.length = 0;
    if (route) await navigateToRoute(targetWindow, route);
  }

  function queueRoute(route: DeepLinkRoute): void {
    pendingRoutes.push(route);
    if (!electronApp.isReady()) return;
    flushPendingDeepLinks().catch((error) => {
      errorReporter.reportNonFatal(normalizeError(error), {
        kind: "flush-pending-deep-links",
      });
    });
  }

  function queueCodexDeepLinkUrl(url: string, hostId?: string | null): boolean {
    const route = parseCodexDeepLink(url);
    if (!route) return false;
    queueRoute(
      route.kind === "localPluginDetail" && hostId != null
        ? { ...route, hostId }
        : route,
    );
    return true;
  }

  const allowBareWindowsProjectPathArg = electronApp.isPackaged && !isMacOS;
  function queueInitialArgs(args: string[]): void {
    for (const route of parseProcessDeepLinks(args)) queueRoute(route);
  }

  function queueProcessArgs(args: string[]): boolean {
    const routes = parseProcessDeepLinks(args, {
      allowBareWindowsProjectPathArg,
    });
    for (const route of routes) queueRoute(route);
    return routes.length > 0;
  }

  function registerProtocolClient(): void {
    if (electronApp.isPackaged && process.platform !== "win32") return;
    try {
      if (!electronApp.setAsDefaultProtocolClient("codex")) {
        logger.warning("Failed to register codex:// protocol handler", {
          safe: { isPackaged: electronApp.isPackaged },
          sensitive: {},
        });
      }
    } catch (error) {
      logger.warning("Failed to register codex:// protocol handler", {
        safe: {},
        sensitive: { error },
      });
    }
  }

  if (isMacOS) {
    electronApp.on("open-url", (event, url) => {
      if (queueCodexDeepLinkUrl(url)) event.preventDefault();
    });
  }
  queueInitialArgs(initialArgv);

  return {
    registerProtocolClient,
    queueProcessArgs,
    flushPendingDeepLinks,
    queueCodexDeepLinkUrl,
  };
}

async function verifyStateDatabaseAvailable(): Promise<boolean> {
  const openSqliteDatabase = sharedRuntime.Ar as (() => unknown) | undefined;
  const database = openSqliteDatabase?.();
  if (database == null) {
    throw Error("SQLite is only available in the Electron app.");
  }
  verifySqliteReady(database);
  return true;
}

function extractStateDatabasePathFromError(error: unknown): string | null {
  const message = error instanceof Error ? error.message : String(error);
  return (
    /failed to initialize sqlite state db at (.*?): /.exec(message)?.[1] ?? null
  );
}

async function recoverStateDatabaseAccess({
  databasePath,
  open,
}: {
  databasePath?: string | ((error: unknown) => string | null);
  open(): void | Promise<void>;
}): Promise<boolean> {
  const pathFromError =
    databasePath ??
    ((error: unknown) => extractStateDatabasePathFromError(error));
  return openStateDatabaseWithRecovery({
    databasePath: pathFromError,
    open,
  });
}

async function openStateDatabaseWithRecovery({
  databasePath,
  onBackfillWait,
  open,
  shouldHandleError = () => true,
}: StateDatabaseRecoveryOptions): Promise<boolean> {
  const attemptedRecoveryPaths = new Set<string>();
  let waitedForBackfill = false;
  for (;;) {
    try {
      await open();
      return true;
    } catch (error) {
      if (!shouldHandleError(error)) throw error;
      if (
        !waitedForBackfill &&
        stateDatabaseErrorMessage(error)
          .toLowerCase()
          .includes("timed out waiting for state db backfill")
      ) {
        waitedForBackfill = true;
        await onBackfillWait?.();
        continue;
      }

      const resolvedDatabasePath = resolveRecoveryDatabasePath(
        databasePath,
        error,
      );
      let displayError: unknown = error;
      if (
        resolvedDatabasePath != null &&
        !attemptedRecoveryPaths.has(resolvedDatabasePath) &&
        (isCorruptStateDatabaseError(error, resolvedDatabasePath) ||
          (await databasePathCanBeRecovered(resolvedDatabasePath)))
      ) {
        attemptedRecoveryPaths.add(resolvedDatabasePath);
        try {
          await backUpStateDatabaseFiles(resolvedDatabasePath);
          continue;
        } catch (recoveryError) {
          displayError = { originalError: error, recoveryError };
        }
      }

      for (;;) {
        const action = await showStateDatabaseAccessDialog(
          resolvedDatabasePath,
          displayError,
        );
        if (action === "retry") break;
        if (action === "recover" && resolvedDatabasePath != null) {
          try {
            await backUpStateDatabaseFiles(resolvedDatabasePath);
            break;
          } catch (recoveryError) {
            displayError = {
              originalError: displayError,
              recoveryError,
            };
            continue;
          }
        }
        app.quit();
        return false;
      }
    }
  }
}

async function showStateDatabaseRebuiltDialog(
  databasePath: string,
  backupDirectory: string,
  ownerWindow?: BrowserWindowLike | null,
): Promise<void> {
  const options = {
    type: "info" as const,
    buttons: ["OK"],
    defaultId: 0,
    cancelId: 0,
    message: `${app.getName()} rebuilt its local database.`,
    detail: [
      "Codex detected a damaged local database, moved it into a backup folder, and will continue startup with a fresh database.",
      "",
      `Database path: ${databasePath}`,
      "",
      `Backup folder: ${backupDirectory}`,
    ].join("\n"),
    noLink: true,
  };
  if (ownerWindow == null || ownerWindow.isDestroyed()) {
    await dialog.showMessageBox(options);
    return;
  }
  await dialog.showMessageBox(ownerWindow as never, options);
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
    .filter(
      (arg) =>
        !arg.startsWith("-") && !arg.toLowerCase().startsWith("codex://"),
    )
    .map((arg) =>
      arg.toLowerCase().startsWith("file://") ? new URL(arg).pathname : arg,
    )
    .filter((arg) =>
      platform === "win32"
        ? path.win32.isAbsolute(arg)
        : path.posix.isAbsolute(arg),
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
  openPathsHandler =
    handlePaths ?? ((pathsToOpen) => queuedOpenPaths.push(...pathsToOpen));
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
    if (project.hostId !== hostId || typeof project.remotePath !== "string")
      continue;
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
    new Set(
      (fallbackProjects ?? [])
        .map((project) => project.path.trim())
        .filter(Boolean),
    ),
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

class FileBackedGlobalStateStore implements KeyValueStore {
  private readonly filePath: string;
  private readonly state: Map<string, unknown>;
  private persistQueued: Promise<void> = Promise.resolve();

  constructor(filePath: string) {
    this.filePath = filePath;
    this.state = loadGlobalStateMap(filePath);
  }

  getStateFilePath(): string {
    return this.filePath;
  }

  get(key: string): unknown {
    const storedValue = this.state.get(key);
    return storedValue !== undefined && storedValue != null
      ? storedValue
      : (getDefaultGlobalStateValue(key) ?? null);
  }

  getStored(key: string): unknown {
    return this.state.get(key);
  }

  set(key: string, value: unknown): void {
    if (value === undefined) this.state.delete(key);
    else this.state.set(key, value);
    this.persistForKey(key);
  }

  update(
    key: string,
    updater: (value: unknown | null) => unknown | undefined,
  ): void {
    const nextValue = updater(this.state.has(key) ? this.state.get(key) : null);
    if (nextValue === undefined) this.state.delete(key);
    else this.state.set(key, nextValue);
    this.persistForKey(key);
  }

  delete(key: string): void {
    this.state.delete(key);
    this.persistForKey(key);
  }

  flush(): Promise<void> {
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(() => persistGlobalStateMap(this.filePath, this.state));
    return this.persistQueued;
  }

  private persistForKey(_key: string): void {
    this.persistQueued = this.persistQueued
      .catch(() => undefined)
      .then(() => persistGlobalStateMap(this.filePath, this.state));
    void this.persistQueued;
  }
}

function createSettingsStoreBoundary(
  filePath: string,
  _globalState: KeyValueStore,
): {
  getStateFilePath(): string;
  get(key: string): unknown;
  getEffective(key: string): unknown;
  set(key: string, value: unknown): void;
  flush(): Promise<void>;
  initialize(options: {
    readConfig(): Promise<unknown> | unknown;
    batchWriteConfigValues?(value: unknown): Promise<void> | void;
  }): Promise<void>;
} {
  const values = new Map<string, unknown>();
  return {
    getStateFilePath: () => filePath,
    get: (key) => values.get(key),
    getEffective: (key) =>
      values.get(key) ?? getDefaultDesktopSettingValue(key),
    set: (key, value) => {
      if (value === undefined) values.delete(key);
      else values.set(key, value);
    },
    async flush() {},
    async initialize({ readConfig }) {
      const config = await readConfig();
      const desktopConfig =
        isRecord(config) && isRecord(config.desktop) ? config.desktop : {};
      values.clear();
      for (const [key, value] of Object.entries(desktopConfig)) {
        values.set(key, value);
      }
    },
  };
}

function loadGlobalStateMap(filePath: string): Map<string, unknown> {
  if (!existsSync(filePath)) return new Map();
  const primary = readGlobalStateMap(filePath);
  if (primary != null) return primary;
  const backup = readGlobalStateMap(`${filePath}.bak`);
  if (backup == null) return new Map();
  runtimeLogger().warning("Loaded global state from backup", {
    safe: {},
    sensitive: {},
  });
  return backup;
}

function readGlobalStateMap(filePath: string): Map<string, unknown> | null {
  if (!existsSync(filePath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8"));
    if (!isRecord(parsed))
      throw Error("Expected global state to be a JSON object");
    return new Map(Object.entries(parsed));
  } catch (error) {
    runtimeLogger().warning("Failed to load global state", {
      safe: {},
      sensitive: { error },
    });
    return null;
  }
}

function persistGlobalStateMap(
  filePath: string,
  state: Map<string, unknown>,
): void {
  try {
    const serialized = JSON.stringify(Object.fromEntries(state));
    writeFileAtomically(filePath, serialized);
    writeFileAtomically(`${filePath}.bak`, serialized);
  } catch (error) {
    runtimeLogger().warning("Failed to persist global state", {
      safe: {},
      sensitive: { error },
    });
  }
}

function getDefaultGlobalStateValue(key: string): unknown {
  const getDefault = sharedRuntime.Os as
    | ((key: string) => unknown | null | undefined)
    | undefined;
  return getDefault?.(key) ?? null;
}

function getDefaultDesktopSettingValue(key: string): unknown {
  const getSettingDefinition = sharedRuntime.Si as
    | ((key: string) => { default?: unknown } | null | undefined)
    | undefined;
  return getSettingDefinition?.(key)?.default;
}

function getDesktopFirstSeenAtMsKey(): string {
  const desktopStateKeys = sharedRuntime.Ds as
    | { DESKTOP_FIRST_SEEN_AT_MS?: string }
    | undefined;
  return (
    desktopStateKeys?.DESKTOP_FIRST_SEEN_AT_MS ?? "desktop-first-seen-at-ms"
  );
}

function filterStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === "string")
    : [];
}

function filterStringRecord(value: unknown): Record<string, string> {
  if (typeof value !== "object" || value == null || Array.isArray(value))
    return {};
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

function createConsoleLogWriter(): (level: string, message: string) => void {
  let consoleIsClosed = false;
  return (level, message) => {
    if (consoleIsClosed) return;
    try {
      switch (level) {
        case "error":
          console.error(message);
          break;
        case "warning":
          console.warn(message);
          break;
        case "info":
          console.info(message);
          break;
        case "debug":
          console.debug(message);
          break;
        default:
          console.log(message);
      }
    } catch (error) {
      if (!isIgnoredConsoleWriteError(error)) throw error;
      consoleIsClosed = true;
    }
  };
}

function normalizeStructuredLogDetails(
  details: StructuredLogDetails | null | undefined,
): Required<StructuredLogDetails> {
  return {
    safe: details?.safe ?? {},
    sensitive: details?.sensitive ?? {},
  };
}

function formatStructuredLogDetails(details: Record<string, unknown>): string {
  const runtimeFormatter = sharedRuntime.$r as
    | ((details: Record<string, unknown>) => string)
    | undefined;
  if (typeof runtimeFormatter === "function") return runtimeFormatter(details);
  return JSON.stringify(details);
}

function writeFileLoggerLine(
  fileLogger: LoggerSink,
  level: string,
  message: string,
): void {
  fileLogger.logLine(`${new Date().toISOString()} ${level} ${message}`);
}

function verifySqliteReady(database: unknown): void {
  const candidate = database as {
    prepare?(sql: string): { get(): Record<string, unknown> | undefined };
  };
  if (typeof candidate.prepare !== "function") {
    throw Error("SQLite database handle does not expose prepare().");
  }
  if (
    typeof candidate.prepare("PRAGMA user_version").get()?.user_version !==
    "number"
  ) {
    throw Error("SQLite readiness query returned an unexpected result.");
  }
}

function resolveRecoveryDatabasePath(
  databasePath: StateDatabaseRecoveryOptions["databasePath"],
  error: unknown,
): string | null {
  const value =
    typeof databasePath === "function" ? databasePath(error) : databasePath;
  return value != null &&
    (path.posix.isAbsolute(value) || path.win32.isAbsolute(value))
    ? value
    : null;
}

async function showStateDatabaseAccessDialog(
  databasePath: string | null,
  error: unknown,
): Promise<keyof typeof STATE_DATABASE_DIALOG_LABELS> {
  const actions =
    databasePath == null
      ? (["retry", "quit"] as const)
      : (["retry", "recover", "quit"] as const);
  const response = await dialog.showMessageBox({
    type: "error",
    buttons: actions.map((action) => STATE_DATABASE_DIALOG_LABELS[action]),
    defaultId: 0,
    cancelId: actions.length - 1,
    message: `${app.getName()} cannot access its local database.`,
    detail: [
      "The app cannot finish launching until its SQLite database is accessible.",
      "",
      `Database path: ${databasePath ?? "unavailable in app-server startup error"}`,
      "",
      databasePath == null
        ? `Close other ${app.getName()} applications, then click Retry to check whether access has been restored.`
        : `Close other ${app.getName()} applications, then click Retry to check whether access has been restored. If the database cannot be opened, Back Up and Rebuild moves it aside so the app can create a fresh one.`,
      "",
      `Error: ${stateDatabaseErrorMessage(error)}`,
    ].join("\n"),
    noLink: true,
  });
  return actions[response.response] ?? "quit";
}

async function backUpStateDatabaseFiles(databasePath: string): Promise<string> {
  const databaseDirectory = path.dirname(databasePath);
  const directoryStats = await statOrNull(databaseDirectory);
  if (directoryStats?.isFile())
    return backUpDatabaseDirectory(databaseDirectory);

  const backupDirectory =
    await createDatabaseBackupDirectory(databaseDirectory);
  for (const candidatePath of stateDatabaseFilePaths(databasePath)) {
    if (await pathExists(candidatePath)) {
      await fsPromises.rename(
        candidatePath,
        path.join(backupDirectory, path.basename(candidatePath)),
      );
    }
  }
  await showStateDatabaseRebuiltDialog(databasePath, backupDirectory);
  return backupDirectory;
}

async function backUpDatabaseDirectory(
  databaseDirectory: string,
): Promise<string> {
  const backupDirectory = await createUniqueDirectory(
    path.join(
      path.dirname(databaseDirectory),
      `${path.basename(databaseDirectory)}.${STATE_DATABASE_BACKUP_DIRECTORY}`,
    ),
  );
  await fsPromises.rename(
    databaseDirectory,
    path.join(backupDirectory, path.basename(databaseDirectory)),
  );
  await fsPromises.mkdir(databaseDirectory, { recursive: true });
  await showStateDatabaseRebuiltDialog(databaseDirectory, backupDirectory);
  return backupDirectory;
}

function stateDatabaseFilePaths(databasePath: string): string[] {
  return [databasePath, `${databasePath}-wal`, `${databasePath}-shm`];
}

async function createDatabaseBackupDirectory(
  databaseDirectory: string,
): Promise<string> {
  return createUniqueDirectory(
    path.join(databaseDirectory, STATE_DATABASE_BACKUP_DIRECTORY),
  );
}

async function createUniqueDirectory(parentDirectory: string): Promise<string> {
  await fsPromises.mkdir(parentDirectory, { recursive: true });
  for (let index = 0; ; index += 1) {
    const candidate = path.join(
      parentDirectory,
      `sqlite-${Math.floor(Date.now() / 1000)}-${index}`,
    );
    try {
      await fsPromises.mkdir(candidate, { recursive: false });
      return candidate;
    } catch (error) {
      if (!hasNodeErrorCode(error, "EEXIST")) throw error;
    }
  }
}

async function pathExists(candidatePath: string): Promise<boolean> {
  try {
    await fsPromises.stat(candidatePath);
    return true;
  } catch (error) {
    if (hasNodeErrorCode(error, "ENOENT")) return false;
    throw error;
  }
}

async function databasePathCanBeRecovered(
  databasePath: string,
): Promise<boolean> {
  if ((await statOrNull(path.dirname(databasePath)))?.isFile()) return true;
  return (await statOrNull(databasePath))?.isDirectory() ?? false;
}

async function statOrNull(candidatePath: string): Promise<Stats | null> {
  try {
    return await fsPromises.stat(candidatePath);
  } catch (error) {
    if (hasNodeErrorCode(error, "ENOENT")) return null;
    throw error;
  }
}

function isCorruptStateDatabaseError(
  error: unknown,
  databasePath: string,
): boolean {
  const message = stateDatabaseErrorMessage(error)
    .replaceAll(databasePath, "")
    .toLowerCase();
  return (
    message.includes("database disk image is malformed") ||
    message.includes("file is not a database") ||
    message.includes("malformed") ||
    message.includes("sqlite_corrupt") ||
    message.includes("sqlite_notadb") ||
    message.includes("code: 11") ||
    message.includes("code: 26")
  );
}

function stateDatabaseErrorMessage(error: unknown): string {
  if (isRecoveryErrorPair(error)) {
    return [
      stateDatabaseErrorMessage(error.originalError),
      "",
      `Recovery failed: ${stateDatabaseErrorMessage(error.recoveryError)}`,
    ].join("\n");
  }
  return error instanceof Error && error.message.length > 0
    ? error.message
    : String(error);
}

function isRecoveryErrorPair(error: unknown): error is RecoveryErrorPair {
  return (
    typeof error === "object" &&
    error != null &&
    "originalError" in error &&
    "recoveryError" in error
  );
}

function hasNodeErrorCode(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "code" in error &&
    error.code === code
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
  applyOwlFeatureBootstrapCache,
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
  getNativeIntlLoader,
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
  installDesktopLogBridge,
  openStateDatabaseWithRecovery,
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
  applyOwlFeatureBootstrapCache as K,
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
  desktopReleaseMetadata as V,
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
  installDesktopLogBridge as x,
  openStateDatabaseWithRecovery as y,
  WORKTREE_CLEANUP_BUFFER_START_MS_KEY as z,
};
