// Restored from ref/.vite/build/src-CoIhwwHr.js
// Desktop sqlite state database opener.
//
// NOTE: this module dynamically requires `better-sqlite3` at runtime. The
// dependency is not yet listed in package.json; it must be added before the
// database path is exercised in a real Electron build.

import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import * as path from "node:path";
import { resolveCodexHome } from "./wsl-runtime";

const requireFromFacade = createRequire(import.meta.url);
let stateDatabase: unknown = null;

export function openDesktopStateDatabase(options?: {
  databaseFileName?: string;
}): unknown {
  if (!process.versions.electron) return null;
  if (stateDatabase != null) return stateDatabase;
  const Database = requireFromFacade("better-sqlite3");
  const databaseFileName =
    options?.databaseFileName ??
    (process.env.BUILD_FLAVOR === "prod" ||
    (!process.env.BUILD_FLAVOR && process.env.NODE_ENV === "production")
      ? "codex.db"
      : "codex-dev.db");
  const databasePath = path.join(
    resolveCodexHome(),
    "sqlite",
    databaseFileName,
  );
  mkdirSync(path.dirname(databasePath), { recursive: true });
  stateDatabase = new Database(databasePath);
  return stateDatabase;
}
