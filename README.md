# Claude Desktop

> **English** · [中文](README.zh-CN.md)

<p align="center">
  <strong>An unofficial TypeScript reconstruction of Claude Desktop for macOS.</strong>
</p>

<p align="center">
  <a href="docs/architecture.md">Architecture</a>
  ·
  <a href="docs/restoration-status.md">Status</a>
  ·
  <a href="docs/runtime-export-map.md">Runtime Map</a>
</p>

<p align="center">
  <img alt="Platform" src="https://img.shields.io/badge/platform-macOS-black">
  <img alt="Runtime" src="https://img.shields.io/badge/runtime-Electron-47848F">
  <img alt="Language" src="https://img.shields.io/badge/language-TypeScript-3178C6">
  <img alt="UI" src="https://img.shields.io/badge/ui-React-61DAFB">
  <img alt="Package manager" src="https://img.shields.io/badge/package%20manager-Bun-f9f1e1">
</p>

## About

This repository rebuilds the Claude Desktop application shell as readable
TypeScript and React source. It focuses on the desktop surfaces around
`claude.ai`: Electron windows, preload APIs, native menus, tray behavior,
settings, quick window flows, find-in-page, Buddy, and the main window overlay.

The project is built from the installed Claude Desktop app as a reference, then
organized into maintainable source under `src/`. The result is a working
development tree that can be typechecked, quality-gated, and built with Vite.

## What Is Included

- Electron main-process bootstrap and app lifecycle wiring.
- Main window shell with title bar state, load-error overlay, and webview
  health handling.
- About, Buddy, Find in Page, and Quick Window renderer entries.
- Preload and renderer contracts for `window.claude`, Buddy, menu APIs, overlay
  visibility, and quick-window events.
- Native application menu and context menu services.
- Tray controller, update helpers, desktop settings, logging, and state
  persistence boundaries.
- Large shared renderer library: icons, UI primitives, hooks, parsers, keyboard
  helpers, thread/review utilities, animation data, and feature/entity slices.

## Quick Start

```bash
bun install
bun run typecheck
make quality
bun run build
```

Run the development shell:

```bash
bun run dev
```

Build and start the app shell:

```bash
bun run start
```

Refresh the local Claude Desktop reference bundle:

```bash
make refresh-ref
```

## Project Structure

```text
claude-desktop/
├─ src/
│  ├─ main/                     # Electron main process
│  │  ├─ domain/                # State, constants, schemas, contracts
│  │  ├─ application/           # App services and IPC orchestration
│  │  ├─ infrastructure/        # Electron, filesystem, git, tray, update IO
│  │  ├─ interfaces/            # Boundary contracts
│  │  └─ preload/               # Preload/runtime code
│  ├─ renderer/                 # React renderer, Feature-Sliced Design
│  │  ├─ app/
│  │  ├─ pages/
│  │  ├─ widgets/
│  │  ├─ features/
│  │  ├─ entities/
│  │  └─ shared/
│  └─ shared/contracts/         # Cross-process contracts
├─ ref/                         # Local Claude.app reference extraction
├─ restored/                    # Migration pool for candidate modules
├─ docs/                        # Architecture and status notes
├─ vite.*.config.ts             # Main/preload/renderer build configs
└─ Makefile                     # Common development commands
```

## Current Status

The current tree is buildable and the restored source passes the active checks:

```bash
bun run typecheck
make quality
bun run build
```

Restoration status is tracked in
[docs/restoration-status.md](docs/restoration-status.md). Current highlights:

- Claude Desktop reference: `@ant/desktop` `1.18286.0`.
- Promoted window entries: main, about, buddy, find-in-page, quick.
- Main-process services are present for lifecycle, menus, tray, settings,
  updates, plugin marketplace, workers, preload state, and IPC.
- Renderer shared foundations are substantially promoted.
- The large main-window runtime still has active work remaining before the app
  can be considered behavior-complete.

## Development Notes

`ref/` is generated from the locally installed Claude Desktop app and should be
treated as reference material, not source code. `src/` is the maintained source
tree.

Some modules are still staged in intermediate workspaces while names and module
boundaries are recovered. Those checkpoints are useful for development, but
they are not the public API of the project.

Common commands:

```bash
make inspect       # inspect the current main renderer reference entry
make deobf-plan    # prepare a rename plan for the main renderer runtime
make runtime-map   # apply known runtime export aliases
make quality       # run readability and restoration quality gates
```

## Roadmap

- Finish the main-window runtime reconstruction.
- Replace the Buddy BLE stub with real platform behavior.
- Complete renderer-side find-in-page focus, blur, step, and result flows.
- Restore OS-level quick-window shortcuts and dictation lifecycle integration.
- Promote the remaining lifecycle, IPC, and platform modules into `src/`.
- Add packaging and code-signing targets for distributable builds.

## Star History

<a href="https://www.star-history.com/#stvlynn/claude-desktop&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=stvlynn/claude-desktop&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=stvlynn/claude-desktop&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=stvlynn/claude-desktop&type=Date" />
  </picture>
</a>

## Disclaimer

This is an unofficial research project and is not affiliated with Anthropic.

Claude Desktop and the extracted reference artifacts are subject to Anthropic's
licenses, terms, and copyright. Do not redistribute proprietary application
code unless you have the right to do so.
