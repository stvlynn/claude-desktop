// @ts-nocheck
// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
import { useRef } from "react";

import {
  type PopcornCrdtBootstrapState,
  type UseBootstrappedExternalCrdtUpdatesOptions,
  type UseBootstrappedExternalCrdtUpdatesResult,
} from "./types";
import { createBootstrapState, remainingExternalCrdtUpdates } from "./crdt-update-utils";

export function useBootstrappedExternalCrdtUpdates({
  initialCrdtState,
  externalCrdtUpdates,
}: UseBootstrappedExternalCrdtUpdatesOptions): UseBootstrappedExternalCrdtUpdatesResult {
  const bootstrapStateRef = useRef<PopcornCrdtBootstrapState | null>(null);
  bootstrapStateRef.current ??= createBootstrapState({
    initialCrdtState,
    externalCrdtUpdates,
  });
  const bootstrapState = bootstrapStateRef.current;

  return {
    initialCrdtState: bootstrapState.initialCrdtState,
    externalCrdtUpdates: remainingExternalCrdtUpdates({
      bootstrapState,
      updates: externalCrdtUpdates,
    }),
  };
}
