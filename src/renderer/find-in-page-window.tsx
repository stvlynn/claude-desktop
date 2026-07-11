// @ts-nocheck
// Restored from ref/.vite/renderer/find_in_page/find-in-page.html

import { AppShell, runAppSideEffects } from "./app/app";
import { attachReactToElement } from "./shared/runtime/attach-react-to-element";
import { FindInPage } from "./pages/find-in-page/page";

runAppSideEffects();

void attachReactToElement(
  document.body,
  Promise.resolve({ default: AppShell }),
  { children: <FindInPage /> },
);
