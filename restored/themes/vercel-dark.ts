// Restored from ref/webview/assets/vercel-dark-C7bSklK9.js
// VercelDark chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var vercelDarkBg,
  vercelDarkChromeTheme,
  vercelDarkColors,
  vercelDarkFg,
  vercelDarkName,
  vercelDarkSettings,
  vercelDarkDefault;
once(() => {
  vercelDarkBg = "#000000";
  vercelDarkChromeTheme = {
    accent: "#006efe",
    contrast: 50,
    fonts: {
      code: '"Geist Mono", ui-monospace, "SFMono-Regular"',
      ui: "Geist, Inter",
    },
    ink: "#ededed",
    opaqueWindows: true,
    semanticColors: {
      diffAdded: "#00AD3A",
      diffRemoved: "#F13342",
      skill: "#9540D5",
    },
    surface: "#000000",
  };
  vercelDarkColors = {
    "activityBar.activeBorder": "#006efe",
    "activityBar.background": "#000000",
    "activityBarBadge.background": "#006efe",
    "button.background": "#006efe",
    "editor.background": "#000000",
    "editor.foreground": "#ededed",
    "editorCursor.foreground": "#006efe",
    "editorGroupHeader.tabsBackground": "#000000",
    focusBorder: "#006efe",
    foreground: "#ededed",
    "panel.background": "#000000",
    "sideBar.background": "#000000",
    "sideBar.foreground": "#a1a1a1",
    "sideBarTitle.foreground": "#ededed",
    "textLink.foreground": "#006efe",
  };
  vercelDarkFg = "#ededed";
  vercelDarkName = "Vercel Dark";
  vercelDarkSettings = [
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
        foreground: "#00AD3A",
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
        foreground: "#9540D5",
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
        foreground: "#006efe",
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
        foreground: "#52A8FF",
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
        foreground: "#9540D5",
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
        foreground: "#a1a1a1",
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
        foreground: "#ededed",
      },
    },
  ];
  vercelDarkDefault = {
    bg: vercelDarkBg,
    chromeTheme: vercelDarkChromeTheme,
    colors: vercelDarkColors,
    fg: vercelDarkFg,
    name: vercelDarkName,
    settings: vercelDarkSettings,
  };
})();
export {
  vercelDarkBg as bg,
  vercelDarkChromeTheme as chromeTheme,
  vercelDarkColors as colors,
  vercelDarkDefault as default,
  vercelDarkFg,
  vercelDarkName as name,
  vercelDarkSettings as settings,
};
