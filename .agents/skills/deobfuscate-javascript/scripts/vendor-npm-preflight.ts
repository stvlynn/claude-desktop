import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import {
  analyzePublicNpmVendorShimDependencies,
  analyzeSource,
  DEFAULT_OPTIONS,
  type FileQualityReport,
  type QualityGateIssue,
} from "./quality-gate.ts";

const SOURCE_EXT_RE = /\.[cm]?[jt]sx?$/i;
const NPM_SHIM_ISSUE_PREFIX = "third-party-npm-shim-";

export type VendorNpmPreflightResult = {
  files: string[];
  reports: FileQualityReport[];
};

function collectFiles(input: string): string[] {
  const stat = fs.statSync(input);
  if (stat.isFile()) return SOURCE_EXT_RE.test(input) ? [input] : [];

  const out: string[] = [];
  const walk = (dir: string): void => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (
        entry.name === ".deobfuscate-javascript" ||
        entry.name === "node_modules"
      ) {
        continue;
      }
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (SOURCE_EXT_RE.test(entry.name)) {
        out.push(full);
      }
    }
  };
  walk(input);
  return out.sort();
}

function npmShimIssues(issues: QualityGateIssue[]): QualityGateIssue[] {
  return issues.filter((issue) => issue.code.startsWith(NPM_SHIM_ISSUE_PREFIX));
}

function withOnlyNpmShimIssues(
  report: FileQualityReport,
): FileQualityReport | null {
  const issues = npmShimIssues(report.issues);
  if (issues.length === 0) return null;
  return { ...report, issues };
}

export function vendorNpmPreflight(input: string): VendorNpmPreflightResult {
  const files = collectFiles(input);
  const reports: FileQualityReport[] = [];

  for (const file of files) {
    const report = analyzeSource(fs.readFileSync(file, "utf-8"), file, {
      ...DEFAULT_OPTIONS,
      allowFlat: true,
      allowUntyped: true,
      requireProvenanceHeader: false,
      vendored: true,
    });
    const npmReport = withOnlyNpmShimIssues(report);
    if (npmReport != null) reports.push(npmReport);
  }

  for (const report of analyzePublicNpmVendorShimDependencies(input, files)) {
    const npmReport = withOnlyNpmShimIssues(report);
    if (npmReport != null) reports.push(npmReport);
  }

  return { files, reports };
}

const USAGE =
  "Usage: bun scripts/vendor-npm-preflight.ts <restored/vendor-file-or-dir> [--json]";

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        json: { type: "boolean", default: false },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }

  const input = parsed.positionals[0];
  if (!input) {
    console.error(USAGE);
    process.exit(64);
  }
  if (!fs.existsSync(input)) {
    console.error(`input not found: ${input}`);
    process.exit(1);
  }

  const result = vendorNpmPreflight(input);
  if (parsed.values.json) {
    process.stdout.write(`${JSON.stringify(result.reports, null, 2)}\n`);
  } else if (result.reports.length === 0) {
    console.error(
      `vendor-npm-preflight: PASS (${result.files.length} source file${result.files.length === 1 ? "" : "s"})`,
    );
  } else {
    for (const report of result.reports) {
      console.error(`vendor-npm-preflight: FAIL ${report.file}`);
      for (const issue of report.issues) {
        console.error(`  [${issue.code}] ${issue.message}`);
      }
    }
  }

  process.exit(result.reports.length === 0 ? 0 : 1);
}

if (import.meta.main) {
  await main();
}
