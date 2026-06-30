// Restored from ref/webview/assets/vercel-light-0e9RLoNq.js
// VercelLight chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var vercelLightBg,
  vercelLightChromeTheme,
  vercelLightColors,
  vercelLightFg,
  vercelLightName,
  vercelLightSettings,
  vercelLightType,
  vercelLightDefault;
once(() => {
  vercelLightBg = "#ffffff";
  vercelLightChromeTheme = {
    accent: "#006aff",
    contrast: 40,
    fonts: {
      code: '"Geist Mono", ui-monospace, "SFMono-Regular"',
      ui: "Geist, Inter",
    },
    ink: "#171717",
    opaqueWindows: true,
    semanticColors: {
      diffAdded: "#28A948",
      diffRemoved: "#EB001D",
      skill: "#A100F8",
    },
    surface: "#ffffff",
  };
  vercelLightColors = {
    "activityBar.activeBorder": "#006aff",
    "activityBar.background": "#ffffff",
    "activityBarBadge.background": "#006aff",
    "button.background": "#006aff",
    "editor.background": "#ffffff",
    "editor.foreground": "#171717",
    "editorCursor.foreground": "#006aff",
    "editorGroupHeader.tabsBackground": "#ffffff",
    focusBorder: "#006aff",
    foreground: "#171717",
    "panel.background": "#ffffff",
    "sideBar.background": "#ffffff",
    "sideBar.foreground": "#666666",
    "sideBarTitle.foreground": "#171717",
    "textLink.foreground": "#006aff",
  };
  vercelLightFg = "#171717";
  vercelLightName = "Vercel Light";
  vercelLightSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#666666",
      },
    },
    {
      scope: [
        "string",
        "string.quoted",
        "constant.other.symbol",
        "entity.other.attribute-name",
      ],
      settings: {
        foreground: "#28A948",
      },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.language.boolean",
        "constant.character.escape",
        "regexp",
        "string.regexp",
      ],
      settings: {
        foreground: "#A100F8",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: "#006aff",
      },
    },
    {
      scope: [
        "entity.name.type",
        "entity.other.inherited-class",
        "support.class",
        "support.type",
      ],
      settings: {
        foreground: "#0059D1",
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "variable.function",
        "meta.function-call",
      ],
      settings: {
        foreground: "#A100F8",
      },
    },
    {
      scope: [
        "keyword.operator",
        "punctuation.accessor",
        "punctuation.definition.tag",
        "punctuation",
        "punctuation.bracket",
        "punctuation.separator",
      ],
      settings: {
        foreground: "#666666",
      },
    },
    {
      scope: [
        "variable",
        "meta.object-literal.key",
        "meta.object.member",
        "meta.property-name",
      ],
      settings: {
        foreground: "#171717",
      },
    },
  ];
  vercelLightType = "light";
  vercelLightDefault = {
    bg: vercelLightBg,
    chromeTheme: vercelLightChromeTheme,
    colors: vercelLightColors,
    fg: vercelLightFg,
    name: vercelLightName,
    settings: vercelLightSettings,
    type: vercelLightType,
  };
})();
export {
  vercelLightBg as bg,
  vercelLightChromeTheme as chromeTheme,
  vercelLightColors as colors,
  vercelLightDefault as default,
  vercelLightFg,
  vercelLightName as name,
  vercelLightSettings as settings,
  vercelLightType as type,
};
