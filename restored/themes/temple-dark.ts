// Restored from ref/webview/assets/temple-dark-CoqeJMR0.js
// TempleDark chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var templeDarkBg,
  templeDarkColors,
  templeDarkFg,
  templeDarkName,
  templeDarkSettings,
  templeDarkType,
  templeDarkDefault;
once(() => {
  templeDarkBg = "#02120c";
  templeDarkColors = {
    "activityBar.activeBorder": "#e4f222",
    "activityBar.background": "#1d2d0f",
    "activityBarBadge.background": "#e4f222",
    "button.background": "#e4f222",
    "editor.background": "#02120c",
    "editor.foreground": "#c7e6da",
    "editorCursor.foreground": "#e4f222",
    "editorGroupHeader.tabsBackground": "#1d2d0f",
    focusBorder: "#e4f222",
    foreground: "#c7e6da",
    "panel.background": "#1d2d0f",
    "sideBar.background": "#1d2d0f",
    "sideBar.foreground": "#c7e6da",
    "sideBarTitle.foreground": "#c7e6da",
    "textLink.foreground": "#e4f222",
  };
  templeDarkFg = "#c7e6da";
  templeDarkName = "Temple Dark";
  templeDarkSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#394d46",
      },
    },
    {
      scope: [
        "string",
        "constant.other.symbol",
        "entity.name.function",
        "support.function",
        "variable.function",
        "meta.function-call",
      ],
      settings: {
        foreground: "#e4f222",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage",
        "storage.type",
        "storage.modifier",
        "constant.numeric",
        "constant.language.boolean",
      ],
      settings: {
        foreground: "#e4f222",
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
        foreground: "#859419",
      },
    },
    {
      scope: ["keyword.operator", "entity.other.attribute-name"],
      settings: {
        foreground: "#788617",
      },
    },
    {
      scope: [
        "punctuation",
        "punctuation.bracket",
        "punctuation.separator",
        "punctuation.definition.list.begin",
      ],
      settings: {
        foreground: "#4f5e13",
      },
    },
    {
      scope: [
        "variable",
        "variable.other.readwrite",
        "variable.parameter",
        "variable.other.object",
        "variable.language",
        "variable.language.this",
        "variable.language.self",
        "string",
        "string.quoted",
        "variable.other.property",
        "meta.object-literal.key",
        "entity.name.label",
        "meta.annotation",
        "markup.raw",
      ],
      settings: {
        foreground: "#c7e6da",
      },
    },
  ];
  templeDarkType = "dark";
  templeDarkDefault = {
    bg: templeDarkBg,
    colors: templeDarkColors,
    fg: templeDarkFg,
    name: templeDarkName,
    settings: templeDarkSettings,
    type: templeDarkType,
  };
})();
export {
  templeDarkBg as bg,
  templeDarkColors as colors,
  templeDarkDefault as default,
  templeDarkFg,
  templeDarkName as name,
  templeDarkSettings as settings,
  templeDarkType as type,
};
