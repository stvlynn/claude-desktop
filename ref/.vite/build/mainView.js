"use strict";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "259c3fc2a647e4222ca15e99bba9b2649f31f051" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "f9883728-b34f-4103-af42-006b2dd202ec"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f9883728-b34f-4103-af42-006b2dd202ec"));
  })();
} catch {}
const t = require("electron"),
  u = require("electron/renderer");
function A() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return !!(
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    ((e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "https://claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://claude.com" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.com" ||
      e.hostname === "localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "app://localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin
      ).endsWith(".ant.dev"))
  );
}
function je() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return (
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    (e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "app://localhost"
  );
}
const ir = {
    getAppConfig() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppConfig_$_getAppConfig",
      );
    },
    setAppFeature(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppConfig_$_setAppFeature",
        e,
        r,
      );
    },
    setIsUsingBuiltInNodeForMcp(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppConfig_$_setIsUsingBuiltInNodeForMcp",
        e,
      );
    },
    setIsDxtAutoUpdatesEnabled(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppConfig_$_setIsDxtAutoUpdatesEnabled",
        e,
      );
    },
  },
  cr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].AppConfig = ir));
  },
  _r = {
    isStartupOnLoginEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Startup_$_isStartupOnLoginEnabled",
      );
    },
    setStartupOnLoginEnabled(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Startup_$_setStartupOnLoginEnabled",
        e,
      );
    },
    isMenuBarEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Startup_$_isMenuBarEnabled",
      );
    },
    setMenuBarEnabled(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Startup_$_setMenuBarEnabled",
        e,
      );
    },
  },
  or = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].Startup = _r));
  },
  dr = {
    setGlobalShortcut(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_GlobalShortcut_$_setGlobalShortcut",
        e,
      );
    },
    getGlobalShortcut() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_GlobalShortcut_$_getGlobalShortcut",
      );
    },
    onGlobalShortcutChange(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_GlobalShortcut_$_globalShortcutChange",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_GlobalShortcut_$_globalShortcutChange",
            r,
          );
        }
      );
    },
  },
  ur = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].GlobalShortcut = dr));
  },
  $r = {
    isLocalDevMcpEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_isLocalDevMcpEnabled",
      );
    },
    setMcpServerConfigs(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_setMcpServerConfigs",
        e,
      );
    },
    getMcpServersConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_getMcpServersConfig",
        e,
      );
    },
    getMcpServersConfigWithStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_getMcpServersConfigWithStatus",
      );
    },
    revealConfig() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_revealConfig",
      );
    },
    revealLogs() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_revealLogs",
      );
    },
    revealServerLog(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_revealServerLog",
        e,
      );
    },
    onMcpConfigChange(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_mcpConfigChange",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_mcpConfigChange",
            r,
          );
        }
      );
    },
    onMcpStatusChanged(e) {
      const r = (n, a, s, i) => e(a, s, i);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_mcpStatusChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_mcpStatusChanged",
            r,
          );
        }
      );
    },
    onRevealMcpServerSettingsRequested(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_revealMcpServerSettingsRequested",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_MCP_$_revealMcpServerSettingsRequested",
            r,
          );
        }
      );
    },
  },
  lr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].MCP = $r));
  },
  pr = {
    isExtensionsEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_isExtensionsEnabled",
      );
    },
    isDirectoryEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_isDirectoryEnabled",
      );
    },
    isDesktopExtensionSignatureRequired() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_isDesktopExtensionSignatureRequired",
      );
    },
    isDesktopExtensionDirectoryEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_isDesktopExtensionDirectoryEnabled",
      );
    },
    getInstalledExtensionsWithState() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getInstalledExtensionsWithState",
      );
    },
    getIsUpdateAvailable(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getIsUpdateAvailable",
        e,
        r,
      );
    },
    getManifestCompatibilityResult(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getManifestCompatibilityResult",
        e,
      );
    },
    getAvailableExtensionRuntimes() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getAvailableExtensionRuntimes",
      );
    },
    getExtensionSettings(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getExtensionSettings",
        e,
      );
    },
    setExtensionSettings(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_setExtensionSettings",
        e,
        r,
      );
    },
    installDxt(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_installDxt",
        e,
        r,
      );
    },
    installDxtUnpacked(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_installDxtUnpacked",
        e,
      );
    },
    installDxtFromDirectory(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_installDxtFromDirectory",
        e,
        r,
      );
    },
    handleDxtFile(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_handleDxtFile",
        e,
      );
    },
    showInstallDxtDialog() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_showInstallDxtDialog",
      );
    },
    deleteExtension(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_deleteExtension",
        e,
      );
    },
    showExtensionInFolder(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_showExtensionInFolder",
        e,
      );
    },
    openExtensionsFolder() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_openExtensionsFolder",
      );
    },
    openExtensionSettingsFolder() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_openExtensionSettingsFolder",
      );
    },
    getDirectoryUrl() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getDirectoryUrl",
      );
    },
    getExtension(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getExtension",
        e,
      );
    },
    getExtensions(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getExtensions",
        e,
      );
    },
    getExtensionVersion(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getExtensionVersion",
        e,
      );
    },
    getExtensionVersions(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_getExtensionVersions",
        e,
      );
    },
    onExtensionsChanged(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_extensionsChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_extensionsChanged",
            r,
          );
        }
      );
    },
    onExtensionSettingsChanged(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_extensionSettingsChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_extensionSettingsChanged",
            r,
          );
        }
      );
    },
    onPreviewExtensionInstallation(e) {
      const r = (n, a, s, i, c) => e(a, s, i, c);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_previewExtensionInstallation",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_previewExtensionInstallation",
            r,
          );
        }
      );
    },
    installExtensionFromPreview(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_installExtensionFromPreview",
        e,
        r,
      );
    },
    refreshAllowlistCheck() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_refreshAllowlistCheck",
      );
    },
    onExtensionDownloadProgress(e) {
      const r = (n, a, s, i, c, _, l) => e(a, s, i, c, _, l);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_extensionDownloadProgress",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Extensions_$_extensionDownloadProgress",
            r,
          );
        }
      );
    },
  },
  gr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].Extensions = pr));
  },
  mr = {
    getDirectoryPath(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_FilePickers_$_getDirectoryPath",
        e,
      );
    },
    getFilePath(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_FilePickers_$_getFilePath",
        e,
      );
    },
  },
  hr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].FilePickers = mr));
  },
  vr = {
    getPreferences() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppPreferences_$_getPreferences",
      );
    },
    setPreference(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppPreferences_$_setPreference",
        e,
        r,
      );
    },
    onPreferencesChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppPreferences_$_preferencesChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppPreferences_$_preferencesChanged",
            r,
          );
        }
      );
    },
  },
  fr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].AppPreferences = vr));
  },
  wr = {
    getSupportedFeatures() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_AppFeatures_$_getSupportedFeatures",
      );
    },
  },
  br = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].AppFeatures = wr));
  },
  kr = {
    getSystemInfo() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_DesktopInfo_$_getSystemInfo",
      );
    },
    showLogsInFileManager() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_DesktopInfo_$_showLogsInFileManager",
      );
    },
  },
  Sr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].DesktopInfo = kr));
  },
  Rr = {
    exportConfig(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_exportConfig",
        e,
        r,
      );
    },
    relaunchApp() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_relaunchApp",
      );
    },
    probeEgressHosts(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_probeEgressHosts",
        e,
      );
    },
    scanOrgPlugins() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_scanOrgPlugins",
      );
    },
    probeMcpServer(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_probeMcpServer",
        e,
      );
    },
    authorizeAndProbeMcpServer(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_authorizeAndProbeMcpServer",
        e,
      );
    },
    forgetMcpOAuth(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_forgetMcpOAuth",
        e,
      );
    },
    getLoginDesktop3pStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_getLoginDesktop3pStatus",
      );
    },
    getConfigHealth() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_getConfigHealth",
      );
    },
    recheckConfigHealth() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_recheckConfigHealth",
      );
    },
    setDeploymentMode(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_setDeploymentMode",
        e,
      );
    },
    openSetupWindow() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_openSetupWindow",
      );
    },
    signInWithAnthropicApi() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_signInWithAnthropicApi",
      );
    },
    applyAnthropicApiShortcut() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_applyAnthropicApiShortcut",
      );
    },
    openDeviceCodeWindowForE2e() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_openDeviceCodeWindowForE2e",
      );
    },
    listConfigs() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_listConfigs",
      );
    },
    readConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_readConfig",
        e,
      );
    },
    writeConfig(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_writeConfig",
        e,
        r,
      );
    },
    createConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_createConfig",
        e,
      );
    },
    duplicateConfig(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_duplicateConfig",
        e,
        r,
      );
    },
    renameConfig(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_renameConfig",
        e,
        r,
      );
    },
    deleteConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_deleteConfig",
        e,
      );
    },
    setAppliedConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_setAppliedConfig",
        e,
      );
    },
    revealConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_revealConfig",
        e,
      );
    },
    triggerBootstrapAuth(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_triggerBootstrapAuth",
        e,
      );
    },
    bootstrapStateStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  yr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].Custom3pSetup = Rr));
  },
  Cr = {
    runCredentialHelper(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pHelperRun_$_runCredentialHelper",
        e,
        r,
        n,
      );
    },
    probeInference(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pHelperRun_$_probeInference",
        e,
      );
    },
    discoverModels(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pHelperRun_$_discoverModels",
        e,
      );
    },
    onProbeDeviceCode(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pHelperRun_$_probeDeviceCode",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_Custom3pHelperRun_$_probeDeviceCode",
            r,
          );
        }
      );
    },
  },
  Ar = (e) => {
    je() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].Custom3pHelperRun = Cr));
  },
  Lr = {
    isAvailable() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_isAvailable",
      );
    },
    getAuthState() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_getAuthState",
      );
    },
    startAuth() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_startAuth",
      );
    },
    reopenAuthTab() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_reopenAuthTab",
      );
    },
    clearAuth() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_clearAuth",
      );
    },
    runImport() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_runImport",
      );
    },
    onOnAuthUserCode(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_onAuthUserCode",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_onAuthUserCode",
            r,
          );
        }
      );
    },
    onOnAuthStateChange(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_onAuthStateChange",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_ClaudeAiImport_$_onAuthStateChange",
            r,
          );
        }
      );
    },
  },
  Pr = (e) => {
    je() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].ClaudeAiImport = Lr));
  },
  xr = {
    submitAction(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_SupportBundle_$_submitAction",
        e,
      );
    },
    supportBundleStateStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  Mr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].SupportBundle = xr));
  },
  Fr = {
    getStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_WakeScheduler_$_getStatus",
      );
    },
    openSettings() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.settings_$_WakeScheduler_$_openSettings",
      );
    },
  },
  Tr = (e) => {
    A() &&
      ((e["claude.settings"] = e["claude.settings"] || {}),
      (e["claude.settings"].WakeScheduler = Fr));
  },
  y = {};
cr(y);
or(y);
ur(y);
lr(y);
gr(y);
hr(y);
fr(y);
br(y);
Sr(y);
yr(y);
Ar(y);
Pr(y);
Mr(y);
Tr(y);
for (const [e, r] of Object.entries(y)) t.contextBridge.exposeInMainWorld(e, r);
function Er() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return !!(
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    ((e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "https://claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://claude.com" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.com" ||
      e.hostname === "localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "app://localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin
      ).endsWith(".ant.dev"))
  );
}
const Dr = {
    attach(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_attach",
        e,
        r,
        n,
      );
    },
    detach(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_detach",
        e,
      );
    },
    listDevices(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_listDevices",
        e,
      );
    },
    installAndLaunch(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_installAndLaunch",
        e,
      );
    },
    gesture(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_gesture",
        e,
        r,
      );
    },
    attachmentStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_attachment_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_attachment_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_attachment_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.simulator_$_Simulator_$_attachment_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  Ir = (e) => {
    Er() &&
      ((e["claude.simulator"] = e["claude.simulator"] || {}),
      (e["claude.simulator"].Simulator = Dr));
  },
  He = {};
Ir(He);
for (const [e, r] of Object.entries(He))
  t.contextBridge.exposeInMainWorld(e, r);
function Or() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return !!(
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    ((e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "https://claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://claude.com" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.com" ||
      e.hostname === "localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "app://localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin
      ).endsWith(".ant.dev"))
  );
}
const Nr = {
    onPreviewSkillFile(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.skills_$_Skills_$_previewSkillFile",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.skills_$_Skills_$_previewSkillFile",
            r,
          );
        }
      );
    },
  },
  Wr = (e) => {
    Or() &&
      ((e["claude.skills"] = e["claude.skills"] || {}),
      (e["claude.skills"].Skills = Nr));
  },
  Be = {};
Wr(Be);
for (const [e, r] of Object.entries(Be))
  t.contextBridge.exposeInMainWorld(e, r);
function Ur() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return (
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    ((e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "https://claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://claude.com" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.com" ||
      e.hostname === "localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "app://localhost")
  );
}
const Vr = {
    getConnectedFiles(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_getConnectedFiles",
        e,
      );
    },
    isFeatureEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_isFeatureEnabled",
      );
    },
    focusFile(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_focusFile",
        e,
      );
    },
    selectFile(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_selectFile",
        e,
      );
    },
    onOnFileStateChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onFileStateChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onFileStateChanged",
            r,
          );
        }
      );
    },
    onOnFileAdded(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onFileAdded",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onFileAdded",
            r,
          );
        }
      );
    },
    onOnFileRemoved(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onFileRemoved",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onFileRemoved",
            r,
          );
        }
      );
    },
    updateActiveConversationSummary(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_updateActiveConversationSummary",
        e,
      );
    },
    onOnAddinNeedsContext(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onAddinNeedsContext",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_onAddinNeedsContext",
            r,
          );
        }
      );
    },
    connectedFilesStateStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_connectedFilesState_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_connectedFilesState_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_connectedFilesState_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.officeAddin_$_OfficeAddinFiles_$_connectedFilesState_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  Zr = (e) => {
    Ur() &&
      ((e["claude.officeAddin"] = e["claude.officeAddin"] || {}),
      (e["claude.officeAddin"].OfficeAddinFiles = Vr));
  },
  ze = {};
Zr(ze);
for (const [e, r] of Object.entries(ze))
  t.contextBridge.exposeInMainWorld(e, r);
var Ge = ((e) => ((e.cmdK = "cmdK"), (e.googleAuthCode = "googleAuthCode"), e))(
  Ge || {},
);
const be = (e) => {
    if (!Object.values(Ge).includes(e))
      throw new Error(`unsupported Claude App binding: "${e}"`);
  },
  ke = "framebuffer:port";
