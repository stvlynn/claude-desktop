// @ts-nocheck
// Restored from ref/.vite/renderer/quick_window/quick-window.html

import { AppShell, runAppSideEffects } from "./app/app";
import { attachReactToElement } from "./shared/runtime/attach-react-to-element";
import { QuickWindowPage } from "./pages/quick-window/page";

runAppSideEffects();

void attachReactToElement(
  document.body,
  Promise.resolve({ default: AppShell }),
  { children: <QuickWindowPage /> },
);
