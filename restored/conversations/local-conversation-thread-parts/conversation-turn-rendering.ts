// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Semantic renderability and search-format helpers for local conversation turns.
import {
  Mv as isRenderableConversationTurn,
  Nv as initConversationArtifactRuntime,
  Pv as formatConversationTurnForSearch,
  Sk as normalizeMarkdownPlainText,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

export type RenderableConversationTurnOptions = {
  isBackgroundSubagentsEnabled: boolean;
};

export function isRenderableLocalConversationTurn(
  turn: unknown,
  requests: readonly unknown[],
  options: RenderableConversationTurnOptions,
): boolean {
  return isRenderableConversationTurn(turn, requests, options);
}

export function formatLocalConversationTurnForSearch<TItem = unknown>(
  turn: unknown,
  requests: readonly unknown[],
  options: RenderableConversationTurnOptions,
): { items: TItem[] } {
  return formatConversationTurnForSearch(turn, requests, options);
}

export function normalizeConversationSearchMarkdown(text: string): string {
  return normalizeMarkdownPlainText(text);
}

export function initLocalConversationTurnRenderingRuntime(): void {
  initConversationArtifactRuntime();
}