var k;
(function (e) {
  e.assertEqual = (s) => {};
  function r(s) {}
  e.assertIs = r;
  function n(s) {
    throw new Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (s) => {
      const i = {};
      for (const c of s) i[c] = c;
      return i;
    }),
    (e.getValidEnumValues = (s) => {
      const i = e.objectKeys(s).filter((_) => typeof s[s[_]] != "number"),
        c = {};
      for (const _ of i) c[_] = s[_];
      return e.objectValues(c);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (i) {
        return s[i];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const i = [];
            for (const c in s)
              Object.prototype.hasOwnProperty.call(s, c) && i.push(c);
            return i;
          }),
    (e.find = (s, i) => {
      for (const c of s) if (i(c)) return c;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) =>
            typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s));
  function a(s, i = " | ") {
    return s.map((c) => (typeof c == "string" ? `'${c}'` : c)).join(i);
  }
  ((e.joinValues = a),
    (e.jsonStringifyReplacer = (s, i) =>
      typeof i == "bigint" ? i.toString() : i));
})(k || (k = {}));
var Se;
(function (e) {
  e.mergeShapes = (r, n) => ({ ...r, ...n });
})(Se || (Se = {}));
const $ = k.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  M = (e) => {
    switch (typeof e) {
      case "undefined":
        return $.undefined;
      case "string":
        return $.string;
      case "number":
        return Number.isNaN(e) ? $.nan : $.number;
      case "boolean":
        return $.boolean;
      case "function":
        return $.function;
      case "bigint":
        return $.bigint;
      case "symbol":
        return $.symbol;
      case "object":
        return Array.isArray(e)
          ? $.array
          : e === null
            ? $.null
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? $.promise
              : typeof Map < "u" && e instanceof Map
                ? $.map
                : typeof Set < "u" && e instanceof Set
                  ? $.set
                  : typeof Date < "u" && e instanceof Date
                    ? $.date
                    : $.object;
      default:
        return $.unknown;
    }
  },
  o = k.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class x extends Error {
  get errors() {
    return this.issues;
  }
  constructor(r) {
    (super(),
      (this.issues = []),
      (this.addIssue = (a) => {
        this.issues = [...this.issues, a];
      }),
      (this.addIssues = (a = []) => {
        this.issues = [...this.issues, ...a];
      }));
    const n = new.target.prototype;
    (Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = r));
  }
  format(r) {
    const n =
        r ||
        function (i) {
          return i.message;
        },
      a = { _errors: [] },
      s = (i) => {
        for (const c of i.issues)
          if (c.code === "invalid_union") c.unionErrors.map(s);
          else if (c.code === "invalid_return_type") s(c.returnTypeError);
          else if (c.code === "invalid_arguments") s(c.argumentsError);
          else if (c.path.length === 0) a._errors.push(n(c));
          else {
            let _ = a,
              l = 0;
            for (; l < c.path.length;) {
              const g = c.path[l];
              (l === c.path.length - 1
                ? ((_[g] = _[g] || { _errors: [] }), _[g]._errors.push(n(c)))
                : (_[g] = _[g] || { _errors: [] }),
                (_ = _[g]),
                l++);
            }
          }
      };
    return (s(this), a);
  }
  static assert(r) {
    if (!(r instanceof x)) throw new Error(`Not a ZodError: ${r}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, k.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(r = (n) => n.message) {
    const n = {},
      a = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const i = s.path[0];
        ((n[i] = n[i] || []), n[i].push(r(s)));
      } else a.push(r(s));
    return { formErrors: a, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
x.create = (e) => new x(e);
const $e = (e, r) => {
  let n;
  switch (e.code) {
    case o.invalid_type:
      e.received === $.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case o.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, k.jsonStringifyReplacer)}`;
      break;
    case o.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${k.joinValues(e.keys, ", ")}`;
      break;
    case o.invalid_union:
      n = "Invalid input";
      break;
    case o.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${k.joinValues(e.options)}`;
      break;
    case o.invalid_enum_value:
      n = `Invalid enum value. Expected ${k.joinValues(e.options)}, received '${e.received}'`;
      break;
    case o.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case o.invalid_return_type:
      n = "Invalid function return type";
      break;
    case o.invalid_date:
      n = "Invalid date";
      break;
    case o.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
            ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
            : "endsWith" in e.validation
              ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
              : k.assertNever(e.validation)
        : e.validation !== "regex"
          ? (n = `Invalid ${e.validation}`)
          : (n = "Invalid");
      break;
    case o.too_small:
      e.type === "array"
        ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
        : e.type === "string"
          ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
          : e.type === "number"
            ? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
            : e.type === "bigint"
              ? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
              : e.type === "date"
                ? (n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
                : (n = "Invalid input");
      break;
    case o.too_big:
      e.type === "array"
        ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
        : e.type === "string"
          ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
          : e.type === "number"
            ? (n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
            : e.type === "bigint"
              ? (n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
              : e.type === "date"
                ? (n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
                : (n = "Invalid input");
      break;
    case o.custom:
      n = "Invalid input";
      break;
    case o.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case o.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case o.not_finite:
      n = "Number must be finite";
      break;
    default:
      ((n = r.defaultError), k.assertNever(e));
  }
  return { message: n };
};
let jr = $e;
function Hr() {
  return jr;
}
const Br = (e) => {
  const { data: r, path: n, errorMaps: a, issueData: s } = e,
    i = [...n, ...(s.path || [])],
    c = { ...s, path: i };
  if (s.message !== void 0) return { ...s, path: i, message: s.message };
  let _ = "";
  const l = a
    .filter((g) => !!g)
    .slice()
    .reverse();
  for (const g of l) _ = g(c, { data: r, defaultError: _ }).message;
  return { ...s, path: i, message: _ };
};
function d(e, r) {
  const n = Hr(),
    a = Br({
      issueData: r,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === $e ? void 0 : $e,
      ].filter((s) => !!s),
    });
  e.common.issues.push(a);
}
class C {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(r, n) {
    const a = [];
    for (const s of n) {
      if (s.status === "aborted") return h;
      (s.status === "dirty" && r.dirty(), a.push(s.value));
    }
    return { status: r.value, value: a };
  }
  static async mergeObjectAsync(r, n) {
    const a = [];
    for (const s of n) {
      const i = await s.key,
        c = await s.value;
      a.push({ key: i, value: c });
    }
    return C.mergeObjectSync(r, a);
  }
  static mergeObjectSync(r, n) {
    const a = {};
    for (const s of n) {
      const { key: i, value: c } = s;
      if (i.status === "aborted" || c.status === "aborted") return h;
      (i.status === "dirty" && r.dirty(),
        c.status === "dirty" && r.dirty(),
        i.value !== "__proto__" &&
          (typeof c.value < "u" || s.alwaysSet) &&
          (a[i.value] = c.value));
    }
    return { status: r.value, value: a };
  }
}
const h = Object.freeze({ status: "aborted" }),
  G = (e) => ({ status: "dirty", value: e }),
  L = (e) => ({ status: "valid", value: e }),
  Re = (e) => e.status === "aborted",
  ye = (e) => e.status === "dirty",
  Z = (e) => e.status === "valid",
  re = (e) => typeof Promise < "u" && e instanceof Promise;
var p;
(function (e) {
  ((e.errToObj = (r) => (typeof r == "string" ? { message: r } : r || {})),
    (e.toString = (r) =>
      typeof r == "string" ? r : r == null ? void 0 : r.message));
})(p || (p = {}));
class I {
  constructor(r, n, a, s) {
    ((this._cachedPath = []),
      (this.parent = r),
      (this.data = n),
      (this._path = a),
      (this._key = s));
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Ce = (e, r) => {
  if (Z(r)) return { success: !0, data: r.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new x(e.common.issues);
      return ((this._error = n), this._error);
    },
  };
};
function w(e) {
  if (!e) return {};
  const {
    errorMap: r,
    invalid_type_error: n,
    required_error: a,
    description: s,
  } = e;
  if (r && (n || a))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return r
    ? { errorMap: r, description: s }
    : {
        errorMap: (c, _) => {
          const { message: l } = e;
          return c.code === "invalid_enum_value"
            ? { message: l ?? _.defaultError }
            : typeof _.data > "u"
              ? { message: l ?? a ?? _.defaultError }
              : c.code !== "invalid_type"
                ? { message: _.defaultError }
                : { message: l ?? n ?? _.defaultError };
        },
        description: s,
      };
}
class b {
  get description() {
    return this._def.description;
  }
  _getType(r) {
    return M(r.data);
  }
  _getOrReturnCtx(r, n) {
    return (
      n || {
        common: r.parent.common,
        data: r.data,
        parsedType: M(r.data),
        schemaErrorMap: this._def.errorMap,
        path: r.path,
        parent: r.parent,
      }
    );
  }
  _processInputParams(r) {
    return {
      status: new C(),
      ctx: {
        common: r.parent.common,
        data: r.data,
        parsedType: M(r.data),
        schemaErrorMap: this._def.errorMap,
        path: r.path,
        parent: r.parent,
      },
    };
  }
  _parseSync(r) {
    const n = this._parse(r);
    if (re(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(r) {
    const n = this._parse(r);
    return Promise.resolve(n);
  }
  parse(r, n) {
    const a = this.safeParse(r, n);
    if (a.success) return a.data;
    throw a.error;
  }
  safeParse(r, n) {
    const a = {
        common: {
          issues: [],
          async: (n == null ? void 0 : n.async) ?? !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: r,
        parsedType: M(r),
      },
      s = this._parseSync({ data: r, path: a.path, parent: a });
    return Ce(a, s);
  }
  "~validate"(r) {
    var a, s;
    const n = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: r,
      parsedType: M(r),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: r, path: [], parent: n });
        return Z(i) ? { value: i.value } : { issues: n.common.issues };
      } catch (i) {
        ((s =
          (a = i == null ? void 0 : i.message) == null
            ? void 0
            : a.toLowerCase()) != null &&
          s.includes("encountered") &&
          (this["~standard"].async = !0),
          (n.common = { issues: [], async: !0 }));
      }
    return this._parseAsync({ data: r, path: [], parent: n }).then((i) =>
      Z(i) ? { value: i.value } : { issues: n.common.issues },
    );
  }
  async parseAsync(r, n) {
    const a = await this.safeParseAsync(r, n);
    if (a.success) return a.data;
    throw a.error;
  }
  async safeParseAsync(r, n) {
    const a = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: r,
        parsedType: M(r),
      },
      s = this._parse({ data: r, path: a.path, parent: a }),
      i = await (re(s) ? s : Promise.resolve(s));
    return Ce(a, i);
  }
  refine(r, n) {
    const a = (s) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
          ? n(s)
          : n;
    return this._refinement((s, i) => {
      const c = r(s),
        _ = () => i.addIssue({ code: o.custom, ...a(s) });
      return typeof Promise < "u" && c instanceof Promise
        ? c.then((l) => (l ? !0 : (_(), !1)))
        : c
          ? !0
          : (_(), !1);
    });
  }
  refinement(r, n) {
    return this._refinement((a, s) =>
      r(a) ? !0 : (s.addIssue(typeof n == "function" ? n(a, s) : n), !1),
    );
  }
  _refinement(r) {
    return new H({
      schema: this,
      typeName: v.ZodEffects,
      effect: { type: "refinement", refinement: r },
    });
  }
  superRefine(r) {
    return this._refinement(r);
  }
  constructor(r) {
    ((this.spa = this.safeParseAsync),
      (this._def = r),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (n) => this["~validate"](n),
      }));
  }
  optional() {
    return E.create(this, this._def);
  }
  nullable() {
    return B.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return P.create(this);
  }
  promise() {
    return se.create(this, this._def);
  }
  or(r) {
    return ne.create([this, r], this._def);
  }
  and(r) {
    return ae.create(this, r, this._def);
  }
  transform(r) {
    return new H({
      ...w(this._def),
      schema: this,
      typeName: v.ZodEffects,
      effect: { type: "transform", transform: r },
    });
  }
  default(r) {
    const n = typeof r == "function" ? r : () => r;
    return new me({
      ...w(this._def),
      innerType: this,
      defaultValue: n,
      typeName: v.ZodDefault,
    });
  }
  brand() {
    return new pt({ typeName: v.ZodBranded, type: this, ...w(this._def) });
  }
  catch(r) {
    const n = typeof r == "function" ? r : () => r;
    return new he({
      ...w(this._def),
      innerType: this,
      catchValue: n,
      typeName: v.ZodCatch,
    });
  }
  describe(r) {
    const n = this.constructor;
    return new n({ ...this._def, description: r });
  }
  pipe(r) {
    return fe.create(this, r);
  }
  readonly() {
    return ve.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const zr = /^c[^\s-]{8,}$/i,
  Gr = /^[0-9a-z]+$/,
  qr = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Qr =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Jr = /^[a-z0-9_-]{21}$/i,
  Kr = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Yr =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Xr =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  et = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let de;
const rt =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  tt =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  nt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  at =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  st = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  it = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  qe =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  ct = new RegExp(`^${qe}$`);
function Qe(e) {
  let r = "[0-5]\\d";
  e.precision
    ? (r = `${r}\\.\\d{${e.precision}}`)
    : e.precision == null && (r = `${r}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${r})${n}`;
}
function _t(e) {
  return new RegExp(`^${Qe(e)}$`);
}
function ot(e) {
  let r = `${qe}T${Qe(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (r = `${r}(${n.join("|")})`),
    new RegExp(`^${r}$`)
  );
}
function dt(e, r) {
  return !!(
    ((r === "v4" || !r) && rt.test(e)) ||
    ((r === "v6" || !r) && nt.test(e))
  );
}
function ut(e, r) {
  if (!Kr.test(e)) return !1;
  try {
    const [n] = e.split(".");
    if (!n) return !1;
    const a = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      s = JSON.parse(atob(a));
    return !(
      typeof s != "object" ||
      s === null ||
      ("typ" in s && (s == null ? void 0 : s.typ) !== "JWT") ||
      !s.alg ||
      (r && s.alg !== r)
    );
  } catch {
    return !1;
  }
}
function $t(e, r) {
  return !!(
    ((r === "v4" || !r) && tt.test(e)) ||
    ((r === "v6" || !r) && at.test(e))
  );
}
class F extends b {
  _parse(r) {
    if (
      (this._def.coerce && (r.data = String(r.data)),
      this._getType(r) !== $.string)
    ) {
      const i = this._getOrReturnCtx(r);
      return (
        d(i, {
          code: o.invalid_type,
          expected: $.string,
          received: i.parsedType,
        }),
        h
      );
    }
    const a = new C();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        r.data.length < i.value &&
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            code: o.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "max")
        r.data.length > i.value &&
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            code: o.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "length") {
        const c = r.data.length > i.value,
          _ = r.data.length < i.value;
        (c || _) &&
          ((s = this._getOrReturnCtx(r, s)),
          c
            ? d(s, {
                code: o.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : _ &&
              d(s, {
                code: o.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          a.dirty());
      } else if (i.kind === "email")
        Xr.test(r.data) ||
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            validation: "email",
            code: o.invalid_string,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "emoji")
        (de || (de = new RegExp(et, "u")),
          de.test(r.data) ||
            ((s = this._getOrReturnCtx(r, s)),
            d(s, {
              validation: "emoji",
              code: o.invalid_string,
              message: i.message,
            }),
            a.dirty()));
      else if (i.kind === "uuid")
        Qr.test(r.data) ||
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            validation: "uuid",
            code: o.invalid_string,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "nanoid")
        Jr.test(r.data) ||
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            validation: "nanoid",
            code: o.invalid_string,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "cuid")
        zr.test(r.data) ||
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            validation: "cuid",
            code: o.invalid_string,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "cuid2")
        Gr.test(r.data) ||
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            validation: "cuid2",
            code: o.invalid_string,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "ulid")
        qr.test(r.data) ||
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            validation: "ulid",
            code: o.invalid_string,
            message: i.message,
          }),
          a.dirty());
      else if (i.kind === "url")
        try {
          new URL(r.data);
        } catch {
          ((s = this._getOrReturnCtx(r, s)),
            d(s, {
              validation: "url",
              code: o.invalid_string,
              message: i.message,
            }),
            a.dirty());
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(r.data) ||
              ((s = this._getOrReturnCtx(r, s)),
              d(s, {
                validation: "regex",
                code: o.invalid_string,
                message: i.message,
              }),
              a.dirty()))
          : i.kind === "trim"
            ? (r.data = r.data.trim())
            : i.kind === "includes"
              ? r.data.includes(i.value, i.position) ||
                ((s = this._getOrReturnCtx(r, s)),
                d(s, {
                  code: o.invalid_string,
                  validation: { includes: i.value, position: i.position },
                  message: i.message,
                }),
                a.dirty())
              : i.kind === "toLowerCase"
                ? (r.data = r.data.toLowerCase())
                : i.kind === "toUpperCase"
                  ? (r.data = r.data.toUpperCase())
                  : i.kind === "startsWith"
                    ? r.data.startsWith(i.value) ||
                      ((s = this._getOrReturnCtx(r, s)),
                      d(s, {
                        code: o.invalid_string,
                        validation: { startsWith: i.value },
                        message: i.message,
                      }),
                      a.dirty())
                    : i.kind === "endsWith"
                      ? r.data.endsWith(i.value) ||
                        ((s = this._getOrReturnCtx(r, s)),
                        d(s, {
                          code: o.invalid_string,
                          validation: { endsWith: i.value },
                          message: i.message,
                        }),
                        a.dirty())
                      : i.kind === "datetime"
                        ? ot(i).test(r.data) ||
                          ((s = this._getOrReturnCtx(r, s)),
                          d(s, {
                            code: o.invalid_string,
                            validation: "datetime",
                            message: i.message,
                          }),
                          a.dirty())
                        : i.kind === "date"
                          ? ct.test(r.data) ||
                            ((s = this._getOrReturnCtx(r, s)),
                            d(s, {
                              code: o.invalid_string,
                              validation: "date",
                              message: i.message,
                            }),
                            a.dirty())
                          : i.kind === "time"
                            ? _t(i).test(r.data) ||
                              ((s = this._getOrReturnCtx(r, s)),
                              d(s, {
                                code: o.invalid_string,
                                validation: "time",
                                message: i.message,
                              }),
                              a.dirty())
                            : i.kind === "duration"
                              ? Yr.test(r.data) ||
                                ((s = this._getOrReturnCtx(r, s)),
                                d(s, {
                                  validation: "duration",
                                  code: o.invalid_string,
                                  message: i.message,
                                }),
                                a.dirty())
                              : i.kind === "ip"
                                ? dt(r.data, i.version) ||
                                  ((s = this._getOrReturnCtx(r, s)),
                                  d(s, {
                                    validation: "ip",
                                    code: o.invalid_string,
                                    message: i.message,
                                  }),
                                  a.dirty())
                                : i.kind === "jwt"
                                  ? ut(r.data, i.alg) ||
                                    ((s = this._getOrReturnCtx(r, s)),
                                    d(s, {
                                      validation: "jwt",
                                      code: o.invalid_string,
                                      message: i.message,
                                    }),
                                    a.dirty())
                                  : i.kind === "cidr"
                                    ? $t(r.data, i.version) ||
                                      ((s = this._getOrReturnCtx(r, s)),
                                      d(s, {
                                        validation: "cidr",
                                        code: o.invalid_string,
                                        message: i.message,
                                      }),
                                      a.dirty())
                                    : i.kind === "base64"
                                      ? st.test(r.data) ||
                                        ((s = this._getOrReturnCtx(r, s)),
                                        d(s, {
                                          validation: "base64",
                                          code: o.invalid_string,
                                          message: i.message,
                                        }),
                                        a.dirty())
                                      : i.kind === "base64url"
                                        ? it.test(r.data) ||
                                          ((s = this._getOrReturnCtx(r, s)),
                                          d(s, {
                                            validation: "base64url",
                                            code: o.invalid_string,
                                            message: i.message,
                                          }),
                                          a.dirty())
                                        : k.assertNever(i);
    return { status: a.value, value: r.data };
  }
  _regex(r, n, a) {
    return this.refinement((s) => r.test(s), {
      validation: n,
      code: o.invalid_string,
      ...p.errToObj(a),
    });
  }
  _addCheck(r) {
    return new F({ ...this._def, checks: [...this._def.checks, r] });
  }
  email(r) {
    return this._addCheck({ kind: "email", ...p.errToObj(r) });
  }
  url(r) {
    return this._addCheck({ kind: "url", ...p.errToObj(r) });
  }
  emoji(r) {
    return this._addCheck({ kind: "emoji", ...p.errToObj(r) });
  }
  uuid(r) {
    return this._addCheck({ kind: "uuid", ...p.errToObj(r) });
  }
  nanoid(r) {
    return this._addCheck({ kind: "nanoid", ...p.errToObj(r) });
  }
  cuid(r) {
    return this._addCheck({ kind: "cuid", ...p.errToObj(r) });
  }
  cuid2(r) {
    return this._addCheck({ kind: "cuid2", ...p.errToObj(r) });
  }
  ulid(r) {
    return this._addCheck({ kind: "ulid", ...p.errToObj(r) });
  }
  base64(r) {
    return this._addCheck({ kind: "base64", ...p.errToObj(r) });
  }
  base64url(r) {
    return this._addCheck({ kind: "base64url", ...p.errToObj(r) });
  }
  jwt(r) {
    return this._addCheck({ kind: "jwt", ...p.errToObj(r) });
  }
  ip(r) {
    return this._addCheck({ kind: "ip", ...p.errToObj(r) });
  }
  cidr(r) {
    return this._addCheck({ kind: "cidr", ...p.errToObj(r) });
  }
  datetime(r) {
    return typeof r == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: r,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (r == null ? void 0 : r.precision) > "u"
              ? null
              : r == null
                ? void 0
                : r.precision,
          offset: (r == null ? void 0 : r.offset) ?? !1,
          local: (r == null ? void 0 : r.local) ?? !1,
          ...p.errToObj(r == null ? void 0 : r.message),
        });
  }
  date(r) {
    return this._addCheck({ kind: "date", message: r });
  }
  time(r) {
    return typeof r == "string"
      ? this._addCheck({ kind: "time", precision: null, message: r })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (r == null ? void 0 : r.precision) > "u"
              ? null
              : r == null
                ? void 0
                : r.precision,
          ...p.errToObj(r == null ? void 0 : r.message),
        });
  }
  duration(r) {
    return this._addCheck({ kind: "duration", ...p.errToObj(r) });
  }
  regex(r, n) {
    return this._addCheck({ kind: "regex", regex: r, ...p.errToObj(n) });
  }
  includes(r, n) {
    return this._addCheck({
      kind: "includes",
      value: r,
      position: n == null ? void 0 : n.position,
      ...p.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(r, n) {
    return this._addCheck({ kind: "startsWith", value: r, ...p.errToObj(n) });
  }
  endsWith(r, n) {
    return this._addCheck({ kind: "endsWith", value: r, ...p.errToObj(n) });
  }
  min(r, n) {
    return this._addCheck({ kind: "min", value: r, ...p.errToObj(n) });
  }
  max(r, n) {
    return this._addCheck({ kind: "max", value: r, ...p.errToObj(n) });
  }
  length(r, n) {
    return this._addCheck({ kind: "length", value: r, ...p.errToObj(n) });
  }
  nonempty(r) {
    return this.min(1, p.errToObj(r));
  }
  trim() {
    return new F({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new F({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new F({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((r) => r.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((r) => r.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((r) => r.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((r) => r.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((r) => r.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((r) => r.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((r) => r.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((r) => r.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((r) => r.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((r) => r.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((r) => r.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((r) => r.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((r) => r.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((r) => r.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((r) => r.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((r) => r.kind === "base64url");
  }
  get minLength() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "min" && (r === null || n.value > r) && (r = n.value);
    return r;
  }
  get maxLength() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "max" && (r === null || n.value < r) && (r = n.value);
    return r;
  }
}
F.create = (e) =>
  new F({
    checks: [],
    typeName: v.ZodString,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...w(e),
  });
function lt(e, r) {
  const n = (e.toString().split(".")[1] || "").length,
    a = (r.toString().split(".")[1] || "").length,
    s = n > a ? n : a,
    i = Number.parseInt(e.toFixed(s).replace(".", "")),
    c = Number.parseInt(r.toFixed(s).replace(".", ""));
  return (i % c) / 10 ** s;
}
class J extends b {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(r) {
    if (
      (this._def.coerce && (r.data = Number(r.data)),
      this._getType(r) !== $.number)
    ) {
      const i = this._getOrReturnCtx(r);
      return (
        d(i, {
          code: o.invalid_type,
          expected: $.number,
          received: i.parsedType,
        }),
        h
      );
    }
    let a;
    const s = new C();
    for (const i of this._def.checks)
      i.kind === "int"
        ? k.isInteger(r.data) ||
          ((a = this._getOrReturnCtx(r, a)),
          d(a, {
            code: o.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
          ? (i.inclusive ? r.data < i.value : r.data <= i.value) &&
            ((a = this._getOrReturnCtx(r, a)),
            d(a, {
              code: o.too_small,
              minimum: i.value,
              type: "number",
              inclusive: i.inclusive,
              exact: !1,
              message: i.message,
            }),
            s.dirty())
          : i.kind === "max"
            ? (i.inclusive ? r.data > i.value : r.data >= i.value) &&
              ((a = this._getOrReturnCtx(r, a)),
              d(a, {
                code: o.too_big,
                maximum: i.value,
                type: "number",
                inclusive: i.inclusive,
                exact: !1,
                message: i.message,
              }),
              s.dirty())
            : i.kind === "multipleOf"
              ? lt(r.data, i.value) !== 0 &&
                ((a = this._getOrReturnCtx(r, a)),
                d(a, {
                  code: o.not_multiple_of,
                  multipleOf: i.value,
                  message: i.message,
                }),
                s.dirty())
              : i.kind === "finite"
                ? Number.isFinite(r.data) ||
                  ((a = this._getOrReturnCtx(r, a)),
                  d(a, { code: o.not_finite, message: i.message }),
                  s.dirty())
                : k.assertNever(i);
    return { status: s.value, value: r.data };
  }
  gte(r, n) {
    return this.setLimit("min", r, !0, p.toString(n));
  }
  gt(r, n) {
    return this.setLimit("min", r, !1, p.toString(n));
  }
  lte(r, n) {
    return this.setLimit("max", r, !0, p.toString(n));
  }
  lt(r, n) {
    return this.setLimit("max", r, !1, p.toString(n));
  }
  setLimit(r, n, a, s) {
    return new J({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: r, value: n, inclusive: a, message: p.toString(s) },
      ],
    });
  }
  _addCheck(r) {
    return new J({ ...this._def, checks: [...this._def.checks, r] });
  }
  int(r) {
    return this._addCheck({ kind: "int", message: p.toString(r) });
  }
  positive(r) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: p.toString(r),
    });
  }
  negative(r) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: p.toString(r),
    });
  }
  nonpositive(r) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: p.toString(r),
    });
  }
  nonnegative(r) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: p.toString(r),
    });
  }
  multipleOf(r, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: r,
      message: p.toString(n),
    });
  }
  finite(r) {
    return this._addCheck({ kind: "finite", message: p.toString(r) });
  }
  safe(r) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: p.toString(r),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: p.toString(r),
    });
  }
  get minValue() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "min" && (r === null || n.value > r) && (r = n.value);
    return r;
  }
  get maxValue() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "max" && (r === null || n.value < r) && (r = n.value);
    return r;
  }
  get isInt() {
    return !!this._def.checks.find(
      (r) =>
        r.kind === "int" || (r.kind === "multipleOf" && k.isInteger(r.value)),
    );
  }
  get isFinite() {
    let r = null,
      n = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min"
        ? (n === null || a.value > n) && (n = a.value)
        : a.kind === "max" && (r === null || a.value < r) && (r = a.value);
    }
    return Number.isFinite(n) && Number.isFinite(r);
  }
}
J.create = (e) =>
  new J({
    checks: [],
    typeName: v.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...w(e),
  });
class K extends b {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(r) {
    if (this._def.coerce)
      try {
        r.data = BigInt(r.data);
      } catch {
        return this._getInvalidInput(r);
      }
    if (this._getType(r) !== $.bigint) return this._getInvalidInput(r);
    let a;
    const s = new C();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? r.data < i.value : r.data <= i.value) &&
          ((a = this._getOrReturnCtx(r, a)),
          d(a, {
            code: o.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
          ? (i.inclusive ? r.data > i.value : r.data >= i.value) &&
            ((a = this._getOrReturnCtx(r, a)),
            d(a, {
              code: o.too_big,
              type: "bigint",
              maximum: i.value,
              inclusive: i.inclusive,
              message: i.message,
            }),
            s.dirty())
          : i.kind === "multipleOf"
            ? r.data % i.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(r, a)),
              d(a, {
                code: o.not_multiple_of,
                multipleOf: i.value,
                message: i.message,
              }),
              s.dirty())
            : k.assertNever(i);
    return { status: s.value, value: r.data };
  }
  _getInvalidInput(r) {
    const n = this._getOrReturnCtx(r);
    return (
      d(n, {
        code: o.invalid_type,
        expected: $.bigint,
        received: n.parsedType,
      }),
      h
    );
  }
  gte(r, n) {
    return this.setLimit("min", r, !0, p.toString(n));
  }
  gt(r, n) {
    return this.setLimit("min", r, !1, p.toString(n));
  }
  lte(r, n) {
    return this.setLimit("max", r, !0, p.toString(n));
  }
  lt(r, n) {
    return this.setLimit("max", r, !1, p.toString(n));
  }
  setLimit(r, n, a, s) {
    return new K({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: r, value: n, inclusive: a, message: p.toString(s) },
      ],
    });
  }
  _addCheck(r) {
    return new K({ ...this._def, checks: [...this._def.checks, r] });
  }
  positive(r) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: p.toString(r),
    });
  }
  negative(r) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: p.toString(r),
    });
  }
  nonpositive(r) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: p.toString(r),
    });
  }
  nonnegative(r) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: p.toString(r),
    });
  }
  multipleOf(r, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: r,
      message: p.toString(n),
    });
  }
  get minValue() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "min" && (r === null || n.value > r) && (r = n.value);
    return r;
  }
  get maxValue() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "max" && (r === null || n.value < r) && (r = n.value);
    return r;
  }
}
K.create = (e) =>
  new K({
    checks: [],
    typeName: v.ZodBigInt,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...w(e),
  });
class le extends b {
  _parse(r) {
    if (
      (this._def.coerce && (r.data = !!r.data), this._getType(r) !== $.boolean)
    ) {
      const a = this._getOrReturnCtx(r);
      return (
        d(a, {
          code: o.invalid_type,
          expected: $.boolean,
          received: a.parsedType,
        }),
        h
      );
    }
    return L(r.data);
  }
}
le.create = (e) =>
  new le({
    typeName: v.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...w(e),
  });
class te extends b {
  _parse(r) {
    if (
      (this._def.coerce && (r.data = new Date(r.data)),
      this._getType(r) !== $.date)
    ) {
      const i = this._getOrReturnCtx(r);
      return (
        d(i, {
          code: o.invalid_type,
          expected: $.date,
          received: i.parsedType,
        }),
        h
      );
    }
    if (Number.isNaN(r.data.getTime())) {
      const i = this._getOrReturnCtx(r);
      return (d(i, { code: o.invalid_date }), h);
    }
    const a = new C();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? r.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(r, s)),
          d(s, {
            code: o.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          a.dirty())
        : i.kind === "max"
          ? r.data.getTime() > i.value &&
            ((s = this._getOrReturnCtx(r, s)),
            d(s, {
              code: o.too_big,
              message: i.message,
              inclusive: !0,
              exact: !1,
              maximum: i.value,
              type: "date",
            }),
            a.dirty())
          : k.assertNever(i);
    return { status: a.value, value: new Date(r.data.getTime()) };
  }
  _addCheck(r) {
    return new te({ ...this._def, checks: [...this._def.checks, r] });
  }
  min(r, n) {
    return this._addCheck({
      kind: "min",
      value: r.getTime(),
      message: p.toString(n),
    });
  }
  max(r, n) {
    return this._addCheck({
      kind: "max",
      value: r.getTime(),
      message: p.toString(n),
    });
  }
  get minDate() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "min" && (r === null || n.value > r) && (r = n.value);
    return r != null ? new Date(r) : null;
  }
  get maxDate() {
    let r = null;
    for (const n of this._def.checks)
      n.kind === "max" && (r === null || n.value < r) && (r = n.value);
    return r != null ? new Date(r) : null;
  }
}
te.create = (e) =>
  new te({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: v.ZodDate,
    ...w(e),
  });
class Ae extends b {
  _parse(r) {
    if (this._getType(r) !== $.symbol) {
      const a = this._getOrReturnCtx(r);
      return (
        d(a, {
          code: o.invalid_type,
          expected: $.symbol,
          received: a.parsedType,
        }),
        h
      );
    }
    return L(r.data);
  }
}
Ae.create = (e) => new Ae({ typeName: v.ZodSymbol, ...w(e) });
class Le extends b {
  _parse(r) {
    if (this._getType(r) !== $.undefined) {
      const a = this._getOrReturnCtx(r);
      return (
        d(a, {
          code: o.invalid_type,
          expected: $.undefined,
          received: a.parsedType,
        }),
        h
      );
    }
    return L(r.data);
  }
}
Le.create = (e) => new Le({ typeName: v.ZodUndefined, ...w(e) });
class Pe extends b {
  _parse(r) {
    if (this._getType(r) !== $.null) {
      const a = this._getOrReturnCtx(r);
      return (
        d(a, {
          code: o.invalid_type,
          expected: $.null,
          received: a.parsedType,
        }),
        h
      );
    }
    return L(r.data);
  }
}
Pe.create = (e) => new Pe({ typeName: v.ZodNull, ...w(e) });
class xe extends b {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(r) {
    return L(r.data);
  }
}
xe.create = (e) => new xe({ typeName: v.ZodAny, ...w(e) });
class Me extends b {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(r) {
    return L(r.data);
  }
}
Me.create = (e) => new Me({ typeName: v.ZodUnknown, ...w(e) });
class O extends b {
  _parse(r) {
    const n = this._getOrReturnCtx(r);
    return (
      d(n, { code: o.invalid_type, expected: $.never, received: n.parsedType }),
      h
    );
  }
}
O.create = (e) => new O({ typeName: v.ZodNever, ...w(e) });
class Fe extends b {
  _parse(r) {
    if (this._getType(r) !== $.undefined) {
      const a = this._getOrReturnCtx(r);
      return (
        d(a, {
          code: o.invalid_type,
          expected: $.void,
          received: a.parsedType,
        }),
        h
      );
    }
    return L(r.data);
  }
}
Fe.create = (e) => new Fe({ typeName: v.ZodVoid, ...w(e) });
class P extends b {
  _parse(r) {
    const { ctx: n, status: a } = this._processInputParams(r),
      s = this._def;
    if (n.parsedType !== $.array)
      return (
        d(n, {
          code: o.invalid_type,
          expected: $.array,
          received: n.parsedType,
        }),
        h
      );
    if (s.exactLength !== null) {
      const c = n.data.length > s.exactLength.value,
        _ = n.data.length < s.exactLength.value;
      (c || _) &&
        (d(n, {
          code: c ? o.too_big : o.too_small,
          minimum: _ ? s.exactLength.value : void 0,
          maximum: c ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        a.dirty());
    }
    if (
      (s.minLength !== null &&
        n.data.length < s.minLength.value &&
        (d(n, {
          code: o.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        a.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (d(n, {
          code: o.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        a.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((c, _) => s.type._parseAsync(new I(n, c, n.path, _))),
      ).then((c) => C.mergeArray(a, c));
    const i = [...n.data].map((c, _) =>
      s.type._parseSync(new I(n, c, n.path, _)),
    );
    return C.mergeArray(a, i);
  }
  get element() {
    return this._def.type;
  }
  min(r, n) {
    return new P({
      ...this._def,
      minLength: { value: r, message: p.toString(n) },
    });
  }
  max(r, n) {
    return new P({
      ...this._def,
      maxLength: { value: r, message: p.toString(n) },
    });
  }
  length(r, n) {
    return new P({
      ...this._def,
      exactLength: { value: r, message: p.toString(n) },
    });
  }
  nonempty(r) {
    return this.min(1, r);
  }
}
P.create = (e, r) =>
  new P({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: v.ZodArray,
    ...w(r),
  });
function W(e) {
  if (e instanceof R) {
    const r = {};
    for (const n in e.shape) {
      const a = e.shape[n];
      r[n] = E.create(W(a));
    }
    return new R({ ...e._def, shape: () => r });
  } else
    return e instanceof P
      ? new P({ ...e._def, type: W(e.element) })
      : e instanceof E
        ? E.create(W(e.unwrap()))
        : e instanceof B
          ? B.create(W(e.unwrap()))
          : e instanceof N
            ? N.create(e.items.map((r) => W(r)))
            : e;
}
class R extends b {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const r = this._def.shape(),
      n = k.objectKeys(r);
    return ((this._cached = { shape: r, keys: n }), this._cached);
  }
  _parse(r) {
    if (this._getType(r) !== $.object) {
      const g = this._getOrReturnCtx(r);
      return (
        d(g, {
          code: o.invalid_type,
          expected: $.object,
          received: g.parsedType,
        }),
        h
      );
    }
    const { status: a, ctx: s } = this._processInputParams(r),
      { shape: i, keys: c } = this._getCached(),
      _ = [];
    if (!(this._def.catchall instanceof O && this._def.unknownKeys === "strip"))
      for (const g in s.data) c.includes(g) || _.push(g);
    const l = [];
    for (const g of c) {
      const S = i[g],
        z = s.data[g];
      l.push({
        key: { status: "valid", value: g },
        value: S._parse(new I(s, z, s.path, g)),
        alwaysSet: g in s.data,
      });
    }
    if (this._def.catchall instanceof O) {
      const g = this._def.unknownKeys;
      if (g === "passthrough")
        for (const S of _)
          l.push({
            key: { status: "valid", value: S },
            value: { status: "valid", value: s.data[S] },
          });
      else if (g === "strict")
        _.length > 0 &&
          (d(s, { code: o.unrecognized_keys, keys: _ }), a.dirty());
      else if (g !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const g = this._def.catchall;
      for (const S of _) {
        const z = s.data[S];
        l.push({
          key: { status: "valid", value: S },
          value: g._parse(new I(s, z, s.path, S)),
          alwaysSet: S in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const g = [];
            for (const S of l) {
              const z = await S.key,
                sr = await S.value;
              g.push({ key: z, value: sr, alwaysSet: S.alwaysSet });
            }
            return g;
          })
          .then((g) => C.mergeObjectSync(a, g))
      : C.mergeObjectSync(a, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(r) {
    return (
      p.errToObj,
      new R({
        ...this._def,
        unknownKeys: "strict",
        ...(r !== void 0
          ? {
              errorMap: (n, a) => {
                var i, c;
                const s =
                  ((c = (i = this._def).errorMap) == null
                    ? void 0
                    : c.call(i, n, a).message) ?? a.defaultError;
                return n.code === "unrecognized_keys"
                  ? { message: p.errToObj(r).message ?? s }
                  : { message: s };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new R({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new R({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(r) {
    return new R({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...r }),
    });
  }
  merge(r) {
    return new R({
      unknownKeys: r._def.unknownKeys,
      catchall: r._def.catchall,
      shape: () => ({ ...this._def.shape(), ...r._def.shape() }),
      typeName: v.ZodObject,
    });
  }
  setKey(r, n) {
    return this.augment({ [r]: n });
  }
  catchall(r) {
    return new R({ ...this._def, catchall: r });
  }
  pick(r) {
    const n = {};
    for (const a of k.objectKeys(r))
      r[a] && this.shape[a] && (n[a] = this.shape[a]);
    return new R({ ...this._def, shape: () => n });
  }
  omit(r) {
    const n = {};
    for (const a of k.objectKeys(this.shape)) r[a] || (n[a] = this.shape[a]);
    return new R({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return W(this);
  }
  partial(r) {
    const n = {};
    for (const a of k.objectKeys(this.shape)) {
      const s = this.shape[a];
      r && !r[a] ? (n[a] = s) : (n[a] = s.optional());
    }
    return new R({ ...this._def, shape: () => n });
  }
  required(r) {
    const n = {};
    for (const a of k.objectKeys(this.shape))
      if (r && !r[a]) n[a] = this.shape[a];
      else {
        let i = this.shape[a];
        for (; i instanceof E;) i = i._def.innerType;
        n[a] = i;
      }
    return new R({ ...this._def, shape: () => n });
  }
  keyof() {
    return Je(k.objectKeys(this.shape));
  }
}
R.create = (e, r) =>
  new R({
    shape: () => e,
    unknownKeys: "strip",
    catchall: O.create(),
    typeName: v.ZodObject,
    ...w(r),
  });
R.strictCreate = (e, r) =>
  new R({
    shape: () => e,
    unknownKeys: "strict",
    catchall: O.create(),
    typeName: v.ZodObject,
    ...w(r),
  });
R.lazycreate = (e, r) =>
  new R({
    shape: e,
    unknownKeys: "strip",
    catchall: O.create(),
    typeName: v.ZodObject,
    ...w(r),
  });
class ne extends b {
  _parse(r) {
    const { ctx: n } = this._processInputParams(r),
      a = this._def.options;
    function s(i) {
      for (const _ of i) if (_.result.status === "valid") return _.result;
      for (const _ of i)
        if (_.result.status === "dirty")
          return (n.common.issues.push(..._.ctx.common.issues), _.result);
      const c = i.map((_) => new x(_.ctx.common.issues));
      return (d(n, { code: o.invalid_union, unionErrors: c }), h);
    }
    if (n.common.async)
      return Promise.all(
        a.map(async (i) => {
          const c = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: n.data,
              path: n.path,
              parent: c,
            }),
            ctx: c,
          };
        }),
      ).then(s);
    {
      let i;
      const c = [];
      for (const l of a) {
        const g = { ...n, common: { ...n.common, issues: [] }, parent: null },
          S = l._parseSync({ data: n.data, path: n.path, parent: g });
        if (S.status === "valid") return S;
        (S.status === "dirty" && !i && (i = { result: S, ctx: g }),
          g.common.issues.length && c.push(g.common.issues));
      }
      if (i) return (n.common.issues.push(...i.ctx.common.issues), i.result);
      const _ = c.map((l) => new x(l));
      return (d(n, { code: o.invalid_union, unionErrors: _ }), h);
    }
  }
  get options() {
    return this._def.options;
  }
}
ne.create = (e, r) => new ne({ options: e, typeName: v.ZodUnion, ...w(r) });
function pe(e, r) {
  const n = M(e),
    a = M(r);
  if (e === r) return { valid: !0, data: e };
  if (n === $.object && a === $.object) {
    const s = k.objectKeys(r),
      i = k.objectKeys(e).filter((_) => s.indexOf(_) !== -1),
      c = { ...e, ...r };
    for (const _ of i) {
      const l = pe(e[_], r[_]);
      if (!l.valid) return { valid: !1 };
      c[_] = l.data;
    }
    return { valid: !0, data: c };
  } else if (n === $.array && a === $.array) {
    if (e.length !== r.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const c = e[i],
        _ = r[i],
        l = pe(c, _);
      if (!l.valid) return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return n === $.date && a === $.date && +e == +r
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class ae extends b {
  _parse(r) {
    const { status: n, ctx: a } = this._processInputParams(r),
      s = (i, c) => {
        if (Re(i) || Re(c)) return h;
        const _ = pe(i.value, c.value);
        return _.valid
          ? ((ye(i) || ye(c)) && n.dirty(), { status: n.value, value: _.data })
          : (d(a, { code: o.invalid_intersection_types }), h);
      };
    return a.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseAsync({
            data: a.data,
            path: a.path,
            parent: a,
          }),
        ]).then(([i, c]) => s(i, c))
      : s(
          this._def.left._parseSync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseSync({ data: a.data, path: a.path, parent: a }),
        );
  }
}
ae.create = (e, r, n) =>
  new ae({ left: e, right: r, typeName: v.ZodIntersection, ...w(n) });
class N extends b {
  _parse(r) {
    const { status: n, ctx: a } = this._processInputParams(r);
    if (a.parsedType !== $.array)
      return (
        d(a, {
          code: o.invalid_type,
          expected: $.array,
          received: a.parsedType,
        }),
        h
      );
    if (a.data.length < this._def.items.length)
      return (
        d(a, {
          code: o.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        h
      );
    !this._def.rest &&
      a.data.length > this._def.items.length &&
      (d(a, {
        code: o.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...a.data]
      .map((c, _) => {
        const l = this._def.items[_] || this._def.rest;
        return l ? l._parse(new I(a, c, a.path, _)) : null;
      })
      .filter((c) => !!c);
    return a.common.async
      ? Promise.all(i).then((c) => C.mergeArray(n, c))
      : C.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(r) {
    return new N({ ...this._def, rest: r });
  }
}
N.create = (e, r) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new N({ items: e, typeName: v.ZodTuple, rest: null, ...w(r) });
};
class Te extends b {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(r) {
    const { status: n, ctx: a } = this._processInputParams(r);
    if (a.parsedType !== $.map)
      return (
        d(a, { code: o.invalid_type, expected: $.map, received: a.parsedType }),
        h
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      c = [...a.data.entries()].map(([_, l], g) => ({
        key: s._parse(new I(a, _, a.path, [g, "key"])),
        value: i._parse(new I(a, l, a.path, [g, "value"])),
      }));
    if (a.common.async) {
      const _ = new Map();
      return Promise.resolve().then(async () => {
        for (const l of c) {
          const g = await l.key,
            S = await l.value;
          if (g.status === "aborted" || S.status === "aborted") return h;
          ((g.status === "dirty" || S.status === "dirty") && n.dirty(),
            _.set(g.value, S.value));
        }
        return { status: n.value, value: _ };
      });
    } else {
      const _ = new Map();
      for (const l of c) {
        const g = l.key,
          S = l.value;
        if (g.status === "aborted" || S.status === "aborted") return h;
        ((g.status === "dirty" || S.status === "dirty") && n.dirty(),
          _.set(g.value, S.value));
      }
      return { status: n.value, value: _ };
    }
  }
}
Te.create = (e, r, n) =>
  new Te({ valueType: r, keyType: e, typeName: v.ZodMap, ...w(n) });
class Y extends b {
  _parse(r) {
    const { status: n, ctx: a } = this._processInputParams(r);
    if (a.parsedType !== $.set)
      return (
        d(a, { code: o.invalid_type, expected: $.set, received: a.parsedType }),
        h
      );
    const s = this._def;
    (s.minSize !== null &&
      a.data.size < s.minSize.value &&
      (d(a, {
        code: o.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        a.data.size > s.maxSize.value &&
        (d(a, {
          code: o.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty()));
    const i = this._def.valueType;
    function c(l) {
      const g = new Set();
      for (const S of l) {
        if (S.status === "aborted") return h;
        (S.status === "dirty" && n.dirty(), g.add(S.value));
      }
      return { status: n.value, value: g };
    }
    const _ = [...a.data.values()].map((l, g) =>
      i._parse(new I(a, l, a.path, g)),
    );
    return a.common.async ? Promise.all(_).then((l) => c(l)) : c(_);
  }
  min(r, n) {
    return new Y({
      ...this._def,
      minSize: { value: r, message: p.toString(n) },
    });
  }
  max(r, n) {
    return new Y({
      ...this._def,
      maxSize: { value: r, message: p.toString(n) },
    });
  }
  size(r, n) {
    return this.min(r, n).max(r, n);
  }
  nonempty(r) {
    return this.min(1, r);
  }
}
Y.create = (e, r) =>
  new Y({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: v.ZodSet,
    ...w(r),
  });
class Ee extends b {
  get schema() {
    return this._def.getter();
  }
  _parse(r) {
    const { ctx: n } = this._processInputParams(r);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ee.create = (e, r) => new Ee({ getter: e, typeName: v.ZodLazy, ...w(r) });
class ge extends b {
  _parse(r) {
    if (r.data !== this._def.value) {
      const n = this._getOrReturnCtx(r);
      return (
        d(n, {
          received: n.data,
          code: o.invalid_literal,
          expected: this._def.value,
        }),
        h
      );
    }
    return { status: "valid", value: r.data };
  }
  get value() {
    return this._def.value;
  }
}
ge.create = (e, r) => new ge({ value: e, typeName: v.ZodLiteral, ...w(r) });
function Je(e, r) {
  return new j({ values: e, typeName: v.ZodEnum, ...w(r) });
}
class j extends b {
  _parse(r) {
    if (typeof r.data != "string") {
      const n = this._getOrReturnCtx(r),
        a = this._def.values;
      return (
        d(n, {
          expected: k.joinValues(a),
          received: n.parsedType,
          code: o.invalid_type,
        }),
        h
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(r.data))
    ) {
      const n = this._getOrReturnCtx(r),
        a = this._def.values;
      return (
        d(n, { received: n.data, code: o.invalid_enum_value, options: a }),
        h
      );
    }
    return L(r.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const r = {};
    for (const n of this._def.values) r[n] = n;
    return r;
  }
  get Values() {
    const r = {};
    for (const n of this._def.values) r[n] = n;
    return r;
  }
  get Enum() {
    const r = {};
    for (const n of this._def.values) r[n] = n;
    return r;
  }
  extract(r, n = this._def) {
    return j.create(r, { ...this._def, ...n });
  }
  exclude(r, n = this._def) {
    return j.create(
      this.options.filter((a) => !r.includes(a)),
      { ...this._def, ...n },
    );
  }
}
j.create = Je;
class De extends b {
  _parse(r) {
    const n = k.getValidEnumValues(this._def.values),
      a = this._getOrReturnCtx(r);
    if (a.parsedType !== $.string && a.parsedType !== $.number) {
      const s = k.objectValues(n);
      return (
        d(a, {
          expected: k.joinValues(s),
          received: a.parsedType,
          code: o.invalid_type,
        }),
        h
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(k.getValidEnumValues(this._def.values))),
      !this._cache.has(r.data))
    ) {
      const s = k.objectValues(n);
      return (
        d(a, { received: a.data, code: o.invalid_enum_value, options: s }),
        h
      );
    }
    return L(r.data);
  }
  get enum() {
    return this._def.values;
  }
}
De.create = (e, r) => new De({ values: e, typeName: v.ZodNativeEnum, ...w(r) });
class se extends b {
  unwrap() {
    return this._def.type;
  }
  _parse(r) {
    const { ctx: n } = this._processInputParams(r);
    if (n.parsedType !== $.promise && n.common.async === !1)
      return (
        d(n, {
          code: o.invalid_type,
          expected: $.promise,
          received: n.parsedType,
        }),
        h
      );
    const a = n.parsedType === $.promise ? n.data : Promise.resolve(n.data);
    return L(
      a.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        }),
      ),
    );
  }
}
se.create = (e, r) => new se({ type: e, typeName: v.ZodPromise, ...w(r) });
class H extends b {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === v.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(r) {
    const { status: n, ctx: a } = this._processInputParams(r),
      s = this._def.effect || null,
      i = {
        addIssue: (c) => {
          (d(a, c), c.fatal ? n.abort() : n.dirty());
        },
        get path() {
          return a.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const c = s.transform(a.data, i);
      if (a.common.async)
        return Promise.resolve(c).then(async (_) => {
          if (n.value === "aborted") return h;
          const l = await this._def.schema._parseAsync({
            data: _,
            path: a.path,
            parent: a,
          });
          return l.status === "aborted"
            ? h
            : l.status === "dirty" || n.value === "dirty"
              ? G(l.value)
              : l;
        });
      {
        if (n.value === "aborted") return h;
        const _ = this._def.schema._parseSync({
          data: c,
          path: a.path,
          parent: a,
        });
        return _.status === "aborted"
          ? h
          : _.status === "dirty" || n.value === "dirty"
            ? G(_.value)
            : _;
      }
    }
    if (s.type === "refinement") {
      const c = (_) => {
        const l = s.refinement(_, i);
        if (a.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return _;
      };
      if (a.common.async === !1) {
        const _ = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        return _.status === "aborted"
          ? h
          : (_.status === "dirty" && n.dirty(),
            c(_.value),
            { status: n.value, value: _.value });
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((_) =>
            _.status === "aborted"
              ? h
              : (_.status === "dirty" && n.dirty(),
                c(_.value).then(() => ({ status: n.value, value: _.value }))),
          );
    }
    if (s.type === "transform")
      if (a.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        if (!Z(c)) return h;
        const _ = s.transform(c.value, i);
        if (_ instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: n.value, value: _ };
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((c) =>
            Z(c)
              ? Promise.resolve(s.transform(c.value, i)).then((_) => ({
                  status: n.value,
                  value: _,
                }))
              : h,
          );
    k.assertNever(s);
  }
}
H.create = (e, r, n) =>
  new H({ schema: e, typeName: v.ZodEffects, effect: r, ...w(n) });
H.createWithPreprocess = (e, r, n) =>
  new H({
    schema: r,
    effect: { type: "preprocess", transform: e },
    typeName: v.ZodEffects,
    ...w(n),
  });
class E extends b {
  _parse(r) {
    return this._getType(r) === $.undefined
      ? L(void 0)
      : this._def.innerType._parse(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
E.create = (e, r) => new E({ innerType: e, typeName: v.ZodOptional, ...w(r) });
class B extends b {
  _parse(r) {
    return this._getType(r) === $.null
      ? L(null)
      : this._def.innerType._parse(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
B.create = (e, r) => new B({ innerType: e, typeName: v.ZodNullable, ...w(r) });
class me extends b {
  _parse(r) {
    const { ctx: n } = this._processInputParams(r);
    let a = n.data;
    return (
      n.parsedType === $.undefined && (a = this._def.defaultValue()),
      this._def.innerType._parse({ data: a, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
me.create = (e, r) =>
  new me({
    innerType: e,
    typeName: v.ZodDefault,
    defaultValue: typeof r.default == "function" ? r.default : () => r.default,
    ...w(r),
  });
class he extends b {
  _parse(r) {
    const { ctx: n } = this._processInputParams(r),
      a = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: a.data,
        path: a.path,
        parent: { ...a },
      });
    return re(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new x(a.common.issues);
                  },
                  input: a.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new x(a.common.issues);
                  },
                  input: a.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
he.create = (e, r) =>
  new he({
    innerType: e,
    typeName: v.ZodCatch,
    catchValue: typeof r.catch == "function" ? r.catch : () => r.catch,
    ...w(r),
  });
class Ie extends b {
  _parse(r) {
    if (this._getType(r) !== $.nan) {
      const a = this._getOrReturnCtx(r);
      return (
        d(a, { code: o.invalid_type, expected: $.nan, received: a.parsedType }),
        h
      );
    }
    return { status: "valid", value: r.data };
  }
}
Ie.create = (e) => new Ie({ typeName: v.ZodNaN, ...w(e) });
class pt extends b {
  _parse(r) {
    const { ctx: n } = this._processInputParams(r),
      a = n.data;
    return this._def.type._parse({ data: a, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class fe extends b {
  _parse(r) {
    const { status: n, ctx: a } = this._processInputParams(r);
    if (a.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        return i.status === "aborted"
          ? h
          : i.status === "dirty"
            ? (n.dirty(), G(i.value))
            : this._def.out._parseAsync({
                data: i.value,
                path: a.path,
                parent: a,
              });
      })();
    {
      const s = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a,
      });
      return s.status === "aborted"
        ? h
        : s.status === "dirty"
          ? (n.dirty(), { status: "dirty", value: s.value })
          : this._def.out._parseSync({
              data: s.value,
              path: a.path,
              parent: a,
            });
    }
  }
  static create(r, n) {
    return new fe({ in: r, out: n, typeName: v.ZodPipeline });
  }
}
class ve extends b {
  _parse(r) {
    const n = this._def.innerType._parse(r),
      a = (s) => (Z(s) && (s.value = Object.freeze(s.value)), s);
    return re(n) ? n.then((s) => a(s)) : a(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ve.create = (e, r) =>
  new ve({ innerType: e, typeName: v.ZodReadonly, ...w(r) });
var v;
(function (e) {
  ((e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly"));
})(v || (v = {}));
const ue = F.create,
  gt = le.create;
O.create;
P.create;
const mt = R.create,
  ht = ne.create;
ae.create;
N.create;
const Oe = ge.create;
j.create;
se.create;
E.create;
B.create;
var D = ((e) => (
  (e.ListMcpServers = "list-mcp-servers"),
  (e.ConnectToMcpServer = "connect-to-mcp-server"),
  (e.McpServerConnected = "mcp-server-connected"),
  (e.RequestOpenMcpSettings = "request-open-mcp-settings"),
  (e.McpServerAutoReconnect = "mcp-server-auto-reconnect"),
  e
))(D || {});
const vt = mt({
  isNestBuild: gt(),
  buildType: ht([Oe("dev"), Oe("prod")]),
  commitHash: ue(),
  commitTimestamp: ue(),
  appVersion: ue(),
});
function ft() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return !!(
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    ((e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "https://claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://claude.com" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.com" ||
      e.hostname === "localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin
      ).endsWith(".ant.dev") ||
      e.hostname === "localhost" ||
      e.protocol === "file:" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "app://localhost")
  );
}
const Ke = {
    getInitialLocale() {
      const e = t.ipcRenderer.sendSync(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.hybrid_$_DesktopIntl_$_getInitialLocale",
      );
      if (e.error) throw new Error(e.error);
      return e.result;
    },
    requestLocaleChange(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.hybrid_$_DesktopIntl_$_requestLocaleChange",
        e,
      );
    },
    onLocaleChanged(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.hybrid_$_DesktopIntl_$_localeChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.hybrid_$_DesktopIntl_$_localeChanged",
            r,
          );
        }
      );
    },
  },
  wt = (e) => {
    ft() &&
      ((e["claude.hybrid"] = e["claude.hybrid"] || {}),
      (e["claude.hybrid"].DesktopIntl = Ke));
  },
  Ye = {};
wt(Ye);
for (const [e, r] of Object.entries(Ye))
  t.contextBridge.exposeInMainWorld(e, r);
const Xe = {
    resize(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_resize",
        e,
        r,
        n,
      );
    },
    focus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_focus",
      );
    },
    close() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_close",
      );
    },
    setThemeMode(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_setThemeMode",
        e,
      );
    },
    setIncognitoMode(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_setIncognitoMode",
        e,
      );
    },
    setModalScrimActive(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_setModalScrimActive",
        e,
      );
    },
    reportModalScrim(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_reportModalScrim",
        e,
        r,
      );
    },
    captureScreenshot() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowControl_$_captureScreenshot",
      );
    },
  },
  bt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].WindowControl = Xe));
  },
  kt = {
    setRecentChats(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_QuickEntry_$_setRecentChats",
        e,
        r,
      );
    },
    onOnQuickEntrySubmit(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_QuickEntry_$_onQuickEntrySubmit",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_QuickEntry_$_onQuickEntrySubmit",
            r,
          );
        }
      );
    },
  },
  St = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].QuickEntry = kt));
  },
  Rt = {
    onOnMiniStateChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FloatingPenguinMini_$_onMiniStateChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FloatingPenguinMini_$_onMiniStateChanged",
            r,
          );
        }
      );
    },
    requestToggleMini() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FloatingPenguinMini_$_requestToggleMini",
      );
    },
    requestSetMiniExpanded(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FloatingPenguinMini_$_requestSetMiniExpanded",
        e,
      );
    },
  },
  yt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].FloatingPenguinMini = Rt));
  },
  Ct = {
    setAccountDetails(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Account_$_setAccountDetails",
        e,
      );
    },
  },
  At = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].Account = Ct));
  },
  Lt = {
    reportCommitHash(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WebBuild_$_reportCommitHash",
        e,
      );
    },
  },
  Pt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].WebBuild = Lt));
  },
  xt = {
    onNavigate(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Navigation_$_navigate",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Navigation_$_navigate",
            r,
          );
        }
      );
    },
  },
  Mt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].Navigation = xt));
  },
  Ft = {
    onHandleDeepLink(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeepLink_$_handleDeepLink",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeepLink_$_handleDeepLink",
            r,
          );
        }
      );
    },
  },
  Tt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].DeepLink = Ft));
  },
  Et = {
    onOpenFile(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_MenuEvents_$_openFile",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_MenuEvents_$_openFile",
            r,
          );
        }
      );
    },
    onCloseWindow(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_MenuEvents_$_closeWindow",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_MenuEvents_$_closeWindow",
            r,
          );
        }
      );
    },
    onToggleSidebar(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_MenuEvents_$_toggleSidebar",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_MenuEvents_$_toggleSidebar",
            r,
          );
        }
      );
    },
  },
  Dt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].MenuEvents = Et));
  },
  It = {
    onFullscreenChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_fullscreenChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_fullscreenChanged",
            r,
          );
        }
      );
    },
    getFullscreen() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_getFullscreen",
      );
    },
    onVisibilityChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_visibilityChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_visibilityChanged",
            r,
          );
        }
      );
    },
    getVisibility() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_getVisibility",
      );
    },
    onZoomFactorChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_zoomFactorChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_zoomFactorChanged",
            r,
          );
        }
      );
    },
    getZoomFactor() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_getZoomFactor",
      );
    },
    onCuDockStateChanged(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_cuDockStateChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_WindowState_$_cuDockStateChanged",
            r,
          );
        }
      );
    },
  },
  Ot = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].WindowState = It));
  },
  Nt = {
    onShowToast(e) {
      const r = (n, a, s, i) => e(a, s, i);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Toast_$_showToast",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Toast_$_showToast",
            r,
          );
        }
      );
    },
  },
  Wt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}), (e["claude.web"].Toast = Nt));
  },
  Ut = {
    doAuthInBrowser(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Auth_$_doAuthInBrowser",
        e,
      );
    },
  },
  Vt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}), (e["claude.web"].Auth = Ut));
  },
  Zt = {
    getAuthorizationStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DesktopNotifications_$_getAuthorizationStatus",
      );
    },
    requestAuthorization() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DesktopNotifications_$_requestAuthorization",
      );
    },
    openNotificationSettings() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DesktopNotifications_$_openNotificationSettings",
      );
    },
    showNotification(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DesktopNotifications_$_showNotification",
        e,
        r,
        n,
        a,
        s,
      );
    },
    onOnNotificationClicked(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DesktopNotifications_$_onNotificationClicked",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DesktopNotifications_$_onNotificationClicked",
            r,
          );
        }
      );
    },
  },
  jt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].DesktopNotifications = Zt));
  },
  Ht = {
    restartToUpdate() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_restartToUpdate",
      );
    },
    checkForUpdates() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_checkForUpdates",
      );
    },
    getRunningLocalSessionCount() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_getRunningLocalSessionCount",
      );
    },
    getRunningLocalSessions() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_getRunningLocalSessions",
      );
    },
    restartToUpdateWhenIdle() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_restartToUpdateWhenIdle",
      );
    },
    cancelPendingRestart() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_cancelPendingRestart",
      );
    },
    updaterStateStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_updaterState_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_updaterState_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_updaterState_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AutoUpdater_$_updaterState_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  Bt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].AutoUpdater = Ht));
  },
  zt = {
    goBack() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_goBack",
      );
    },
    goForward() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_goForward",
      );
    },
    requestMainMenuPopup() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_requestMainMenuPopup",
      );
    },
    reportNavigationState(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_reportNavigationState",
        e,
      );
    },
    navigationStateStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_navigationState_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_navigationState_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_navigationState_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BrowserNavigation_$_navigationState_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  Gt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].BrowserNavigation = zt));
  },
  qt = {
    setProviderActive(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FindInPageProvider_$_setProviderActive",
        e,
      );
    },
    reportFindResult(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FindInPageProvider_$_reportFindResult",
        e,
        r,
      );
    },
    onFindRequest(e) {
      const r = (n, a, s, i, c) => e(a, s, i, c);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FindInPageProvider_$_findRequest",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FindInPageProvider_$_findRequest",
            r,
          );
        }
      );
    },
    onFindClear(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FindInPageProvider_$_findClear",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FindInPageProvider_$_findClear",
            r,
          );
        }
      );
    },
  },
  Qt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].FindInPageProvider = qt));
  },
  Jt = {
    getAllArtifacts() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_getAllArtifacts",
      );
    },
    getArtifactMetadata(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_getArtifactMetadata",
        e,
      );
    },
    getArtifactThumbnail(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_getArtifactThumbnail",
        e,
      );
    },
    deleteArtifact(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_deleteArtifact",
        e,
        r,
      );
    },
    getArtifactIndexHtmlPath(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_getArtifactIndexHtmlPath",
        e,
      );
    },
    showArtifact(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_showArtifact",
        e,
        r,
        n,
        a,
      );
    },
    hideArtifact(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_hideArtifact",
        e,
      );
    },
    parkAndCaptureArtifact(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_parkAndCaptureArtifact",
        e,
        r,
      );
    },
    reloadArtifactView() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_reloadArtifactView",
      );
    },
    printArtifactToPdf() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_printArtifactToPdf",
      );
    },
    restoreArtifactVersion(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_restoreArtifactVersion",
        e,
        r,
      );
    },
    setArtifactStarred(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_setArtifactStarred",
        e,
        r,
      );
    },
    setArtifactLastModifiedSession(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_setArtifactLastModifiedSession",
        e,
        r,
      );
    },
    setArtifactMcpTools(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_setArtifactMcpTools",
        e,
        r,
      );
    },
    isSharingEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_isSharingEnabled",
      );
    },
    isAutoPublishEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_isAutoPublishEnabled",
      );
    },
    setArtifactAutoPublish(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_setArtifactAutoPublish",
        e,
        r,
      );
    },
    shareArtifact(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_shareArtifact",
        e,
      );
    },
    unshareArtifact(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_unshareArtifact",
        e,
      );
    },
    refreshImportedArtifact(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_refreshImportedArtifact",
        e,
      );
    },
    importArtifact(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_importArtifact",
        e,
      );
    },
    onOnArtifactsChanged(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_onArtifactsChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkArtifacts_$_onArtifactsChanged",
            r,
          );
        }
      );
    },
  },
  Kt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkArtifacts = Jt));
  },
  Yt = {
    isEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_isEnabled",
      );
    },
    isEpitaxyPreviewEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_isEpitaxyPreviewEnabled",
      );
    },
    isOpenInDefaultAppEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_isOpenInDefaultAppEnabled",
      );
    },
    isVmReady() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_isVmReady",
      );
    },
    show(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_show",
        e,
        r,
        n,
        a,
      );
    },
    hide(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_hide",
        e,
      );
    },
    parkAndCapture(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFilePreview_$_parkAndCapture",
        e,
        r,
      );
    },
  },
  Xt = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkFilePreview = Yt));
  },
  en = {
    getStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_getStatus",
      );
    },
    prepare() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_prepare",
      );
    },
    checkGitAvailable() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_checkGitAvailable",
      );
    },
    resolveLocalSettings(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_resolveLocalSettings",
        e,
      );
    },
    patchUserSettings(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_patchUserSettings",
        e,
      );
    },
    setEnableWorkflows(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_setEnableWorkflows",
        e,
      );
    },
    getPeriodUsage() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeCode_$_getPeriodUsage",
      );
    },
  },
  rn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].ClaudeCode = en));
  },
  tn = {
    isInstalled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ChromeExtension_$_isInstalled",
      );
    },
    installExtension() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ChromeExtension_$_installExtension",
      );
    },
    restartChrome() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ChromeExtension_$_restartChrome",
      );
    },
  },
  nn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].ChromeExtension = tn));
  },
  an = {
    getState() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_getState",
      );
    },
    requestAccessibility() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_requestAccessibility",
      );
    },
    requestScreenRecording() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_requestScreenRecording",
      );
    },
    openSystemSettings(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_openSystemSettings",
        e,
      );
    },
    getCurrentSessionGrants(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_getCurrentSessionGrants",
        e,
      );
    },
    revokeGrant(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_revokeGrant",
        e,
        r,
      );
    },
    listInstalledApps() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ComputerUseTcc_$_listInstalledApps",
      );
    },
  },
  sn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].ComputerUseTcc = an));
  },
  cn = {
    sync(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BuddyRemoteFeed_$_sync",
        e,
      );
    },
    onPermissionDecision(e) {
      const r = (n, a, s, i) => e(a, s, i);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BuddyRemoteFeed_$_permissionDecision",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_BuddyRemoteFeed_$_permissionDecision",
            r,
          );
        }
      );
    },
  },
  _n = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].BuddyRemoteFeed = cn));
  },
  on = {
    requestFramePort() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_requestFramePort",
      );
    },
    listSources(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_listSources",
        e,
      );
    },
    attach(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_attach",
        e,
        r,
      );
    },
    detach(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_detach",
        e,
      );
    },
    setStreamHints(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_setStreamHints",
        e,
        r,
      );
    },
    sendPointer(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sendPointer",
        e,
        r,
        n,
        a,
      );
    },
    sendKey(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sendKey",
        e,
        r,
        n,
        a,
      );
    },
    sendScroll(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sendScroll",
        e,
        r,
        n,
      );
    },
    onSessionResized(e) {
      const r = (n, a, s, i) => e(a, s, i);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sessionResized",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sessionResized",
            r,
          );
        }
      );
    },
    onSessionFatal(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sessionFatal",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_sessionFatal",
            r,
          );
        }
      );
    },
    onOpenSourceRequested(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_openSourceRequested",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FramebufferPreview_$_openSourceRequested",
            r,
          );
        }
      );
    },
  },
  dn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].FramebufferPreview = on));
  },
  un = {
    start(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_start",
        e,
      );
    },
    sendMessage(e, r, n, a, s, i, c, _, l) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_sendMessage",
        e,
        r,
        n,
        a,
        s,
        i,
        c,
        _,
        l,
      );
    },
    setModel(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setModel",
        e,
        r,
      );
    },
    setEffort(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setEffort",
        e,
        r,
      );
    },
    setExtendedThinking(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setExtendedThinking",
        e,
        r,
      );
    },
    setPermissionMode(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setPermissionMode",
        e,
        r,
        n,
        a,
      );
    },
    setChromePermissionMode(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setChromePermissionMode",
        e,
        r,
      );
    },
    noteCuWindowMentions(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_noteCuWindowMentions",
        e,
        r,
      );
    },
    stop(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_stop",
        e,
      );
    },
    stopTask(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_stopTask",
        e,
        r,
      );
    },
    rewind(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_rewind",
        e,
        r,
      );
    },
    archive(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_archive",
        e,
        r,
      );
    },
    delete(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_delete",
        e,
      );
    },
    deleteBridgeSession() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_deleteBridgeSession",
      );
    },
    deleteBridgeAgentMemory() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_deleteBridgeAgentMemory",
      );
    },
    updateSession(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_updateSession",
        e,
        r,
      );
    },
    getSession(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getSession",
        e,
        r,
      );
    },
    getAll() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getAll",
      );
    },
    getTranscript(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getTranscript",
        e,
        r,
      );
    },
    searchSessions(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_searchSessions",
        e,
        r,
      );
    },
    respondToToolPermission(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_respondToToolPermission",
        e,
        r,
        n,
      );
    },
    openOutputsDir(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_openOutputsDir",
        e,
      );
    },
    shareSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_shareSession",
        e,
      );
    },
    submitTranscriptFeedback(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_submitTranscriptFeedback",
        e,
        r,
      );
    },
    getTranscriptFeedback(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getTranscriptFeedback",
        e,
      );
    },
    setDraftSessionFolders(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setDraftSessionFolders",
        e,
      );
    },
    getDefaultWorkspaceFolders() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getDefaultWorkspaceFolders",
      );
    },
    getSupportedCommands(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getSupportedCommands",
        e,
      );
    },
    getTrustedFolders() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getTrustedFolders",
      );
    },
    addTrustedFolder(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_addTrustedFolder",
        e,
      );
    },
    grantRemoteSessionFolders(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_grantRemoteSessionFolders",
        e,
        r,
      );
    },
    browseAndGrantRemoteSessionFolder(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_browseAndGrantRemoteSessionFolder",
        e,
      );
    },
    grantRemoteSessionFolder(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_grantRemoteSessionFolder",
        e,
        r,
      );
    },
    clearRemoteSessionFolderGrants(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_clearRemoteSessionFolderGrants",
        e,
      );
    },
    removeTrustedFolder(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_removeTrustedFolder",
        e,
      );
    },
    isFolderTrusted(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_isFolderTrusted",
        e,
      );
    },
    addFolderToSession(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_addFolderToSession",
        e,
        r,
      );
    },
    setMcpServers(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setMcpServers",
        e,
        r,
      );
    },
    replaceRemoteMcpServers(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_replaceRemoteMcpServers",
        e,
        r,
      );
    },
    replaceEnabledMcpTools(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_replaceEnabledMcpTools",
        e,
        r,
      );
    },
    setFocusedSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setFocusedSession",
        e,
      );
    },
    signalSessionIntent(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_signalSessionIntent",
        e,
      );
    },
    syncSkills() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_syncSkills",
      );
    },
    listLocalSkills() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_listLocalSkills",
      );
    },
    getLocalSkillFiles(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getLocalSkillFiles",
        e,
      );
    },
    saveLocalSkill(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_saveLocalSkill",
        e,
        r,
        n,
        a,
      );
    },
    setLocalSkillEnabled(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setLocalSkillEnabled",
        e,
        r,
      );
    },
    deleteLocalSkill(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_deleteLocalSkill",
        e,
      );
    },
    revealLocalSkill(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_revealLocalSkill",
        e,
      );
    },
    respondDirectoryServers(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_respondDirectoryServers",
        e,
        r,
      );
    },
    respondPluginSearch(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_respondPluginSearch",
        e,
        r,
      );
    },
    respondSlashMenuSkills(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_respondSlashMenuSkills",
        e,
        r,
      );
    },
    mcpCallTool(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_mcpCallTool",
        e,
        r,
        n,
        a,
      );
    },
    mcpReadResource(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_mcpReadResource",
        e,
        r,
        n,
      );
    },
    mcpListResources(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_mcpListResources",
        e,
        r,
      );
    },
    mcpAuthenticate(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_mcpAuthenticate",
        e,
        r,
      );
    },
    mcpReconnect(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_mcpReconnect",
        e,
        r,
      );
    },
    mcpSubmitOAuthCallbackUrl(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_mcpSubmitOAuthCallbackUrl",
        e,
        r,
        n,
      );
    },
    getSessionsForScheduledTask(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getSessionsForScheduledTask",
        e,
      );
    },
    resetBridge() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_resetBridge",
      );
    },
    resetBridgeSession() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_resetBridgeSession",
      );
    },
    abandonBridgeEnvironment(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_abandonBridgeEnvironment",
        e,
      );
    },
    kickBridgePoll() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_kickBridgePoll",
      );
    },
    getBridgeConsent() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getBridgeConsent",
      );
    },
    getSessionsBridgeEnabled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getSessionsBridgeEnabled",
      );
    },
    setSessionsBridgeEnabled(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_setSessionsBridgeEnabled",
        e,
      );
    },
    refetchMyAccess() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_refetchMyAccess",
      );
    },
    requestFolderTccAccess() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_requestFolderTccAccess",
      );
    },
    requestDocumentsTccAccess() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_requestDocumentsTccAccess",
      );
    },
    respondBridgePermissionPreflight(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_respondBridgePermissionPreflight",
        e,
        r,
      );
    },
    startWatchRecording(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_startWatchRecording",
        e,
        r,
      );
    },
    takeHeldWatchRecording() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_takeHeldWatchRecording",
      );
    },
    releaseRemoteCuLock(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_releaseRemoteCuLock",
        e,
        r,
      );
    },
    getAppIconForBundleId(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getAppIconForBundleId",
        e,
      );
    },
    authorizeDirectMcpServer(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_authorizeDirectMcpServer",
        e,
      );
    },
    disconnectDirectMcpServer(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_disconnectDirectMcpServer",
        e,
      );
    },
    getDirectMcpServerStatuses() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getDirectMcpServerStatuses",
      );
    },
    directMcpCallTool(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_directMcpCallTool",
        e,
        r,
        n,
      );
    },
    directMcpReadResource(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_directMcpReadResource",
        e,
        r,
      );
    },
    directMcpListResources(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_directMcpListResources",
        e,
      );
    },
    getManagedAskToolNames() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_getManagedAskToolNames",
      );
    },
    triggerInteractiveAuth(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_triggerInteractiveAuth",
        e,
      );
    },
    revokeInteractiveAuth() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_revokeInteractiveAuth",
      );
    },
    cancelInteractiveAuth() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_cancelInteractiveAuth",
      );
    },
    onOnDirectMcpServerStatusesChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onDirectMcpServerStatusesChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onDirectMcpServerStatusesChanged",
            r,
          );
        }
      );
    },
    onOnManagedAskToolNamesChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onManagedAskToolNamesChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onManagedAskToolNamesChanged",
            r,
          );
        }
      );
    },
    onOnBridgePermissionPreflight(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onBridgePermissionPreflight",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onBridgePermissionPreflight",
            r,
          );
        }
      );
    },
    onOnEvent(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onEvent",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onEvent",
            r,
          );
        }
      );
    },
    onOnToolPermissionRequest(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onToolPermissionRequest",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onToolPermissionRequest",
            r,
          );
        }
      );
    },
    onOnCoworkFromMain(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onCoworkFromMain",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onCoworkFromMain",
            r,
          );
        }
      );
    },
    onOnRemoteSessionStart(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onRemoteSessionStart",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onRemoteSessionStart",
            r,
          );
        }
      );
    },
    onOnCuEmergencyStop(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onCuEmergencyStop",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_onCuEmergencyStop",
            r,
          );
        }
      );
    },
    onWatchRecordingComplete(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_watchRecordingComplete",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_watchRecordingComplete",
            r,
          );
        }
      );
    },
    sessionsBridgeStatusStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_sessionsBridgeStatus_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_sessionsBridgeStatus_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_sessionsBridgeStatus_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_sessionsBridgeStatus_$store$_update",
              r,
            );
          }
        );
      },
    },
    interactiveAuthStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_interactiveAuth_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_interactiveAuth_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_interactiveAuth_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalAgentModeSessions_$_interactiveAuth_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  $n = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].LocalAgentModeSessions = un));
  },
  ln = {
    getInfo() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkUserFiles_$_getInfo",
      );
    },
    pickTarget() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkUserFiles_$_pickTarget",
      );
    },
    migrate(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkUserFiles_$_migrate",
        e,
      );
    },
    reveal() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkUserFiles_$_reveal",
      );
    },
  },
  pn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkUserFiles = ln));
  },
  gn = {
    readGlobalMemory() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_readGlobalMemory",
      );
    },
    writeGlobalMemory(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_writeGlobalMemory",
        e,
      );
    },
    listAccountMemories(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_listAccountMemories",
        e,
      );
    },
    readAccountMemory(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_readAccountMemory",
        e,
      );
    },
    writeAccountMemory(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_writeAccountMemory",
        e,
        r,
      );
    },
    deleteAccountMemory(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_deleteAccountMemory",
        e,
      );
    },
    resetMemories() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkMemory_$_resetMemories",
      );
    },
  },
  mn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkMemory = gn));
  },
  hn = {
    getAllSpaces() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_getAllSpaces",
      );
    },
    getSpace(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_getSpace",
        e,
      );
    },
    createSpace(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_createSpace",
        e,
      );
    },
    updateSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_updateSpace",
        e,
        r,
      );
    },
    deleteSpace(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_deleteSpace",
        e,
      );
    },
    addFolderToSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_addFolderToSpace",
        e,
        r,
      );
    },
    removeFolderFromSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_removeFolderFromSpace",
        e,
        r,
      );
    },
    addProjectToSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_addProjectToSpace",
        e,
        r,
      );
    },
    removeProjectFromSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_removeProjectFromSpace",
        e,
        r,
      );
    },
    addLinkToSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_addLinkToSpace",
        e,
        r,
      );
    },
    removeLinkFromSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_removeLinkFromSpace",
        e,
        r,
      );
    },
    getAutoMemoryDir(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_getAutoMemoryDir",
        e,
      );
    },
    readSpaceMemoryIndex(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_readSpaceMemoryIndex",
        e,
      );
    },
    listFolderContents(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_listFolderContents",
        e,
        r,
      );
    },
    readFileContents(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_readFileContents",
        e,
        r,
      );
    },
    openFile(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_openFile",
        e,
        r,
      );
    },
    createSpaceFolder(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_createSpaceFolder",
        e,
        r,
      );
    },
    copyFilesToSpaceFolder(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_copyFilesToSpaceFolder",
        e,
        r,
      );
    },
    classifySessions(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_classifySessions",
        e,
        r,
      );
    },
    summarizeSpace(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_summarizeSpace",
        e,
        r,
      );
    },
    setAutoDescription(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_setAutoDescription",
        e,
        r,
      );
    },
    getRemoteSessionSpaces() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_getRemoteSessionSpaces",
      );
    },
    setRemoteSessionSpace(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_setRemoteSessionSpace",
        e,
      );
    },
    removeRemoteSessionSpace(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_removeRemoteSessionSpace",
        e,
      );
    },
    onOnSpaceEvent(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_onSpaceEvent",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkSpaces_$_onSpaceEvent",
            r,
          );
        }
      );
    },
  },
  vn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkSpaces = hn));
  },
  fn = {
    openFeedbackWindow(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AgentModeFeedback_$_openFeedbackWindow",
        e,
      );
    },
    openFeedbackAndConfirmReinstall(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AgentModeFeedback_$_openFeedbackAndConfirmReinstall",
        e,
      );
    },
    reportErrorToSlack(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_AgentModeFeedback_$_reportErrorToSlack",
        e,
        r,
        n,
      );
    },
  },
  wn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].AgentModeFeedback = fn));
  },
  bn = {
    getSystemInfo() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFeedback_$_getSystemInfo",
      );
    },
    captureScreenshot() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFeedback_$_captureScreenshot",
      );
    },
    discardScreenshot(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFeedback_$_discardScreenshot",
        e,
      );
    },
    getScreenshotDataUrl(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFeedback_$_getScreenshotDataUrl",
        e,
      );
    },
    submitFeedback(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkFeedback_$_submitFeedback",
        e,
      );
    },
  },
  kn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkFeedback = bn));
  },
  Sn = {
    getAvailability(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_getAvailability",
        e,
      );
    },
    getPublicKey(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_getPublicKey",
        e,
      );
    },
    signAttestationPreimage(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_signAttestationPreimage",
        e,
        r,
      );
    },
    signForSessionHeader(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_signForSessionHeader",
        e,
        r,
        n,
      );
    },
    signCreateSessionBind(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_signCreateSessionBind",
        e,
        r,
      );
    },
    signTriggerOp(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_signTriggerOp",
        e,
        r,
        n,
        a,
        s,
      );
    },
    getLocalDeviceInfo(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_getLocalDeviceInfo",
        e,
      );
    },
    notifyRegistered(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DeviceRegistry_$_notifyRegistered",
        e,
      );
    },
  },
  Rn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].DeviceRegistry = Sn));
  },
  yn = {
    ensureScratchRoot(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_ensureScratchRoot",
        e,
      );
    },
    writeScratchFile(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_writeScratchFile",
        e,
        r,
        n,
      );
    },
    listScratchWorkingFiles(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_listScratchWorkingFiles",
        e,
      );
    },
    runClarkdownConvert(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_runClarkdownConvert",
        e,
        r,
      );
    },
    runClarkdownDownloadExport(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_runClarkdownDownloadExport",
        e,
        r,
      );
    },
    revealDownloadExport(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_revealDownloadExport",
        e,
        r,
      );
    },
    injectDocumentContext(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_DocumentFunnel_$_injectDocumentContext",
        e,
        r,
      );
    },
  },
  Cn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].DocumentFunnel = yn));
  },
  An = {
    writeFileDownloadAndOpen(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_writeFileDownloadAndOpen",
        e,
        r,
      );
    },
    writeFileDownload(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_writeFileDownload",
        e,
        r,
      );
    },
    whichApplication(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_whichApplication",
        e,
      );
    },
    browseFolder(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_browseFolder",
        e,
        r,
        n,
      );
    },
    browseFolders(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_browseFolders",
        e,
        r,
        n,
      );
    },
    listDirectory(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_listDirectory",
        e,
      );
    },
    getSystemPath(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_getSystemPath",
        e,
      );
    },
    openLocalFile(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_openLocalFile",
        e,
        r,
        n,
      );
    },
    listFilesInFolder(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_listFilesInFolder",
        e,
        r,
      );
    },
    readLocalFile(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_readLocalFile",
        e,
        r,
      );
    },
    getLocalFileThumbnail(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_getLocalFileThumbnail",
        e,
        r,
        n,
      );
    },
    writeLocalFile(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_writeLocalFile",
        e,
        r,
        n,
      );
    },
    showInFolder(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_showInFolder",
        e,
      );
    },
    savePastedFile(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_savePastedFile",
        e,
        r,
        n,
      );
    },
    browseFiles(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_browseFiles",
        e,
      );
    },
    exportLocalFileToGoogleDrive(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_exportLocalFileToGoogleDrive",
        e,
        r,
      );
    },
    promoteScratchpadFile(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_FileSystem_$_promoteScratchpadFile",
        e,
        r,
      );
    },
  },
  Ln = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].FileSystem = An));
  },
  Pn = {
    getOpenDocuments() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_OpenDocuments_$_getOpenDocuments",
      );
    },
    readOpenDocumentAsBase64(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_OpenDocuments_$_readOpenDocumentAsBase64",
        e,
      );
    },
  },
  xn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].OpenDocuments = Pn));
  },
  Mn = {
    fetchMentionOptions(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_fetchMentionOptions",
        e,
        r,
      );
    },
    handleMentionSelect(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_handleMentionSelect",
        e,
      );
    },
    setFocusedCwd(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_setFocusedCwd",
        e,
      );
    },
    setFocusedSshTarget(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_setFocusedSshTarget",
        e,
        r,
      );
    },
    listProjectFiles() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_listProjectFiles",
      );
    },
    searchFileContents(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_searchFileContents",
        e,
        r,
      );
    },
    setFindInPageClaimed(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_setFindInPageClaimed",
        e,
      );
    },
    onFindRequested(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_findRequested",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_findRequested",
            r,
          );
        }
      );
    },
    onFindStepRequested(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_findStepRequested",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Resources_$_findStepRequested",
            r,
          );
        }
      );
    },
  },
  Fn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].Resources = Mn));
  },
  Tn = {
    pair(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_pair",
        e,
        r,
      );
    },
    disconnect(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_disconnect",
        e,
      );
    },
    request(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_request",
        e,
      );
    },
    grandPrixStatusStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_grandPrixStatus_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_grandPrixStatus_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_grandPrixStatus_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_GrandPrix_$_grandPrixStatus_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  En = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].GrandPrix = Tn));
  },
  Dn = {
    isAvailable() {
      const e = t.ipcRenderer.sendSync(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_isAvailable",
      );
      if (e.error) throw new Error(e.error);
      return e.result;
    },
    getLogs(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getLogs",
        e,
      );
    },
    stopServer(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_stopServer",
        e,
      );
    },
    showPreview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_showPreview",
        e,
        r,
        n,
      );
    },
    hidePreview(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_hidePreview",
        e,
        r,
      );
    },
    destroyPreview(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_destroyPreview",
        e,
      );
    },
    refreshPreview(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_refreshPreview",
        e,
        r,
      );
    },
    setPreviewViewport(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_setPreviewViewport",
        e,
        r,
        n,
        a,
      );
    },
    clearPreviewViewport(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_clearPreviewViewport",
        e,
        r,
      );
    },
    setPreviewColorScheme(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_setPreviewColorScheme",
        e,
        r,
        n,
      );
    },
    toggleSelectionMode(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_toggleSelectionMode",
        e,
        r,
        n,
      );
    },
    startFromConfig(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_startFromConfig",
        e,
        r,
        n,
      );
    },
    focusOrOpenPreviewTab(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_focusOrOpenPreviewTab",
        e,
        r,
        n,
      );
    },
    openExternalLinkInPreview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_openExternalLinkInPreview",
        e,
        r,
        n,
      );
    },
    getConfiguredServices(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getConfiguredServices",
        e,
      );
    },
    getAutoVerify(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getAutoVerify",
        e,
      );
    },
    setAutoVerify(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_setAutoVerify",
        e,
        r,
      );
    },
    getPreviewUrl(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getPreviewUrl",
        e,
      );
    },
    navigatePreview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_navigatePreview",
        e,
        r,
        n,
      );
    },
    goBack(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_goBack",
        e,
        r,
      );
    },
    goForward(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_goForward",
        e,
        r,
      );
    },
    setActivePreviewTab(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_setActivePreviewTab",
        e,
        r,
      );
    },
    closePreviewTab(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_closePreviewTab",
        e,
        r,
      );
    },
    openPreviewTab(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_openPreviewTab",
        e,
        r,
      );
    },
    closeAllPreviewTabs(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_closeAllPreviewTabs",
        e,
      );
    },
    getPreviewTabs(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getPreviewTabs",
        e,
      );
    },
    capturePreviewScreenshot(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_capturePreviewScreenshot",
        e,
        r,
      );
    },
    capturePreviewScreenshotIfChanged(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_capturePreviewScreenshotIfChanged",
        e,
        r,
      );
    },
    exportPreview(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_exportPreview",
        e,
        r,
      );
    },
    getPreviewNavState(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getPreviewNavState",
        e,
        r,
      );
    },
    loadHtmlPreview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_loadHtmlPreview",
        e,
        r,
        n,
      );
    },
    loadClaudePagePreview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_loadClaudePagePreview",
        e,
        r,
        n,
      );
    },
    loadHtmlPreviewContent(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_loadHtmlPreviewContent",
        e,
        r,
        n,
        a,
        s,
      );
    },
    getPreviewAllowedOrigins() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_getPreviewAllowedOrigins",
      );
    },
    removePreviewAllowedOrigin(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_removePreviewAllowedOrigin",
        e,
      );
    },
    clearPreviewAllowedOrigins() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_clearPreviewAllowedOrigins",
      );
    },
    addPreviewAllowedOrigin(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_addPreviewAllowedOrigin",
        e,
      );
    },
    openPreviewInBrowser(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_openPreviewInBrowser",
        e,
        r,
      );
    },
    startBrowserPreview(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_startBrowserPreview",
        e,
        r,
      );
    },
    pickHtmlFile(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_pickHtmlFile",
        e,
      );
    },
    sendClaudePageShareCommand(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_sendClaudePageShareCommand",
        e,
      );
    },
    sendClaudePageDismissCommand(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_sendClaudePageDismissCommand",
        e,
      );
    },
    onElementSelected(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_elementSelected",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_elementSelected",
            r,
          );
        }
      );
    },
    onPreviewUrlChanged(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_previewUrlChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_previewUrlChanged",
            r,
          );
        }
      );
    },
    onPreviewTabsChanged(e) {
      const r = (n, a, s, i) => e(a, s, i);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_previewTabsChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_previewTabsChanged",
            r,
          );
        }
      );
    },
    onPreviewSelectionShortcut(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_previewSelectionShortcut",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_previewSelectionShortcut",
            r,
          );
        }
      );
    },
    activeServersStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_activeServers_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_activeServers_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_activeServers_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_Launch_$_activeServers_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  In = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].Launch = Dn));
  },
  On = {
    getState(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_NestDev_$_getState",
        e,
      );
    },
    focus(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_NestDev_$_focus",
        e,
      );
    },
  },
  Nn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].NestDev = On));
  },
  Wn = {
    shareSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_shareSession",
        e,
      );
    },
    start(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_start",
        e,
      );
    },
    forkSession(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_forkSession",
        e,
        r,
        n,
        a,
      );
    },
    sendMessage(e, r, n, a, s, i) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_sendMessage",
        e,
        r,
        n,
        a,
        s,
        i,
      );
    },
    setModel(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setModel",
        e,
        r,
      );
    },
    setEffort(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setEffort",
        e,
        r,
      );
    },
    getEffort(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getEffort",
        e,
      );
    },
    setFastMode(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setFastMode",
        e,
        r,
      );
    },
    applyFlagSettings(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_applyFlagSettings",
        e,
        r,
      );
    },
    getDefaultEffort() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getDefaultEffort",
      );
    },
    getContextUsage(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getContextUsage",
        e,
      );
    },
    warmSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_warmSession",
        e,
      );
    },
    startSideChat(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_startSideChat",
        e,
      );
    },
    sendSideChatMessage(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_sendSideChatMessage",
        e,
        r,
      );
    },
    stopSideChat(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stopSideChat",
        e,
      );
    },
    summarizeSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_summarizeSession",
        e,
      );
    },
    summarizeTranscript(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_summarizeTranscript",
        e,
        r,
      );
    },
    stopSessionSummary(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stopSessionSummary",
        e,
      );
    },
    stop(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stop",
        e,
      );
    },
    interrupt(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_interrupt",
        e,
      );
    },
    stopTask(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stopTask",
        e,
        r,
      );
    },
    cancelQueuedMessage(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_cancelQueuedMessage",
        e,
        r,
      );
    },
    reorderQueuedMessage(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_reorderQueuedMessage",
        e,
        r,
        n,
      );
    },
    promoteQueuedMessage(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_promoteQueuedMessage",
        e,
        r,
      );
    },
    logCliEvent(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_logCliEvent",
        e,
        r,
        n,
      );
    },
    reportSwitchTiming(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_reportSwitchTiming",
        e,
      );
    },
    reportComposerInp(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_reportComposerInp",
        e,
      );
    },
    reportStreamRender(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_reportStreamRender",
        e,
      );
    },
    clearSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_clearSession",
        e,
      );
    },
    rewind(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_rewind",
        e,
        r,
      );
    },
    rewindV2(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_rewindV2",
        e,
        r,
      );
    },
    getUncommittedChanges(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getUncommittedChanges",
        e,
      );
    },
    archive(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_archive",
        e,
        r,
      );
    },
    unarchive(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_unarchive",
        e,
      );
    },
    delete(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_delete",
        e,
      );
    },
    updateSession(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_updateSession",
        e,
        r,
      );
    },
    getSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSession",
        e,
      );
    },
    findLocalSessionIdForBridgeId(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_findLocalSessionIdForBridgeId",
        e,
      );
    },
    getAll() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getAll",
      );
    },
    getSessionsForScheduledTask(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSessionsForScheduledTask",
        e,
      );
    },
    getDetectedProjects() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getDetectedProjects",
      );
    },
    getCodeStats() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getCodeStats",
      );
    },
    getGitInfo(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getGitInfo",
        e,
      );
    },
    getLocalBranches(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getLocalBranches",
        e,
      );
    },
    getGitDiff(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getGitDiff",
        e,
        r,
        n,
      );
    },
    getGitDiffStats(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getGitDiffStats",
        e,
        r,
        n,
      );
    },
    getDiffFileContent(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getDiffFileContent",
        e,
        r,
        n,
        a,
      );
    },
    getGitCommits(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getGitCommits",
        e,
        r,
        n,
      );
    },
    getCommitDiff(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getCommitDiff",
        e,
        r,
      );
    },
    getTranscript(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getTranscript",
        e,
      );
    },
    searchSessions(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_searchSessions",
        e,
        r,
      );
    },
    openInVSCode(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_openInVSCode",
        e,
      );
    },
    isVSCodeInstalled() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_isVSCodeInstalled",
      );
    },
    getInstalledEditors(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getInstalledEditors",
        e,
      );
    },
    openInEditor(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_openInEditor",
        e,
        r,
        n,
        a,
      );
    },
    pickSessionFile(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_pickSessionFile",
        e,
      );
    },
    pickFileAtCwd(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_pickFileAtCwd",
        e,
      );
    },
    readFileAtCwd(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_readFileAtCwd",
        e,
        r,
      );
    },
    readSessionFile(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_readSessionFile",
        e,
        r,
      );
    },
    resolveSessionFile(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_resolveSessionFile",
        e,
        r,
      );
    },
    showSessionFilePreview(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_showSessionFilePreview",
        e,
        r,
        n,
        a,
      );
    },
    openSessionFileInDefaultApp(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_openSessionFileInDefaultApp",
        e,
        r,
      );
    },
    listSessionDirectory(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_listSessionDirectory",
        e,
        r,
      );
    },
    readSessionImageAsDataUrl(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_readSessionImageAsDataUrl",
        e,
        r,
        n,
      );
    },
    readSessionMediaAsDataUrl(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_readSessionMediaAsDataUrl",
        e,
        r,
      );
    },
    readSessionPanelMediaAsDataUrl(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_readSessionPanelMediaAsDataUrl",
        e,
        r,
      );
    },
    getSessionMediaStreamUrl(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSessionMediaStreamUrl",
        e,
        r,
      );
    },
    getSessionPanelMediaStreamUrl(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSessionPanelMediaStreamUrl",
        e,
        r,
      );
    },
    writeSessionFile(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_writeSessionFile",
        e,
        r,
        n,
        a,
      );
    },
    startPty(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_startPty",
        e,
        r,
        n,
      );
    },
    stopPty(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stopPty",
        e,
      );
    },
    resizePty(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_resizePty",
        e,
        r,
        n,
      );
    },
    writePty(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_writePty",
        e,
        r,
      );
    },
    startShellPty(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_startShellPty",
        e,
        r,
        n,
      );
    },
    stopShellPty(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stopShellPty",
        e,
      );
    },
    resizeShellPty(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_resizeShellPty",
        e,
        r,
        n,
      );
    },
    writeShellPty(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_writeShellPty",
        e,
        r,
      );
    },
    getShellPtyBuffer(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getShellPtyBuffer",
        e,
      );
    },
    getBusyShellPtyKeys(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getBusyShellPtyKeys",
        e,
      );
    },
    runBashCommand(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_runBashCommand",
        e,
        r,
      );
    },
    respondToToolPermission(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_respondToToolPermission",
        e,
        r,
        n,
      );
    },
    respondToRefusalFallbackPrompt(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_respondToRefusalFallbackPrompt",
        e,
        r,
        n,
      );
    },
    checkTrust(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_checkTrust",
        e,
      );
    },
    saveTrust(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_saveTrust",
        e,
      );
    },
    setPermissionMode(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setPermissionMode",
        e,
        r,
        n,
        a,
      );
    },
    getPermissionMode(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPermissionMode",
        e,
      );
    },
    launchUltrareview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_launchUltrareview",
        e,
        r,
        n,
      );
    },
    submitFeedback(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_submitFeedback",
        e,
        r,
      );
    },
    addDirectories(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_addDirectories",
        e,
        r,
      );
    },
    getDefaultPermissionMode(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getDefaultPermissionMode",
        e,
      );
    },
    getSupportedCommands(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSupportedCommands",
        e,
      );
    },
    getAgents(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getAgents",
        e,
      );
    },
    createAgent(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_createAgent",
        e,
      );
    },
    getPlanForSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPlanForSession",
        e,
      );
    },
    setMcpServers(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setMcpServers",
        e,
        r,
      );
    },
    replaceRemoteMcpServers(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_replaceRemoteMcpServers",
        e,
        r,
      );
    },
    replaceEnabledMcpTools(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_replaceEnabledMcpTools",
        e,
        r,
      );
    },
    mcpAuthenticate(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mcpAuthenticate",
        e,
        r,
        n,
      );
    },
    mcpReconnect(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mcpReconnect",
        e,
        r,
      );
    },
    mcpSubmitOAuthCallbackUrl(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mcpSubmitOAuthCallbackUrl",
        e,
        r,
        n,
      );
    },
    mcpCallTool(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mcpCallTool",
        e,
        r,
        n,
        a,
      );
    },
    mcpReadResource(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mcpReadResource",
        e,
        r,
        n,
      );
    },
    mcpListResources(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mcpListResources",
        e,
        r,
      );
    },
    setFocusedSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setFocusedSession",
        e,
      );
    },
    setAvailableCodeModels(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setAvailableCodeModels",
        e,
      );
    },
    setAccountBranchPrefix(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setAccountBranchPrefix",
        e,
      );
    },
    testSSHConnection(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_testSSHConnection",
        e,
      );
    },
    validateSSHPath(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_validateSSHPath",
        e,
        r,
      );
    },
    listSSHDirectory(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_listSSHDirectory",
        e,
        r,
      );
    },
    getSSHGitInfo(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHGitInfo",
        e,
        r,
      );
    },
    getSSHLocalBranches(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHLocalBranches",
        e,
        r,
      );
    },
    getSSHGitDiff(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHGitDiff",
        e,
        r,
        n,
        a,
      );
    },
    getSSHGitDiffStats(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHGitDiffStats",
        e,
        r,
        n,
        a,
      );
    },
    getSSHGitCommits(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHGitCommits",
        e,
        r,
        n,
        a,
      );
    },
    getSSHCommitDiff(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHCommitDiff",
        e,
        r,
        n,
      );
    },
    getSSHDiffFileContent(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHDiffFileContent",
        e,
        r,
        n,
        a,
        s,
      );
    },
    getSSHSupportedCommands(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHSupportedCommands",
        e,
        r,
      );
    },
    checkRemoteTrust(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_checkRemoteTrust",
        e,
        r,
      );
    },
    resolveSSHSettings(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_resolveSSHSettings",
        e,
        r,
      );
    },
    ensureSSHConnected(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_ensureSSHConnected",
        e,
      );
    },
    getSSHConfigs() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getSSHConfigs",
      );
    },
    setSSHConfigs(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setSSHConfigs",
        e,
      );
    },
    getTrustedSSHHosts() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getTrustedSSHHosts",
      );
    },
    setTrustedSSHHosts(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setTrustedSSHHosts",
        e,
      );
    },
    importCliSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_importCliSession",
        e,
      );
    },
    setVisibility(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setVisibility",
        e,
        r,
        n,
      );
    },
    checkGhAvailable(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_checkGhAvailable",
        e,
      );
    },
    listGhIssues(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_listGhIssues",
        e,
        r,
      );
    },
    getGhIssue(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getGhIssue",
        e,
        r,
        n,
      );
    },
    getGhRefSummary(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getGhRefSummary",
        e,
        r,
        n,
      );
    },
    getCrRefSummary(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getCrRefSummary",
        e,
        r,
        n,
      );
    },
    getCrCliStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getCrCliStatus",
      );
    },
    getCrForSession(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getCrForSession",
        e,
      );
    },
    isWorkingTreeDirty(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_isWorkingTreeDirty",
        e,
      );
    },
    getWorkingTreeStatus(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getWorkingTreeStatus",
        e,
      );
    },
    commitAllChanges(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_commitAllChanges",
        e,
        r,
      );
    },
    stashWorkingTree(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_stashWorkingTree",
        e,
        r,
      );
    },
    commitWipForBranchSwitch(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_commitWipForBranchSwitch",
        e,
        r,
      );
    },
    discardWorkingTree(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_discardWorkingTree",
        e,
      );
    },
    generateLocalPrContent(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_generateLocalPrContent",
        e,
        r,
      );
    },
    reviewDiff(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_reviewDiff",
        e,
      );
    },
    ensureBranchPushed(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_ensureBranchPushed",
        e,
      );
    },
    createLocalPr(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_createLocalPr",
        e,
      );
    },
    installGh() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_installGh",
      );
    },
    getPrChecks(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPrChecks",
        e,
        r,
        n,
      );
    },
    getCheckRunAnnotations(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getCheckRunAnnotations",
        e,
        r,
        n,
        a,
      );
    },
    rerunPrCheck(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_rerunPrCheck",
        e,
        r,
        n,
        a,
      );
    },
    getPrStateForBranch(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPrStateForBranch",
        e,
        r,
        n,
      );
    },
    getPrDetails(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPrDetails",
        e,
        r,
        n,
      );
    },
    getPrReviewComments(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPrReviewComments",
        e,
        r,
        n,
      );
    },
    getPrOverview(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPrOverview",
        e,
        r,
        n,
      );
    },
    getPrCommits(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getPrCommits",
        e,
        r,
        n,
      );
    },
    replyToPrReviewComment(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_replyToPrReviewComment",
        e,
        r,
        n,
        a,
        s,
      );
    },
    resolvePrReviewThread(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_resolvePrReviewThread",
        e,
        r,
        n,
        a,
      );
    },
    updatePrComment(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_updatePrComment",
        e,
        r,
        n,
        a,
        s,
      );
    },
    createPrReviewComment(e, r, n, a, s, i, c, _, l) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_createPrReviewComment",
        e,
        r,
        n,
        a,
        s,
        i,
        c,
        _,
        l,
      );
    },
    submitPrReview(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_submitPrReview",
        e,
        r,
        n,
        a,
        s,
      );
    },
    updatePrBody(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_updatePrBody",
        e,
        r,
        n,
        a,
      );
    },
    mergePr(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_mergePr",
        e,
        r,
        n,
        a,
      );
    },
    setAutoFixEnabled(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setAutoFixEnabled",
        e,
        r,
      );
    },
    dismissBoundPr(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_dismissBoundPr",
        e,
        r,
        n,
      );
    },
    enableAutoMerge(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_enableAutoMerge",
        e,
        r,
        n,
      );
    },
    disableAutoMerge(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_disableAutoMerge",
        e,
        r,
        n,
      );
    },
    markPrReady(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_markPrReady",
        e,
        r,
        n,
      );
    },
    markPrDraft(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_markPrDraft",
        e,
        r,
        n,
      );
    },
    popBackgroundTaskSuggestion(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_popBackgroundTaskSuggestion",
        e,
        r,
      );
    },
    popBackgroundTaskSuggestionById(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_popBackgroundTaskSuggestionById",
        e,
        r,
        n,
      );
    },
    notifySpawnedTaskStarted(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_notifySpawnedTaskStarted",
        e,
        r,
        n,
        a,
        s,
      );
    },
    getTeleportReadiness(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_getTeleportReadiness",
        e,
      );
    },
    teleportToCloud(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_teleportToCloud",
        e,
        r,
      );
    },
    beginTearOffHalo(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_beginTearOffHalo",
        e,
        r,
      );
    },
    setTearOffHalo(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_setTearOffHalo",
        e,
      );
    },
    endTearOffHalo() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_endTearOffHalo",
      );
    },
    onOnEvent(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_onEvent",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_onEvent",
            r,
          );
        }
      );
    },
    respondToSSHPassword(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_respondToSSHPassword",
        e,
        r,
      );
    },
    onOnToolPermissionRequest(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_onToolPermissionRequest",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_onToolPermissionRequest",
            r,
          );
        }
      );
    },
    onOnSSHPasswordRequired(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_onSSHPasswordRequired",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessions_$_onSSHPasswordRequired",
            r,
          );
        }
      );
    },
  },
  Un = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].LocalSessions = Wn));
  },
  Vn = {
    get() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessionEnvironment_$_get",
      );
    },
    save(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalSessionEnvironment_$_save",
        e,
      );
    },
  },
  Zn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].LocalSessionEnvironment = Vn));
  },
  jn = {
    getPlugins(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_getPlugins",
        e,
        r,
      );
    },
    getDownloadedRemotePlugins(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_getDownloadedRemotePlugins",
        e,
      );
    },
    syncRemotePlugins(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_syncRemotePlugins",
        e,
      );
    },
    listSkillFiles(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_listSkillFiles",
        e,
        r,
        n,
      );
    },
    uploadPlugin(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_uploadPlugin",
        e,
        r,
        n,
        a,
      );
    },
    deletePlugin(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_deletePlugin",
        e,
        r,
      );
    },
    setPluginEnabled(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_setPluginEnabled",
        e,
        r,
        n,
      );
    },
    getPluginOAuthStatus(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_getPluginOAuthStatus",
        e,
        r,
      );
    },
    startPluginOAuthFlow(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_startPluginOAuthFlow",
        e,
        r,
        n,
      );
    },
    revokePluginOAuth(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_revokePluginOAuth",
        e,
        r,
        n,
      );
    },
    getPluginCliStatus(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_getPluginCliStatus",
        e,
        r,
      );
    },
    setPluginEnvVars(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_setPluginEnvVars",
        e,
        r,
        n,
        a,
      );
    },
    setPluginOAuthClient(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_setPluginOAuthClient",
        e,
        r,
        n,
        a,
        s,
      );
    },
    getPluginShimOps(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_getPluginShimOps",
        e,
        r,
        n,
      );
    },
    getPluginCliBatch(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_getPluginCliBatch",
        e,
        r,
      );
    },
    setPluginShimPermission(e, r, n, a, s) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_setPluginShimPermission",
        e,
        r,
        n,
        a,
        s,
      );
    },
    onOnCliOpAlwaysAllowed(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_onCliOpAlwaysAllowed",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_LocalPlugins_$_onCliOpAlwaysAllowed",
            r,
          );
        }
      );
    },
  },
  Hn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].LocalPlugins = jn));
  },
  Bn = {
    listServers() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_PluginBridgeMcp_$_listServers",
      );
    },
    onChanged(e) {
      const r = (n) => e();
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_PluginBridgeMcp_$_changed",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_PluginBridgeMcp_$_changed",
            r,
          );
        }
      );
    },
  },
  zn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].PluginBridgeMcp = Bn));
  },
  Gn = {
    addMarketplace(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_addMarketplace",
        e,
        r,
        n,
      );
    },
    removeMarketplace(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_removeMarketplace",
        e,
        r,
        n,
        a,
      );
    },
    refreshMarketplace(e, r, n, a) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_refreshMarketplace",
        e,
        r,
        n,
        a,
      );
    },
    listMarketplaces(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_listMarketplaces",
        e,
        r,
      );
    },
    installPlugin(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_installPlugin",
        e,
        r,
        n,
      );
    },
    updatePlugin(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_updatePlugin",
        e,
        r,
        n,
      );
    },
    uninstallPlugin(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_uninstallPlugin",
        e,
        r,
        n,
      );
    },
    listInstalledPlugins(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_listInstalledPlugins",
        e,
        r,
      );
    },
    listAvailablePlugins(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_listAvailablePlugins",
        e,
        r,
      );
    },
    getCachedCommands() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_getCachedCommands",
      );
    },
    getInstallCounts() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_getInstallCounts",
      );
    },
    listRemotePluginsPage(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_listRemotePluginsPage",
        e,
        r,
      );
    },
    checkPluginHasLocalChanges(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_checkPluginHasLocalChanges",
        e,
        r,
      );
    },
    getAndClearMigrationIssues() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_getAndClearMigrationIssues",
      );
    },
    listLocalOrgPlugins() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_listLocalOrgPlugins",
      );
    },
    installLocalOrgPlugin(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_installLocalOrgPlugin",
        e,
      );
    },
    syncLocalOrgPlugins() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_syncLocalOrgPlugins",
      );
    },
    onInstallProgress(e) {
      const r = (n, a, s) => e(a, s);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_installProgress",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CustomPlugins_$_installProgress",
            r,
          );
        }
      );
    },
  },
  qn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CustomPlugins = Gn));
  },
  Qn = {
    getAllScheduledTasks() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_getAllScheduledTasks",
      );
    },
    getScheduledTaskFileContent(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_getScheduledTaskFileContent",
        e,
      );
    },
    updateScheduledTaskFileContent(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_updateScheduledTaskFileContent",
        e,
        r,
      );
    },
    updateScheduledTaskStatus(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_updateScheduledTaskStatus",
        e,
        r,
        n,
      );
    },
    createScheduledTask(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_createScheduledTask",
        e,
      );
    },
    updateScheduledTask(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_updateScheduledTask",
        e,
      );
    },
    removeApprovedPermission(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_removeApprovedPermission",
        e,
        r,
        n,
      );
    },
    clearChromePermissions(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_clearChromePermissions",
        e,
      );
    },
    getWatcherHistory(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_getWatcherHistory",
        e,
      );
    },
    onOnScheduledTaskEvent(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_onScheduledTaskEvent",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CoworkScheduledTasks_$_onScheduledTaskEvent",
            r,
          );
        }
      );
    },
  },
  Jn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CoworkScheduledTasks = Qn));
  },
  Kn = {
    getAllScheduledTasks() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_getAllScheduledTasks",
      );
    },
    getScheduledTaskFileContent(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_getScheduledTaskFileContent",
        e,
      );
    },
    updateScheduledTaskFileContent(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_updateScheduledTaskFileContent",
        e,
        r,
      );
    },
    updateScheduledTaskStatus(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_updateScheduledTaskStatus",
        e,
        r,
        n,
      );
    },
    createScheduledTask(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_createScheduledTask",
        e,
      );
    },
    updateScheduledTask(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_updateScheduledTask",
        e,
      );
    },
    removeApprovedPermission(e, r, n) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_removeApprovedPermission",
        e,
        r,
        n,
      );
    },
    getWatcherHistory(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_getWatcherHistory",
        e,
      );
    },
    onOnScheduledTaskEvent(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_onScheduledTaskEvent",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_CCDScheduledTasks_$_onScheduledTaskEvent",
            r,
          );
        }
      );
    },
  },
  Yn = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].CCDScheduledTasks = Kn));
  };
function f() {
  var r;
  let e;
  try {
    e = new URL(window.location.href);
  } catch {
    return !1;
  }
  return !!(
    ("frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((r = u.webFrame.top) == null ? void 0 : r.routingId) ===
        u.webFrame.routingId) &&
    ((e.origin === "null" || e.origin === null
      ? `${e.protocol}//${e.host}`
      : e.origin) === "https://claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.ai" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://claude.com" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "https://preview.claude.com" ||
      e.hostname === "localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin) === "app://localhost" ||
      (e.origin === "null" || e.origin === null
        ? `${e.protocol}//${e.host}`
        : e.origin
      ).endsWith(".ant.dev"))
  );
}
const Xn = {
    download() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_download",
      );
    },
    startVM(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_startVM",
        e,
      );
    },
    getDownloadStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_getDownloadStatus",
      );
    },
    getRunningStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_getRunningStatus",
      );
    },
    isHostLoopModeEnabled() {
      const e = t.ipcRenderer.sendSync(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_isHostLoopModeEnabled",
      );
      if (e.error) throw new Error(e.error);
      return e.result;
    },
    isHostLoopDevOverrideActive() {
      const e = t.ipcRenderer.sendSync(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_isHostLoopDevOverrideActive",
      );
      if (e.error) throw new Error(e.error);
      return e.result;
    },
    setForceDisableHostLoop(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_setForceDisableHostLoop",
        e,
      );
    },
    setYukonSilverConfig(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_setYukonSilverConfig",
        e,
      );
    },
    deleteAndReinstall() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_deleteAndReinstall",
      );
    },
    checkVirtualMachinePlatform() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_checkVirtualMachinePlatform",
      );
    },
    enableVirtualMachinePlatform() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_enableVirtualMachinePlatform",
      );
    },
    restartAfterVMPInstall() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_restartAfterVMPInstall",
      );
    },
    onDownloadProgress(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_downloadProgress",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_downloadProgress",
            r,
          );
        }
      );
    },
    onDownloadStatusChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_downloadStatusChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_downloadStatusChanged",
            r,
          );
        }
      );
    },
    onRunningStatusChanged(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_runningStatusChanged",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_runningStatusChanged",
            r,
          );
        }
      );
    },
    onStartupError(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_startupError",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_startupError",
            r,
          );
        }
      );
    },
    apiReachabilityStore: {
      getState() {
        return t.ipcRenderer.invoke(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_apiReachability_$store$_getState",
        );
      },
      getStateSync() {
        const e = t.ipcRenderer.sendSync(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_apiReachability_$store$_getStateSync",
        );
        if (e.error) throw new Error(e.error);
        return e.result;
      },
      onStateChange(e) {
        const r = (n, a) => e(a);
        return (
          t.ipcRenderer.on(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_apiReachability_$store$_update",
            r,
          ),
          () => {
            t.ipcRenderer.removeListener(
              "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.web_$_ClaudeVM_$_apiReachability_$store$_update",
              r,
            );
          }
        );
      },
    },
  },
  ea = (e) => {
    f() &&
      ((e["claude.web"] = e["claude.web"] || {}),
      (e["claude.web"].ClaudeVM = Xn));
  },
  m = {};
