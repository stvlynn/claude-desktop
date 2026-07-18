// Restored from ref/.vite/renderer/buddy_window/buddy.html

import { AppShell, runAppSideEffects } from "./app/app";
import { attachReactToElement } from "./shared/runtime/attach-react-to-element";
import { BuddyWindowPage } from "./pages/buddy-window/page";

runAppSideEffects();

void attachReactToElement(
  document.body,
  Promise.resolve({ default: AppShell }),
  { children: <BuddyWindowPage /> },
);
