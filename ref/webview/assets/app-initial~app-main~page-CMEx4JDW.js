import { t as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Os as t,
  Ts as n,
  es as r,
  ks as i,
  ns as a,
  rs as o,
  vs as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import { ui as c } from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import { m as l } from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
var u = e((e, t) => {
    var n = c(),
      r = i(),
      a = Object.prototype.hasOwnProperty;
    function o(e, t, i) {
      var o = e[t];
      (!(a.call(e, t) && r(o, i)) || (i === void 0 && !(t in e))) && n(e, t, i);
    }
    t.exports = o;
  }),
  d = e((e, t) => {
    var n = u(),
      r = c();
    function i(e, t, i, a) {
      var o = !i;
      i ||= {};
      for (var s = -1, c = t.length; ++s < c; ) {
        var l = t[s],
          u = a ? a(i[l], e[l], l, i, e) : void 0;
        (u === void 0 && (u = e[l]), o ? r(i, l, u) : n(i, l, u));
      }
      return i;
    }
    t.exports = i;
  }),
  f = e((e, t) => {
    function n(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    t.exports = n;
  }),
  p = e((e, t) => {
    var r = n(),
      i = a(),
      o = f(),
      s = Object.prototype.hasOwnProperty;
    function c(e) {
      if (!r(e)) return o(e);
      var t = i(e),
        n = [];
      for (var a in e)
        (a == `constructor` && (t || !s.call(e, a))) || n.push(a);
      return n;
    }
    t.exports = c;
  }),
  m = e((e, t) => {
    var n = o(),
      i = p(),
      a = r();
    function s(e) {
      return a(e) ? n(e, !0) : i(e);
    }
    t.exports = s;
  }),
  h = e((e, n) => {
    var r = t(),
      i = typeof e == `object` && e && !e.nodeType && e,
      a = i && typeof n == `object` && n && !n.nodeType && n,
      o = a && a.exports === i ? r.Buffer : void 0,
      s = o ? o.allocUnsafe : void 0;
    function c(e, t) {
      if (t) return e.slice();
      var n = e.length,
        r = s ? s(n) : new e.constructor(n);
      return (e.copy(r), r);
    }
    n.exports = c;
  }),
  g = e((e, t) => {
    function n(e, t) {
      var n = -1,
        r = e.length;
      for (t ||= Array(r); ++n < r; ) t[n] = e[n];
      return t;
    }
    t.exports = n;
  }),
  _ = e((e, t) => {
    var n = s();
    function r(e) {
      var t = new e.constructor(e.byteLength);
      return (new n(t).set(new n(e)), t);
    }
    t.exports = r;
  }),
  v = e((e, t) => {
    var n = _();
    function r(e, t) {
      var r = t ? n(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    t.exports = r;
  }),
  y = e((e, t) => {
    var r = n(),
      i = Object.create;
    t.exports = (function () {
      function e() {}
      return function (t) {
        if (!r(t)) return {};
        if (i) return i(t);
        e.prototype = t;
        var n = new e();
        return ((e.prototype = void 0), n);
      };
    })();
  }),
  b = e((e, t) => {
    var n = y(),
      r = l(),
      i = a();
    function o(e) {
      return typeof e.constructor == `function` && !i(e) ? n(r(e)) : {};
    }
    t.exports = o;
  });
export { h as a, u as c, g as i, v as n, m as o, _ as r, d as s, b as t };
//# sourceMappingURL=app-initial~app-main~page-CMEx4JDW.js.map
