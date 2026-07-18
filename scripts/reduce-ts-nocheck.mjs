import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const noCheckPattern = /^\s*\/\/\s*@ts-nocheck\s*\r?\n/m;
const reportOnly = process.argv.includes("--report");

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".deobfuscate-javascript") continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(file));
    else if (/\.(?:d\.)?[cm]?[jt]sx?$/.test(entry.name)) files.push(file);
  }
  return files;
}

const originals = new Map();
for (const file of walk(srcRoot)) {
  const source = fs.readFileSync(file, "utf8");
  if (!noCheckPattern.test(source)) continue;
  originals.set(file, source);
  fs.writeFileSync(file, source.replace(noCheckPattern, ""));
}

const protectedFiles = new Set();
let iteration = 0;
while (true) {
  iteration += 1;
  const result = spawnSync("bun", ["run", "typecheck"], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
  });
  if (result.status === 0) break;

  const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  if (reportOnly) {
    for (const [file, source] of originals) fs.writeFileSync(file, source);
    const errorCodes = new Map();
    for (const match of output.matchAll(/error (TS\d+):/g)) {
      errorCodes.set(match[1], (errorCodes.get(match[1]) ?? 0) + 1);
    }
    console.log(`Files tested without @ts-nocheck: ${originals.size}`);
    console.log(
      [...errorCodes.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 30)
        .map(([code, count]) => `${code}: ${count}`)
        .join("\n"),
    );
    console.log("\nFirst diagnostics:\n" + output.split("\n").slice(0, 160).join("\n"));
    process.exit(0);
  }
  const failingFiles = new Set();
  for (const match of output.matchAll(/^(src\/[^(\r\n]+)\(\d+,\d+\): error /gm)) {
    const absolute = path.join(root, match[1]);
    if (originals.has(absolute) && !protectedFiles.has(absolute)) {
      failingFiles.add(absolute);
    }
  }

  if (failingFiles.size === 0) {
    for (const [file, source] of originals) fs.writeFileSync(file, source);
    console.error(output);
    throw new Error("Typecheck failed without a newly removable @ts-nocheck source");
  }

  for (const file of failingFiles) {
    fs.writeFileSync(file, originals.get(file));
    protectedFiles.add(file);
  }
  console.log(
    `Iteration ${iteration}: retained @ts-nocheck in ${failingFiles.size} newly failing files`,
  );
}

console.log(`Removed @ts-nocheck from ${originals.size - protectedFiles.size} files.`);
console.log(`Retained @ts-nocheck in ${protectedFiles.size} files with type errors.`);
