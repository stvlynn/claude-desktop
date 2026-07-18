// Restored from ref/.vite/build/index.pre.js

import type { App } from "electron";

export function configureClaudeAppIdentity(app: App): void {
  app.setName("Claude");
  if (process.platform === "win32") {
    app.setAppUserModelId("com.anthropic.claude");
  }
}
