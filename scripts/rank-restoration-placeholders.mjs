import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const srcRoot = path.join(root, "src");
const sourcePattern = /\.(?:ts|tsx|js|jsx)$/;
const placeholderPattern =
  /undefined as never|export declare const|^\s*export \{\s*\}\s*;?\s*$/m;
const importPattern = /(?:from\s+|import\s*\()?['"](\.[^'"]+)['"]/g;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

const sourceFiles = walk(srcRoot).filter((file) => sourcePattern.test(file));
const placeholderFiles = sourceFiles.filter((file) =>
  placeholderPattern.test(fs.readFileSync(file, "utf8")),
);
const inboundCounts = new Map(
  placeholderFiles.map((file) => [path.resolve(file), 0]),
);

for (const importer of sourceFiles) {
  const source = fs.readFileSync(importer, "utf8");
  for (const match of source.matchAll(importPattern)) {
    const base = path.resolve(path.dirname(importer), match[1]);
    const candidates = [
      `${base}.ts`,
      `${base}.tsx`,
      path.join(base, "index.ts"),
      path.join(base, "index.tsx"),
    ];
    for (const candidate of candidates) {
      if (inboundCounts.has(candidate)) {
        inboundCounts.set(candidate, inboundCounts.get(candidate) + 1);
        break;
      }
    }
  }
}

const limit = Number.parseInt(process.argv[2] ?? "100", 10);
for (const [file, count] of [...inboundCounts].sort(
  (left, right) => right[1] - left[1] || left[0].localeCompare(right[0]),
).slice(0, limit)) {
  console.log(`${String(count).padStart(4)} ${path.relative(root, file)}`);
}
