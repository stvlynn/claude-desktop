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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "527a8275-8311-442c-b236-82db6d33a3a4"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-527a8275-8311-442c-b236-82db6d33a3a4"));
  })();
} catch {}
const d = require("electron");
d.contextBridge.exposeInMainWorld("cuWatchRecord", {
  onStepCount: (e) => {
    d.ipcRenderer.on("cu-watch-record:stepCount", (n, o) => e(o));
  },
  done: () => d.ipcRenderer.invoke("cu-watch-record:done"),
  discard: () => d.ipcRenderer.invoke("cu-watch-record:discard"),
});
//# sourceMappingURL=computerUseWatchRecord.js.map
