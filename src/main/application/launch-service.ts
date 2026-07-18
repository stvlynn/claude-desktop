// Restored from ref/.vite/build/index.js

export type LaunchActiveServer = Record<string, unknown>;

export class LaunchService {
  private readonly activeServers: LaunchActiveServer[] = [];

  // GrowthBook flag 2976814254 defaults false in the current bundle.
  isAvailable(): false {
    return false;
  }

  getLogs(): [] {
    return [];
  }

  stopServer(): false {
    return false;
  }

  getActiveServers(): LaunchActiveServer[] {
    return this.activeServers;
  }

  showPreview(): false {
    return false;
  }

  hidePreview(): false {
    return false;
  }

  destroyPreview(): false {
    return false;
  }

  refreshPreview(): false {
    return false;
  }

  setPreviewViewport(): true {
    return true;
  }

  clearPreviewViewport(): true {
    return true;
  }

  setPreviewColorScheme(): true {
    return true;
  }

  toggleSelectionMode(): false {
    return false;
  }

  startFromConfig(): Record<string, never> {
    return {};
  }

  focusOrOpenPreviewTab(): null {
    return null;
  }

  openExternalLinkInPreview(): null {
    return null;
  }

  getConfiguredServices(): [] {
    return [];
  }

  getAutoVerify(): false {
    return false;
  }

  setAutoVerify(): false {
    return false;
  }

  getPreviewUrl(): null {
    return null;
  }

  navigatePreview(): false {
    return false;
  }

  goBack(): false {
    return false;
  }

  goForward(): false {
    return false;
  }

  setActivePreviewTab(): false {
    return false;
  }

  closePreviewTab(): false {
    return false;
  }

  openPreviewTab(): null {
    return null;
  }

  closeAllPreviewTabs(): false {
    return false;
  }

  getPreviewTabs(): [] {
    return [];
  }

  capturePreviewScreenshot(): null {
    return null;
  }

  capturePreviewScreenshotIfChanged(): "" {
    return "";
  }

  exportPreview(): null {
    return null;
  }

  getPreviewNavState(): null {
    return null;
  }

  loadHtmlPreview(): null {
    return null;
  }

  loadClaudePagePreview(): null {
    return null;
  }

  loadHtmlPreviewContent(): null {
    return null;
  }

  getPreviewAllowedOrigins(): [] {
    return [];
  }

  removePreviewAllowedOrigin(): false {
    return false;
  }

  clearPreviewAllowedOrigins(): false {
    return false;
  }

  addPreviewAllowedOrigin(): "unavailable" {
    return "unavailable";
  }

  openPreviewInBrowser(): false {
    return false;
  }

  startBrowserPreview(): null {
    return null;
  }

  pickHtmlFile(): null {
    return null;
  }

  sendClaudePageShareCommand(): false {
    return false;
  }

  sendClaudePageDismissCommand(): false {
    return false;
  }
}
