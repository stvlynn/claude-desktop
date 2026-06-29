// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~appearance-settings~general-settings-C3J7WwqO.js
// Partial compatibility facade for external-agent import runtime helpers.
import type { ReactNode } from "react";
import type { ExternalAgentImportItem } from "../general-appearance-runtime/types";

export const EXTERNAL_AGENT_IMPORT_PROVIDER_IDS = [
  "claude",
  "cursor",
  "windsurf",
] as const;

export type ExternalAgentImportProviderId =
  (typeof EXTERNAL_AGENT_IMPORT_PROVIDER_IDS)[number];

type IntlShapeLike = {
  formatMessage(message: {
    id: string;
    defaultMessage: string;
    description?: string;
  }): string;
};

export type ExternalAgentImportDetectionState = {
  detectedItems: readonly ExternalAgentImportItem[];
  getSelectedItems(
    selection: ExternalAgentImportSelection,
  ): readonly ExternalAgentImportItem[];
  hasImportableItems: boolean;
  importItems(items: readonly ExternalAgentImportItem[]): Promise<{
    projectRoots: string[];
  }>;
  isImporting: boolean;
  refetchDetectedItems(): Promise<void>;
};

export type ExternalAgentImportSelection = {
  includeCommands?: boolean;
  includeConfig?: boolean;
  includeHooks?: boolean;
  includeMcpServers?: boolean;
  includeProjects?: boolean;
  includeSessions?: boolean;
  includeSkills?: boolean;
  includeSubagents?: boolean;
};

type ExternalAgentImportStepProps = {
  appBrand?: string;
  children?: ReactNode;
  detectedProviderIds?: readonly string[];
  eventSource?: string;
  logShownOnMount?: boolean;
  onContinue?: (
    selection: ExternalAgentImportSelection | readonly string[],
  ) => void;
  onCustomize?: (providerIds: readonly string[]) => void;
  onEvent?: (action: string) => void;
  onSkip?: () => void;
  providerIds?: readonly string[];
  summary?: ReactNode;
  variant?: "dialog" | "inline";
};

export function formatExternalAgentImportItemLabel(
  intl: IntlShapeLike,
  item: ExternalAgentImportItem,
): string {
  return intl.formatMessage({
    id: `externalAgentConfig.itemType.${item.itemType}`,
    defaultMessage: item.itemType.replaceAll("_", " ").toLowerCase(),
  });
}

export async function refreshImportedProjectRoots({
  onImportedProjectRootsReady,
  projectRoots,
}: {
  hostId: string;
  onImportedProjectRootsReady?: (projectRoots: string[]) => void;
  projectRoots: readonly string[];
  refreshRecentConversations?: () => Promise<void> | void;
}): Promise<void> {
  onImportedProjectRootsReady?.([...projectRoots]);
}

export function ExternalAgentImportProviderStep({
  children,
}: ExternalAgentImportStepProps): JSX.Element {
  return <>{children}</>;
}

export async function refreshRecentConversationsAfterImport(): Promise<void> {}

export function selectExternalAgentImportItems({
  detectedItems,
}: {
  detectedItems: readonly ExternalAgentImportItem[];
  providerIds: readonly string[];
  selection: ExternalAgentImportSelection;
}): readonly ExternalAgentImportItem[] {
  return detectedItems;
}

export function getDetectedExternalAgentProviderIds(
  detectedItems: readonly ExternalAgentImportItem[],
): readonly string[] {
  return detectedItems.length === 0
    ? []
    : [...EXTERNAL_AGENT_IMPORT_PROVIDER_IDS];
}

export function logExternalAgentImportStarted({
  items,
  surface,
}: {
  items: readonly ExternalAgentImportItem[];
  surface: string;
}): void {
  void items;
  void surface;
}

export function logExternalAgentImportCompleted({
  durationMs,
  error,
  failedStage,
  items,
  projectRootsReturnedCount,
  status,
  surface,
}: {
  durationMs: number;
  error?: unknown;
  failedStage?: string;
  items: readonly ExternalAgentImportItem[];
  projectRootsReturnedCount: number;
  status: "failure" | "success";
  surface: string;
}): void {
  void durationMs;
  void error;
  void failedStage;
  void items;
  void projectRootsReturnedCount;
  void status;
  void surface;
}

export function countExternalAgentImportChoices(
  summary: ExternalAgentImportSelection | null,
): number {
  return summary == null ? 0 : Object.values(summary).filter(Boolean).length;
}

export function createExternalAgentImportEventPayload(
  summary: ExternalAgentImportSelection,
  selectedCount: number,
  providerIds: readonly string[],
): Record<string, unknown> {
  return { providerIds: [...providerIds], selectedCount, summary };
}

export function useExternalAgentImportDetection({
  enabled = true,
}: {
  enabled?: boolean;
  workspaceRoots?: readonly string[];
}): ExternalAgentImportDetectionState {
  return {
    detectedItems: [],
    getSelectedItems: () => [],
    hasImportableItems: enabled && false,
    importItems: async () => ({ projectRoots: [] }),
    isImporting: false,
    refetchDetectedItems: async () => {},
  };
}

export function formatExternalAgentImportChoicesSummary(
  intl: IntlShapeLike,
  items: readonly ExternalAgentImportItem[],
): ExternalAgentImportSelection | null {
  void intl;
  return items.length === 0 ? null : { includeConfig: true };
}

export function summarizeExternalAgentImportSelection({
  detectedItems,
}: {
  detectedItems: readonly ExternalAgentImportItem[];
  intl: IntlShapeLike;
  providerIds: readonly string[];
}): ExternalAgentImportSelection | null {
  return detectedItems.length === 0 ? null : { includeConfig: true };
}

export function ExternalAgentImportItemsStep({
  children,
}: ExternalAgentImportStepProps): JSX.Element {
  return <>{children}</>;
}

export async function invalidateExternalAgentImportQueries(queryClient: {
  invalidateQueries?: (options: { queryKey: unknown[] }) => Promise<unknown>;
}): Promise<void> {
  await queryClient.invalidateQueries?.({
    queryKey: ["external-agent-import"],
  });
}

export function initExternalAgentImportAnalyticsRuntimeChunk(): void {}

export function initExternalAgentImportProviderStepChunk(): void {}

export function initExternalAgentImportDetectionRuntimeChunk(): void {}

export function initExternalAgentImportEventPayloadRuntimeChunk(): void {}

export function initExternalAgentImportProgressRuntimeChunk(): void {}

export function initExternalAgentImportItemLabelsChunk(): void {}

export function initExternalAgentImportDetectedItemsChunk(): void {}

export function initExternalAgentImportItemsStepChunk(): void {}

export function initExternalAgentImportProviderSelectionChunk(): void {}

export * from "./extended-model";
export * from "./extended-ui";
