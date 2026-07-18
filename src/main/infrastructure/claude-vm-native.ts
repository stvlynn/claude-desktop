// Restored from ref/.vite/build/index.js

import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import path from "node:path";
import { EventEmitter } from "node:events";

export interface ClaudeVmNativeApi {
  startVM(
    bundlePath: string,
    memoryGB?: number,
    cpuCount?: number,
    isolation?: string,
    apiReachabilityProbeTarget?: string,
  ): Promise<void> | void;
  stopVM?(terminate?: boolean): Promise<void> | void;
  isRunning(): Promise<boolean>;
  isGuestConnected(): Promise<boolean>;
  isVirtualizationSupported?(): string | undefined;
  configure?(): Promise<void> | void;
}

interface ClaudeSwiftModule extends EventEmitter {
  vm?: ClaudeVmNativeApi;
}

const require = createRequire(import.meta.url);
let cachedModule: ClaudeSwiftModule | null | undefined;

function wrapperCandidates(): string[] {
  const relative = path.join("@ant", "claude-swift", "js", "index.js");
  return [
    path.join(process.resourcesPath, "node_modules", relative),
    path.join(
      process.resourcesPath,
      "app.asar.unpacked",
      "node_modules",
      relative,
    ),
    path.resolve(process.cwd(), "ref", "node_modules", relative),
  ];
}

export function loadClaudeSwiftModule(): ClaudeSwiftModule | null {
  if (cachedModule !== undefined) return cachedModule;
  if (process.platform !== "darwin") return (cachedModule = null);
  for (const candidate of wrapperCandidates()) {
    if (!existsSync(candidate)) continue;
    try {
      cachedModule = require(candidate) as ClaudeSwiftModule;
      return cachedModule;
    } catch (error) {
      console.error("Failed to load the Claude Swift VM module", error);
    }
  }
  return (cachedModule = null);
}

export function loadClaudeVmNativeApi(): ClaudeVmNativeApi | null {
  return loadClaudeSwiftModule()?.vm ?? null;
}
