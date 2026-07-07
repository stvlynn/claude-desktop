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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "531a64e6-1d34-4a6d-8884-ca5314d76254"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-531a64e6-1d34-4a6d-8884-ca5314d76254"));
  })();
} catch {}
const r = require("electron");
require("electron/renderer");
var o = ((e) => ((e.Back = "back"), (e.Forward = "forward"), e))(o || {});
const n = {
  callMcpTool(e, a, t) {
    return r.ipcRenderer.invoke(
      "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_callMcpTool",
      e,
      a,
      t,
    );
  },
  askClaude(e, a) {
    return r.ipcRenderer.invoke(
      "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_askClaude",
      e,
      a,
    );
  },
  runScheduledTask(e, a) {
    return r.ipcRenderer.invoke(
      "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_runScheduledTask",
      e,
      a,
    );
  },
  navigateHost(e) {
    return r.ipcRenderer.invoke(
      "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_navigateHost",
      e,
    );
  },
  openExternalUrl(e) {
    return r.ipcRenderer.invoke(
      "$eipc_message$_2e859840-2ca2-4c0d-8e99-1a92e89e2e22_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_openExternalUrl",
      e,
    );
  },
};
r.contextBridge.exposeInMainWorld("cowork", {
  callMcpTool: (e, a) => {
    var t;
    return (t = n.callMcpTool) == null
      ? void 0
      : t.call(n, e, a, {
          hasUserActivation: navigator.userActivation.isActive,
        });
  },
  askClaude: n.askClaude,
  sample: n.askClaude,
  runScheduledTask: (e) => {
    var a;
    return (a = n.runScheduledTask) == null
      ? void 0
      : a.call(n, e, { hasUserActivation: navigator.userActivation.isActive });
  },
});
function d(e) {
  var t, c, i;
  if (!e.isTrusted) return;
  const a =
    (c = (t = e.target) == null ? void 0 : t.closest) == null
      ? void 0
      : c.call(t, "a[href]");
  a instanceof HTMLAnchorElement &&
    (!a.protocol ||
      a.protocol === "cowork-artifact:" ||
      (e.preventDefault(),
      (i = n.openExternalUrl) == null || i.call(n, a.href)));
}
window.addEventListener(
  "click",
  (e) => {
    e.button === 0 && d(e);
  },
  !0,
);
window.addEventListener(
  "auxclick",
  (e) => {
    e.button === 1 && d(e);
  },
  !0,
);
process.platform === "darwin" &&
  window.addEventListener(
    "mouseup",
    (e) => {
      var a, t;
      e.isTrusted &&
        (e.button === 3
          ? (e.preventDefault(),
            (a = n.navigateHost) == null || a.call(n, o.Back))
          : e.button === 4 &&
            (e.preventDefault(),
            (t = n.navigateHost) == null || t.call(n, o.Forward)));
    },
    !0,
  );
//# sourceMappingURL=coworkArtifact.js.map
