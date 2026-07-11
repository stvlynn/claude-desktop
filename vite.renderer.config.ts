import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const rendererRoot = path.resolve(__dirname, "src/renderer");

export default defineConfig({
  root: rendererRoot,
  base: "./",
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "dist/renderer"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(rendererRoot, "index.html"),
        about: path.resolve(rendererRoot, "about.html"),
        buddy: path.resolve(rendererRoot, "buddy.html"),
        "find-in-page": path.resolve(rendererRoot, "find-in-page.html"),
        quick: path.resolve(rendererRoot, "quick.html"),
      },
    },
  },
  server: {
    port: 5173,
  },
});
