// Restored from ref/.vite/build/mcp-runtime/directMcpHost.js

import type { MessagePortMain } from "electron";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { JSONRPCMessage } from "@modelcontextprotocol/sdk/types.js";

export type DirectMcpPortMessage =
  | { type: "mcp"; message: JSONRPCMessage }
  | { type: "ready"; tools: unknown[] }
  | { type: "error"; message: string }
  | { type: "elicitation"; seq: number; params: unknown }
  | { type: "elicitationComplete"; elicitationId: string };

export function postDirectMcpMessage(
  port: MessagePortMain,
  message: DirectMcpPortMessage,
): void {
  try {
    port.postMessage(message);
  } catch (error) {
    console.error(
      `[directMcpHost] post to closed port dropped (${message.type}): ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

export class MessagePortServerTransport implements Transport {
  onclose?: () => void;
  onerror?: (error: Error) => void;
  onmessage?: (message: JSONRPCMessage) => void;

  constructor(private readonly port: MessagePortMain) {}

  async start(): Promise<void> {
    this.port.on("message", (event) => {
      const data = event.data as { type?: string; message?: JSONRPCMessage };
      if (data?.type === "mcp" && data.message) this.onmessage?.(data.message);
    });
    this.port.on("close", () => this.onclose?.());
  }

  async send(message: JSONRPCMessage): Promise<void> {
    postDirectMcpMessage(this.port, { type: "mcp", message });
  }

  async close(): Promise<void> {
    this.port.close();
  }
}
