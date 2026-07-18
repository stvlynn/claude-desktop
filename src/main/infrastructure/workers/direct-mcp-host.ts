// Restored from ref/.vite/build/mcp-runtime/directMcpHost.js

import process from "node:process";
import type { MessagePortMain } from "electron";
import { parentPort } from "electron/utility";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import {
  StreamableHTTPClientTransport,
  StreamableHTTPError,
} from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ElicitationCompleteNotificationSchema,
  ElicitRequestSchema,
  ErrorCode,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ReadResourceRequestSchema,
  type ElicitResult,
} from "@modelcontextprotocol/sdk/types.js";
import {
  connectRemoteMcp,
  TOOL_CALL_TIMEOUT_MS,
  type DirectMcpServerConfig,
} from "./direct-mcp-remote-client";
import {
  MessagePortServerTransport,
  postDirectMcpMessage,
} from "./mcp-message-port-transport";

const MAX_TERMINAL_ERRORS_BEFORE_CLOSE = 3;

type HostInboundMessage =
  | { type: "updateAuth"; bearer: string }
  | { type: "elicitationResult"; seq: number; result: ElicitResult }
  | { type: "mcp"; message: unknown };

const isSessionExpired = (error: unknown) =>
  error instanceof StreamableHTTPError && error.code === 404;

function isRequestLevelError(error: Error): boolean {
  if (error instanceof McpError) return true;
  if (
    error instanceof StreamableHTTPError &&
    error.code !== undefined &&
    error.code !== 404
  ) {
    return true;
  }
  return (
    error.message.startsWith("Error POSTing to endpoint") ||
    error.message.includes("SSE stream disconnected") ||
    error.message.includes("Failed to reconnect SSE stream") ||
    error.message.includes("Maximum reconnection attempts")
  );
}

