// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Validates a value's `url` field as an https:// URL string, returning a
// fallback when it is missing or invalid.
import { z } from "zod";

const httpsUrlSchema = z
  .string()
  .url()
  .refine((value) => value.startsWith("https://"));

export function parseHttpsUrl(
  value: { url?: unknown },
  fallback: string,
): string {
  const result = httpsUrlSchema.safeParse(value.url);
  return result.success ? result.data : fallback;
}
