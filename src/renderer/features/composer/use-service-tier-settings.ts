// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Stub for use-service-tier-settings to unblock app-shell/home-announcements promotion.

export interface ServiceTierSettings {}
export interface UseServiceTierSettingsResult {
  settings: ServiceTierSettings;
  isLoading: boolean;
}
export function useServiceTierSettings(): UseServiceTierSettingsResult {
  return { settings: {}, isLoading: false };
}
export function initUseServiceTierSettingsChunk(): void {}
