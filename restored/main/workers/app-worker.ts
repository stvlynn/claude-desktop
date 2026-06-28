// Restored from ref/.vite/build/worker.js
// App worker shell: main-RPC client, worker message routing, and open request boundary.
import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import { delimiter, posix, win32 } from "node:path";
import { fileURLToPath } from "node:url";
import { parentPort, workerData } from "node:worker_threads";

type WorkerInitOptions = {
  appVersion?: string;
  buildFlavor?: string;
  buildNumber?: string | null;
  codexAppSessionId?: string;
};
type WorkerThreadData = {
  workerId: string;
  sentryInitOptions: WorkerInitOptions;
  sentryRewriteFramesRoot?: string;
  maxLogLevel?: string;
  spawnInsideWsl?: boolean;
};
type RpcResult =
  | { type: "ok"; value?: unknown }
  | { type: "error"; error: { message: string; code?: string } };
type WorkerMainRpcMethod =
  | "worktree-cleanup-inputs"
  | "computer-use-invalidate-service-pid"
  | "computer-use-service-pid"
  | "codex-home"
  | "read-shortcut-link"
  | "platform-family"
  | "platform-os"
  | "process-start"
  | "process-write"
  | "process-resize"
  | "process-terminate"
  | "fs-read-file"
  | "fs-write-file"
  | "fs-create-directory"
  | "fs-get-metadata"
  | "fs-read-directory"
  | "fs-remove"
  | "fs-copy"
  | "fs-watch"
  | "fs-unwatch"
  | "worker-exit";
type WorkerMainRpcEventMethod =
  | "process-output-delta"
  | "fs-watch-changed"
  | "fs-watch-closed";
type WorkerMainRpcRequest = {
  type: "worker-main-rpc-request";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  params: unknown;
};
type WorkerMainRpcResponse = {
  type: "worker-main-rpc-response";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  result: RpcResult;
};
type WorkerMainRpcEvent = {
  type: "worker-main-rpc-event";
  workerId: string;
  method: WorkerMainRpcEventMethod;
  params: unknown;
};
type WorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};
type WorkerRequestMessage = {
  type: "worker-request";
  workerId: string;
  id?: string;
  request: WorkerRequest;
};
type WorkerCancelMessage = {
  type: "worker-request-cancel";
  workerId: string;
  id: string;
};
type WorkerSentryUserMessage = {
  type: "worker-sentry-user-update";
  authMethod: string | null;
  userId?: string | null;
  accountId?: string | null;
};
type WorkerAppEventMessage = {
  type: "worker-app-event";
  event: { type: string; at?: number };
};
type WorkerInboundMessage =
  | WorkerMainRpcResponse
  | WorkerMainRpcEvent
  | WorkerRequestMessage
  | WorkerCancelMessage
  | WorkerSentryUserMessage
  | WorkerAppEventMessage;
type WorkerOutboundMessage =
  | {
      type: "worker-response";
      workerId: string;
      response: { id: string; method: string; result: RpcResult };
    }
  | { type: "worker-event"; workerId: string; event: unknown }
  | WorkerMainRpcRequest;
type WorkerRequestDispatcher = {
  handleRequest(request: WorkerRequest): void;
  handleCancel(requestId: string): void;
};
type ShortcutLink = {
  target?: string | null;
  icon?: string | null;
};
type OpenInCustomTarget = {
  command?: string | null;
  icon?: string | null;
};
type OpenInTargetRequestParams = {
  target?: string | null;
  command?: string | null;
  customTarget?: OpenInCustomTarget | null;
};

const workerConfig = parseWorkerData(workerData);
const port = parentPort;
if (port == null) throw Error("worker-entry must be run in a worker thread");

initializeWorkerTelemetry(workerConfig);

const mainRpcClient = new WorkerMainRpcClient(workerConfig.workerId, {
  postMessage(message) {
    port.postMessage(message);
  },
});
const appEventBus = new WorkerAppEventBus();
const requestDispatcher = createWorkerRequestDispatcher(
  workerConfig.workerId,
  (message) => port.postMessage(message),
  mainRpcClient,
);

