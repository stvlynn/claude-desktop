// Restored from ref/.vite/build/src-CoIhwwHr.js
// Cross-platform path and filesystem-path utility helpers.

export function normalizePathSeparators(value: string): string {
  return value.replace(/\\/g, "/");
}

const windowsDrivePath = /^[A-Za-z]:[\\/]/;
const slashPrefixedWindowsDrivePath = /^\/[A-Za-z]:[\\/]/;
const windowsUncPath = /^\\\\[^\\]+\\[^\\]+/;
const posixUncPath = /^\/\/[^/]+\/[^/]+/;

export function isUncPath(value: string): boolean {
  return windowsUncPath.test(value) || posixUncPath.test(value);
}

export function isAbsoluteFilePath(value: string): boolean {
  return (
    (value.startsWith("/") && !value.startsWith("//")) ||
    windowsDrivePath.test(value) ||
    isUncPath(value)
  );
}

export function stripLeadingSlashFromWindowsDrivePath(value: string): string {
  return slashPrefixedWindowsDrivePath.test(value) ? value.slice(1) : value;
}

export function isSafePathSegment(value: string | undefined): boolean {
  return (
    value != null &&
    value.length > 0 &&
    !value.includes("/") &&
    !value.includes("\\") &&
    value !== "." &&
    value !== ".."
  );
}

export function toError(error: unknown): Error {
  if (error instanceof Error) return error;
  if (typeof error === "string") return Error(error);
  if (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return Error(error.message);
  }
  try {
    return Error(JSON.stringify(error));
  } catch {
    return Error(String(error));
  }
}