bt(m);
St(m);
yt(m);
At(m);
Pt(m);
Mt(m);
Tt(m);
Dt(m);
Ot(m);
Wt(m);
Vt(m);
jt(m);
Bt(m);
Gt(m);
Qt(m);
Kt(m);
Xt(m);
rn(m);
nn(m);
sn(m);
_n(m);
dn(m);
$n(m);
pn(m);
mn(m);
vn(m);
wn(m);
kn(m);
Rn(m);
Cn(m);
Ln(m);
xn(m);
Fn(m);
En(m);
In(m);
Nn(m);
Un(m);
Zn(m);
Hn(m);
zn(m);
qn(m);
Jn(m);
Yn(m);
ea(m);
for (const [e, r] of Object.entries(m)) t.contextBridge.exposeInMainWorld(e, r);
function ra() {
  if (typeof __ELECTRON_WINDOW_ALLOWED_ORIGINS__ > "u") return !0;
  try {
    const e = new URL(window.location.href),
      r =
        e.origin === "null" || e.origin === null
          ? `${e.protocol}//${e.host}`
          : e.origin;
    return __ELECTRON_WINDOW_ALLOWED_ORIGINS__.includes(r);
  } catch {
    return !1;
  }
}
function ta() {
  var e;
  return (
    "frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
      ? u.webFrame.top.frameToken === u.webFrame.frameToken
      : ((e = u.webFrame.top) == null ? void 0 : e.routingId) ===
        u.webFrame.routingId
  )
    ? ra()
    : !1;
}
var na = {
    RegisterWindow(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_RegisterWindow",
        e,
        r,
      );
    },
    UnregisterWindow(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_UnregisterWindow",
        e,
      );
    },
    UpdateWindow(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_UpdateWindow",
        e,
        r,
      );
    },
    DestroyWindow(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_DestroyWindow",
        e,
      );
    },
    WindowAction(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_WindowAction",
        e,
        r,
      );
    },
    GetWindowState(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_GetWindowState",
        e,
      );
    },
    onWindowEvent(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_WindowEvent",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_fcb91d11-972d-4fd6-b90b-72739699bff5_$_electron_window_$_WindowManager_$_WindowEvent",
            r,
          );
        }
      );
    },
  },
  aa = (e) => {
    ta() &&
      ((e.electron_window = e.electron_window || {}),
      (e.electron_window.WindowManager = na));
  },
  er = {};
