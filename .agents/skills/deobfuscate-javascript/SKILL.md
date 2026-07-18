---
name: deobfuscate-javascript
description: >-
  Reverse-engineer minified, obfuscated, packed, or bundled JavaScript into readable or typed TS/TSX, including Claude.app `./ref/.vite` restoration. Use for .min.js, dist bundles, Vite/Rollup/Webpack chunks, obfuscated snippets, or requests to humanify, deobfuscate, deminify, unpack, decode, make readable, rename variables, reverse engineer, 完整还原, 深度还原, 反混淆, 美化代码, 看懂这段 JS, 重命名变量, 反编译. Whole-tree restores (index.html + assets, "restore the code/whole tree") default to deep: deobfuscate if needed, smart-rename, polish, resolve npm imports, typed semantic TSX rewrite, acceptance review, import graph/ledger, and full-target quality gate draining every reachable project-local chunk. Quick/readable/快速 or lone snippets use readable naming-quality restore. Vendor data/packages become npm leaves or re-export shims, not restored package bodies.
---

# Deobfuscate JavaScript

Reverse-engineer minified/obfuscated JavaScript back to readable code. Three stages: **Stage 1** (only if obfuscated) and **Stage 2** (rename + polish) do the readable restore; **Stage 3** adds the typed rewrite + acceptance review and is the deep-tier add-on.

