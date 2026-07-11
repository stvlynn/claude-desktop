// @ts-nocheck
// Restored from ref/webview/assets/models-and-reasoning-efforts-Ct6D5g-X.js
// Constants and guards for model reasoning effort levels.

export const REASONING_EFFORTS = [
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
] as const;

export const DEFAULT_MODEL = "gpt-5.5";
export const DEFAULT_REASONING_EFFORT = "medium";

export function isReasoningEffort(value: string): boolean {
  return (
    value === "none" ||
    value === "minimal" ||
    value === "low" ||
    value === "medium" ||
    value === "high" ||
    value === "xhigh" ||
    value === "max" ||
    value === "ultra"
  );
}

export const initModelsAndReasoningEffortsChunk = undefined as never;
