# Vendor/npm protocol — preflight, intent gates, shims

← Back to [SKILL.md](../SKILL.md). **Read this file in full before creating or
editing anything under `restored/vendor/*`** (including nested `compat-*`,
`stable-exports/*`, or runtime barrels). Related: boundary classification and
terminal-node kinds in [boundaries.md](boundaries.md).

## Hard stop — the directory audit

Before touching anything under `restored/vendor/`, run the full directory
audit:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts restored/vendor
```

If it reports a public stock-package body such as `vendor/react-intl.tsx`, fix
that file first as an npm-backed shim and add the missing dependency to the
nearest `package.json`. Do not continue local compat/body restoration while a
known package shim is hand-written. A target-specific
`--decision --intent local-body` that prints "no public vendor targets" only
means the current nested barrel is not itself public package identity; it does
not waive the directory audit or allow package APIs to be recreated locally.
If the only reason for a local body is "the dependency is not in
`package.json`", that is a package-management miss, not restoration evidence:
add the dependency and keep the public vendor file as a thin npm shim.

Package installation is part of vendor restoration. Do not implement a
"temporary" local subset while a public package identity is being checked, and
do not treat "the bundle only used a few exports" as a reason to recreate those
exports. For any public `restored/vendor/<package>.ts[x]` target, the first
working note must answer the npm-shim question: expected package name, evidence
from filename/provenance/API/consumers, nearest `package.json` status, and the
intent gate command to run. If the package is missing, add it first; only start a
local body after every npm identity check is negative and
`--decision --intent local-body` passes.

Package identity follows the API, not just the filename. Renaming
`vendor/react-intl.tsx` to a semantic-looking file such as
`vendor/i18n-formatting.tsx`, or moving the same exports through a compatibility
barrel, is still an npm-shim target when the provenance or exported API matches
React Intl/FormatJS or another registered package. Run the same intent gate and
dependency check for renamed package surfaces; do not use a new local filename
as permission to recreate the package.

Treat public vendor files as **npm-first** targets. Before drafting code inside
`restored/vendor/<name>.ts[x]`, map the filename, provenance chunk, and exported
API to a package candidate. If a package candidate exists and there is no
recorded application-fork or app/runtime-wrapper proof, the decision is `npm-shim`:
add the package root to the nearest `package.json`, write a thin re-export or
typed alias shim, and only then continue other vendor work. A local compatibility
body is allowed only after `--decision --intent local-body` is green and the
commit records the fork/wrapper evidence.

For a public vendor file, the first edit-intent command must be the npm-shim
gate, not a local-body gate:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts <target-vendor-file> --decision --intent npm-shim
```

If this fails with a missing dependency, add that package root to the nearest
`package.json` and rerun the same npm-shim command. Do not inspect the bundle
body as a rewrite target, draft compatibility functions, or rename the target
until the npm-shim candidate has been rejected for identity reasons or the shim
is in place. `--intent local-body` is only for non-package app/runtime leaves
after npm identity has been ruled out and proof is recorded.

## Vendor-touch protocol

Any turn that creates or edits `restored/vendor/*` must leave a command trail,
not just a written rationale:

1. Run the full directory audit before the first edit.
2. Classify the target before reading its body as something to rewrite. Public
   vendor files fail closed: use `--intent npm-shim` unless you already have
   recorded fork/runtime-wrapper proof. `--intent local-body` is the exception,
   not the default.
3. Run the full directory audit again before committing.
4. Mention the binary decision (`npm shim`, `application fork`, or `app/runtime
wrapper`) in the commit message or final notes.

For an `npm shim` decision, the intent gate must be green before writing the
shim. If it fails because the package root is missing from the nearest
`package.json`, add the dependency first and rerun the same intent command.
Never write a local body as the fallback for a missing dependency.

If the audit catches a stock-package body such as React Intl/FormatJS, pause all
unrelated vendor work, convert it to an npm-backed shim, add the dependency, and
run the package guard tests:

