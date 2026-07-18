// Restored from ref/webview/assets/app-shell-ref-DW6qz7GS.js
// App shell DOM element contexts shared by overlays and portal-based controls.
import { createContext, type MutableRefObject } from "react";

export type AppShellElement = HTMLElement | null;

export const appShellRefContext = createContext<MutableRefObject<AppShellElement>>(
  {
    current: null,
  },
);

export const appShellElementContext = createContext<AppShellElement>(null);
