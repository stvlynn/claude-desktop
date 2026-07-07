// Restored from ref/package.json

import { rendererWindowEntries } from "../../shared/contracts/window-entry";

export const extractedBundleLayout = {
  appAsar: "/Applications/Claude.app/Contents/Resources/app.asar",
  packageJson: "ref/package.json",
  main: {
    bootstrap: "ref/.vite/build/index.pre.js",
    bundle: "ref/.vite/build/index.js",
  },
  renderer: rendererWindowEntries,
  workers: [
    "ref/.vite/build/mcp-runtime/directMcpHost.js",
    "ref/.vite/build/mcp-runtime/nodeHost.js",
    "ref/.vite/build/shell-path-worker/shellPathWorker.js",
    "ref/.vite/build/transcript-search-worker/transcriptSearchWorker.js",
  ],
} as const;
