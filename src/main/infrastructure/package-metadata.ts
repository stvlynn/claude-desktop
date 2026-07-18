// Restored from ref/.vite/build/file-based-logger-DZ6052-3.js
// Package.json metadata reader used by build-flavor resolution and logging setup.

import * as fs from "node:fs";
import * as path from "node:path";

export type PackageMetadataOptions<T> = {
  candidates?: string[];
  parse?: (value: string) => T | null;
};

function packageMetadataCandidates(): string[] {
  const cwd = process.cwd();
  const candidates: string[] = [];
  if (process.resourcesPath) {
    candidates.push(
      path.join(process.resourcesPath, "app.asar", "package.json"),
    );
  }
  candidates.push(path.join(cwd, "package.json"));
  candidates.push(path.join(cwd, "electron", "package.json"));
  return candidates;
}

export function readPackageMetadataField<T = string>(
  field: string,
  {
    candidates = packageMetadataCandidates(),
    parse,
  }: PackageMetadataOptions<T> = {},
): T | string | null {
  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    const packageJson = JSON.parse(
      fs.readFileSync(candidate, "utf8"),
    ) as Record<string, unknown>;
    const rawValue =
      typeof packageJson[field] === "string" ? packageJson[field].trim() : "";
    if (!rawValue) continue;
    const parsed = parse ? parse(rawValue) : rawValue;
    if (parsed != null) return parsed;
  }
  return null;
}
