// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation rendering helpers shared by local conversation thread modules.
import React from "react";
import { defineMessage } from "../../runtime/react-intl";
import { getPathBasename as getPathBasenameRaw } from "../../lib/get-path-basename";

import { initConversationPromptContextRuntime } from "../../runtime/conversation-prompt-context-runtime";
import { initArtifactPreviewRuntime as initThreadFindResourcePreviewRuntime } from "../../runtime/artifact-preview-runtime";

import { isAbsoluteOrWindowsPath as isAbsoluteOrWindowsPathValue } from "../../runtime/src-l0hb-mz-p";
import {
  P as recordForkedConversationSourceRaw,
  cs as focusThreadSourceFrameRaw,
  ho as resolveServiceTierForModelRaw,
  qo as diffSourceSignal,
  Mv as isRenderableConversationTurnRaw,
  pa as initGitActionDirectiveRuntime,
  ma as parseGitActionDirectivesRaw,
} from "../../vendor/projects-app-shared-runtime";

export const localConversationMessages = {
  forkThreadError: defineMessage({
    id: "localConversation.forkThreadError",
    defaultMessage: "Failed to fork conversation",
    description: "Toast shown when forking a conversation fails",
  }),
};
import {
  Mt as registerContentSearchRevealHandlerRaw,
  Nt as scrollContentSearchItemIntoViewRaw,
  Pt as revealContentSearchItemElementRaw,
  ct as updateCollapsedTurnsByConversationRaw,
} from "../../vendor/profile-page-runtime";
import { RenderedConversationTurn } from "../../../entities/conversation/local-conversation-thread-parts/rendered-conversation-turn";

type ConversationTurnRendererProps = {
  conversationId: string;
  cwd: string | null;
  hostId: string | null;
  isMostRecentTurn: boolean;
  modelProvider?: unknown;
  renderMcpApps?: boolean;
  resolvedApps?: readonly unknown[];
  turn: unknown;
  turnState?: unknown;
  latestTurnFollowContentRef?: React.Ref<HTMLDivElement>;
  [key: string]: unknown;
};

export function ConversationTurnRenderer({
  conversationId,
  cwd,
  hostId,
  isMostRecentTurn,
  modelProvider,
  renderMcpApps,
  resolvedApps,
  turn,
  turnState,
  latestTurnFollowContentRef,
}: ConversationTurnRendererProps) {
  const turnRecord =
    turn != null && typeof turn === "object"
      ? (turn as Record<string, unknown>)
      : {};
  const entries =
    [turnRecord.entries, turnRecord.items, turnRecord.renderUnits].find(
      Array.isArray,
    ) ?? [];
  const status = String(turnRecord.status ?? "");

  return React.createElement(RenderedConversationTurn, {
    entries: entries as readonly { kind: string }[],
    conversationId,
    hostId: hostId ?? "local",
    conversationDetailLevel: "steps",
    isTurnInProgress:
      status === "inProgress" || (isMostRecentTurn && Boolean(turnState)),
    isTurnCancelled: status === "cancelled",
    isActivitySliceClosed: false,
    cwd,
    resolvedApps,
    renderMcpApps,
    modelProvider:
      typeof modelProvider === "string" ? modelProvider : undefined,
    latestTurnFollowContentRef,
  });
}

export type RenderableConversationTurnOptions = {
  isBackgroundSubagentsEnabled?: boolean;
};

export type GitActionDirective = {
  branch?: string;
  cwd?: string;
  isDraft?: boolean;
  type: "commit" | "create-branch" | "create-pr" | "push" | "stage";
  url?: string;
};

export type ForkedConversationSource = {
  sourceConversationId: string;
  targetConversationId: string;
};

export type CollapsedTurnsUpdate = {
  collapsed: boolean;
  conversationId: string;
  current: unknown;
  turnId: string;
};

export type ContentSearchRevealRequest = {
  conversationId: string;
  itemId: string;
  turnKey: string;
};

export type ContentSearchRevealHandler = {
  revealItem(request: ContentSearchRevealRequest): Promise<void> | void;
};

export { diffSourceSignal };

export function initThreadFindPreviewRuntime(): void {
  initConversationPromptContextRuntime();
  initGitActionDirectiveRuntime();
  initThreadFindResourcePreviewRuntime();
}

export function initConversationTurnRendererRuntime(): void {
  // The semantic renderer is linked statically above.
}

export function isRenderableConversationTurn(
  turn: unknown,
  requests: readonly unknown[],
  options: RenderableConversationTurnOptions,
): boolean {
  return isRenderableConversationTurnRaw(turn, requests, options);
}

export function normalizeMarkdownPlainText(text: string): string {
  let current = text;
  for (;;) {
    const next = current
      .replace(/^\*\*(.+)\*\*$/u, "$1")
      .replace(/^__(.+)__$/u, "$1")
      .replace(/^\*(.+)\*$/u, "$1")
      .replace(/^_(.+)_$/u, "$1")
      .replace(/^`(.+)`$/u, "$1")
      .trim();
    if (next === current) return current;
    current = next;
  }
}

export function getPathBasename(path: string): string {
  return getPathBasenameRaw(path);
}

export function isAbsoluteOrWindowsPath(path: string): boolean {
  return isAbsoluteOrWindowsPathValue(path);
}

export function parseGitActionDirectives(
  assistantContent: string | null,
): GitActionDirective[] {
  return parseGitActionDirectivesRaw(
    assistantContent ?? "",
  ) as GitActionDirective[];
}

export function recordForkedConversationSource(
  scope: unknown,
  source: ForkedConversationSource,
): void {
  recordForkedConversationSourceRaw(scope, source);
}

export function focusThreadSourceFrame(
  scope: unknown,
  frameId: string,
  contextId: string,
): void {
  focusThreadSourceFrameRaw(scope, frameId, contextId);
}

export function resolveServiceTierForModel(
  scope: unknown,
  hostId: string,
  model: unknown,
): Promise<unknown> {
  return resolveServiceTierForModelRaw(
    scope,
    hostId,
    model,
  ) as Promise<unknown>;
}

export function waitForThreadLayoutTick(): Promise<void> {
  if (
    typeof window === "undefined" ||
    typeof window.requestAnimationFrame !== "function"
  ) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => resolve());
    });
  });
}

export function registerContentSearchRevealHandler(
  scope: unknown,
  conversationId: string,
  handler: ContentSearchRevealHandler,
): () => void {
  return registerContentSearchRevealHandlerRaw(
    scope,
    conversationId,
    handler,
  ) as () => void;
}

export function scrollContentSearchItemIntoView(
  itemId: string,
  behavior: ScrollBehavior,
): boolean {
  return scrollContentSearchItemIntoViewRaw(itemId, behavior);
}

export function revealContentSearchItemElement(
  itemId: string,
  behavior: ScrollBehavior,
): Promise<void> | void {
  return revealContentSearchItemElementRaw(
    itemId,
    behavior,
  ) as Promise<void> | void;
}

export function updateCollapsedTurnsByConversation(
  update: CollapsedTurnsUpdate,
): Record<string, Record<string, boolean | undefined>> {
  const current =
    update.current != null && typeof update.current === "object"
      ? (update.current as Record<string, Record<string, boolean | undefined>>)
      : {};
  return {
    ...current,
    [update.conversationId]: {
      ...(current[update.conversationId] ?? {}),
      [update.turnId]: update.collapsed,
    },
  };
}
