// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Route-scoped set of turn ids interrupted by this client.
import {
  appScopeRoot,
  createAppScopeSignal,
  createSignalFamily,
} from "./app-scope";

type ScopedStore = {
  set<TValue>(
    signal: unknown,
    key: undefined,
    updater: (current: ReadonlySet<string>) => TValue,
  ): void;
};

const emptyInterruptedTurnIds = new Set<string>();

const interruptedTurnIdsByConversationFamily = createSignalFamily(
  (conversationId: unknown) =>
    createAppScopeSignal(appScopeRoot, () => emptyInterruptedTurnIds),
);

export function interruptedTurnIdsByConversationSignal(
  conversationId: string,
) {
  return interruptedTurnIdsByConversationFamily(conversationId);
}

export function markTurnInterruptedByClient(
  store: ScopedStore,
  conversationId: string,
  turnId: string,
): void {
  const signal = interruptedTurnIdsByConversationSignal(conversationId);
  store.set(signal, undefined, (current) => new Set(current).add(turnId));
}

export function initInterruptedTurnStateChunk(): void {
  void interruptedTurnIdsByConversationFamily;
}
