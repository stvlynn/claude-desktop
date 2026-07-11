// @ts-nocheck
// Restored from ref/webview/assets/model-and-reasoning-effort-translations-sQEAV-BY.js
// model-and-reasoning-effort-translations-sQEAV-BY chunk restored from the Codex webview bundle.
type ReasoningEffort =
  | "none"
  | "minimal"
  | "low"
  | "medium"
  | "high"
  | "xhigh"
  | "max";

const REASONING_EFFORT_LABELS: Record<ReasoningEffort, string> = {
  none: "None",
  minimal: "Minimal",
  low: "Low",
  medium: "Medium",
  high: "High",
  xhigh: "Extra High",
  max: "Max",
};

export function ModelAndReasoningEffortTranslations({
  effort,
}: {
  effort: ReasoningEffort;
}): string | undefined {
  return REASONING_EFFORT_LABELS[effort];
}
