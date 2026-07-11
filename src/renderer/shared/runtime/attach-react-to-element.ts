// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

import * as React from "react";
import type { ComponentType } from "react";
import { createRoot } from "react-dom/client";

export type ImportComponentModule<T extends Record<string, unknown>> =
  | { default: ComponentType<T> }
  | ComponentType<T>;

export async function attachReactToElement<T extends Record<string, unknown>>(
  container: Element,
  importComponent: Promise<ImportComponentModule<T>>,
  componentProps?: T,
): Promise<() => void> {
  const module = await importComponent;
  const Component = "default" in module ? module.default : module;
  const root = createRoot(container);
  const props = componentProps ?? ({} as T);

  root.render(React.createElement(Component, props));

  return () => {
    root.unmount();
  };
}
