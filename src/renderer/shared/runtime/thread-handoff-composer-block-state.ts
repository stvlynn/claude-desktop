// @ts-nocheck
// Restored from ref/webview/assets/thread-handoff-composer-block-state-C7-ef4-4.js
// Thread handoff composer block state helpers.

import { _appScopeT, appScopeUnderscore } from "./app-scope";

type ScopedCounterStore = {
  get(signal: unknown, key: string): number;
  set(signal: unknown, key: string, value: number): void;
};

type ComposerBlockInputs = {
  pendingPastedTextAttachmentCount: number;
  queuedFollowUpsError: unknown;
  queuedFollowUpsLoading: boolean;
  queuedFollowUpCount: number;
};

const threadHandoffComposerBlockCountState = appScopeUnderscore(
  _appScopeT,
  () => 0,
);

export function adjustThreadHandoffComposerBlockCount(
  store: ScopedCounterStore,
  key: string | null | undefined,
  delta: number,
): void {
  if (key != null) {
    store.set(
      threadHandoffComposerBlockCountState,
      key,
      store.get(threadHandoffComposerBlockCountState, key) + delta,
    );
  }
}

export function getThreadHandoffComposerBlockReason({
  pendingPastedTextAttachmentCount,
  queuedFollowUpsError,
  queuedFollowUpsLoading,
  queuedFollowUpCount,
}: ComposerBlockInputs): string | null {
  return pendingPastedTextAttachmentCount > 0
    ? "pending-pasted-text-attachments"
    : queuedFollowUpsLoading
      ? "loading-queued-follow-ups"
      : queuedFollowUpsError
        ? "unavailable-queued-follow-ups"
        : queuedFollowUpCount > 0
          ? "queued-follow-ups"
          : null;
}

export function initThreadHandoffComposerBlockStateChunk(): void {}

export { threadHandoffComposerBlockCountState };
