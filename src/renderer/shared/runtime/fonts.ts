// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

/**
 * Font families declared by the original main window bundle.
 *
 * The bundle injected an inline `<style>` with `@font-face` rules for these
 * families, loading variable TTF files from the Vite asset directory.
 */
export const claudeFontFamilies = {
  sans: "Anthropic Sans",
  serif: "Anthropic Serif",
} as const;

const FONT_STYLE_ATTRIBUTE = "data-claude-font-faces";

let fontsInjected = false;

function fontFaceUrls(): {
  sansRoman: string;
  sansItalic: string;
  serifRoman: string;
  serifItalic: string;
} {
  // Vite resolves these at build time the same way the reference bundle did.
  return {
    sansRoman: new URL(
      "../assets/fonts/AnthropicSans-Roman-Variable-DCEzLfgm.ttf",
      import.meta.url,
    ).href,
    sansItalic: new URL(
      "../assets/fonts/AnthropicSans-Italic-Variable-Dqj5mHDM.ttf",
      import.meta.url,
    ).href,
    serifRoman: new URL(
      "../assets/fonts/AnthropicSerif-Roman-Variable-D05ngSTe.ttf",
      import.meta.url,
    ).href,
    serifItalic: new URL(
      "../assets/fonts/AnthropicSerif-Italic-Variable-B9Ik5ODi.ttf",
      import.meta.url,
    ).href,
  };
}

/**
 * Inject `@font-face` rules for Anthropic Sans/Serif variable fonts.
 * Matches the reference main-window runtime side effect (once per document).
 */
export function injectClaudeFontFaces(): void {
  if (typeof document === "undefined" || fontsInjected) {
    return;
  }
  if (document.head.querySelector(`style[${FONT_STYLE_ATTRIBUTE}]`)) {
    fontsInjected = true;
    return;
  }

  const urls = fontFaceUrls();
  const style = document.createElement("style");
  style.setAttribute(FONT_STYLE_ATTRIBUTE, "");
  style.textContent = `
@font-face {
    font-family: 'Anthropic Sans';
    src: url('${urls.sansRoman}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Sans';
    src: url('${urls.sansItalic}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${urls.serifRoman}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${urls.serifItalic}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}
`;
  document.head.appendChild(style);
  fontsInjected = true;
}

/**
 * Public bootstrap hook used by the main-window entry. Historically named for
 * preload links; the reference only injects `@font-face` CSS, so this delegates
 * to {@link injectClaudeFontFaces}.
 */
export function injectFontPreloadLinks(): void {
  injectClaudeFontFaces();
}

/** Test helper — clears the one-shot injection guard. */
export function resetClaudeFontInjectionForTests(): void {
  fontsInjected = false;
  if (typeof document === "undefined") {
    return;
  }
  for (const node of Array.from(
    document.head.querySelectorAll(`style[${FONT_STYLE_ATTRIBUTE}]`),
  )) {
    node.parentNode?.removeChild(node);
  }
}
