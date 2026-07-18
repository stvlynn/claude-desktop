// Restored from ref/.vite/build/index.js (default gate-off branch)

export type PluginBridgeMcpServer = {
  name: string;
  tools: Array<{
    name: string;
    description?: string;
    inputSchema?: unknown;
    annotations?: unknown;
    meta?: unknown;
  }>;
};

export class PluginBridgeMcpService {
  listServers(): PluginBridgeMcpServer[] {
    return [];
  }
}
