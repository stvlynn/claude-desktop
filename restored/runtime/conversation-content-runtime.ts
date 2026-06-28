// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation rendering/search helpers shared by local conversation thread modules.
import {
  Mv as isRenderableConversationTurnRaw,
  Sk as normalizeMarkdownPlainTextRaw,
  UR as isAbsoluteOrWindowsPathRaw,
  Sj as getPathBasenameRaw,
  bF as initConversationPromptContextRuntime,
  fh as initGitActionDirectiveRuntime,
  ph as parseGitActionDirectivesRaw,
  wj as initThreadFindResourcePreviewRuntime,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  P as recordForkedConversationSourceRaw,
  cs as focusThreadSourceFrameRaw,
  ho as resolveServiceTierForModelRaw,
  qo as diffSourceSignal,
  u as localConversationMessages,
  un as waitForThreadLayoutTickRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  Mt as registerContentSearchRevealHandlerRaw,
  Nt as scrollContentSearchItemIntoViewRaw,
  Pt as revealContentSearchItemElementRaw,
  ct as updateCollapsedTurnsByConversationRaw,
} from "../boundaries/current-ref/profile-page-producer";

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

export { diffSourceSignal, localConversationMessages };

export function initThreadFindPreviewRuntime(): void {
  initConversationPromptContextRuntime();
  initGitActionDirectiveRuntime();
  initThreadFindResourcePreviewRuntime();
}

export function isRenderableConversationTurn(
  turn: unknown,
  requests: readonly unknown[],
  options: RenderableConversationTurnOptions,
): boolean {
  return isRenderableConversationTurnRaw(turn, requests, options);
}

export function normalizeMarkdownPlainText(text: string): string {
  return normalizeMarkdownPlainTextRaw(text);
}

export function getPathBasename(path: string): string {
  return getPathBasenameRaw(path);
}

export function isAbsoluteOrWindowsPath(path: string): boolean {
  return isAbsoluteOrWindowsPathRaw(path);
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
  return resolveServiceTierForModelRaw(scope, hostId, model) as Promise<unknown>;
}

export function waitForThreadLayoutTick(): Promise<void> {
  return waitForThreadLayoutTickRaw() as Promise<void>;
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
  return revealContentSearchItemElementRaw(itemId, behavior) as
    | Promise<void>
    | void;
}

export function updateCollapsedTurnsByConversation(
  update: CollapsedTurnsUpdate,
): unknown {
  return updateCollapsedTurnsByConversationRaw(update);
}