port.on("message", (message: WorkerInboundMessage) => {
  if (mainRpcClient.handleMessage(message)) return;

  if (message.type === "worker-sentry-user-update") {
    updateWorkerTelemetryUser(message);
    return;
  }
  if (message.type === "worker-app-event") {
    appEventBus.emit(message.event.type, message.event.at);
    return;
  }
  if (message.workerId !== workerConfig.workerId) return;

  switch (message.type) {
    case "worker-request":
      requestDispatcher.handleRequest(message.request);
      return;
    case "worker-request-cancel":
      requestDispatcher.handleCancel(message.id);
      return;
    case "worker-main-rpc-response":
    case "worker-main-rpc-event":
      return;
  }
});

class WorkerMainRpcClient {
  private readonly pending = new Map<
    string,
    {
      method: WorkerMainRpcMethod;
      resolve(value: unknown): void;
      reject(error: Error): void;
    }
  >();
  private readonly eventListeners = new Map<
    WorkerMainRpcEventMethod,
    Set<(params: unknown) => void>
  >();

  constructor(
    private readonly workerId: string,
    private readonly port: { postMessage(message: WorkerMainRpcRequest): void },
  ) {}

  request(method: WorkerMainRpcMethod, params: unknown): Promise<unknown> {
    const requestId = randomUUID();
    const message: WorkerMainRpcRequest = {
      type: "worker-main-rpc-request",
      workerId: this.workerId,
      requestId,
      method,
      params,
    };
    const response = new Promise<unknown>((resolve, reject) => {
      this.pending.set(requestId, { method, resolve, reject });
    });
    try {
      this.port.postMessage(message);
    } catch (error) {
      this.pending.delete(requestId);
      return Promise.reject(
        error instanceof Error
          ? error
          : Error(`Failed to send main RPC request: ${String(error)}`),
      );
    }
    return response;
  }

  requestWithScopedEvents({
    events,
    method,
    params,
  }: {
    events: Array<{
      method: WorkerMainRpcEventMethod;
      listener(params: unknown): void;
    }>;
    method: WorkerMainRpcMethod;
    params: unknown;
  }): Promise<unknown> {
    const unsubscribe = events.map((event) =>
      this.subscribe(event.method, event.listener),
    );
    const result = this.request(method, params);
    result.finally(() => {
      for (const dispose of unsubscribe) dispose();
    });
    return result;
  }

  subscribe(
    method: WorkerMainRpcEventMethod,
    listener: (params: unknown) => void,
  ): () => void {
    const listeners = this.eventListeners.get(method) ?? new Set();
    listeners.add(listener);
    this.eventListeners.set(method, listeners);
    return () => {
      const current = this.eventListeners.get(method);
      if (!current) return;
      current.delete(listener);
      if (current.size === 0) this.eventListeners.delete(method);
    };
  }

  handleMessage(message: unknown): boolean {
    if (isWorkerMainRpcEvent(message)) {
      if (message.workerId !== this.workerId) return false;
      const listeners = this.eventListeners.get(message.method);
      if (!listeners || listeners.size === 0) return true;
      for (const listener of listeners) listener(message.params);
      return true;
    }

    if (
      !isWorkerMainRpcResponse(message) ||
      message.workerId !== this.workerId
    ) {
      return false;
    }
    const pending = this.pending.get(message.requestId);
    if (!pending) return true;
    this.pending.delete(message.requestId);
    if (pending.method !== message.method) {
      pending.reject(Error("Mismatched main RPC response method"));
      return true;
    }
    if (message.result.type === "ok") {
      pending.resolve(message.result.value);
    } else {
      pending.reject(
        message.result.error.code == null
          ? Error(message.result.error.message)
          : Object.assign(Error(message.result.error.message), {
              code: message.result.error.code,
            }),
      );
    }
    return true;
  }

  dispose(): void {
    const error = Error("Worker main RPC client disposed");
    for (const pending of this.pending.values()) pending.reject(error);
    this.pending.clear();
    this.eventListeners.clear();
  }
}

class WorkerAppEventBus {
  private readonly latestEventAt = new Map<string, number | undefined>();

  emit(type: string, at: number | undefined): void {
    this.latestEventAt.set(type, at);
  }

  getLastEventAt(type: string): number | undefined {
    return this.latestEventAt.get(type);
  }
}

class SimpleSemaphore {
  private permits: number;
  private readonly waiters: Array<() => void> = [];

  constructor(permits: number) {
    this.permits = permits;
  }

