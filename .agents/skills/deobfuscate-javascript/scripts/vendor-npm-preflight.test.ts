import { afterEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const SCRIPT = path.join(import.meta.dir, "vendor-npm-preflight.ts");
const tmpRoots: string[] = [];

function makeTmpRoot(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vendor-npm-preflight-"));
  tmpRoots.push(dir);
  return dir;
}

function runCLI(
  input: string,
  options: { env?: NodeJS.ProcessEnv } = {},
): {
  stdout: string;
  stderr: string;
  code: number;
  elapsedMs: number;
} {
  const startedAt = Date.now();
  const result = spawnSync("bun", [SCRIPT, input], {
    encoding: "utf-8",
    env: options.env == null ? process.env : { ...process.env, ...options.env },
  });
  return {
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    code: result.status ?? 0,
    elapsedMs: Date.now() - startedAt,
  };
}

function runDecisionCLI(
  input: string,
  options: { intent?: "local-body" | "npm-shim" } = {},
): {
  stdout: string;
  stderr: string;
  code: number;
} {
  const args = [SCRIPT, input, "--decision", "--json"];
  if (options.intent != null) {
    args.push("--intent", options.intent);
  }
  const result = spawnSync("bun", args, {
    encoding: "utf-8",
  });
  return {
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    code: result.status ?? 0,
  };
}

afterEach(() => {
  while (tmpRoots.length > 0) {
    fs.rmSync(tmpRoots.pop()!, { recursive: true, force: true });
  }
});

describe("vendor-npm-preflight CLI", () => {
  test("classifies known package vendor targets before the file exists", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );

    const result = runDecisionCLI(path.join(vendorDir, "react-intl.tsx"));
    expect(result.code).toBe(0);
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
      sourceExists: boolean;
    }>;
    expect(decisions).toHaveLength(1);
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
      specifiers: ["react-intl"],
      sourceExists: false,
    });
    expect(result.stderr).toContain("DECISION is informational only");
    expect(result.stderr).toContain("--intent local-body");
    expect(result.stderr).toContain("--intent npm-shim");
  });

  test("classifies high-confidence vendor filenames even when package dependencies are missing", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));

    const result = runDecisionCLI(path.join(vendorDir, "react-intl.tsx"), {
      intent: "local-body",
    });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("INTENT FAIL");
    expect(result.stderr).toContain("local vendor body blocked");
    expect(result.stderr).toContain("react-intl");
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
      sourceExists: boolean;
    }>;
    expect(decisions).toHaveLength(1);
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
      specifiers: ["react-intl"],
      sourceExists: false,
    });
  });

  test("blocks local-body intent for known package vendor targets before the file exists", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );

    const result = runDecisionCLI(path.join(vendorDir, "react-intl.tsx"), {
      intent: "local-body",
    });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("INTENT FAIL");
    expect(result.stderr).toContain("local vendor body blocked");
    expect(result.stderr).toContain("react-intl");
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
    }>;
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
      specifiers: ["react-intl"],
    });
  });

  test("classifies renamed React Intl API shims as npm package targets", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "i18n-formatting.tsx"),
      `
        export function useIntl() {
          return { formatMessage: (descriptor) => descriptor.defaultMessage ?? "" };
        }
        export function FormattedMessage(props) {
          return props.defaultMessage ?? props.id ?? "";
        }
      `,
    );

    const result = runDecisionCLI(path.join(vendorDir, "i18n-formatting.tsx"));
    expect(result.code).toBe(0);
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
      sourceExists: boolean;
    }>;
    expect(decisions).toHaveLength(1);
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
      specifiers: ["react-intl"],
      sourceExists: true,
    });
  });

  test("requires fork or runtime proof for unknown public vendor targets", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));

    const result = runDecisionCLI(path.join(vendorDir, "host-runtime.ts"));
    expect(result.code).toBe(0);
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
      reason: string;
    }>;
    expect(decisions).toHaveLength(1);
    expect(decisions[0]?.decision).toBe("needs-proof");
    expect(decisions[0]?.specifiers).toEqual([]);
    expect(decisions[0]?.reason).toContain("prove a Claude application fork");
  });

  test("blocks local-body intent for unknown public vendor targets", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));

    const result = runDecisionCLI(path.join(vendorDir, "host-runtime.ts"), {
      intent: "local-body",
    });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("INTENT FAIL");
    expect(result.stderr).toContain("local vendor body blocked until");
    expect(result.stderr).toContain(
      "Claude application-fork or app/runtime-wrapper proof",
    );
  });

  test("allows local-body intent for public app runtime wrappers with sibling proof", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    const runtimeDir = path.join(vendorDir, "app-main-legacy-buw-runtime");
    fs.mkdirSync(runtimeDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));
    fs.writeFileSync(
      path.join(runtimeDir, "index.ts"),
      `
        // Restored from ref/webview/assets/app-main.js
        export const runtimeAlias = 1;
      `,
    );
    const wrapper = path.join(
      vendorDir,
      "app-main-legacy-buw-compat-bundle.ts",
    );
    fs.writeFileSync(
      wrapper,
      `
        // Restored from ref/webview/assets/app-main.js
        // Flat boundary compatibility bundle backed by the semantic runtime.
        export { runtimeAlias as A } from "./app-main-legacy-buw-runtime";
      `,
    );

    const result = runDecisionCLI(wrapper, { intent: "local-body" });
    expect(result.code).toBe(0);
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
      reason: string;
    }>;
    expect(decisions).toHaveLength(1);
    expect(decisions[0]?.decision).toBe("local-body");
    expect(decisions[0]?.specifiers).toEqual([]);
    expect(decisions[0]?.reason).toContain("app/runtime wrapper proof");
    expect(result.stderr).toBe("");
  });

  test("blocks npm-shim intent for unknown public vendor targets until registered", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));

    const result = runDecisionCLI(path.join(vendorDir, "host-runtime.ts"), {
      intent: "npm-shim",
    });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("INTENT FAIL");
    expect(result.stderr).toContain("registered package identity");
  });

  test("blocks npm-shim intent for known package targets until the dependency is declared", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));

    const result = runDecisionCLI(path.join(vendorDir, "react-intl.tsx"), {
      intent: "npm-shim",
    });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("INTENT FAIL");
    expect(result.stderr).toContain("requires adding react-intl");
    expect(result.stderr).toContain("package.json");
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
    }>;
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
      specifiers: ["react-intl"],
    });
  });

  test("classifies pull request lodash helper loaders as registered npm shims", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { lodash: "^4.17.21" } }),
    );

    const result = runDecisionCLI(
      path.join(vendorDir, "lodash-pull-request-helpers.ts"),
      { intent: "npm-shim" },
    );
    expect(result.code).toBe(0);
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
    }>;
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
    });
    expect(decisions[0]?.specifiers).toContain("lodash/_baseEach");
    expect(decisions[0]?.specifiers).toContain("lodash/orderBy");
  });

  test("classifies React Redux provider runtime as a registered npm shim", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-redux": "^9.3.0" } }),
    );

    const result = runDecisionCLI(
      path.join(vendorDir, "react-redux-provider-runtime.tsx"),
      { intent: "local-body" },
    );
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("local vendor body blocked");
    expect(result.stderr).toContain("react-redux");
    const decisions = JSON.parse(result.stdout) as Array<{
      decision: string;
      specifiers: string[];
    }>;
    expect(decisions[0]).toMatchObject({
      decision: "npm-shim",
      specifiers: ["react-redux"],
    });
  });

  test("passes npm-backed pull request lodash helper loader shims", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { lodash: "^4.17.21" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "lodash-pull-request-helpers.ts"),
      `
        // Restored from ref/webview/assets/app-main.js
        import baseEach from "lodash/_baseEach";
        import baseFlatten from "lodash/_baseFlatten";
        import baseFor from "lodash/_baseFor";
        import baseOrderBy from "lodash/_baseOrderBy";
        import baseRest from "lodash/_baseRest";
        import defineProperty from "lodash/_defineProperty";
        import isIterateeCall from "lodash/_isIterateeCall";
        import overRest from "lodash/_overRest";
        import setToString from "lodash/_setToString";
        import orderBy from "lodash/orderBy";

        type Helper = (...args: any[]) => any;
        function createLodashHelperLoader<THelper extends Helper>(
          helper: THelper,
        ): () => THelper {
          return () => helper;
        }

        export const loadLodashBaseEach = createLodashHelperLoader(baseEach);
        export const loadLodashBaseFlatten = createLodashHelperLoader(baseFlatten);
        export const loadLodashBaseFor = createLodashHelperLoader(baseFor);
        export const loadLodashBaseOrderBy = createLodashHelperLoader(baseOrderBy);
        export const loadLodashBaseRest = createLodashHelperLoader(baseRest);
        export const loadLodashDefineProperty = createLodashHelperLoader(defineProperty);
        export const loadLodashIsIterateeCall = createLodashHelperLoader(isIterateeCall);
        export const loadLodashOrderBy = createLodashHelperLoader(orderBy);
        export const loadLodashOverRest = createLodashHelperLoader(overRest);
        export const loadLodashSetToString = createLodashHelperLoader(setToString);
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(0);
    expect(result.stderr).toContain("vendor-npm-preflight: PASS");
  });

  test("fails hand-written pull request lodash helper bodies", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { lodash: "^4.17.21" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "lodash-pull-request-helpers.ts"),
      `
        // Restored from ref/webview/assets/app-main.js
        export function loadLodashBaseEach() {
          return function baseEach(collection, iteratee) {
            for (const key of Object.keys(collection)) iteratee(collection[key], key);
            return collection;
          };
        }
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
    expect(result.stderr).toContain("lodash-pull-request-helpers.ts");
  });

  test("fails pull request lodash helper shims when lodash is undeclared", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));
    fs.writeFileSync(
      path.join(vendorDir, "lodash-pull-request-helpers.ts"),
      `
        // Restored from ref/webview/assets/app-main.js
        import baseEach from "lodash/_baseEach";
        import baseFlatten from "lodash/_baseFlatten";
        import baseFor from "lodash/_baseFor";
        import baseOrderBy from "lodash/_baseOrderBy";
        import baseRest from "lodash/_baseRest";
        import defineProperty from "lodash/_defineProperty";
        import isIterateeCall from "lodash/_isIterateeCall";
        import overRest from "lodash/_overRest";
        import setToString from "lodash/_setToString";
        import orderBy from "lodash/orderBy";

        type Helper = (...args: any[]) => any;
        function createLodashHelperLoader<THelper extends Helper>(
          helper: THelper,
        ): () => THelper {
          return () => helper;
        }

        export const loadLodashBaseEach = createLodashHelperLoader(baseEach);
        export const loadLodashBaseFlatten = createLodashHelperLoader(baseFlatten);
        export const loadLodashBaseFor = createLodashHelperLoader(baseFor);
        export const loadLodashBaseOrderBy = createLodashHelperLoader(baseOrderBy);
        export const loadLodashBaseRest = createLodashHelperLoader(baseRest);
        export const loadLodashDefineProperty = createLodashHelperLoader(defineProperty);
        export const loadLodashIsIterateeCall = createLodashHelperLoader(isIterateeCall);
        export const loadLodashOrderBy = createLodashHelperLoader(orderBy);
        export const loadLodashOverRest = createLodashHelperLoader(overRest);
        export const loadLodashSetToString = createLodashHelperLoader(setToString);
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-dependency-missing");
    expect(result.stderr).toContain("lodash");
  });

  test("fails hand-written react-intl compatibility shims", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "react-intl.tsx"),
      `
        // Restored from ref/webview/assets/lib-BWT6A3Q0.js
        export function useIntl() {
          return { formatMessage: (descriptor) => descriptor.defaultMessage ?? "" };
        }
        export function FormattedMessage(props) {
          return props.defaultMessage ?? props.id ?? "";
        }
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
  });

  test("fails hand-written react-intl bodies even when the dependency is missing", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));
    fs.writeFileSync(
      path.join(vendorDir, "react-intl.tsx"),
      `
        // Restored from ref/webview/assets/lib-BWT6A3Q0.js
        export function useIntl() {
          return { formatMessage: (descriptor) => descriptor.defaultMessage ?? "" };
        }
        export function FormattedMessage(props) {
          return props.defaultMessage ?? props.id ?? "";
        }
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
    expect(result.stderr).toContain("third-party-npm-shim-dependency-missing");
    expect(result.stderr).toContain("react-intl");
  });

  test("fails renamed react-intl API bodies when the dependency is missing", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));
    fs.writeFileSync(
      path.join(vendorDir, "i18n-formatting.tsx"),
      `
        export function useIntl() {
          return { formatMessage: (descriptor) => descriptor.defaultMessage ?? "" };
        }
        export function FormattedMessage(props) {
          return props.defaultMessage ?? props.id ?? "";
        }
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("i18n-formatting.tsx");
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
    expect(result.stderr).toContain("third-party-npm-shim-dependency-missing");
    expect(result.stderr).toContain("react-intl");
  });

  test("directory preflight catches existing hand-written react-intl bodies before nested vendor edits", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(path.join(vendorDir, "app-runtime", "stable-exports"), {
      recursive: true,
    });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "react-intl.tsx"),
      `
        // Restored from ref/webview/assets/lib-BWT6A3Q0.js
        export function useIntl() {
          return { formatMessage: (descriptor) => descriptor.defaultMessage ?? "" };
        }
        export function FormattedMessage(props) {
          return props.defaultMessage ?? props.id ?? "";
        }
      `,
    );
    fs.writeFileSync(
      path.join(vendorDir, "app-runtime", "stable-exports", "lower-a-f.ts"),
      `
        // Restored from ref/webview/assets/app-main.js
        export const runtimeAlias = 1;
      `,
    );

    const result = runCLI(vendorDir);
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("react-intl.tsx");
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
  });

  test("blocks nested local-body decisions until full vendor audit passes", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    const nestedBarrel = path.join(
      vendorDir,
      "app-runtime",
      "stable-exports",
      "lower-a-f.ts",
    );
    fs.mkdirSync(path.dirname(nestedBarrel), { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "react-intl.tsx"),
      `
        // Restored from ref/webview/assets/lib-BWT6A3Q0.js
        export function useIntl() {
          return { formatMessage: (descriptor) => descriptor.defaultMessage ?? "" };
        }
        export function FormattedMessage(props) {
          return props.defaultMessage ?? props.id ?? "";
        }
      `,
    );
    fs.writeFileSync(
      nestedBarrel,
      `
        // Restored from ref/webview/assets/app-main.js
        export const runtimeAlias = 1;
      `,
    );

    const result = runDecisionCLI(nestedBarrel, { intent: "local-body" });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("INTENT FAIL");
    expect(result.stderr).toContain("full vendor audit passes");
    expect(result.stderr).toContain("react-intl.tsx");
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
  });

  test("allows nested local-body decisions after full vendor audit passes", () => {
    const root = makeTmpRoot();
    const nestedBarrel = path.join(
      root,
      "restored",
      "vendor",
      "app-runtime",
      "stable-exports",
      "lower-a-f.ts",
    );
    fs.mkdirSync(path.dirname(nestedBarrel), { recursive: true });
    fs.writeFileSync(path.join(root, "package.json"), JSON.stringify({}));
    fs.writeFileSync(
      nestedBarrel,
      `
        // Restored from ref/webview/assets/app-main.js
        export const runtimeAlias = 1;
      `,
    );

    const result = runDecisionCLI(nestedBarrel, { intent: "local-body" });
    expect(result.code).toBe(0);
    expect(JSON.parse(result.stdout)).toEqual([]);
    expect(result.stderr).toBe("");
  });

  test("does not skip npm API fingerprints in oversized bundle-named files", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "app-main-current-test-bundle.ts"),
      [
        "// Restored from ref/webview/assets/app-main-current-test.js",
        "export function useIntl() {",
        "  return { formatMessage: (descriptor) => descriptor.defaultMessage ?? '' };",
        "}",
        "export function FormattedMessage(props) {",
        "  return props.defaultMessage ?? props.id ?? '';",
        "}",
        ...Array.from(
          { length: 4100 },
          (_, index) => `// oversized aggregator filler ${index}`,
        ),
      ].join("\n"),
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("app-main-current-test-bundle.ts");
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
  });

  test("fails hand-written vendor shims whose filename matches a declared dependency", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "@acme/widget": "^1.0.0" } }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "acme-widget.ts"),
      `
        // Restored from ref/webview/assets/widget-ABC123.js
        export function createWidget(options) {
          return { options };
        }
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-not-reexport");
    expect(result.stderr).toContain("@acme/widget");
  });

  test("fails npm re-export shims when package dependencies are missing", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: {} }),
    );
    fs.writeFileSync(
      path.join(vendorDir, "react-intl.tsx"),
      `
        // Restored from ref/webview/assets/lib-BWT6A3Q0.js
        export { FormattedMessage, useIntl } from "react-intl";
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-dependency-missing");
  });

  test("passes thin npm re-export shims with declared dependencies", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    const packageDir = path.join(root, "node_modules", "react-intl");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.mkdirSync(packageDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
    );
    fs.writeFileSync(
      path.join(packageDir, "package.json"),
      JSON.stringify({
        name: "react-intl",
        version: "10.0.0",
        main: "index.cjs",
      }),
    );
    fs.writeFileSync(
      path.join(packageDir, "index.cjs"),
      [
        "exports.FormattedMessage = function FormattedMessage() {};",
        "exports.IntlProvider = function IntlProvider() {};",
        "exports.useIntl = function useIntl() {};",
      ].join("\n"),
    );
    fs.writeFileSync(
      path.join(vendorDir, "react-intl.tsx"),
      `
        // Restored from ref/webview/assets/lib-BWT6A3Q0.js
        export { FormattedMessage, IntlProvider, useIntl } from "react-intl";
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(0);
    expect(result.stderr).toContain("vendor-npm-preflight: PASS");
  });

  test("fails npm re-export shims that reference missing package exports", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    const packageDir = path.join(root, "node_modules", "acme-shim");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.mkdirSync(packageDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "acme-shim": "1.0.0" } }),
    );
    fs.writeFileSync(
      path.join(packageDir, "package.json"),
      JSON.stringify({
        name: "acme-shim",
        version: "1.0.0",
        main: "index.cjs",
      }),
    );
    fs.writeFileSync(
      path.join(packageDir, "index.cjs"),
      "exports.realThing = 1;",
    );
    fs.writeFileSync(
      path.join(vendorDir, "acme-shim.ts"),
      `
        // Restored from ref/webview/assets/acme-shim-AbCdEf12.js
        export { missingThing } from "acme-shim";
      `,
    );

    const result = runCLI(path.join(root, "restored"));
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-export-missing");
  });

  test("fails instead of hanging when ESM runtime export validation times out", () => {
    const root = makeTmpRoot();
    const vendorDir = path.join(root, "restored", "vendor");
    const packageDir = path.join(root, "node_modules", "hanging-esm");
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.mkdirSync(packageDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "hanging-esm": "1.0.0" } }),
    );
    fs.writeFileSync(
      path.join(packageDir, "package.json"),
      JSON.stringify({
        name: "hanging-esm",
        version: "1.0.0",
        type: "module",
        exports: "./index.mjs",
      }),
    );
    fs.writeFileSync(
      path.join(packageDir, "index.mjs"),
      "await new Promise(() => {});\nexport const realThing = 1;\n",
    );
    fs.writeFileSync(
      path.join(vendorDir, "hanging-esm.ts"),
      `
        // Restored from ref/webview/assets/hanging-esm-AbCdEf12.js
        export { realThing } from "hanging-esm";
      `,
    );

    const result = runCLI(path.join(root, "restored"), {
      env: { VENDOR_NPM_PREFLIGHT_RUNTIME_TIMEOUT_MS: "50" },
    });
    expect(result.code).toBe(1);
    expect(result.stderr).toContain("third-party-npm-shim-runtime-unavailable");
    expect(result.elapsedMs).toBeLessThan(5_000);
  });
});
