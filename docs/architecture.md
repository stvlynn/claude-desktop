# Claude Desktop Restore Architecture

This repository is being reshaped from a Codex bundle restore into a Claude.app
restore. The extracted bundle stays in `ref/`; public restored source lives in
`src/`.

## Renderer: FSD

`src/renderer` follows Feature-Sliced Design:

- `app/` wires process-level providers, bootstrapping, routing, and shell setup.
- `pages/` contains window/page entry points. The first restored page is
  `pages/main-window/page.tsx`.
- `widgets/` holds page-sized UI regions that compose multiple features.
- `features/` holds user actions and workflows.
- `entities/` holds business objects shared by features.
- `shared/` holds typed boundaries for UI primitives, icons, i18n, and the
  preload/global APIs.

Current promoted renderer slices:

- `pages/main-window/page.tsx`
- `pages/about-window/page.tsx`
- `pages/buddy-window/page.tsx`
- `pages/find-in-page/page.tsx`
- `pages/quick-window/page.tsx`
- `shared/ui/button.tsx`
- `shared/icons/claude-logo.tsx`
- `shared/icons/find-in-page-icons.tsx`
- `shared/icons/warning-circle-icon.tsx`
- `shared/api/claude-desktop-api.ts`

## Main Process: DDD

`src/main` is organized as:

- `domain/` for policies and domain models.
- `application/` for use cases and orchestration.
- `infrastructure/` for Electron, native modules, persistence, network, and OS
  adapters.
- `interfaces/` for IPC and preload-facing contracts.

The current extracted main process entry is `ref/.vite/build/index.pre.js`,
which loads the large main process bundle in `ref/.vite/build/index.js`.

Current promoted main-process boundaries:

- `domain/application-bundle.ts`
- `domain/restoration-frontier.ts`
- `application/restore-manifest.ts`
- `infrastructure/extracted-bundle-layout.ts`
- `interfaces/preload-global-contracts.ts`

## Shared Contracts

`src/shared` is for contracts used by both sides:

- `contracts/` for IPC DTOs and event names.
- `config/` for build/runtime configuration surfaced to both main and renderer.

Current promoted shared contracts:

- `contracts/window-entry.ts`

## Boundary Rule

Generated or mechanical deobfuscation output must stay in
`.deobfuscate-javascript/` workspaces until it passes a readability review.
Public files under `src/` should be semantic, typed, and named by domain.