  acquire(): Promise<void> {
    if (this.permits > 0) {
      this.permits -= 1;
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this.waiters.push(() => {
        this.permits -= 1;
        resolve();
      });
    });
  }

  release(): void {
    this.permits += 1;
    const next = this.waiters.shift();
    if (next) next();
  }
}

class OpenInWorkerRequestDispatcher implements WorkerRequestDispatcher {
  private readonly iconSemaphore = new SimpleSemaphore(1);
  private readonly commandPromises = new Map<string, Promise<string | null>>();

  constructor(
    private readonly workerId: string,
    private readonly postMessage: (message: WorkerOutboundMessage) => void,
    private readonly dependencies: {
      readShortcutLink(path: string): Promise<ShortcutLink>;
    },
  ) {}

  handleRequest(request: WorkerRequest): void {
    void this.handleRequestAsync(request);
  }

  handleCancel(): void {}

  private async handleRequestAsync(request: WorkerRequest): Promise<void> {
    try {
      switch (request.method) {
        case "load-target-icon": {
          const params = parseOpenInTargetRequestParams(request.params);
          const command = await this.getTargetCommand(params);
          await this.iconSemaphore.acquire();
          try {
            this.postResponse(request, {
              type: "ok",
              value: {
                icon: await getOpenInTargetIcon({
                  command,
                  params,
                  readShortcutLink: this.dependencies.readShortcutLink,
                }),
              },
            });
          } finally {
            this.iconSemaphore.release();
          }
          return;
        }
        case "get-target-command": {
          const params = parseOpenInTargetRequestParams(request.params);
          this.postResponse(request, {
            type: "ok",
            value: { command: await this.getTargetCommand(params) },
          });
          return;
        }
      }
      throw Error(
        `Open-in worker method '${request.method}' remains an open restoration boundary.`,
      );
    } catch (error) {
      this.postResponse(request, toRpcError(error));
    }
  }

  private getTargetCommand(
    params: OpenInTargetRequestParams,
  ): Promise<string | null> {
    const cacheKey = JSON.stringify([
      params.target ?? null,
      params.customTarget?.command ?? null,
    ]);
    const cached = this.commandPromises.get(cacheKey);
    if (cached != null) return cached;
    const command = detectOpenInTarget(
      params,
      this.dependencies.readShortcutLink,
    );
    this.commandPromises.set(cacheKey, command);
    command.catch(() => this.commandPromises.delete(cacheKey));
    return command;
  }

  private postResponse(request: WorkerRequest, result: RpcResult): void {
    this.postMessage({
      type: "worker-response",
      workerId: this.workerId,
      response: { id: request.id, method: request.method, result },
    });
  }
}

class OpenBoundaryWorkerRequestDispatcher {
  private readonly activeRequests = new Set<string>();

  constructor(
    private readonly workerId: string,
    private readonly postMessage: (message: WorkerOutboundMessage) => void,
  ) {}

  handleRequest(request: WorkerRequest): void {
    this.activeRequests.add(request.id);
    this.postMessage({
      type: "worker-response",
      workerId: this.workerId,
      response: {
        id: request.id,
        method: request.method,
        result: {
          type: "error",
          error: {
            message: `Worker request '${request.method}' remains an open restoration boundary.`,
            code: "OPEN_RESTORATION_BOUNDARY",
          },
        },
      },
    });
    this.activeRequests.delete(request.id);
  }

  handleCancel(requestId: string): void {
    this.activeRequests.delete(requestId);
  }
}

function createWorkerRequestDispatcher(
  workerId: string,
  postMessage: (message: WorkerOutboundMessage) => void,
  mainRpcClient: WorkerMainRpcClient,
): WorkerRequestDispatcher {
  switch (workerId) {
    case "open-in":
      return new OpenInWorkerRequestDispatcher(workerId, postMessage, {
        readShortcutLink: async (path) =>
          normalizeShortcutLink(
            await mainRpcClient.request("read-shortcut-link", { path }),
          ),
      });
    default:
      return new OpenBoundaryWorkerRequestDispatcher(workerId, postMessage);
  }
}

async function detectOpenInTarget(
  params: OpenInTargetRequestParams,
  readShortcutLink: (path: string) => Promise<ShortcutLink>,
): Promise<string | null> {
  if (params.customTarget != null) {
    return resolveCustomOpenInCommand(
      params.customTarget.command,
      readShortcutLink,
    );
  }
  throw Error(
    `Open-in target '${params.target ?? "unknown"}' remains an open restoration boundary.`,
  );
}