aa(er);
for (const [e, r] of Object.entries(er))
  t.contextBridge.exposeInMainWorld(e, r);
var X = ((e) => (
  (e.Ready = "ready"),
  (e.Connected = "connected"),
  (e.Disconnected = "disconnected"),
  e
))(X || {});
function sa() {
  var e;
  return "frameToken" in u.webFrame &&
    u.webFrame.top &&
    "frameToken" in u.webFrame.top
    ? u.webFrame.top.frameToken === u.webFrame.frameToken
    : ((e = u.webFrame.top) == null ? void 0 : e.routingId) ===
        u.webFrame.routingId;
}
const ia = {
    status() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_status",
      );
    },
    deviceStatus() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_deviceStatus",
      );
    },
    setName(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_setName",
        e,
      );
    },
    pairDevice() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_pairDevice",
      );
    },
    scanDevices() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_scanDevices",
      );
    },
    pickDevice(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_pickDevice",
        e,
      );
    },
    cancelScan() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_cancelScan",
      );
    },
    submitPin(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_submitPin",
        e,
      );
    },
    forgetDevice() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_forgetDevice",
      );
    },
    pickFolder() {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_pickFolder",
      );
    },
    preview(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_preview",
        e,
      );
    },
    install(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_install",
        e,
      );
    },
    onProgress(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_progress",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_progress",
            r,
          );
        }
      );
    },
    onPairingPrompt(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_pairingPrompt",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_Buddy_$_pairingPrompt",
            r,
          );
        }
      );
    },
  },
  ca = (e) => {
    sa() &&
      ((e["claude.buddy"] = e["claude.buddy"] || {}),
      (e["claude.buddy"].Buddy = ia));
  },
  oe = {
    rx(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_BuddyBleTransport_$_rx",
        e,
      );
    },
    reportState(e, r) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_BuddyBleTransport_$_reportState",
        e,
        r,
      );
    },
    log(e) {
      return t.ipcRenderer.invoke(
        "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_BuddyBleTransport_$_log",
        e,
      );
    },
    onTx(e) {
      const r = (n, a) => e(a);
      return (
        t.ipcRenderer.on(
          "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_BuddyBleTransport_$_tx",
          r,
        ),
        () => {
          t.ipcRenderer.removeListener(
            "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.buddy_$_BuddyBleTransport_$_tx",
            r,
          );
        }
      );
    },
  },
  rr = {};
