// Restored from ref/.vite/build/index.js

import type { McpServerConfig } from "@anthropic-ai/claude-agent-sdk";
import type {
  LocalSessionStart,
  SessionEffort,
  SessionPermissionMode,
} from "../domain/local-session";

export function startArg(args: unknown[]): LocalSessionStart {
  const value = objectArg<Record<string, unknown>>(args, 0);
  return {
    ...value,
    cwd: stringProperty(value, "cwd"),
    message: stringProperty(value, "message"),
  } as LocalSessionStart;
}

export function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}

export function optionalString(
  args: unknown[],
  index: number,
): string | undefined {
  return args[index] == null ? undefined : stringArg(args, index);
}

export function numberArg(args: unknown[], index: number): number {
  const value = args[index];
  if (typeof value !== "number" || !Number.isFinite(value))
    throw new TypeError(`Argument ${index} must be a number`);
  return value;
}

export function optionalNumber(
  args: unknown[],
  index: number,
): number | undefined {
  return args[index] == null ? undefined : numberArg(args, index);
}

export function booleanArg(args: unknown[], index: number): boolean {
  const value = args[index];
  if (typeof value !== "boolean")
    throw new TypeError(`Argument ${index} must be a boolean`);
  return value;
}

export function objectArg<T extends object = Record<string, unknown>>(
  args: unknown[],
  index: number,
): T {
  const value = args[index];
  if (!isRecord(value))
    throw new TypeError(`Argument ${index} must be an object`);
  return value as T;
}

export function stringArrayArg(args: unknown[], index: number): string[] {
  const value = args[index];
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string"))
    throw new TypeError(`Argument ${index} must be a string array`);
  return value;
}

export function arrayArg(args: unknown[], index: number): unknown[] {
  const value = args[index];
  if (!Array.isArray(value))
    throw new TypeError(`Argument ${index} must be an array`);
  return value;
}

export function requiredProperty(
  value: Record<string, unknown>,
  key: string,
): string {
  const property = value[key];
  if (typeof property !== "string" || property.length === 0)
    throw new TypeError(`${key} must be a non-empty string`);
  return property;
}

export function asRecord(
  value: unknown,
  label: string,
): Record<string, unknown> {
  if (!isRecord(value)) throw new TypeError(`${label} must be an object`);
  return value;
}

export function effortArg(args: unknown[], index: number): SessionEffort {
  const value = stringArg(args, index);
  if (!["low", "medium", "high", "xhigh", "max"].includes(value))
    throw new TypeError("Invalid effort");
  return value as SessionEffort;
}

export function permissionArg(
  args: unknown[],
  index: number,
): SessionPermissionMode {
  const value = stringArg(args, index);
  if (
    ![
      "default",
      "acceptEdits",
      "bypassPermissions",
      "plan",
      "dontAsk",
      "auto",
    ].includes(value)
  )
    throw new TypeError("Invalid permission mode");
  return value as SessionPermissionMode;
}

export function priorityArg(
  args: unknown[],
  index: number,
): "now" | "next" | "later" {
  const value = optionalString(args, index) ?? "now";
  if (!["now", "next", "later"].includes(value))
    throw new TypeError("Invalid message priority");
  return value as "now" | "next" | "later";
}

export function normalizeMcpServers(
  value: unknown,
): Record<string, McpServerConfig> {
  if (Array.isArray(value)) {
    return Object.fromEntries(
      value.map((entry, index) => {
        if (!isRecord(entry))
          throw new TypeError(`MCP server ${index} must be an object`);
        const name =
          typeof entry.name === "string" ? entry.name : `server-${index}`;
        return [name, entry as McpServerConfig];
      }),
    );
  }
  if (!isRecord(value))
    throw new TypeError("MCP servers must be an object or array");
  return value as Record<string, McpServerConfig>;
}

export function sessionOptions(value: unknown): {
  sessionId?: string;
  cwd?: string;
} {
  if (value === undefined || value === null) return {};
  if (typeof value === "string") return { sessionId: value };
  if (!isRecord(value))
    throw new TypeError("Session options must be an object");
  return {
    sessionId:
      typeof value.sessionId === "string" ? value.sessionId : undefined,
    cwd: typeof value.cwd === "string" ? value.cwd : undefined,
  };
}

export function normalizeImages(
  value: unknown,
): Array<{ base64: string; mimeType: string }> | undefined {
  if (value === undefined || value === null) return undefined;
  if (!Array.isArray(value)) throw new TypeError("Images must be an array");
  return value.map((image, index) => {
    if (
      !isRecord(image) ||
      typeof image.base64 !== "string" ||
      typeof image.mimeType !== "string"
    )
      throw new TypeError(`Image ${index} is invalid`);
    return { base64: image.base64, mimeType: image.mimeType };
  });
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringProperty(value: Record<string, unknown>, key: string): string {
  const property = value[key];
  if (typeof property !== "string")
    throw new TypeError(`${key} must be a string`);
  return property;
}
