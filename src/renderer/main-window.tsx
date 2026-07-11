// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/index.html
//
// Main renderer window entry point. Replaces the original Vite-bundled
// `main-D-xLCUWh.js` runtime for the `src/` build.

import { AppShell, runAppSideEffects } from "./app/app";
import { attachReactToElement } from "./shared/runtime/attach-react-to-element";
import { MainWindowPage } from "./pages/main-window/page";

runAppSideEffects();

void attachReactToElement(
  document.body,
  Promise.resolve({ default: AppShell }),
  { children: <MainWindowPage /> },
);