async function resolveCustomOpenInCommand(
  command: string | null | undefined,
  readShortcutLink: (path: string) => Promise<ShortcutLink>,
): Promise<string | null> {
  if (command == null || command.trim() === "") return null;
  const trimmedCommand = command.trim();
  if (isPlatformAbsolutePath(trimmedCommand)) {
    return existsSync(trimmedCommand) ? trimmedCommand : null;
  }
  const resolvedFromPath = resolveExecutableFromPath(trimmedCommand);
  if (resolvedFromPath != null) return resolvedFromPath;
  if (
    process.platform === "win32" &&
    trimmedCommand.toLowerCase().endsWith(".lnk")
  ) {
    const shortcut = await readShortcutLink(trimmedCommand);
    return shortcut.target ?? null;
  }
  return null;
}

async function getOpenInTargetIcon({
  command,
  params,
  readShortcutLink,
}: {
  command: string | null;
  params: OpenInTargetRequestParams;
  readShortcutLink(path: string): Promise<ShortcutLink>;
}): Promise<string> {
  if (params.customTarget != null) {
    return normalizeOpenInIconSpecifier(params.customTarget.icon);
  }
  if (process.platform === "win32" && command?.toLowerCase().endsWith(".lnk")) {
    const shortcut = await readShortcutLink(command);
    return normalizeOpenInIconSpecifier(shortcut.icon ?? shortcut.target);
  }
  throw Error(
    `Open-in target '${params.target ?? "unknown"}' icon remains an open restoration boundary.`,
  );
}

function parseOpenInTargetRequestParams(
  value: unknown,
): OpenInTargetRequestParams {
  if (!isRecord(value)) return {};
  const customTarget = isRecord(value.customTarget)
    ? {
        command:
          typeof value.customTarget.command === "string"
            ? value.customTarget.command
            : null,
        icon:
          typeof value.customTarget.icon === "string"
            ? value.customTarget.icon
            : null,
      }
    : null;
  return {
    target: typeof value.target === "string" ? value.target : null,
    command: typeof value.command === "string" ? value.command : null,
    customTarget,
  };
}

function normalizeOpenInIconSpecifier(icon: string | null | undefined): string {
  if (icon == null || icon.trim() === "") return "apps/vscode.png";
  const trimmedIcon = icon.trim();
  if (isBundledAppIconPath(trimmedIcon) || isDataImageUrl(trimmedIcon)) {
    return trimmedIcon;
  }
  const filePath = parseLocalIconPath(trimmedIcon);
  return filePath == null ? "apps/vscode.png" : toAppFileUrl(filePath);
}

function parseLocalIconPath(icon: string): string | null {
  if (icon.startsWith("file:")) {
    try {
      return fileURLToPath(icon);
    } catch {
      return null;
    }
  }
  if (!isPlatformAbsolutePath(icon)) return null;
  if (process.platform !== "win32" && !existsSync(icon)) return null;
  return icon;
}

function toAppFileUrl(filePath: string): string {
  let normalizedPath = filePath.replaceAll("\\", "/");
  if (!normalizedPath.startsWith("/")) normalizedPath = `/${normalizedPath}`;
  return `app://fs/@fs${encodeURI(normalizedPath).replaceAll("#", "%23").replaceAll("?", "%3F")}`;
}

function isBundledAppIconPath(icon: string): boolean {
  const withoutLeadingSlash = icon.startsWith("/") ? icon.slice(1) : icon;
  return (
    withoutLeadingSlash.startsWith("apps/") &&
    !withoutLeadingSlash.split("/").includes("..")
  );
}

function isDataImageUrl(icon: string): boolean {
  return /^data:image\/(?:png|jpe?g|gif|webp|bmp|x-icon|vnd\.microsoft\.icon);base64,/i.test(
    icon,
  );
}

function isPlatformAbsolutePath(
  candidate: string,
  platform = process.platform,
): boolean {
  if (platform !== "win32") return posix.isAbsolute(candidate);
  const parsedRoot = win32.parse(candidate).root;
  return (
    win32.isAbsolute(candidate) &&
    (parsedRoot.includes(":") || parsedRoot.startsWith("\\\\"))
  );
}

