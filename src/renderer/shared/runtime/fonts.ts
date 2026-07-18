// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

/**
 * Font families declared by the original main window bundle.
 *
 * The bundle injected an inline `<style>` with `@font-face` rules for these
 * families, loading variable TTF files from the Vite asset directory:
 *
 *   - ref/.vite/renderer/main_window/assets/AnthropicSans-Roman-Variable-DCEzLfgm.ttf
 *   - ref/.vite/renderer/main_window/assets/AnthropicSans-Italic-Variable-Dqj5mHDM.ttf
 *   - ref/.vite/renderer/main_window/assets/AnthropicSerif-Roman-Variable-D05ngSTe.ttf
 *   - ref/.vite/renderer/main_window/assets/AnthropicSerif-Italic-Variable-B9Ik5ODi.ttf
 */
export const claudeFontFamilies = {
  sans: "Anthropic Sans",
  serif: "Anthropic Serif",
} as const;

/**
 * Placeholder for font preloading.
 *
 * The original bundle did not emit `<link rel="preload">` tags for the font
 * files; it only injected `@font-face` rules via a generated `<style>` block.
 * For `src/` builds we will load these fonts via CSS later, so this helper is
 * intentionally a no-op for now.
 */
export function injectFontPreloadLinks(): void {
  // TODO: wire font preloading once the `src/` build has a stable asset path
  // for the variable TTF files listed above.
}
