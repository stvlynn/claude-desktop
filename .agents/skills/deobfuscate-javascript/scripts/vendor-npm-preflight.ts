import * as fs from "node:fs";
import { createRequire } from "node:module";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";
import {
  analyzePublicNpmVendorShimDependencies,
  analyzeSource,
  DEFAULT_OPTIONS,
  expectedPublicNpmVendorSpecifiers,
  type FileQualityReport,
  type QualityGateIssue,
} from "./quality-gate.ts";

const SOURCE_EXT_RE = /\.[cm]?[jt]sx?$/i;
const NPM_SHIM_ISSUE_PREFIX = "third-party-npm-shim-";

export type VendorNpmPreflightResult = {
  files: string[];
  reports: FileQualityReport[];
};

export type VendorNpmDecision = {
  file: string;
  decision: "npm-shim" | "needs-proof";
  specifiers: string[];
  sourceExists: boolean;
  reason: string;
};

type BareReexport = {
  file: string;
  specifier: string;
  importedName: string;
};

type RuntimeExportReadResult =
  | { ok: true; exportNames: Set<string> }
  | { ok: false; skipped: true; error: string };

const RUNTIME_EXPORT_READ_CACHE = new Map<
  string,
  Promise<RuntimeExportReadResult>
>();

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

function collectDecisionTargets(input: string): string[] {
  if (fs.existsSync(input)) return collectFiles(input);
  return SOURCE_EXT_RE.test(input) ? [input] : [];
}

