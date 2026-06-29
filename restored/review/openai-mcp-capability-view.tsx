// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Semantic wrapper around the current-ref OpenAI MCP capability view export.
import { Yu as RawOpenAiMcpCapabilityView } from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";

export interface McpCapabilityViewModel {
  hostId: string;
  resourceUri: string;
  server: unknown;
  serverTools: unknown;
  title: string;
  tool: { name: string };
}

export interface OpenAiMcpCapabilityViewProps {
  className?: string;
  instanceId?: string | null;
  readHostResource?: (params: { uri: string }) => Promise<unknown> | unknown;
  toolArguments?: Record<string, unknown>;
  view: McpCapabilityViewModel;
}

export function OpenAiMcpCapabilityView(props: OpenAiMcpCapabilityViewProps) {
  return <RawOpenAiMcpCapabilityView {...props} />;
}
