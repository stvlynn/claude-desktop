// Restored from ref/.vite/build/index.pre.js

import { existsSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

export function resolveModuleDirectory(moduleUrl: string): string {
  return path.dirname(fileURLToPath(moduleUrl));
}

export function resolveRendererUrl(moduleDirectory: string): string {
  if (process.env.RENDERER_URL) return process.env.RENDERER_URL;
  const productionHtml = path.resolve(
    moduleDirectory,
    "..",
    "renderer",
    "index.html",
  );
  return existsSync(productionHtml)
    ? `file://${productionHtml}`
    : "http://localhost:5173";
}
