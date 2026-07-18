// Restored from ref/.vite/build/index.js

import { randomUUID } from "node:crypto";
import path from "node:path";
import type { SDKUserMessage } from "@anthropic-ai/claude-agent-sdk";
import type { SessionPermissionMode } from "../domain/local-session";

export function userMessage(
  text: string,
  uuid?: string,
  priority?: "now" | "next" | "later",
  images?: Array<{ base64: string; mimeType: string }>,
): SDKUserMessage {
  const imageBlocks = (images ?? []).map((image) => ({
    type: "image" as const,
    source: {
      type: "base64" as const,
      media_type: imageMediaType(image.mimeType),
      data: image.base64,
    },
  }));
  const content = [
    ...imageBlocks,
    ...(text.trim() ? [{ type: "text" as const, text }] : []),
  ];
  return {
    type: "user",
    uuid: (uuid ?? randomUUID()) as SDKUserMessage["uuid"],
    session_id: "",
    parent_tool_use_id: null,
    message: { role: "user", content },
    priority,
  };
}

export function sdkPermissionMode(
  mode: SessionPermissionMode,
): Exclude<SessionPermissionMode, "auto"> {
  return mode === "auto" ? "default" : mode;
}

export function systemPromptOption(
  systemPrompt?: string,
  append?: string,
):
  | string
  | string[]
  | { type: "preset"; preset: "claude_code"; append?: string } {
  if (systemPrompt) return append ? [systemPrompt, append] : systemPrompt;
  return { type: "preset", preset: "claude_code", append };
}

export function titleFromMessage(message: string): string {
  const normalized = message.replace(/\s+/g, " ").trim();
  return normalized.slice(0, 80) || "New session";
}

export function uniquePaths(values: string[]): string[] {
  return [...new Set(values.map((value) => path.resolve(value)))];
}

export function safeMetadata(
  patch: Record<string, unknown>,
): Record<string, unknown> {
  const allowed = [
    "visibility",
    "branch",
    "remoteSessionId",
    "bridgeSessionId",
    "enabledMcpTools",
    "backgroundTaskSuggestions",
    "resolvedBackgroundTaskSuggestion",
    "autoFixEnabled",
    "dismissedPr",
    "widgetToolStates",
    "fileAttachments",
    "contentBlocks",
    "remoteMcpServersConfig",
  ];
  return Object.fromEntries(
    allowed.filter((key) => key in patch).map((key) => [key, patch[key]]),
  );
}

function imageMediaType(
  value: string,
): "image/jpeg" | "image/png" | "image/gif" | "image/webp" {
  if (!["image/jpeg", "image/png", "image/gif", "image/webp"].includes(value)) {
    throw new Error(`Unsupported image media type: ${value}`);
  }
  return value as "image/jpeg" | "image/png" | "image/gif" | "image/webp";
}
