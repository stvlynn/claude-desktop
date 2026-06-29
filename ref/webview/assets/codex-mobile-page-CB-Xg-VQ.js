import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  D as r,
  E as i,
  Go as a,
  Gs as o,
  Ko as s,
  Vo as c,
  _c as l,
  ac as u,
  gc as d,
  lc as f,
  qs as p,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  ot as m,
  st as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Fa as g,
  Qp as _,
  em as v,
  fn as y,
  mn as b,
  xa as x,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  vt as S,
  yt as C,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  a as w,
  d as T,
  r as E,
  u as D,
} from "./codex-mobile-setup-dialog-BIUrpc8k.js";
import {
  a as O,
  i as k,
  n as A,
  r as j,
  t as M,
} from "./codex-mobile-setup-flow-XFbY7C-Z.js";
function N() {
  let e = (0, F.c)(8),
    t = s(i),
    n = a(b, v),
    [r] = p(D),
    o;
  e[0] === t ? (o = e[1]) : ((o = S(t)), (e[0] = t), (e[1] = o));
  let { data: c, isError: l, isFetching: d, isPending: f } = u(o);
  if (f || n == null) return null;
  let m;
  return (
    e[2] !== l || e[3] !== d || e[4] !== c || e[5] !== n.status || e[6] !== r
      ? ((m = (0, L.jsx)(P, {
          isMfaSetupRequiredError: l,
          isMfaSetupRequiredFetching: d,
          mfaSetupRequired: c,
          remoteControlStatus: n.status,
          setupStepDebugOverride: r,
        })),
        (e[2] = l),
        (e[3] = d),
        (e[4] = c),
        (e[5] = n.status),
        (e[6] = r),
        (e[7] = m))
      : (m = e[7]),
    m
  );
}
function P(e) {
  let t = (0, F.c)(13),
    {
      isMfaSetupRequiredError: n,
      isMfaSetupRequiredFetching: r,
      mfaSetupRequired: i,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    } = e,
    s = g(),
    [c] = (0, I.useState)(a);
  if (r) return null;
  if (
    O({
      isMfaSetupRequiredError: n,
      mfaSetupRequired: i,
      initialRemoteControlStatus: c,
      remoteControlStatus: a,
      setupStepDebugOverride: o,
    })
  ) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(m.MainContentLayout, { layout: `full-bleed` })),
        (t[0] = e))
      : (e = t[0]);
    let r;
    t[1] !== n || t[2] !== i || t[3] !== a
      ? ((r = j({
          isMfaSetupRequiredError: n,
          mfaSetupRequired: i,
          remoteControlStatus: a,
        })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a),
        (t[4] = r))
      : (r = t[4]);
    let o;
    t[5] === s
      ? (o = t[6])
      : ((o = () => {
          s(`/`);
        }),
        (t[5] = s),
        (t[6] = o));
    let c;
    return (
      t[7] !== r || t[8] !== o
        ? ((c = (0, L.jsxs)(L.Fragment, {
            children: [
              e,
              (0, L.jsx)(M, { initialStep: r, onClose: o, variant: `page` }),
            ],
          })),
          (t[7] = r),
          (t[8] = o),
          (t[9] = c))
        : (c = t[9]),
      c
    );
  }
  let l;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, L.jsx)(m.MainContentLayout, { layout: `full-bleed` })),
      (t[10] = l))
    : (l = t[10]);
  let u;
  return (
    t[11] === s
      ? (u = t[12])
      : ((u = (0, L.jsxs)(L.Fragment, {
          children: [
            l,
            (0, L.jsx)(E, {
              onManageConnections: () => {
                s(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[11] = s),
        (t[12] = u)),
    u
  );
}
var F, I, L;
e(() => {
  ((F = d()),
    n(),
    o(),
    c(),
    (I = t(l(), 1)),
    x(),
    y(),
    h(),
    r(),
    _(),
    T(),
    A(),
    C(),
    k(),
    w(),
    (L = f()));
})();
export { N as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page-CB-Xg-VQ.js.map
