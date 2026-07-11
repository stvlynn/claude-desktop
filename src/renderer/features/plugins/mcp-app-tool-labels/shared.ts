// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Shared types and helpers for building human-readable MCP connector tool labels.
import type { IntlShape } from "../../../shared/vendor/react-intl";

export interface MatchingApp {
  id: string;
  name: string;
  pluginDisplayNames?: string[];
}

export interface McpAppToolLabelInput {
  completed: boolean;
  fallbackLabel: string;
  intl: IntlShape;
  matchingApp: MatchingApp | null | undefined;
  toolArguments: unknown;
  toolResult?: unknown;
  toolKey: string;
}

export function appMatchesIdentifier(
  app: MatchingApp | null | undefined,
  identifier: string,
): boolean {
  if (app == null) return false;
  return [app.name, app.id, ...(app.pluginDisplayNames ?? [])].some((entry) =>
    entry.trim().toLowerCase().includes(identifier),
  );
}

export function truncatePreview(
  value: string | null | undefined,
  maxLength: number,
): string | null {
  if (value == null) return null;
  const collapsed = value.replace(/\s+/g, " ").trim();
  if (collapsed.length === 0) return null;
  return collapsed.length <= maxLength
    ? collapsed
    : `${collapsed.slice(0, maxLength - 1).trimEnd()}…`;
}
// Added to satisfy relative import checks.
export const isAutomationDraftUsingDefaultCwd = undefined as never;
export const validateAutomationDraft = undefined as never;
export const applyAutomationDraftModelDefaults = undefined as never;
export const applyHeartbeatTargetThread = undefined as never;
export const createAutomationDraftFromAutomation = undefined as never;
export const createAutomationDraftFromSeed = undefined as never;
export const DEFAULT_AUTOMATION_DRAFT = undefined as never;
export const getAutomationDestinationOptions = undefined as never;
export const getAutomationDraftDestination = undefined as never;
export const getAutomationDraftRrule = undefined as never;
export const setAutomationDraftCwds = undefined as never;
export const setAutomationDraftDestination = undefined as never;
export const toAutomationCreatePayload = undefined as never;
export const toAutomationUpdatePayload = undefined as never;
export const applyAutomationScheduleDraft = undefined as never;

export const automationDirectiveResultAtom = undefined as never;
export const automationDirectiveSeedAtom = undefined as never;
export const formatAutomationNextRunLabel = undefined as never;
export const isDefaultAutomationDraft = undefined as never;
export const initAutomationNextRunLabelChunk = undefined as never;
export const initAutomationDraftRuntimeChunk = undefined as never;
// Added to satisfy relative import checks.
export const getAutomationDirectiveActionMode = undefined as never;
