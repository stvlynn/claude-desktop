// Restored from ref/.vite/build/index.js (settings MCP configuration)

import * as path from "node:path";
import { shell, type App } from "electron";
import * as schema from "zod";
import type { ClaudeAppConfigurationRepository } from "./claude-app-configuration";

const serverConfigSchema = schema.object({
  command: schema.string(),
  args: schema.array(schema.string()).optional(),
  env: schema.record(schema.string(), schema.string()).optional(),
  extensionId: schema.string().optional(),
});
const serverConfigsSchema = schema.record(schema.string(), serverConfigSchema);

export type McpServerConfig = schema.infer<typeof serverConfigSchema>;
export type McpServerConfigs = Record<string, McpServerConfig>;

export class McpSettingsService {
  constructor(
    private readonly app: App,
    private readonly configuration: ClaudeAppConfigurationRepository,
  ) {}

  async isLocalDevMcpEnabled(): Promise<boolean> {
    const configuration = await this.configuration.getConfiguration();
    const features = configuration.features;
    return (
      typeof features === "object" &&
      features != null &&
      !Array.isArray(features) &&
      "isLocalDevMcpEnabled" in features &&
      features.isLocalDevMcpEnabled === true
    );
  }

  async getMcpServersConfig(): Promise<McpServerConfigs> {
    if (!(await this.isLocalDevMcpEnabled())) return {};
    const configuration = await this.configuration.getConfiguration();
    const parsed = serverConfigsSchema.safeParse(
      configuration.mcpServers ?? {},
    );
    return parsed.success ? parsed.data : {};
  }

  async getMcpServersConfigWithStatus(): Promise<
    Record<
      string,
      McpServerConfig & {
        status: "initializing" | "running" | "failed";
        error?: string;
      }
    >
  > {
    const configs = await this.getMcpServersConfig();
    return Object.fromEntries(
      Object.entries(configs).map(([name, config]) => [
        name,
        { ...config, status: "initializing" as const },
      ]),
    );
  }

  async setMcpServerConfigs(value: unknown): Promise<McpServerConfigs> {
    const requested = serverConfigsSchema.parse(value);
    const existing = await this.getMcpServersConfig();
    const retained = Object.fromEntries(
      Object.entries(existing).filter(([name]) =>
        Object.hasOwn(requested, name),
      ),
    );
    await this.configuration.setConfigurationValue("mcpServers", retained);
    return retained;
  }

  async revealConfig(): Promise<void> {
    await this.configuration.ensureFile();
    shell.showItemInFolder(this.configuration.path);
  }

  async revealLogs(): Promise<void> {
    await shell.openPath(this.app.getPath("logs"));
  }

  async revealServerLog(serverName: string): Promise<void> {
    const safeName = serverName.replace(/[^A-Za-z0-9._-]/g, "_");
    await shell.openPath(
      path.join(this.app.getPath("logs"), `mcp-server-${safeName}.log`),
    );
  }
}
