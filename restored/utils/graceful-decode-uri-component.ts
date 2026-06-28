// Restored from ref/webview/assets/gracefulDecodeURIComponent-DByonkCa.js
// Decodes a URI component while preserving malformed input.

export function gracefulDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value;
  }
}
