// @ts-nocheck
// Restored from ref/webview/assets/use-is-dark-Dz6aJFFs.js

import React from "react";

let currentIsDark: boolean | null = null;
const subscribers = new Set<() => void>();
let rootObserver: MutationObserver | null = null;
let headObserver: MutationObserver | null = null;
let colorSchemeQuery: MediaQueryList | null = null;

function notifyThemeSubscribers(): void {
  for (const listener of subscribers) listener();
}

function refreshCurrentIsDark(): void {
  const nextIsDark = detectCurrentIsDark();
  if (nextIsDark !== currentIsDark) {
    currentIsDark = nextIsDark;
    notifyThemeSubscribers();
  }
}

function watchStylesheetLink(link: HTMLLinkElement): void {
  if (link.rel !== "stylesheet") return;
  if (link.sheet) {
    queueMicrotask(() => refreshCurrentIsDark());
    return;
  }
  const onLoadOrError = () => refreshCurrentIsDark();
  link.addEventListener("load", onLoadOrError, { once: true });
  link.addEventListener("error", onLoadOrError, { once: true });
}

function handleHeadMutation(event: MutationRecord): void {
  if (event.type === "childList") {
    let addedStylesheet = false;
    for (const node of Array.from(event.addedNodes)) {
      if (node instanceof HTMLLinkElement && node.rel === "stylesheet") {
        watchStylesheetLink(node);
        addedStylesheet = true;
      }
    }
    if (event.removedNodes.length > 0 || !addedStylesheet) {
      refreshCurrentIsDark();
    }
    return;
  }
  if (event.type === "attributes") {
    const target = event.target;
    if (
      target instanceof HTMLLinkElement &&
      target.rel === "stylesheet" &&
      (event.attributeName === "href" ||
        event.attributeName === "media" ||
        event.attributeName === "rel")
    ) {
      watchStylesheetLink(target);
      return;
    }
    refreshCurrentIsDark();
  }
}

function startDarkThemeObservers(): void {
  if (typeof window === "undefined" || rootObserver || headObserver) return;
  refreshCurrentIsDark();
  rootObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        refreshCurrentIsDark();
        break;
      }
    }
  });
  rootObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "style"],
  });
  const head = document.head;
  if (head) {
    headObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList" || mutation.type === "attributes") {
          handleHeadMutation(mutation);
          break;
        }
      }
    });
    headObserver.observe(head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "media", "rel"],
    });
  }
  if (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function"
  ) {
    colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    colorSchemeQuery.addEventListener("change", refreshCurrentIsDark);
  }
}

function stopDarkThemeObservers(): void {
  rootObserver?.disconnect();
  headObserver?.disconnect();
  rootObserver = null;
  headObserver = null;
  colorSchemeQuery?.removeEventListener("change", refreshCurrentIsDark);
  colorSchemeQuery = null;
}

function subscribeToDarkThemeChanges(callback: () => void): () => void {
  subscribers.add(callback);
  startDarkThemeObservers();
  return () => {
    subscribers.delete(callback);
    if (subscribers.size === 0) stopDarkThemeObservers();
  };
}

function getCurrentIsDarkSnapshot(): boolean | null {
  return currentIsDark;
}

export function useIsDark(): boolean | null {
  return React.useSyncExternalStore(
    subscribeToDarkThemeChanges,
    getCurrentIsDarkSnapshot,
    getCurrentIsDarkSnapshot,
  );
}

type Rgb = { r: number; g: number; b: number };

function relativeLuminance(r: number, g: number, b: number): number {
  const toLinear = (value: number): number => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  };
  const rLinear = toLinear(r);
  const gLinear = toLinear(g);
  const bLinear = toLinear(b);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

