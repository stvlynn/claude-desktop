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

.PHONY: refresh-ref inspect deobf-plan runtime-map typecheck quality dev pack build clean

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
	bun $(DEOBF_SKILL)/quality-gate.ts src/main/application/restore-manifest.ts src/main/domain/application-bundle.ts src/main/domain/restoration-frontier.ts src/main/infrastructure/extracted-bundle-layout.ts src/main/interfaces/preload-global-contracts.ts src/renderer/pages/about-window/page.tsx src/renderer/pages/buddy-window/page.tsx src/renderer/pages/find-in-page/page.tsx src/renderer/pages/main-window/page.tsx src/renderer/pages/quick-window/page.tsx src/renderer/shared/api/claude-desktop-api.ts src/renderer/shared/ui/button.tsx src/renderer/shared/lib/class-names.ts src/renderer/shared/icons/claude-logo.tsx src/renderer/shared/icons/find-in-page-icons.tsx src/renderer/shared/icons/warning-circle-icon.tsx src/renderer/shared/i18n/formatted-message.tsx src/renderer/shared/runtime/main-window-runtime.ts src/shared/contracts/window-entry.ts

dev:
	$(ELECTRON) $(REF)

pack:
	mkdir -p $(DIST)
	npx -y @electron/asar pack $(REF) $(DIST)/claude-restored.asar

build: pack

clean:
	rm -rf $(DIST)
