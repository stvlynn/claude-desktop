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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = "f9e872dd-9759-4c3b-afc7-d791763a7b6d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-f9e872dd-9759-4c3b-afc7-d791763a7b6d"));
  })();
} catch {}
const n = require("electron");
n.contextBridge.exposeInMainWorld("wrChooserApi", {
  choose: (e) => n.ipcRenderer.invoke("wr-chooser-choose", e),
});
//# sourceMappingURL=watchRecordChooser.js.map
