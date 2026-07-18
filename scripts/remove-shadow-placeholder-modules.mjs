import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");
const placeholderPattern = /undefined as never|export declare const/;

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".deobfuscate-javascript") continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(file));
    else files.push(file);
  }
  return files;
}

const candidates = walk(srcRoot).filter(
  (file) =>
    file.endsWith(".ts") &&
    fs.existsSync(`${file}x`) &&
    placeholderPattern.test(fs.readFileSync(file, "utf8")),
);
const originals = new Map(
  candidates.map((file) => [file, fs.readFileSync(file, "utf8")]),
);

for (const file of candidates) fs.unlinkSync(file);

const retained = new Set();
let iteration = 0;
while (true) {
  iteration += 1;
  const typecheck = spawnSync("bun", ["run", "typecheck"], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
  });
  if (typecheck.status === 0) break;

  const output = `${typecheck.stdout ?? ""}\n${typecheck.stderr ?? ""}`;
  const newlyFailing = new Set();
  for (const match of output.matchAll(
    /^(src\/[^(\r\n]+\.tsx)\(\d+,\d+\): error /gm,
  )) {
    const shadowFile = path.join(root, match[1].slice(0, -1));
    if (originals.has(shadowFile) && !retained.has(shadowFile)) {
      newlyFailing.add(shadowFile);
    }
  }

  if (newlyFailing.size === 0) {
    for (const [file, source] of originals) fs.writeFileSync(file, source);
    process.stderr.write(output);
    throw new Error(
      "Deleting shadow placeholders caused errors not attributable to a shadowed .tsx module; restored all candidates",
    );
  }

  for (const file of newlyFailing) {
    fs.writeFileSync(file, originals.get(file));
    retained.add(file);
  }
  console.log(
    `Iteration ${iteration}: retained ${newlyFailing.size} placeholders whose .tsx modules fail typecheck`,
  );
}

console.log(
  `Removed ${candidates.length - retained.size} safe shadow placeholders.`,
);
console.log(
  `Retained ${retained.size} placeholders pending .tsx type repairs.`,
);
for (const file of [...retained].sort()) {
  console.log(path.relative(root, file));
}
