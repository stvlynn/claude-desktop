import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  B as r,
  K as i,
  V as a,
  q as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  hh as s,
  mh as c,
  xp as l,
  yp as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as d,
  Iy as f,
  Qp as p,
  im as m,
  rm as h,
  zy as g,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Xt as _,
  Zt as v,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  v as y,
  y as b,
} from "./app-initial~app-main~projects-index-page~local-conversation-page-HgUkvfGN.js";
function x(e) {
  let t = (0, k.c)(12),
    { className: n, disableTooltip: r, hostId: i } = e,
    a = r === void 0 ? !1 : r,
    o = d(i),
    s = m(),
    l;
  t[0] === n
    ? (l = t[1])
    : ((l = c(`icon-2xs no-drag shrink-0`, n)), (t[0] = n), (t[1] = l));
  let u;
  t[2] === s ? (u = t[3]) : ((u = s.map(S)), (t[2] = s), (t[3] = u));
  let f;
  t[4] !== i || t[5] !== l || t[6] !== u
    ? ((f = (0, A.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, A.jsx)(y, {
          className: l,
          hostId: i,
          hostIdsForColorAssignment: u,
        }),
      })),
      (t[4] = i),
      (t[5] = l),
      (t[6] = u),
      (t[7] = f))
    : (f = t[7]);
  let p;
  return (
    t[8] !== a || t[9] !== o.display_name || t[10] !== f
      ? ((p = O({
          disableTooltip: a,
          icon: f,
          tooltipContent: o.display_name,
        })),
        (t[8] = a),
        (t[9] = o.display_name),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function S(e) {
  return e.hostId;
}
function C(e) {
  let t = (0, k.c)(19),
    { className: n, disableTooltip: r, hostId: a } = e,
    o = r === void 0 ? !1 : r,
    s = d(a),
    l = m(),
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = c(`icon-2xs no-drag shrink-0`, n)), (t[0] = n), (t[1] = u));
  let f;
  t[2] === l ? (f = t[3]) : ((f = l.map(w)), (t[2] = l), (t[3] = f));
  let p;
  t[4] !== a || t[5] !== u || t[6] !== f
    ? ((p = (0, A.jsx)(y, {
        className: u,
        hostId: a,
        hostIdsForColorAssignment: f,
      })),
      (t[4] = a),
      (t[5] = u),
      (t[6] = f),
      (t[7] = p))
    : (p = t[7]);
  let h;
  t[8] === n
    ? (h = t[9])
    : ((h = c(
        `icon-2xs text-token-description-foreground no-drag shrink-0`,
        n,
      )),
      (t[8] = n),
      (t[9] = h));
  let g;
  t[10] === h
    ? (g = t[11])
    : ((g = (0, A.jsx)(i, { className: h })), (t[10] = h), (t[11] = g));
  let _;
  t[12] !== p || t[13] !== g
    ? ((_ = (0, A.jsxs)(`span`, {
        className: `inline-flex shrink-0 items-center gap-1.5`,
        children: [p, g],
      })),
      (t[12] = p),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== o || t[16] !== s.display_name || t[17] !== _
      ? ((v = O({
          disableTooltip: o,
          icon: _,
          tooltipContent: s.display_name,
        })),
        (t[15] = o),
        (t[16] = s.display_name),
        (t[17] = _),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
function w(e) {
  return e.hostId;
}
function T(e) {
  let t = (0, k.c)(8),
    { className: n, disableTooltip: r } = e,
    a = r === void 0 ? !1 : r,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = c(
        `icon-2xs text-token-description-foreground no-drag shrink-0`,
        n,
      )),
      (t[0] = n),
      (t[1] = o));
  let s;
  t[2] === o
    ? (s = t[3])
    : ((s = (0, A.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, A.jsx)(i, { className: o }),
      })),
      (t[2] = o),
      (t[3] = s));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, A.jsx)(g, {
        id: `threadEnvIcon.worktreeTooltip`,
        defaultMessage: `This conversation is running in a local git worktree.`,
        description: `Tooltip content for worktree environment icon`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== a || t[6] !== s
      ? ((u = O({ disableTooltip: a, icon: s, tooltipContent: l })),
        (t[5] = a),
        (t[6] = s),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function E(e) {
  let t = (0, k.c)(8),
    { className: n, disableTooltip: r } = e,
    i = r === void 0 ? !1 : r,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = c(
        `icon-2xs translate-x-px text-token-description-foreground no-drag shrink-0`,
        n,
      )),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === a
    ? (o = t[3])
    : ((o = (0, A.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, A.jsx)(_, { className: a }),
      })),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, A.jsx)(g, {
        id: `threadEnvIcon.cloudTooltip`,
        defaultMessage: `This conversation is running in Codex Cloud.`,
        description: `Tooltip content for cloud environment icon`,
      })),
      (t[4] = s))
    : (s = t[4]);
  let l;
  return (
    t[5] !== i || t[6] !== o
      ? ((l = O({ disableTooltip: i, icon: o, tooltipContent: s })),
        (t[5] = i),
        (t[6] = o),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function D(e) {
  let t = (0, k.c)(8),
    { className: n, disableTooltip: i } = e,
    a = i === void 0 ? !1 : i,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = c(
        `icon-2xs text-token-description-foreground no-drag shrink-0`,
        n,
      )),
      (t[0] = n),
      (t[1] = o));
  let s;
  t[2] === o
    ? (s = t[3])
    : ((s = (0, A.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, A.jsx)(r, { className: o }),
      })),
      (t[2] = o),
      (t[3] = s));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, A.jsx)(g, {
        id: `threadEnvIcon.localTooltip`,
        defaultMessage: `This conversation is running locally.`,
        description: `Tooltip content for local environment icon`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== a || t[6] !== s
      ? ((u = O({ disableTooltip: a, icon: s, tooltipContent: l })),
        (t[5] = a),
        (t[6] = s),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function O({ disableTooltip: e, icon: t, tooltipContent: n }) {
  return e ? t : (0, A.jsx)(u, { tooltipContent: n, children: t });
}
var k,
  A,
  j = e(() => {
    ((k = t()), s(), f(), b(), l(), v(), a(), o(), h(), p(), (A = n()));
  });
export { T as a, C as i, D as n, j as o, x as r, E as t };
//# sourceMappingURL=app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~clc2xu64-CruLP2Hm.js.map
