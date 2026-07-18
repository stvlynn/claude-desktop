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
  workers: {
    directMcpHost: {
      reference: "ref/.vite/build/mcp-runtime/directMcpHost.js",
      restored: "dist/main/workers/direct-mcp-host.js",
      status: "restored",
    },
    nodeHost: {
      reference: "ref/.vite/build/mcp-runtime/nodeHost.js",
      restored: "dist/main/workers/mcp-node-host.js",
      status: "restored",
    },
    shellPath: {
      reference: "ref/.vite/build/shell-path-worker/shellPathWorker.js",
      restored: "dist/main/workers/shell-path-worker.js",
      status: "restored",
    },
    transcriptSearch: {
      reference:
        "ref/.vite/build/transcript-search-worker/transcriptSearchWorker.js",
      restored: "dist/main/workers/transcript-search-worker.js",
      status: "restored",
    },
  },
} as const;
