// @ts-nocheck
// Boundary stub: external-link barrel until component/browser-actions are promoted.
// Re-exports domain/normalize/types; provides a placeholder ExternalLink component.
export {
  parseDomain,
  isIpAddress,
  isLocalHostname,
  hasRegistrableDomain,
} from "./domain";
export {
  normalizeExternalHref,
  formatExternalHrefForDisplay,
  resolveCodexBrowserUrl,
  isLocalHttpUrl,
} from "./normalize";
export type {
  BrowserSidebarVisibilityOptions,
  ExternalLinkClickEvent,
  ExternalLinkContextMenuOptions,
  ExternalLinkMenuItem,
  ExternalLinkProps,
  HandleExternalLinkClickOptions,
  NormalizeExternalHrefOptions,
  OpenCodexBrowserOptions,
  ParsedDomain,
  ParseDomainOptions,
} from "./types";

export function openInCodexBrowser(_options: unknown): boolean {
  return false;
}

export function buildExternalLinkContextMenuItems(_options: unknown): never[] {
  return [];
}

export function handleExternalLinkClick(_options: unknown): boolean {
  return false;
}

export function canOpenExternalLinkInBrowserSidebar(_options: unknown): boolean {
  return false;
}

export function ExternalLink(_props: unknown): null {
  return null;
}
