APP ?= Claude
APP_ASAR ?= /Applications/Claude.app/Contents/Resources/app.asar
REF ?= ref
DIST ?= dist
ELECTRON ?= npx -y electron@42.5.1

REFRESH_SKILL := .agents/skills/codex-app-ref-refresh/scripts/refresh-codex-ref.mjs
DEOBF_SKILL := .agents/skills/deobfuscate-javascript/scripts
MAIN_WINDOW_ASSETS := $(REF)/.vite/renderer/main_window/assets
MAIN_WINDOW_ENTRY := $(MAIN_WINDOW_ASSETS)/main-D-xLCUWh.js
MAIN_WINDOW_WS := src/renderer/.deobfuscate-javascript/main-D-xLCUWh

.PHONY: refresh-ref inspect deobf-plan runtime-map typecheck quality dev run build run-ref pack-ref clean

refresh-ref:
	node $(REFRESH_SKILL) --app $(APP) --asar $(APP_ASAR) --target $(REF)

inspect:
	bun $(DEOBF_SKILL)/check-entry.ts --discover --root $(MAIN_WINDOW_ASSETS)
	-bun $(DEOBF_SKILL)/sourcemap-check.ts $(MAIN_WINDOW_ENTRY)

deobf-plan:
	mkdir -p $(MAIN_WINDOW_WS)
	cp $(MAIN_WINDOW_ENTRY) $(MAIN_WINDOW_WS)/original.js
	bun $(DEOBF_SKILL)/extract.ts $(MAIN_WINDOW_WS)/original.js --out $(MAIN_WINDOW_WS)/symbols.json --only-cryptic --min-refs 3 --top 240 --max-same-scope 5 --context-size 300
	bun $(DEOBF_SKILL)/plan.ts $(MAIN_WINDOW_WS)/symbols.json --out-dir $(MAIN_WINDOW_WS)/plan --input $(MAIN_WINDOW_WS)/original.js --batch-size 40

runtime-map:
	bun $(DEOBF_SKILL)/apply.ts $(MAIN_WINDOW_WS)/original.js $(MAIN_WINDOW_WS)/renames-runtime-exports.json --out $(MAIN_WINDOW_WS)/runtime-exports-renamed.js

typecheck:
	bun run typecheck

quality:
	bun $(DEOBF_SKILL)/quality-gate.ts src/main src/renderer src/shared/contracts --no-cache

dev:
	bun run dev

run:
	bun run start

build:
	bun run build

run-ref:
	$(ELECTRON) $(REF)

pack-ref:
	mkdir -p $(DIST)
	npx -y @electron/asar pack $(REF) $(DIST)/claude-restored.asar

clean:
	rm -rf $(DIST)
