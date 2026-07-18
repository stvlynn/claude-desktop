#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const DEFAULT_APP_NAME = "Claude";
const DEFAULT_ASAR_PATH =
  "/Applications/Claude.app/Contents/Resources/app.asar";
const PRETTIER_IGNORE_PATH = "/dev/null";

function usage() {
  console.log(`Usage: node refresh-claude-ref.mjs [--dry-run] [--skip-format] [--app NAME] [--asar PATH] [--target DIR]

Refresh ./ref from an installed Electron app asar.

Environment:
  APP_NAME        App label used in logs.
  APP_ASAR        Override the source asar path.
  APP_REF_DIR     Override the target ref directory name.
  CLAUDE_APP_ASAR Override for Claude.app.
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.error) {
    fail(`${command} failed to start: ${result.error.message}`);
  }
  if (result.status !== 0) {
    fail(`${command} exited with status ${result.status}`);
  }
}

function runCapturing(command, args, allowedStatuses = [0]) {
  const result = spawnSync(command, args, { encoding: "utf8" });
  if (result.error) {
    fail(`${command} failed to start: ${result.error.message}`);
  }
  if (!allowedStatuses.includes(result.status)) {
    process.stdout.write(result.stdout || "");
    process.stderr.write(result.stderr || "");
    fail(`${command} exited with status ${result.status}`);
  }
  return result;
}

function readOptionValue(args, name) {
  const equalsPrefix = `${name}=`;
  const equalsValue = args.find((arg) => arg.startsWith(equalsPrefix));
  if (equalsValue) {
    return equalsValue.slice(equalsPrefix.length);
  }

  const index = args.indexOf(name);
  if (index === -1) {
    return undefined;
  }

  const value = args[index + 1];
  if (!value || value.startsWith("--")) {
    fail(`${name} requires a value`);
  }
  return value;
}

function assertSafeRefDir(refDir, cwd, targetName) {
  const root = path.parse(refDir).root;
  const home = path.resolve(homedir());

  if (refDir === root || refDir === home || refDir === cwd) {
    fail(`ref directory is unsafe to replace: ${refDir}`);
  }

  if (!/^[A-Za-z0-9._-]+$/.test(targetName) || targetName.startsWith(".")) {
    fail(`target directory name is unsafe: ${targetName}`);
  }

  const relative = path.relative(cwd, refDir);
  if (relative !== targetName) {
    fail(
      `target directory must resolve to ./${targetName} under the current working directory: ${refDir}`,
    );
  }
}

function walkFormatTargets(dir, targets = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") {
      continue;
    }

    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFormatTargets(entryPath, targets);
      continue;
    }

    if (
      entry.isFile() &&
      (entry.name.endsWith(".js") || entry.name.endsWith(".css"))
    ) {
      targets.push(entryPath);
    }
  }
  return targets;
}

function forEachFileBatch(files, callback) {
  const batch = [];
  let batchLength = 0;
  const maxBatchLength = 50_000;

  function flush() {
    if (batch.length === 0) {
      return;
    }
    callback(batch);
    batch.length = 0;
    batchLength = 0;
  }

  for (const file of files) {
    batch.push(file);
    batchLength += file.length + 1;
    if (batchLength >= maxBatchLength) {
      flush();
    }
  }

  flush();
}

function formatWithPrettier(files) {
  forEachFileBatch(files, (batch) => {
    run("npx", [
      "-y",
      "prettier",
      "--write",
      "--ignore-path",
      PRETTIER_IGNORE_PATH,
      ...batch,
    ]);
  });
}

function listDifferentWithPrettier(files) {
  const different = new Set();

  forEachFileBatch(files, (batch) => {
    const result = runCapturing(
      "npx",
      [
        "-y",
        "prettier",
        "--list-different",
        "--ignore-path",
        PRETTIER_IGNORE_PATH,
        ...batch,
      ],
      [0, 1],
    );

    for (const line of (result.stdout || "").split(/\r?\n/)) {
      const file = line.trim();
      if (file) {
        different.add(file);
      }
    }

    if (result.stderr) {
      process.stderr.write(result.stderr);
    }
  });

  return [...different];
}

function verifyWithPrettier(files) {
  const maxVerificationPasses = 3;

  if (files.length === 0) {
    console.log("Prettier verification complete.");
    return;
  }

  for (let pass = 1; pass <= maxVerificationPasses; pass++) {
    const different = listDifferentWithPrettier(files);

    if (different.length === 0) {
      console.log("Prettier verification complete.");
      return;
    }

    if (pass === maxVerificationPasses) {
      fail(
        `Prettier verification failed: ${different.length} file(s) still need formatting.`,
      );
    }

    console.log(
      `Prettier verification found ${different.length} file(s) needing another pass; reformatting...`,
    );
    formatWithPrettier(different);
  }
}

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const skipFormat = args.includes("--skip-format");
const appName =
  readOptionValue(args, "--app") || process.env.APP_NAME || DEFAULT_APP_NAME;
const targetName =
  readOptionValue(args, "--target") || process.env.APP_REF_DIR || "ref";
const asarArg = readOptionValue(args, "--asar");

if (args.includes("--help") || args.includes("-h")) {
  usage();
  process.exit(0);
}

const unknownArgs = args.filter(
  (arg, index) =>
    !["--dry-run", "--skip-format"].includes(arg) &&
    !["--app", "--asar", "--target"].includes(arg) &&
    !arg.startsWith("--app=") &&
    !arg.startsWith("--asar=") &&
    !arg.startsWith("--target=") &&
    !["--app", "--asar", "--target"].includes(args[index - 1]),
);
if (unknownArgs.length > 0) {
  fail(`unknown argument(s): ${unknownArgs.join(", ")}`);
}

const cwd = path.resolve(process.cwd());
const refDir = path.join(cwd, targetName);
const asarPath = path.resolve(
  asarArg ||
    process.env.APP_ASAR ||
    process.env.CLAUDE_APP_ASAR ||
    DEFAULT_ASAR_PATH,
);

assertSafeRefDir(refDir, cwd, targetName);

console.log(`Workspace: ${cwd}`);
console.log(`App: ${appName}`);
console.log(`Source asar: ${asarPath}`);
console.log(`Target: ${refDir}`);

if (dryRun) {
  console.log("Dry run only; no files changed.");
  process.exit(0);
}

if (!existsSync(asarPath) || !statSync(asarPath).isFile()) {
  fail(`asar file not found: ${asarPath}`);
}

console.log(`Removing existing ./${targetName}...`);
rmSync(refDir, { recursive: true, force: true });
mkdirSync(refDir, { recursive: true });

console.log(`Extracting ${appName} app asar...`);
run("npx", ["-y", "@electron/asar", "extract", asarPath, refDir]);

if (skipFormat) {
  console.log("Skipping Prettier formatting.");
  process.exit(0);
}

const files = walkFormatTargets(refDir);
const jsFiles = files.filter((file) => file.endsWith(".js"));
console.log(
  `Formatting ${files.length} JS/CSS file(s) with Prettier, ignoring git/prettier ignore files...`,
);

if (files.length > 0) {
  formatWithPrettier(files);
  verifyWithPrettier(jsFiles);
}

console.log(`${appName} app ref refresh complete.`);
