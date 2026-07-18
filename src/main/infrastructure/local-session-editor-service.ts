// Restored from ref/.vite/build/index.js

import path from "node:path";
import { runCommand } from "./local-session-command-runner";

export class LocalSessionEditorService {
  openVsCode(target: string) {
    return this.open("code", [path.resolve(target)]);
  }

  isVsCodeInstalled(): Promise<boolean> {
    return this.available("code");
  }

  async installedEditors() {
    const candidates = [
      ["code", "Visual Studio Code"],
      ["cursor", "Cursor"],
      ["zed", "Zed"],
    ] as const;
    const installed = [];
    for (const [id, name] of candidates) {
      if (await this.available(id)) installed.push({ id, name });
    }
    return installed;
  }

  openAt(editor: string, target: string, line?: number, column?: number) {
    const resolved = path.resolve(target);
    return this.open(
      editor,
      [
        line ? "--goto" : "",
        line ? `${resolved}:${line}:${column ?? 1}` : resolved,
      ].filter(Boolean),
    );
  }

  private async available(command: string): Promise<boolean> {
    if (!/^[A-Za-z0-9._-]+$/.test(command)) return false;
    const result = await runCommand(
      process.platform === "win32" ? "where" : "which",
      [command],
      { timeoutMs: 5_000 },
    ).catch(() => null);
    return result?.code === 0;
  }

  private async open(command: string, args: string[]) {
    if (!/^[A-Za-z0-9._-]+$/.test(command))
      throw new Error("Invalid editor command");
    const result = await runCommand(command, args, { timeoutMs: 10_000 });
    return { ok: result.code === 0, error: result.stderr.trim() || undefined };
  }
}
