// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js
// Public npm-backed runtime boundary for the main renderer window.

import * as React from "react";
import { useIntl } from "react-intl";

export { React, useIntl };

/** CJS/ESM interop default used by the original bundle export `R`. */
export const reactDefaultInterop =
  (React as unknown as { default?: typeof React }).default ?? React;

export function objectWithoutProperties<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T,
>(source: T, excluded: readonly K[]): Omit<T, K> {
  const target: Record<PropertyKey, unknown> = {};

  for (const key of Object.keys(source) as Array<keyof T>) {
    if (
      Object.prototype.hasOwnProperty.call(source, key) &&
      !excluded.includes(key as K)
    ) {
      target[key] = source[key];
    }
  }

  if (source != null && typeof Object.getOwnPropertySymbols === "function") {
    for (const symbol of Object.getOwnPropertySymbols(source)) {
      if (
        !excluded.includes(symbol as K) &&
        Object.prototype.propertyIsEnumerable.call(source, symbol)
      ) {
        target[symbol] = source[symbol];
      }
    }
  }

  return target as Omit<T, K>;
}

export function shallowEqualObjects(
  left: Record<PropertyKey, unknown> | null | undefined,
  right: Record<PropertyKey, unknown> | null | undefined,
) {
  if (left === right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);

  if (rightKeys.length !== leftKeys.length) {
    return false;
  }

  return leftKeys.every(
    (key) =>
      left[key] === right[key] &&
      Object.prototype.hasOwnProperty.call(right, key),
  );
}

/**
 * Maps minified reference export names to restored identifiers.
 * Reference footer: `export { R, _, j, r, s, u }`.
 *
 * `j` was the bundled `react/jsx-runtime` namespace; the `src/` tree uses the
 * Vite React plugin transform instead of re-exporting that namespace here.
 */
export const mainWindowRuntimeExportMap = {
  R: "reactDefaultInterop",
  _: "objectWithoutProperties",
  j: "jsxRuntime",
  r: "React",
  s: "shallowEqualObjects",
  u: "useIntl",
} as const;
