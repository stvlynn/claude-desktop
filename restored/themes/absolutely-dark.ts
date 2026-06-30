// Restored from ref/webview/assets/absolutely-dark-Cq3gv8mI.js
// AbsolutelyDark chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var absolutelyDarkBg,
  absolutelyDarkColors,
  absolutelyDarkFg,
  absolutelyDarkName,
  absolutelyDarkSettings,
  absolutelyDarkType,
  absolutelyDarkDefault;
once(() => {
  absolutelyDarkBg = "#2d2d2b";
  absolutelyDarkColors = {
    "activityBar.activeBorder": "#cc7d5e",
    "activityBar.background": "#373735",
    "activityBarBadge.background": "#cc7d5e",
    "button.background": "#cc7d5e",
    "editor.background": "#2d2d2b",
    "editor.foreground": "#f9f9f7",
    "editorCursor.foreground": "#cc7d5e",
    "editorGroupHeader.tabsBackground": "#373735",
    focusBorder: "#cc7d5e",
    foreground: "#f9f9f7",
    "panel.background": "#373735",
    "sideBar.background": "#373735",
    "sideBar.foreground": "#f9f9f7",
    "sideBarTitle.foreground": "#f9f9f7",
    "textLink.foreground": "#cc7d5e",
  };
  absolutelyDarkFg = "#f9f9f7";
  absolutelyDarkName = "Absolutely Dark";
  absolutelyDarkSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#b2b2b0",
      },
    },
    {
      scope: ["string", "constant.other.symbol"],
      settings: {
        foreground: "#00c853",
      },
    },
    {
      scope: ["constant.numeric", "constant.language.boolean"],
      settings: {
        foreground: "#ff5f38",
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
        foreground: "#ff5f38",
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
        foreground: "#d28e73",
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
        foreground: "#f9f9f7",
      },
    },
  ];
  absolutelyDarkType = "dark";
  absolutelyDarkDefault = {
    bg: absolutelyDarkBg,
    colors: absolutelyDarkColors,
    fg: absolutelyDarkFg,
    name: absolutelyDarkName,
    settings: absolutelyDarkSettings,
    type: absolutelyDarkType,
  };
})();
export {
  absolutelyDarkBg as bg,
  absolutelyDarkColors as colors,
  absolutelyDarkDefault as default,
  absolutelyDarkFg,
  absolutelyDarkName as name,
  absolutelyDarkSettings as settings,
  absolutelyDarkType as type,
};
