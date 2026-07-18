// Restored from ref/webview/assets/external-link-pp1LMUpE.js
// Browser-opening behavior and context menu actions for external links.
import { vscodeApiF as vscodeMessageBus } from "../../runtime/vscode-api";
import { copyToClipboard } from "../copy-to-clipboard";
import {
  isLocalHttpUrl,
  normalizeExternalHref,
  resolveCodexBrowserUrl,
} from "./normalize";
import type {
  BrowserSidebarVisibilityOptions,
  ExternalLinkContextMenuOptions,
  ExternalLinkMenuItem,
  HandleExternalLinkClickOptions,
  OpenCodexBrowserOptions,
} from "./types";
const EXPLICIT_LINK_PREFIX_PATTERN = /^(?:[a-z][a-z0-9+.-]*:\/\/|www\.)/i;
function hasExplicitExternalLinkPrefix(href: string): boolean {
  return EXPLICIT_LINK_PREFIX_PATTERN.test(href);
}
function ensureHrefProtocol(href: string): string {
  return /^www\./i.test(href) ? `https://${href}` : href;
}
function getClickDisposition({
  button,
  ctrlKey,
  metaKey,
}: {
  button: number;
  ctrlKey: boolean;
  metaKey: boolean;
}): "new-tab" | undefined {
  if (button === 1 || metaKey || ctrlKey) return "new-tab";
}
export function openInCodexBrowser({
  conversationId,
  url,
  source,
  initiator,
}: OpenCodexBrowserOptions): boolean {
  const browserUrl = resolveCodexBrowserUrl(url);
  if (browserUrl == null) return false;
  vscodeMessageBus.dispatchHostMessage({
    type: "toggle-browser-panel",
    conversationId,
    open: true,
    url: browserUrl,
    source,
    initiator,
  });
  return true;
}
export function canOpenExternalLinkInBrowserSidebar({
  href,
  isBrowserSidebarEnabled,
}: BrowserSidebarVisibilityOptions): boolean {
  const normalizedHref = ensureHrefProtocol(href);
  return (
    isBrowserSidebarEnabled &&
    hasExplicitExternalLinkPrefix(href) &&
    (resolveCodexBrowserUrl(href) != null || isLocalHttpUrl(normalizedHref))
  );
}
export function buildExternalLinkContextMenuItems({
  conversationId,
  href,
  initiator,
}: ExternalLinkContextMenuOptions): ExternalLinkMenuItem[] {
  const normalizedHref = ensureHrefProtocol(href);
  const isLocalUrl = isLocalHttpUrl(normalizedHref);
  return [
    {
      id: "open-in-codex-browser",
      label: "Open in browser",
      onSelect: () => {
        if (conversationId == null || isLocalUrl) {
          vscodeMessageBus.dispatchMessage("open-in-browser", {
            url: normalizedHref,
            openTarget: "in-app-browser",
            source: "manual",
            initiator,
          });
          return;
        }
        openInCodexBrowser({
          conversationId,
          url: href,
          source: "manual",
          initiator,
        });
      },
    },
    {
      id: "open-in-external-browser",
      label: "Open in external browser",
      onSelect: () => {
        vscodeMessageBus.dispatchMessage("open-in-browser", {
          url: normalizedHref,
          useExternalBrowser: true,
        });
      },
    },
    {
      id: "external-link-separator",
      type: "separator",
    },
    {
      id: "copy-link",
      label: "Copy link",
      onSelect: () => {
        void copyToClipboard(normalizedHref);
      },
    },
  ];
}
export function handleExternalLinkClick({
  event,
  href,
  initiator,
  openTarget,
  originHostId,
}: HandleExternalLinkClickOptions): boolean {
  if (!hasExplicitExternalLinkPrefix(href)) return false;
  event.preventDefault();
  vscodeMessageBus.dispatchMessage("open-in-browser", {
    disposition: getClickDisposition(event),
    initiator,
    ...(openTarget == null
      ? {}
      : {
          openTarget,
        }),
    originHostId,
    source: "manual",
    url: normalizeExternalHref(ensureHrefProtocol(href)),
  });
  return true;
}
