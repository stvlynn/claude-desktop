// Restored from ref/.vite/build/index.js

import { net, type App } from "electron";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import type { McpServerConfig } from "@anthropic-ai/claude-agent-sdk";

type Connection = { client: Client; config: McpServerConfig };

export class LocalSessionMcpService {
  private readonly clients = new Map<string, Connection>();

  constructor(private readonly app: App) {}

  async callTool(
    sessionId: string,
    serverName: string,
    toolName: string,
    toolArguments: Record<string, unknown>,
    servers: Record<string, unknown>,
  ) {
    const client = await this.client(sessionId, serverName, servers);
    return client.callTool(
      { name: toolName, arguments: toolArguments },
      undefined,
      { timeout: 300_000 },
    );
  }

  async readResource(
    sessionId: string,
    serverName: string,
    uri: string,
    servers: Record<string, unknown>,
  ) {
    return (await this.client(sessionId, serverName, servers)).readResource({
      uri,
    });
  }

  async listResources(
    sessionId: string,
    serverName: string,
    servers: Record<string, unknown>,
  ) {
    return (await this.client(sessionId, serverName, servers)).listResources();
  }

  async reconnect(
    sessionId: string,
    serverName: string,
    servers: Record<string, unknown>,
  ): Promise<void> {
    await this.disconnect(sessionId, serverName);
    await this.client(sessionId, serverName, servers);
  }

  async disconnect(sessionId: string, serverName: string): Promise<void> {
    const key = connectionKey(sessionId, serverName);
    const connection = this.clients.get(key);
    this.clients.delete(key);
    if (connection) await connection.client.close();
  }

  async dispose(): Promise<void> {
    const clients = [...this.clients.values()].map(({ client }) =>
      client.close(),
    );
    this.clients.clear();
    await Promise.allSettled(clients);
  }

  private async client(
    sessionId: string,
    serverName: string,
    servers: Record<string, unknown>,
  ): Promise<Client> {
    const key = connectionKey(sessionId, serverName);
    const config = normalizeConfig(servers[serverName]);
    const existing = this.clients.get(key);
    if (existing && JSON.stringify(existing.config) === JSON.stringify(config))
      return existing.client;
    if (existing) await this.disconnect(sessionId, serverName);
    const client = new Client({
      name: "claude-desktop-local-sessions",
      version: this.app.getVersion(),
    });
    await client.connect(createTransport(config), { timeout: 15_000 });
    this.clients.set(key, { client, config });
    return client;
  }
}

function createTransport(config: McpServerConfig) {
  if ("command" in config) {
    return new StdioClientTransport({
      command: config.command,
      args: config.args,
      env: cleanEnvironment({ ...process.env, ...config.env }),
    });
  }
  if (!("url" in config) || typeof config.url !== "string")
    throw new Error("MCP server requires a command or URL");
  const options = {
    fetch: (url: string | URL, init?: RequestInit) =>
      net.fetch(url.toString(), init),
    requestInit: { headers: config.headers },
  };
  return config.type === "sse"
    ? new SSEClientTransport(new URL(config.url), options)
    : new StreamableHTTPClientTransport(new URL(config.url), options);
}

function normalizeConfig(value: unknown): McpServerConfig {
  if (!isRecord(value)) throw new Error("MCP server is not configured");
  if (typeof value.command === "string") {
    if (value.command.startsWith("-") || /[\0\r\n]/.test(value.command))
      throw new Error("Invalid MCP command");
    return value as McpServerConfig;
  }
  if (typeof value.url === "string") {
    const url = new URL(value.url);
    if (!["https:", "http:"].includes(url.protocol))
      throw new Error("MCP URL must use HTTP or HTTPS");
    return value as McpServerConfig;
  }
  throw new Error("MCP server requires a command or URL");
}

function cleanEnvironment(env: NodeJS.ProcessEnv): Record<string, string> {
  return Object.fromEntries(
    Object.entries(env).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string",
    ),
  );
}

function connectionKey(sessionId: string, serverName: string): string {
  if (!/^[A-Za-z0-9._-]{1,128}$/.test(serverName))
    throw new Error("Invalid MCP server name");
  return `${sessionId}\0${serverName}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
