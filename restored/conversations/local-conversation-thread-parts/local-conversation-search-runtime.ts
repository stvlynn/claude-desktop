// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Search runtime helpers shared by local conversation search sources.
import {
  Ss as initConversationSearchMatchHighlighterRaw,
  cn as initConversationSearchMatcherRaw,
  gs as initConversationSearchSnippetBuilderRaw,
  hs as findConversationTextMatchesRaw,
  ln as scrollToConversationSearchMatchRaw,
  ms as buildConversationSearchSnippetRaw,
  ys as getConversationSearchMatchIdRaw,
} from "../../boundaries/current-ref/projects-app-shared-producer";

type ConversationSearchLocationLike = {
  contextId: string;
  domain: "conversation";
  end: number;
  start: number;
  turnKey: string;
  unitId: string;
};

type ConversationTextMatchResult = {
  isCapped: boolean;
  offsets: Array<{ end: number; start: number }>;
  totalMatches: number;
};

export function findLocalConversationTextMatches(
  text: string,
  query: string,
  maxMatches: number,
): ConversationTextMatchResult {
  return findConversationTextMatchesRaw(
    text,
    query,
    maxMatches,
  ) as ConversationTextMatchResult;
}

export function buildLocalConversationSearchSnippet(
  text: string,
  start: number,
  end: number,
): unknown {
  return buildConversationSearchSnippetRaw(text, start, end);
}

export function getLocalConversationSearchMatchId(
  location: ConversationSearchLocationLike,
): string {
  return getConversationSearchMatchIdRaw(location);
}

export function scrollToLocalConversationSearchMatch(options: {
  container: Element;
  includeShadowRoots: boolean;
  matchId: string;
  signal?: AbortSignal | null;
}): Promise<unknown> | unknown {
  return scrollToConversationSearchMatchRaw(options);
}

export function initLocalConversationSearchRuntime(): void {
  initConversationSearchMatchHighlighterRaw();
  initConversationSearchMatcherRaw();
  initConversationSearchSnippetBuilderRaw();
}
