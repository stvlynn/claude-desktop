// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// @ts-nocheck
// Boundary stub for Google Workspace export target helpers.

import type { GoogleWorkspaceResourceKind } from "./types";

export function getGoogleWorkspaceExportTarget(
  _path: string,
): GoogleWorkspaceResourceKind | null {
  const ext = _path.split(".").pop()?.toLowerCase();
  if (ext === "doc" || ext === "docx" || ext === "txt" || ext === "md")
    return "document";
  if (ext === "xls" || ext === "xlsx" || ext === "csv") return "spreadsheet";
  if (ext === "ppt" || ext === "pptx" || ext === "key") return "presentation";
  return null;
}

export function getGoogleWorkspaceMimeType(
  _kind: GoogleWorkspaceResourceKind,
): string {
  return "application/octet-stream";
}

export function getGoogleWorkspaceResourceKindProto(
  _kind: GoogleWorkspaceResourceKind,
): string {
  return "unknown";
}
