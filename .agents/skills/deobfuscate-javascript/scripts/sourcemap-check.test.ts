import { afterAll, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const SCRIPT = path.join(import.meta.dir, "sourcemap-check.ts");

const tmpDirs: string[] = [];
function makeDir(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sourcemap-check-"));
  tmpDirs.push(dir);
  return dir;
}
afterAll(() => {
  for (const dir of tmpDirs) fs.rmSync(dir, { recursive: true, force: true });
});

type Report = {
  input: string;
  hasComment: boolean;
  sourceMappingURL?: string;
  kind?: string;
  mapPath?: string;
  mapFound: boolean;
  parseError?: string;
  sourcesCount: number;
  sources?: string[];
  recommendation: string;
};

function run(inputPath: string): { code: number; stderr: string; report: Report } {
  const reportPath = path.join(path.dirname(inputPath), "report.json");
  const res = spawnSync("bun", [SCRIPT, inputPath, "--out", reportPath], {
    encoding: "utf-8",
  });
  const report = fs.existsSync(reportPath)
    ? (JSON.parse(fs.readFileSync(reportPath, "utf-8")) as Report)
    : (undefined as unknown as Report);
  return { code: res.status ?? 0, stderr: res.stderr ?? "", report };
}

function sampleMap(sources: string[]): string {
  return JSON.stringify({ version: 3, sources, names: [], mappings: "" });
}

describe("sourcemap-check", () => {
  test("inline base64 data-URL sourcemap → exit 0 and lists sources", () => {
    const dir = makeDir();
    const input = path.join(dir, "inline.js");
    const b64 = Buffer.from(sampleMap(["src/alpha.ts", "src/beta.ts"])).toString(
      "base64",
    );
    fs.writeFileSync(
      input,
      `console.log(1);\n//# sourceMappingURL=data:application/json;base64,${b64}\n`,
    );

    const { code, report } = run(input);
    expect(code).toBe(0);
    expect(report.kind).toBe("data-url");
    expect(report.mapFound).toBe(true);
    expect(report.sources).toEqual(["src/alpha.ts", "src/beta.ts"]);
    expect(report.recommendation).toContain("data-URL sourcemap");
  });

  test("adjacent .map file → exit 0 and recommends recovery", () => {
    const dir = makeDir();
    const input = path.join(dir, "bundle.js");
    fs.writeFileSync(input, "console.log(2);\n");
    fs.writeFileSync(input + ".map", sampleMap(["src/adjacent.ts"]));

    const { code, report } = run(input);
    expect(code).toBe(0);
    expect(report.hasComment).toBe(false);
    expect(report.mapFound).toBe(true);
    expect(report.mapPath).toBe(input + ".map");
    expect(report.sources).toEqual(["src/adjacent.ts"]);
    expect(report.recommendation).toContain("Adjacent");
  });

  test("sourceMappingURL pointing at a missing .map → exit 1, proceed", () => {
    const dir = makeDir();
    const input = path.join(dir, "dangling.js");
    fs.writeFileSync(
      input,
      "console.log(3);\n//# sourceMappingURL=dangling.js.map\n",
    );

    const { code, report } = run(input);
    expect(code).toBe(1);
    expect(report.mapFound).toBe(false);
    expect(report.kind).toBe("relative");
    expect(report.recommendation).toContain("does not exist");
  });

  test("no sourcemap at all → exit 1 and recommends the rename pipeline", () => {
    const dir = makeDir();
    const input = path.join(dir, "plain.js");
    fs.writeFileSync(input, "console.log(4);\n");

    const { code, report } = run(input);
    expect(code).toBe(1);
    expect(report.hasComment).toBe(false);
    expect(report.mapFound).toBe(false);
    expect(report.recommendation).toContain("extract/apply rename pipeline");
  });

  test("relative sourceMappingURL to a real .map → lists every original source", () => {
    const dir = makeDir();
    const input = path.join(dir, "app.js");
    fs.writeFileSync(input, "console.log(5);\n//# sourceMappingURL=app.js.map\n");
    const sources = [
      "src/index.ts",
      "src/util/format.ts",
      "src/util/parse.ts",
      "node_modules/vendor/lib.js",
    ];
    fs.writeFileSync(path.join(dir, "app.js.map"), sampleMap(sources));

    const { code, report } = run(input);
    expect(code).toBe(0);
    expect(report.kind).toBe("relative");
    expect(report.mapFound).toBe(true);
    expect(report.sourcesCount).toBe(4);
    expect(report.sources).toEqual(sources);
    expect(report.recommendation).toContain("Recover from sourcemap");
  });
});
