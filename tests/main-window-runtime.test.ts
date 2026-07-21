import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import {
  mainWindowRuntimeExportMap,
  objectWithoutProperties,
  reactDefaultInterop,
  shallowEqualObjects,
  React,
  useIntl,
} from "../src/renderer/shared/runtime/main-window-runtime";
import {
  claudeFontFamilies,
  injectClaudeFontFaces,
  injectFontPreloadLinks,
  resetClaudeFontInjectionForTests,
} from "../src/renderer/shared/runtime/fonts";
import {
  applyInitialTheme,
  themeClassName,
} from "../src/renderer/shared/runtime/theme";
import { initializeRendererSentry } from "../src/renderer/shared/runtime/renderer-sentry";

type StyleNode = {
  tagName: string;
  attributes: Record<string, string>;
  textContent: string;
  parentNode?: {
    removeChild(node: StyleNode): StyleNode;
  };
  setAttribute(name: string, value: string): void;
};

function installMinimalDom() {
  const styles: StyleNode[] = [];
  const head: {
    querySelector(selector: string): StyleNode | null;
    querySelectorAll(selector: string): StyleNode[];
    appendChild(node: StyleNode): StyleNode;
    removeChild(node: StyleNode): StyleNode;
  } = {
    querySelector(selector: string) {
      if (selector === "style[data-claude-font-faces]") {
        return styles[0] ?? null;
      }
      return null;
    },
    querySelectorAll(selector: string) {
      if (selector === "style[data-claude-font-faces]") {
        return styles;
      }
      return [];
    },
    appendChild(node: StyleNode) {
      node.parentNode = head;
      styles.push(node);
      return node;
    },
    removeChild(node: StyleNode) {
      const index = styles.indexOf(node);
      if (index >= 0) styles.splice(index, 1);
      return node;
    },
  };
  const body = { className: "" };
  const documentStub = {
    head,
    body,
    createElement(tag: string): StyleNode {
      return {
        tagName: tag.toUpperCase(),
        attributes: {},
        textContent: "",
        setAttribute(name: string, value: string) {
          this.attributes[name] = value;
        },
      };
    },
  };
  const listeners: Array<(event: { matches: boolean }) => void> = [];
  let matches = true;
  const media = {
    get matches() {
      return matches;
    },
    set matches(value: boolean) {
      matches = value;
    },
    addEventListener(
      _type: string,
      listener: (event: { matches: boolean }) => void,
    ) {
      listeners.push(listener);
    },
  };
  const windowStub = {
    matchMedia: () => media,
  };

  Object.assign(globalThis, {
    document: documentStub,
    window: windowStub,
  });

  return {
    documentStub,
    styles,
    media,
    listeners,
    cleanup() {
      delete (globalThis as { document?: unknown }).document;
      delete (globalThis as { window?: unknown }).window;
    },
  };
}

describe("mainWindowRuntimeExportMap", () => {
  test("covers the six reference bundle export aliases", () => {
    expect(mainWindowRuntimeExportMap).toEqual({
      R: "reactDefaultInterop",
      _: "objectWithoutProperties",
      j: "jsxRuntime",
      r: "React",
      s: "shallowEqualObjects",
      u: "useIntl",
    });
  });

  test("resolved export map points at real shipped bindings except jsx transform", () => {
    const bindings: Record<string, unknown> = {
      reactDefaultInterop,
      objectWithoutProperties,
      React,
      shallowEqualObjects,
      useIntl,
    };
    for (const [minified, restoredName] of Object.entries(
      mainWindowRuntimeExportMap,
    )) {
      if (minified === "j") {
        // Served by the Vite React JSX transform, not a runtime re-export.
        expect(restoredName).toBe("jsxRuntime");
        continue;
      }
      expect(bindings[restoredName]).toBeDefined();
    }
  });
});

describe("objectWithoutProperties", () => {
  test("omits listed keys while preserving others", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(objectWithoutProperties(source, ["b"] as const)).toEqual({
      a: 1,
      c: 3,
    });
  });
});

describe("shallowEqualObjects", () => {
  test("compares enumerable own properties by reference", () => {
    expect(shallowEqualObjects({ a: 1 }, { a: 1 })).toBe(true);
    expect(shallowEqualObjects({ a: 1 }, { a: 2 })).toBe(false);
    expect(shallowEqualObjects(null, null)).toBe(true);
    expect(shallowEqualObjects(undefined, { a: 1 })).toBe(false);
  });
});

describe("injectClaudeFontFaces", () => {
  let dom: ReturnType<typeof installMinimalDom>;

  beforeEach(() => {
    dom = installMinimalDom();
    resetClaudeFontInjectionForTests();
  });

  afterEach(() => {
    resetClaudeFontInjectionForTests();
    dom.cleanup();
  });

  test("injects Anthropic @font-face rules once into document.head", () => {
    injectClaudeFontFaces();
    expect(dom.styles.length).toBe(1);
    const css = dom.styles[0]!.textContent;
    expect(css).toContain(claudeFontFamilies.sans);
    expect(css).toContain(claudeFontFamilies.serif);
    expect(css).toContain("@font-face");
    expect(css).toContain("AnthropicSans-Roman-Variable");
    expect(dom.styles[0]!.attributes["data-claude-font-faces"]).toBe("");

    injectFontPreloadLinks();
    expect(dom.styles.length).toBe(1);
  });
});

describe("applyInitialTheme", () => {
  let dom: ReturnType<typeof installMinimalDom>;

  beforeEach(() => {
    dom = installMinimalDom();
  });

  afterEach(() => {
    dom.cleanup();
  });

  test("sets body class from prefers-color-scheme and updates on change", () => {
    applyInitialTheme();
    expect(dom.documentStub.body.className).toBe(themeClassName);

    for (const listener of dom.listeners) {
      listener({ matches: false });
    }
    expect(dom.documentStub.body.className).toBe("");
  });
});

describe("initializeRendererSentry", () => {
  afterEach(() => {
    delete (globalThis as { window?: unknown }).window;
  });

  test("lets the SDK own the one-shot sentinel", () => {
    const windowStub: {
      __SENTRY__RENDERER_INIT__?: boolean;
      desktopEssentialTelemetryDisabled?: boolean;
      process?: { env?: { CI?: string } };
    } = {};
    Object.assign(globalThis, { window: windowStub });

    let sentinelBeforeSdk: boolean | undefined;
    initializeRendererSentry(() => {
      sentinelBeforeSdk = windowStub.__SENTRY__RENDERER_INIT__;
      windowStub.__SENTRY__RENDERER_INIT__ = true;
    });

    expect(sentinelBeforeSdk).toBeUndefined();
    expect(windowStub.__SENTRY__RENDERER_INIT__).toBe(true);
  });

  test("skips initialization for telemetry, CI, and duplicate gates", () => {
    let calls = 0;
    const initializeSdk = () => {
      calls += 1;
    };

    Object.assign(globalThis, {
      window: { desktopEssentialTelemetryDisabled: true },
    });
    initializeRendererSentry(initializeSdk);

    Object.assign(globalThis, { window: { process: { env: { CI: "1" } } } });
    initializeRendererSentry(initializeSdk);

    Object.assign(globalThis, { window: { __SENTRY__RENDERER_INIT__: true } });
    initializeRendererSentry(initializeSdk);

    expect(calls).toBe(0);
  });
});
