// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

export const themeClassName = "darkTheme";

/**
 * Applies the initial OS color-scheme theme to `document.body.className`.
 *
 * The original bundle ran this inline at the bottom of the main window
 * runtime: it set `document.body.className` to `"darkTheme"` when the
 * `prefers-color-scheme: dark` media query matched, and added a listener
 * to keep the class in sync with system changes.
 */
export function applyInitialTheme(): void {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const updateThemeClass = (matches: boolean) => {
    document.body.className = matches ? themeClassName : "";
  };

  updateThemeClass(darkModeQuery.matches);

  darkModeQuery.addEventListener("change", (event) => {
    updateThemeClass(event.matches);
  });
}
