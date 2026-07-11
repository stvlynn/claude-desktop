// @ts-nocheck
// Restored from ref/.vite/build/worker.js
// Image path validation and data-url reading for Computer Use capture updates.

import { readFile, realpath, stat } from "node:fs/promises";
import { extname, isAbsolute, join, relative } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

export const MAX_CAPTURE_IMAGE_BYTES = 25 * 1024 * 1024;
export const CAPTURE_SERVICE_TMP_DIR = "com.openai.sky.CUAService";

export async function resolveCaptureImagePath(
  value: string | null,
): Promise<string | null> {
  if (value == null || value.trim().length === 0) return null;

  let imagePath: string;
  try {
    const imageUrl = new URL(value);
    if (imageUrl.protocol !== "file:") return null;
    imagePath = fileURLToPath(imageUrl);
  } catch {
    if (!isAbsolute(value)) return null;
    imagePath = value;
  }

  if (getCaptureImageMimeType(imagePath) == null) return null;

  try {
    const [realImagePath, captureTempRoot] = await Promise.all([
      realpath(imagePath),
      realpath(join(tmpdir(), CAPTURE_SERVICE_TMP_DIR)),
    ]);
    const relativeImagePath = relative(captureTempRoot, realImagePath);
    if (relativeImagePath.startsWith("..") || isAbsolute(relativeImagePath)) {
      return null;
    }

    const imageStat = await stat(realImagePath);
    return !imageStat.isFile() || imageStat.size > MAX_CAPTURE_IMAGE_BYTES
      ? null
      : realImagePath;
  } catch {
    return null;
  }
}

export async function readCaptureImageDataUrl(
  imagePath: string,
): Promise<string> {
  const mimeType = getCaptureImageMimeType(imagePath);
  if (mimeType == null) {
    throw Error(`Unsupported capture image type for ${imagePath}`);
  }
  return `data:${mimeType};base64,${(await readFile(imagePath)).toString(
    "base64",
  )}`;
}

export function getCaptureImageMimeType(imagePath: string): string | null {
  switch (extname(imagePath).toLowerCase()) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    default:
      return null;
  }
}
