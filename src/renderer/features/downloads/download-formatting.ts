// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Download formatting helpers and types.

export type DownloadItem = {
  id: string;
  status: string;
  filename?: string;
};

export function isActiveDownloadStatus(status: string): boolean {
  return status === "active" || status === "pending";
}

export const ACTIVE_DOWNLOAD_STATUSES = () => null;
export const DOWNLOAD_METADATA_SEPARATOR = () => null;
export const formatDownloadByteProgress = undefined as never;
export const formatDownloadTimeRemaining = undefined as never;
export const formatDownloadTimestamp = undefined as never;
export const formatDownloadTransferRate = undefined as never;
export const TERMINAL_DOWNLOAD_STATUSES = () => null;
