// Restored from ref/.vite/build/mcp-runtime/directMcpHost.js

import { net } from "electron";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

export const CONNECT_TIMEOUT_MS = 10_000;
export const TOOL_CALL_TIMEOUT_MS = 300_000;
export const CUSTOM_MCP_CLIENT_NAME = "claude-desktop-3p";

export interface DirectMcpServerConfig {
  name: string;
  url: string;
  appVersion: string;
  transport?: "sse" | "streamable-http";
  headers?: Record<string, string>;
}

export async function connectRemoteMcp(
  config: DirectMcpServerConfig,
  headers: Record<string, string> | undefined,
  configureClient: (client: Client) => void,
) {
  const options = {
    fetch: (url: string | URL, init?: RequestInit) =>
      net.fetch(url.toString(), init),
    ...(headers ? { requestInit: { headers } } : {}),
  };
  const transport =
    config.transport === "sse"
      ? new SSEClientTransport(new URL(config.url), options)
      : new StreamableHTTPClientTransport(new URL(config.url), options);
  const client = new Client(
    { name: CUSTOM_MCP_CLIENT_NAME, version: config.appVersion },
    { capabilities: { elicitation: { url: {} } } },
  );
  configureClient(client);

  const abortController = new AbortController();
  const timeout = setTimeout(() => abortController.abort(), CONNECT_TIMEOUT_MS);
  try {
    await client.connect(transport, { signal: abortController.signal });
    const { tools } = await client.listTools(undefined, {
      signal: abortController.signal,
    });
    return { client, tools };
  } catch (error) {
    void client.close().catch(() => undefined);
    if (abortController.signal.aborted) {
      throw new Error(`connect timeout after ${CONNECT_TIMEOUT_MS}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
