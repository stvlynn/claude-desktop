import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  As as n,
  C as r,
  D as i,
  E as a,
  Ma as o,
  O as s,
  Rs as c,
  S as l,
  Vo as u,
  _c as d,
  dt as f,
  ft as p,
  gc as m,
  lc as h,
  qo as g,
  ut as ee,
  wa as te,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as ne,
  Em as re,
  Om as ie,
  Tm as ae,
  ds as oe,
  fs as se,
  ls as ce,
  us as le,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Al as ue,
  Dl as de,
  Fa as fe,
  Iy as pe,
  Ol as me,
  kl as he,
  nv as ge,
  tv as _e,
  xa as ve,
  zy as ye,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  f as be,
  p as xe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
var Se,
  Ce,
  we = e(() => {
    (t(d()),
      (Se = h()),
      (Ce = (e) =>
        (0, Se.jsxs)(`svg`, {
          width: 21,
          height: 21,
          viewBox: `0 0 21 21`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Se.jsx)(`path`, {
              d: `M10.6 9.70459C11.0142 9.70461 11.35 10.0404 11.35 10.4546V13.7876C11.35 14.2018 11.0142 14.5376 10.6 14.5376C10.1858 14.5376 9.84998 14.2018 9.84998 13.7876V10.4546C9.84998 10.0404 10.1858 9.70459 10.6 9.70459Z`,
              fill: `currentColor`,
            }),
            (0, Se.jsx)(`path`, {
              d: `M10.6 6.2876C11.1292 6.28762 11.558 6.71732 11.558 7.24658C11.5578 7.77569 11.1291 8.20457 10.6 8.20459C10.0708 8.20459 9.64215 7.7757 9.64197 7.24658C9.64197 6.71731 10.0707 6.2876 10.6 6.2876Z`,
              fill: `currentColor`,
            }),
            (0, Se.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M10.6 2.53955C14.9713 2.53955 18.515 6.08326 18.515 10.4546C18.515 14.8259 14.9713 18.3696 10.6 18.3696C6.22864 18.3696 2.68494 14.8259 2.68494 10.4546C2.68494 6.08326 6.22864 2.53955 10.6 2.53955ZM10.6 3.86963C6.96318 3.86963 4.01501 6.81779 4.01501 10.4546C4.01501 14.0914 6.96318 17.0396 10.6 17.0396C14.2368 17.0396 17.1849 14.0914 17.1849 10.4546C17.1849 6.81779 14.2368 3.86963 10.6 3.86963Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  _,
  v = e(() => {
    _ = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
  }),
  y,
  b = e(() => {
    y = globalThis;
  }),
  Te,
  Ee = e(() => {
    Te = `10.29.0`;
  });
function De() {
  return (Oe(y), y);
}
function Oe(e) {
  let t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || `10.29.0`), (t[Te] = t[`10.29.0`] || {}));
}
function ke(e, t, n = y) {
  let r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    i = (r[Te] = r[`10.29.0`] || {});
  return i[e] || (i[e] = t());
}
var x = e(() => {
  (Ee(), b());
});
function Ae(e) {
  if (!(`console` in y)) return e();
  let t = y.console,
    n = {},
    r = Object.keys(Ve);
  r.forEach((e) => {
    let r = Ve[e];
    ((n[e] = t[e]), (t[e] = r));
  });
  try {
    return e();
  } finally {
    r.forEach((e) => {
      t[e] = n[e];
    });
  }
}
function je() {
  Re().enabled = !0;
}
function Me() {
  Re().enabled = !1;
}
function Ne() {
  return Re().enabled;
}
function Pe(...e) {
  Le(`log`, ...e);
}
function Fe(...e) {
  Le(`warn`, ...e);
}
function Ie(...e) {
  Le(`error`, ...e);
}
function Le(e, ...t) {
  _ &&
    Ne() &&
    Ae(() => {
      y.console[e](`${Be}[${e}]:`, ...t);
    });
}
function Re() {
  return _ ? ke(`loggerSettings`, () => ({ enabled: !1 })) : { enabled: !1 };
}
var ze,
  Be,
  Ve,
  S,
  C = e(() => {
    (x(),
      v(),
      b(),
      (ze = [`debug`, `info`, `warn`, `error`, `log`, `assert`, `trace`]),
      (Be = `Sentry Logger `),
      (Ve = {}),
      (S = {
        enable: je,
        disable: Me,
        isEnabled: Ne,
        log: Pe,
        warn: Fe,
        error: Ie,
      }));
  });
function He(...e) {
  let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, n = 0, r = 0) => {
    let i = [],
      a = e.split(`
`);
    for (let e = n; e < a.length; e++) {
      let n = a[e];
      n.length > 1024 && (n = n.slice(0, 1024));
      let o = Xe.test(n) ? n.replace(Xe, `$1`) : n;
      if (!o.match(/\S*Error: /)) {
        for (let e of t) {
          let t = e(o);
          if (t) {
            i.push(t);
            break;
          }
        }
        if (i.length >= Ye + r) break;
      }
    }
    return We(i.slice(r));
  };
}
function Ue(e) {
  return Array.isArray(e) ? He(...e) : e;
}
function We(e) {
  if (!e.length) return [];
  let t = Array.from(e);
  return (
    /sentryWrapped/.test(Ge(t).function || ``) && t.pop(),
    t.reverse(),
    Ze.test(Ge(t).function || ``) &&
      (t.pop(), Ze.test(Ge(t).function || ``) && t.pop()),
    t.slice(0, Ye).map((e) => ({
      ...e,
      filename: e.filename || Ge(t).filename,
      function: e.function || `?`,
    }))
  );
}
function Ge(e) {
  return e[e.length - 1] || {};
}
function Ke(e) {
  try {
    return !e || typeof e != `function` ? Qe : e.name || Qe;
  } catch {
    return Qe;
  }
}
function qe(e) {
  let t = e.exception;
  if (t) {
    let e = [];
    try {
      return (
        t.values.forEach((t) => {
          t.stacktrace.frames && e.push(...t.stacktrace.frames);
        }),
        e
      );
    } catch {
      return;
    }
  }
}
function Je(e) {
  return `__v_isVNode` in e && e.__v_isVNode ? `[VueVNode]` : `[VueViewModel]`;
}
var Ye,
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    ((Ye = 50),
      (Xe = /\(error: (.*)\)/),
      (Ze = /captureMessage|captureException/),
      (Qe = `<anonymous>`));
  });
function et(e, t) {
  ((nt[e] = nt[e] || []), nt[e].push(t));
}
function tt(e, t) {
  if (!rt[e]) {
    rt[e] = !0;
    try {
      t();
    } catch (t) {
      _ && S.error(`Error while instrumenting ${e}`, t);
    }
  }
}
function w(e, t) {
  let n = e && nt[e];
  if (n)
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        _ &&
          S.error(
            `Error while triggering instrumentation handler.\nType: ${e}\nName: ${Ke(r)}\nError:`,
            t,
          );
      }
}
var nt,
  rt,
  it = e(() => {
    (v(), C(), $e(), (nt = {}), (rt = {}));
  });
