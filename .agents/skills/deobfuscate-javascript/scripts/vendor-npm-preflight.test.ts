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

afterEach(() => {
  while (tmpRoots.length > 0) {
    fs.rmSync(tmpRoots.pop()!, { recursive: true, force: true });
  }
});

describe("vendor-npm-preflight CLI", () => {
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
    fs.mkdirSync(vendorDir, { recursive: true });
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({ dependencies: { "react-intl": "^10.0.0" } }),
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
});
