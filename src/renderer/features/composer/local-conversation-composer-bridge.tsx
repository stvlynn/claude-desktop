// @ts-nocheck
// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local conversation composer bridge and host connection signals.
import { appServerConnectionStateSignal as hostConnectionStatusSignal } from "../../shared/runtime/thread-context-inputs.facade";
import { LOCAL_HOST_ID } from "../../shared/runtime/use-host-config.facade";
import {
  backgroundAgentsSignal,
  initBackgroundSubagentsRuntimeChunk,
} from "../../entities/conversation/background-subagent-signals";
import { useSystemPrefersReducedMotion } from "../../shared/lib/reduced-motion-preference";

import {
  initThreadComposerFooterChunk,
  threadComposerContext,
  ThreadComposerFooter,
} from "./thread-composer-footer";
export type {
  ThreadComposerFooterProps,
  ThreadComposerFooterSideConversationRequest,
} from "./thread-composer-footer";

export {
  backgroundAgentsSignal,
  hostConnectionStatusSignal,
  LOCAL_HOST_ID,
  threadComposerContext,
  ThreadComposerFooter,
};

export function initLocalConversationComposerRuntime(): void {
  initBackgroundSubagentsRuntimeChunk();
  initThreadComposerFooterChunk();
}

export function useLocalConversationComposerRuntime(): void {
  useSystemPrefersReducedMotion();
}

export function initThreadComposerFooterRuntime(): void {
  initThreadComposerFooterChunk();
}
