// @ts-nocheck
// Restored from ref/webview/assets/rolldown-runtime-Czos8NxU.js
// Memoizes a side-effect initializer so it runs at most once.

export function once<T>(initializer: () => T): () => T {
  let value: T;
  let initialized = false;
  return () => {
    if (!initialized) {
      value = initializer();
      initialized = true;
    }
    return value;
  };
}
