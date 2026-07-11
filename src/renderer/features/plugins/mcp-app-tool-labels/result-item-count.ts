// Restored from ref/webview/assets/mcp-app-tool-labels-*.js
// @ts-nocheck
// Helper to extract a countable result length from an MCP tool result.

export function countToolResultItems({
  preferredKeys,
  toolResult,
}: {
  preferredKeys: string[];
  toolResult: unknown;
}): number | null {
  if (toolResult == null || typeof toolResult !== "object") return null;
  const record = toolResult as Record<string, unknown>;
  for (const key of preferredKeys) {
    const value = record[key];
    if (Array.isArray(value)) return value.length;
  }
  return null;
}
