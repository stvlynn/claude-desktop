// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// MCP app inline frame type definitions.

export type McpServerToolKey = string;

export type McpToolCallItem = {
  type: "mcp-tool-call";
};

export type McpMatchingApp = unknown;

export type ConversationTimelineItem = unknown;

export type ParametricAtomGetter = {
  get: <T>(_atom: unknown, _key?: unknown) => T;
};