```bash
bun test ./.agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.test.ts \
  ./.agents/skills/deobfuscate-javascript/scripts/quality-gate.test.ts
```

Do not merge or commit a vendor restore that only passes TypeScript/build while
`vendor-npm-preflight.ts restored/vendor` is red; that is exactly the failure
mode these guards exist to prevent.

## Preflight — before restoring `restored/vendor/*`

Before writing or rewriting any public `restored/vendor/*` file, boundary facade,
or compatibility shim, first prove whether the chunk is a stock third-party npm
package. Use all available evidence: public filename, provenance chunk basename,
exports/API fingerprints, license/banner text, consumer import names,
`CHUNK_NAME_REGISTRY`, this repo's reference package evidence, `ref/package.json`, and
`ref/node_modules` when present. Missing extracted dependencies are weak evidence
only; they do **not** justify reimplementing a confirmed package. A public
`restored/vendor/<name>.ts[x]` filename that maps to a package declared in the
nearest `package.json` is itself high-confidence npm identity, including scoped
packages normalized as `@scope/name` -> `vendor/scope-name.ts`.

Make the preflight concrete before edits. For any task that will touch files
under `restored/vendor/`, start with a normal full vendor audit, not just the
current leaf file:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts restored/vendor
```

If this fails, fix those public npm vendor shims first: stock package bodies
must become npm-backed re-exports and missing package roots must be added to the
nearest `package.json`. Only after the directory audit is clean should you
inspect a specific target. Search the registries and project profile
(`rg "<stem>|<export>" .agents/skills/deobfuscate-javascript`), inspect the
nearest `package.json`, inspect consumers, then run the edit-intent classifier
before writing code:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts <target-vendor-file> --decision --intent local-body
```

