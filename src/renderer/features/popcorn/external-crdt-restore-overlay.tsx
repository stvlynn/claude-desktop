// @ts-nocheck
// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
import { type ReactElement } from "react";

import { type ExternalCrdtRestoreOverlayProps } from "./types";

export function ExternalCrdtRestoreOverlay({
  artifactLabel,
  restoreState,
}: ExternalCrdtRestoreOverlayProps): ReactElement | null {
  if (restoreState == null) return null;

  const toneClassName =
    restoreState.kind === "failed"
      ? "border-token-border-default bg-token-bg-primary text-token-editor-warning-foreground"
      : "border-token-border-default bg-token-bg-primary text-token-text-secondary";

  return (
    <div className="absolute inset-0 z-10 flex items-end bg-token-bg-primary/35 p-3 backdrop-blur-[2px]">
      <div
        className={`w-full rounded-xl border px-3 py-2 text-xs shadow-lg ${toneClassName}`}
        role={restoreState.kind === "failed" ? "alert" : "status"}
      >
        {restoreState.kind === "failed" ? (
          <div className="flex flex-col gap-1">
            <div className="font-medium text-token-text-primary">
              Could not restore {artifactLabel.toLowerCase()} edits
            </div>
            <div>
              {restoreState.errorMessage} Pending CRDT updates:{" "}
              {restoreState.pendingUpdateCount}.
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="font-medium text-token-text-primary">
              Restoring {artifactLabel.toLowerCase()} edits
            </div>
            <div>
              Compacting and applying {restoreState.pendingUpdateCount} CRDT
              updates.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
