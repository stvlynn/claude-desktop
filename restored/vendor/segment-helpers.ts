// Restored from ref/webview/assets/helpers-BDwSRLlu.js
// Helpers chunk restored from the Codex webview bundle.
export function helpersA(_helpersA) {
  return typeof _helpersA == "string";
}
export function helpersR(_helpersA) {
  return typeof _helpersA == "number";
}
export function helpersN(_helpersA) {
  return typeof _helpersA == "function";
}
export function helpersT(_helpersA) {
  return _helpersA != null;
}
export function helpersI(_helpersA) {
  return (
    Object.prototype.toString.call(_helpersA).slice(8, -1).toLowerCase() ===
    "object"
  );
}