This command must exit 0 before any local vendor body edit. Treat both
`npm-shim` and `needs-proof` as blockers for `--intent local-body`: `npm-shim`
means use the package, while `needs-proof` means no package identity was
registered yet and fork/runtime-wrapper evidence must be recorded first. Running
`--decision` without `--intent` is informational only; it is not permission to
write code into `restored/vendor/<name>.ts[x]`. A nested `local-body` decision
also audits the containing `restored/vendor` root; if any existing public npm
vendor body is still hand-written (for example `vendor/react-intl.tsx`), the
intent fails until that package shim is fixed first.
For package shims, run the matching intent gate:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts <target-vendor-file> --decision --intent npm-shim
```

This command must exit 0 before writing the shim. It verifies both that the
target is a registered/high-confidence npm package surface and that the nearest
`package.json` already declares the required package root. If the dependency is
missing, add it and rerun; do not treat that failure as evidence for a local
compatibility implementation.

For public vendor package candidates, try the npm-shim classifier first. A
missing dependency is a package-management task, while a negative npm-shim
identity is the only reason to continue toward fork/runtime proof. Do not run a
local-body classifier first for files such as `vendor/react-intl.tsx`; that
inverts the evidence order and recreates the exact local-subset failure this
preflight exists to block.

If the command exits non-zero with `INTENT FAIL`, stop restoring the body and
create a bare npm-backed shim. To intentionally create a new npm shim for a
package the registry does not know yet, first add the package fingerprint/gate
entry and its tests, then rerun with `--intent npm-shim`. If an informational
decision run prints `needs-proof`, do not treat that as permission to hand-write
the module; first prove and record **application fork** or **app/runtime wrapper**
status. Then run
`bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts <target-or-restored/vendor>`
to catch known stock-package compatibility bodies and missing package
dependencies with only npm-shim issues reported. For declared bare-package
re-exports, the preflight resolves the installed package runtime and checks the
named members; if the package cannot be resolved, the preflight fails instead of
letting `export { missingAlias } from "pkg"` pass just because the specifier
looks right. Then run
`bun .agents/skills/deobfuscate-javascript/scripts/quality-gate.ts <target> --allow-flat --vendored`
on the current target to see whether a stock package rule already exists. If the
target is a new package family, add the registry/gate/test entry first, in a
separate skill commit, so the local compatibility implementation cannot pass the
same gate later.

For compatibility aggregator barrels (`stable-exports/*`, `compat-*`, or any
file that re-exports from a `*-compat-bundle`), never route aliases from their
legacy export names alone. First resolve each direct export through
`resolve-direct-compat-exports.ts` and inspect the internal binding definition in
the producer bundle. An alias like `gS` may be a stock package export (for
example a D3 interval), while adjacent aliases are app runtime helpers. Record
the source binding decision per alias, then move it either to a real bare npm
re-export or to a small typed semantic module. After editing, run
`count-direct-compat-exports.ts` on the touched barrel and the full
`vendor-npm-preflight.ts restored/vendor` audit; a green single-file decision is
not enough if the compat barrel still hides direct bundle re-exports.
If an alias resolves to a stock package export (`react-is`, `d3-array`,
`react-intl`, etc.), prefer an existing npm-backed vendor shim or a direct bare
package re-export over creating another local helper. Only create a semantic
local module when the resolved binding is app/runtime logic, not package code.

Treat this as a blocking preflight for every `vendor/` edit: if the public API
matches a known npm surface, stop before hand-writing code, add the package root
to the nearest `package.json`, and register the package/gate fingerprint in the
skill. A "small compatible subset" is still a failed restore for stock packages;
write local code only after proving a application fork, app runtime, or package
entangled wrapper. The default answer for a stock package is **zero local package
body**: `restored/vendor/react-intl.tsx`, `restored/vendor/pdfjs.ts`,
`restored/vendor/docx-preview.ts`, and similar public vendor files must be
npm-backed shims, even if the bundle used only a few exports or the current
workspace does not yet declare the dependency.

Dependency absence is never identity evidence. When a public vendor filename,
provenance chunk, or exported API fingerprint already maps to a stock package
(for example `vendor/react-intl.tsx` → `react-intl`), treat a missing
`package.json` entry as a package-management TODO: add the dependency and keep
the shim thin. Do not downgrade the target to `needs-proof`, and do not write a
local compatibility body, just because the restored project has not installed
the package yet.

Before editing any public vendor target, write down the binary decision in your
working notes or commit message: **npm shim**, **application fork**, or **app/runtime
wrapper**. If you cannot prove fork/wrapper status from source, consumers, or
project profile, choose npm shim. Do not start by recreating exported functions
and then ask whether an npm package exists; package identity is the first gate.

## The npm-shim deliverable

If identity is high-confidence and the package is not a proven application fork, the
deliverable is a thin npm-backed re-export / alias shim:

1. Import or re-export from the bare npm specifier.
2. Preserve legacy compatibility names by aliasing real package exports or by a
   tiny typed wrapper only when the upstream API truly lacks the legacy name.
   Do not re-export names that the package does not actually export; import the
   real export and wrap it, or restore the module semantically if it is not a
   stock package surface.
3. Add the package root to the nearest `package.json` when the restored project
   owns dependencies; use ambient declarations only when real package types are
   unavailable.
4. Register the package so the mistake cannot recur: update
   `CHUNK_NAME_REGISTRY` / `ALIAS_REGISTRY` when the importer can automate it,
   add `PUBLIC_NPM_VENDOR_SHIMS`, provenance source chunks, or API fingerprints
   in `quality-gate.ts`, and include fail/pass tests for new package families.

Only hand-restore a vendor body after you have evidence it is a application fork,
project runtime, or package-entangled wrapper. Record that reason in the
provenance/import-map notes and run `quality-gate.ts --vendored` only for the
forked or intentionally vendored surface. A local "minimal implementation" of a
stock package API is a failed restore, even if it type-checks.
