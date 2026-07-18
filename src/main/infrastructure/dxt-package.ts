// Restored from ref/.vite/build/index.js

import { readFile } from "node:fs/promises";
import path from "node:path";
import JSZip from "jszip";

const MAX_ARCHIVE_BYTES = 200 * 1024 * 1024;
const MAX_EXTRACTED_BYTES = 500 * 1024 * 1024;
const MAX_ARCHIVE_FILES = 10_000;

export interface DxtManifest extends Record<string, unknown> {
  name: string;
  display_name?: string;
  version: string;
  description: string;
  author: { name: string };
  dxt_version?: string;
  manifest_version?: string;
}

export interface DxtPackage {
  files: Map<string, Buffer>;
  manifest: DxtManifest;
}

export async function readDxtPackage(filePath: string): Promise<DxtPackage> {
  const archiveBytes = await readFile(filePath);
  if (archiveBytes.byteLength > MAX_ARCHIVE_BYTES) {
    throw new Error("Extension archive exceeds the 200 MB limit");
  }
  const archive = await JSZip.loadAsync(archiveBytes);
  const files = new Map<string, Buffer>();
  let extractedBytes = 0;
  for (const [name, entry] of Object.entries(archive.files)) {
    if (entry.dir) continue;
    const normalized = name.replaceAll("\\", "/");
    if (
      normalized.startsWith("/") ||
      normalized.split("/").includes("..") ||
      path.posix.normalize(normalized) !== normalized
    ) {
      throw new Error(`Unsafe extension archive path: ${name}`);
    }
    if (files.size >= MAX_ARCHIVE_FILES) {
      throw new Error("Extension archive contains too many files");
    }
    const content = await entry.async("nodebuffer");
    extractedBytes += content.byteLength;
    if (extractedBytes > MAX_EXTRACTED_BYTES) {
      throw new Error("Extension archive expands beyond the 500 MB limit");
    }
    files.set(normalized, content);
  }
  const manifestBytes = files.get("manifest.json");
  if (!manifestBytes)
    throw new Error("No manifest.json found in extension file");
  const manifest = parseDxtManifest(JSON.parse(manifestBytes.toString("utf8")));
  return { files, manifest };
}

export function parseDxtManifest(value: unknown): DxtManifest {
  if (!value || typeof value !== "object") throw new Error("Invalid manifest");
  const manifest = value as Record<string, unknown>;
  if (
    typeof manifest.name !== "string" ||
    typeof manifest.version !== "string" ||
    typeof manifest.description !== "string" ||
    (!manifest.dxt_version && !manifest.manifest_version) ||
    !manifest.author ||
    typeof manifest.author !== "object" ||
    typeof (manifest.author as Record<string, unknown>).name !== "string"
  ) {
    throw new Error("Extension manifest is missing required fields");
  }
  return manifest as DxtManifest;
}

export function extensionId(manifest: DxtManifest, prefix?: string): string {
  const normalize = (value: string): string =>
    value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_.]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  const author = normalize(manifest.author.name);
  const name = normalize(manifest.name);
  const base = `${author}.${name}`;
  return prefix ? `${prefix}.${base}` : base;
}
