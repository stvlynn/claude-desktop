import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  As as n,
  D as r,
  E as i,
  Gs as a,
  Js as o,
  Vo as s,
  Zs as c,
  _c as l,
  gc as u,
  qo as d,
  qs as f,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  nm as p,
  rm as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Jd as ee,
  Km as te,
  of as ne,
  qm as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as re,
  $v as ie,
  C as ae,
  N as oe,
  Qp as se,
  Qv as ce,
  gy as g,
  hy as le,
  iy as ue,
  ty as de,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  dn as _,
  vn as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
var y,
  b,
  x = e(() => {
    ((y = `last_completed_onboarding`),
      (b = `electron:onboarding-projectless-completed`));
  });
function fe({ hideFirstNewThreadOnboardingPromos: e, pathname: t }) {
  return e && t === `/`;
}
function pe({
  projectlessOnboardingCompleted: e,
  workspaceRootsCount: t,
  workspaceRootsIsLoading: n,
}) {
  return e == null ? null : e ? !0 : n ? null : t > 0;
}
function me(e) {
  return e == null || e * 1e3 < R;
}
var S,
  C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    (a(),
      s(),
      m(),
      r(),
      _(),
      te(),
      le(),
      x(),
      (S = `welcomeV2Onboarding`),
      (C = h(`electron:onboarding-override`, `auto`)),
      (w = h(`electron:onboarding-welcome-pending`, !1)),
      (T = h(b, !1)),
      (E = g(b, !1)),
      (D = n(i, ({ get: e }) => {
        let t = e(E),
          n = e(v);
        return pe({
          projectlessOnboardingCompleted: t,
          workspaceRootsCount: n.data?.roots.length ?? 0,
          workspaceRootsIsLoading: n.data == null && n.isLoading,
        });
      })),
      (O = h(`electron:onboarding-hide-first-new-thread-promos`, !1)),
      (k = h(`electron:onboarding-plugin-checklist-active`, !1)),
      (A = h(
        `electron:onboarding-plugin-suggestions-v2-enabled-at-completion`,
        !1,
      )),
      (j = h(`electron:homepage-onboarding-tiles-debug-override`, null)),
      (M = g(`electron:onboarding-mail-provider-debug-override`, null)),
      (N = g(`electron:onboarding-hide-google-tiles-debug-override`, !1)),
      (P = h(y, null)),
      (F = c(
        (e) => e(P),
        (e, t, n) => {
          (n != null && p(), t(P, n));
        },
      )),
      (I = h(`electron:onboarding-primary-runtime-install-requested`, !1)),
      (L = h(`electron:onboarding-primary-runtime-install-ready`, !1)),
      (R = new Date(2026, 3, 30).getTime()),
      (z = h(`electron:onboarding-workspace-experiment-assignment`, null)),
      (B = h(`electron:onboarding-workspace-autolaunch-applied`, !1)),
      (V = h(`electron:onboarding-welcome-v2-role-state`, {
        roles: [],
        personalizedSuggestionsEnabled: !0,
        workMode: null,
      })));
  });
function U() {
  return re(d(ae)).kind !== `local`;
}
var W = e(() => {
  (s(), oe(), se());
});
function he(e) {
  switch (e) {
    case `control`:
    case `t2_direct_folder_picker`:
    case `t3_auto_playground`:
    case `t4_modal_copy_cta_playground`:
    case Q:
      return e;
    default:
      return `control`;
  }
}
function G(e) {
  let t = he(e);
  return t === `t5_onboarding_v2` ? `control` : t;
}
function K(e) {
  let t = ie(e, Z),
    n = G(t.get(ve, null));
  return n === `control`
    ? `getGroupName` in t && typeof t.getGroupName == `function`
      ? G(t.getGroupName())
      : `control`
    : n;
}
function q(e) {
  return e?.experimentName === Z;
}
function J(e) {
  return e === `t2_direct_folder_picker`;
}
function Y(e) {
  return e === `t3_auto_playground`;
}
function ge(e) {
  return e === `t4_modal_copy_cta_playground`;
}
function _e(e) {
  return J(e) || Y(e) || ge(e);
}
var X,
  Z,
  Q,
  ve,
  ye = e(() => {
    (de(),
      (X = `Playground`),
      (Z = `93537254`),
      (Q = `t5_onboarding_v2`),
      (ve = `arm`));
  });