function resolveExecutableFromPath(command: string): string | null {
  const pathEntries = (process.env.PATH ?? "")
    .split(delimiter)
    .filter((entry) => entry.length > 0);
  const extensions =
    process.platform === "win32"
      ? (process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM")
          .split(";")
          .filter((entry) => entry.length > 0)
      : [""];
  const commandCandidates =
    process.platform === "win32" && /\.[A-Za-z0-9]+$/.test(command)
      ? [command]
      : extensions.map((extension) => `${command}${extension}`);
  for (const pathEntry of pathEntries) {
    for (const candidate of commandCandidates) {
      const fullPath =
        process.platform === "win32"
          ? win32.join(pathEntry, candidate)
          : posix.join(pathEntry, candidate);
      if (existsSync(fullPath)) return fullPath;
    }
  }
  return null;
}

function normalizeShortcutLink(value: unknown): ShortcutLink {
  if (!isRecord(value)) return {};
  return {
    target: typeof value.target === "string" ? value.target : null,
    icon: typeof value.icon === "string" ? value.icon : null,
  };
}

function toRpcError(error: unknown): RpcResult {
  return {
    type: "error",
    error: {
      message: error instanceof Error ? error.message : String(error),
      code:
        error instanceof Error &&
        "code" in error &&
        typeof error.code === "string"
          ? error.code
          : "OPEN_RESTORATION_BOUNDARY",
    },
  };
}

function isWorkerMainRpcResponse(
  message: unknown,
): message is WorkerMainRpcResponse {
  if (!isRecord(message)) return false;
  return (
    message.type === "worker-main-rpc-response" &&
    typeof message.workerId === "string" &&
    typeof message.requestId === "string" &&
    isWorkerMainRpcMethod(message.method) &&
    isRecord(message.result) &&
    (message.result.type === "ok" || message.result.type === "error")
  );
}

function isWorkerMainRpcEvent(message: unknown): message is WorkerMainRpcEvent {
  if (!isRecord(message)) return false;
  return (
    message.type === "worker-main-rpc-event" &&
    typeof message.workerId === "string" &&
    isWorkerMainRpcEventMethod(message.method) &&
    isRecord(message.params)
  );
}

function isWorkerMainRpcMethod(method: unknown): method is WorkerMainRpcMethod {
  return (
    method === "worktree-cleanup-inputs" ||
    method === "computer-use-invalidate-service-pid" ||
    method === "computer-use-service-pid" ||
    method === "codex-home" ||
    method === "read-shortcut-link" ||
    method === "platform-family" ||
    method === "platform-os" ||
    method === "process-start" ||
    method === "process-write" ||
    method === "process-resize" ||
    method === "process-terminate" ||
    method === "fs-read-file" ||
    method === "fs-write-file" ||
    method === "fs-create-directory" ||
    method === "fs-get-metadata" ||
    method === "fs-read-directory" ||
    method === "fs-remove" ||
    method === "fs-copy" ||
    method === "fs-watch" ||
    method === "fs-unwatch" ||
    method === "worker-exit"
  );
}

function isWorkerMainRpcEventMethod(
  method: unknown,
): method is WorkerMainRpcEventMethod {
  return (
    method === "process-output-delta" ||
    method === "fs-watch-changed" ||
    method === "fs-watch-closed"
  );
}

function parseWorkerData(value: unknown): WorkerThreadData {
  if (!isRecord(value)) throw Error("worker-entry requires workerData");
  if (typeof value.workerId !== "string" || value.workerId.length === 0) {
    throw Error("worker-entry requires workerData.workerId");
  }
  return {
    workerId: value.workerId,
    sentryInitOptions: isRecord(value.sentryInitOptions)
      ? (value.sentryInitOptions as WorkerInitOptions)
      : {},
    sentryRewriteFramesRoot:
      typeof value.sentryRewriteFramesRoot === "string"
        ? value.sentryRewriteFramesRoot
        : undefined,
    maxLogLevel:
      typeof value.maxLogLevel === "string" ? value.maxLogLevel : undefined,
    spawnInsideWsl: value.spawnInsideWsl === true,
  };
}

function initializeWorkerTelemetry(config: WorkerThreadData): void {
  void config;
}

function updateWorkerTelemetryUser(message: WorkerSentryUserMessage): void {
  void message;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
