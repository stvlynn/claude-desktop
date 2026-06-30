// Restored from ref/webview/assets/notion-dark-B-8kQG4D.js
// NotionDark chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var notionDarkBg,
  notionDarkColors,
  notionDarkChromeTheme,
  notionDarkFg,
  notionDarkName,
  notionDarkSettings,
  notionDarkType,
  notionDarkDefault;
once(() => {
  notionDarkBg = "#191919";
  notionDarkColors = {
    "activityBar.activeBorder": "#3183d8",
    "activityBar.background": "#151515",
    "activityBarBadge.background": "#3183d8",
    "button.background": "#3183d8",
    "editor.background": "#191919",
    "editor.foreground": "#d9d9d8",
    "editorCursor.foreground": "#3183d8",
    "editorGroupHeader.tabsBackground": "#151515",
    focusBorder: "#3183d8",
    foreground: "#d9d9d8",
    "panel.background": "#151515",
    "sideBar.background": "#151515",
    "sideBar.foreground": "#d9d9d8",
    "sideBarTitle.foreground": "#f7f7f5",
    "textLink.foreground": "#3183d8",
  };
  notionDarkChromeTheme = {
    fonts: {
      code: null,
      ui: null,
    },
    opaqueWindows: true,
  };
  notionDarkFg = "#d9d9d8";
  notionDarkName = "Notion Dark";
  notionDarkSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#6a9955",
      },
    },
    {
      scope: ["string", "string.quoted", "constant.other.symbol"],
      settings: {
        foreground: "#ce9178",
      },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language.boolean",
        "regexp",
        "string.regexp",
      ],
      settings: {
        foreground: "#b5cea8",
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
        foreground: "#569cd6",
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
        foreground: "#4ec9b0",
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
        foreground: "#dcdcaa",
      },
    },
    {
      scope: [
        "keyword.operator",
        "punctuation.accessor",
        "punctuation",
        "punctuation.bracket",
        "punctuation.separator",
      ],
      settings: {
        foreground: "#d4d4d4",
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
        foreground: "#d9d9d8",
      },
    },
  ];
  notionDarkType = "dark";
  notionDarkDefault = {
    bg: notionDarkBg,
    colors: notionDarkColors,
    chromeTheme: notionDarkChromeTheme,
    fg: notionDarkFg,
    name: notionDarkName,
    settings: notionDarkSettings,
    type: notionDarkType,
  };
})();
export {
  notionDarkBg as bg,
  notionDarkChromeTheme as chromeTheme,
  notionDarkColors as colors,
  notionDarkDefault as default,
  notionDarkFg,
  notionDarkName as name,
  notionDarkSettings as settings,
  notionDarkType as type,
};
