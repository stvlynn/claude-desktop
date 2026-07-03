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

function runCLI(input: string): {
  stdout: string;
  stderr: string;
  code: number;
} {
  const result = spawnSync("bun", [SCRIPT, input], { encoding: "utf-8" });
  return {
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    code: result.status ?? 0,
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
    expect(decisions[0]?.reason).toContain("prove Codex fork");
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
});