export async function addDirectMcpServer(
  config: DirectMcpServerConfig,
  port: MessagePortMain,
): Promise<void> {
  const headers = config.headers ? { ...config.headers } : undefined;
  let sequence = 0;
  const waiters = new Map<number, (result: ElicitResult) => void>();
  const drainWaiters = () => {
    for (const resolve of waiters.values()) resolve({ action: "cancel" });
    waiters.clear();
  };

  port.on("message", (event) => {
    const message = event.data as HostInboundMessage;
    if (message?.type === "updateAuth" && headers) {
      headers.Authorization = `Bearer ${message.bearer}`;
      console.error(`[directMcpHost:${config.name}] bearer rotated`);
    } else if (message?.type === "elicitationResult") {
      const resolve = waiters.get(message.seq);
      if (resolve) {
        waiters.delete(message.seq);
        resolve(message.result);
      }
    }
  });

  const registerElicitationHandlers = (client: Client) => {
    client.setRequestHandler(ElicitRequestSchema, (request) => {
      const seq = ++sequence;
      postDirectMcpMessage(port, {
        type: "elicitation",
        seq,
        params: request.params,
      });
      return new Promise<ElicitResult>((resolve) => waiters.set(seq, resolve));
    });
    client.setNotificationHandler(
      ElicitationCompleteNotificationSchema,
      (notification) => {
        postDirectMcpMessage(port, {
          type: "elicitationComplete",
          elicitationId: notification.params.elicitationId,
        });
      },
    );
  };

  let closedDuringConnect = false;
  const markEarlyClose = () => {
    closedDuringConnect = true;
  };
  port.on("close", markEarlyClose);

  let remoteClient: Client;
  let tools: Awaited<ReturnType<Client["listTools"]>>["tools"];
  try {
    ({ client: remoteClient, tools } = await connectRemoteMcp(
      config,
      headers,
      registerElicitationHandlers,
    ));
  } catch (error) {
    drainWaiters();
    port.off("close", markEarlyClose);
    const message = error instanceof Error ? error.message : String(error);
    if (closedDuringConnect) {
      console.error(
        `[directMcpHost:${config.name}] connect failed after port closed: ${message}`,
      );
    } else {
      postDirectMcpMessage(port, { type: "error", message });
    }
    port.close();
    return;
  }

  port.off("close", markEarlyClose);
  if (closedDuringConnect) {
    drainWaiters();
    void remoteClient.close().catch(() => undefined);
    port.close();
    return;
  }
  postDirectMcpMessage(port, { type: "ready", tools });

  const reparkExpiredSession = (error: unknown) => {
    if (!isSessionExpired(error)) return;
    console.error(
      `[directMcpHost:${config.name}] Mcp-Session-Id expired (HTTP 404) — closing for repark`,
    );
    setImmediate(() => void remoteClient.close().catch(() => undefined));
  };

  let consecutiveTerminalErrors = 0;
  remoteClient.onerror = (error) => {
    if (
      isSessionExpired(error) &&
      remoteClient.transport instanceof StreamableHTTPClientTransport &&
      remoteClient.transport.sessionId !== undefined
    ) {
      reparkExpiredSession(error);
      return;
    }
    if (isRequestLevelError(error)) {
      consecutiveTerminalErrors = 0;
      return;
    }
    consecutiveTerminalErrors += 1;
    console.error(
      `[directMcpHost:${config.name}] terminal connection error ${consecutiveTerminalErrors}/${MAX_TERMINAL_ERRORS_BEFORE_CLOSE}: ${error.message}`,
    );
    if (consecutiveTerminalErrors >= MAX_TERMINAL_ERRORS_BEFORE_CLOSE) {
      void remoteClient.close().catch(() => undefined);
    }
  };
  if (remoteClient.transport) {
    const sdkOnMessage = remoteClient.transport.onmessage;
    remoteClient.transport.onmessage = (message, extra) => {
      consecutiveTerminalErrors = 0;
      sdkOnMessage?.(message, extra);
    };
  }

  const proxy = new Server(
    { name: config.name, version: "1.0.0" },
    {
      capabilities: { tools: {}, resources: {} },
      instructions: remoteClient.getInstructions(),
    },
  );
  proxy.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));
  proxy.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
      return await remoteClient.callTool(
        { name, arguments: args ?? {} },
        undefined,
        { timeout: TOOL_CALL_TIMEOUT_MS },
      );
    } catch (error) {
      if (
        error instanceof McpError &&
        error.code === ErrorCode.UrlElicitationRequired
      ) {
        throw error;
      }
      reparkExpiredSession(error);
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [
          { type: "text" as const, text: `Tool call failed: ${message}` },
        ],
        isError: true,
      };
    }
  });
  proxy.setRequestHandler(ListResourcesRequestSchema, async () => {
    try {
      return await remoteClient.listResources(undefined, {
        timeout: TOOL_CALL_TIMEOUT_MS,
      });
    } catch (error) {
      reparkExpiredSession(error);
      return { resources: [] };
    }
  });
  proxy.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    try {
      return await remoteClient.readResource(
        { uri: request.params.uri },
        { timeout: TOOL_CALL_TIMEOUT_MS },
      );
    } catch (error) {
      reparkExpiredSession(error);
      return { contents: [] };
    }
  });

  let closed = false;
  remoteClient.onclose = () => {
    if (closed) return;
    closed = true;
    drainWaiters();
    port.close();
    void proxy.close().catch(() => undefined);
  };
  port.on("close", () => {
    if (closed) return;
    closed = true;
    drainWaiters();
    void remoteClient.close().catch(() => undefined);
  });
  await proxy.connect(new MessagePortServerTransport(port));
}

export function registerDirectMcpHost(): void {
  parentPort.on("message", (event) => {
    const data = event.data as {
      type?: string;
      config?: DirectMcpServerConfig;
    };
    const port = event.ports[0];
    if (data?.type !== "addServer" || !data.config || !port) {
      console.error("[directMcpHost] expected addServer with MessagePort");
      return;
    }
    port.start();
    void addDirectMcpServer(data.config, port);
  });
  process.on("SIGTERM", () => process.exit(0));
  process.on("SIGINT", () => process.exit(0));
}

registerDirectMcpHost();