function emptyNpmShimReport(
  file: string,
  issues: QualityGateIssue[],
): FileQualityReport {
  return {
    file,
    lineCount: 0,
    exportCount: 0,
    registryObjectExport: false,
    crypticParams: 0,
    crypticBindings: 0,
    shortIdentifierOffenders: [],
    mechanicalNames: [],
    mechanicalNameFamily: [],
    vendored: true,
    duplicateImportNames: [],
    mechanicalImportBindings: [],
    missingRelativeExports: [],
    unresolvedRelativeImports: [],
    unfinalizedCheckpointImports: [],
    invalidJsxTags: [],
    unboundJsxTags: [],
    unboundIdentifiers: [],
    untypedComponentProps: [],
    untypedPublicFunctionParams: [],
    misleadingHookExports: [],
    publicCrypticNames: [],
    hasProvenanceHeader: false,
    duplicateProvenanceHeaders: 0,
    residueMatches: [],
    splitRequired: false,
    issues,
  };
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

function isPublicVendorFile(file: string): boolean {
  return /(?:^|\/)vendor\/[^/]+\.[cm]?[jt]sx?$/i.test(file.replace(/\\/g, "/"));
}

function isBarePackageSpecifier(specifier: string): boolean {
  return (
    !specifier.startsWith(".") &&
    !specifier.startsWith("/") &&
    !/^[a-z][a-z0-9+.-]*:/i.test(specifier)
  );
}

function packageNameFromSpecifier(specifier: string): string {
  const parts = specifier.split("/");
  if (specifier.startsWith("@")) {
    return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : specifier;
  }
  return parts[0] ?? specifier;
}

function findNearestPackageJson(startPath: string): string | null {
  let dir = path.resolve(startPath);
  try {
    if (fs.existsSync(dir) && fs.statSync(dir).isFile()) {
      dir = path.dirname(dir);
    }
  } catch {
    dir = path.dirname(dir);
  }

  while (true) {
    const packageJsonPath = path.join(dir, "package.json");
    if (fs.existsSync(packageJsonPath)) return packageJsonPath;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

function readPackageDependencyNames(packageJsonPath: string): Set<string> {
  const packageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, "utf-8"),
  ) as Record<string, unknown> | null;
  const dependencies = new Set<string>();
  for (const field of [
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies",
  ]) {
    const values = packageJson?.[field];
    if (values == null || typeof values !== "object" || Array.isArray(values)) {
      continue;
    }
    for (const dependencyName of Object.keys(values)) {
      dependencies.add(dependencyName);
    }
  }
  return dependencies;
}

function collectBareRuntimeReexports(
  source: string,
  file: string,
): BareReexport[] {
  const reexports: BareReexport[] = [];
  const exportFromRe =
    /\bexport\s+(type\s+)?\{([\s\S]*?)\}\s+from\s+["']([^"']+)["']/g;

  let match: RegExpExecArray | null;
  while ((match = exportFromRe.exec(source)) !== null) {
    if (match[1] != null) continue;

    const specifier = match[3]!;
    if (!isBarePackageSpecifier(specifier)) continue;

    for (const rawSpecifier of match[2]!.split(",")) {
      const raw = rawSpecifier.trim().replace(/\s+/g, " ");
      if (!raw || raw.startsWith("type ")) continue;

      const specifierMatch = raw.match(
        /^(default|[A-Za-z_$][\w$]*)(?:\s+as\s+([A-Za-z_$][\w$]*|"[^"]+"|'[^']+'))?$/,
      );
      if (specifierMatch == null) continue;

      const importedName = specifierMatch[1]!;
      reexports.push({ file, specifier, importedName });
    }
  }

  return reexports;
}

function analyzeBareReexportDependencies(files: string[]): FileQualityReport[] {
  const reports: FileQualityReport[] = [];
  const dependenciesByPackageJson = new Map<string, Set<string>>();

  for (const file of files) {
    if (!isPublicVendorFile(file)) continue;

    const source = fs.readFileSync(file, "utf-8");
    const reexports = collectBareRuntimeReexports(source, file);
    if (reexports.length === 0) continue;

    const packageJsonPath = findNearestPackageJson(file);
    if (packageJsonPath == null) continue;

    let dependencyNames = dependenciesByPackageJson.get(packageJsonPath);
    if (dependencyNames == null) {
      dependencyNames = readPackageDependencyNames(packageJsonPath);
      dependenciesByPackageJson.set(packageJsonPath, dependencyNames);
    }

    const missingPackages = [
      ...new Set(
        reexports
          .map((reexport) => packageNameFromSpecifier(reexport.specifier))
          .filter((packageName) => !dependencyNames.has(packageName)),
      ),
    ];
    if (missingPackages.length === 0) continue;

    reports.push(
      emptyNpmShimReport(file, [
        {
          code: "third-party-npm-shim-dependency-missing",
          message:
            `Public vendor npm re-export shim must declare package dependency ` +
            `${missingPackages.map((pkg) => `'${pkg}'`).join(", ")} in ` +
            "the nearest package.json.",
          detail: {
            expectedSpecifiers: [
              ...new Set(reexports.map((reexport) => reexport.specifier)),
            ],
            missingPackages,
            packageJsonPath,
          },
        },
      ]),
    );
  }

  return reports;
}

function runtimeExportNames(moduleNamespace: unknown): Set<string> {
  const exportNames = new Set<string>(["default"]);
  if (
    (typeof moduleNamespace === "object" && moduleNamespace !== null) ||
    typeof moduleNamespace === "function"
  ) {
    for (const key of Object.keys(moduleNamespace)) {
      exportNames.add(key);
    }
  }
  return exportNames;
}

async function readRuntimeExportNames(
  specifier: string,
  packageJsonPath: string,
): Promise<RuntimeExportReadResult> {
  const cacheKey = `${packageJsonPath}\0${specifier}`;
  const cached = RUNTIME_EXPORT_READ_CACHE.get(cacheKey);
  if (cached != null) return cached;

  const pending = (async (): Promise<RuntimeExportReadResult> => {
    const requireFromProject = createRequire(packageJsonPath);

    let resolved: string;
    try {
      resolved = requireFromProject.resolve(specifier);
    } catch (err) {
      return { ok: false, skipped: true, error: (err as Error).message };
    }

    try {
      return {
        ok: true,
        exportNames: runtimeExportNames(requireFromProject(specifier)),
      };
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code !== "ERR_REQUIRE_ESM") {
        return { ok: false, skipped: true, error: (err as Error).message };
      }
    }

    try {
      const moduleNamespace = await import(pathToFileURL(resolved).href);
      return { ok: true, exportNames: runtimeExportNames(moduleNamespace) };
    } catch (err) {
      return { ok: false, skipped: true, error: (err as Error).message };
    }
  })();

  RUNTIME_EXPORT_READ_CACHE.set(cacheKey, pending);
  return pending;
}

async function analyzeBareReexportRuntimeExports(
  files: string[],
): Promise<FileQualityReport[]> {
  const reports: FileQualityReport[] = [];
  const dependenciesByPackageJson = new Map<string, Set<string>>();

  for (const file of files) {
    if (!isPublicVendorFile(file)) continue;

    const source = fs.readFileSync(file, "utf-8");
    const reexports = collectBareRuntimeReexports(source, file).filter(
      (reexport) => reexport.importedName !== "default",
    );
    if (reexports.length === 0) continue;

    const packageJsonPath = findNearestPackageJson(file);
    if (packageJsonPath == null) continue;
    let dependencyNames = dependenciesByPackageJson.get(packageJsonPath);
    if (dependencyNames == null) {
      dependencyNames = readPackageDependencyNames(packageJsonPath);
      dependenciesByPackageJson.set(packageJsonPath, dependencyNames);
    }

    const missingBySpecifier = new Map<string, string[]>();
    const availableBySpecifier = new Map<string, string[]>();
    const unavailableBySpecifier = new Map<string, string>();

    for (const reexport of reexports) {
      const packageName = packageNameFromSpecifier(reexport.specifier);
      if (!dependencyNames.has(packageName)) continue;

      const runtimeExports = await readRuntimeExportNames(
        reexport.specifier,
        packageJsonPath,
      );
      if (!runtimeExports.ok) {
        unavailableBySpecifier.set(reexport.specifier, runtimeExports.error);
        continue;
      }
      if (runtimeExports.exportNames.has(reexport.importedName)) continue;

      const missingExports = missingBySpecifier.get(reexport.specifier) ?? [];
      missingExports.push(reexport.importedName);
      missingBySpecifier.set(reexport.specifier, missingExports);
      availableBySpecifier.set(
        reexport.specifier,
        [...runtimeExports.exportNames].sort().slice(0, 50),
      );
    }

    const issues: QualityGateIssue[] = [];

    if (unavailableBySpecifier.size > 0) {
      issues.push({
        code: "third-party-npm-shim-runtime-unavailable",
        message:
          "Public vendor npm re-export shim declares its package, but the installed package runtime could not be resolved for export validation.",
        detail: {
          unavailableBySpecifier: Object.fromEntries(unavailableBySpecifier),
          packageJsonPath,
        },
      });
    }

    if (missingBySpecifier.size > 0) {
      issues.push({
        code: "third-party-npm-shim-export-missing",
        message:
          "Public vendor npm re-export shim references members that are not present in the installed package runtime.",
        detail: {
          missingBySpecifier: Object.fromEntries(missingBySpecifier),
          availableBySpecifier: Object.fromEntries(availableBySpecifier),
        },
      });
    }

    if (issues.length === 0) continue;

    reports.push(emptyNpmShimReport(file, issues));
  }

  return reports;
}

export async function vendorNpmPreflight(
  input: string,
): Promise<VendorNpmPreflightResult> {
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

  for (const report of analyzeBareReexportDependencies(files)) {
    const npmReport = withOnlyNpmShimIssues(report);
    if (npmReport != null) reports.push(npmReport);
  }

  for (const report of await analyzeBareReexportRuntimeExports(files)) {
    const npmReport = withOnlyNpmShimIssues(report);
    if (npmReport != null) reports.push(npmReport);
  }

  return { files, reports };
}

export function vendorNpmDecision(input: string): VendorNpmDecision[] {
  const files = collectDecisionTargets(input);
  return files
    .filter((file) => isPublicVendorFile(file))
    .map((file) => {
      const sourceExists = fs.existsSync(file);
      const source = sourceExists ? fs.readFileSync(file, "utf-8") : undefined;
      const specifiers = expectedPublicNpmVendorSpecifiers(file, source) ?? [];
      if (specifiers.length > 0) {
        return {
          file,
          decision: "npm-shim",
          specifiers,
          sourceExists,
          reason:
            "public vendor filename, provenance, API fingerprint, or declared dependency maps this target to a stock npm package",
        };
      }

      return {
        file,
        decision: "needs-proof",
        specifiers,
        sourceExists,
        reason:
          "no stock npm identity was recognized; prove Codex fork or app/runtime wrapper before writing a local vendor body",
      };
    });
}

const USAGE =
  "Usage: bun scripts/vendor-npm-preflight.ts <restored/vendor-file-or-dir> [--json] [--decision]";

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        json: { type: "boolean", default: false },
        decision: { type: "boolean", default: false },
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
  if (parsed.values.decision) {
    const decisions = vendorNpmDecision(input);
    if (parsed.values.json) {
      process.stdout.write(`${JSON.stringify(decisions, null, 2)}\n`);
    } else if (decisions.length === 0) {
      console.error("vendor-npm-preflight: DECISION no public vendor targets");
    } else {
      for (const decision of decisions) {
        const specifierSuffix =
          decision.specifiers.length > 0
            ? ` (${decision.specifiers.join(", ")})`
            : "";
        console.error(
          `vendor-npm-preflight: DECISION ${decision.file}: ${decision.decision}${specifierSuffix}`,
        );
        console.error(`  ${decision.reason}`);
      }
    }
    process.exit(0);
  }
  if (!fs.existsSync(input)) {
    console.error(`input not found: ${input}`);
    process.exit(1);
  }

  const result = await vendorNpmPreflight(input);
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
