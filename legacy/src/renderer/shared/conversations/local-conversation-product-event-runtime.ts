// Restored from ref/webview/assets/local-conversation-stream-role-product-event-De1UaUs6.js
// Runtime bindings for local conversation stream-role and heartbeat host events.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../runtime/app-scope-hooks";
import {
  initStatsigFeatureGateRuntime as initStatsigFeatureGateHooks,
  useStatsigGate,
} from "../runtime/feature-gate-runtime";
import {
  getChunkModuleExports,
  initProductEventRuntime,
  initReactRuntime,
} from "../runtime/shared-utility-runtime";
import {
  initVscodeMessageRuntime as initVscodeMessageBridge,
  vscodeMessageBridge,
} from "../runtime/vscode-message-runtime";
import { recordProductEvent } from "../runtime/query-scope-runtime";

export const appScope = appScopeRoot;
export const localConversationRouteScope = appScopeRoot;

export const conversationCollaborationModeSignal = createAppScopeSignal<
  unknown | null
>(appScopeRoot, null);
export const conversationPermissionConfigSignal = createAppScopeSignal<
  unknown | null
>(appScopeRoot, null);
export const conversationStreamRoleSignal = createAppScopeSignal<{
  role: string;
} | null>(appScopeRoot, null);
export const latestConversationTurnSignal = createAppScopeSignal<
  unknown | null
>(appScopeRoot, null);

export const streamRoleProductEvent = {
  eventName: "local_conversation_stream_role",
};

export function setProductEventProperties(
  scope: unknown,
  event: unknown,
  properties: Record<string, unknown>,
): void {
  recordProductEvent(scope, event, properties);
}

export function initAppScope(): void {}
export function initScopeRuntime(): void {}
export function initConversationStateSelectors(): void {}
export function initThreadStateSignalRuntime(): void {}
export function initRouteScope(): void {}

export {
  getChunkModuleExports,
  initProductEventRuntime,
  initReactRuntime,
  initStatsigFeatureGateHooks,
  initVscodeMessageBridge,
  useScope,
  useScopedValue,
  useSignalValue,
  useStatsigGate,
  vscodeMessageBridge,
};
