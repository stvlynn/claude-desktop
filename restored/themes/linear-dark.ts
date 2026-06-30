// Restored from ref/webview/assets/linear-dark-I6n5O-ny.js
// LinearDark chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var linearDarkBg,
  linearDarkColors,
  linearDarkChromeTheme,
  linearDarkFg,
  linearDarkName,
  linearDarkSettings,
  linearDarkDefault;
once(() => {
  linearDarkBg = "#17181d";
  linearDarkColors = {
    "activityBar.activeBorder": "#5e6ad2",
    "activityBar.background": "#080a0f",
    "activityBarBadge.background": "#5e6ad2",
    "button.background": "#5e6ad2",
    "editor.background": "#17181d",
    "editor.foreground": "#e6e9ef",
    "editorCursor.foreground": "#8c97ff",
    "editorGroupHeader.tabsBackground": "#0f1219",
    focusBorder: "#5e6ad2",
    foreground: "#e6e9ef",
    "panel.background": "#0a0c11",
    "sideBar.background": "#080a0f",
    "sideBar.foreground": "#d8dce6",
    "sideBarTitle.foreground": "#f7f8f8",
    "textLink.foreground": "#5e6ad2",
  };
  linearDarkChromeTheme = {
    accent: "#606acc",
    fonts: {
      ui: "Inter",
    },
    ink: "#e3e4e6",
    opaqueWindows: true,
    semanticColors: {
      diffAdded: "#69c967",
      diffRemoved: "#ff7e78",
      skill: "#c2a1ff",
    },
    surface: "#0f0f11",
  };
  linearDarkFg = "#e6e9ef";
  linearDarkName = "Linear Dark";
  linearDarkSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#636b7b",
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
        foreground: "#7ad9c0",
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
        foreground: "#f5c56a",
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
        foreground: "#8c97ff",
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
        foreground: "#73b7ff",
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
        foreground: "#c2a1ff",
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
        foreground: "#b5bccb",
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
        foreground: "#e6e9ef",
      },
    },
  ];
  linearDarkDefault = {
    bg: linearDarkBg,
    colors: linearDarkColors,
    chromeTheme: linearDarkChromeTheme,
    fg: linearDarkFg,
    name: linearDarkName,
    settings: linearDarkSettings,
  };
})();
export {
  linearDarkBg as bg,
  linearDarkChromeTheme as chromeTheme,
  linearDarkColors as colors,
  linearDarkDefault as default,
  linearDarkFg,
  linearDarkName as name,
  linearDarkSettings as settings,
};
