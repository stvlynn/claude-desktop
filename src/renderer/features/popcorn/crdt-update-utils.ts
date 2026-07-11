// @ts-nocheck
// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
import { Dt as compactWorkbookRuntimeUpdates } from "../../shared/runtime/workbook-runtime";

import {
  type PopcornCrdtUpdate,
  type PopcornCrdtUpdateInput,
  type PopcornCrdtBootstrapState,
  type UseBootstrappedExternalCrdtUpdatesOptions,
} from "./types";

export const LARGE_RESTORE_UPDATE_COUNT = 500;

export function nonEmptyCrdtUpdates(
  updates: readonly PopcornCrdtUpdateInput[] | null | undefined,
): PopcornCrdtUpdate[] {
  return (updates ?? []).filter(
    (update): update is PopcornCrdtUpdate =>
      update != null && update.length > 0,
  );
}

export function compactCrdtUpdates(
  updates: readonly PopcornCrdtUpdate[],
): PopcornCrdtUpdate | null {
  const nonEmptyUpdates = updates.filter((update) => update.length > 0);
  if (nonEmptyUpdates.length === 0) return null;
  if (nonEmptyUpdates.length === 1) return nonEmptyUpdates[0] ?? null;
  return compactWorkbookRuntimeUpdates(nonEmptyUpdates) as PopcornCrdtUpdate;
}

export function compactPendingCrdtUpdates(
  updates: readonly PopcornCrdtUpdate[],
  startIndex: number,
): PopcornCrdtUpdate | null {
  return compactCrdtUpdates(updates.slice(startIndex));
}

export function sameCrdtUpdate(
  left: PopcornCrdtUpdate,
  right: PopcornCrdtUpdate,
): boolean {
  if (left === right) return true;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) return false;
  }
  return true;
}

export function sameCrdtUpdateList(
  left: readonly PopcornCrdtUpdate[],
  right: readonly PopcornCrdtUpdate[],
): boolean {
  if (left === right) return true;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    const leftUpdate = left[index];
    const rightUpdate = right[index];
    if (
      leftUpdate == null ||
      rightUpdate == null ||
      !sameCrdtUpdate(leftUpdate, rightUpdate)
    ) {
      return false;
    }
  }
  return true;
}

export function mergeInitialAndExternalCrdtUpdates({
  initialCrdtState,
  externalCrdtUpdates,
}: UseBootstrappedExternalCrdtUpdatesOptions): PopcornCrdtUpdateInput {
  const nonEmptyUpdates = nonEmptyCrdtUpdates(externalCrdtUpdates);
  if (initialCrdtState != null && initialCrdtState.length > 0) {
    nonEmptyUpdates.unshift(initialCrdtState);
  }
  if (nonEmptyUpdates.length === 0) return initialCrdtState;
  if (nonEmptyUpdates.length === 1) return nonEmptyUpdates[0];
  return compactWorkbookRuntimeUpdates(nonEmptyUpdates) as PopcornCrdtUpdate;
}

export function createBootstrapState(
  options: UseBootstrappedExternalCrdtUpdatesOptions,
): PopcornCrdtBootstrapState {
  const bootstrappedExternalCrdtUpdates = nonEmptyCrdtUpdates(
    options.externalCrdtUpdates,
  );
  return {
    initialCrdtState: mergeInitialAndExternalCrdtUpdates({
      initialCrdtState: options.initialCrdtState,
      externalCrdtUpdates: bootstrappedExternalCrdtUpdates,
    }),
    bootstrappedExternalCrdtUpdates,
  };
}

export function remainingExternalCrdtUpdates({
  bootstrapState,
  updates,
}: {
  bootstrapState: PopcornCrdtBootstrapState;
  updates: readonly PopcornCrdtUpdateInput[] | null | undefined;
}): PopcornCrdtUpdate[] {
  const nonEmptyUpdates = nonEmptyCrdtUpdates(updates);
  const bootstrappedUpdates = bootstrapState.bootstrappedExternalCrdtUpdates;
  if (
    bootstrappedUpdates.length === 0 ||
    nonEmptyUpdates.length < bootstrappedUpdates.length
  ) {
    return nonEmptyUpdates;
  }

  for (let index = 0; index < bootstrappedUpdates.length; index += 1) {
    const bootstrappedUpdate = bootstrappedUpdates[index];
    const update = nonEmptyUpdates[index];
    if (
      bootstrappedUpdate == null ||
      update == null ||
      !sameCrdtUpdate(bootstrappedUpdate, update)
    ) {
      return nonEmptyUpdates;
    }
  }

  return nonEmptyUpdates.slice(bootstrappedUpdates.length);
}

export function formatExternalCrdtRestoreError(
  error: unknown,
  artifactLabel: string,
): string {
  return error instanceof Error && error.message.trim().length > 0
    ? error.message
    : `Failed to restore external ${artifactLabel.toLowerCase()} edits.`;
}