ca(rr);
for (const [e, r] of Object.entries(rr))
  t.contextBridge.exposeInMainWorld(e, r);
const tr = "6e400001-b5a3-f393-e0a9-e50e24dcca9e",
  _a = "6e400002-b5a3-f393-e0a9-e50e24dcca9e",
  oa = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";
let ie = null,
  T = null,
  U = "",
  V = null,
  q = null,
  Q = null,
  nr = new TextDecoder("utf-8");
function ee() {
  (q && Q && q.removeEventListener("gattserverdisconnected", Q),
    T == null || T.removeEventListener("characteristicvaluechanged", ar),
    V == null || V.disconnect(),
    (V = null),
    (q = null),
    (Q = null),
    (ie = null),
    (T = null),
    (U = ""),
    (nr = new TextDecoder("utf-8")));
}
function da() {
  (ee(), _e(X.Disconnected));
}
function ce(e) {
  oe.log(e);
}
function _e(e, r = null) {
  oe.reportState(e, r);
}
function ar(e) {
  const r = e.target.value,
    n = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  U += nr.decode(n, { stream: !0 });
  let a;
  for (
    ;
    (a = U.indexOf(`
`)) >= 0;
  ) {
    const s = U.slice(0, a).replace(/\r$/, "");
    ((U = U.slice(a + 1)), s && oe.rx(s));
  }
}
async function ua(e) {
  (ee(),
    (q = e),
    (Q = () => {
      q === e && (ee(), _e(X.Disconnected));
    }),
    e.addEventListener("gattserverdisconnected", Q));
  try {
    V = await e.gatt.connect();
    const r = await V.getPrimaryService(tr);
    ((ie = await r.getCharacteristic(_a)), (T = await r.getCharacteristic(oa)));
    try {
      await T.startNotifications();
    } catch (n) {
      (ce(`startNotifications: ${n.message}; retrying after pair`),
        await new Promise((a) => setTimeout(a, 1500)),
        await T.startNotifications());
    }
    (T.addEventListener("characteristicvaluechanged", ar),
      _e(X.Connected, e.name ?? "Nibblet"));
  } catch (r) {
    throw (ee(), r);
  }
}
async function $a() {
  const e = navigator;
  if (!e.bluetooth) return (ce("Web Bluetooth not available"), !1);
  try {
    const r = await e.bluetooth.requestDevice({
      acceptAllDevices: !0,
      optionalServices: [tr],
    });
    return (await ua(r), !0);
  } catch (r) {
    return (ce(`pair failed: ${r.message}`), !1);
  }
}
let Ne = Promise.resolve();
const la = new TextEncoder();
function pa(e) {
  Ne = Ne.then(async () => {
    if (!ie) return;
    const r = la.encode(
        e +
          `
`,
      ),
      n = 180;
    for (let a = 0; a < r.length; a += n)
      await ie.writeValueWithoutResponse(r.slice(a, a + n));
  }).catch((r) => ce(`write failed: ${r.message}`));
}
function ga() {
  (oe.onTx((e) => pa(e)),
    t.contextBridge.exposeInMainWorld("buddyBle", { pair: $a, disconnect: da }),
    _e(X.Ready));
}
const ma = {
  filePickers: { getPathForFile: (e) => t.webUtils.getPathForFile(e) },
};
function ha() {
  const e = JSON.parse(
      '{"commitHash":"259c3fc2a647e4222ca15e99bba9b2649f31f051","isNestBuild":false,"commitTimestamp":"2026-07-02T07:11:03.000Z","buildType":"prod","appVersion":"1.18286.0"}',
    ),
    r = vt.safeParse(e);
  return r.success
    ? r.data
    : {
        buildType: "prod",
        commitHash: "UNKNOWN",
        commitTimestamp: "",
        isNestBuild: !1,
        appVersion: "0.0.0",
      };
}
var We = {};
const va = Object.fromEntries(
    ["arch", "platform", "type", "versions"].map((e) => [e, !0]),
  ),
  we = Object.fromEntries(Object.entries(process).filter(([e]) => va[e]));
