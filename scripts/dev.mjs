#!/usr/bin/env node
/**
 * Dev orchestrator for the restored src/ build.
 *
 * Builds the Electron preload and main process, starts the Vite renderer dev
 * server, then launches Electron. Shuts down the Vite server when Electron exits.
 */

import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { createServer } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
/** Absolute path to the Electron binary (not the Node-runnable API module). */
const electronBinary = require("electron");

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: false,
      ...options,
    });
    child.on("close", (code) => {
      if (code === 0 || code === null) {
        resolve(code);
      } else {
        reject(new Error(`Command failed with code ${code}: ${command}`));
      }
    });
  });
}

async function main() {
  await run("bun", ["run", "build:preload"], { cwd: root });
  await run("bun", ["run", "build:main"], { cwd: root });

  const viteServer = await createServer({
    configFile: path.resolve(root, "vite.renderer.config.ts"),
  });
  await viteServer.listen();

  const address = viteServer.httpServer.address();
  const port = typeof address === "object" && address ? address.port : 5173;
  const rendererUrl = `http://localhost:${port}`;

  console.log(`Renderer dev server running at ${rendererUrl}`);

  // Parent agent/IDE shells sometimes set ELECTRON_RUN_AS_NODE=1, which makes
  // the Electron binary behave like plain Node and breaks `import { app }`.
  const { ELECTRON_RUN_AS_NODE: _ignored, ...electronEnv } = process.env;
  const electron = spawn(electronBinary, ["dist/main/index.js"], {
    cwd: root,
    stdio: "inherit",
    env: {
      ...electronEnv,
      RENDERER_URL: rendererUrl,
      ELECTRON_RUN_AS_NODE: "",
    },
  });

  electron.on("close", async (code) => {
    console.log(`Electron exited with code ${code}`);
    await viteServer.close();
    process.exit(code ?? 0);
  });

  process.on("SIGINT", async () => {
    electron.kill("SIGINT");
    await viteServer.close();
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
