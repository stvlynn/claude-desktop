import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/main/index.ts"),
        "workers/shell-path-worker": path.resolve(
          __dirname,
          "src/main/infrastructure/workers/shell-path-worker.ts",
        ),
        "workers/transcript-search-worker": path.resolve(
          __dirname,
          "src/main/infrastructure/workers/transcript-search-worker.ts",
        ),
        "workers/mcp-node-host": path.resolve(
          __dirname,
          "src/main/infrastructure/workers/mcp-node-host.ts",
        ),
        "workers/direct-mcp-host": path.resolve(
          __dirname,
          "src/main/infrastructure/workers/direct-mcp-host.ts",
        ),
      },
      formats: ["es"],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    outDir: path.resolve(__dirname, "dist/main"),
    emptyOutDir: true,
    rollupOptions: {
      external: [
        /^electron(?:\/.*)?$/,
        /^@sentry\/electron(?:\/.*)?$/,
        /^@anthropic-ai\/claude-agent-sdk(?:\/.*)?$/,
        /^@modelcontextprotocol\/sdk(?:\/.*)?$/,
        /^node-pty(?:\/.*)?$/,
        /^mime-types(?:\/.*)?$/,
        /^node:/,
      ],
    },
    sourcemap: true,
  },
});
