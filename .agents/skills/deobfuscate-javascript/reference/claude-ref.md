# Project profile — Claude.app `./ref`

Use this profile whenever the task targets this repository's extracted
Claude.app bundle under `./ref`. It specializes the generic restoration flow for
the Electron main process, utility-process workers, preloads, and Vite renderer
entries used by Claude Desktop.

← Back to [SKILL.md](../SKILL.md). Primary workflow:
[full-restoration.md](../workflows/full-restoration.md).

## Authoritative identity and layout

- `ref/package.json` must identify `@ant/desktop`. Record its `version`, `main`,
  Node/Electron versions, and dependency versions before restoring code.
- The installed source snapshot comes from
  `/Applications/Claude.app/Contents/Resources/app.asar`.
- Main-process and preload bundles live under `ref/.vite/build/`.
- Nested utility-process entries currently include:
  - `ref/.vite/build/mcp-runtime/directMcpHost.js`
  - `ref/.vite/build/mcp-runtime/nodeHost.js`
  - `ref/.vite/build/shell-path-worker/shellPathWorker.js`
  - `ref/.vite/build/transcript-search-worker/transcriptSearchWorker.js`
- Renderer windows live under `ref/.vite/renderer/*`. Treat each HTML file as
  an entry root and recursively include its project-local assets.
- `ref/node_modules/**`, CSS, WASM, images, locale data, and native modules are
  package or asset evidence, not application-source restoration targets.

Do not use the legacy `ref/.vite/renderer/main_window/assets` layout, hashed `app-main-*`
entry assumptions, or the old `restored/IMPORT_MAP.json` as proof that the
current Claude snapshot is complete.

## First-pass inventory

Always check source maps before deminifying:

```bash
SKILL_DIR=.agents/skills/deobfuscate-javascript

find ref/.vite/build -type f -name '*.js' -print | sort
find ref/.vite/renderer -type f \( -name '*.html' -o -name '*.js' \) -print | sort

while IFS= read -r entry; do
  bun "$SKILL_DIR/scripts/sourcemap-check.ts" "$entry" || true
done < <(find ref/.vite/build -type f -name '*.js' -print | sort)
```

If a referenced `.map` is absent, continue with semantic restoration. Do not
claim source-map recovery merely because a bundle ends with a
`sourceMappingURL` comment.

## Restoration boundaries

Restore Claude code into the existing architecture:

- Renderer: Feature-Sliced Design under `src/renderer/{app,pages,widgets,features,entities,shared}`.
- Main process: DDD-style layers under
  `src/main/{domain,application,infrastructure,interfaces,preload}`.
- Electron utility-process entries: `src/main/infrastructure/workers/`.
- Context-isolated renderer bridges: `src/main/preload/`.
- Cross-process message shapes: shared contracts or the appropriate domain
  model, not anonymous duplicated string constants.

Split application behavior from bundled dependencies. For example,
`directMcpHost.js` contains the official `@modelcontextprotocol/sdk`; restore
Claude's proxy/session code and depend on the exact SDK version recorded in
`ref/package.json` instead of copying the SDK implementation into `src`.

## Duplicate-entry rule

Some Claude entries are byte-identical apart from their source-map trailer.
When this is proven with `cmp`/`diff`, restore one typed shared runtime plus thin
entry wrappers. Each wrapper keeps its own first-line provenance header:

```ts
// Restored from ref/.vite/build/aboutWindow.js
```

Do not duplicate the shared implementation merely to obtain one file per
bundle.

## Provenance and coverage ledger

Every restored public source starts with an exact reference marker:

```ts
// Restored from ref/.vite/build/mcp-runtime/directMcpHost.js
```

Coverage is calculated against the current Claude snapshot, not historical
maps. Every JavaScript entry under `ref/.vite/build` and every reachable
project-local renderer chunk must have a semantic source owner. A marker proves
ownership only; completion additionally requires typed implementation,
acceptance review, build success, and the full quality gate.

`src/main/infrastructure/extracted-bundle-layout.ts` records main/worker output
locations. Keep it synchronized with Vite multi-entry configuration.

## Build configuration

- `vite.main.config.ts` emits `index` plus utility-process worker entries.
- `vite.preload.config.ts` emits the general preload and every specialized
  Claude preload.
- Externalize Electron including subpaths with `/^electron(?:\/.*)?$/`.
- Externalize Node built-ins with `/^node:/`.
- Prefer exact npm dependencies matching `ref/package.json` for bundled stock
  libraries; keep Claude-specific wrappers local and typed.

## Completion proof

Do not declare the Claude restoration complete until all of the following hold:

1. Current Claude entry coverage reports zero missing entries.
2. No project-local reachable body is a facade, placeholder, or copied bundle.
3. No delivered source uses `@ts-nocheck`.
4. Renderer top-level directories conform to FSD.
5. Main-process top-level directories conform to DDD.
6. `bun run typecheck` passes.
7. Preload, main, and renderer production builds pass.
8. The deobfuscation quality gate passes over all delivered targets.
9. `make dev` builds, starts Vite, creates the Electron window, and loads the
   renderer. A later navigation to Claude's region-unavailable page is an
   external service restriction, not a local startup failure; record it
   separately rather than hiding it.

Historical product-named source symbols may remain when they are literal legacy
API identifiers or provenance records. They are not current project guidance
and must not be used to select entries, dependencies, or completion criteria.
