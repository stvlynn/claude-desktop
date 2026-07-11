// @ts-nocheck
// Restored from ref/webview/assets/browser-use-elevated-risk-learn-more-url-Bdqa5sCw.js
// Learn-more URL for browser-use elevated-risk UI, gated by Statsig URL config.

import { CODEX_CHROME_EXTENSION_DOCS_URL } from "./codex-links";
import { getStatsigUrlConfig } from "./statsig-url-config";

export const BROWSER_USE_ELEVATED_RISK_LEARN_MORE_CONFIG_ID = "4168530037";

export function getBrowserUseElevatedRiskLearnMoreUrl(config: {
  url?: unknown;
}): string {
  return getStatsigUrlConfig(config, CODEX_CHROME_EXTENSION_DOCS_URL);
}

export function initializeBrowserUseElevatedRiskLearnMoreUrlChunk(): void {
  // no-op stub
}
