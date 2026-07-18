// Restored from ref/.vite/build/claudePagePreview.js

import { contextBridge } from "electron";

export interface ClaudeDesktopArtifactPaneBridge {
  embedded: true;
  platform: "desktop";
  chrome: "none";
}

contextBridge.exposeInMainWorld("claudeDesktopArtifactPane", {
  embedded: true,
  platform: "desktop",
  chrome: "none",
} satisfies ClaudeDesktopArtifactPaneBridge);
