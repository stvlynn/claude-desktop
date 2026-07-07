# Restoration Status

## Source App

- App: Claude.app
- Bundle: `/Applications/Claude.app/Contents/Resources/app.asar`
- Extracted package: `@ant/desktop`
- Version: `1.18286.0`
- Main entry: `ref/.vite/build/index.pre.js`

## Renderer Entries

| Window          | HTML                                                | Primary script                      | Notes                                                              |
| --------------- | --------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------ |
| Main            | `ref/.vite/renderer/main_window/index.html`         | `assets/main-D-xLCUWh.js`           | Single large runtime bundle, no sibling chunk fan-out.             |
| Main page shell | n/a                                                 | `assets/MainWindowPage-LqDynGsb.js` | Depends on runtime aliases from `main-D-xLCUWh.js`.                |
| About           | `ref/.vite/renderer/about_window/about.html`        | `assets/main-TllbX7l6.js`           | Page slice restored in `src/renderer/pages/about-window/page.tsx`. |
| Buddy           | `ref/.vite/renderer/buddy_window/buddy.html`        | `assets/main-C0ouus01.js`           | Page slice restored in `src/renderer/pages/buddy-window/page.tsx`. |
| Find in page    | `ref/.vite/renderer/find_in_page/find-in-page.html` | `assets/main-DwbzDdQh.js`           | Page slice restored in `src/renderer/pages/find-in-page/page.tsx`. |
| Quick window    | `ref/.vite/renderer/quick_window/quick-window.html` | `assets/main-CMY67unU.js`           | Page slice restored in `src/renderer/pages/quick-window/page.tsx`. |

## Completed This Pass

- Adapted `codex-app-ref-refresh` so it can refresh from Claude.app via
  `--app Claude --asar /Applications/Claude.app/Contents/Resources/app.asar`.
- Refreshed `ref/` from Claude.app and completed Prettier verification.
- Ran `deobfuscate-javascript` entry discovery for the main renderer.
- Ran sourcemap and obfuscation checks for the main renderer and main process
  bundles.
- Created a batched rename plan for `main-D-xLCUWh.js`:
  `src/renderer/.deobfuscate-javascript/main-D-xLCUWh/plan/CHECKLIST.md`.
- Identified the stable runtime export aliases from `main-D-xLCUWh.js` and
  recorded them in `docs/runtime-export-map.md`.
- Applied those aliases into a checkpoint:
  `src/renderer/.deobfuscate-javascript/main-D-xLCUWh/runtime-exports-renamed.js`.
- Added a public npm-backed runtime boundary:
  `src/renderer/shared/runtime/main-window-runtime.ts`.
- Promoted a hand-restored first page module:
  `src/renderer/pages/main-window/page.tsx`.
- Promoted the About window page:
  `src/renderer/pages/about-window/page.tsx`.
- Promoted the Find in Page window:
  `src/renderer/pages/find-in-page/page.tsx`.
- Promoted the Buddy window:
  `src/renderer/pages/buddy-window/page.tsx`.
- Promoted the Quick Window:
  `src/renderer/pages/quick-window/page.tsx`.
- Restored shared helpers used by the About window: `Button`, `classNames`, and
  `ClaudeLogo`.
- Restored Find in Page icons and API contracts for find session lifecycle,
  focus/blur requests, match stepping, and result counts.
- Restored Buddy API contracts for BLE status, pairing, device status, preview,
  folder upload, progress, and file path bridging.
- Restored Quick Window API contracts for resize skooch requests and prompt
  dismissal.
- Added a typed DDD scaffold for the main-process restore:
  `domain/application-bundle`, `domain/restoration-frontier`,
  `application/restore-manifest`, `infrastructure/extracted-bundle-layout`, and
  `interfaces/preload-global-contracts`.
- Added a cross-process renderer window contract in
  `src/shared/contracts/window-entry.ts`.
- Extended the Claude desktop API boundary with `AboutWindow` methods and build
  metadata.
- Replaced the old Codex-oriented root dependency list with a Claude-aligned
  minimal package manifest.

## Current Quality Notes

`MainWindowPage-LqDynGsb.js` was first passed through `polish --rename --fast`.
The mechanical draft did not pass the quality gate because it still contained
React runtime residue, cryptic names, unresolved runtime imports, and bundled UI
primitives. The public `page.tsx` is therefore a hand-restored semantic slice,
with UI/i18n/icon/global API boundaries split into `src/renderer/shared`.

Current verified commands:

- `make inspect`
- `make runtime-map`
- `make typecheck`
- `make quality`
- `make pack`

## Next Restore Frontier

1. Drain the 7 rename batches for `main-D-xLCUWh.js`.
2. Continue splitting runtime exports into semantic shared modules:
   `FormattedMessage`, richer icons, and Claude window APIs.
3. Replace the current main-process DDD scaffold with semantic modules for IPC
   and lifecycle code from `index.pre.js` and then `index.js`.
