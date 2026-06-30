// Restored from ref/webview/assets/notion-light-Bp4sCMqR.js
// NotionLight chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var notionLightBg,
  notionLightColors,
  notionLightChromeTheme,
  notionLightFg,
  notionLightName,
  notionLightSettings,
  notionLightType,
  notionLightDefault;
once(() => {
  notionLightBg = "#ffffff";
  notionLightColors = {
    "activityBar.activeBorder": "#3183d8",
    "activityBar.background": "#f7f6f3",
    "activityBarBadge.background": "#3183d8",
    "button.background": "#3183d8",
    "editor.background": "#ffffff",
    "editor.foreground": "#37352f",
    "editorCursor.foreground": "#3183d8",
    "editorGroupHeader.tabsBackground": "#f7f6f3",
    focusBorder: "#3183d8",
    foreground: "#37352f",
    "panel.background": "#f7f6f3",
    "sideBar.background": "#f7f6f3",
    "sideBar.foreground": "#4f4b45",
    "sideBarTitle.foreground": "#37352f",
    "textLink.foreground": "#3183d8",
  };
  notionLightChromeTheme = {
    fonts: {
      code: null,
      ui: null,
    },
    opaqueWindows: true,
  };
  notionLightFg = "#37352f";
  notionLightName = "Notion Light";
  notionLightSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#008000",
      },
    },
    {
      scope: ["string", "string.quoted", "constant.other.symbol"],
      settings: {
        foreground: "#a31515",
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
        foreground: "#098658",
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
        foreground: "#0000ff",
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
        foreground: "#267f99",
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
        foreground: "#795e26",
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
        foreground: "#37352f",
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
        foreground: "#37352f",
      },
    },
  ];
  notionLightType = "light";
  notionLightDefault = {
    bg: notionLightBg,
    colors: notionLightColors,
    chromeTheme: notionLightChromeTheme,
    fg: notionLightFg,
    name: notionLightName,
    settings: notionLightSettings,
    type: notionLightType,
  };
})();
export {
  notionLightBg as bg,
  notionLightChromeTheme as chromeTheme,
  notionLightColors as colors,
  notionLightDefault as default,
  notionLightFg,
  notionLightName as name,
  notionLightSettings as settings,
  notionLightType as type,
};
