// @ts-nocheck
// Restored from ref/webview/assets/artifact-preview-status-jgtoNhXT.js
// Artifact preview loading and error state renderer.

import type { ReactElement } from "react";

export type ArtifactPreviewStatusValue = "ready" | "loading" | "error";

export function ArtifactPreviewStatus(
  status: ArtifactPreviewStatusValue,
): ReactElement | null {
  if (status === "ready") return null;
  return (
    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
      {status === "loading" ? (
        <span className="loading-shimmer-pure-text font-medium">
          Preparing preview…
        </span>
      ) : (
        "Couldn’t load this preview"
      )}
    </div>
  );
}

export default ArtifactPreviewStatus;
