import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        preload: path.resolve(__dirname, "src/main/infrastructure/preload.ts"),
        "about-window": path.resolve(
          __dirname,
          "src/main/preload/about-window-preload.ts",
        ),
        "quick-window": path.resolve(
          __dirname,
          "src/main/preload/quick-window-preload.ts",
        ),
        "find-in-page": path.resolve(
          __dirname,
          "src/main/preload/find-in-page-preload.ts",
        ),
        "main-view": path.resolve(
          __dirname,
          "src/main/preload/main-view-preload.ts",
        ),
        buddy: path.resolve(__dirname, "src/main/preload/buddy-preload.ts"),
        "claude-page-preview": path.resolve(
          __dirname,
          "src/main/preload/claude-page-preview-preload.ts",
        ),
        "computer-use-teach": path.resolve(
          __dirname,
          "src/main/preload/computer-use-teach-preload.ts",
        ),
        "computer-use-watch-record": path.resolve(
          __dirname,
          "src/main/preload/computer-use-watch-record-preload.ts",
        ),
        "cowork-artifact": path.resolve(
          __dirname,
          "src/main/preload/cowork-artifact-preload.ts",
        ),
        "watch-record-chooser": path.resolve(
          __dirname,
          "src/main/preload/watch-record-chooser-preload.ts",
        ),
      },
      formats: ["cjs"],
      fileName: (_format, entryName) => `${entryName}.cjs`,
    },
    outDir: path.resolve(__dirname, "dist/preload"),
    emptyOutDir: true,
    rollupOptions: {
      external: [/^electron(?:\/.*)?$/],
    },
    sourcemap: true,
  },
});