function be({ onboardingTarget: e, assignment: t, evaluateExperimentArm: n }) {
  return t == null ? (e === `workspace` ? n() : `control`) : t.arm;
}
function xe() {
  let e = (0, $.c)(5),
    t = o(z),
    n;
  e[0] === t ? (n = e[1]) : ((n = q(t) ? t : null), (e[0] = t), (e[1] = n));
  let r = n,
    i = r?.arm ?? `control`,
    a;
  return (
    e[2] !== i || e[3] !== r
      ? ((a = {
          workspaceOnboardingExperimentAssignment: r,
          workspaceOnboardingExperimentArm: i,
        }),
        (e[2] = i),
        (e[3] = r),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
function Se(e) {
  let t = (0, $.c)(17),
    { onboardingTarget: n } = e,
    [r, i] = f(z),
    a;
  t[0] === r ? (a = t[1]) : ((a = q(r) ? r : null), (t[0] = r), (t[1] = a));
  let o = a,
    { client: s } = ue(),
    c;
  t[2] === s ? (c = t[3]) : ((c = () => K(s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== n || t[5] !== c || t[6] !== o
    ? ((l = be({
        onboardingTarget: n,
        assignment: o,
        evaluateExperimentArm: c,
      })),
      (t[4] = n),
      (t[5] = c),
      (t[6] = o),
      (t[7] = l))
    : (l = t[7]);
  let u = l,
    d,
    p;
  (t[8] !== n || t[9] !== i || t[10] !== s || t[11] !== o
    ? ((d = () => {
        n === `workspace` &&
          o == null &&
          i({ arm: K(s), assignedAtMs: Date.now(), experimentName: Z });
      }),
      (p = [n, i, s, o]),
      (t[8] = n),
      (t[9] = i),
      (t[10] = s),
      (t[11] = o),
      (t[12] = d),
      (t[13] = p))
    : ((d = t[12]), (p = t[13])),
    (0, Oe.useEffect)(d, p));
  let m;
  return (
    t[14] !== u || t[15] !== o
      ? ((m = {
          workspaceOnboardingExperimentAssignment: o,
          workspaceOnboardingExperimentArm: u,
        }),
        (t[14] = u),
        (t[15] = o),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function Ce({ onboardingTarget: e, arm: t, isRemoteHost: n }) {
  return e === `workspace` && !n && J(t);
}
function we(e) {
  let t = (0, $.c)(14),
    { enabled: n } = e,
    { client: r, isLoading: i } = ue(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = n && !i && ce(r, `1482884768`)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    s;
  t[4] === o ? (s = t[5]) : ((s = { enabled: o }), (t[4] = o), (t[5] = s));
  let c = ne(s),
    l = c.data?.age_status === `under_18`;
  if (!n) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { isLoading: !1, shouldUseTeenOnboarding: !1 }), (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let u = i || (o && c.isLoading),
    d;
  t[7] !== o || t[8] !== l || t[9] !== r
    ? ((d = o && l && ce(r, `3150044490`)),
      (t[7] = o),
      (t[8] = l),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== u || t[12] !== d
      ? ((f = { isLoading: u, shouldUseTeenOnboarding: d }),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function Te({
  arm: e,
  isRemoteHost: t,
  isLoadingRoots: n,
  hasPersistedRoots: r,
  autoLaunchApplied: i,
}) {
  return t || n || r || i
    ? `none`
    : J(e)
      ? `home_open_picker_or_create_default`
      : Y(e)
        ? `select_workspace_skip_to_playground`
        : `none`;
}
function Ee() {
  let e = (0, $.c)(15),
    { workspaceOnboardingExperimentArm: t } = xe(),
    n = U(),
    [r, i] = f(B),
    { data: a, isLoading: o } = d(v),
    s = (a?.roots?.length ?? 0) > 0,
    c;
  e[0] !== s || e[1] !== o || e[2] !== n || e[3] !== r || e[4] !== t
    ? ((c = Te({
        arm: t,
        isRemoteHost: n,
        isLoadingRoots: o,
        hasPersistedRoots: s,
        autoLaunchApplied: r,
      })),
      (e[0] = s),
      (e[1] = o),
      (e[2] = n),
      (e[3] = r),
      (e[4] = t),
      (e[5] = c))
    : (c = e[5]);
  let l = c,
    u;
  return (
    e[6] !== l ||
    e[7] !== s ||
    e[8] !== o ||
    e[9] !== n ||
    e[10] !== i ||
    e[11] !== r ||
    e[12] !== t ||
    e[13] !== a
      ? ((u = {
          workspaceOnboardingExperimentArm: t,
          isRemoteHost: n,
          workspaceOnboardingAutoLaunchApplied: r,
          setWorkspaceOnboardingAutoLaunchApplied: i,
          workspaceRootOptions: a,
          isLoadingWorkspaceRootOptions: o,
          hasPersistedRoots: s,
          autoLaunchAction: l,
        }),
        (e[6] = l),
        (e[7] = s),
        (e[8] = o),
        (e[9] = n),
        (e[10] = i),
        (e[11] = r),
        (e[12] = t),
        (e[13] = a),
        (e[14] = u))
      : (u = e[14]),
    u
  );
}
function De(e) {
  if (_e(e)) return X;
}
var $,
  Oe,
  ke = e(() => {
    (($ = u()), a(), s(), (Oe = t(l(), 1)), ee(), W(), _(), de(), H(), ye());
  });
export {
  N as A,
  L as C,
  B as D,
  V as E,
  y as F,
  b as I,
  x as L,
  M,
  fe as N,
  z as O,
  me as P,
  w as S,
  T,
  j as _,
  Ee as a,
  k as b,
  Z as c,
  J as d,
  ge as f,
  O as g,
  S as h,
  we as i,
  H as j,
  D as k,
  Q as l,
  U as m,
  ke as n,
  Se as o,
  W as p,
  Ce as r,
  X as s,
  De as t,
  ye as u,
  F as v,
  I as w,
  A as x,
  C as y,
};
//# sourceMappingURL=app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js.map
