// Restored from ref/webview/assets/load-script-CELRAn-0.js
// LoadScript chunk restored from the Codex webview bundle.
function loadScriptL() {
  return typeof window < "u";
}
export function loadScriptU() {
  return !loadScriptL();
}
var loadScriptValue1 = "analytics";
function loadScriptO() {
  return window[loadScriptValue1];
}
export function loadScriptC(_loadScriptL) {
  loadScriptValue1 = _loadScriptL;
}
export function loadScriptS(_loadScriptL) {
  window[loadScriptValue1] = _loadScriptL;
}
var loadScriptValue2 =
    /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/,
  loadScriptValue3 = function () {
    var _loadScriptL;
    return (
      Array.prototype.slice
        .call(document.querySelectorAll("script"))
        .forEach(function (_loadScriptU) {
          var loadScriptValue11 = _loadScriptU.getAttribute("src") ?? "",
            _loadScriptO = loadScriptValue2.exec(loadScriptValue11);
          _loadScriptO && _loadScriptO[1] && (_loadScriptL = _loadScriptO[1]);
        }),
      _loadScriptL
    );
  },
  loadScriptValue4,
  loadScriptValue5 = function () {
    return loadScriptValue4 ?? loadScriptO()?._cdn;
  },
  loadScriptR = function () {
    return (
      loadScriptValue5() || loadScriptValue3() || "https://cdn.segment.com"
    );
  };
export const loadScriptI = function () {
  return `${loadScriptR()}/next-integrations`;
};
export const loadScriptA = function (_loadScriptL) {
  var _loadScriptU = loadScriptO();
  _loadScriptU && (_loadScriptU._cdn = _loadScriptL);
  loadScriptValue4 = _loadScriptL;
};
function loadScriptHelper1(_loadScriptL) {
  return Array.prototype.slice
    .call(window.document.querySelectorAll("script"))
    .find(function (_loadScriptU) {
      return _loadScriptU.src === _loadScriptL;
    });
}
export function loadScriptT(_loadScriptL, _loadScriptU) {
  var loadScriptValue6 = loadScriptHelper1(_loadScriptL);
  if (loadScriptValue6 !== undefined) {
    var _loadScriptO = loadScriptValue6?.getAttribute("status");
    if (_loadScriptO === "loaded") return Promise.resolve(loadScriptValue6);
    if (_loadScriptO === "loading")
      return new Promise(function (__loadScriptL, __loadScriptU) {
        loadScriptValue6.addEventListener("load", function () {
          return __loadScriptL(loadScriptValue6);
        });
        loadScriptValue6.addEventListener("error", function (___loadScriptL) {
          return __loadScriptU(___loadScriptL);
        });
      });
  }
  return new Promise(function (loadScriptParam1, __loadScriptO) {
    var _loadScriptC,
      _loadScriptS = window.document.createElement("script");
    _loadScriptS.type = "text/javascript";
    _loadScriptS.src = _loadScriptL;
    _loadScriptS.async = true;
    _loadScriptS.setAttribute("status", "loading");
    for (
      var loadScriptValue7 = 0,
        loadScriptValue8 = Object.entries(_loadScriptU ?? {});
      loadScriptValue7 < loadScriptValue8.length;
      loadScriptValue7++
    ) {
      var loadScriptValue9 = loadScriptValue8[loadScriptValue7],
        loadScriptValue10 = loadScriptValue9[0],
        _loadScriptA = loadScriptValue9[1];
      _loadScriptS.setAttribute(loadScriptValue10, _loadScriptA);
    }
    _loadScriptS.onload = function () {
      _loadScriptS.onerror = _loadScriptS.onload = null;
      _loadScriptS.setAttribute("status", "loaded");
      loadScriptParam1(_loadScriptS);
    };
    _loadScriptS.onerror = function () {
      _loadScriptS.onerror = _loadScriptS.onload = null;
      _loadScriptS.setAttribute("status", "error");
      __loadScriptO(Error(`Failed to load ${_loadScriptL}`));
    };
    var _loadScriptR = window.document.querySelector("script");
    _loadScriptR
      ? (_loadScriptC = _loadScriptR.parentElement) == null ||
        _loadScriptC.insertBefore(_loadScriptS, _loadScriptR)
      : window.document.head.appendChild(_loadScriptS);
  });
}
export function loadScriptN(_loadScriptL) {
  var _loadScriptU = loadScriptHelper1(_loadScriptL);
  return (
    _loadScriptU !== undefined && _loadScriptU.remove(),
    Promise.resolve()
  );
}
export { loadScriptL, loadScriptO, loadScriptR };