we.version = ha().appVersion;
we.env = We.CI ? { CI: We.CI } : {};
try {
  ga();
} catch (e) {
  console.error("[buddyBle setup]", e);
}
t.contextBridge.exposeInMainWorld("claudeAppBindings", {
  registerBinding: (e, r) => {
    (be(e), t.ipcRenderer.on(e, r));
  },
  unregisterBinding: (e) => {
    (be(e), t.ipcRenderer.removeAllListeners(e));
  },
  listMcpServers: () => t.ipcRenderer.invoke(D.ListMcpServers),
  connectToMcpServer: (e) => t.ipcRenderer.invoke(D.ConnectToMcpServer, e),
  openMcpSettings: (e) => t.ipcRenderer.invoke(D.RequestOpenMcpSettings, e),
});
t.contextBridge.exposeInMainWorld("claudeAppSettings", ma);
t.ipcRenderer.on(D.McpServerConnected, (e, r) => {
  window.postMessage(
    {
      type: D.McpServerConnected,
      serverName: r.serverName,
      uuid: r == null ? void 0 : r.uuid,
    },
    "*",
    e.ports,
  );
});
t.ipcRenderer.on(D.McpServerAutoReconnect, (e, r) => {
  window.postMessage({ type: D.McpServerAutoReconnect, serverName: r }, "*");
});
t.ipcRenderer.on(ke, (e) => {
  window.postMessage({ type: ke }, "*", e.ports);
});
t.contextBridge.exposeInMainWorld("process", we);
const Ue = process.argv.find((e) => e.startsWith("--desktop-features="));
if (Ue)
  try {
    const e = JSON.parse(Ue.slice(19));
    t.contextBridge.exposeInMainWorld("desktopBootFeatures", e);
  } catch {}
const Ve = process.argv.find((e) =>
  e.startsWith("--desktop-enterprise-config="),
);
if (Ve)
  try {
    const e = JSON.parse(Ve.slice(28));
    t.contextBridge.exposeInMainWorld("desktopEnterpriseConfig", e);
  } catch {}
const Ze = process.argv.find((e) =>
  e.startsWith("--desktop-telemetry-config="),
);
if (Ze)
  try {
    const e = JSON.parse(Ze.slice(27));
    t.contextBridge.exposeInMainWorld("desktopTelemetryConfig", e);
  } catch {}
t.contextBridge.exposeInMainWorld("electronWindowControl", Xe);
t.contextBridge.exposeInMainWorld("electronIntl", Ke);
window.addEventListener(
  "mouseup",
  (e) => {
    e.isTrusted &&
      (e.button === 3
        ? (e.preventDefault(), history.back())
        : e.button === 4 && (e.preventDefault(), history.forward()));
  },
  !0,
);
//# sourceMappingURL=mainView.js.map
