// Restored from ref/.vite/build/index.pre.js

import { writeFileSync, writeSync } from "node:fs";
import path from "node:path";
import { inspect } from "node:util";
import { app, dialog } from "electron";

function formatStartupError(error: unknown): string {
  return error instanceof Error
    ? (error.stack ?? error.message)
    : String(error);
}

export function reportClaudeStartupFailure(error: unknown): void {
  const logsDirectory = app.getPath("logs");
  const failurePath = path.resolve(logsDirectory, "launch-failure.err");
  const formatted = formatStartupError(error);
  writeSync(
    2,
    `Claude Desktop failed to launch: ${formatted}\nDetails: ${failurePath}\n`,
  );
  console.error("ERROR");
  console.error(error);

  void (async () => {
    writeFileSync(
      failurePath,
      `${formatted}\n${JSON.stringify(error)}\n${
        typeof error === "object" && error && "message" in error
          ? String(error.message)
          : "Not an object"
      }\n${inspect(error)}`,
      { mode: 0o600 },
    );
    await app.whenReady();
    dialog.showMessageBoxSync({
      type: "error",
      message: "Claude Desktop failed to launch",
      detail:
        "Please check for updates and try again. If the issue persists, contact support at support.claude.com.",
    });
  })()
    .catch((reportingError) => {
      console.error("Failed to error handle:", reportingError);
    })
    .finally(() => {
      process.exit(1);
    });
}
