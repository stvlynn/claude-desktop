// @ts-nocheck
// Restored from ref/.vite/build/worker.js
// Ambient type declaration for the optional objc-js native runtime dependency
// used by the macOS Computer Use capture bridge.
declare module "objc-js" {
  export function callFunction(
    name: string,
    signature: { returns: string; args: readonly string[] },
    ...args: unknown[]
  ): unknown;
  export const fromPointer: unknown;
  export class NobjcLibrary {
    constructor(path: string);
  }
}
