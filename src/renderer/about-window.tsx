// Restored from ref/.vite/renderer/about_window/about.html

import { AppShell, runAppSideEffects } from "./app/app";
import { attachReactToElement } from "./shared/runtime/attach-react-to-element";
import { AboutWindowPage } from "./pages/about-window/page";

runAppSideEffects();

void attachReactToElement(
  document.body,
  Promise.resolve({ default: AppShell }),
  { children: <AboutWindowPage /> },
);
