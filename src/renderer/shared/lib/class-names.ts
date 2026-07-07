// Restored from ref/.vite/renderer/about_window/assets/AboutWindow-DJTf96rn.js

type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | Record<string, boolean | null | undefined>;

function toClassName(value: ClassValue): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className)
    .join(" ");
}

export function classNames(...values: ClassValue[]) {
  return values.map(toClassName).filter(Boolean).join(" ");
}
