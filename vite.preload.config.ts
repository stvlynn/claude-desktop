import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main/infrastructure/preload.ts"),
      formats: ["cjs"],
      fileName: () => "preload.cjs",
    },
    outDir: path.resolve(__dirname, "dist/preload"),
    emptyOutDir: true,
    rollupOptions: {
      external: ["electron"],
    },
    sourcemap: true,
  },
});
