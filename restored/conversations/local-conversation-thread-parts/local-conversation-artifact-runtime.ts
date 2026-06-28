// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Conversation artifact rendering and output collection runtime helpers.
import {
  collectAssistantOutputArtifacts,
  collectConversationEndResourcePaths,
  collectRenderedTurnOutputItems as collectRenderedTurnOutputItemsRuntime,
  initConversationArtifactRuntime as initConversationArtifactRuntimeRaw,
  initMarkdownResourceRuntime,
  initVisibleGeneratedImageOutputRuntime as initVisibleGeneratedImageOutputRuntimeRaw,
  renderConversationTurnForArtifacts as renderConversationTurnForArtifactsRaw,
  resolveVisibleGeneratedImageOutputs as resolveVisibleGeneratedImageOutputsRuntime,
  type AssistantOutputArtifactsOptions,
  type RenderedTurnOutputItems,
  type RenderConversationTurnOptions,
  type VisibleGeneratedImageOutputOptions,
  type VisibleGeneratedImageOutputResult,
} from "../../runtime/conversation-artifact-runtime";

export function renderLocalConversationTurn<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return renderConversationTurnForArtifactsRaw<TTurn>(turn, requests, options);
}

export function renderLocalConversationTurnForArtifacts<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return renderLocalConversationTurn<TTurn>(turn, requests, options);
}

export function collectLocalAssistantOutputArtifacts<TArtifact = unknown>(
  options: AssistantOutputArtifactsOptions,
): TArtifact[] {
  return collectAssistantOutputArtifacts<TArtifact>(options);
}

export function collectLocalConversationEndResourcePaths(
  artifacts: readonly unknown[],
): string[] {
  return collectConversationEndResourcePaths(artifacts);
}

export function collectRenderedTurnOutputItems(
  items: readonly unknown[],
  status: string,
): RenderedTurnOutputItems {
  return collectRenderedTurnOutputItemsRuntime(items, status);
}

export function resolveVisibleGeneratedImageOutputs(
  options: VisibleGeneratedImageOutputOptions,
): VisibleGeneratedImageOutputResult {
  return resolveVisibleGeneratedImageOutputsRuntime(options);
}

export function initLocalConversationArtifactRuntime(): void {
  initConversationArtifactRuntimeRaw();
}

export function initLocalConversationMarkdownResourceRuntime(): void {
  initMarkdownResourceRuntime();
}

export function initVisibleGeneratedImageOutputRuntime(): void {
  initVisibleGeneratedImageOutputRuntimeRaw();
}
