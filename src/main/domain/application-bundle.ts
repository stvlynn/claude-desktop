// @ts-nocheck
// Restored from ref/package.json

export type ClaudeBundleIdentity = {
  appName: string;
  packageName: string;
  productName: string;
  version: string;
};

export type MainProcessEntry = {
  bundlePath: string;
  role: "bootstrap" | "main";
};

export type ClaudeApplicationBundle = {
  identity: ClaudeBundleIdentity;
  mainProcess: MainProcessEntry[];
};

export const claudeBundleIdentity: ClaudeBundleIdentity = {
  appName: "Claude.app",
  packageName: "@ant/desktop",
  productName: "Claude",
  version: "1.18286.0",
};

export const mainProcessEntries = [
  {
    bundlePath: "ref/.vite/build/index.pre.js",
    role: "bootstrap",
  },
  {
    bundlePath: "ref/.vite/build/index.js",
    role: "main",
  },
] satisfies MainProcessEntry[];