- **Stage 1 — Deobfuscation:** unwind obfuscation transforms (Packer/AAEncode unpack, Obfuscator.IO string arrays, hex/unicode/base64 escapes, dead code, opaque predicates). Pure Babel passes, no LLM. Run only on obfuscated input. Detail: [stage-1-deobfuscate.md](stages/stage-1-deobfuscate.md).
- **Stage 2 — Restore to readable** (two phases). **(a) Rename** cryptic identifiers (`a`, `e`, `t`, `_0x4f3`, …) to meaningful names — a TS+Bun port of [humanify](https://github.com/jehna/humanify) where _you_ play the renamer, running `smart-rename.ts` **first** so you only hand-name the residue. **(b) Polish** undoes bundler/compiler transforms — the **reading-aid subset** (`--fast`: React Compiler `cache[N]` strip, `(0, fn)(...)` unwrap, backtick → string, JSX-runtime → JSX, destructure defaults, aliased exports) is the default; the **import-resolution tail** (npm/shim/dead-shim elimination) is **deep mode only**. Detail: [stage-2-restore.md](stages/stage-2-restore.md).
- **Stage 3 — Finalize (deep mode only)** (two phases). **(a) Semantic rewrite** turns the mechanical checkpoint into idiomatic _typed_ TypeScript — semantic filenames, provenance header, import map, types/`.tsx` recipes, directory splits, import repair. **(b) Acceptance review** — the host reads every delivered file end-to-end against the four-category quality bar and iterates until each passes; no sub-agent and no authorization required (an independent reviewer sub-agent is optional). The default tier ships the Stage 2 readable file without Stage 3. Detail: [stage-3-finalize.md](stages/stage-3-finalize.md).

## Default scope and depth

Two independent axes: **scope** (one file vs the whole import tree) and **depth** (readable vs deep). Pick scope from the input shape. **For a whole-tree restore the default depth is deep** ("restore the code" means complete + typed); a lone snippet defaults to readable. Drop a whole tree to readable only on an explicit "quick"/"readable"/"快速" request.

- **Default scope — whole tree from `index.html`.** For an app (`index.html` + sibling-chunk asset tree), read `index.html`, **auto-discover the entry** (`check-entry.ts --discover --root <assets-dir>`, or omit the positional to `build-import-graph.ts`), then **recursively restore every reachable project-local chunk**. Per-chunk pipeline: Stage 1 (if obfuscated) → **wakaru pre-pass** (`wakaru-normalize.ts`; recovers ES6 classes, async/await, optional chaining, destructuring, TS enums, …; default-on, **auto-skips** if `@wakaru/cli` absent) → Stage 2 rename (`smart-rename` first, then hand-name residue) → reading-aid polish (`polish.ts --fast`) → format → **organize in staging, then promote** into shared `restored/` (semantic subfolders, kebab filenames, provenance headers, one `restored/IMPORT_MAP.json`); script/batch output never goes straight into `restored/`. **Bundled vendor data (Shiki grammars + themes, data libs like 3Dmol) is detected by content and treated as `npm-leaf` — NOT restored; consumers import the bare specifier (`@shikijs/langs/<id>`, `@shikijs/themes/<id>`), so `restored/` holds app code only.** Readable depth's hard bar is naming quality; deep depth adds complete types + every reachable chunk promoted.
- **Fallback scope — single file.** When the input is a lone pasted snippet, or there is no `index.html` / asset tree, restore just that one file — [workflows/small-minified.md](workflows/small-minified.md). Same per-file pipeline, no import graph.
- **Depth — deep (default for whole tree) vs readable (quick opt-out).** **Deep** = meaningful names **plus** Stage 3 (typed `.tsx` + acceptance review), full npm-import resolution (Stage 2's deep polish tail), and import-graph/ledger orchestration draining every reachable chunk to `promoted`; also triggered on **"deep"/"full"/"完整"/"深度"/"production"/"typed"/"restore the whole tree"**. **Readable** = meaningful names, reading-aid polish, untyped — only on "quick"/"readable"/"快速"/"粗略" or a lone snippet. Both **organize and promote**; `promote-organized.ts` defaults `--tier deep` (enforces `Props`/param types), `--tier readable` relaxes the typing gate.

Deep is a completion bar, not an upsell: a whole-tree restore is "done" only when every reachable project-local chunk reaches `stages.promoted` and `quality-gate.ts <target>` passes ([Restoration contract](#restoration-contract)). Readable is a downgrade the user asks for, not the resting state.

## Output conventions

- **`restored/` is a clean-only deliverable zone — the canonical staging → organize → promote rule (referenced everywhere below).** Anything a _batch or script_ restore emits (`auto-restore-full.ts` checkpoints, a swept `polish.ts`, `--write-target-checkpoints` files, any hash-basename `.tsx`) is a **mechanical checkpoint, not a deliverable**; it goes into the gitignored staging tree under `restored/.deobfuscate-javascript/` (`_full/checkpoints/<basename>.tsx` for the batch executor, per-chunk `$WS/` otherwise), **never** straight into `restored/`. Promote only after the host organizes it. The promotion bar, in **every tier**: **good readability** (semantic names, no mechanical fallbacks like `buttonValue3` / `contextParam14`), **friendly kebab filenames**, **clear semantic-domain structure**, and **prettier-formatted** (`promote-organized.ts` runs `format.ts` on every deliverable, so `restored/` is never raw `@babel/generator` output) — **plus complete types** (`Props` interfaces on exported components, param/return types where they help) whenever the restore is **deep/full** (where all `auto-restore-full.ts` output lives). Only genuinely hand-restored single **readable-tier** deliverables may promote untyped, and even those draft in `$WS`, get organized, then land — never raw script output. For a whole-tree batch restore this is driven, not eyeballed: `plan-organize.ts` proposes a domain + kebab path per chunk; `promote-organized.ts` drains the promote frontier (typed deliverable → quality gate → copy into `restored/<domain>/` → IMPORT_MAP update → import rewrite). Complete only when every reachable chunk reaches `stages.promoted` and `quality-gate.ts <target-dir>` passes — see [full-restoration.md → Step 4](workflows/full-restoration.md).
- **One shared restore root — `restored/`** — mirrors the source assets dir (e.g. `ref/.vite/renderer/main_window/assets`). Every entry restores into it; **no per-entry folder** (no `restored/app-main/`).
- **Semantic-domain subfolders** group output (`app-shell/`, `composer/`, `utils/`, `icons/`, …); original chunk identity lives in each file's provenance header, not the layout.
- **One shared import map — `restored/IMPORT_MAP.json`** — reused regardless of entry. Never per-chunk/per-session/per-entry maps (no `APP_MAIN_IMPORT_MAP.json`).
- **kebab-case file and directory names** (`button.tsx`, `download-icon.tsx`, `app-shell/`), but **React component + type names stay PascalCase** (JSX requires it) — `button.tsx` exports `Button`, `download-icon.tsx` exports `DownloadIcon`. `quality-gate.ts` enforces this (`non-kebab-filename`).

While restoring, if you hit a script bug, a step worth automating, or an unrecognized npm package, update the skill itself and commit it separately — see [Maintaining this skill](#maintaining-this-skill-self-improvement-protocol).

## Vendor/npm hard stop

Any task that will create or edit `restored/vendor/*` (including nested `compat-*`, `stable-exports/*`, or runtime barrels) is gated. **Before the first edit, read [reference/vendor-npm.md](reference/vendor-npm.md) in full** and run the directory audit:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts restored/vendor
```

The non-negotiable core: public vendor files are **npm-first** — the default deliverable is a thin npm-backed re-export shim, never a hand-written "compatible subset" of a stock package. A missing dependency means add it to the nearest `package.json`, not evidence for a local body. The intent gate (`vendor-npm-preflight.ts <target> --decision --intent npm-shim|local-body`) must exit 0 before writing code; public vendor files fail closed to `npm-shim` unless recorded application-fork or app/runtime-wrapper proof exists. The full evidence order, touch protocol, aggregator-barrel rules, and shim recipe live in [reference/vendor-npm.md](reference/vendor-npm.md).

## Restoration contract

### Default tier (readable restore)

0. **Find the entry (whole tree is the default).** With an `index.html` + asset tree, auto-discover: `bun scripts/check-entry.ts --discover --root <assets-dir>` (or omit the positional to `build-import-graph.ts`). Restore **every reachable project-local chunk** (per-chunk steps run across the tree, orchestrated by [full-restoration.md](workflows/full-restoration.md)). No `index.html`/tree (a lone snippet) → single-file flow, [small-minified.md](workflows/small-minified.md).
1. **Analyze first.** Always run `sourcemap-check`; use `detect` / `extract` per chunk.
2. **Restore to readable.** Stage 1 if obfuscated → **wakaru-normalize** (`bun scripts/wakaru-normalize.ts "$WS/original.js" -o "$WS/normalized.js"`; auto-skips when absent, always leaves a `normalized.js`) → Stage 2 rename (`smart-rename` first, then hand-name residue until single-letter density is low) → reading-aid polish (`polish.ts --rename --fast`) → `format`. One-shot: `polish.ts "$WS/normalized.js" --rename --fast --source <original-path> --out draft.tsx --format` (file operand is the normalized output; `--source` points at the **original** for the provenance header); then hand-name what `smart-rename` left.
3. **Stage, organize, then promote** (canonical rule: [Output conventions](#output-conventions)). The one-shot writes its draft into `$WS/`; promote into `restored/` (semantic subfolders, kebab filenames, `// Restored from <path>` header, shared `restored/IMPORT_MAP.json`) only after organizing — never copy a mechanical checkpoint in. The hard bar at readable depth is naming quality — meaningful identifiers, no generated fallback names (`buttonValue3`, `contextParam14`); types, npm-import resolution, and the reviewer loop stay optional (an optional naming-only self-review is available for extra confidence).

### Deep / production mode only

When the user asks for deep/full/typed/production output, continue past the readable draft:

1. **Build the graph (full mode).** Build `manifest.json` + `ledger.json` with `build-import-graph.ts` and `build-symbol-ledger.ts` so renaming is resumable and parallel-safe across the chunk tree.
2. **Create a mechanical checkpoint.** Stage 2 scripts or `auto-restore-full.ts` produce a broad readable checkpoint (may keep hash basenames + fallback names; never the final deliverable). wakaru-normalize may run **per chunk body** here too, with two guards: never `--unpack` an already-split tree (it re-derives module boundaries, forking the restore root), and treat wakaru's import/export specifiers as untrusted — `build-import-graph.ts` must rebuild the manifest from on-disk files **after** wakaru, and `resolve-npm-imports.ts` + `CHUNK_NAME_REGISTRY` stay the authoritative rewriter (wakaru's `un_esm` doesn't substitute).
3. **Rewrite semantically as the host agent.** Read the checkpoint with the original source, graph/ledger, producer/consumer imports, and project conventions; rewrite into maintainable code — meaningful filenames/identifiers, typed props, semantic exports, resolved npm imports, clear structure.
4. **Pre-filter only.** Run prettier and `quality-gate.ts` for cheap failures. Passing does not mean done.
5. **Acceptance-review LOOP.** The host agent reads every delivered file end-to-end against the four-category quality bar in `scripts/acceptance-checklist.md`, rewrites each `NEEDS_FIX`, and re-reads until all pass — **no sub-agent and no authorization required**. An independent reviewer sub-agent is optional (extra eyes only, never a blocker, never fabricate verdicts or skim). Complete only after every file passes.
6. **Full-target completion audit.** For whole-tree restores, run `quality-gate.ts <target-dir>` after the loop. It checks the manifest + shared import map and fails if any reachable local/oversized-local app-feature chunk is still missing, mechanical, `@ts-nocheck`, empty placeholder, typed facade, or lacks Stage 3 acceptance evidence. Not a `boundaries/` grep or `IMPORT_MAP.status === "done"` scan.

**Dual-track output (deep mode):** hidden checkpoints preserve original hash basenames; public files use semantic names, with chunk identity in provenance headers and the one shared `restored/IMPORT_MAP.json` (reuse + append; see [Output conventions](#output-conventions)).

**Full restoration mode** is not a new stage — it's an orchestration layer on top of Stages 1–3 coordinating the per-file pipeline across a connected component of the import graph (entry chunk + every sibling it pulls in, transitively to the leaves). It adds `manifest.json` (file-level dependency graph + stage status) and `ledger.json` (per-file symbol checklist + cross-file binding table) so renaming is resumable and parallelizable at file granularity. "deep"/"full"/"完整"/"深度"/"restore referenced chunks" ⇒ every reachable project-local sibling is in scope by default. Detail: [workflows/full-restoration.md](workflows/full-restoration.md).

### Delta / boundary replacement inside an existing restore

When the target restore root already has a shared `IMPORT_MAP.json` and `.deobfuscate-javascript/_full/manifest.json`, first check whether the requested chunk already maps to a public file or typed boundary facade. If it does, treat the task as a **delta restore** unless the user explicitly asks to rebuild the whole reachable graph.

Delta restore contract:

1. Reuse the existing target, manifest, ledger, and import map; no parallel restore root.
2. Restore the requested chunk in its existing `_full/files/<basename>/` workspace. Restore additional chunks only when missing from the import map or explicitly requested.
3. Rewrite imports through the shared `IMPORT_MAP.json`: finalized local deps → semantic public paths; npm deps → bare specifiers; unresolved runtime/vendor deps → documented boundary facade paths.
4. Replace the mapped boundary/public file with the semantic candidate; update the import-map entry (`restored`, `exports`, `status`, drop `boundary` when it's no longer a facade).
5. Validate: format, `quality-gate.ts` on changed public path(s), the target TypeScript check when the root has a `tsconfig.json`, and Stage 3 acceptance on changed public files only. All-tree acceptance only when the whole public tree changed or the user asked.

### Vendor/npm preflight — before restoring `restored/vendor/*`

Blocking preflight; the full protocol (evidence order, intent gates, aggregator-barrel resolution, the npm-shim deliverable recipe) is in [reference/vendor-npm.md](reference/vendor-npm.md) — read it before any `restored/vendor/*` edit. See [Vendor/npm hard stop](#vendornpm-hard-stop) above for the audit command.

### Boundaries and terminal nodes

Full-restoration mode records `npm-leaf`, `oversized-local`, `external`, and `faced-boundary` chunks as _terminal nodes_ — referenced by consumers but never renamed or given a workspace. `restored/boundaries/*.ts` has exactly three terminal states — **known npm package → bare re-export shim (done)**, **genuine app/host runtime → typed facade or opt-in passthrough (an open boundary, never done)**, **restore + promote out of `boundaries/` (the only completion for runtime facades)** — a permanent `any`-facade is never acceptable, and project/feature chunks are **never** faced ("big" or "imported by many" is not a facing reason). Deep/full mode recurses the **entire** reachable project-local graph to the leaves; final proof is `quality-gate.ts <target-dir>` over the whole public target. The terminal-node trigger table, boundary lifecycle detail, and `build-import-graph.ts` depth flags (`--max-lines`, `--include`) are in [reference/boundaries.md](reference/boundaries.md) — read it when classifying a chunk as a boundary or resolving one.

Run Stage 1 _before_ Stage 2 on obfuscated input — `extract.ts` byte offsets are invalidated by Stage 1 rewrites. On purely minified (not obfuscated) input, skip Stage 1.

## Current project profile — Claude.app `./ref`

When the workspace contains `ref/package.json` with `name: "@ant/desktop"` or the user asks to restore this repository's `./ref`, load [reference/claude-ref.md](reference/claude-ref.md) before choosing a workflow.

Default assumptions for this repo:

- Main/preload/worker bundles: `ref/.vite/build`, including nested worker directories.
- Renderer entries: HTML and reachable assets under `ref/.vite/renderer/*`.
- Restore renderer code into FSD under `src/renderer`; restore main-process code into DDD layers under `src/main`.
- Restore utility-process entries under `src/main/infrastructure/workers` and specialized context bridges under `src/main/preload`.
- Treat `ref/node_modules/**`, CSS, WASM, images, locales, and native modules as dependency or asset evidence, not application bodies.
- Prefer exact dependency versions from `ref/package.json`; do not copy stock package bodies into `src`.
- Track current Claude entry coverage separately from the historical `restored/IMPORT_MAP.json`.
- Detail: [claude-ref.md](reference/claude-ref.md).

## When to use this skill

Trigger whenever the user:

- Provides a `.min.js`, `bundle.js`, `dist/` file, or any JS with cryptic short names and wants to understand or work with it.
- Provides obviously obfuscated code: `_0x` identifiers, `eval(function(p,a,c,k,e,d){...})`, AAEncode emoji glyphs, `String.fromCharCode(72,101,...)` walls, hex/unicode-escaped literals.
- Says "humanify", "deobfuscate", "deminify", "unminify", "unpack", "decode", "make readable", "rename variables", "reverse engineer"; or in Chinese "反混淆", "美化代码", "看懂这段 JS", "重命名变量", "反编译".
- Asks "what does bundle.js do?" while pointing at minified/obfuscated code, or works in a project with a `modules/`/`og/` folder of previously deobfuscated chunks.

**Don't trigger if** the code is already readable — just read and explain. **Nor for plain beautification** — `npx prettier --write <file>` when there are no cryptic names and no obfuscation. **wakaru alone is not a substitute** — `npx @wakaru/cli` un-minifies but its `smart_rename` is the same deterministic heuristic as `smart-rename.ts`, not semantic naming; use it as a pre-pass _inside_ Stage 2, not as the deliverable.

## Routing — three questions, then load one workflow

**Step 0 (always):** run `scripts/sourcemap-check.ts` first. If a `.map` exists, recover originals via `npx source-map-explorer` instead — that beats any rename. For the current repo's `./ref` tree, load [reference/claude-ref.md](reference/claude-ref.md) first.

**Step 0.5 (whole tree / `./ref` / any multi-chunk app — the default):** auto-discover the entry: `scripts/check-entry.ts --discover --root <assets-dir>` reads `index.html`, picks + sanity-checks the app entry, prints its path (`build-import-graph.ts` does the same when you omit the positional). If discovery (or manual `check-entry.ts <entry> --root <assets-dir>`) exits `3`, the entry is a transitive **vendor leaf**, not the app — restoring from it yields a tiny closure that _looks_ complete (the "got 6 files, called it done" trap). A real app entry has large local fan-out and ~nobody imports it; a leaf is the inverse. Switch to the `index.html` `<script>` root (or a high-fan-out `app-main-*` chunk) first.

**Step 0.6 (existing restore delta):** if the target has `IMPORT_MAP.json` + `_full/manifest.json`, check whether the requested chunk is already a boundary/public output — prefer the delta/boundary-replacement contract above before a new whole-tree restore. "Complete" then means complete replacement for that scoped chunk unless the user asks to rebuild the reachable graph.

**Step 0.7 (mechanical normalization — readable tier, default-on):** on non-obfuscated minified/transpiled input, run `wakaru-normalize.ts` before `extract.ts`. Byte-rewriting like Stage 1, so the order is **sourcemap-check → detect → (Stage 1 if obfuscated) → wakaru-normalize → extract** — extract/rename from the normalized output, never `original.js`. **Skip when a usable `.map` exists** (recover via `source-map-explorer`). Auto-skips when `@wakaru/cli` is absent. In **deep/full** mode it's guarded, not default-on (Restoration contract → deep step 2).

Then answer in order:

| Question                                                                                                        | Then                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Obfuscated?** (`_0x` arrays, Packer, AAEncode, hex/unicode walls, opaque predicates)                          | **Stage 1** first via [full-obfuscation.md](workflows/full-obfuscation.md), then continue below                                                                                                                                                |
| **Has an `index.html` + asset tree?** (the default) — auto-discover the entry, restore the whole reachable tree | **whole-tree restore** → [full-restoration.md](workflows/full-restoration.md) at **deep depth by default** (typed `.tsx` + acceptance + drain every chunk to promoted); only "quick"/"readable"/"快速" downgrades to the untyped readable pass |
| **Otherwise** — a lone pasted snippet or single chunk, no `index.html`/tree                                     | **fallback: single file** → [small-minified.md](workflows/small-minified.md)                                                                                                                                                                   |

The single-file fallback workflow handles the sub-cases inline (it links the right technique): React/JSX → recover JSX in `--fast` polish; ≥ 3 exports / registry → [multi-export-bundle.md](workflows/multi-export-bundle.md) split (a deep-tier step); ≥ 500 KB or > 1000 symbols → [huge-single-file.md](workflows/huge-single-file.md) batching; webpack `id:(e,t,n)=>{}` modules → [webpack-bundle.md](workflows/webpack-bundle.md) webcrack pre-split; stdin/stdout chaining → [piped.md](workflows/piped.md). Load a technique doc only when its sub-case applies.

For end-to-end worked traces, see [reference/examples.md](reference/examples.md). For caveats, gotchas, and troubleshooting, see [reference/caveats.md](reference/caveats.md).

## Quality bar — anti-patterns to refuse before declaring done

**Before declaring any restore done, read [reference/quality-bar.md](reference/quality-bar.md) and check the output against it.** The hard bar in **every** tier is naming/readability: no program-scope-only renames (bodies still `let k = …, [A, M] = useState(false)`), no generated fallback names (`buttonValue3`, `contextParam14`), no React Compiler scaffolding in load-bearing functions, no lowercase JSX tags that are really component aliases, no known npm package rewritten as a local implementation, no mechanical/batch checkpoint promoted into `restored/`, no bundle body merely moved/renamed into a semantic folder, and never checkpoints-built-but-nothing-promoted. Deep/typed/production output additionally must pass the typing/structure list (typed `.tsx`, split multi-export bundles, no faced app chunks, Stage 3 acceptance actually performed) — all itemized with cures in [reference/quality-bar.md](reference/quality-bar.md).

## Tools

Every script's purpose + "Run when" routing, external-tool notes, the shared import-map convention, and exit codes live in [reference/tools.md](reference/tools.md) — load it when you need a flag or aren't sure which script fits. The ones used in nearly every run:

| Tool                              | Role                                                                                                                              |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `scripts/sourcemap-check.ts`      | **Always first** — a recoverable `.map` beats any rename                                                                          |
| `scripts/check-entry.ts`          | `--discover --root <assets-dir>` finds + sanity-checks the app entry (exit `3` = vendor leaf, wrong entry)                        |
| `scripts/build-import-graph.ts`   | BFS the chunk tree → `_full/manifest.json` (full-restoration mode)                                                                |
| `scripts/wakaru-normalize.ts`     | Default-on mechanical pre-pass (readable tier); auto-skips when absent                                                            |
| `scripts/polish.ts`               | One-shot Stage 2: `--rename --fast --format` is the readable-tier pipeline; full chain (no `--fast`) resolves npm imports in deep |
| `scripts/quality-gate.ts`         | Hard gate before promote; `quality-gate.ts <target-dir> --check-format` is the whole-tree completion proof                        |
| `scripts/vendor-npm-preflight.ts` | Blocking guard for any `restored/vendor/*` edit — see [Vendor/npm hard stop](#vendornpm-hard-stop)                                |
| `scripts/format.ts`               | Prettier wrapper; every deliverable is formatted                                                                                  |

## Workspace convention (TL;DR)

Every intermediate file lives in a hidden per-chunk workspace under the target output directory:

```bash
INPUT=ref/.vite/renderer/main_window/assets/spinner-D37df5tU.js
TARGET=restored
WS="$TARGET/.deobfuscate-javascript/$(basename "$INPUT" .js)"

mkdir -p "$WS"
cp "$INPUT" "$WS/original.js"
```

Then run every script against `$WS/original.js` and write every output back into `$WS/`. Everything a script or batch run emits stays in the `.deobfuscate-javascript/` staging tree (`$WS/` per chunk, `_full/checkpoints/` for the batch executor); `$TARGET/` (`restored/`) receives **only** organized deliverables — this is the staging → organize → promote rule in full at [Output conventions](#output-conventions). Add `.deobfuscate-javascript/` to `.gitignore` — one entry covers every chunk in the target.

For **full restoration mode**, a shared `_full/` subdir sits next to the per-chunk ones, holding `manifest.json`, `ledger.json`, and `locks/` so chunks coordinate as one tree. The public import map is shared at the restore root, not inside each `$WS`. Full convention — multi-module sub-workspaces, plan files, split-plan layout — at [stages/workspace.md](stages/workspace.md#multi-file-restoration-the-_full-workspace).

## Maintaining this skill (self-improvement protocol)

The skill is a living asset. When a run surfaces (1) a script bug or misfiring gate, (2) a manual step worth automating, or (3) a new/missed npm package identity, fix the skill itself — registry entry, script + test, or doc — and commit it **separately** from restoration output (`skill(deobfuscate-javascript): <what changed>`). The finding→home routing table, safety guard for mid-run edits, and commit discipline are in [reference/maintenance.md](reference/maintenance.md) — read it before making the skill change.

## Files in this skill

Load sub-files on demand — each entry says when.

### Routing & overviews

- [SKILL.md](SKILL.md) — this file. Routing + contracts + workspace TL;DR; always loaded.
- [reference/claude-ref.md](reference/claude-ref.md) — project profile for restoring this repo's extracted Claude.app `./ref` tree. Load before any `./ref` work.
- [reference/vendor-npm.md](reference/vendor-npm.md) — vendor/npm preflight, intent gates, touch protocol, shim recipe. Load before any `restored/vendor/*` edit.
- [reference/boundaries.md](reference/boundaries.md) — terminal-node kinds, boundary lifecycle, graph depth flags. Load when classifying or resolving a boundary.
- [reference/quality-bar.md](reference/quality-bar.md) — the anti-pattern checklist. Load before declaring any restore done.
- [reference/tools.md](reference/tools.md) — every script with purpose + "Run when", external tools, import-map default, exit codes. Load when picking a tool or flag.
- [reference/maintenance.md](reference/maintenance.md) — self-improvement protocol detail. Load when routing a discovered fix back into the skill.
- [stages/workspace.md](stages/workspace.md) — the `$WS` convention in full.
- [reference/examples.md](reference/examples.md) — nine end-to-end worked traces.
- [reference/caveats.md](reference/caveats.md) — gotchas, ordering rules, troubleshooting FAQ.
- [reference/naming-heuristics.md](reference/naming-heuristics.md) — the mechanical rename rules (React props, event handlers, iteratee callbacks, hook returns) that `smart-rename.ts` automates.
- [reference/bundler-runtimes.md](reference/bundler-runtimes.md) — esbuild vs Rolldown vs Vite runtime helper signatures (`__esm`/`__commonJS`/`__export`/`__toESM`/`__require`); read before hand-converting `__export`/`__esm` call sites.

### Per-stage detail

- [stages/stage-1-deobfuscate.md](stages/stage-1-deobfuscate.md) — detect → unpack → string-array → decode-strings → simplify → control-flow-report → orchestrator, + ordering rules.
- [stages/stage-2-restore.md](stages/stage-2-restore.md) — **Phase A (rename):** sourcemap-check → setup → webcrack → extract → decide names → Step 2.5 → apply → verify. **Phase B (polish):** strip-react-compiler → simplify → jsx-runtime → inline-defaults → normalize-exports → (deep-mode import tail) → `polish.ts` → format.
- [stages/stage-3-finalize.md](stages/stage-3-finalize.md) — **deep mode only. Phase A (rewrite):** D0 gate → D0.5 filenames → D1 provenance → D2 imports → D3–D4 cleanup → D5 typed `.tsx` → D6 format → D7 gate. **Phase B (acceptance):** read each file E1 naming / E2 readability / E3 formatting / E4 other → rewrite → re-read until pass (sub-agent optional). **Default tier:** optional naming-only (E1) self-review.

### Workflows by scenario

- [workflows/full-restoration.md](workflows/full-restoration.md) — entry chunk + every transitive sibling chunk → coordinated restoration tree (resumable across sessions, parallel across agents).
- [workflows/small-minified.md](workflows/small-minified.md) — < 500 KB, no obfuscation, direct rename.
- [workflows/full-obfuscation.md](workflows/full-obfuscation.md) — Stage 1 + Stage 2 end-to-end (includes eval-gating for Packer-wrapped untrusted input).
- [workflows/webpack-bundle.md](workflows/webpack-bundle.md) — webcrack pre-split, rename per module.
- [workflows/huge-single-file.md](workflows/huge-single-file.md) — `plan.ts` + checklist + batched renames.
- [workflows/multi-export-bundle.md](workflows/multi-export-bundle.md) — ESM chunks with many exports → directory of small files.
- [workflows/react-vite.md](workflows/react-vite.md) — single-component React/Vite/Rollup chunks → JSX recovery.
- [workflows/piped.md](workflows/piped.md) — stdin/stdout chains for quick experimentation.

### Scripts

Every script is described once, with its "Run when" routing, in [reference/tools.md](reference/tools.md). All scripts live under [`scripts/`](scripts/); each behavior-changing script has a sibling `scripts/<name>.test.ts`.

#### Tests + fixtures + deps

- `scripts/*.test.ts` — `bun test` suite (run from skill dir).
- `fixtures/` — one per technique (`packed.dean-edwards.min.js`, `aaencode.min.js`, `url-encoded.min.js`, `string-array-obfuscator.min.js`, `from-char-code.min.js`, `dead-code.min.js`, `opaque-predicates.min.js`, `control-flow-flat.min.js`, `composite.min.js`, `example.min.js`).
- [package.json](package.json) — bun deps (`@babel/parser`, `@babel/traverse`, `@babel/generator`, `@babel/types`).
