// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Patch failure error summary helpers.

export function firstNonEmptyTrimmedLine(text: string | null | undefined): string {
  return text?.trim().split("\n")[0]?.trim() ?? "";
}
