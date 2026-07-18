import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const promotionMap = JSON.parse(
  fs.readFileSync(path.join(root, "scripts", "promotion-map.json"), "utf8"),
);
const importMap = JSON.parse(
  fs.readFileSync(path.join(root, "restored", "IMPORT_MAP.json"), "utf8"),
);

function normalizeRestoredPath(file) {
  return file.replace(/^restored\//, "").replace(/\.(?:tsx?|jsx?)$/, "");
}

const chunksByRestoredPath = new Map();
for (const [chunk, metadata] of Object.entries(importMap.chunks ?? {})) {
  for (const candidate of [metadata.restored, metadata.boundary]) {
    if (typeof candidate !== "string") continue;
    const normalized = normalizeRestoredPath(candidate);
    const chunks = chunksByRestoredPath.get(normalized) ?? [];
    chunks.push(chunk);
    chunksByRestoredPath.set(normalized, chunks);
  }
}

const restoredPathsBySourcePath = new Map();
for (const [restoredPath, sourcePath] of Object.entries(promotionMap)) {
  const normalizedSource = sourcePath.replace(/^src\//, "");
  const restoredPaths = restoredPathsBySourcePath.get(normalizedSource) ?? [];
  restoredPaths.push(restoredPath);
  restoredPathsBySourcePath.set(normalizedSource, restoredPaths);
}

let updated = 0;
let ambiguous = 0;
let unmapped = 0;
for (const directoryEntry of fs.readdirSync(path.join(root, "src"), {
  recursive: true,
})) {
  if (typeof directoryEntry !== "string" || !/\.(?:tsx?|jsx?)$/.test(directoryEntry)) {
    continue;
  }
  const absolutePath = path.join(root, "src", directoryEntry);
  const source = fs.readFileSync(absolutePath, "utf8");
  if (/^\s*\/\/\s*Restored from\s+/m.test(source)) continue;

  const restoredPaths = restoredPathsBySourcePath.get(directoryEntry) ?? [];
  const chunks = [
    ...new Set(
      restoredPaths.flatMap(
        (restoredPath) =>
          chunksByRestoredPath.get(normalizeRestoredPath(restoredPath)) ?? [],
      ),
    ),
  ];
  if (chunks.length === 0) {
    unmapped += 1;
    continue;
  }
  if (chunks.length !== 1) {
    ambiguous += 1;
    continue;
  }

  fs.writeFileSync(
    absolutePath,
    `// Restored from ref/webview/assets/${chunks[0]}.js\n${source}`,
  );
  updated += 1;
}

console.log(`Added unique provenance headers: ${updated}`);
console.log(`Skipped ambiguous mappings: ${ambiguous}`);
console.log(`Skipped unmapped files: ${unmapped}`);
