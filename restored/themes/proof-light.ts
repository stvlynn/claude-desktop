// Restored from ref/webview/assets/proof-light-BjtqAd4d.js
// ProofLight chunk restored from the Codex webview bundle.
import { once } from "../runtime/commonjs-interop";
var proofLightBg,
  proofLightColors,
  proofLightChromeTheme,
  proofLightFg,
  proofLightName,
  proofLightSettings,
  proofLightType,
  proofLightDefault;
once(() => {
  proofLightBg = "#f5f3ed";
  proofLightColors = {
    "activityBar.activeBorder": "#3d755d",
    "activityBar.background": "#efede6",
    "activityBarBadge.background": "#3d755d",
    "button.background": "#3d755d",
    "editor.background": "#f5f3ed",
    "editor.foreground": "#2f312d",
    "editorCursor.foreground": "#3d755d",
    "editorGroupHeader.tabsBackground": "#efede6",
    focusBorder: "#3d755d",
    foreground: "#2f312d",
    "panel.background": "#efede6",
    "sideBar.background": "#efede6",
    "sideBar.foreground": "#4b4d48",
    "sideBarTitle.foreground": "#2f312d",
    "textLink.foreground": "#3d755d",
  };
  proofLightChromeTheme = {
    fonts: {
      code: null,
      ui: null,
    },
    opaqueWindows: false,
  };
  proofLightFg = "#2f312d";
  proofLightName = "Proof Light";
  proofLightSettings = [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#8b877c",
      },
    },
    {
      scope: ["string", "string.quoted", "constant.other.symbol"],
      settings: {
        foreground: "#3d755d",
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
        foreground: "#d3b45b",
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
        foreground: "#5f6ac2",
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
        foreground: "#5f6ac2",
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
        foreground: "#3d755d",
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
        foreground: "#7a766d",
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
        foreground: "#2f312d",
      },
    },
  ];
  proofLightType = "light";
  proofLightDefault = {
    bg: proofLightBg,
    colors: proofLightColors,
    chromeTheme: proofLightChromeTheme,
    fg: proofLightFg,
    name: proofLightName,
    settings: proofLightSettings,
    type: proofLightType,
  };
})();
export {
  proofLightBg as bg,
  proofLightChromeTheme as chromeTheme,
  proofLightColors as colors,
  proofLightDefault as default,
  proofLightFg,
  proofLightName as name,
  proofLightSettings as settings,
  proofLightType as type,
};