function at(e) {
  let t = `error`;
  (et(t, e), tt(t, ot));
}
function ot() {
  ((st = y.onerror),
    (y.onerror = function (e, t, n, r, i) {
      return (
        w(`error`, { column: r, error: i, line: n, msg: e, url: t }),
        st ? st.apply(this, arguments) : !1
      );
    }),
    (y.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
var st,
  ct = e(() => {
    (b(), it(), (st = null));
  });
function lt(e) {
  let t = `unhandledrejection`;
  (et(t, e), tt(t, ut));
}
function ut() {
  ((dt = y.onunhandledrejection),
    (y.onunhandledrejection = function (e) {
      return (w(`unhandledrejection`, e), dt ? dt.apply(this, arguments) : !0);
    }),
    (y.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
var dt,
  ft = e(() => {
    (b(), it(), (dt = null));
  });
function pt(e) {
  switch (At.call(e)) {
    case `[object Error]`:
    case `[object Exception]`:
    case `[object DOMException]`:
    case `[object WebAssembly.Exception]`:
      return !0;
    default:
      return Dt(e, Error);
  }
}
function mt(e, t) {
  return At.call(e) === `[object ${t}]`;
}
function ht(e) {
  return mt(e, `ErrorEvent`);
}
function gt(e) {
  return mt(e, `DOMError`);
}
function _t(e) {
  return mt(e, `DOMException`);
}
function vt(e) {
  return mt(e, `String`);
}
function yt(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `__sentry_template_string__` in e &&
    `__sentry_template_values__` in e
  );
}
function bt(e) {
  return (
    e === null || yt(e) || (typeof e != `object` && typeof e != `function`)
  );
}
function xt(e) {
  return mt(e, `Object`);
}
function St(e) {
  return typeof Event < `u` && Dt(e, Event);
}
function Ct(e) {
  return typeof Element < `u` && Dt(e, Element);
}
function wt(e) {
  return mt(e, `RegExp`);
}
function Tt(e) {
  return !!(e?.then && typeof e.then == `function`);
}
function Et(e) {
  return (
    xt(e) &&
    `nativeEvent` in e &&
    `preventDefault` in e &&
    `stopPropagation` in e
  );
}
function Dt(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Ot(e) {
  return !!(
    typeof e == `object` &&
    e &&
    (e.__isVue || e._isVue || e.__v_isVNode)
  );
}
function kt(e) {
  return typeof Request < `u` && Dt(e, Request);
}
var At,
  T = e(() => {
    At = Object.prototype.toString;
  });
function E(e, t = {}) {
  if (!e) return `<unknown>`;
  try {
    let n = e,
      r = [],
      i = 0,
      a = 0,
      o,
      s = Array.isArray(t) ? t : t.keyAttrs,
      c = (!Array.isArray(t) && t.maxStringLength) || Ft;
    for (
      ;
      n &&
      i++ < 5 &&
      ((o = jt(n, s)),
      !(o === `html` || (i > 1 && a + r.length * 3 + o.length >= c)));

    )
      (r.push(o), (a += o.length), (n = n.parentNode));
    return r.reverse().join(` > `);
  } catch {
    return `<unknown>`;
  }
}
function jt(e, t) {
  let n = e,
    r = [];
  if (!n?.tagName) return ``;
  if (Pt.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  let i = t?.length
    ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)])
    : null;
  if (i?.length)
    i.forEach((e) => {
      r.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    n.id && r.push(`#${n.id}`);
    let e = n.className;
    if (e && vt(e)) {
      let t = e.split(/\s+/);
      for (let e of t) r.push(`.${e}`);
    }
  }
  for (let e of [`aria-label`, `type`, `name`, `title`, `alt`]) {
    let t = n.getAttribute(e);
    t && r.push(`[${e}="${t}"]`);
  }
  return r.join(``);
}
function Mt() {
  try {
    return Pt.document.location.href;
  } catch {
    return ``;
  }
}
function Nt(e) {
  if (!Pt.HTMLElement) return null;
  let t = e;
  for (let e = 0; e < 5; e++) {
    if (!t) return null;
    if (t instanceof HTMLElement) {
      if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
      if (t.dataset.sentryElement) return t.dataset.sentryElement;
    }
    t = t.parentNode;
  }
  return null;
}
var Pt,
  Ft,
  It = e(() => {
    (T(), b(), (Pt = y), (Ft = 80));
  });
function D(e, t, n) {
  if (!(t in e)) return;
  let r = e[t];
  if (typeof r != `function`) return;
  let i = n(r);
  typeof i == `function` && Lt(i, r);
  try {
    e[t] = i;
  } catch {
    _ && S.log(`Failed to replace method "${t}" in object`, e);
  }
}
function O(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    _ && S.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function Lt(e, t) {
  try {
    ((e.prototype = t.prototype = t.prototype || {}),
      O(e, `__sentry_original__`, t));
  } catch {}
}
function Rt(e) {
  return e.__sentry_original__;
}
function zt(e) {
  if (pt(e))
    return { message: e.message, name: e.name, stack: e.stack, ...Vt(e) };
  if (St(e)) {
    let t = {
      type: e.type,
      target: Bt(e.target),
      currentTarget: Bt(e.currentTarget),
      ...Vt(e),
    };
    return (
      typeof CustomEvent < `u` && Dt(e, CustomEvent) && (t.detail = e.detail),
      t
    );
  } else return e;
}
function Bt(e) {
  try {
    return Ct(e) ? E(e) : Object.prototype.toString.call(e);
  } catch {
    return `<unknown>`;
  }
}
function Vt(e) {
  if (typeof e == `object` && e) {
    let t = {};
    for (let n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function Ht(e) {
  let t = Object.keys(zt(e));
  return (t.sort(), t[0] ? t.join(`, `) : `[object has no keys]`);
}
var Ut = e(() => {
  (v(), It(), C(), T());
});
function Wt(e, t = 0) {
  return typeof e != `string` || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Gt(e, t) {
  if (!Array.isArray(e)) return ``;
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    try {
      Ot(r) ? n.push(Je(r)) : n.push(String(r));
    } catch {
      n.push(`[value cannot be serialized]`);
    }
  }
  return n.join(t);
}
function Kt(e, t, n = !1) {
  return vt(e)
    ? wt(t)
      ? t.test(e)
      : vt(t)
        ? n
          ? e === t
          : e.includes(t)
        : !1
    : !1;
}
function qt(e, t = [], n = !1) {
  return t.some((t) => Kt(e, t, n));
}
var Jt = e(() => {
  (T(), $e());
});
function Yt() {
  let e = y;
  return e.crypto || e.msCrypto;
}
function Xt() {
  return Math.random() * 16;
}
function k(e = Yt()) {
  try {
    if (e?.randomUUID) return e.randomUUID().replace(/-/g, ``);
  } catch {}
  return (
    (rn ||= `10000000100040008000100000000000`),
    rn.replace(/[018]/g, (e) => (e ^ ((Xt() & 15) >> (e / 4))).toString(16))
  );
}
function Zt(e) {
  return e.exception?.values?.[0];
}
function Qt(e) {
  let { message: t, event_id: n } = e;
  if (t) return t;
  let r = Zt(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || `<unknown>`
    : n || `<unknown>`;
}
function $t(e, t, n) {
  let r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    a = (i[0] = i[0] || {});
  ((a.value ||= t || ``), (a.type ||= n || `Error`));
}
function en(e, t) {
  let n = Zt(e);
  if (!n) return;
  let r = { type: `generic`, handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...t }), t && `data` in t)) {
    let e = { ...i?.data, ...t.data };
    n.mechanism.data = e;
  }
}
function tn(e) {
  if (nn(e)) return !0;
  try {
    O(e, `__sentry_captured__`, !0);
  } catch {}
  return !1;
}
function nn(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
var rn,
  an = e(() => {
    (Ut(), b());
  });
function on() {
  return Date.now() / ln;
}
function sn() {
  let { performance: e } = y;
  if (!e?.now || !e.timeOrigin) return on;
  let t = e.timeOrigin;
  return () => (t + e.now()) / ln;
}
function A() {
  return (un ??= sn())();
}
function cn() {
  let { performance: e } = y;
  if (!e?.now) return [void 0, `none`];
  let t = 3600 * 1e3,
    n = e.now(),
    r = Date.now(),
    i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
    a = i < t,
    o = e.timing?.navigationStart,
    s = typeof o == `number` ? Math.abs(o + n - r) : t;
  return a || s < t
    ? i <= s
      ? [e.timeOrigin, `timeOrigin`]
      : [o, `navigationStart`]
    : [r, `dateNow`];
}
function j() {
  return ((dn ||= cn()), dn[0]);
}
var ln,
  un,
  dn,
  fn = e(() => {
    (b(), (ln = 1e3));
  });
function pn(e) {
  let t = A(),
    n = {
      sid: k(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: `ok`,
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => gn(n),
    };
  return (e && mn(n, e), n);
}
function mn(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || A()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : k()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == `number` && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == `number`) e.duration = t.duration;
  else {
    let t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == `number` && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function hn(e, t) {
  let n = {};
  (t ? (n = { status: t }) : e.status === `ok` && (n = { status: `exited` }),
    mn(e, n));
}
function gn(e) {
  return {
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == `number` || typeof e.did == `string`
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  };
}
var _n = e(() => {
  (an(), fn());
});
function vn(e, t, n = 2) {
  if (!t || typeof t != `object` || n <= 0) return t;
  if (e && Object.keys(t).length === 0) return e;
  let r = { ...e };
  for (let e in t)
    Object.prototype.hasOwnProperty.call(t, e) &&
      (r[e] = vn(r[e], t[e], n - 1));
  return r;
}
var yn = e(() => {});
function bn() {
  return k();
}
function xn() {
  return k().substring(16);
}
var Sn = e(() => {
  an();
});
function Cn(e, t) {
  t ? O(e, Tn, t) : delete e[Tn];
}
function wn(e) {
  return e[Tn];
}
var Tn,
  En = e(() => {
    (Ut(), (Tn = `_sentrySpan`));
  }),
  Dn,
  On,
  kn = e(() => {
    (v(),
      _n(),
      C(),
      T(),
      yn(),
      an(),
      Sn(),
      En(),
      Jt(),
      fn(),
      (Dn = 100),
      (On = class e {
        constructor() {
          ((this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._attributes = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = {
              traceId: bn(),
              sampleRand: Math.random(),
            }));
        }
        clone() {
          let t = new e();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._attributes = { ...this._attributes }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            this._contexts.flags &&
              (t._contexts.flags = {
                values: [...this._contexts.flags.values],
              }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            Cn(t, wn(this)),
            t
          );
        }
        setClient(e) {
          this._client = e;
        }
        setLastEventId(e) {
          this._lastEventId = e;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(e) {
          this._scopeListeners.push(e);
        }
        addEventProcessor(e) {
          return (this._eventProcessors.push(e), this);
        }
        setUser(e) {
          return (
            (this._user = e || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session && mn(this._session, { user: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        setTags(e) {
          return (
            (this._tags = { ...this._tags, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(e, t) {
          return this.setTags({ [e]: t });
        }
        setAttributes(e) {
          return (
            (this._attributes = { ...this._attributes, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setAttribute(e, t) {
          return this.setAttributes({ [e]: t });
        }
        removeAttribute(e) {
          return (
            e in this._attributes &&
              (delete this._attributes[e], this._notifyScopeListeners()),
            this
          );
        }
        setExtras(e) {
          return (
            (this._extra = { ...this._extra, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(e, t) {
          return (
            (this._extra = { ...this._extra, [e]: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(e) {
          return ((this._fingerprint = e), this._notifyScopeListeners(), this);
        }
        setLevel(e) {
          return ((this._level = e), this._notifyScopeListeners(), this);
        }
        setTransactionName(e) {
          return (
            (this._transactionName = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setContext(e, t) {
          return (
            t === null ? delete this._contexts[e] : (this._contexts[e] = t),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(e) {
          return (
            e ? (this._session = e) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          let n = typeof t == `function` ? t(this) : t,
            {
              tags: r,
              attributes: i,
              extra: a,
              user: o,
              contexts: s,
              level: c,
              fingerprint: l = [],
              propagationContext: u,
            } = (n instanceof e ? n.getScopeData() : xt(n) ? t : void 0) || {};
          return (
            (this._tags = { ...this._tags, ...r }),
            (this._attributes = { ...this._attributes, ...i }),
            (this._extra = { ...this._extra, ...a }),
            (this._contexts = { ...this._contexts, ...s }),
            o && Object.keys(o).length && (this._user = o),
            c && (this._level = c),
            l.length && (this._fingerprint = l),
            u && (this._propagationContext = u),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._attributes = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._session = void 0),
            Cn(this, void 0),
            (this._attachments = []),
            this.setPropagationContext({
              traceId: bn(),
              sampleRand: Math.random(),
            }),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(e, t) {
          let n = typeof t == `number` ? t : Dn;
          if (n <= 0) return this;
          let r = {
            timestamp: on(),
            ...e,
            message: e.message ? Wt(e.message, 2048) : e.message,
          };
          return (
            this._breadcrumbs.push(r),
            this._breadcrumbs.length > n &&
              ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
              this._client?.recordDroppedEvent(`buffer_overflow`, `log_item`)),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
        }
        addAttachment(e) {
          return (this._attachments.push(e), this);
        }
        clearAttachments() {
          return ((this._attachments = []), this);
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            attributes: this._attributes,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: wn(this),
          };
        }
        setSDKProcessingMetadata(e) {
          return (
            (this._sdkProcessingMetadata = vn(
              this._sdkProcessingMetadata,
              e,
              2,
            )),
            this
          );
        }
        setPropagationContext(e) {
          return ((this._propagationContext = e), this);
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(e, t) {
          let n = t?.event_id || k();
          if (!this._client)
            return (
              _ &&
                S.warn(
                  `No client configured on scope - will not capture exception!`,
                ),
              n
            );
          let r = Error(`Sentry syntheticException`);
          return (
            this._client.captureException(
              e,
              {
                originalException: e,
                syntheticException: r,
                ...t,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureMessage(e, t, n) {
          let r = n?.event_id || k();
          if (!this._client)
            return (
              _ &&
                S.warn(
                  `No client configured on scope - will not capture message!`,
                ),
              r
            );
          let i = n?.syntheticException ?? Error(e);
          return (
            this._client.captureMessage(
              e,
              t,
              {
                originalException: e,
                syntheticException: i,
                ...n,
                event_id: r,
              },
              this,
            ),
            r
          );
        }
        captureEvent(e, t) {
          let n = t?.event_id || k();
          return this._client
            ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
            : (_ &&
                S.warn(
                  `No client configured on scope - will not capture event!`,
                ),
              n);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||=
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
              e(this);
            }),
            !1);
        }
      }));
  });
function An() {
  return ke(`defaultCurrentScope`, () => new On());
}
function jn() {
  return ke(`defaultIsolationScope`, () => new On());
}
var Mn = e(() => {
  (x(), kn());
});
function Nn() {
  let e = Oe(De());
  return (e.stack = e.stack || new Rn(An(), jn()));
}
function Pn(e) {
  return Nn().withScope(e);
}
function Fn(e, t) {
  let n = Nn();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function In(e) {
  return Nn().withScope(() => e(Nn().getIsolationScope()));
}
function Ln() {
  return {
    withIsolationScope: In,
    withScope: Pn,
    withSetScope: Fn,
    withSetIsolationScope: (e, t) => In(t),
    getCurrentScope: () => Nn().getScope(),
    getIsolationScope: () => Nn().getIsolationScope(),
  };
}
var Rn,
  zn = e(() => {
    (Mn(),
      kn(),
      T(),
      x(),
      (Rn = class {
        constructor(e, t) {
          let n;
          n = e || new On();
          let r;
          ((r = t || new On()),
            (this._stack = [{ scope: n }]),
            (this._isolationScope = r));
        }
        withScope(e) {
          let t = this._pushScope(),
            n;
          try {
            n = e(t);
          } catch (e) {
            throw (this._popScope(), e);
          }
          return Tt(n)
            ? n.then(
                (e) => (this._popScope(), e),
                (e) => {
                  throw (this._popScope(), e);
                },
              )
            : (this._popScope(), n);
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          let e = this.getScope().clone();
          return (this._stack.push({ client: this.getClient(), scope: e }), e);
        }
        _popScope() {
          return this._stack.length <= 1 ? !1 : !!this._stack.pop();
        }
      }));
  });
function Bn(e) {
  let t = Oe(e);
  return t.acs ? t.acs : Ln();
}
var Vn = e(() => {
  (x(), zn());
});
function M() {
  return Bn(De()).getCurrentScope();
}
function N() {
  return Bn(De()).getIsolationScope();
}
function Hn() {
  return ke(`globalScope`, () => new On());
}
function Un(...e) {
  let t = Bn(De());
  if (e.length === 2) {
    let [n, r] = e;
    return n ? t.withSetScope(n, r) : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function P() {
  return M().getClient();
}
function Wn(e) {
  let {
      traceId: t,
      parentSpanId: n,
      propagationSpanId: r,
    } = e.getPropagationContext(),
    i = { trace_id: t, span_id: r || xn() };
  return (n && (i.parent_span_id = n), i);
}
var F = e(() => {
    (Vn(), x(), kn(), Sn());
  }),
  I,
  Gn,
  Kn,
  qn,
  L,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr = e(() => {
    ((I = `sentry.source`),
      (Gn = `sentry.sample_rate`),
      (Kn = `sentry.previous_trace_sample_rate`),
      (qn = `sentry.op`),
      (L = `sentry.origin`),
      (Jn = `sentry.idle_span_finish_reason`),
      (Yn = `sentry.measurement_unit`),
      (Xn = `sentry.measurement_value`),
      (Zn = `sentry.custom_span_name`),
      (Qn = `sentry.profile_id`),
      ($n = `sentry.exclusive_time`),
      (er = `sentry.link.type`));
  });
function nr(e) {
  if (e < 400 && e >= 100) return { code: 1 };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: 2, message: `unauthenticated` };
      case 403:
        return { code: 2, message: `permission_denied` };
      case 404:
        return { code: 2, message: `not_found` };
      case 409:
        return { code: 2, message: `already_exists` };
      case 413:
        return { code: 2, message: `failed_precondition` };
      case 429:
        return { code: 2, message: `resource_exhausted` };
      case 499:
        return { code: 2, message: `cancelled` };
      default:
        return { code: 2, message: `invalid_argument` };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: 2, message: `unimplemented` };
      case 503:
        return { code: 2, message: `unavailable` };
      case 504:
        return { code: 2, message: `deadline_exceeded` };
      default:
        return { code: 2, message: `internal_error` };
    }
  return { code: 2, message: `internal_error` };
}
function rr(e, t) {
  e.setAttribute(`http.response.status_code`, t);
  let n = nr(t);
  n.message !== `unknown_error` && e.setStatus(n);
}
var ir = e(() => {});
function ar(e) {
  try {
    let t = y.WeakRef;
    if (typeof t == `function`) return new t(e);
  } catch {}
  return e;
}
function or(e) {
  if (e) {
    if (typeof e == `object` && `deref` in e && typeof e.deref == `function`)
      try {
        return e.deref();
      } catch {
        return;
      }
    return e;
  }
}
function sr(e, t, n) {
  e && (O(e, ur, ar(n)), O(e, lr, t));
}
function cr(e) {
  let t = e;
  return { scope: t[lr], isolationScope: or(t[ur]) };
}
var lr,
  ur,
  dr = e(() => {
    (Ut(), b(), (lr = `_sentryScope`), (ur = `_sentryIsolationScope`));
  });
function fr(e) {
  let t = mr(e);
  if (!t) return;
  let n = Object.entries(t).reduce((e, [t, n]) => {
    if (t.match(vr)) {
      let r = t.slice(7);
      e[r] = n;
    }
    return e;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function pr(e) {
  if (e)
    return gr(
      Object.entries(e).reduce(
        (e, [t, n]) => (n && (e[`${_r}${t}`] = n), e),
        {},
      ),
    );
}
function mr(e) {
  if (!(!e || (!vt(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          let n = hr(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : hr(e);
}
function hr(e) {
  return e
    .split(`,`)
    .map((e) => {
      let t = e.indexOf(`=`);
      return t === -1
        ? []
        : [e.slice(0, t), e.slice(t + 1)].map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch {
              return;
            }
          });
    })
    .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
function gr(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((e, [t, n], r) => {
      let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        a = r === 0 ? i : `${e},${i}`;
      return a.length > 8192
        ? (_ &&
            S.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : a;
    }, ``);
}
var _r,
  vr,
  yr = e(() => {
    (v(), C(), T(), (_r = `sentry-`), (vr = /^sentry-/));
  });
function br(e) {
  return e === `http` || e === `https`;
}
function xr(e, t = !1) {
  let {
    host: n,
    path: r,
    pass: i,
    port: a,
    projectId: o,
    protocol: s,
    publicKey: c,
  } = e;
  return `${s}://${c}${t && i ? `:${i}` : ``}@${n}${a ? `:${a}` : ``}/${r && `${r}/`}${o}`;
}
function Sr(e) {
  let t = kr.exec(e);
  if (!t) {
    Ae(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  let [n, r, i = ``, a = ``, o = ``, s = ``] = t.slice(1),
    c = ``,
    l = s,
    u = l.split(`/`);
  if ((u.length > 1 && ((c = u.slice(0, -1).join(`/`)), (l = u.pop())), l)) {
    let e = l.match(/^\d+/);
    e && (l = e[0]);
  }
  return Cr({
    host: a,
    pass: i,
    path: c,
    projectId: l,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function Cr(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || ``,
    pass: e.pass || ``,
    host: e.host,
    port: e.port || ``,
    path: e.path || ``,
    projectId: e.projectId,
  };
}
function wr(e) {
  if (!_) return !0;
  let { port: t, projectId: n, protocol: r } = e;
  return [`protocol`, `publicKey`, `host`, `projectId`].find((t) =>
    e[t] ? !1 : (S.error(`Invalid Sentry Dsn: ${t} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? br(r)
        ? t && isNaN(parseInt(t, 10))
          ? (S.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (S.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (S.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Tr(e) {
  return e.match(Or)?.[1];
}
function Er(e) {
  let t = e.getOptions(),
    { host: n } = e.getDsn() || {},
    r;
  return (t.orgId ? (r = String(t.orgId)) : n && (r = Tr(n)), r);
}
function Dr(e) {
  let t = typeof e == `string` ? Sr(e) : Cr(e);
  if (!(!t || !wr(t))) return t;
}
var Or,
  kr,
  Ar = e(() => {
    (v(),
      C(),
      (Or = /^o(\d+)\./),
      (kr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/));
  });
function jr(e) {
  if (typeof e == `boolean`) return Number(e);
  let t = typeof e == `string` ? parseFloat(e) : e;
  if (!(typeof t != `number` || isNaN(t) || t < 0 || t > 1)) return t;
}
var Mr = e(() => {});
function Nr(e) {
  if (!e) return;
  let t = e.match(Rr);
  if (!t) return;
  let n;
  return (
    t[3] === `1` ? (n = !0) : t[3] === `0` && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function Pr(e, t) {
  let n = Nr(e),
    r = fr(t);
  if (!n?.traceId) return { traceId: bn(), sampleRand: Math.random() };
  let i = Lr(n, r);
  r && (r.sample_rand = i.toString());
  let { traceId: a, parentSpanId: o, parentSampled: s } = n;
  return {
    traceId: a,
    parentSpanId: o,
    sampled: s,
    dsc: r || {},
    sampleRand: i,
  };
}
function Fr(e = bn(), t = xn(), n) {
  let r = ``;
  return (n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`);
}
function Ir(e = bn(), t = xn(), n) {
  return `00-${e}-${t}-${n ? `01` : `00`}`;
}
function Lr(e, t) {
  let n = jr(t?.sample_rand);
  if (n !== void 0) return n;
  let r = jr(t?.sample_rate);
  return r && e?.parentSampled !== void 0
    ? e.parentSampled
      ? Math.random() * r
      : r + Math.random() * (1 - r)
    : Math.random();
}
var Rr,
  zr = e(() => {
    (yr(),
      Mr(),
      Sn(),
      (Rr = RegExp(
        `^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`,
      )));
  });
function Br(e) {
  let { spanId: t, traceId: n } = e.spanContext(),
    {
      data: r,
      op: i,
      parent_span_id: a,
      status: o,
      origin: s,
      links: c,
    } = R(e);
  return {
    parent_span_id: a,
    span_id: t,
    trace_id: n,
    data: r,
    op: i,
    status: o,
    origin: s,
    links: c,
  };
}
function Vr(e) {
  let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
    i = r ? t : R(e).parent_span_id,
    a = cr(e).scope;
  return {
    parent_span_id: i,
    span_id: r ? a?.getPropagationContext().propagationSpanId || xn() : t,
    trace_id: n,
  };
}
function Hr(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Fr(t, n, Yr(e));
}
function Ur(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Ir(t, n, Yr(e));
}
function Wr(e) {
  if (e && e.length > 0)
    return e.map(
      ({
        context: { spanId: e, traceId: t, traceFlags: n, ...r },
        attributes: i,
      }) => ({
        span_id: e,
        trace_id: t,
        sampled: n === 1,
        attributes: i,
        ...r,
      }),
    );
}
function Gr(e) {
  return typeof e == `number`
    ? Kr(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? Kr(e.getTime())
        : A();
}
function Kr(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function R(e) {
  if (Jr(e)) return e.getSpanJSON();
  let { spanId: t, traceId: n } = e.spanContext();
  if (qr(e)) {
    let {
      attributes: r,
      startTime: i,
      name: a,
      endTime: o,
      status: s,
      links: c,
    } = e;
    return {
      span_id: t,
      trace_id: n,
      data: r,
      description: a,
      parent_span_id:
        `parentSpanId` in e
          ? e.parentSpanId
          : `parentSpanContext` in e
            ? e.parentSpanContext?.spanId
            : void 0,
      start_timestamp: Gr(i),
      timestamp: Gr(o) || void 0,
      status: Xr(s),
      op: r[qn],
      origin: r[L],
      links: Wr(c),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function qr(e) {
  let t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Jr(e) {
  return typeof e.getSpanJSON == `function`;
}
function Yr(e) {
  let { traceFlags: t } = e.spanContext();
  return t === 1;
}
function Xr(e) {
  if (!(!e || e.code === 0))
    return e.code === 1 ? `ok` : e.message || `internal_error`;
}
function Zr(e, t) {
  (O(t, ri, e[ri] || e), e[ni] ? e[ni].add(t) : O(e, ni, new Set([t])));
}
function Qr(e, t) {
  e[ni] && e[ni].delete(t);
}
function $r(e) {
  let t = new Set();
  function n(e) {
    if (!t.has(e) && Yr(e)) {
      t.add(e);
      let r = e[ni] ? Array.from(e[ni]) : [];
      for (let e of r) n(e);
    }
  }
  return (n(e), Array.from(t));
}
function z(e) {
  return e[ri] || e;
}
function B() {
  let e = Bn(De());
  return e.getActiveSpan ? e.getActiveSpan() : wn(M());
}
function ei() {
  ti ||=
    (Ae(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    }),
    !0);
}
var ti,
  ni,
  ri,
  V = e(() => {
    (Vn(),
      x(),
      F(),
      tr(),
      ir(),
      dr(),
      Ut(),
      Sn(),
      fn(),
      zr(),
      C(),
      En(),
      (ti = !1),
      (ni = `_sentryChildSpans`),
      (ri = `_sentryRootSpan`));
  });
function ii() {
  if (ai) return;
  function e() {
    let e = B(),
      t = e && z(e);
    if (t) {
      let e = `internal_error`;
      (_ && S.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: 2, message: e }));
    }
  }
  ((e.tag = `sentry_tracingErrorCallback`), (ai = !0), at(e), lt(e));
}
var ai,
  oi = e(() => {
    (v(), ct(), ft(), C(), V(), ir(), (ai = !1));
  });
function H(e) {
  if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
  let t = e || P()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
var si = e(() => {
  F();
});
function ci(e) {
  S.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`,
  );
}
function li(e, t) {
  if (!t?.length || !e.description) return !1;
  for (let n of t) {
    if (di(n)) {
      if (Kt(e.description, n)) return (_ && ci(e), !0);
      continue;
    }
    if (!n.name && !n.op) continue;
    let t = n.name ? Kt(e.description, n.name) : !0,
      r = n.op ? e.op && Kt(e.op, n.op) : !0;
    if (t && r) return (_ && ci(e), !0);
  }
  return !1;
}
function ui(e, t) {
  let n = t.parent_span_id,
    r = t.span_id;
  if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
}
function di(e) {
  return typeof e == `string` || e instanceof RegExp;
}
var fi = e(() => {
    (v(), C(), Jt());
  }),
  pi,
  mi = e(() => {
    pi = `production`;
  });
function hi(e, t) {
  O(e, yi, t);
}
function gi(e, t) {
  let n = t.getOptions(),
    { publicKey: r } = t.getDsn() || {},
    i = {
      environment: n.environment || `production`,
      release: n.release,
      public_key: r,
      trace_id: e,
      org_id: Er(t),
    };
  return (t.emit(`createDsc`, i), i);
}
function _i(e, t) {
  let n = t.getPropagationContext();
  return n.dsc || gi(n.traceId, e);
}
function vi(e) {
  let t = P();
  if (!t) return {};
  let n = z(e),
    r = R(n),
    i = r.data,
    a = n.spanContext().traceState,
    o =
      a?.get(`sentry.sample_rate`) ??
      i[`sentry.sample_rate`] ??
      i[`sentry.previous_trace_sample_rate`];
  function s(e) {
    return (
      (typeof o == `number` || typeof o == `string`) &&
        (e.sample_rate = `${o}`),
      e
    );
  }
  let c = n[yi];
  if (c) return s(c);
  let l = a?.get(`sentry.dsc`),
    u = l && fr(l);
  if (u) return s(u);
  let d = gi(e.spanContext().traceId, t),
    f = i[I],
    p = r.description;
  return (
    f !== `url` && p && (d.transaction = p),
    H() &&
      ((d.sampled = String(Yr(n))),
      (d.sample_rand =
        a?.get(`sentry.sample_rand`) ??
        cr(n).scope?.getPropagationContext().sampleRand.toString())),
    s(d),
    t.emit(`createDsc`, d, n),
    d
  );
}
var yi,
  bi = e(() => {
    (mi(), F(), tr(), yr(), Ar(), si(), Ut(), V(), dr(), (yi = `_frozenDsc`));
  }),
  xi,
  Si = e(() => {
    (Sn(),
      V(),
      (xi = class {
        constructor(e = {}) {
          ((this._traceId = e.traceId || bn()),
            (this._spanId = e.spanId || xn()));
        }
        spanContext() {
          return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: 0,
          };
        }
        end(e) {}
        setAttribute(e, t) {
          return this;
        }
        setAttributes(e) {
          return this;
        }
        setStatus(e) {
          return this;
        }
        updateName(e) {
          return this;
        }
        isRecording() {
          return !1;
        }
        addEvent(e, t, n) {
          return this;
        }
        addLink(e) {
          return this;
        }
        addLinks(e) {
          return this;
        }
        recordException(e, t) {}
      }));
  });
function Ci(e, t = 100, n = 1 / 0) {
  try {
    return Ti(``, e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function wi(e, t = 3, n = 100 * 1024) {
  let r = Ci(e, t);
  return ki(r) > n ? wi(e, t - 1, n) : r;
}
function Ti(e, t, n = 1 / 0, r = 1 / 0, i = Ai()) {
  let [a, o] = i;
  if (
    t == null ||
    [`boolean`, `string`].includes(typeof t) ||
    (typeof t == `number` && Number.isFinite(t))
  )
    return t;
  let s = Ei(e, t);
  if (!s.startsWith(`[object `)) return s;
  if (t.__sentry_skip_normalization__) return t;
  let c =
    typeof t.__sentry_override_normalization_depth__ == `number`
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return s.replace(`object `, ``);
  if (a(t)) return `[Circular ~]`;
  let l = t;
  if (l && typeof l.toJSON == `function`)
    try {
      return Ti(``, l.toJSON(), c - 1, r, i);
    } catch {}
  let u = Array.isArray(t) ? [] : {},
    d = 0,
    f = zt(t);
  for (let e in f) {
    if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
    if (d >= r) {
      u[e] = `[MaxProperties ~]`;
      break;
    }
    let t = f[e];
    ((u[e] = Ti(e, t, c - 1, r, i)), d++);
  }
  return (o(t), u);
}
function Ei(e, t) {
  try {
    if (e === `domain` && t && typeof t == `object` && t._events)
      return `[Domain]`;
    if (e === `domainEmitter`) return `[DomainEmitter]`;
    if (typeof global < `u` && t === global) return `[Global]`;
    if (typeof window < `u` && t === window) return `[Window]`;
    if (typeof document < `u` && t === document) return `[Document]`;
    if (Ot(t)) return Je(t);
    if (Et(t)) return `[SyntheticEvent]`;
    if (typeof t == `number` && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == `function`) return `[Function: ${Ke(t)}]`;
    if (typeof t == `symbol`) return `[${String(t)}]`;
    if (typeof t == `bigint`) return `[BigInt: ${String(t)}]`;
    let n = Di(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
function Di(e) {
  let t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : `null prototype`;
}
function Oi(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function ki(e) {
  return Oi(JSON.stringify(e));
}
function Ai() {
  let e = new WeakSet();
  function t(t) {
    return e.has(t) ? !0 : (e.add(t), !1);
  }
  function n(t) {
    e.delete(t);
  }
  return [t, n];
}
var ji = e(() => {
  (T(), Ut(), $e());
});
function Mi(e, t = []) {
  return [e, t];
}
function Ni(e, t) {
  let [n, r] = e;
  return [n, [...r, t]];
}
function Pi(e, t) {
  let n = e[1];
  for (let e of n) {
    let n = e[0].type;
    if (t(e, n)) return !0;
  }
  return !1;
}
function Fi(e) {
  let t = Oe(y);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Ii(e) {
  let [t, n] = e,
    r = JSON.stringify(t);
  function i(e) {
    typeof r == `string`
      ? (r = typeof e == `string` ? r + e : [Fi(r), e])
      : r.push(typeof e == `string` ? Fi(e) : e);
  }
  for (let e of n) {
    let [t, n] = e;
    if (
      (i(`\n${JSON.stringify(t)}\n`),
      typeof n == `string` || n instanceof Uint8Array)
    )
      i(n);
    else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch {
        e = JSON.stringify(Ci(n));
      }
      i(e);
    }
  }
  return typeof r == `string` ? r : Li(r);
}
function Li(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
function Ri(e) {
  return [{ type: `span` }, e];
}
function zi(e) {
  let t = typeof e.data == `string` ? Fi(e.data) : e.data;
  return [
    {
      type: `attachment`,
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    },
    t,
  ];
}
function Bi(e) {
  return Ui[e];
}
function Vi(e) {
  if (!e?.sdk) return;
  let { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Hi(e, t, n, r) {
  let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: xr(r) }),
    ...(i && { trace: i }),
  };
}
var Ui,
  Wi = e(() => {
    (x(),
      Ar(),
      ji(),
      b(),
      (Ui = {
        session: `session`,
        sessions: `session`,
        attachment: `attachment`,
        transaction: `transaction`,
        event: `error`,
        client_report: `internal`,
        user_report: `default`,
        profile: `profile`,
        profile_chunk: `profile`,
        replay_event: `replay`,
        replay_recording: `replay`,
        check_in: `monitor`,
        feedback: `feedback`,
        span: `span`,
        raw_security: `security`,
        log: `log_item`,
        metric: `metric`,
        trace_metric: `metric`,
      }));
  });
function Gi(e, t) {
  if (!t) return e;
  let n = e.sdk || {};
  return (
    (e.sdk = {
      ...n,
      name: n.name || t.name,
      version: n.version || t.version,
      integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
      packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
      settings:
        e.sdk?.settings || t.settings
          ? { ...e.sdk?.settings, ...t.settings }
          : void 0,
    }),
    e
  );
}
function Ki(e, t, n, r) {
  let i = Vi(n);
  return Mi(
    {
      sent_at: new Date().toISOString(),
      ...(i && { sdk: i }),
      ...(!!r && t && { dsn: xr(t) }),
    },
    [
      `aggregates` in e
        ? [{ type: `sessions` }, e]
        : [{ type: `session` }, e.toJSON()],
    ],
  );
}
function qi(e, t, n, r) {
  let i = Vi(n),
    a = e.type && e.type !== `replay_event` ? e.type : `event`;
  Gi(e, n?.sdk);
  let o = Hi(e, i, r, t);
  return (delete e.sdkProcessingMetadata, Mi(o, [[{ type: a }, e]]));
}
function Ji(e, t) {
  function n(e) {
    return !!e.trace_id && !!e.public_key;
  }
  let r = vi(e[0]),
    i = t?.getDsn(),
    a = t?.getOptions().tunnel,
    o = {
      sent_at: new Date().toISOString(),
      ...(n(r) && { trace: r }),
      ...(!!a && i && { dsn: xr(i) }),
    },
    { beforeSendSpan: s, ignoreSpans: c } = t?.getOptions() || {},
    l = c?.length ? e.filter((e) => !li(R(e), c)) : e,
    u = e.length - l.length;
  u && t?.recordDroppedEvent(`before_send`, `span`, u);
  let d = s
      ? (e) => {
          let t = R(e);
          return s(t) || (ei(), t);
        }
      : R,
    f = [];
  for (let e of l) {
    let t = d(e);
    t && f.push(Ri(t));
  }
  return Mi(o, f);
}
var Yi = e(() => {
  (bi(), Ar(), Wi(), fi(), V());
});
function Xi(e) {
  if (!_) return;
  let {
      description: t = `< unknown name >`,
      op: n = `< unknown op >`,
      parent_span_id: r,
    } = R(e),
    { spanId: i } = e.spanContext(),
    a = Yr(e),
    o = z(e),
    s = o === e,
    c = `[Tracing] Starting ${a ? `sampled` : `unsampled`} ${s ? `root ` : ``}span`,
    l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
  if ((r && l.push(`parent ID: ${r}`), !s)) {
    let { op: e, description: t } = R(o);
    (l.push(`root ID: ${o.spanContext().spanId}`),
      e && l.push(`root op: ${e}`),
      t && l.push(`root description: ${t}`));
  }
  S.log(`${c}
  ${l.join(`
  `)}`);
}
function Zi(e) {
  if (!_) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >` } = R(e),
    { spanId: r } = e.spanContext(),
    i = `[Tracing] Finishing "${n}" ${z(e) === e ? `root ` : ``}span "${t}" with ID ${r}`;
  S.log(i);
}
var Qi = e(() => {
  (v(), C(), V());
});
function $i(e, t, n, r = B()) {
  let i = r && z(r);
  i &&
    (_ &&
      S.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`),
    i.addEvent(e, { [Xn]: t, [Yn]: n }));
}
function ea(e) {
  if (!e || e.length === 0) return;
  let t = {};
  return (
    e.forEach((e) => {
      let n = e.attributes || {},
        r = n[Yn],
        i = n[Xn];
      typeof r == `string` &&
        typeof i == `number` &&
        (t[e.name] = { value: i, unit: r });
    }),
    t
  );
}
var ta = e(() => {
  (v(), tr(), C(), V());
});
function na(e) {
  return (e && typeof e == `number`) || e instanceof Date || Array.isArray(e);
}
function ra(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function ia(e) {
  return e instanceof sa && e.isStandaloneSpan();
}
function aa(e) {
  let t = P();
  if (!t) return;
  let n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent(`before_send`, `span`);
    return;
  }
  t.sendEnvelope(e);
}
var oa,
  sa,
  ca = e(() => {
    (F(),
      v(),
      Yi(),
      tr(),
      C(),
      Sn(),
      V(),
      fn(),
      bi(),
      Qi(),
      ta(),
      dr(),
      (oa = 1e3),
      (sa = class {
        constructor(e = {}) {
          ((this._traceId = e.traceId || bn()),
            (this._spanId = e.spanId || xn()),
            (this._startTime = e.startTimestamp || A()),
            (this._links = e.links),
            (this._attributes = {}),
            this.setAttributes({ [L]: `manual`, [qn]: e.op, ...e.attributes }),
            (this._name = e.name),
            e.parentSpanId && (this._parentSpanId = e.parentSpanId),
            `sampled` in e && (this._sampled = e.sampled),
            e.endTimestamp && (this._endTime = e.endTimestamp),
            (this._events = []),
            (this._isStandaloneSpan = e.isStandalone),
            this._endTime && this._onSpanEnded());
        }
        addLink(e) {
          return (
            this._links ? this._links.push(e) : (this._links = [e]),
            this
          );
        }
        addLinks(e) {
          return (
            this._links ? this._links.push(...e) : (this._links = e),
            this
          );
        }
        recordException(e, t) {}
        spanContext() {
          let { _spanId: e, _traceId: t, _sampled: n } = this;
          return { spanId: e, traceId: t, traceFlags: n ? 1 : 0 };
        }
        setAttribute(e, t) {
          return (
            t === void 0
              ? delete this._attributes[e]
              : (this._attributes[e] = t),
            this
          );
        }
        setAttributes(e) {
          return (
            Object.keys(e).forEach((t) => this.setAttribute(t, e[t])),
            this
          );
        }
        updateStartTime(e) {
          this._startTime = Gr(e);
        }
        setStatus(e) {
          return ((this._status = e), this);
        }
        updateName(e) {
          return ((this._name = e), this.setAttribute(I, `custom`), this);
        }
        end(e) {
          this._endTime ||
            ((this._endTime = Gr(e)), Zi(this), this._onSpanEnded());
        }
        getSpanJSON() {
          return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[qn],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: Xr(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[L],
            profile_id: this._attributes[Qn],
            exclusive_time: this._attributes[$n],
            measurements: ea(this._events),
            is_segment: (this._isStandaloneSpan && z(this) === this) || void 0,
            segment_id: this._isStandaloneSpan
              ? z(this).spanContext().spanId
              : void 0,
            links: Wr(this._links),
          };
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        addEvent(e, t, n) {
          _ && S.log(`[Tracing] Adding an event to span:`, e);
          let r = na(t) ? t : n || A(),
            i = na(t) ? {} : t || {},
            a = { name: e, time: Gr(r), attributes: i };
          return (this._events.push(a), this);
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan;
        }
        _onSpanEnded() {
          let e = P();
          if (
            (e && e.emit(`spanEnd`, this),
            !(this._isStandaloneSpan || this === z(this)))
          )
            return;
          if (this._isStandaloneSpan) {
            this._sampled
              ? aa(Ji([this], e))
              : (_ &&
                  S.log(
                    `[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`,
                  ),
                e && e.recordDroppedEvent(`sample_rate`, `span`));
            return;
          }
          let t = this._convertSpanToTransaction();
          t && (cr(this).scope || M()).captureEvent(t);
        }
        _convertSpanToTransaction() {
          if (!ra(R(this))) return;
          this._name ||=
            (_ &&
              S.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`.",
              ),
            `<unlabeled transaction>`);
          let { scope: e, isolationScope: t } = cr(this),
            n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
          if (this._sampled !== !0) return;
          let r = $r(this)
              .filter((e) => e !== this && !ia(e))
              .map((e) => R(e))
              .filter(ra),
            i = this._attributes[I];
          (delete this._attributes[Zn],
            r.forEach((e) => {
              delete e.data[Zn];
            }));
          let a = {
              contexts: { trace: Br(this) },
              spans:
                r.length > oa
                  ? r
                      .sort((e, t) => e.start_timestamp - t.start_timestamp)
                      .slice(0, oa)
                  : r,
              start_timestamp: this._startTime,
              timestamp: this._endTime,
              transaction: this._name,
              type: `transaction`,
              sdkProcessingMetadata: {
                capturedSpanScope: e,
                capturedSpanIsolationScope: t,
                dynamicSamplingContext: vi(this),
              },
              request: n,
              ...(i && { transaction_info: { source: i } }),
            },
            o = ea(this._events);
          return (
            o &&
              Object.keys(o).length &&
              (_ &&
                S.log(
                  `[Measurements] Adding measurements to transaction event`,
                  JSON.stringify(o, void 0, 2),
                ),
              (a.measurements = o)),
            a
          );
        }
      }));
  });
function la(e, t, n = () => {}, r = () => {}) {
  let i;
  try {
    i = e();
  } catch (e) {
    throw (t(e), n(), e);
  }
  return ua(i, t, n, r);
}
function ua(e, t, n, r) {
  return Tt(e)
    ? e.then(
        (e) => (n(), r(e), e),
        (e) => {
          throw (t(e), n(), e);
        },
      )
    : (n(), r(e), e);
}
var da = e(() => {
  T();
});
function fa(e, t, n) {
  if (!H(e)) return [!1];
  let r, i;
  typeof e.tracesSampler == `function`
    ? ((i = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (e) =>
          typeof t.parentSampleRate == `number`
            ? t.parentSampleRate
            : typeof t.parentSampled == `boolean`
              ? Number(t.parentSampled)
              : e,
      })),
      (r = !0))
    : t.parentSampled === void 0
      ? e.tracesSampleRate !== void 0 && ((i = e.tracesSampleRate), (r = !0))
      : (i = t.parentSampled);
  let a = jr(i);
  if (a === void 0)
    return (
      _ &&
        S.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`,
        ),
      [!1]
    );
  if (!a)
    return (
      _ &&
        S.log(
          `[Tracing] Discarding transaction because ${typeof e.tracesSampler == `function` ? `tracesSampler returned 0 or false` : `a negative sampling decision was inherited or tracesSampleRate is set to 0`}`,
        ),
      [!1, a, r]
    );
  let o = n < a;
  return (
    o ||
      (_ &&
        S.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`,
        )),
    [o, a, r]
  );
}
var pa = e(() => {
  (v(), C(), si(), Mr());
});
function ma(e, t) {
  let n = ya();
  if (n.startSpan) return n.startSpan(e, t);
  let r = va(e),
    { forceTransaction: i, parentSpan: a, scope: o } = e,
    s = o?.clone();
  return Un(s, () =>
    Ca(a)(() => {
      let n = M(),
        o = Sa(n, a),
        s =
          e.onlyIfParent && !o
            ? new xi()
            : _a({
                parentSpan: o,
                spanArguments: r,
                forceTransaction: i,
                scope: n,
              });
      return (
        Cn(n, s),
        la(
          () => t(s),
          () => {
            let { status: e } = R(s);
            s.isRecording() &&
              (!e || e === `ok`) &&
              s.setStatus({ code: 2, message: `internal_error` });
          },
          () => {
            s.end();
          },
        )
      );
    }),
  );
}
function ha(e) {
  let t = ya();
  if (t.startInactiveSpan) return t.startInactiveSpan(e);
  let n = va(e),
    { forceTransaction: r, parentSpan: i } = e;
  return (
    e.scope
      ? (t) => Un(e.scope, t)
      : i === void 0
        ? (e) => e()
        : (e) => ga(i, e)
  )(() => {
    let t = M(),
      a = Sa(t, i);
    return e.onlyIfParent && !a
      ? new xi()
      : _a({ parentSpan: a, spanArguments: n, forceTransaction: r, scope: t });
  });
}
function ga(e, t) {
  let n = ya();
  return n.withActiveSpan
    ? n.withActiveSpan(e, t)
    : Un((n) => (Cn(n, e || void 0), t(n)));
}
function _a({
  parentSpan: e,
  spanArguments: t,
  forceTransaction: n,
  scope: r,
}) {
  if (!H()) {
    let r = new xi();
    return (
      (n || !e) &&
        hi(r, {
          sampled: `false`,
          sample_rate: `0`,
          transaction: t.name,
          ...vi(r),
        }),
      r
    );
  }
  let i = N(),
    a;
  if (e && !n) ((a = xa(e, r, t)), Zr(e, a));
  else if (e) {
    let n = vi(e),
      { traceId: i, spanId: o } = e.spanContext(),
      s = Yr(e);
    ((a = ba({ traceId: i, parentSpanId: o, ...t }, r, s)), hi(a, n));
  } else {
    let {
      traceId: e,
      dsc: n,
      parentSpanId: o,
      sampled: s,
    } = { ...i.getPropagationContext(), ...r.getPropagationContext() };
    ((a = ba({ traceId: e, parentSpanId: o, ...t }, r, s)), n && hi(a, n));
  }
  return (Xi(a), sr(a, r, i), a);
}
function va(e) {
  let t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    let n = { ...t };
    return ((n.startTimestamp = Gr(e.startTime)), delete n.startTime, n);
  }
  return t;
}
function ya() {
  return Bn(De());
}
function ba(e, t, n) {
  let r = P(),
    i = r?.getOptions() || {},
    { name: a = `` } = e,
    o = { spanAttributes: { ...e.attributes }, spanName: a, parentSampled: n };
  r?.emit(`beforeSampling`, o, { decision: !1 });
  let s = o.parentSampled ?? n,
    c = o.spanAttributes,
    l = t.getPropagationContext(),
    [u, d, f] = t.getScopeData().sdkProcessingMetadata[wa]
      ? [!1]
      : fa(
          i,
          {
            name: a,
            parentSampled: s,
            attributes: c,
            parentSampleRate: jr(l.dsc?.sample_rate),
          },
          l.sampleRand,
        ),
    p = new sa({
      ...e,
      attributes: { [I]: `custom`, [Gn]: d !== void 0 && f ? d : void 0, ...c },
      sampled: u,
    });
  return (
    !u &&
      r &&
      (_ &&
        S.log(
          `[Tracing] Discarding root span because its trace was not chosen to be sampled.`,
        ),
      r.recordDroppedEvent(`sample_rate`, `transaction`)),
    r && r.emit(`spanStart`, p),
    p
  );
}
function xa(e, t, n) {
  let { spanId: r, traceId: i } = e.spanContext(),
    a = t.getScopeData().sdkProcessingMetadata[wa] ? !1 : Yr(e),
    o = a
      ? new sa({ ...n, parentSpanId: r, traceId: i, sampled: a })
      : new xi({ traceId: i });
  Zr(e, o);
  let s = P();
  return (
    s && (s.emit(`spanStart`, o), n.endTimestamp && s.emit(`spanEnd`, o)),
    o
  );
}
function Sa(e, t) {
  if (t) return t;
  if (t === null) return;
  let n = wn(e);
  if (!n) return;
  let r = P();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? z(n) : n;
}
function Ca(e) {
  return e === void 0 ? (e) => e() : (t) => ga(e, t);
}
var wa,
  Ta = e(() => {
    (Vn(),
      x(),
      F(),
      v(),
      tr(),
      C(),
      da(),
      si(),
      Mr(),
      En(),
      V(),
      bi(),
      Qi(),
      pa(),
      Si(),
      ca(),
      ir(),
      dr(),
      (wa = `__SENTRY_SUPPRESS_TRACING__`));
  });
function Ea(e, t = {}) {
  let n = new Map(),
    r = !1,
    i,
    a = Ma,
    o = !t.disableAutoFinish,
    s = [],
    {
      idleTimeout: c = Oa.idleTimeout,
      finalTimeout: l = Oa.finalTimeout,
      childSpanTimeout: u = Oa.childSpanTimeout,
      beforeSpanEnd: d,
      trimIdleSpanEndTimestamp: f = !0,
    } = t,
    p = P();
  if (!p || !H()) {
    let e = new xi();
    return (hi(e, { sample_rate: `0`, sampled: `false`, ...vi(e) }), e);
  }
  let m = M(),
    h = B(),
    g = Da(e);
  g.end = new Proxy(g.end, {
    apply(e, t, n) {
      if ((d && d(g), t instanceof xi)) return;
      let [r, ...i] = n,
        a = Gr(r || A()),
        o = $r(g).filter((e) => e !== g),
        s = R(g);
      if (!o.length || !f) return (ae(a), Reflect.apply(e, t, [a, ...i]));
      let c = p.getOptions().ignoreSpans,
        u = o?.reduce(
          (e, t) => {
            let n = R(t);
            return !n.timestamp || (c && li(n, c))
              ? e
              : e
                ? Math.max(e, n.timestamp)
                : n.timestamp;
          },
          void 0,
        ),
        m = s.start_timestamp,
        h = Math.min(
          m ? m + l / 1e3 : 1 / 0,
          Math.max(m || -1 / 0, Math.min(a, u || 1 / 0)),
        );
      return (ae(h), Reflect.apply(e, t, [h, ...i]));
    },
  });
  function ee() {
    i &&= (clearTimeout(i), void 0);
  }
  function te(e) {
    (ee(),
      (i = setTimeout(() => {
        !r && n.size === 0 && o && ((a = Aa), g.end(e));
      }, c)));
  }
  function ne(e) {
    i = setTimeout(() => {
      !r && o && ((a = ka), g.end(e));
    }, u);
  }
  function re(e) {
    (ee(), n.set(e, !0), ne(A() + u / 1e3));
  }
  function ie(e) {
    (n.has(e) && n.delete(e), n.size === 0 && te(A() + c / 1e3));
  }
  function ae(e) {
    ((r = !0), n.clear(), s.forEach((e) => e()), Cn(m, h));
    let t = R(g),
      { start_timestamp: i } = t;
    if (!i) return;
    t.data[`sentry.idle_span_finish_reason`] || g.setAttribute(Jn, a);
    let o = t.status;
    ((!o || o === `unknown`) && g.setStatus({ code: 1 }),
      S.log(`[Tracing] Idle span "${t.op}" finished`));
    let u = $r(g).filter((e) => e !== g),
      d = 0;
    (u.forEach((t) => {
      t.isRecording() &&
        (t.setStatus({ code: 2, message: `cancelled` }),
        t.end(e),
        _ &&
          S.log(
            `[Tracing] Cancelling span since span ended early`,
            JSON.stringify(t, void 0, 2),
          ));
      let { timestamp: n = 0, start_timestamp: r = 0 } = R(t),
        i = r <= e,
        a = (l + c) / 1e3,
        o = n - r <= a;
      if (_) {
        let e = JSON.stringify(t, void 0, 2);
        i
          ? o ||
            S.log(
              `[Tracing] Discarding span since it finished after idle span final timeout`,
              e,
            )
          : S.log(
              `[Tracing] Discarding span since it happened after idle span was finished`,
              e,
            );
      }
      (!o || !i) && (Qr(g, t), d++);
    }),
      d > 0 && g.setAttribute(`sentry.idle_span_discarded_spans`, d));
  }
  return (
    s.push(
      p.on(`spanStart`, (e) => {
        r ||
          e === g ||
          R(e).timestamp ||
          (e instanceof sa && e.isStandaloneSpan()) ||
          ($r(g).includes(e) && re(e.spanContext().spanId));
      }),
    ),
    s.push(
      p.on(`spanEnd`, (e) => {
        r || ie(e.spanContext().spanId);
      }),
    ),
    s.push(
      p.on(`idleSpanEnableAutoFinish`, (e) => {
        e === g && ((o = !0), te(), n.size && ne());
      }),
    ),
    t.disableAutoFinish || te(),
    setTimeout(() => {
      r ||
        (g.setStatus({ code: 2, message: `deadline_exceeded` }),
        (a = ja),
        g.end());
    }, l),
    g
  );
}
function Da(e) {
  let t = ha(e);
  return (Cn(M(), t), _ && S.log(`[Tracing] Started span is an idle span`), t);
}
var Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na = e(() => {
    (F(),
      v(),
      tr(),
      C(),
      si(),
      fi(),
      En(),
      V(),
      fn(),
      bi(),
      Si(),
      ca(),
      ir(),
      Ta(),
      (Oa = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 }),
      (ka = `heartbeatFailed`),
      (Aa = `idleTimeout`),
      (ja = `finalTimeout`),
      (Ma = `externalFinish`));
  });
function Pa(e) {
  return new za((t) => {
    t(e);
  });
}
function Fa(e) {
  return new za((t, n) => {
    n(e);
  });
}
var Ia,
  La,
  Ra,
  za,
  Ba = e(() => {
    (T(),
      (Ia = 0),
      (La = 1),
      (Ra = 2),
      (za = class e {
        constructor(e) {
          ((this._state = Ia), (this._handlers = []), this._runExecutor(e));
        }
        then(t, n) {
          return new e((e, r) => {
            (this._handlers.push([
              !1,
              (n) => {
                if (!t) e(n);
                else
                  try {
                    e(t(n));
                  } catch (e) {
                    r(e);
                  }
              },
              (t) => {
                if (!n) r(t);
                else
                  try {
                    e(n(t));
                  } catch (e) {
                    r(e);
                  }
              },
            ]),
              this._executeHandlers());
          });
        }
        catch(e) {
          return this.then((e) => e, e);
        }
        finally(t) {
          return new e((e, n) => {
            let r, i;
            return this.then(
              (e) => {
                ((i = !1), (r = e), t && t());
              },
              (e) => {
                ((i = !0), (r = e), t && t());
              },
            ).then(() => {
              if (i) {
                n(r);
                return;
              }
              e(r);
            });
          });
        }
        _executeHandlers() {
          if (this._state === Ia) return;
          let e = this._handlers.slice();
          ((this._handlers = []),
            e.forEach((e) => {
              e[0] ||=
                (this._state === La && e[1](this._value),
                this._state === Ra && e[2](this._value),
                !0);
            }));
        }
        _runExecutor(e) {
          let t = (e, t) => {
              if (this._state === Ia) {
                if (Tt(t)) {
                  t.then(n, r);
                  return;
                }
                ((this._state = e), (this._value = t), this._executeHandlers());
              }
            },
            n = (e) => {
              t(La, e);
            },
            r = (e) => {
              t(Ra, e);
            };
          try {
            e(n, r);
          } catch (e) {
            r(e);
          }
        }
      }));
  });
function Va(e, t, n, r = 0) {
  try {
    let i = Ha(t, n, e, r);
    return Tt(i) ? i : Pa(i);
  } catch (e) {
    return Fa(e);
  }
}
function Ha(e, t, n, r) {
  let i = n[r];
  if (!e || !i) return e;
  let a = i({ ...e }, t);
  return (
    _ && a === null && S.log(`Event processor "${i.id || `?`}" dropped event`),
    Tt(a) ? a.then((e) => Ha(e, t, n, r + 1)) : Ha(a, t, n, r + 1)
  );
}
var Ua = e(() => {
  (v(), C(), T(), Ba());
});
function Wa(e, t) {
  let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
  (qa(e, t), r && Xa(e, r), Za(e, n), Ja(e, i), Ya(e, a));
}
function Ga(e, t) {
  let {
    extra: n,
    tags: r,
    user: i,
    contexts: a,
    level: o,
    sdkProcessingMetadata: s,
    breadcrumbs: c,
    fingerprint: l,
    eventProcessors: u,
    attachments: d,
    propagationContext: f,
    transactionName: p,
    span: m,
  } = t;
  (Ka(e, `extra`, n),
    Ka(e, `tags`, r),
    Ka(e, `user`, i),
    Ka(e, `contexts`, a),
    (e.sdkProcessingMetadata = vn(e.sdkProcessingMetadata, s, 2)),
    o && (e.level = o),
    p && (e.transactionName = p),
    m && (e.span = m),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    l.length && (e.fingerprint = [...e.fingerprint, ...l]),
    u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = { ...e.propagationContext, ...f }));
}
function Ka(e, t, n) {
  e[t] = vn(e[t], n, 1);
}
function qa(e, t) {
  let {
    extra: n,
    tags: r,
    user: i,
    contexts: a,
    level: o,
    transactionName: s,
  } = t;
  (Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
    Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
    Object.keys(i).length && (e.user = { ...i, ...e.user }),
    Object.keys(a).length && (e.contexts = { ...a, ...e.contexts }),
    o && (e.level = o),
    s && e.type !== `transaction` && (e.transaction = s));
}
function Ja(e, t) {
  let n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function Ya(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Xa(e, t) {
  ((e.contexts = { trace: Vr(t), ...e.contexts }),
    (e.sdkProcessingMetadata = {
      dynamicSamplingContext: vi(t),
      ...e.sdkProcessingMetadata,
    }));
  let n = R(z(t)).description;
  n && !e.transaction && e.type === `transaction` && (e.transaction = n);
}
function Za(e, t) {
  ((e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint.length || delete e.fingerprint);
}
var Qa = e(() => {
  (bi(), yn(), V());
});
function $a(e) {
  let t = y._sentryDebugIds,
    n = y._debugIds;
  if (!t && !n) return {};
  let r = t ? Object.keys(t) : [],
    i = n ? Object.keys(n) : [];
  if (ro && r.length === to && i.length === no) return ro;
  ((to = r.length), (no = i.length), (ro = {}), (eo ||= {}));
  let a = (t, n) => {
    for (let r of t) {
      let t = n[r],
        i = eo?.[r];
      if (i && ro && t) ((ro[i[0]] = t), eo && (eo[r] = [i[0], t]));
      else if (t) {
        let n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          let i = n[e]?.filename;
          if (i && ro && eo) {
            ((ro[i] = t), (eo[r] = [i, t]));
            break;
          }
        }
      }
    }
  };
  return (t && a(r, t), n && a(i, n), ro);
}
var eo,
  to,
  no,
  ro,
  io = e(() => {
    b();
  });
function ao(e, t, n, r, i, a) {
  let { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e,
    c = {
      ...t,
      event_id: t.event_id || n.event_id || k(),
      timestamp: t.timestamp || on(),
    },
    l = n.integrations || e.integrations.map((e) => e.name);
  (oo(c, e),
    lo(c, l),
    i && i.emit(`applyFrameMetadata`, t),
    t.type === void 0 && so(c, e.stackParser));
  let u = fo(r, n.captureContext);
  n.mechanism && en(c, n.mechanism);
  let d = i ? i.getEventProcessors() : [],
    f = Hn().getScopeData();
  (a && Ga(f, a.getScopeData()), u && Ga(f, u.getScopeData()));
  let p = [...(n.attachments || []), ...f.attachments];
  return (
    p.length && (n.attachments = p),
    Wa(c, f),
    Va([...d, ...f.eventProcessors], c, n).then(
      (e) => (e && co(e), typeof o == `number` && o > 0 ? uo(e, o, s) : e),
    )
  );
}
function oo(e, t) {
  let { environment: n, release: r, dist: i, maxValueLength: a } = t;
  ((e.environment = e.environment || n || `production`),
    !e.release && r && (e.release = r),
    !e.dist && i && (e.dist = i));
  let o = e.request;
  (o?.url && a && (o.url = Wt(o.url, a)),
    a &&
      e.exception?.values?.forEach((e) => {
        e.value &&= Wt(e.value, a);
      }));
}
function so(e, t) {
  let n = $a(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function co(e) {
  let t = {};
  if (
    (e.exception?.values?.forEach((e) => {
      e.stacktrace?.frames?.forEach((e) => {
        e.debug_id &&
          (e.abs_path
            ? (t[e.abs_path] = e.debug_id)
            : e.filename && (t[e.filename] = e.debug_id),
          delete e.debug_id);
      });
    }),
    Object.keys(t).length === 0)
  )
    return;
  ((e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []));
  let n = e.debug_meta.images;
  Object.entries(t).forEach(([e, t]) => {
    n.push({ type: `sourcemap`, code_file: e, debug_id: t });
  });
}
function lo(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function uo(e, t, n) {
  if (!e) return null;
  let r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((e) => ({
        ...e,
        ...(e.data && { data: Ci(e.data, t, n) }),
      })),
    }),
    ...(e.user && { user: Ci(e.user, t, n) }),
    ...(e.contexts && { contexts: Ci(e.contexts, t, n) }),
    ...(e.extra && { extra: Ci(e.extra, t, n) }),
  };
  return (
    e.contexts?.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = Ci(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((e) => ({
        ...e,
        ...(e.data && { data: Ci(e.data, t, n) }),
      }))),
    e.contexts?.flags &&
      r.contexts &&
      (r.contexts.flags = Ci(e.contexts.flags, 3, n)),
    r
  );
}
function fo(e, t) {
  if (!t) return e;
  let n = e ? e.clone() : new On();
  return (n.update(t), n);
}
function po(e) {
  if (e) return mo(e) || ho(e) ? { captureContext: e } : e;
}
function mo(e) {
  return e instanceof On || typeof e == `function`;
}
function ho(e) {
  return Object.keys(e).some((e) => go.includes(e));
}
var go,
  _o = e(() => {
    (mi(),
      F(),
      Ua(),
      kn(),
      Qa(),
      io(),
      an(),
      ji(),
      Jt(),
      fn(),
      (go = [
        `user`,
        `level`,
        `extra`,
        `contexts`,
        `tags`,
        `fingerprint`,
        `propagationContext`,
      ]));
  });
function vo(e, t) {
  return M().captureException(e, po(t));
}
function yo(e, t) {
  return M().captureEvent(e, t);
}
function bo(e, t) {
  N().setTag(e, t);
}
function xo(e) {
  N().setUser(e);
}
function So() {
  let e = P();
  return e?.getOptions().enabled !== !1 && !!e?.getTransport();
}
function Co(e) {
  let t = N(),
    n = M(),
    { userAgent: r } = y.navigator || {},
    i = pn({
      user: n.getUser() || t.getUser(),
      ...(r && { userAgent: r }),
      ...e,
    }),
    a = t.getSession();
  return (
    a?.status === `ok` && mn(a, { status: `exited` }),
    wo(),
    t.setSession(i),
    i
  );
}
function wo() {
  let e = N(),
    t = M().getSession() || e.getSession();
  (t && hn(t), To(), e.setSession());
}
function To() {
  let e = N(),
    t = P(),
    n = e.getSession();
  n && t && t.captureSession(n);
}
function Eo(e = !1) {
  if (e) {
    wo();
    return;
  }
  To();
}
var Do = e(() => {
  (F(), _n(), _o(), b());
});
function Oo(e) {
  let t = e.protocol ? `${e.protocol}:` : ``,
    n = e.port ? `:${e.port}` : ``;
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ``}/api/`;
}
function ko(e) {
  return `${Oo(e)}${e.projectId}/envelope/`;
}
function Ao(e, t) {
  let n = { sentry_version: Mo };
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  );
}
function jo(e, t, n) {
  return t || `${ko(e)}?${Ao(e, n)}`;
}
var Mo,
  No = e(() => {
    Mo = `7`;
  });
function Po(e) {
  let t = {};
  return (
    e.forEach((e) => {
      let { name: n } = e,
        r = t[n];
      (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
    }),
    Object.values(t)
  );
}
function Fo(e) {
  let t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((e) => {
    e.isDefaultInstance = !0;
  });
  let r;
  if (Array.isArray(n)) r = [...t, ...n];
  else if (typeof n == `function`) {
    let e = n(t);
    r = Array.isArray(e) ? e : [e];
  } else r = t;
  return Po(r);
}
function Io(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      t && Ro(e, t, n);
    }),
    n
  );
}
function Lo(e, t) {
  for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
}
function Ro(e, t, n) {
  if (n[t.name]) {
    _ &&
      S.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    !zo.includes(t.name) &&
      typeof t.setupOnce == `function` &&
      (t.setupOnce(), zo.push(t.name)),
    t.setup && typeof t.setup == `function` && t.setup(e),
    typeof t.preprocessEvent == `function`)
  ) {
    let n = t.preprocessEvent.bind(t);
    e.on(`preprocessEvent`, (t, r) => n(t, r, e));
  }
  if (typeof t.processEvent == `function`) {
    let n = t.processEvent.bind(t),
      r = Object.assign((t, r) => n(t, r, e), { id: t.name });
    e.addEventProcessor(r);
  }
  _ && S.log(`Integration installed: ${t.name}`);
}
function U(e) {
  return e;
}
var zo,
  Bo = e(() => {
    (v(), C(), (zo = []));
  });
function Vo(e) {
  return [
    {
      type: `log`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.log+json`,
    },
    { items: e },
  ];
}
function Ho(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = xr(r)),
    Mi(i, [Vo(e)])
  );
}
var Uo = e(() => {
  (Ar(), Wi());
});
function Wo(e, t) {
  let n = t ?? Go(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = Ho(n, r._metadata, r.tunnel, e.getDsn());
  (Ko().set(e, []), e.emit(`flushLogs`), e.sendEnvelope(i));
}
function Go(e) {
  return Ko().get(e);
}
function Ko() {
  return ke(`clientToLogBufferMap`, () => new WeakMap());
}
var qo = e(() => {
  (x(), Uo());
});
function Jo(e) {
  return [
    {
      type: `trace_metric`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.trace-metric+json`,
    },
    { items: e },
  ];
}
function Yo(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = xr(r)),
    Mi(i, [Jo(e)])
  );
}
var Xo = e(() => {
  (Ar(), Wi());
});
function Zo(e, t) {
  let n = t ?? Qo(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = Yo(n, r._metadata, r.tunnel, e.getDsn());
  ($o().set(e, []), e.emit(`flushMetrics`), e.sendEnvelope(i));
}
function Qo(e) {
  return $o().get(e);
}
function $o() {
  return ke(`clientToMetricBufferMap`, () => new WeakMap());
}
var es = e(() => {
  (x(), Xo());
});
function ts(e = 100) {
  let t = new Set();
  function n() {
    return t.size < e;
  }
  function r(e) {
    t.delete(e);
  }
  function i(e) {
    if (!n()) return Fa(ns);
    let i = e();
    return (
      t.add(i),
      i.then(
        () => r(i),
        () => r(i),
      ),
      i
    );
  }
  function a(e) {
    if (!t.size) return Pa(!0);
    let n = Promise.allSettled(Array.from(t)).then(() => !0);
    if (!e) return n;
    let r = [n, new Promise((t) => setTimeout(() => t(!1), e))];
    return Promise.race(r);
  }
  return {
    get $() {
      return Array.from(t);
    },
    add: i,
    drain: a,
  };
}
var ns,
  rs = e(() => {
    (Ba(), (ns = Symbol.for(`SentryBufferFullError`)));
  });
function is(e, t = Date.now()) {
  let n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${e}`);
  return isNaN(r) ? cs : r - t;
}
function as(e, t) {
  return e[t] || e.all || 0;
}
function os(e, t, n = Date.now()) {
  return as(e, t) > n;
}
function ss(e, { statusCode: t, headers: n }, r = Date.now()) {
  let i = { ...e },
    a = n?.[`x-sentry-rate-limits`],
    o = n?.[`retry-after`];
  if (a)
    for (let e of a.trim().split(`,`)) {
      let [t, n, , , a] = e.split(`:`, 5),
        o = parseInt(t, 10),
        s = (isNaN(o) ? 60 : o) * 1e3;
      if (!n) i.all = r + s;
      else
        for (let e of n.split(`;`))
          e === `metric_bucket`
            ? (!a || a.split(`;`).includes(`custom`)) && (i[e] = r + s)
            : (i[e] = r + s);
    }
  else o ? (i.all = r + is(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
  return i;
}
var cs,
  ls = e(() => {
    cs = 60 * 1e3;
  });
function us(e, t, n = ts(e.bufferSize || 64)) {
  let r = {},
    i = (e) => n.drain(e);
  function a(i) {
    let a = [];
    if (
      (Pi(i, (t, n) => {
        let i = Bi(n);
        os(r, i) ? e.recordDroppedEvent(`ratelimit_backoff`, i) : a.push(t);
      }),
      a.length === 0)
    )
      return Promise.resolve({});
    let o = Mi(i[0], a),
      s = (t) => {
        Pi(o, (n, r) => {
          e.recordDroppedEvent(t, Bi(r));
        });
      };
    return n
      .add(() =>
        t({ body: Ii(o) }).then(
          (e) => (
            e.statusCode !== void 0 &&
              (e.statusCode < 200 || e.statusCode >= 300) &&
              _ &&
              S.warn(
                `Sentry responded with status code ${e.statusCode} to sent event.`,
              ),
            (r = ss(r, e)),
            e
          ),
          (e) => {
            throw (
              s(`network_error`),
              _ && S.error(`Encountered error running transport request:`, e),
              e
            );
          },
        ),
      )
      .then(
        (e) => e,
        (e) => {
          if (e === ns)
            return (
              _ && S.error(`Skipped sending event because buffer is full.`),
              s(`queue_overflow`),
              Promise.resolve({})
            );
          throw e;
        },
      );
  }
  return { send: a, flush: i };
}
var ds = e(() => {
  (v(), C(), Wi(), rs(), ls());
});
function fs(e, t, n) {
  let r = [
    { type: `client_report` },
    { timestamp: n || on(), discarded_events: e },
  ];
  return Mi(t ? { dsn: t } : {}, [r]);
}
var ps = e(() => {
  (Wi(), fn());
});
function ms(e) {
  let t = [];
  e.message && t.push(e.message);
  try {
    let n = e.exception.values[e.exception.values.length - 1];
    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
  } catch {}
  return t;
}
var hs = e(() => {});
function gs(e) {
  let {
    trace_id: t,
    parent_span_id: n,
    span_id: r,
    status: i,
    origin: a,
    data: o,
    op: s,
  } = e.contexts?.trace ?? {};
  return {
    data: o ?? {},
    description: e.transaction,
    op: s,
    parent_span_id: n,
    span_id: r ?? ``,
    start_timestamp: e.start_timestamp ?? 0,
    status: i,
    timestamp: e.timestamp,
    trace_id: t ?? ``,
    origin: a,
    profile_id: o?.[Qn],
    exclusive_time: o?.[$n],
    measurements: e.measurements,
    is_segment: !0,
  };
}
function _s(e) {
  return {
    type: `transaction`,
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && { "sentry.profile_id": e.profile_id }),
          ...(e.exclusive_time && {
            "sentry.exclusive_time": e.exclusive_time,
          }),
        },
      },
    },
    measurements: e.measurements,
  };
}
var vs = e(() => {
  tr();
});
function ys(e) {
  return { message: e, [Fs]: !0 };
}
function bs(e) {
  return { message: e, [Is]: !0 };
}
function xs(e) {
  return !!e && typeof e == `object` && Fs in e;
}
function Ss(e) {
  return !!e && typeof e == `object` && Is in e;
}
function Cs(e, t, n, r, i) {
  let a = 0,
    o,
    s = !1;
  (e.on(n, () => {
    ((a = 0), clearTimeout(o), (s = !1));
  }),
    e.on(t, (t) => {
      ((a += r(t)),
        a >= 8e5
          ? i(e)
          : s ||
            ((s = !0),
            (o = setTimeout(() => {
              i(e);
            }, Ls))));
    }),
    e.on(`flush`, () => {
      i(e);
    }));
}
function ws(e) {
  return e === `replay_event` ? `replay` : e || `error`;
}
function Ts(e, t) {
  let n = `${t} must return \`null\` or a valid event.`;
  if (Tt(e))
    return e.then(
      (e) => {
        if (!xt(e) && e !== null) throw ys(n);
        return e;
      },
      (e) => {
        throw ys(`${t} rejected with ${e}`);
      },
    );
  if (!xt(e) && e !== null) throw ys(n);
  return e;
}
function Es(e, t, n, r) {
  let {
      beforeSend: i,
      beforeSendTransaction: a,
      beforeSendSpan: o,
      ignoreSpans: s,
    } = t,
    c = n;
  if (Ds(c) && i) return i(c, r);
  if (Os(c)) {
    if (o || s) {
      let t = gs(c);
      if (s?.length && li(t, s)) return null;
      if (o) {
        let e = o(t);
        e ? (c = vn(n, _s(e))) : ei();
      }
      if (c.spans) {
        let t = [],
          n = c.spans;
        for (let e of n) {
          if (s?.length && li(e, s)) {
            ui(n, e);
            continue;
          }
          if (o) {
            let n = o(e);
            n ? t.push(n) : (ei(), t.push(e));
          } else t.push(e);
        }
        let r = c.spans.length - t.length;
        (r && e.recordDroppedEvent(`before_send`, `span`, r), (c.spans = t));
      }
    }
    if (a) {
      if (c.spans) {
        let e = c.spans.length;
        c.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: e,
        };
      }
      return a(c, r);
    }
  }
  return c;
}
function Ds(e) {
  return e.type === void 0;
}
function Os(e) {
  return e.type === `transaction`;
}
function ks(e) {
  let t = 0;
  return (e.name && (t += e.name.length * 2), (t += 8), t + js(e.attributes));
}
function As(e) {
  let t = 0;
  return (e.message && (t += e.message.length * 2), t + js(e.attributes));
}
function js(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e)
        ? (t += e.length * Ms(e[0]))
        : bt(e)
          ? (t += Ms(e))
          : (t += 100);
    }),
    t
  );
}
function Ms(e) {
  return typeof e == `string`
    ? e.length * 2
    : typeof e == `number`
      ? 8
      : typeof e == `boolean`
        ? 4
        : 0;
}
var Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs = e(() => {
    (No(),
      mi(),
      F(),
      v(),
      Yi(),
      Bo(),
      qo(),
      es(),
      _n(),
      bi(),
      ds(),
      ps(),
      C(),
      Ar(),
      Wi(),
      hs(),
      T(),
      yn(),
      an(),
      Mr(),
      _o(),
      rs(),
      fi(),
      V(),
      Ba(),
      vs(),
      (Ns = `Not capturing exception because it's already been captured.`),
      (Ps = `Discarded session because of missing or non-string release`),
      (Fs = Symbol.for(`SentryInternalError`)),
      (Is = Symbol.for(`SentryDoNotSendEventError`)),
      (Ls = 5e3),
      (Rs = class {
        constructor(e) {
          if (
            ((this._options = e),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            (this._promiseBuffer = ts(e.transportOptions?.bufferSize ?? 64)),
            e.dsn
              ? (this._dsn = Dr(e.dsn))
              : _ && S.warn(`No DSN provided, client will not send events.`),
            this._dsn)
          ) {
            let t = jo(
              this._dsn,
              e.tunnel,
              e._metadata ? e._metadata.sdk : void 0,
            );
            this._transport = e.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...e.transportOptions,
              url: t,
            });
          }
          ((this._options.enableLogs =
            this._options.enableLogs ?? this._options._experiments?.enableLogs),
            this._options.enableLogs &&
              Cs(this, `afterCaptureLog`, `flushLogs`, As, Wo),
            (this._options.enableMetrics ??
              this._options._experiments?.enableMetrics ??
              !0) &&
              Cs(this, `afterCaptureMetric`, `flushMetrics`, ks, Zo));
        }
        captureException(e, t, n) {
          let r = k();
          if (tn(e)) return (_ && S.log(Ns), r);
          let i = { event_id: r, ...t };
          return (
            this._process(
              () =>
                this.eventFromException(e, i)
                  .then((e) => this._captureEvent(e, i, n))
                  .then((e) => e),
              `error`,
            ),
            i.event_id
          );
        }
        captureMessage(e, t, n, r) {
          let i = { event_id: k(), ...n },
            a = yt(e) ? e : String(e),
            o = bt(e),
            s = o
              ? this.eventFromMessage(a, t, i)
              : this.eventFromException(e, i);
          return (
            this._process(
              () => s.then((e) => this._captureEvent(e, i, r)),
              o ? `unknown` : `error`,
            ),
            i.event_id
          );
        }
        captureEvent(e, t, n) {
          let r = k();
          if (t?.originalException && tn(t.originalException))
            return (_ && S.log(Ns), r);
          let i = { event_id: r, ...t },
            a = e.sdkProcessingMetadata || {},
            o = a.capturedSpanScope,
            s = a.capturedSpanIsolationScope,
            c = ws(e.type);
          return (
            this._process(() => this._captureEvent(e, i, o || n, s), c),
            i.event_id
          );
        }
        captureSession(e) {
          (this.sendSession(e), mn(e, { init: !1 }));
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        async flush(e) {
          let t = this._transport;
          if (!t) return !0;
          this.emit(`flush`);
          let n = await this._isClientDoneProcessing(e),
            r = await t.flush(e);
          return n && r;
        }
        async close(e) {
          let t = await this.flush(e);
          return ((this.getOptions().enabled = !1), this.emit(`close`), t);
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(e) {
          this._eventProcessors.push(e);
        }
        init() {
          (this._isEnabled() ||
            this._options.integrations.some(({ name: e }) =>
              e.startsWith(`Spotlight`),
            )) &&
            this._setupIntegrations();
        }
        getIntegrationByName(e) {
          return this._integrations[e];
        }
        addIntegration(e) {
          let t = this._integrations[e.name];
          (Ro(this, e, this._integrations), t || Lo(this, [e]));
        }
        sendEvent(e, t = {}) {
          this.emit(`beforeSendEvent`, e, t);
          let n = qi(
            e,
            this._dsn,
            this._options._metadata,
            this._options.tunnel,
          );
          for (let e of t.attachments || []) n = Ni(n, zi(e));
          this.sendEnvelope(n).then((t) => this.emit(`afterSendEvent`, e, t));
        }
        sendSession(e) {
          let { release: t, environment: n = pi } = this._options;
          if (`aggregates` in e) {
            let r = e.attrs || {};
            if (!r.release && !t) {
              _ && S.warn(Ps);
              return;
            }
            ((r.release = r.release || t),
              (r.environment = r.environment || n),
              (e.attrs = r));
          } else {
            if (!e.release && !t) {
              _ && S.warn(Ps);
              return;
            }
            ((e.release = e.release || t),
              (e.environment = e.environment || n));
          }
          this.emit(`beforeSendSession`, e);
          let r = Ki(
            e,
            this._dsn,
            this._options._metadata,
            this._options.tunnel,
          );
          this.sendEnvelope(r);
        }
        recordDroppedEvent(e, t, n = 1) {
          if (this._options.sendClientReports) {
            let r = `${e}:${t}`;
            (_ &&
              S.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ``}`),
              (this._outcomes[r] = (this._outcomes[r] || 0) + n));
          }
        }
        on(e, t) {
          let n = (this._hooks[e] = this._hooks[e] || new Set()),
            r = (...e) => t(...e);
          return (
            n.add(r),
            () => {
              n.delete(r);
            }
          );
        }
        emit(e, ...t) {
          let n = this._hooks[e];
          n && n.forEach((e) => e(...t));
        }
        async sendEnvelope(e) {
          if (
            (this.emit(`beforeEnvelope`, e),
            this._isEnabled() && this._transport)
          )
            try {
              return await this._transport.send(e);
            } catch (e) {
              return (_ && S.error(`Error while sending envelope:`, e), {});
            }
          return (_ && S.error(`Transport disabled`), {});
        }
        _setupIntegrations() {
          let { integrations: e } = this._options;
          ((this._integrations = Io(this, e)), Lo(this, e));
        }
        _updateSessionFromEvent(e, t) {
          let n = t.level === `fatal`,
            r = !1,
            i = t.exception?.values;
          if (i) {
            ((r = !0), (n = !1));
            for (let e of i)
              if (e.mechanism?.handled === !1) {
                n = !0;
                break;
              }
          }
          let a = e.status === `ok`;
          ((a && e.errors === 0) || (a && n)) &&
            (mn(e, {
              ...(n && { status: `crashed` }),
              errors: e.errors || Number(r || n),
            }),
            this.captureSession(e));
        }
        async _isClientDoneProcessing(e) {
          let t = 0;
          for (; !e || t < e; ) {
            if (
              (await new Promise((e) => setTimeout(e, 1)), !this._numProcessing)
            )
              return !0;
            t++;
          }
          return !1;
        }
        _isEnabled() {
          return this.getOptions().enabled !== !1 && this._transport !== void 0;
        }
        _prepareEvent(e, t, n, r) {
          let i = this.getOptions(),
            a = Object.keys(this._integrations);
          return (
            !t.integrations && a?.length && (t.integrations = a),
            this.emit(`preprocessEvent`, e, t),
            e.type || r.setLastEventId(e.event_id || t.event_id),
            ao(i, e, t, n, this, r).then((e) =>
              e === null
                ? e
                : (this.emit(`postprocessEvent`, e, t),
                  (e.contexts = { trace: Wn(n), ...e.contexts }),
                  (e.sdkProcessingMetadata = {
                    dynamicSamplingContext: _i(this, n),
                    ...e.sdkProcessingMetadata,
                  }),
                  e),
            )
          );
        }
        _captureEvent(e, t = {}, n = M(), r = N()) {
          return (
            _ &&
              Ds(e) &&
              S.log(`Captured error event \`${ms(e)[0] || `<unknown>`}\``),
            this._processEvent(e, t, n, r).then(
              (e) => e.event_id,
              (e) => {
                _ &&
                  (Ss(e)
                    ? S.log(e.message)
                    : xs(e)
                      ? S.warn(e.message)
                      : S.warn(e));
              },
            )
          );
        }
        _processEvent(e, t, n, r) {
          let i = this.getOptions(),
            { sampleRate: a } = i,
            o = Os(e),
            s = Ds(e),
            c = `before send for type \`${e.type || `error`}\``,
            l = a === void 0 ? void 0 : jr(a);
          if (s && typeof l == `number` && Math.random() > l)
            return (
              this.recordDroppedEvent(`sample_rate`, `error`),
              Fa(
                bs(
                  `Discarding event because it's not included in the random sample (sampling rate = ${a})`,
                ),
              )
            );
          let u = ws(e.type);
          return this._prepareEvent(e, t, n, r)
            .then((e) => {
              if (e === null)
                throw (
                  this.recordDroppedEvent(`event_processor`, u),
                  bs("An event processor returned `null`, will not send event.")
                );
              return t.data && t.data.__sentry__ === !0
                ? e
                : Ts(Es(this, i, e, t), c);
            })
            .then((i) => {
              if (i === null) {
                if ((this.recordDroppedEvent(`before_send`, u), o)) {
                  let t = 1 + (e.spans || []).length;
                  this.recordDroppedEvent(`before_send`, `span`, t);
                }
                throw bs(`${c} returned \`null\`, will not send event.`);
              }
              let a = n.getSession() || r.getSession();
              if ((s && a && this._updateSessionFromEvent(a, i), o)) {
                let e =
                  (i.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) -
                  (i.spans ? i.spans.length : 0);
                e > 0 && this.recordDroppedEvent(`before_send`, `span`, e);
              }
              let l = i.transaction_info;
              return (
                o &&
                  l &&
                  i.transaction !== e.transaction &&
                  (i.transaction_info = { ...l, source: `custom` }),
                this.sendEvent(i, t),
                i
              );
            })
            .then(null, (e) => {
              throw Ss(e) || xs(e)
                ? e
                : (this.captureException(e, {
                    mechanism: { handled: !1, type: `internal` },
                    data: { __sentry__: !0 },
                    originalException: e,
                  }),
                  ys(
                    `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
                  ));
            });
        }
        _process(e, t) {
          (this._numProcessing++,
            this._promiseBuffer.add(e).then(
              (e) => (this._numProcessing--, e),
              (e) => (
                this._numProcessing--,
                e === ns && this.recordDroppedEvent(`queue_overflow`, t),
                e
              ),
            ));
        }
        _clearOutcomes() {
          let e = this._outcomes;
          return (
            (this._outcomes = {}),
            Object.entries(e).map(([e, t]) => {
              let [n, r] = e.split(`:`);
              return { reason: n, category: r, quantity: t };
            })
          );
        }
        _flushOutcomes() {
          _ && S.log(`Flushing outcomes...`);
          let e = this._clearOutcomes();
          if (e.length === 0) {
            _ && S.log(`No outcomes to send`);
            return;
          }
          if (!this._dsn) {
            _ && S.log(`No dsn provided, will not send outcomes`);
            return;
          }
          _ && S.log(`Sending outcomes:`, e);
          let t = fs(e, this._options.tunnel && xr(this._dsn));
          this.sendEnvelope(t);
        }
      }));
  });
function Bs(e, t) {
  (t.debug === !0 &&
    (_
      ? S.enable()
      : Ae(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        })),
    M().update(t.initialScope));
  let n = new e(t);
  return (Vs(n), n.init(), n);
}
function Vs(e) {
  M().setClient(e);
}
var Hs = e(() => {
  (F(), v(), C());
});
function Us(e) {
  return `isRelative` in e;
}
function Ws(e, t) {
  let n = e.indexOf(`://`) <= 0 && e.indexOf(`//`) !== 0,
    r = t ?? (n ? Js : void 0);
  try {
    if (`canParse` in URL && !URL.canParse(e, r)) return;
    let t = new URL(e, r);
    return n
      ? { isRelative: n, pathname: t.pathname, search: t.search, hash: t.hash }
      : t;
  } catch {}
}
function Gs(e) {
  if (Us(e)) return e.pathname;
  let t = new URL(e);
  return (
    (t.search = ``),
    (t.hash = ``),
    [`80`, `443`].includes(t.port) && (t.port = ``),
    (t.password &&= `%filtered%`),
    (t.username &&= `%filtered%`),
    t.toString()
  );
}
function Ks(e) {
  if (!e) return {};
  let t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!t) return {};
  let n = t[6] || ``,
    r = t[8] || ``;
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
function qs(e) {
  return e.split(/[?#]/, 1)[0];
}
var Js,
  Ys = e(() => {
    Js = `thismessage:/`;
  });
function Xs(e) {
  `aggregates` in e
    ? e.attrs?.ip_address === void 0 &&
      (e.attrs = { ...e.attrs, ip_address: `{{auto}}` })
    : e.ipAddress === void 0 && (e.ipAddress = `{{auto}}`);
}
var Zs = e(() => {});
function Qs(e, t, n = [t], r = `npm`) {
  let i = e._metadata || {};
  ((i.sdk ||= {
    name: `sentry.javascript.${t}`,
    packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: Te })),
    version: Te,
  }),
    (e._metadata = i));
}
var $s = e(() => {
  Ee();
});
function ec(e = {}) {
  let t = e.client || P();
  if (!So() || !t) return {};
  let n = Bn(De());
  if (n.getTraceData) return n.getTraceData(e);
  let r = e.scope || M(),
    i = e.span || B(),
    a = i ? Hr(i) : tc(r),
    o = pr(i ? vi(i) : _i(t, r));
  if (!Rr.test(a))
    return (
      S.warn(`Invalid sentry-trace data. Cannot generate trace data`),
      {}
    );
  let s = { "sentry-trace": a, baggage: o };
  if (e.propagateTraceparent) {
    let e = i ? Ur(i) : nc(r);
    e && (s.traceparent = e);
  }
  return s;
}
function tc(e) {
  let {
    traceId: t,
    sampled: n,
    propagationSpanId: r,
  } = e.getPropagationContext();
  return Fr(t, r, n);
}
function nc(e) {
  let {
    traceId: t,
    sampled: n,
    propagationSpanId: r,
  } = e.getPropagationContext();
  return Ir(t, r, n);
}
var rc = e(() => {
  (Vn(), x(), F(), Do(), C(), V(), bi(), yr(), zr());
});
function ic(e, t) {
  let n = P(),
    r = N();
  if (!n) return;
  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = ac } = n.getOptions();
  if (a <= 0) return;
  let o = { timestamp: on(), ...e },
    s = i ? Ae(() => i(o, t)) : o;
  s !== null &&
    (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a));
}
var ac,
  oc = e(() => {
    (F(), C(), fn(), (ac = 100));
  }),
  sc,
  cc,
  lc,
  uc,
  dc,
  fc = e(() => {
    (F(),
      Bo(),
      Ut(),
      (cc = `FunctionToString`),
      (lc = new WeakMap()),
      (uc = () => ({
        name: cc,
        setupOnce() {
          sc = Function.prototype.toString;
          try {
            Function.prototype.toString = function (...e) {
              let t = Rt(this),
                n = lc.has(P()) && t !== void 0 ? t : this;
              return sc.apply(n, e);
            };
          } catch {}
        },
        setup(e) {
          lc.set(e, !0);
        },
      })),
      (dc = U(uc)));
  });
function pc(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Sc),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function mc(e, t) {
  if (!e.type) {
    if (hc(e, t.ignoreErrors))
      return (
        _ &&
          S.warn(
            `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Qt(e)}`,
          ),
        !0
      );
    if (xc(e))
      return (
        _ &&
          S.warn(
            `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${Qt(e)}`,
          ),
        !0
      );
    if (_c(e, t.denyUrls))
      return (
        _ &&
          S.warn(
            `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Qt(e)}.\nUrl: ${bc(e)}`,
          ),
        !0
      );
    if (!vc(e, t.allowUrls))
      return (
        _ &&
          S.warn(
            `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Qt(e)}.\nUrl: ${bc(e)}`,
          ),
        !0
      );
  } else if (e.type === `transaction` && gc(e, t.ignoreTransactions))
    return (
      _ &&
        S.warn(
          `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${Qt(e)}`,
        ),
      !0
    );
  return !1;
}
function hc(e, t) {
  return t?.length ? ms(e).some((e) => qt(e, t)) : !1;
}
function gc(e, t) {
  if (!t?.length) return !1;
  let n = e.transaction;
  return n ? qt(n, t) : !1;
}
function _c(e, t) {
  if (!t?.length) return !1;
  let n = bc(e);
  return n ? qt(n, t) : !1;
}
function vc(e, t) {
  if (!t?.length) return !0;
  let n = bc(e);
  return n ? qt(n, t) : !0;
}
function yc(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`)
      return n.filename || null;
  }
  return null;
}
function bc(e) {
  try {
    let t = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        (e) =>
          e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length,
      )?.stacktrace?.frames;
    return t ? yc(t) : null;
  } catch {
    return (_ && S.error(`Cannot extract url for event ${Qt(e)}`), null);
  }
}
function xc(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          (e) => e.stacktrace || (e.type && e.type !== `Error`) || e.value,
        )
    : !1;
}
var Sc,
  Cc,
  wc,
  Tc,
  Ec = e(() => {
    (v(),
      Bo(),
      C(),
      hs(),
      an(),
      Jt(),
      (Sc = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        /^Can't find variable: gmo$/,
        /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
        `can't redefine non-configurable property "solana"`,
        `vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)`,
        `Can't find variable: _AutofillCallbackHandler`,
        /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
        /^Java exception was raised during method invocation$/,
      ]),
      (Cc = `EventFilters`),
      (wc = U((e = {}) => {
        let t;
        return {
          name: Cc,
          setup(n) {
            t = pc(e, n.getOptions());
          },
          processEvent(n, r, i) {
            return ((t ||= pc(e, i.getOptions())), mc(n, t) ? null : n);
          },
        };
      })),
      (Tc = U((e = {}) => ({ ...wc(e), name: `InboundFilters` }))));
  });
function Dc(e, t, n, r, i, a) {
  if (!i.exception?.values || !a || !Dt(a.originalException, Error)) return;
  let o =
    i.exception.values.length > 0
      ? i.exception.values[i.exception.values.length - 1]
      : void 0;
  o &&
    (i.exception.values = Oc(
      e,
      t,
      r,
      a.originalException,
      n,
      i.exception.values,
      o,
      0,
    ));
}
function Oc(e, t, n, r, i, a, o, s) {
  if (a.length >= n + 1) return a;
  let c = [...a];
  if (Dt(r[i], Error)) {
    kc(o, s);
    let a = e(t, r[i]),
      l = c.length;
    (Ac(a, i, l, s), (c = Oc(e, t, n, r[i], i, [a, ...c], a, l)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((r, a) => {
        if (Dt(r, Error)) {
          kc(o, s);
          let l = e(t, r),
            u = c.length;
          (Ac(l, `errors[${a}]`, u, s),
            (c = Oc(e, t, n, r, i, [l, ...c], l, u)));
        }
      }),
    c
  );
}
function kc(e, t) {
  e.mechanism = {
    handled: !0,
    type: `auto.core.linked_errors`,
    ...e.mechanism,
    ...(e.type === `AggregateError` && { is_exception_group: !0 }),
    exception_id: t,
  };
}
function Ac(e, t, n, r) {
  e.mechanism = {
    handled: !0,
    ...e.mechanism,
    type: `chained`,
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
var jc = e(() => {
  T();
});
function Mc(e) {
  let t = `console`;
  (et(t, e), tt(t, Nc));
}
function Nc() {
  `console` in y &&
    ze.forEach(function (e) {
      e in y.console &&
        D(y.console, e, function (t) {
          return (
            (Ve[e] = t),
            function (...t) {
              (w(`console`, { args: t, level: e }), Ve[e]?.apply(y.console, t));
            }
          );
        });
    });
}
var Pc = e(() => {
  (C(), Ut(), b(), it());
});
function Fc(e) {
  return e === `warn`
    ? `warning`
    : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e)
      ? e
      : `log`;
}
var Ic = e(() => {});
function Lc(e, t) {
  return t ? !!(Rc(e, t) || zc(e, t)) : !1;
}
function Rc(e, t) {
  let n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Vc(e, t) ||
    !Bc(e, t)
  );
}
function zc(e, t) {
  let n = Hc(t),
    r = Hc(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Vc(e, t) ||
    !Bc(e, t)
  );
}
function Bc(e, t) {
  let n = qe(e),
    r = qe(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e],
      i = n[e];
    if (
      t.filename !== i.filename ||
      t.lineno !== i.lineno ||
      t.colno !== i.colno ||
      t.function !== i.function
    )
      return !1;
  }
  return !0;
}
function Vc(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  ((n = n), (r = r));
  try {
    return n.join(``) === r.join(``);
  } catch {
    return !1;
  }
}
function Hc(e) {
  return e.exception?.values?.[0];
}
var Uc,
  Wc,
  Gc,
  Kc = e(() => {
    (v(),
      Bo(),
      C(),
      $e(),
      (Uc = `Dedupe`),
      (Wc = () => {
        let e;
        return {
          name: Uc,
          processEvent(t) {
            if (t.type) return t;
            try {
              if (Lc(t, e))
                return (
                  _ &&
                    S.warn(
                      `Event dropped due to being a duplicate of previously captured event.`,
                    ),
                  null
                );
            } catch {}
            return (e = t);
          },
        };
      }),
      (Gc = U(Wc)));
  });
function qc(e, t, n, r, i) {
  if (!e.fetchData) return;
  let { method: a, url: o } = e.fetchData,
    s = H() && t(o);
  if (e.endTimestamp && s) {
    let t = e.fetchData.__span;
    if (!t) return;
    let n = r[t];
    n && (Xc(n, e), Jc(n, e, i), delete r[t]);
    return;
  }
  let { spanOrigin: c = `auto.http.browser`, propagateTraceparent: l = !1 } =
      typeof i == `object` ? i : { spanOrigin: i },
    u = !!B(),
    d = s && u ? ha($c(o, a, c)) : new xi();
  if (
    ((e.fetchData.__span = d.spanContext().spanId),
    (r[d.spanContext().spanId] = d),
    n(e.fetchData.url))
  ) {
    let t = e.args[0],
      n = e.args[1] || {},
      r = Yc(t, n, H() && u ? d : void 0, l);
    r && ((e.args[1] = n), (n.headers = r));
  }
  let f = P();
  if (f) {
    let t = {
      input: e.args,
      response: e.response,
      startTimestamp: e.startTimestamp,
      endTimestamp: e.endTimestamp,
    };
    f.emit(`beforeOutgoingRequestSpan`, d, t);
  }
  return d;
}
function Jc(e, t, n) {
  (typeof n == `object` && n ? n.onRequestSpanEnd : void 0)?.(e, {
    headers: t.response?.headers,
    error: t.error,
  });
}
function Yc(e, t, n, r) {
  let i = ec({ span: n, propagateTraceparent: r }),
    a = i[`sentry-trace`],
    o = i.baggage,
    s = i.traceparent;
  if (!a) return;
  let c = t.headers || (kt(e) ? e.headers : void 0);
  if (!c) return { ...i };
  if (Qc(c)) {
    let e = new Headers(c);
    if (
      (e.get(`sentry-trace`) || e.set(`sentry-trace`, a),
      r && s && !e.get(`traceparent`) && e.set(`traceparent`, s),
      o)
    ) {
      let t = e.get(`baggage`);
      t ? Zc(t) || e.set(`baggage`, `${t},${o}`) : e.set(`baggage`, o);
    }
    return e;
  } else if (Array.isArray(c)) {
    let e = [...c];
    (c.find((e) => e[0] === `sentry-trace`) || e.push([`sentry-trace`, a]),
      r &&
        s &&
        !c.find((e) => e[0] === `traceparent`) &&
        e.push([`traceparent`, s]));
    let t = c.find((e) => e[0] === `baggage` && Zc(e[1]));
    return (o && !t && e.push([`baggage`, o]), e);
  } else {
    let e = `sentry-trace` in c ? c[`sentry-trace`] : void 0,
      t = `traceparent` in c ? c.traceparent : void 0,
      n = `baggage` in c ? c.baggage : void 0,
      i = n ? (Array.isArray(n) ? [...n] : [n]) : [],
      l = n && (Array.isArray(n) ? n.find((e) => Zc(e)) : Zc(n));
    o && !l && i.push(o);
    let u = {
      ...c,
      "sentry-trace": e ?? a,
      baggage: i.length > 0 ? i.join(`,`) : void 0,
    };
    return (r && s && !t && (u.traceparent = s), u);
  }
}
function Xc(e, t) {
  if (t.response) {
    rr(e, t.response.status);
    let n = t.response?.headers?.get(`content-length`);
    if (n) {
      let t = parseInt(n);
      t > 0 && e.setAttribute(`http.response_content_length`, t);
    }
  } else t.error && e.setStatus({ code: 2, message: `internal_error` });
  e.end();
}
function Zc(e) {
  return e.split(`,`).some((e) => e.trim().startsWith(_r));
}
function Qc(e) {
  return typeof Headers < `u` && Dt(e, Headers);
}
function $c(e, t, n) {
  let r = Ws(e);
  return { name: r ? `${t} ${Gs(r)}` : t, attributes: el(e, r, t, n) };
}
function el(e, t, n, r) {
  let i = {
    url: e,
    type: `fetch`,
    "http.method": n,
    [L]: r,
    [qn]: `http.client`,
  };
  return (
    t &&
      (Us(t) || ((i[`http.url`] = t.href), (i[`server.address`] = t.host)),
      t.search && (i[`http.query`] = t.search),
      t.hash && (i[`http.fragment`] = t.hash)),
    i
  );
}
var tl = e(() => {
  (F(), tr(), V(), ir(), T(), si(), yr(), Si(), Ta(), rc(), Ys());
});
function nl(e) {
  if (e !== void 0) {
    if (e >= 400 && e < 500) return `warning`;
    if (e >= 500) return `error`;
  }
}
var rl = e(() => {});
function il() {
  return `history` in cl && !!cl.history;
}
function al() {
  if (!(`fetch` in cl)) return !1;
  try {
    return (new Headers(), new Request(`data:,`), new Response(), !0);
  } catch {
    return !1;
  }
}
function ol(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function sl() {
  if (typeof EdgeRuntime == `string`) return !0;
  if (!al()) return !1;
  if (ol(cl.fetch)) return !0;
  let e = !1,
    t = cl.document;
  if (t && typeof t.createElement == `function`)
    try {
      let n = t.createElement(`iframe`);
      ((n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow?.fetch && (e = ol(n.contentWindow.fetch)),
        t.head.removeChild(n));
    } catch (e) {
      _ &&
        S.warn(
          `Could not create sandbox iframe for pure fetch check, bailing to window.fetch: `,
          e,
        );
    }
  return e;
}
var cl,
  ll = e(() => {
    (v(), C(), b(), (cl = y));
  });
function ul(e, t) {
  let n = `fetch`;
  (et(n, e), tt(n, () => fl(void 0, t)));
}
function dl(e) {
  let t = `fetch-body-resolved`;
  (et(t, e), tt(t, () => fl(ml)));
}
function fl(e, t = !1) {
  (t && !sl()) ||
    D(y, `fetch`, function (t) {
      return function (...n) {
        let r = Error(),
          { method: i, url: a } = _l(n),
          o = {
            args: n,
            fetchData: { method: i, url: a },
            startTimestamp: A() * 1e3,
            virtualError: r,
            headers: vl(n),
          };
        return (
          e || w(`fetch`, { ...o }),
          t.apply(y, n).then(
            async (t) => (
              e
                ? e(t)
                : w(`fetch`, { ...o, endTimestamp: A() * 1e3, response: t }),
              t
            ),
            (e) => {
              if (
                (w(`fetch`, { ...o, endTimestamp: A() * 1e3, error: e }),
                pt(e) &&
                  e.stack === void 0 &&
                  ((e.stack = r.stack), O(e, `framesToPop`, 1)),
                e instanceof TypeError &&
                  (e.message === `Failed to fetch` ||
                    e.message === `Load failed` ||
                    e.message ===
                      `NetworkError when attempting to fetch resource.`))
              )
                try {
                  let t = new URL(o.fetchData.url);
                  e.message = `${e.message} (${t.host})`;
                } catch {}
              throw e;
            },
          )
        );
      };
    });
}
async function pl(e, t) {
  if (e?.body) {
    let n = e.body,
      r = n.getReader(),
      i = setTimeout(() => {
        n.cancel().then(null, () => {});
      }, 90 * 1e3),
      a = !0;
    for (; a; ) {
      let e;
      try {
        e = setTimeout(() => {
          n.cancel().then(null, () => {});
        }, 5e3);
        let { done: i } = await r.read();
        (clearTimeout(e), i && (t(), (a = !1)));
      } catch {
        a = !1;
      } finally {
        clearTimeout(e);
      }
    }
    (clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {}));
  }
}
function ml(e) {
  let t;
  try {
    t = e.clone();
  } catch {
    return;
  }
  pl(t, () => {
    w(`fetch-body-resolved`, { endTimestamp: A() * 1e3, response: e });
  });
}
function hl(e, t) {
  return !!e && typeof e == `object` && !!e[t];
}
function gl(e) {
  return typeof e == `string`
    ? e
    : e
      ? hl(e, `url`)
        ? e.url
        : e.toString
          ? e.toString()
          : ``
      : ``;
}
function _l(e) {
  if (e.length === 0) return { method: `GET`, url: `` };
  if (e.length === 2) {
    let [t, n] = e;
    return {
      url: gl(t),
      method: hl(n, `method`) ? String(n.method).toUpperCase() : `GET`,
    };
  }
  let t = e[0];
  return {
    url: gl(t),
    method: hl(t, `method`) ? String(t.method).toUpperCase() : `GET`,
  };
}
function vl(e) {
  let [t, n] = e;
  try {
    if (typeof n == `object` && n && `headers` in n && n.headers)
      return new Headers(n.headers);
    if (kt(t)) return new Headers(t.headers);
  } catch {}
}
var yl = e(() => {
  (T(), Ut(), ll(), fn(), b(), it());
});
function bl() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < `u` && !!__SENTRY_BROWSER_BUNDLE__;
}
function xl() {
  return `npm`;
}
var Sl = e(() => {});
function Cl() {
  return (
    !bl() &&
    Object.prototype.toString.call(typeof process < `u` ? process : 0) ===
      `[object process]`
  );
}
var wl = e(() => {
  Sl();
});
function Tl() {
  return typeof window < `u` && (!Cl() || El());
}
function El() {
  return y.process?.type === `renderer`;
}
var Dl = e(() => {
  (wl(), b());
});
function Ol(e, t = !1) {
  return (
    !(
      t ||
      (e &&
        !e.startsWith(`/`) &&
        !e.match(/^[A-Z]:/) &&
        !e.startsWith(`.`) &&
        !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
    ) &&
    e !== void 0 &&
    !e.includes(`node_modules/`)
  );
}
function kl(e) {
  let t = /^\s*[-]{4,}$/,
    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/,
    r = /at (?:async )?(.+?) \(data:(.*?),/;
  return (i) => {
    let a = i.match(r);
    if (a) return { filename: `<data:${a[2]}>`, function: a[1] };
    let o = i.match(n);
    if (o) {
      let t, n, r, i, a;
      if (o[1]) {
        r = o[1];
        let e = r.lastIndexOf(`.`);
        if ((r[e - 1] === `.` && e--, e > 0)) {
          ((t = r.slice(0, e)), (n = r.slice(e + 1)));
          let i = t.indexOf(`.Module`);
          i > 0 && ((r = r.slice(i + 1)), (t = t.slice(0, i)));
        }
        i = void 0;
      }
      (n && ((i = t), (a = n)),
        n === `<anonymous>` && ((a = void 0), (r = void 0)),
        r === void 0 && ((a ||= `?`), (r = i ? `${i}.${a}` : a)));
      let s = o[2]?.startsWith(`file://`) ? o[2].slice(7) : o[2],
        c = o[5] === `native`;
      return (
        s?.match(/\/[A-Z]:/) && (s = s.slice(1)),
        !s && o[5] && !c && (s = o[5]),
        {
          filename: s ? decodeURI(s) : void 0,
          module: e ? e(s) : void 0,
          function: r,
          lineno: jl(o[3]),
          colno: jl(o[4]),
          in_app: Ol(s || ``, c),
        }
      );
    }
    if (i.match(t)) return { filename: i };
  };
}
function Al(e) {
  return [90, kl(e)];
}
function jl(e) {
  return parseInt(e || ``, 10) || void 0;
}
var Ml = e(() => {
    $e();
  }),
  W = e(() => {
    (oi(),
      Na(),
      Si(),
      ir(),
      Ta(),
      bi(),
      ta(),
      tr(),
      Do(),
      F(),
      zs(),
      Hs(),
      ds(),
      Bo(),
      Qa(),
      si(),
      Zs(),
      V(),
      $s(),
      rc(),
      oc(),
      fc(),
      Ec(),
      Kc(),
      tl(),
      qo(),
      es(),
      jc(),
      rl(),
      It(),
      b(),
      Pc(),
      yl(),
      ct(),
      ft(),
      it(),
      T(),
      Dl(),
      C(),
      an(),
      ji(),
      Ut(),
      rs(),
      Ic(),
      $e(),
      Ml(),
      Jt(),
      ll(),
      Ba(),
      fn(),
      zr(),
      Sl(),
      Ys(),
      Sn());
  });
function Nl(e) {
  return {
    createUrl: (t) => `${e}://${t}/sentry_key`,
    urlMatches: function (e, t) {
      return e.startsWith(this.createUrl(t));
    },
    createKey: (t) => `${e}.${t}`,
    namespace: e,
  };
}
var Pl,
  Fl,
  Il = e(() => {
    ((function (e) {
      ((e[(e.Classic = 1)] = `Classic`),
        (e[(e.Protocol = 2)] = `Protocol`),
        (e[(e.Both = 3)] = `Both`));
    })((Pl ||= {})),
      (Fl = `sentry-electron-renderer-id`));
  });
function Ll(e) {
  let t = Nl(e);
  if (window.__SENTRY_IPC__?.[t.namespace])
    return window.__SENTRY_IPC__[t.namespace];
  {
    S.log(
      `IPC was not configured in preload script, falling back to custom protocol and fetch`,
    );
    let e = (window.__SENTRY_RENDERER_ID__ = k()),
      n = { [Fl]: e };
    return {
      sendRendererStart: () => {
        fetch(t.createUrl(`start`), {
          method: `POST`,
          body: ``,
          headers: n,
        }).catch(() => {
          console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
        });
      },
      sendScope: (e) => {
        fetch(t.createUrl(`scope`), {
          method: `POST`,
          body: e,
          headers: n,
        }).catch(() => {});
      },
      sendEnvelope: (e) => {
        fetch(t.createUrl(`envelope`), {
          method: `POST`,
          body: e,
          headers: n,
        }).catch(() => {});
      },
      sendStatus: (e) => {
        fetch(t.createUrl(`status`), {
          method: `POST`,
          body: JSON.stringify({ status: e }),
          headers: n,
        }).catch(() => {});
      },
      sendStructuredLog: (e) => {
        fetch(t.createUrl(`structured-log`), {
          method: `POST`,
          body: JSON.stringify(e),
          headers: n,
        }).catch(() => {});
      },
      sendMetric: (e) => {
        fetch(t.createUrl(`metric`), {
          method: `POST`,
          body: JSON.stringify(e),
          headers: n,
        }).catch(() => {});
      },
    };
  }
}
function Rl(e = P()) {
  if (!e)
    throw Error(
      `Could not find client, make sure to call Sentry.init before getIPC`,
    );
  zl ||= new WeakMap();
  let t = zl.get(e);
  if (t) return t;
  let n = e.getOptions().ipcNamespace,
    r = Ll(n);
  return (zl.set(e, r), r.sendRendererStart(), r);
}
var zl,
  Bl = e(() => {
    (W(), Il());
  }),
  Vl = e(() => {
    Bl();
  }),
  Hl = e(() => {
    Bl();
  });
function Ul() {
  return ql > 0;
}
function Wl() {
  (ql++,
    setTimeout(() => {
      ql--;
    }));
}
function Gl(e, t = {}) {
  function n(e) {
    return typeof e == `function`;
  }
  if (!n(e)) return e;
  try {
    let t = e.__sentry_wrapped__;
    if (t) return typeof t == `function` ? t : e;
    if (Rt(e)) return e;
  } catch {
    return e;
  }
  let r = function (...n) {
    try {
      let r = n.map((e) => Gl(e, t));
      return e.apply(this, r);
    } catch (e) {
      throw (
        Wl(),
        Un((r) => {
          (r.addEventProcessor(
            (e) => (
              t.mechanism && ($t(e, void 0, void 0), en(e, t.mechanism)),
              (e.extra = { ...e.extra, arguments: n }),
              e
            ),
          ),
            vo(e));
        }),
        e
      );
    }
  };
  try {
    for (let t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
  } catch {}
  (Lt(r, e), O(e, `__sentry_wrapped__`, r));
  try {
    Object.getOwnPropertyDescriptor(r, `name`).configurable &&
      Object.defineProperty(r, `name`, {
        get() {
          return e.name;
        },
      });
  } catch {}
  return r;
}
function Kl() {
  let e = Mt(),
    { referrer: t } = G.document || {},
    { userAgent: n } = G.navigator || {};
  return {
    url: e,
    headers: { ...(t && { Referer: t }), ...(n && { "User-Agent": n }) },
  };
}
var G,
  ql,
  Jl = e(() => {
    (W(), (G = y), (ql = 0));
  });
function Yl(e, t) {
  let n = Ql(e, t),
    r = { type: nu(t), value: ru(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === `` &&
      (r.value = `Unrecoverable error caught`),
    r
  );
}
function Xl(e, t, n, r) {
  let i = P()?.getOptions().normalizeDepth,
    a = uu(t),
    o = { __serialized__: wi(t, i) };
  if (a) return { exception: { values: [Yl(e, a)] }, extra: o };
  let s = {
    exception: {
      values: [
        {
          type: St(t) ? t.constructor.name : r ? `UnhandledRejection` : `Error`,
          value: cu(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: o,
  };
  if (n) {
    let t = Ql(e, n);
    t.length && (s.exception.values[0].stacktrace = { frames: t });
  }
  return s;
}
function Zl(e, t) {
  return { exception: { values: [Yl(e, t)] } };
}
function Ql(e, t) {
  let n = t.stacktrace || t.stack || ``,
    r = $l(t),
    i = eu(t);
  try {
    return e(n, r, i);
  } catch {}
  return [];
}
function $l(e) {
  return e && du.test(e.message) ? 1 : 0;
}
function eu(e) {
  return typeof e.framesToPop == `number` ? e.framesToPop : 0;
}
function tu(e) {
  return typeof WebAssembly < `u` && WebAssembly.Exception !== void 0
    ? e instanceof WebAssembly.Exception
    : !1;
}
function nu(e) {
  let t = e?.name;
  return !t && tu(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : `WebAssembly.Exception`
    : t;
}
function ru(e) {
  let t = e?.message;
  return tu(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : `wasm exception`
    : t
      ? t.error && typeof t.error.message == `string`
        ? t.error.message
        : t
      : `No error message`;
}
function iu(e, t, n, r) {
  let i = ou(e, t, n?.syntheticException || void 0, r);
  return (
    en(i),
    (i.level = `error`),
    n?.event_id && (i.event_id = n.event_id),
    Pa(i)
  );
}
function au(e, t, n = `info`, r, i) {
  let a = su(e, t, r?.syntheticException || void 0, i);
  return ((a.level = n), r?.event_id && (a.event_id = r.event_id), Pa(a));
}
function ou(e, t, n, r, i) {
  let a;
  if (ht(t) && t.error) return Zl(e, t.error);
  if (gt(t) || _t(t)) {
    let i = t;
    if (`stack` in t) a = Zl(e, t);
    else {
      let t = i.name || (gt(i) ? `DOMError` : `DOMException`),
        o = i.message ? `${t}: ${i.message}` : t;
      ((a = su(e, o, n, r)), $t(a, o));
    }
    return (
      `code` in i && (a.tags = { ...a.tags, "DOMException.code": `${i.code}` }),
      a
    );
  }
  return pt(t)
    ? Zl(e, t)
    : xt(t) || St(t)
      ? ((a = Xl(e, t, n, i)), en(a, { synthetic: !0 }), a)
      : ((a = su(e, t, n, r)),
        $t(a, `${t}`, void 0),
        en(a, { synthetic: !0 }),
        a);
}
function su(e, t, n, r) {
  let i = {};
  if (r && n) {
    let r = Ql(e, n);
    (r.length &&
      (i.exception = { values: [{ value: t, stacktrace: { frames: r } }] }),
      en(i, { synthetic: !0 }));
  }
  if (yt(t)) {
    let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return ((i.logentry = { message: e, params: n }), i);
  }
  return ((i.message = t), i);
}
function cu(e, { isUnhandledRejection: t }) {
  let n = Ht(e),
    r = t ? `promise rejection` : `exception`;
  return ht(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : St(e)
      ? `Event \`${lu(e)}\` (type=${e.type}) captured as ${r}`
      : `Object captured as ${r} with keys: ${n}`;
}
function lu(e) {
  try {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function uu(e) {
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      let n = e[t];
      if (n instanceof Error) return n;
    }
}
var du,
  fu = e(() => {
    (W(), (du = /Minified React error #\d+;/i));
  });
function pu(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == `string`
        ? __SENTRY_RELEASE__
        : G.SENTRY_RELEASE?.id,
    sendClientReports: !0,
    parentSpanIsAlwaysRootSpan: !0,
    ...e,
  };
}
var mu,
  hu = e(() => {
    (W(),
      fu(),
      Jl(),
      (mu = class extends Rs {
        constructor(e) {
          let t = pu(e);
          (Qs(t, `browser`, [`browser`], G.SENTRY_SDK_SOURCE || xl()),
            t._metadata?.sdk &&
              (t._metadata.sdk.settings = {
                infer_ip: t.sendDefaultPii ? `auto` : `never`,
                ...t._metadata.sdk.settings,
              }),
            super(t));
          let {
              sendDefaultPii: n,
              sendClientReports: r,
              enableLogs: i,
              _experiments: a,
              enableMetrics: o,
            } = this._options,
            s = o ?? a?.enableMetrics ?? !0;
          (G.document &&
            (r || i || s) &&
            G.document.addEventListener(`visibilitychange`, () => {
              G.document.visibilityState === `hidden` &&
                (r && this._flushOutcomes(), i && Wo(this), s && Zo(this));
            }),
            n && this.on(`beforeSendSession`, Xs));
        }
        eventFromException(e, t) {
          return iu(
            this._options.stackParser,
            e,
            t,
            this._options.attachStacktrace,
          );
        }
        eventFromMessage(e, t = `info`, n) {
          return au(
            this._options.stackParser,
            e,
            t,
            n,
            this._options.attachStacktrace,
          );
        }
        _prepareEvent(e, t, n, r) {
          return (
            (e.platform = e.platform || `javascript`),
            super._prepareEvent(e, t, n, r)
          );
        }
      }));
  }),
  gu,
  _u = e(() => {
    gu = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
  }),
  K,
  q = e(() => {
    (W(), (K = y));
  }),
  vu,
  yu,
  bu = e(() => {
    ((vu = (e, t) =>
      e > t[1] ? `poor` : e > t[0] ? `needs-improvement` : `good`),
      (yu = (e, t, n, r) => {
        let i, a;
        return (o) => {
          t.value >= 0 &&
            (o || r) &&
            ((a = t.value - (i ?? 0)),
            (a || i === void 0) &&
              ((i = t.value),
              (t.delta = a),
              (t.rating = vu(t.value, n)),
              e(t)));
        };
      }));
  }),
  xu,
  Su = e(() => {
    (q(),
      (xu = (e = !0) => {
        let t = K.performance?.getEntriesByType?.(`navigation`)[0];
        if (
          !e ||
          (t && t.responseStart > 0 && t.responseStart < performance.now())
        )
          return t;
      }));
  }),
  Cu,
  wu = e(() => {
    (Su(), (Cu = () => xu()?.activationStart ?? 0));
  });
function Tu(e, t, n) {
  K.document && K.addEventListener(e, t, n);
}
function Eu(e, t, n) {
  K.document && K.removeEventListener(e, t, n);
}
var Du = e(() => {
  q();
});
function Ou(e) {
  return e.type === `pagehide` || K.document?.visibilityState === `hidden`;
}
var ku,
  Au,
  ju,
  Mu,
  Nu,
  Pu = e(() => {
    (q(),
      wu(),
      Du(),
      (ku = -1),
      (Au = new Set()),
      (ju = () =>
        K.document?.visibilityState === `hidden` && !K.document?.prerendering
          ? 0
          : 1 / 0),
      (Mu = (e) => {
        if (Ou(e) && ku > -1) {
          if (e.type === `visibilitychange` || e.type === `pagehide`)
            for (let e of Au) e();
          isFinite(ku) ||
            ((ku = e.type === `visibilitychange` ? e.timeStamp : 0),
            Eu(`prerenderingchange`, Mu, !0));
        }
      }),
      (Nu = () => {
        if (K.document && ku < 0) {
          let e = Cu();
          ((ku =
            (K.document.prerendering
              ? void 0
              : globalThis.performance
                  .getEntriesByType(`visibility-state`)
                  .filter((t) => t.name === `hidden` && t.startTime > e)[0]
                  ?.startTime) ?? ju()),
            Tu(`visibilitychange`, Mu, !0),
            Tu(`pagehide`, Mu, !0),
            Tu(`prerenderingchange`, Mu, !0));
        }
        return {
          get firstHiddenTime() {
            return ku;
          },
          onHidden(e) {
            Au.add(e);
          },
        };
      }));
  }),
  Fu,
  Iu = e(() => {
    Fu = () =>
      `v5-${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 0xe8d4a51000}`;
  }),
  Lu,
  Ru = e(() => {
    (q(),
      Iu(),
      wu(),
      Su(),
      (Lu = (e, t = -1) => {
        let n = xu(),
          r = `navigate`;
        return (
          n &&
            (K.document?.prerendering || Cu() > 0
              ? (r = `prerender`)
              : K.document?.wasDiscarded
                ? (r = `restore`)
                : n.type && (r = n.type.replace(/_/g, `-`))),
          {
            name: e,
            value: t,
            rating: `good`,
            delta: 0,
            entries: [],
            id: Fu(),
            navigationType: r,
          }
        );
      }));
  });
function zu(e, t) {
  return (Bu.get(e) || Bu.set(e, new t()), Bu.get(e));
}
var Bu,
  Vu = e(() => {
    Bu = new WeakMap();
  }),
  Hu,
  Uu = e(() => {
    Hu = class e {
      constructor() {
        (e.prototype.__init.call(this), e.prototype.__init2.call(this));
      }
      __init() {
        this._sessionValue = 0;
      }
      __init2() {
        this._sessionEntries = [];
      }
      _processEntry(e) {
        if (e.hadRecentInput) return;
        let t = this._sessionEntries[0],
          n = this._sessionEntries[this._sessionEntries.length - 1];
        (this._sessionValue &&
        t &&
        n &&
        e.startTime - n.startTime < 1e3 &&
        e.startTime - t.startTime < 5e3
          ? ((this._sessionValue += e.value), this._sessionEntries.push(e))
          : ((this._sessionValue = e.value), (this._sessionEntries = [e])),
          this._onAfterProcessingUnexpectedShift?.(e));
      }
    };
  }),
  Wu,
  Gu = e(() => {
    Wu = (e, t, n = {}) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          let r = new PerformanceObserver((e) => {
            Promise.resolve().then(() => {
              t(e.getEntries());
            });
          });
          return (r.observe({ type: e, buffered: !0, ...n }), r);
        }
      } catch {}
    };
  }),
  Ku,
  qu = e(() => {
    Ku = (e) => {
      let t = !1;
      return () => {
        t ||= (e(), !0);
      };
    };
  }),
  Ju,
  Yu = e(() => {
    (q(),
      (Ju = (e) => {
        K.document?.prerendering
          ? addEventListener(`prerenderingchange`, () => e(), !0)
          : e();
      }));
  }),
  Xu,
  Zu,
  Qu = e(() => {
    (bu(),
      wu(),
      Pu(),
      Ru(),
      Gu(),
      Yu(),
      (Xu = [1800, 3e3]),
      (Zu = (e, t = {}) => {
        Ju(() => {
          let n = Nu(),
            r = Lu(`FCP`),
            i,
            a = Wu(`paint`, (e) => {
              for (let t of e)
                t.name === `first-contentful-paint` &&
                  (a.disconnect(),
                  t.startTime < n.firstHiddenTime &&
                    ((r.value = Math.max(t.startTime - Cu(), 0)),
                    r.entries.push(t),
                    i(!0)));
            });
          a && (i = yu(e, r, Xu, t.reportAllChanges));
        });
      }));
  }),
  $u,
  ed,
  td = e(() => {
    (q(),
      bu(),
      Pu(),
      Ru(),
      Vu(),
      Uu(),
      Gu(),
      qu(),
      Qu(),
      ($u = [0.1, 0.25]),
      (ed = (e, t = {}) => {
        Zu(
          Ku(() => {
            let n = Lu(`CLS`, 0),
              r,
              i = Nu(),
              a = zu(t, Hu),
              o = (e) => {
                for (let t of e) a._processEntry(t);
                a._sessionValue > n.value &&
                  ((n.value = a._sessionValue),
                  (n.entries = a._sessionEntries),
                  r());
              },
              s = Wu(`layout-shift`, o);
            s &&
              ((r = yu(e, n, $u, t.reportAllChanges)),
              i.onHidden(() => {
                (o(s.takeRecords()), r(!0));
              }),
              K?.setTimeout?.(r));
          }),
        );
      }));
  }),
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld = e(() => {
    (Gu(),
      (nd = 0),
      (rd = 1 / 0),
      (id = 0),
      (ad = (e) => {
        e.forEach((e) => {
          e.interactionId &&
            ((rd = Math.min(rd, e.interactionId)),
            (id = Math.max(id, e.interactionId)),
            (nd = id ? (id - rd) / 7 + 1 : 0));
        });
      }),
      (sd = () => (od ? nd : performance.interactionCount || 0)),
      (cd = () => {
        `interactionCount` in performance ||
          od ||
          (od = Wu(`event`, ad, {
            type: `event`,
            buffered: !0,
            durationThreshold: 0,
          }));
      }));
  }),
  ud,
  dd,
  fd,
  pd,
  md = e(() => {
    (ld(),
      (ud = 10),
      (dd = 0),
      (fd = () => sd() - dd),
      (pd = class e {
        constructor() {
          (e.prototype.__init.call(this), e.prototype.__init2.call(this));
        }
        __init() {
          this._longestInteractionList = [];
        }
        __init2() {
          this._longestInteractionMap = new Map();
        }
        _resetInteractions() {
          ((dd = sd()),
            (this._longestInteractionList.length = 0),
            this._longestInteractionMap.clear());
        }
        _estimateP98LongestInteraction() {
          let e = Math.min(
            this._longestInteractionList.length - 1,
            Math.floor(fd() / 50),
          );
          return this._longestInteractionList[e];
        }
        _processEntry(e) {
          if (
            (this._onBeforeProcessingEntry?.(e),
            !(e.interactionId || e.entryType === `first-input`))
          )
            return;
          let t = this._longestInteractionList.at(-1),
            n = this._longestInteractionMap.get(e.interactionId);
          if (
            n ||
            this._longestInteractionList.length < ud ||
            e.duration > t._latency
          ) {
            if (
              (n
                ? e.duration > n._latency
                  ? ((n.entries = [e]), (n._latency = e.duration))
                  : e.duration === n._latency &&
                    e.startTime === n.entries[0].startTime &&
                    n.entries.push(e)
                : ((n = {
                    id: e.interactionId,
                    entries: [e],
                    _latency: e.duration,
                  }),
                  this._longestInteractionMap.set(n.id, n),
                  this._longestInteractionList.push(n)),
              this._longestInteractionList.sort(
                (e, t) => t._latency - e._latency,
              ),
              this._longestInteractionList.length > ud)
            ) {
              let e = this._longestInteractionList.splice(ud);
              for (let t of e) this._longestInteractionMap.delete(t.id);
            }
            this._onAfterProcessingINPCandidate?.(n);
          }
        }
      }));
  }),
  hd,
  gd = e(() => {
    (q(),
      Du(),
      (hd = (e) => {
        let t = (t) => {
          (t.type === `pagehide` || K.document?.visibilityState === `hidden`) &&
            e(t);
        };
        (Tu(`visibilitychange`, t, !0), Tu(`pagehide`, t, !0));
      }));
  }),
  _d,
  vd = e(() => {
    (q(),
      Du(),
      gd(),
      qu(),
      (_d = (e) => {
        let t = K.requestIdleCallback || K.setTimeout;
        K.document?.visibilityState === `hidden`
          ? e()
          : ((e = Ku(e)),
            Tu(`visibilitychange`, e, { once: !0, capture: !0 }),
            t(() => {
              (e(), Eu(`visibilitychange`, e, { capture: !0 }));
            }),
            hd(e));
      }));
  }),
  yd,
  bd,
  xd,
  Sd = e(() => {
    (bu(),
      Pu(),
      Ru(),
      Vu(),
      md(),
      Gu(),
      ld(),
      Yu(),
      vd(),
      (yd = [200, 500]),
      (bd = 40),
      (xd = (e, t = {}) => {
        if (
          !(
            globalThis.PerformanceEventTiming &&
            `interactionId` in PerformanceEventTiming.prototype
          )
        )
          return;
        let n = Nu();
        Ju(() => {
          cd();
          let r = Lu(`INP`),
            i,
            a = zu(t, pd),
            o = (e) => {
              _d(() => {
                for (let t of e) a._processEntry(t);
                let t = a._estimateP98LongestInteraction();
                t &&
                  t._latency !== r.value &&
                  ((r.value = t._latency), (r.entries = t.entries), i());
              });
            },
            s = Wu(`event`, o, {
              durationThreshold: t.durationThreshold ?? bd,
            });
          ((i = yu(e, r, yd, t.reportAllChanges)),
            s &&
              (s.observe({ type: `first-input`, buffered: !0 }),
              n.onHidden(() => {
                (o(s.takeRecords()), i(!0));
              })));
        });
      }));
  }),
  Cd,
  wd = e(() => {
    Cd = class {
      _processEntry(e) {
        this._onBeforeProcessingEntry?.(e);
      }
    };
  }),
  Td,
  Ed,
  Dd = e(() => {
    (bu(),
      wu(),
      Pu(),
      Du(),
      Ru(),
      Vu(),
      wd(),
      Gu(),
      qu(),
      Yu(),
      vd(),
      (Td = [2500, 4e3]),
      (Ed = (e, t = {}) => {
        Ju(() => {
          let n = Nu(),
            r = Lu(`LCP`),
            i,
            a = zu(t, Cd),
            o = (e) => {
              t.reportAllChanges || (e = e.slice(-1));
              for (let t of e)
                (a._processEntry(t),
                  t.startTime < n.firstHiddenTime &&
                    ((r.value = Math.max(t.startTime - Cu(), 0)),
                    (r.entries = [t]),
                    i()));
            },
            s = Wu(`largest-contentful-paint`, o);
          if (s) {
            i = yu(e, r, Td, t.reportAllChanges);
            let n = Ku(() => {
                (o(s.takeRecords()), s.disconnect(), i(!0));
              }),
              a = (e) => {
                e.isTrusted && (_d(n), Eu(e.type, a, { capture: !0 }));
              };
            for (let e of [`keydown`, `click`, `visibilitychange`])
              Tu(e, a, { capture: !0 });
          }
        });
      }));
  }),
  Od,
  kd,
  Ad,
  jd = e(() => {
    (q(),
      bu(),
      wu(),
      Su(),
      Ru(),
      Yu(),
      (Od = [800, 1800]),
      (kd = (e) => {
        K.document?.prerendering
          ? Ju(() => kd(e))
          : K.document?.readyState === `complete`
            ? setTimeout(e)
            : addEventListener(`load`, () => kd(e), !0);
      }),
      (Ad = (e, t = {}) => {
        let n = Lu(`TTFB`),
          r = yu(e, n, Od, t.reportAllChanges);
        kd(() => {
          let e = xu();
          e &&
            ((n.value = Math.max(e.responseStart - Cu(), 0)),
            (n.entries = [e]),
            r(!0));
        });
      }));
  });
function Md(e, t = !1) {
  return Hd(`cls`, e, Rd, Yd, t);
}
function Nd(e, t = !1) {
  return Hd(`lcp`, e, zd, Xd, t);
}
function Pd(e) {
  return Hd(`ttfb`, e, Bd, Zd);
}
function Fd(e) {
  return Hd(`inp`, e, Vd, Qd);
}
function Id(e, t) {
  return (Wd(e, t), Jd[e] || (Ud(e), (Jd[e] = !0)), Gd(e, t));
}
function Ld(e, t) {
  let n = qd[e];
  if (n?.length)
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        gu &&
          S.error(
            `Error while triggering instrumentation handler.\nType: ${e}\nName: ${Ke(r)}\nError:`,
            t,
          );
      }
}
function Rd() {
  return ed(
    (e) => {
      (Ld(`cls`, { metric: e }), (Yd = e));
    },
    { reportAllChanges: !0 },
  );
}
function zd() {
  return Ed(
    (e) => {
      (Ld(`lcp`, { metric: e }), (Xd = e));
    },
    { reportAllChanges: !0 },
  );
}
function Bd() {
  return Ad((e) => {
    (Ld(`ttfb`, { metric: e }), (Zd = e));
  });
}
function Vd() {
  return xd((e) => {
    (Ld(`inp`, { metric: e }), (Qd = e));
  });
}
function Hd(e, t, n, r, i = !1) {
  Wd(e, t);
  let a;
  return (
    Jd[e] || ((a = n()), (Jd[e] = !0)),
    r && t({ metric: r }),
    Gd(e, t, i ? a : void 0)
  );
}
function Ud(e) {
  let t = {};
  (e === `event` && (t.durationThreshold = 0),
    Wu(
      e,
      (t) => {
        Ld(e, { entries: t });
      },
      t,
    ));
}
function Wd(e, t) {
  ((qd[e] = qd[e] || []), qd[e].push(t));
}
function Gd(e, t, n) {
  return () => {
    n && n();
    let r = qd[e];
    if (!r) return;
    let i = r.indexOf(t);
    i !== -1 && r.splice(i, 1);
  };
}
function Kd(e) {
  return `duration` in e;
}
var qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d = e(() => {
    (W(), _u(), td(), Sd(), Dd(), Gu(), jd(), (qd = {}), (Jd = {}));
  });
function ef(e) {
  return typeof e == `number` && isFinite(e);
}
function tf(e, t, n, { ...r }) {
  let i = R(e).start_timestamp;
  return (
    i &&
      i > t &&
      typeof e.updateStartTime == `function` &&
      e.updateStartTime(t),
    ga(e, () => {
      let e = ha({ startTime: t, ...r });
      return (e && e.end(n), e);
    })
  );
}
function nf(e) {
  let t = P();
  if (!t) return;
  let { name: n, transaction: r, attributes: i, startTime: a } = e,
    { release: o, environment: s, sendDefaultPii: c } = t.getOptions(),
    l = t.getIntegrationByName(`Replay`)?.getReplayId(),
    u = M(),
    d = u.getUser(),
    f = d === void 0 ? void 0 : d.email || d.id || d.ip_address,
    p;
  try {
    p = u.getScopeData().contexts.profile.profile_id;
  } catch {}
  return ha({
    name: n,
    attributes: {
      release: o,
      environment: s,
      user: f || void 0,
      profile_id: p || void 0,
      replay_id: l || void 0,
      transaction: r,
      "user_agent.original": K.navigator?.userAgent,
      "client.address": c ? `{{auto}}` : void 0,
      ...i,
    },
    startTime: a,
    experimental: { standalone: !0 },
  });
}
function rf() {
  return K.addEventListener && K.performance;
}
function J(e) {
  return e / 1e3;
}
function af(e) {
  let t = `unknown`,
    n = `unknown`,
    r = ``;
  for (let i of e) {
    if (i === `/`) {
      [t, n] = e.split(`/`);
      break;
    }
    if (!isNaN(Number(i))) {
      ((t = r === `h` ? `http` : r), (n = e.split(r)[1]));
      break;
    }
    r += i;
  }
  return (r === e && (t = r), { name: t, version: n });
}
function of(e) {
  try {
    return PerformanceObserver.supportedEntryTypes.includes(e);
  } catch {
    return !1;
  }
}
function sf(e, t) {
  let n,
    r = !1;
  function i(e) {
    (!r && n && t(e, n), (r = !0));
  }
  hd(() => {
    i(`pagehide`);
  });
  let a = e.on(`beforeStartNavigationSpan`, (e, t) => {
      t?.isRedirect || (i(`navigation`), a(), o());
    }),
    o = e.on(`afterStartPageLoadSpan`, (e) => {
      ((n = e.spanContext().spanId), o());
    });
}
var cf = e(() => {
  (W(), q(), gd());
});
function lf(e) {
  let t = 0,
    n;
  if (!of(`layout-shift`)) return;
  let r = Md(({ metric: e }) => {
    let r = e.entries[e.entries.length - 1];
    r && ((t = e.value), (n = r));
  }, !0);
  sf(e, (e, i) => {
    (uf(t, n, i, e), r());
  });
}
function uf(e, t, n, r) {
  gu && S.log(`Sending CLS span (${e})`);
  let i = t ? J((j() || 0) + t.startTime) : A(),
    a = M().getScopeData().transactionName,
    o = t ? E(t.sources[0]?.node) : `Layout shift`,
    s = {
      [L]: `auto.http.browser.cls`,
      [qn]: `ui.webvital.cls`,
      [$n]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r,
    };
  t?.sources &&
    t.sources.forEach((e, t) => {
      s[`cls.source.${t + 1}`] = E(e.node);
    });
  let c = nf({ name: o, transaction: a, attributes: s, startTime: i });
  c && (c.addEvent(`cls`, { [Yn]: ``, [Xn]: e }), c.end(i));
}
var df = e(() => {
  (W(), _u(), $d(), cf());
});
function ff(e) {
  let t = 0,
    n;
  if (!of(`largest-contentful-paint`)) return;
  let r = Nd(({ metric: e }) => {
    let r = e.entries[e.entries.length - 1];
    r && ((t = e.value), (n = r));
  }, !0);
  sf(e, (e, i) => {
    (pf(t, n, i, e), r());
  });
}
function pf(e, t, n, r) {
  gu && S.log(`Sending LCP span (${e})`);
  let i = J((j() || 0) + (t?.startTime || 0)),
    a = M().getScopeData().transactionName,
    o = t ? E(t.element) : `Largest contentful paint`,
    s = {
      [L]: `auto.http.browser.lcp`,
      [qn]: `ui.webvital.lcp`,
      [$n]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r,
    };
  t &&
    (t.element && (s[`lcp.element`] = E(t.element)),
    t.id && (s[`lcp.id`] = t.id),
    t.url && (s[`lcp.url`] = t.url),
    t.loadTime != null && (s[`lcp.loadTime`] = t.loadTime),
    t.renderTime != null && (s[`lcp.renderTime`] = t.renderTime),
    t.size != null && (s[`lcp.size`] = t.size));
  let c = nf({ name: o, transaction: a, attributes: s, startTime: i });
  c && (c.addEvent(`lcp`, { [Yn]: `millisecond`, [Xn]: e }), c.end(i));
}
var mf = e(() => {
  (W(), _u(), $d(), cf());
});
function Y(e) {
  return e && ((j() || performance.timeOrigin) + e) / 1e3;
}
function hf(e) {
  let t = {};
  if (e.nextHopProtocol != null) {
    let { name: n, version: r } = af(e.nextHopProtocol);
    ((t[`network.protocol.version`] = r), (t[`network.protocol.name`] = n));
  }
  return j() || rf()?.timeOrigin
    ? gf({
        ...t,
        "http.request.redirect_start": Y(e.redirectStart),
        "http.request.redirect_end": Y(e.redirectEnd),
        "http.request.worker_start": Y(e.workerStart),
        "http.request.fetch_start": Y(e.fetchStart),
        "http.request.domain_lookup_start": Y(e.domainLookupStart),
        "http.request.domain_lookup_end": Y(e.domainLookupEnd),
        "http.request.connect_start": Y(e.connectStart),
        "http.request.secure_connection_start": Y(e.secureConnectionStart),
        "http.request.connection_end": Y(e.connectEnd),
        "http.request.request_start": Y(e.requestStart),
        "http.request.response_start": Y(e.responseStart),
        "http.request.response_end": Y(e.responseEnd),
        "http.request.time_to_first_byte":
          e.responseStart == null ? void 0 : e.responseStart / 1e3,
      })
    : t;
}
function gf(e) {
  return Object.fromEntries(Object.entries(e).filter(([, e]) => e != null));
}
var _f = e(() => {
  (W(), cf());
});
function vf({
  recordClsStandaloneSpans: e,
  recordLcpStandaloneSpans: t,
  client: n,
}) {
  let r = rf();
  if (r && j()) {
    r.mark && K.performance.mark(`sentry-tracing-init`);
    let i = t ? ff(n) : Cf(),
      a = wf(),
      o = e ? lf(n) : Sf();
    return () => {
      (i?.(), a(), o?.());
    };
  }
  return () => void 0;
}
function yf() {
  Id(`longtask`, ({ entries: e }) => {
    let t = B();
    if (!t) return;
    let { op: n, start_timestamp: r } = R(t);
    for (let i of e) {
      let e = J(j() + i.startTime),
        a = J(i.duration);
      (n === `navigation` && r && e < r) ||
        tf(t, e, e + a, {
          name: `Main UI thread blocked`,
          op: `ui.long-task`,
          attributes: { [L]: `auto.ui.browser.metrics` },
        });
    }
  });
}
function bf() {
  new PerformanceObserver((e) => {
    let t = B();
    if (t)
      for (let n of e.getEntries()) {
        if (!n.scripts[0]) continue;
        let e = J(j() + n.startTime),
          { start_timestamp: r, op: i } = R(t);
        if (i === `navigation` && r && e < r) continue;
        let a = J(n.duration),
          o = { [L]: `auto.ui.browser.metrics` },
          {
            invoker: s,
            invokerType: c,
            sourceURL: l,
            sourceFunctionName: u,
            sourceCharPosition: d,
          } = n.scripts[0];
        ((o[`browser.script.invoker`] = s),
          (o[`browser.script.invoker_type`] = c),
          l && (o[`code.filepath`] = l),
          u && (o[`code.function`] = u),
          d !== -1 && (o[`browser.script.source_char_position`] = d),
          tf(t, e, e + a, {
            name: `Main UI thread blocked`,
            op: `ui.long-animation-frame`,
            attributes: o,
          }));
      }
  }).observe({ type: `long-animation-frame`, buffered: !0 });
}
function xf() {
  Id(`event`, ({ entries: e }) => {
    let t = B();
    if (t) {
      for (let n of e)
        if (n.name === `click`) {
          let e = J(j() + n.startTime),
            r = J(n.duration),
            i = {
              name: E(n.target),
              op: `ui.interaction.${n.name}`,
              startTime: e,
              attributes: { [L]: `auto.ui.browser.metrics` },
            },
            a = Nt(n.target);
          (a && (i.attributes[`ui.component_name`] = a), tf(t, e, e + r, i));
        }
    }
  });
}
function Sf() {
  return Md(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    t && ((X.cls = { value: e.value, unit: `` }), (Bf = t));
  }, !0);
}
function Cf() {
  return Nd(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    t && ((X.lcp = { value: e.value, unit: `millisecond` }), (Z = t));
  }, !0);
}
function wf() {
  return Pd(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      (X.ttfb = { value: e.value, unit: `millisecond` });
  });
}
function Tf(e, t) {
  let n = rf(),
    r = j();
  if (!n?.getEntries || !r) return;
  let i = J(r),
    a = n.getEntries(),
    { op: o, start_timestamp: s } = R(e);
  (a.slice(zf).forEach((n) => {
    let r = J(n.startTime),
      a = J(Math.max(0, n.duration));
    if (!(o === `navigation` && s && i + r < s))
      switch (n.entryType) {
        case `navigation`:
          kf(e, n, i);
          break;
        case `mark`:
        case `paint`:
        case `measure`: {
          Df(e, n, r, a, i, t.ignorePerformanceApiSpans);
          let o = Nu(),
            s = n.startTime < o.firstHiddenTime;
          (n.name === `first-paint` &&
            s &&
            (X.fp = { value: n.startTime, unit: `millisecond` }),
            n.name === `first-contentful-paint` &&
              s &&
              (X.fcp = { value: n.startTime, unit: `millisecond` }));
          break;
        }
        case `resource`:
          Nf(e, n, n.name, r, a, i, t.ignoreResourceSpans);
          break;
      }
  }),
    (zf = Math.max(a.length - 1, 0)),
    Pf(e),
    o === `pageload` &&
      (Lf(X),
      t.recordClsOnPageloadSpan || delete X.cls,
      t.recordLcpOnPageloadSpan || delete X.lcp,
      Object.entries(X).forEach(([e, t]) => {
        $i(e, t.value, t.unit);
      }),
      e.setAttribute(`performance.timeOrigin`, i),
      e.setAttribute(`performance.activationStart`, Cu()),
      Ff(e, t)),
    (Z = void 0),
    (Bf = void 0),
    (X = {}));
}
function Ef(e) {
  if (e?.entryType === `measure`)
    try {
      return e.detail.devtools.track === `Components ⚛`;
    } catch {
      return;
    }
}
function Df(e, t, n, r, i, a) {
  if (Ef(t) || ([`mark`, `measure`].includes(t.entryType) && qt(t.name, a)))
    return;
  let o = xu(!1),
    s = J(o ? o.requestStart : 0),
    c = i + Math.max(n, s),
    l = i + n,
    u = l + r,
    d = { [L]: `auto.resource.browser.metrics` };
  (c !== l &&
    ((d[`sentry.browser.measure_happened_before_request`] = !0),
    (d[`sentry.browser.measure_start_time`] = c)),
    Of(d, t),
    c <= u && tf(e, c, u, { name: t.name, op: t.entryType, attributes: d }));
}
function Of(e, t) {
  try {
    let n = t.detail;
    if (!n) return;
    if (typeof n == `object`) {
      for (let [t, r] of Object.entries(n))
        if (r && bt(r)) e[`sentry.browser.measure.detail.${t}`] = r;
        else if (r !== void 0)
          try {
            e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r);
          } catch {}
      return;
    }
    if (bt(n)) {
      e[`sentry.browser.measure.detail`] = n;
      return;
    }
    try {
      e[`sentry.browser.measure.detail`] = JSON.stringify(n);
    } catch {}
  } catch {}
}
function kf(e, t, n) {
  ([
    `unloadEvent`,
    `redirect`,
    `domContentLoadedEvent`,
    `loadEvent`,
    `connect`,
  ].forEach((r) => {
    Af(e, t, r, n);
  }),
    Af(e, t, `secureConnection`, n, `TLS/SSL`),
    Af(e, t, `fetch`, n, `cache`),
    Af(e, t, `domainLookup`, n, `DNS`),
    Mf(e, t, n));
}
function Af(e, t, n, r, i = n) {
  let a = t[jf(n)],
    o = t[`${n}Start`];
  !o ||
    !a ||
    tf(e, r + J(o), r + J(a), {
      op: `browser.${i}`,
      name: t.name,
      attributes: {
        [L]: `auto.ui.browser.metrics`,
        ...(n === `redirect` && t.redirectCount != null
          ? { "http.redirect_count": t.redirectCount }
          : {}),
      },
    });
}
function jf(e) {
  return e === `secureConnection`
    ? `connectEnd`
    : e === `fetch`
      ? `domainLookupStart`
      : `${e}End`;
}
function Mf(e, t, n) {
  let r = n + J(t.requestStart),
    i = n + J(t.responseEnd),
    a = n + J(t.responseStart);
  t.responseEnd &&
    (tf(e, r, i, {
      op: `browser.request`,
      name: t.name,
      attributes: { [L]: `auto.ui.browser.metrics` },
    }),
    tf(e, a, i, {
      op: `browser.response`,
      name: t.name,
      attributes: { [L]: `auto.ui.browser.metrics` },
    }));
}
function Nf(e, t, n, r, i, a, o) {
  if (t.initiatorType === `xmlhttprequest` || t.initiatorType === `fetch`)
    return;
  let s = t.initiatorType ? `resource.${t.initiatorType}` : `resource.other`;
  if (o?.includes(s)) return;
  let c = { [L]: `auto.resource.browser.metrics` },
    l = Ks(n);
  (l.protocol && (c[`url.scheme`] = l.protocol.split(`:`).pop()),
    l.host && (c[`server.address`] = l.host),
    (c[`url.same_origin`] = n.includes(K.location.origin)),
    If(t, c, [
      [`responseStatus`, `http.response.status_code`],
      [`transferSize`, `http.response_transfer_size`],
      [`encodedBodySize`, `http.response_content_length`],
      [`decodedBodySize`, `http.decoded_response_content_length`],
      [`renderBlockingStatus`, `resource.render_blocking_status`],
      [`deliveryType`, `http.response_delivery_type`],
    ]));
  let u = { ...c, ...hf(t) },
    d = a + r;
  tf(e, d, d + i, {
    name: n.replace(K.location.origin, ``),
    op: s,
    attributes: u,
  });
}
function Pf(e) {
  let t = K.navigator;
  if (!t) return;
  let n = t.connection;
  (n &&
    (n.effectiveType &&
      e.setAttribute(`effectiveConnectionType`, n.effectiveType),
    n.type && e.setAttribute(`connectionType`, n.type),
    ef(n.rtt) && (X[`connection.rtt`] = { value: n.rtt, unit: `millisecond` })),
    ef(t.deviceMemory) &&
      e.setAttribute(`deviceMemory`, `${t.deviceMemory} GB`),
    ef(t.hardwareConcurrency) &&
      e.setAttribute(`hardwareConcurrency`, String(t.hardwareConcurrency)));
}
function Ff(e, t) {
  (Z &&
    t.recordLcpOnPageloadSpan &&
    (Z.element && e.setAttribute(`lcp.element`, E(Z.element)),
    Z.id && e.setAttribute(`lcp.id`, Z.id),
    Z.url && e.setAttribute(`lcp.url`, Z.url.trim().slice(0, 200)),
    Z.loadTime != null && e.setAttribute(`lcp.loadTime`, Z.loadTime),
    Z.renderTime != null && e.setAttribute(`lcp.renderTime`, Z.renderTime),
    e.setAttribute(`lcp.size`, Z.size)),
    Bf?.sources &&
      t.recordClsOnPageloadSpan &&
      Bf.sources.forEach((t, n) =>
        e.setAttribute(`cls.source.${n + 1}`, E(t.node)),
      ));
}
function If(e, t, n) {
  n.forEach(([n, r]) => {
    let i = e[n];
    i != null &&
      ((typeof i == `number` && i < Rf) || typeof i == `string`) &&
      (t[r] = i);
  });
}
function Lf(e) {
  let t = xu(!1);
  if (!t) return;
  let { responseStart: n, requestStart: r } = t;
  r <= n && (e[`ttfb.requestTime`] = { value: n - r, unit: `millisecond` });
}
var Rf,
  zf,
  X,
  Z,
  Bf,
  Vf = e(() => {
    (W(),
      q(),
      df(),
      $d(),
      mf(),
      _f(),
      cf(),
      wu(),
      Su(),
      Pu(),
      (Rf = 2147483647),
      (zf = 0),
      (X = {}));
  });
function Hf() {
  return rf() && j() ? Id(`element`, Uf) : () => void 0;
}
var Uf,
  Wf = e(() => {
    (W(),
      $d(),
      cf(),
      (Uf = ({ entries: e }) => {
        let t = B(),
          n = t ? z(t) : void 0,
          r = n ? R(n).description : M().getScopeData().transactionName;
        e.forEach((e) => {
          let t = e;
          if (!t.identifier) return;
          let n = t.name,
            i = t.renderTime,
            a = t.loadTime,
            [o, s] = a
              ? [J(a), `load-time`]
              : i
                ? [J(i), `render-time`]
                : [A(), `entry-emission`],
            c = n === `image-paint` ? J(Math.max(0, (i ?? 0) - (a ?? 0))) : 0,
            l = {
              [L]: `auto.ui.browser.elementtiming`,
              [qn]: `ui.elementtiming`,
              [I]: `component`,
              "sentry.span_start_time_source": s,
              "sentry.transaction_name": r,
              "element.id": t.id,
              "element.type": t.element?.tagName?.toLowerCase() || `unknown`,
              "element.size":
                t.naturalWidth && t.naturalHeight
                  ? `${t.naturalWidth}x${t.naturalHeight}`
                  : void 0,
              "element.render_time": i,
              "element.load_time": a,
              "element.url": t.url || void 0,
              "element.identifier": t.identifier,
              "element.paint_type": n,
            };
          ma(
            {
              name: `element[${t.identifier}]`,
              attributes: l,
              startTime: o,
              onlyIfParent: !0,
            },
            (e) => {
              e.end(o + c);
            },
          );
        });
      }));
  });
function Gf(e) {
  (et(`dom`, e), tt(`dom`, Kf));
}
function Kf() {
  if (!K.document) return;
  let e = w.bind(null, `dom`),
    t = Yf(e, !0);
  (K.document.addEventListener(`click`, t, !1),
    K.document.addEventListener(`keypress`, t, !1),
    [`EventTarget`, `Node`].forEach((t) => {
      let n = K[t]?.prototype;
      n?.hasOwnProperty?.(`addEventListener`) &&
        (D(n, `addEventListener`, function (t) {
          return function (n, r, i) {
            if (n === `click` || n == `keypress`)
              try {
                let r = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  a = (r[n] = r[n] || { refCount: 0 });
                if (!a.handler) {
                  let r = Yf(e);
                  ((a.handler = r), t.call(this, n, r, i));
                }
                a.refCount++;
              } catch {}
            return t.call(this, n, r, i);
          };
        }),
        D(n, `removeEventListener`, function (e) {
          return function (t, n, r) {
            if (t === `click` || t == `keypress`)
              try {
                let n = this.__sentry_instrumentation_handlers__ || {},
                  i = n[t];
                i &&
                  (i.refCount--,
                  i.refCount <= 0 &&
                    (e.call(this, t, i.handler, r),
                    (i.handler = void 0),
                    delete n[t]),
                  Object.keys(n).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return e.call(this, t, n, r);
          };
        }));
    }));
}
function qf(e) {
  if (e.type !== $f) return !1;
  try {
    if (!e.target || e.target._sentryId !== ep) return !1;
  } catch {}
  return !0;
}
function Jf(e, t) {
  return e === `keypress`
    ? t?.tagName
      ? !(
          t.tagName === `INPUT` ||
          t.tagName === `TEXTAREA` ||
          t.isContentEditable
        )
      : !0
    : !1;
}
function Yf(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    let r = Xf(n);
    if (Jf(n.type, r)) return;
    (O(n, `_sentryCaptured`, !0), r && !r._sentryId && O(r, `_sentryId`, k()));
    let i = n.type === `keypress` ? `input` : n.type;
    (qf(n) ||
      (e({ event: n, name: i, global: t }),
      ($f = n.type),
      (ep = r ? r._sentryId : void 0)),
      clearTimeout(Qf),
      (Qf = K.setTimeout(() => {
        ((ep = void 0), ($f = void 0));
      }, Zf)));
  };
}
function Xf(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
var Zf,
  Qf,
  $f,
  ep,
  tp = e(() => {
    (W(), q(), (Zf = 1e3));
  });
function np(e) {
  let t = `history`;
  (et(t, e), tt(t, rp));
}
function rp() {
  if (
    (K.addEventListener(`popstate`, () => {
      let e = K.location.href,
        t = ap;
      ((ap = e), t !== e && w(`history`, { from: t, to: e }));
    }),
    !il())
  )
    return;
  function e(e) {
    return function (...t) {
      let n = t.length > 2 ? t[2] : void 0;
      if (n) {
        let r = ap,
          i = ip(String(n));
        if (((ap = i), r === i)) return e.apply(this, t);
        w(`history`, { from: r, to: i });
      }
      return e.apply(this, t);
    };
  }
  (D(K.history, `pushState`, e), D(K.history, `replaceState`, e));
}
function ip(e) {
  try {
    return new URL(e, K.location.origin).toString();
  } catch {
    return e;
  }
}
var ap,
  op = e(() => {
    (W(), q());
  });
function sp(e) {
  let t = lp[e];
  if (t) return t;
  let n = K[e];
  if (ol(n)) return (lp[e] = n.bind(K));
  let r = K.document;
  if (r && typeof r.createElement == `function`)
    try {
      let t = r.createElement(`iframe`);
      ((t.hidden = !0), r.head.appendChild(t));
      let i = t.contentWindow;
      (i?.[e] && (n = i[e]), r.head.removeChild(t));
    } catch (t) {
      gu &&
        S.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          t,
        );
    }
  return n && (lp[e] = n.bind(K));
}
function cp(e) {
  lp[e] = void 0;
}
var lp,
  up = e(() => {
    (W(), _u(), q(), (lp = {}));
  });
function dp(e) {
  (et(`xhr`, e), tt(`xhr`, fp));
}
function fp() {
  if (!K.XMLHttpRequest) return;
  let e = XMLHttpRequest.prototype;
  ((e.open = new Proxy(e.open, {
    apply(e, t, n) {
      let r = Error(),
        i = A() * 1e3,
        a = vt(n[0]) ? n[0].toUpperCase() : void 0,
        o = pp(n[1]);
      if (!a || !o) return e.apply(t, n);
      ((t[mp] = { method: a, url: o, request_headers: {} }),
        a === `POST` &&
          o.match(/sentry_key/) &&
          (t.__sentry_own_request__ = !0));
      let s = () => {
        let e = t[mp];
        if (e && t.readyState === 4) {
          try {
            e.status_code = t.status;
          } catch {}
          w(`xhr`, {
            endTimestamp: A() * 1e3,
            startTimestamp: i,
            xhr: t,
            virtualError: r,
          });
        }
      };
      return (
        `onreadystatechange` in t && typeof t.onreadystatechange == `function`
          ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
              apply(e, t, n) {
                return (s(), e.apply(t, n));
              },
            }))
          : t.addEventListener(`readystatechange`, s),
        (t.setRequestHeader = new Proxy(t.setRequestHeader, {
          apply(e, t, n) {
            let [r, i] = n,
              a = t[mp];
            return (
              a && vt(r) && vt(i) && (a.request_headers[r.toLowerCase()] = i),
              e.apply(t, n)
            );
          },
        })),
        e.apply(t, n)
      );
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(e, t, n) {
        let r = t[mp];
        return r
          ? (n[0] !== void 0 && (r.body = n[0]),
            w(`xhr`, { startTimestamp: A() * 1e3, xhr: t }),
            e.apply(t, n))
          : e.apply(t, n);
      },
    })));
}
function pp(e) {
  if (vt(e)) return e;
  try {
    return e.toString();
  } catch {}
}
var mp,
  hp = e(() => {
    (W(), q(), (mp = `__sentry_xhr_v3__`));
  });
function gp(e) {
  let t;
  try {
    t = e.getAllResponseHeaders();
  } catch (t) {
    return (gu && S.error(t, `Failed to get xhr response headers`, e), {});
  }
  return t
    ? t
        .split(
          `\r
`,
        )
        .reduce((e, t) => {
          let [n, r] = t.split(`: `);
          return (r && (e[n.toLowerCase()] = r), e);
        }, {})
    : {};
}
var _p = e(() => {
  (W(), _u());
});
function vp() {
  if (rf() && j()) {
    let e = yp();
    return () => {
      e();
    };
  }
  return () => void 0;
}
function yp() {
  return Fd(Ep);
}
function bp() {
  let e = Object.keys(Tp);
  Tl() &&
    e.forEach((e) => {
      K.addEventListener(e, t, { capture: !0, passive: !0 });
    });
  function t(e) {
    let t = e.target;
    if (!t) return;
    let n = E(t),
      r = Math.round(e.timeStamp);
    if ((Cp.set(r, n), Cp.size > 50)) {
      let e = Cp.keys().next().value;
      e !== void 0 && Cp.delete(e);
    }
  }
  function n(e) {
    let t = Math.round(e.startTime),
      n = Cp.get(t);
    if (!n)
      for (let e = -5; e <= 5; e++) {
        let r = Cp.get(t + e);
        if (r) {
          n = r;
          break;
        }
      }
    return n || `<unknown>`;
  }
  let r = ({ entries: e }) => {
    let t = B(),
      r = t && z(t);
    e.forEach((e) => {
      if (!Kd(e)) return;
      let t = e.interactionId;
      if (t == null || Sp.has(t)) return;
      let i = e.target ? E(e.target) : n(e);
      if (xp.length > 10) {
        let e = xp.shift();
        Sp.delete(e);
      }
      (xp.push(t), Sp.set(t, { span: r, elementName: i }));
    });
  };
  (Id(`event`, r), Id(`first-input`, r));
}
var xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp = e(() => {
    (W(),
      q(),
      $d(),
      cf(),
      (xp = []),
      (Sp = new Map()),
      (Cp = new Map()),
      (wp = 60),
      (Tp = {
        click: `click`,
        pointerdown: `click`,
        pointerup: `click`,
        mousedown: `click`,
        mouseup: `click`,
        touchstart: `click`,
        touchend: `click`,
        mouseover: `hover`,
        mouseout: `hover`,
        mouseenter: `hover`,
        mouseleave: `hover`,
        pointerover: `hover`,
        pointerout: `hover`,
        pointerenter: `hover`,
        pointerleave: `hover`,
        dragstart: `drag`,
        dragend: `drag`,
        drag: `drag`,
        dragenter: `drag`,
        dragleave: `drag`,
        dragover: `drag`,
        drop: `drag`,
        keydown: `press`,
        keyup: `press`,
        keypress: `press`,
        input: `press`,
      }),
      (Ep = ({ metric: e }) => {
        if (e.value == null) return;
        let t = J(e.value);
        if (t > wp) return;
        let n = e.entries.find((t) => t.duration === e.value && Tp[t.name]);
        if (!n) return;
        let { interactionId: r } = n,
          i = Tp[n.name],
          a = J(j() + n.startTime),
          o = B(),
          s = o ? z(o) : void 0,
          c = r == null ? void 0 : Sp.get(r),
          l = c?.span || s,
          u = l ? R(l).description : M().getScopeData().transactionName,
          d = nf({
            name: c?.elementName || E(n.target),
            transaction: u,
            attributes: {
              [L]: `auto.http.browser.inp`,
              [qn]: `ui.interaction.${i}`,
              [$n]: n.duration,
            },
            startTime: a,
          });
        d &&
          (d.addEvent(`inp`, { [Yn]: `millisecond`, [Xn]: e.value }),
          d.end(a + t));
      }));
  }),
  Op = e(() => {
    ($d(), Vf(), Wf(), tp(), op(), up(), hp(), _p(), _f(), Dp());
  });
function kp(e, t = sp(`fetch`)) {
  let n = 0,
    r = 0;
  async function i(i) {
    let a = i.body.length;
    ((n += a), r++);
    let o = {
      body: i.body,
      method: `POST`,
      referrerPolicy: `strict-origin`,
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    };
    try {
      let n = await t(e.url, o);
      return {
        statusCode: n.status,
        headers: {
          "x-sentry-rate-limits": n.headers.get(`X-Sentry-Rate-Limits`),
          "retry-after": n.headers.get(`Retry-After`),
        },
      };
    } catch (e) {
      throw (cp(`fetch`), e);
    } finally {
      ((n -= a), r--);
    }
  }
  return us(e, i, ts(e.bufferSize || Ap));
}
var Ap,
  jp = e(() => {
    (W(), Op(), (Ap = 40));
  }),
  Q,
  Mp = e(() => {
    Q = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
  });
function Np(e, t, n, r) {
  let i = { filename: e, function: t === `<anonymous>` ? `?` : t, in_app: !0 };
  return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
}
var Pp,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp = e(() => {
    (W(),
      (Pp = 30),
      (Fp = 50),
      (Ip = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i),
      (Lp =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i),
      (Rp = /\((\S*)(?::(\d+))(?::(\d+))\)/),
      (zp = /at (.+?) ?\(data:(.+?),/),
      (Bp = (e) => {
        let t = e.match(zp);
        if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
        let n = Ip.exec(e);
        if (n) {
          let [, e, t, r] = n;
          return Np(e, `?`, +t, +r);
        }
        let r = Lp.exec(e);
        if (r) {
          if (r[2] && r[2].indexOf(`eval`) === 0) {
            let e = Rp.exec(r[2]);
            e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
          }
          let [e, t] = Jp(r[1] || `?`, r[2]);
          return Np(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
        }
      }),
      (Vp = [Pp, Bp]),
      (Hp =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i),
      (Up = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i),
      (Wp = (e) => {
        let t = Hp.exec(e);
        if (t) {
          if (t[3] && t[3].indexOf(` > eval`) > -1) {
            let e = Up.exec(t[3]);
            e &&
              ((t[1] = t[1] || `eval`),
              (t[3] = e[1]),
              (t[4] = e[2]),
              (t[5] = ``));
          }
          let e = t[3],
            n = t[1] || `?`;
          return (
            ([n, e] = Jp(n, e)),
            Np(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
          );
        }
      }),
      (Gp = [Fp, Wp]),
      (Kp = [Vp, Gp]),
      (qp = He(...Kp)),
      (Jp = (e, t) => {
        let n = e.indexOf(`safari-extension`) !== -1,
          r = e.indexOf(`safari-web-extension`) !== -1;
        return n || r
          ? [
              e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0],
              n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
            ]
          : [e, t];
      }));
  });
function Xp(e) {
  return function (t) {
    P() === e &&
      ic(
        {
          category: `sentry.${t.type === `transaction` ? `transaction` : `event`}`,
          event_id: t.event_id,
          level: t.level,
          message: Qt(t),
        },
        { event: t },
      );
  };
}
function Zp(e, t) {
  return function (n) {
    if (P() !== e) return;
    let r,
      i,
      a = typeof t == `object` ? t.serializeAttribute : void 0,
      o =
        typeof t == `object` && typeof t.maxStringLength == `number`
          ? t.maxStringLength
          : void 0;
    (o &&
      o > rm &&
      (Q &&
        S.warn(
          `\`dom.maxStringLength\` cannot exceed ${rm}, but a value of ${o} was configured. Sentry will use ${rm} instead.`,
        ),
      (o = rm)),
      typeof a == `string` && (a = [a]));
    try {
      let e = n.event,
        t = nm(e) ? e.target : e;
      ((r = E(t, { keyAttrs: a, maxStringLength: o })), (i = Nt(t)));
    } catch {
      r = `<unknown>`;
    }
    if (r.length === 0) return;
    let s = { category: `ui.${n.name}`, message: r };
    (i && (s.data = { "ui.component_name": i }),
      ic(s, { event: n.event, name: n.name, global: n.global }));
  };
}
function Qp(e) {
  return function (t) {
    if (P() !== e) return;
    let n = {
      category: `console`,
      data: { arguments: t.args, logger: `console` },
      level: Fc(t.level),
      message: Gt(t.args, ` `),
    };
    if (t.level === `assert`)
      if (t.args[0] === !1)
        ((n.message = `Assertion failed: ${Gt(t.args.slice(1), ` `) || `console.assert`}`),
          (n.data.arguments = t.args.slice(1)));
      else return;
    ic(n, { input: t.args, level: t.level });
  };
}
function $p(e) {
  return function (t) {
    if (P() !== e) return;
    let { startTimestamp: n, endTimestamp: r } = t,
      i = t.xhr[mp];
    if (!n || !r || !i) return;
    let { method: a, url: o, status_code: s, body: c } = i,
      l = { method: a, url: o, status_code: s },
      u = { xhr: t.xhr, input: c, startTimestamp: n, endTimestamp: r },
      d = { category: `xhr`, data: l, type: `http`, level: nl(s) };
    (e.emit(`beforeOutgoingRequestBreadcrumb`, d, u), ic(d, u));
  };
}
function em(e) {
  return function (t) {
    if (P() !== e) return;
    let { startTimestamp: n, endTimestamp: r } = t;
    if (
      r &&
      !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === `POST`)
    )
      if ((t.fetchData.method, t.fetchData.url, t.error)) {
        let i = t.fetchData,
          a = {
            data: t.error,
            input: t.args,
            startTimestamp: n,
            endTimestamp: r,
          },
          o = { category: `fetch`, data: i, level: `error`, type: `http` };
        (e.emit(`beforeOutgoingRequestBreadcrumb`, o, a), ic(o, a));
      } else {
        let i = t.response,
          a = { ...t.fetchData, status_code: i?.status };
        (t.fetchData.request_body_size,
          t.fetchData.response_body_size,
          i?.status);
        let o = {
            input: t.args,
            response: i,
            startTimestamp: n,
            endTimestamp: r,
          },
          s = {
            category: `fetch`,
            data: a,
            type: `http`,
            level: nl(a.status_code),
          };
        (e.emit(`beforeOutgoingRequestBreadcrumb`, s, o), ic(s, o));
      }
  };
}
function tm(e) {
  return function (t) {
    if (P() !== e) return;
    let n = t.from,
      r = t.to,
      i = Ks(G.location.href),
      a = n ? Ks(n) : void 0,
      o = Ks(r);
    (a?.path || (a = i),
      i.protocol === o.protocol && i.host === o.host && (r = o.relative),
      i.protocol === a.protocol && i.host === a.host && (n = a.relative),
      ic({ category: `navigation`, data: { from: n, to: r } }));
  };
}
function nm(e) {
  return !!e && !!e.target;
}
var rm,
  im,
  am,
  om,
  sm = e(() => {
    (W(),
      Op(),
      Mp(),
      Jl(),
      (rm = 1024),
      (im = `Breadcrumbs`),
      (am = (e = {}) => {
        let t = {
          console: !0,
          dom: !0,
          fetch: !0,
          history: !0,
          sentry: !0,
          xhr: !0,
          ...e,
        };
        return {
          name: im,
          setup(e) {
            (t.console && Mc(Qp(e)),
              t.dom && Gf(Zp(e, t.dom)),
              t.xhr && dp($p(e)),
              t.fetch && ul(em(e)),
              t.history && np(tm(e)),
              t.sentry && e.on(`beforeSendEvent`, Xp(e)));
          },
        };
      }),
      (om = U(am)));
  });
function cm(e) {
  return function (...t) {
    let n = t[0];
    return (
      (t[0] = Gl(n, {
        mechanism: {
          handled: !1,
          type: `auto.browser.browserapierrors.${Ke(e)}`,
        },
      })),
      e.apply(this, t)
    );
  };
}
function lm(e) {
  return function (t) {
    return e.apply(this, [
      Gl(t, {
        mechanism: {
          data: { handler: Ke(e) },
          handled: !1,
          type: `auto.browser.browserapierrors.requestAnimationFrame`,
        },
      }),
    ]);
  };
}
function um(e) {
  return function (...t) {
    let n = this;
    return (
      [`onload`, `onerror`, `onprogress`, `onreadystatechange`].forEach((e) => {
        e in n &&
          typeof n[e] == `function` &&
          D(n, e, function (t) {
            let n = {
                mechanism: {
                  data: { handler: Ke(t) },
                  handled: !1,
                  type: `auto.browser.browserapierrors.xhr.${e}`,
                },
              },
              r = Rt(t);
            return (r && (n.mechanism.data.handler = Ke(r)), Gl(t, n));
          });
      }),
      e.apply(this, t)
    );
  };
}
function dm(e, t) {
  let n = G[e]?.prototype;
  n?.hasOwnProperty?.(`addEventListener`) &&
    (D(n, `addEventListener`, function (n) {
      return function (r, i, a) {
        try {
          fm(i) &&
            (i.handleEvent = Gl(i.handleEvent, {
              mechanism: {
                data: { handler: Ke(i), target: e },
                handled: !1,
                type: `auto.browser.browserapierrors.handleEvent`,
              },
            }));
        } catch {}
        return (
          t.unregisterOriginalCallbacks && pm(this, r, i),
          n.apply(this, [
            r,
            Gl(i, {
              mechanism: {
                data: { handler: Ke(i), target: e },
                handled: !1,
                type: `auto.browser.browserapierrors.addEventListener`,
              },
            }),
            a,
          ])
        );
      };
    }),
    D(n, `removeEventListener`, function (e) {
      return function (t, n, r) {
        try {
          let i = n.__sentry_wrapped__;
          i && e.call(this, t, i, r);
        } catch {}
        return e.call(this, t, n, r);
      };
    }));
}
function fm(e) {
  return typeof e.handleEvent == `function`;
}
function pm(e, t, n) {
  e &&
    typeof e == `object` &&
    `removeEventListener` in e &&
    typeof e.removeEventListener == `function` &&
    e.removeEventListener(t, n);
}
var mm,
  hm,
  gm,
  _m,
  vm = e(() => {
    (W(),
      Jl(),
      (mm =
        `EventTarget.Window.Node.ApplicationCache.AudioTrackList.BroadcastChannel.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.SharedWorker.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload`.split(
          `.`,
        )),
      (hm = `BrowserApiErrors`),
      (gm = (e = {}) => {
        let t = {
          XMLHttpRequest: !0,
          eventTarget: !0,
          requestAnimationFrame: !0,
          setInterval: !0,
          setTimeout: !0,
          unregisterOriginalCallbacks: !1,
          ...e,
        };
        return {
          name: hm,
          setupOnce() {
            (t.setTimeout && D(G, `setTimeout`, cm),
              t.setInterval && D(G, `setInterval`, cm),
              t.requestAnimationFrame && D(G, `requestAnimationFrame`, lm),
              t.XMLHttpRequest &&
                `XMLHttpRequest` in G &&
                D(XMLHttpRequest.prototype, `send`, um));
            let e = t.eventTarget;
            e && (Array.isArray(e) ? e : mm).forEach((e) => dm(e, t));
          },
        };
      }),
      (_m = U(gm)));
  }),
  ym,
  bm = e(() => {
    (W(),
      Op(),
      Mp(),
      Jl(),
      (ym = U(() => ({
        name: `BrowserSession`,
        setupOnce() {
          if (G.document === void 0) {
            Q &&
              S.warn(
                "Using the `browserSessionIntegration` in non-browser environments is not supported.",
              );
            return;
          }
          (Co({ ignoreDuration: !0 }),
            Eo(),
            np(({ from: e, to: t }) => {
              e !== void 0 && e !== t && (Co({ ignoreDuration: !0 }), Eo());
            }));
        },
      }))));
  });
function xm(e) {
  at((t) => {
    let { stackParser: n, attachStacktrace: r } = Dm();
    if (P() !== e || Ul()) return;
    let { msg: i, url: a, line: o, column: s, error: c } = t,
      l = Tm(ou(n, c || i, void 0, r, !1), a, o, s);
    ((l.level = `error`),
      yo(l, {
        originalException: c,
        mechanism: {
          handled: !1,
          type: `auto.browser.global_handlers.onerror`,
        },
      }));
  });
}
function Sm(e) {
  lt((t) => {
    let { stackParser: n, attachStacktrace: r } = Dm();
    if (P() !== e || Ul()) return;
    let i = Cm(t),
      a = bt(i) ? wm(i) : ou(n, i, void 0, r, !0);
    ((a.level = `error`),
      yo(a, {
        originalException: i,
        mechanism: {
          handled: !1,
          type: `auto.browser.global_handlers.onunhandledrejection`,
        },
      }));
  });
}
function Cm(e) {
  if (bt(e)) return e;
  try {
    if (`reason` in e) return e.reason;
    if (`detail` in e && `reason` in e.detail) return e.detail.reason;
  } catch {}
  return e;
}
function wm(e) {
  return {
    exception: {
      values: [
        {
          type: `UnhandledRejection`,
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function Tm(e, t, n, r) {
  let i = (e.exception = e.exception || {}),
    a = (i.values = i.values || []),
    o = (a[0] = a[0] || {}),
    s = (o.stacktrace = o.stacktrace || {}),
    c = (s.frames = s.frames || []),
    l = r,
    u = n,
    d = Om(t) ?? Mt();
  return (
    c.length === 0 &&
      c.push({ colno: l, filename: d, function: `?`, in_app: !0, lineno: u }),
    e
  );
}
function Em(e) {
  Q && S.log(`Global Handler attached: ${e}`);
}
function Dm() {
  return P()?.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
function Om(e) {
  if (!(!vt(e) || e.length === 0)) {
    if (e.startsWith(`data:`)) {
      let t = e.match(/^data:([^;]+)/);
      return `<data:${t ? t[1] : `text/javascript`}${e.includes(`base64,`) ? `,base64` : ``}>`;
    }
    return e;
  }
}
var km,
  Am,
  jm,
  Mm = e(() => {
    (W(),
      Mp(),
      fu(),
      Jl(),
      (km = `GlobalHandlers`),
      (Am = (e = {}) => {
        let t = { onerror: !0, onunhandledrejection: !0, ...e };
        return {
          name: km,
          setupOnce() {
            Error.stackTraceLimit = 50;
          },
          setup(e) {
            (t.onerror && (xm(e), Em(`onerror`)),
              t.onunhandledrejection && (Sm(e), Em(`onunhandledrejection`)));
          },
        };
      }),
      (jm = U(Am)));
  }),
  Nm,
  Pm = e(() => {
    (W(),
      Jl(),
      (Nm = U(() => ({
        name: `HttpContext`,
        preprocessEvent(e) {
          if (!G.navigator && !G.location && !G.document) return;
          let t = Kl(),
            n = { ...t.headers, ...e.request?.headers };
          e.request = { ...t, ...e.request, headers: n };
        },
      }))));
  }),
  Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm = e(() => {
    (W(),
      fu(),
      (Fm = `cause`),
      (Im = 5),
      (Lm = `LinkedErrors`),
      (Rm = (e = {}) => {
        let t = e.limit || Im,
          n = e.key || Fm;
        return {
          name: Lm,
          preprocessEvent(e, r, i) {
            Dc(Yl, i.getOptions().stackParser, n, t, e, r);
          },
        };
      }),
      (zm = U(Rm)));
  });
function Vm() {
  return Hm()
    ? (Q &&
        Ae(() => {
          console.error(
            `[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/`,
          );
        }),
      !0)
    : !1;
}
function Hm() {
  if (G.window === void 0) return !1;
  let e = G;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) return !1;
  let t = Mt();
  return !(
    G === G.top &&
    [
      `chrome-extension`,
      `moz-extension`,
      `ms-browser-extension`,
      `safari-web-extension`,
    ].some((e) => t.startsWith(`${e}://`))
  );
}
var Um = e(() => {
  (W(), Mp(), Jl());
});
function Wm(e) {
  return [Tc(), dc(), _m(), om(), jm(), zm(), Gc(), Nm(), ym()];
}
function Gm(e = {}) {
  let t = !e.skipBrowserExtensionCheck && Vm(),
    n = e.defaultIntegrations == null ? Wm() : e.defaultIntegrations;
  return Bs(mu, {
    ...e,
    enabled: t ? !1 : e.enabled,
    stackParser: Ue(e.stackParser || qp),
    integrations: Fo({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || kp,
  });
}
var Km = e(() => {
  (W(), hu(), sm(), vm(), bm(), Mm(), Pm(), Bm(), Yp(), jp(), Um());
});
function qm(e) {
  return e.split(`,`).some((e) => e.trim().startsWith(`sentry-`));
}
function Jm(e) {
  try {
    return new URL(e, G.location.origin).href;
  } catch {
    return;
  }
}
function Ym(e) {
  return (
    e.entryType === `resource` &&
    `initiatorType` in e &&
    typeof e.nextHopProtocol == `string` &&
    (e.initiatorType === `fetch` || e.initiatorType === `xmlhttprequest`)
  );
}
function Xm(e) {
  try {
    return new Headers(e);
  } catch {
    return;
  }
}
var Zm = e(() => {
  Jl();
});
function Qm(e, t) {
  let {
      traceFetch: n,
      traceXHR: r,
      trackFetchStreamPerformance: i,
      shouldCreateSpanForRequest: a,
      enableHTTPTimings: o,
      tracePropagationTargets: s,
      onRequestSpanStart: c,
      onRequestSpanEnd: l,
    } = { ...oh, ...t },
    u = typeof a == `function` ? a : (e) => !0,
    d = (e) => eh(e, s),
    f = {},
    p = e.getOptions().propagateTraceparent;
  (n &&
    (e.addEventProcessor(
      (e) => (
        e.type === `transaction` &&
          e.spans &&
          e.spans.forEach((e) => {
            if (e.op === `http.client`) {
              let t = ah.get(e.span_id);
              t && ((e.timestamp = t / 1e3), ah.delete(e.span_id));
            }
          }),
        e
      ),
    ),
    i &&
      dl((e) => {
        if (e.response) {
          let t = ih.get(e.response);
          t && e.endTimestamp && ah.set(t, e.endTimestamp);
        }
      }),
    ul((e) => {
      let t = qc(e, u, d, f, { propagateTraceparent: p, onRequestSpanEnd: l });
      if (
        (e.response &&
          e.fetchData.__span &&
          ih.set(e.response, e.fetchData.__span),
        t)
      ) {
        let n = Jm(e.fetchData.url),
          r = n ? Ks(n).host : void 0;
        (t.setAttributes({ "http.url": n, "server.address": r }),
          o && $m(t),
          c?.(t, { headers: e.headers }));
      }
    })),
    r &&
      dp((e) => {
        let t = th(e, u, d, f, p, l);
        t &&
          (o && $m(t),
          c?.(t, { headers: Xm(e.xhr.__sentry_xhr_v3__?.request_headers) }));
      }));
}
function $m(e) {
  let { url: t } = R(e).data;
  if (!t || typeof t != `string`) return;
  let n = Id(`resource`, ({ entries: r }) => {
    r.forEach((r) => {
      Ym(r) && r.name.endsWith(t) && (e.setAttributes(hf(r)), setTimeout(n));
    });
  });
}
function eh(e, t) {
  let n = Mt();
  if (n) {
    let r, i;
    try {
      ((r = new URL(e, n)), (i = new URL(n).origin));
    } catch {
      return !1;
    }
    let a = r.origin === i;
    return t ? qt(r.toString(), t) || (a && qt(r.pathname, t)) : a;
  } else {
    let n = !!e.match(/^\/(?!\/)/);
    return t ? qt(e, t) : n;
  }
}
function th(e, t, n, r, i, a) {
  let o = e.xhr,
    s = o?.[mp];
  if (!o || o.__sentry_own_request__ || !s) return;
  let { url: c, method: l } = s,
    u = H() && t(c);
  if (e.endTimestamp && u) {
    let t = o.__sentry_xhr_span_id__;
    if (!t) return;
    let n = r[t];
    n &&
      s.status_code !== void 0 &&
      (rr(n, s.status_code),
      n.end(),
      a?.(n, { headers: Xm(gp(o)), error: e.error }),
      delete r[t]);
    return;
  }
  let d = Jm(c),
    f = Ks(d || c),
    p = qs(c),
    m = !!B(),
    h =
      u && m
        ? ha({
            name: `${l} ${p}`,
            attributes: {
              url: c,
              type: `xhr`,
              "http.method": l,
              "http.url": d,
              "server.address": f?.host,
              [L]: `auto.http.browser`,
              [qn]: `http.client`,
              ...(f?.search && { "http.query": f?.search }),
              ...(f?.hash && { "http.fragment": f?.hash }),
            },
          })
        : new xi();
  ((o.__sentry_xhr_span_id__ = h.spanContext().spanId),
    (r[o.__sentry_xhr_span_id__] = h),
    n(c) && nh(o, H() && m ? h : void 0, i));
  let g = P();
  return (g && g.emit(`beforeOutgoingRequestSpan`, h, e), h);
}
function nh(e, t, n) {
  let {
    "sentry-trace": r,
    baggage: i,
    traceparent: a,
  } = ec({ span: t, propagateTraceparent: n });
  r && rh(e, r, i, a);
}
function rh(e, t, n, r) {
  let i = e.__sentry_xhr_v3__?.request_headers;
  if (!(i?.[`sentry-trace`] || !e.setRequestHeader))
    try {
      if (
        (e.setRequestHeader(`sentry-trace`, t),
        r && !i?.traceparent && e.setRequestHeader(`traceparent`, r),
        n)
      ) {
        let t = i?.baggage;
        (!t || !qm(t)) && e.setRequestHeader(`baggage`, n);
      }
    } catch {}
}
var ih,
  ah,
  oh,
  sh = e(() => {
    (W(),
      Op(),
      Zm(),
      (ih = new WeakMap()),
      (ah = new Map()),
      (oh = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        trackFetchStreamPerformance: !1,
      }));
  });
function ch() {
  G.document
    ? G.document.addEventListener(`visibilitychange`, () => {
        let e = B();
        if (!e) return;
        let t = z(e);
        if (G.document.hidden && t) {
          let e = `cancelled`,
            { op: n, status: r } = R(t);
          (Q &&
            S.log(
              `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`,
            ),
            r || t.setStatus({ code: 2, message: e }),
            t.setAttribute(`sentry.cancellation_reason`, `document.hidden`),
            t.end());
        }
      })
    : Q &&
      S.warn(
        `[Tracing] Could not set up background tab detection due to lack of global document`,
      );
}
var lh = e(() => {
  (W(), Mp(), Jl());
});
function uh(e, { linkPreviousTrace: t, consistentTraceSampling: n }) {
  let r = t === `session-storage`,
    i = r ? ph() : void 0;
  e.on(`spanStart`, (e) => {
    if (z(e) !== e) return;
    let t = M().getPropagationContext();
    ((i = dh(i, e, t)), r && fh(i));
  });
  let a = !0;
  n &&
    e.on(`beforeSampling`, (e) => {
      if (!i) return;
      let t = M(),
        n = t.getPropagationContext();
      if (a && n.parentSpanId) {
        a = !1;
        return;
      }
      (t.setPropagationContext({
        ...n,
        dsc: {
          ...n.dsc,
          sample_rate: String(i.sampleRate),
          sampled: String(mh(i.spanContext)),
        },
        sampleRand: i.sampleRand,
      }),
        (e.parentSampled = mh(i.spanContext)),
        (e.parentSampleRate = i.sampleRate),
        (e.spanAttributes = { ...e.spanAttributes, [Kn]: i.sampleRate }));
    });
}
function dh(e, t, n) {
  let r = R(t);
  function i() {
    try {
      return (
        Number(n.dsc?.sample_rate) ?? Number(r.data?.[`sentry.sample_rate`])
      );
    } catch {
      return 0;
    }
  }
  let a = {
    spanContext: t.spanContext(),
    startTimestamp: r.start_timestamp,
    sampleRate: i(),
    sampleRand: n.sampleRand,
  };
  if (!e) return a;
  let o = e.spanContext;
  return o.traceId === r.trace_id
    ? e
    : (Date.now() / 1e3 - e.startTimestamp <= 3600 &&
        (Q &&
          S.log(
            `Adding previous_trace ${o} link to span ${{ op: r.op, ...t.spanContext() }}`,
          ),
        t.addLink({ context: o, attributes: { [er]: `previous_trace` } }),
        t.setAttribute(gh, `${o.traceId}-${o.spanId}-${mh(o) ? 1 : 0}`)),
      a);
}
function fh(e) {
  try {
    G.sessionStorage.setItem(hh, JSON.stringify(e));
  } catch (e) {
    Q && S.warn(`Could not store previous trace in sessionStorage`, e);
  }
}
function ph() {
  try {
    let e = G.sessionStorage?.getItem(hh);
    return JSON.parse(e);
  } catch {
    return;
  }
}
function mh(e) {
  return e.traceFlags === 1;
}
var hh,
  gh,
  _h = e(() => {
    (W(),
      Mp(),
      Jl(),
      (hh = `sentry_previous_trace`),
      (gh = `sentry.previous_trace`));
  });
function vh(e, t, n) {
  (e.emit(`startPageLoadSpan`, t, n), M().setTransactionName(t.name));
  let r = Sh(e);
  return (r && e.emit(`afterStartPageLoadSpan`, r), r);
}
function yh(e, t, n) {
  let { url: r, isRedirect: i } = n || {};
  (e.emit(`beforeStartNavigationSpan`, t, { isRedirect: i }),
    e.emit(`startNavigationSpan`, t, { isRedirect: i }));
  let a = M();
  return (
    a.setTransactionName(t.name),
    r &&
      !i &&
      a.setSDKProcessingMetadata({ normalizedRequest: { ...Kl(), url: r } }),
    Sh(e)
  );
}
function bh(e) {
  return (
    G.document?.querySelector(`meta[name=${e}]`)?.getAttribute(`content`) ||
    void 0
  );
}
function xh(e, t, n, r, i) {
  let a = G.document,
    o;
  a &&
    addEventListener(
      `click`,
      () => {
        let a = `ui.action.click`,
          s = Sh(e);
        if (s) {
          let e = R(s).op;
          if ([`navigation`, `pageload`].includes(e)) {
            Q &&
              S.warn(
                `[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`,
              );
            return;
          }
        }
        if (
          ((o &&=
            (o.setAttribute(Jn, `interactionInterrupted`), o.end(), void 0)),
          !i.name)
        ) {
          Q &&
            S.warn(
              `[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`,
            );
          return;
        }
        o = Ea(
          { name: i.name, op: a, attributes: { [I]: i.source || `url` } },
          { idleTimeout: t, finalTimeout: n, childSpanTimeout: r },
        );
      },
      { capture: !0 },
    );
}
function Sh(e) {
  return e[Oh];
}
function Ch(e, t) {
  O(e, Oh, t);
}
function wh(e, t) {
  let n = R(e),
    r = on();
  return !(r - n.start_timestamp > kh || (t && r - t <= kh));
}
var Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah = e(() => {
    (W(),
      Op(),
      Mp(),
      Jl(),
      lh(),
      _h(),
      sh(),
      (Th = `BrowserTracing`),
      (Eh = {
        ...Oa,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        enableElementTiming: !0,
        ignoreResourceSpans: [],
        ignorePerformanceApiSpans: [],
        detectRedirects: !0,
        linkPreviousTrace: `in-memory`,
        consistentTraceSampling: !1,
        enableReportPageLoaded: !1,
        _experiments: {},
        ...oh,
      }),
      (Dh = (e = {}) => {
        let t = { name: void 0, source: void 0 },
          n = G.document,
          {
            enableInp: r,
            enableElementTiming: i,
            enableLongTask: a,
            enableLongAnimationFrame: o,
            _experiments: {
              enableInteractions: s,
              enableStandaloneClsSpans: c,
              enableStandaloneLcpSpans: l,
            },
            beforeStartSpan: u,
            idleTimeout: d,
            finalTimeout: f,
            childSpanTimeout: p,
            markBackgroundSpan: m,
            traceFetch: h,
            traceXHR: g,
            trackFetchStreamPerformance: ee,
            shouldCreateSpanForRequest: te,
            enableHTTPTimings: ne,
            ignoreResourceSpans: re,
            ignorePerformanceApiSpans: ie,
            instrumentPageLoad: ae,
            instrumentNavigation: oe,
            detectRedirects: se,
            linkPreviousTrace: ce,
            consistentTraceSampling: le,
            enableReportPageLoaded: ue,
            onRequestSpanStart: de,
            onRequestSpanEnd: fe,
          } = { ...Eh, ...e },
          pe,
          me,
          he;
        function ge(e, r, i = !0) {
          let a = r.op === `pageload`,
            o = r.name,
            s = u ? u(r) : r,
            m = s.attributes || {};
          if ((o !== s.name && ((m[I] = `custom`), (s.attributes = m)), !i)) {
            let e = on();
            ha({ ...s, startTime: e }).end(e);
            return;
          }
          ((t.name = s.name), (t.source = m[I]));
          let h = Ea(s, {
            idleTimeout: d,
            finalTimeout: f,
            childSpanTimeout: p,
            disableAutoFinish: a,
            beforeSpanEnd: (t) => {
              (pe?.(),
                Tf(t, {
                  recordClsOnPageloadSpan: !c,
                  recordLcpOnPageloadSpan: !l,
                  ignoreResourceSpans: re,
                  ignorePerformanceApiSpans: ie,
                }),
                Ch(e, void 0));
              let n = M(),
                r = n.getPropagationContext();
              (n.setPropagationContext({
                ...r,
                traceId: h.spanContext().traceId,
                sampled: Yr(h),
                dsc: vi(t),
              }),
                a && (he = void 0));
            },
            trimIdleSpanEndTimestamp: !ue,
          });
          (a && ue && (he = h), Ch(e, h));
          function g() {
            n &&
              [`interactive`, `complete`].includes(n.readyState) &&
              e.emit(`idleSpanEnableAutoFinish`, h);
          }
          a &&
            !ue &&
            n &&
            (n.addEventListener(`readystatechange`, () => {
              g();
            }),
            g());
        }
        return {
          name: Th,
          setup(e) {
            if (
              (ii(),
              (pe = vf({
                recordClsStandaloneSpans: c || !1,
                recordLcpStandaloneSpans: l || !1,
                client: e,
              })),
              r && vp(),
              i && Hf(),
              o &&
              y.PerformanceObserver &&
              PerformanceObserver.supportedEntryTypes &&
              PerformanceObserver.supportedEntryTypes.includes(
                `long-animation-frame`,
              )
                ? bf()
                : a && yf(),
              s && xf(),
              se && n)
            ) {
              let e = () => {
                me = A();
              };
              (addEventListener(`click`, e, { capture: !0 }),
                addEventListener(`keydown`, e, { capture: !0, passive: !0 }));
            }
            function t() {
              let t = Sh(e);
              t &&
                !R(t).timestamp &&
                (Q &&
                  S.log(
                    `[Tracing] Finishing current active span with op: ${R(t).op}`,
                  ),
                t.setAttribute(Jn, `cancelled`),
                t.end());
            }
            (e.on(`startNavigationSpan`, (n, r) => {
              if (P() !== e) return;
              if (r?.isRedirect) {
                (Q &&
                  S.warn(
                    `[Tracing] Detected redirect, navigation span will not be the root span, but a child span.`,
                  ),
                  ge(e, { op: `navigation.redirect`, ...n }, !1));
                return;
              }
              ((me = void 0),
                t(),
                N().setPropagationContext({
                  traceId: bn(),
                  sampleRand: Math.random(),
                  propagationSpanId: H() ? void 0 : xn(),
                }));
              let i = M();
              (i.setPropagationContext({
                traceId: bn(),
                sampleRand: Math.random(),
                propagationSpanId: H() ? void 0 : xn(),
              }),
                i.setSDKProcessingMetadata({ normalizedRequest: void 0 }),
                ge(e, {
                  op: `navigation`,
                  ...n,
                  parentSpan: null,
                  forceTransaction: !0,
                }));
            }),
              e.on(`startPageLoadSpan`, (n, r = {}) => {
                if (P() !== e) return;
                t();
                let i = Pr(
                    r.sentryTrace || bh(`sentry-trace`),
                    r.baggage || bh(`baggage`),
                  ),
                  a = M();
                (a.setPropagationContext(i),
                  H() || (a.getPropagationContext().propagationSpanId = xn()),
                  a.setSDKProcessingMetadata({ normalizedRequest: Kl() }),
                  ge(e, { op: `pageload`, ...n }));
              }),
              e.on(`endPageloadSpan`, () => {
                ue && he && (he.setAttribute(Jn, `reportPageLoaded`), he.end());
              }));
          },
          afterAllSetup(e) {
            let n = Mt();
            if (
              (ce !== `off` &&
                uh(e, { linkPreviousTrace: ce, consistentTraceSampling: le }),
              G.location)
            ) {
              if (ae) {
                let t = j();
                vh(e, {
                  name: G.location.pathname,
                  startTime: t ? t / 1e3 : void 0,
                  attributes: { [I]: `url`, [L]: `auto.pageload.browser` },
                });
              }
              oe &&
                np(({ to: t, from: r }) => {
                  if (r === void 0 && n?.indexOf(t) !== -1) {
                    n = void 0;
                    return;
                  }
                  n = void 0;
                  let i = Ws(t),
                    a = Sh(e),
                    o = a && se && wh(a, me);
                  yh(
                    e,
                    {
                      name: i?.pathname || G.location.pathname,
                      attributes: {
                        [I]: `url`,
                        [L]: `auto.navigation.browser`,
                      },
                    },
                    { url: t, isRedirect: o },
                  );
                });
            }
            (m && ch(),
              s && xh(e, d, f, p, t),
              r && bp(),
              Qm(e, {
                traceFetch: h,
                traceXHR: g,
                trackFetchStreamPerformance: ee,
                tracePropagationTargets: e.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: te,
                enableHTTPTimings: ne,
                onRequestSpanStart: de,
                onRequestSpanEnd: fe,
              }));
          },
        };
      }),
      (Oh = `_sentry_idleSpan`),
      (kh = 1.5));
  }),
  jh = e(() => {
    (W(), Yp(), Km(), Ah());
  });
function Mh() {
  let e = Hn().getScopeData(),
    t = N().getScopeData(),
    n = M().getScopeData();
  return (Ga(e, t), Ga(e, n), (e.eventProcessors = []), e);
}
function Nh(e) {
  (N().addScopeListener((t) => {
    e(Mh(), t);
  }),
    M().addScopeListener((t) => {
      e(Mh(), t);
    }),
    Hn().addScopeListener((t) => {
      e(Mh(), t);
    }));
}
var Ph = e(() => {
    W();
  }),
  Fh,
  Ih = e(() => {
    (W(),
      Ph(),
      Bl(),
      (Fh = U(() => ({
        name: `ScopeToMain`,
        setup(e) {
          let t = Rl(e);
          Nh((e, n) => {
            (t.sendScope(JSON.stringify(Ci(e, 20, 2e3))),
              n.clearBreadcrumbs(),
              n.clearAttachments());
          });
        },
      }))));
  }),
  Lh = e(() => {
    (W(), Bl());
  });
function Rh(e) {
  let t;
  return us(
    e,
    async (e) => ((t ||= Rl()), t.sendEnvelope(e.body), { statusCode: 200 }),
  );
}
var zh = e(() => {
    (W(), Bl());
  }),
  Bh,
  Vh,
  Hh,
  Uh,
  Wh = e(() => {
    (jh(),
      W(),
      (Bh = 50),
      ([, Vh] = Vp),
      ([, Hh] = Al()),
      (Uh = (e, t = 0) => {
        let n = [];
        for (let r of e
          .split(
            `
`,
          )
          .slice(t)) {
          let e = Vh(r),
            t = Hh(r);
          if (
            (e && t?.in_app !== !1
              ? n.push(e)
              : t && (t.module === void 0 && delete t.module, n.push(t)),
            n.length >= Bh)
          )
            break;
        }
        return We(n);
      }));
  });
function Gh(e) {
  return [...Wm(e).filter((e) => e.name !== `BrowserSession`), Fh()];
}
function Kh(e = {}, t = Gm) {
  if (window?.__SENTRY__RENDERER_INIT__) {
    S.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  ((window.__SENTRY__RENDERER_INIT__ = !0),
    (e.sendClientReports = !1),
    e.defaultIntegrations === void 0 && (e.defaultIntegrations = Gh(e)),
    e.stackParser === void 0 && (e.stackParser = Uh),
    e.ipcNamespace === void 0 && (e.ipcNamespace = `sentry-ipc`),
    e.dsn === void 0 && (e.dsn = `https://12345@dummy.dsn/12345`),
    e.transport === void 0 && (e.transport = Rh),
    delete e.initialScope,
    t(e));
}
var qh = e(() => {
    (jh(), W(), Ih(), Wh(), zh());
  }),
  Jh = e(() => {
    (Vl(), Hl(), jh(), Ih(), Lh(), zh(), Wh(), qh());
  });
function Yh() {
  if ($h) return;
  $h = !0;
  let e = window.electronBridge?.getSentryInitOptions?.();
  if (!e) return;
  let t = f(e.buildFlavor),
    n = te(e.appVersion),
    r = e.buildFlavor !== `prod`;
  (Kh({
    beforeSend: me,
    dsn: ee,
    environment: eg,
    release: p(n.version),
    dist: e.buildNumber ?? void 0,
    tracesSampleRate: 0,
    integrations: (e) => (t ? [...e, Dh()] : e),
  }),
    bo(`sessionId`, e.codexAppSessionId),
    bo(`buildFlavor`, e.buildFlavor),
    bo(`preRelease`, r),
    bo(`bundle`, `webview`),
    bo(`host`, `app`),
    ue(Qh));
}
function Xh(e) {
  xo(
    e.authMethod == null
      ? null
      : {
          id: e.userId ?? void 0,
          authMethod: e.authMethod,
          account_id: e.accountId ?? void 0,
        },
  );
}
function Zh(e, t) {
  try {
    let n = de(e, t);
    return vo(n.error, n);
  } catch {
    return ``;
  }
}
function Qh(e, t) {
  try {
    return vo(e, t);
  } catch {
    return ``;
  }
}
var $h,
  eg,
  tg = e(() => {
    (Jh(), s(), he(), ($h = !1), (eg = `prod`));
  }),
  ng,
  rg,
  ig = e(() => {
    (s(), (ng = `codex`), (rg = o(ng)));
  });
function ag(e) {
  switch (e) {
    case `ready`:
    case `downloading`:
    case `installing`:
      return !0;
    case `checking`:
    case `idle`:
      return !1;
  }
}
var og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg = e(() => {
    (u(),
      i(),
      (og = {
        downloadProgressPercent: null,
        installProgressPercent: null,
        isUpdateReady: !1,
        lifecycleState: `idle`,
        relaunchNotice: null,
      }),
      (sg = c(a, og)),
      (cg = n(a, ({ get: e }) => e(sg).isUpdateReady)),
      (lg = n(a, ({ get: e }) => e(sg).lifecycleState)),
      (ug = n(a, ({ get: e }) => e(sg).downloadProgressPercent)),
      (dg = n(a, ({ get: e }) => e(sg).installProgressPercent)),
      (fg = n(a, ({ get: e }) => e(sg).relaunchNotice)));
  });
function mg(e) {
  let t = (0, gg.c)(11),
    { appUpdateLifecycleState: n } = e === void 0 ? {} : e,
    { platform: r } = xe(),
    i = g(lg);
  switch (n ?? i) {
    case `idle`: {
      let e;
      t[0] === r
        ? (e = t[1])
        : ((e = () => {
            if (r === `macOS`) {
              _e.appUpdates?.installUpdate();
              return;
            }
            _e.appUpdates?.checkForUpdates();
          }),
          (t[0] = r),
          (t[1] = e));
      let n;
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(oe, { className: `icon-xs` })), (t[2] = n))
        : (n = t[2]);
      let i;
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(ye, {
            id: `appUpdate.recovery.updateCodex`,
            defaultMessage: `Update {appName}`,
            description: `Button label shown on the full-screen error page to install a desktop app update`,
            values: { appName: rg },
          })),
          (t[3] = i))
        : (i = t[3]);
      let a;
      return (
        t[4] === e
          ? (a = t[5])
          : ((a = (0, $.jsxs)(ae, { onClick: e, children: [n, i] })),
            (t[4] = e),
            (t[5] = a)),
        a
      );
    }
    case `ready`: {
      let e;
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(oe, { className: `icon-xs` })), (t[6] = e))
        : (e = t[6]);
      let n;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsxs)(ae, {
              onClick: hg,
              children: [
                e,
                (0, $.jsx)(ye, {
                  id: `appUpdate.recovery.updateCodex`,
                  defaultMessage: `Update {appName}`,
                  description: `Button label shown on the full-screen error page to install a desktop app update`,
                  values: { appName: rg },
                }),
              ],
            })),
            (t[7] = n))
          : (n = t[7]),
        n
      );
    }
    case `checking`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsxs)(ae, {
              color: `outline`,
              disabled: !0,
              children: [
                (0, $.jsx)(ne, { className: `icon-xs` }),
                (0, $.jsx)(ye, {
                  id: `appUpdate.recovery.checkingForUpdates`,
                  defaultMessage: `Checking for updates`,
                  description: `Disabled status shown on the full-screen error page while checking for desktop app updates`,
                }),
              ],
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `downloading`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsxs)(ae, {
              color: `outline`,
              disabled: !0,
              children: [
                (0, $.jsx)(ne, { className: `icon-xs` }),
                (0, $.jsx)(ye, {
                  id: `appUpdate.recovery.downloadingUpdate`,
                  defaultMessage: `Downloading update`,
                  description: `Disabled status shown on the full-screen error page while downloading a desktop app update`,
                }),
              ],
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `installing`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsxs)(ae, {
              color: `outline`,
              disabled: !0,
              children: [
                (0, $.jsx)(ne, { className: `icon-xs` }),
                (0, $.jsx)(ye, {
                  id: `appUpdate.recovery.installingUpdate`,
                  defaultMessage: `Installing update`,
                  description: `Disabled status shown on the full-screen error page while installing a desktop app update`,
                }),
              ],
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
  }
}
function hg() {
  _e.appUpdates?.installUpdate();
}
var gg,
  $,
  _g = e(() => {
    ((gg = m()),
      u(),
      pe(),
      ig(),
      pg(),
      re(),
      ie(),
      be(),
      se(),
      ge(),
      ($ = h()));
  });
function vg(e) {
  return Object.prototype.toString.call(e);
}
function yg(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function bg(e) {
  switch (vg(e)) {
    case `[object Error]`:
    case `[object Exception]`:
    case `[object DOMException]`:
      return !0;
    default:
      return yg(e, Error);
  }
}
function xg(e, t) {
  let n = new WeakMap();
  function r(e, t) {
    if (!n.has(e)) {
      if (e.cause) return (n.set(e, !0), r(e.cause, t));
      e.cause = t;
    }
  }
  r(e, t);
}
function Sg(e) {
  let t = (0, Cg.c)(9),
    { resetError: n } = e,
    r = fe(),
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Tg.jsx)(Ce, {
        className: `icon-lg text-token-error-foreground`,
      })),
      (a = (0, Tg.jsx)(ye, {
        id: `codex.errorBoundary.genericError`,
        defaultMessage: `Oops, an error has occurred`,
        description: `Generic error message shown when the extension webview fails`,
      })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Tg.jsx)(ce, { electron: !0, children: (0, Tg.jsx)(mg, {}) })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== r || t[4] !== n
    ? ((s = () => {
        (n(), r(`/`));
      }),
      (t[3] = r),
      (t[4] = n),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Tg.jsx)(ye, {
        id: `codex.errorBoundary.goHome`,
        defaultMessage: `Try again`,
        description: `Button label to navigate to the home page after an error`,
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] === s
      ? (l = t[8])
      : ((l = (0, Tg.jsxs)(`div`, {
          className: `flex h-full flex-col items-center justify-center gap-4`,
          children: [
            i,
            a,
            (0, Tg.jsxs)(`div`, {
              className: `flex flex-wrap items-center justify-center gap-2`,
              children: [o, (0, Tg.jsx)(ae, { onClick: s, children: c })],
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = l)),
    l
  );
}
var Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og = e(() => {
    ((Cg = m()),
      (wg = t(d(), 1)),
      pe(),
      ve(),
      we(),
      tg(),
      l(),
      _g(),
      re(),
      le(),
      (Tg = h()),
      (Eg = { componentStack: null, error: null, eventId: `` }),
      (Dg = class extends wg.Component {
        state = Eg;
        componentDidUpdate(e) {
          this.state.error == null ||
            e.resetKey === this.props.resetKey ||
            this.resetErrorBoundary();
        }
        componentDidCatch(e, { componentStack: t }) {
          let n = t ?? ``,
            i = bg(e) ? e : Error(String(e));
          if (bg(e)) {
            let t = Error(e.message);
            ((t.name = `React ErrorBoundary ${t.name}`),
              (t.stack = n),
              xg(e, t));
          }
          let a = Zh(i, { boundaryName: this.props.name, componentStack: n });
          this.props.onError && this.props.onError(i, n, a);
          try {
            r.error(`error boundary`, {
              safe: { name: this.props.name },
              sensitive: { error: e, componentStack: t ?? `` },
            });
          } catch {}
          this.setState({ error: i, componentStack: t, eventId: a });
        }
        resetErrorBoundary = () => {
          let { onReset: e } = this.props,
            { error: t, componentStack: n, eventId: r } = this.state;
          (e && e(t, n ?? ``, r), this.setState(Eg));
        };
        render() {
          let { fallback: e, children: t } = this.props,
            n = this.state,
            r =
              e ??
              ((e) => (0, Tg.jsx)(Sg, { resetError: () => e.resetError() }));
          if (n.error) {
            let e;
            return (
              (e =
                typeof r == `function`
                  ? r({
                      error: n.error,
                      componentStack: n.componentStack ?? ``,
                      eventId: n.eventId,
                      resetError: this.resetErrorBoundary,
                    })
                  : r),
              (0, wg.isValidElement)(e) ? e : null
            );
          }
          return typeof t == `function` ? t() : t;
        }
      }));
  });
export {
  tg as _,
  ug as a,
  we as b,
  cg as c,
  pg as d,
  ag as f,
  Yh as g,
  ig as h,
  _g as i,
  fg as l,
  rg as m,
  Og as n,
  dg as o,
  ng as p,
  mg as r,
  lg as s,
  Dg as t,
  sg as u,
  Xh as v,
  Ce as y,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-DHWk0JvV.js.map
