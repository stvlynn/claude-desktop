// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js
//
// Vite-style preload helper used by dynamic chunk loading in the renderer.
//
// The original helper (named `V1` in the bundle) accepted a dynamic import
// factory, a list of dependency URLs to preload via `<link rel="modulepreload">`
// or `<link rel="stylesheet">`, and a base URL. It preloaded the dependencies,
// awaited them, then ran the import factory. On any failure it dispatched a
// `vite:preloadError` event; if the event was not cancelled it threw the error.

import type { ComponentType } from "react";

type PreloadResult = {
  status: "fulfilled" | "rejected";
  reason?: unknown;
};

type VitePreloadErrorEvent = Event & {
  payload?: unknown;
};

const resolveUrl = (url: string, baseUrl: string): string =>
  new URL(url, baseUrl).href;

const seenPreloads: Record<string, true> = {};

export function preloadAndRun<T extends { default: ComponentType }>(
  importFactory: () => Promise<T>,
  dependencies?: string[],
  baseUrl?: string,
): Promise<T> {
  let preloadPromise: Promise<PreloadResult[]> = Promise.resolve([]);

  if (dependencies && dependencies.length > 0) {
    const links = document.getElementsByTagName("link");
    const nonceMeta = document.querySelector<HTMLMetaElement>(
      "meta[property=csp-nonce]",
    );
    const nonce = nonceMeta?.nonce || nonceMeta?.getAttribute("nonce");

    preloadPromise = Promise.all(
      dependencies.map((dependency) =>
        Promise.resolve(
          preloadDependency(dependency, baseUrl, links, nonce),
        ).then(
          () => ({ status: "fulfilled" as const }),
          (reason: unknown) => ({ status: "rejected" as const, reason }),
        ),
      ),
    );
  }

  function dispatchPreloadError(error: unknown): never {
    const event = new Event("vite:preloadError", {
      cancelable: true,
    }) as VitePreloadErrorEvent;
    event.payload = error;
    window.dispatchEvent(event);
    if (!event.defaultPrevented) throw error;
    throw error;
  }

  return preloadPromise.then((results) => {
    for (const result of results) {
      if (result.status === "rejected") {
        dispatchPreloadError(result.reason);
      }
    }
    return importFactory().catch(dispatchPreloadError);
  });
}

function preloadDependency(
  dependency: string,
  baseUrl: string | undefined,
  links: HTMLCollectionOf<HTMLLinkElement>,
  nonce: string | null | undefined,
): Promise<void> | void {
  const href = baseUrl ? resolveUrl(dependency, baseUrl) : dependency;
  if (href in seenPreloads) return;
  seenPreloads[href] = true;

  const isCss = href.endsWith(".css");
  const selectorSuffix = isCss ? '[rel="stylesheet"]' : "";

  if (baseUrl) {
    for (let index = links.length - 1; index >= 0; index -= 1) {
      const link = links[index];
      if (link.href === href && (!isCss || link.rel === "stylesheet")) {
        return;
      }
    }
  } else if (document.querySelector(`link[href="${href}"]${selectorSuffix}`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = isCss ? "stylesheet" : "modulepreload";
  if (!isCss) link.as = "script";
  link.crossOrigin = "";
  link.href = href;
  if (nonce) link.setAttribute("nonce", nonce);
  document.head.appendChild(link);

  if (isCss) {
    return new Promise((resolve, reject) => {
      link.addEventListener("load", () => resolve());
      link.addEventListener("error", () =>
        reject(Error(`Unable to preload CSS for ${href}`)),
      );
    });
  }
}