function parseCssColorToRgb(color: string): Rgb | null {
  const normalized = color.trim().toLowerCase();
  if (!normalized) return null;
  if (normalized.startsWith("#")) {
    const hex = normalized.slice(1);
    const expand = (digit: string): string => digit + digit;
    if (hex.length === 3 || hex.length === 4) {
      return {
        r: parseInt(expand(hex[0]), 16),
        g: parseInt(expand(hex[1]), 16),
        b: parseInt(expand(hex[2]), 16),
      };
    }
    if (hex.length === 6 || hex.length === 8) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      };
    }
    return null;
  }
  const rgbMatch = normalized.match(/^rgba?\(([^)]+)\)$/);
  if (rgbMatch) {
    const rgbParts = rgbMatch[1].split(/\s*,\s*/).map((item) => item.trim());
    if (rgbParts.length >= 3) {
      const r = parseRgbChannel(rgbParts[0]);
      const g = parseRgbChannel(rgbParts[1]);
      const b = parseRgbChannel(rgbParts[2]);
      if (r != null && g != null && b != null) return { r, g, b };
    }
    return null;
  }
  const hslMatch = normalized.match(/^hsla?\(([^)]+)\)$/);
  if (hslMatch) {
    const hslParts = hslMatch[1].split(/\s*,\s*/).map((item) => item.trim());
    if (hslParts.length >= 3) {
      const h = parseFloat(hslParts[0]);
      const s = parseCssPercentage(hslParts[1]);
      const l = parseCssPercentage(hslParts[2]);
      if (!Number.isNaN(h) && !Number.isNaN(s) && !Number.isNaN(l)) {
        return hslToRgb(h, s, l);
      }
    }
    return null;
  }
  return null;
}

function parseRgbChannel(token: string): number | null {
  if (token.endsWith("%")) {
    const percent = parseFloat(token.slice(0, -1));
    return Number.isNaN(percent) ? null : Math.round((percent / 100) * 255);
  }
  const value = parseFloat(token);
  return Number.isNaN(value) ? null : Math.max(0, Math.min(255, value));
}

function parseCssPercentage(token: string): number {
  if (token.endsWith("%")) {
    const percent = parseFloat(token.slice(0, -1));
    return Number.isNaN(percent) ? 0 : percent / 100;
  }
  const value = parseFloat(token);
  return Number.isNaN(value) ? 0 : value / 100;
}

function hslToRgb(h: number, s: number, l: number): Rgb {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = (h % 360) / 60;
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (huePrime >= 0 && huePrime < 1) {
    [r1, g1, b1] = [chroma, secondComponent, 0];
  } else if (huePrime >= 1 && huePrime < 2) {
    [r1, g1, b1] = [secondComponent, chroma, 0];
  } else if (huePrime >= 2 && huePrime < 3) {
    [r1, g1, b1] = [0, chroma, secondComponent];
  } else if (huePrime >= 3 && huePrime < 4) {
    [r1, g1, b1] = [0, secondComponent, chroma];
  } else if (huePrime >= 4 && huePrime < 5) {
    [r1, g1, b1] = [secondComponent, 0, chroma];
  } else if (huePrime >= 5 && huePrime < 6) {
    [r1, g1, b1] = [chroma, 0, secondComponent];
  }
  const lightnessMatch = l - chroma / 2;
  return {
    r: Math.round((r1 + lightnessMatch) * 255),
    g: Math.round((g1 + lightnessMatch) * 255),
    b: Math.round((b1 + lightnessMatch) * 255),
  };
}

function readTokenBackgroundColor(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const probe = document.createElement("div");
    probe.style.display = "none";
    probe.style.backgroundColor = "var(--color-token-editor-background)";
    document.body.appendChild(probe);
    const backgroundColor = getComputedStyle(probe).backgroundColor || "";
    probe.remove();
    return backgroundColor;
  } catch {
    return null;
  }
}

function detectCurrentIsDark(): boolean | null {
  const backgroundColor = readTokenBackgroundColor();
  if (!backgroundColor) return null;
  const rgb = parseCssColorToRgb(backgroundColor);
  return rgb ? relativeLuminance(rgb.r, rgb.g, rgb.b) < 0.5 : null;
}
