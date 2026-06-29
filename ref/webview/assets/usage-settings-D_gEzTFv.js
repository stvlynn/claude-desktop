import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  Bo as r,
  D as i,
  E as a,
  Ko as o,
  O as s,
  Vo as c,
  _c as l,
  ac as u,
  gc as d,
  h as f,
  lc as p,
  m,
  qo as h,
  tc as g,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ca as _,
  Dm as v,
  Do as y,
  Em as b,
  Eo as x,
  Om as S,
  Rd as C,
  Tm as w,
  _a as T,
  as as E,
  ba as D,
  gp as O,
  hh as k,
  is as A,
  ls as j,
  mh as M,
  mp as N,
  ns as P,
  us as ee,
  va as te,
  wo as ne,
  ya as re,
  zd as ie,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fy as ae,
  Iy as F,
  J_ as I,
  K_ as oe,
  My as L,
  Ny as se,
  Vy as ce,
  ay as le,
  ln as ue,
  ty as de,
  un as fe,
  zy as R,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Fn as z,
  Hs as B,
  In as V,
  Is as H,
  Kt as U,
  Ps as W,
  Ys as G,
  Zs as pe,
  ec as me,
  qt as he,
  tc as ge,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as _e,
  S as ve,
  V as ye,
  x as be,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  b as xe,
  y as Se,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-DHWk0JvV.js";
import {
  a as Ce,
  o as we,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js";
import {
  A as Te,
  B as Ee,
  F as De,
  G as Oe,
  H as ke,
  I as Ae,
  K as je,
  L as Me,
  M as Ne,
  O as Pe,
  P as Fe,
  R as Ie,
  T as Le,
  U as Re,
  V as ze,
  Y as Be,
  Z as Ve,
  at as He,
  b as Ue,
  c as We,
  ct as Ge,
  dt as Ke,
  f as qe,
  ft as Je,
  h as Ye,
  it as Xe,
  lt as Ze,
  nt as Qe,
  ot as $e,
  q as et,
  rt as tt,
  st as nt,
  tt as rt,
  ut as it,
  w as at,
  x as ot,
  z as st,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-BWbJojtu.js";
import {
  J as ct,
  d as K,
  f as lt,
  q,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as ut,
  t as dt,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import { n as ft, t as pt } from "./esm-BrsRQYxN.js";
import { r as mt, t as ht } from "./plan-pricing-DANGBAbm.js";
function J(e) {
  return e == null ? `` : e.trim();
}
function gt({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = xt(e),
    r = xt(t),
    i = St(n),
    a = Ct({ parsedThreshold: n, parsedTarget: r });
  return {
    rechargeThresholdError: i,
    rechargeTargetError: a,
    isValid: i == null && a == null,
  };
}
function _t({ draftState: e, serverState: t, isSaving: n }) {
  let r = gt({
      rechargeThreshold: e.rechargeThreshold,
      rechargeTarget: e.rechargeTarget,
    }),
    i = yt({ draftState: e, serverState: t }),
    a = vt({ draftState: e, serverState: t, validation: r });
  return {
    validation: r,
    hasChanges: i,
    saveIntent: a,
    isSaveEnabled: i && a !== `none` && !n,
  };
}
function vt({ draftState: e, serverState: t, validation: n }) {
  return e.isEnabled
    ? n.isValid
      ? t.isEnabled
        ? J(e.rechargeThreshold) === J(t.rechargeThreshold) &&
          J(e.rechargeTarget) === J(t.rechargeTarget)
          ? `none`
          : `update`
        : `enable`
      : `none`
    : t.isEnabled
      ? `disable`
      : `none`;
}
function yt({ draftState: e, serverState: t }) {
  return e.isEnabled === t.isEnabled
    ? !e.isEnabled && !t.isEnabled
      ? !1
      : J(e.rechargeThreshold) !== J(t.rechargeThreshold) ||
        J(e.rechargeTarget) !== J(t.rechargeTarget)
    : !0;
}
function bt({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = J(e),
    r = J(t);
  if (!/^\d+$/.test(n) || !/^\d+$/.test(r)) return null;
  let i = Number.parseInt(n, 10),
    a = Number.parseInt(r, 10);
  return a < i ? null : a - i;
}
function xt(e) {
  let t = J(e);
  return t.length === 0
    ? { kind: `missing` }
    : /^\d+$/.test(t)
      ? { kind: `valid`, value: Number.parseInt(t, 10) }
      : { kind: `invalid` };
}
function St(e) {
  switch (e.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.value < 125 ? `below-threshold-minimum` : null;
  }
}
function Ct({ parsedThreshold: e, parsedTarget: t }) {
  switch (t.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.kind === `valid` && t.value - e.value < 125
        ? `target-difference-too-small`
        : null;
  }
}
var wt = e(() => {});
function Tt(e) {
  let t = (0, sn.c)(45),
    {
      serverState: n,
      creditDetails: r,
      enableAutoTopUpMutation: i,
      updateAutoTopUpMutation: s,
      disableAutoTopUpMutation: c,
    } = e,
    l = o(a),
    u = ce(),
    d = le(),
    f = st(),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { enabled: !0 }), (t[0] = p))
    : (p = t[0]);
  let { data: m } = rt(p),
    h;
  t[1] === m
    ? (h = t[2])
    : ((h = { billingCurrency: m, enabled: !0 }), (t[1] = m), (t[2] = h));
  let { data: g } = Qe(h),
    [_, v] = (0, cn.useState)(!1),
    y;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(R, {
        id: `settings.usage.credit.balance.title`,
        defaultMessage: `Credits balance`,
        description: `Title for the credits balance section`,
      })),
      (t[3] = y))
    : (y = t[3]);
  let b;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(K.Header, {
        className: `pb-3 [&>div>div]:!text-sm`,
        title: y,
        subtitle: (0, Y.jsx)(R, {
          id: `settings.usage.credit.balance.description`,
          defaultMessage: `Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>`,
          description: `Description for the credits balance section in usage settings`,
          values: { link: Et },
        }),
      })),
      (t[4] = b))
    : (b = t[4]);
  let x;
  t[5] !== r || t[6] !== g || t[7] !== u
    ? ((x = Gt({ intl: u, creditDetails: r, pricingInfo: g })),
      (t[5] = r),
      (t[6] = g),
      (t[7] = u),
      (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] === x
    ? (S = t[10])
    : ((S = (0, Y.jsx)(`div`, {
        className: `text-sm text-token-text-primary`,
        children: x,
      })),
      (t[9] = x),
      (t[10] = S));
  let C, T;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(R, {
        id: `settings.usage.credit.balance.current`,
        defaultMessage: `Current balance`,
        description: `Label below the current credits balance amount`,
      })),
      (T = (0, Y.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 rounded-full bg-current`,
      })),
      (t[11] = C),
      (t[12] = T))
    : ((C = t[11]), (T = t[12]));
  let E;
  t[13] !== f || t[14] !== n.isEnabled
    ? ((E = () => {
        f({
          intent: `auto-reload`,
          isAutoReloadEnabled: n.isEnabled,
          source: `usage_settings_auto_reload_cta`,
          openLegacyAutoReload: () => {
            v(!0);
          },
        });
      }),
      (t[13] = f),
      (t[14] = n.isEnabled),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] === n.isEnabled
    ? (D = t[17])
    : ((D = n.isEnabled
        ? (0, Y.jsx)(R, {
            id: `settings.usage.credit.balance.manageAutoReload`,
            defaultMessage: `Manage auto-reload`,
            description: `Button label to manage active auto reload from the credits balance section`,
          })
        : (0, Y.jsx)(R, {
            id: `settings.usage.credit.balance.setupAutoReload`,
            defaultMessage: `Set up auto-reload`,
            description: `Button label to set up auto reload from the credits balance section`,
          })),
      (t[16] = n.isEnabled),
      (t[17] = D));
  let O;
  t[18] !== D || t[19] !== E
    ? ((O = (0, Y.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-x-1 text-sm text-token-text-secondary`,
        children: [
          C,
          T,
          (0, Y.jsx)(`button`, {
            type: `button`,
            className: `cursor-interaction text-token-text-link-foreground`,
            onClick: E,
            children: D,
          }),
        ],
      })),
      (t[18] = D),
      (t[19] = E),
      (t[20] = O))
    : (O = t[20]);
  let k;
  t[21] !== O || t[22] !== S
    ? ((k = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [S, O],
      })),
      (t[21] = O),
      (t[22] = S),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] !== f || t[25] !== l || t[26] !== n.isEnabled || t[27] !== d
    ? ((A = (e) => {
        let t = je(d, `personal`);
        (et(l, {
          audience: `personal`,
          checkoutKind: `standalone_credit`,
          entryPoint: `usage_settings_purchase_cta`,
        }),
          f({
            event: e,
            intent: `purchase`,
            isAutoReloadEnabled: n.isEnabled,
            isCustomCheckoutEnabled: t,
            legacyUrl: fn,
            source: `usage_settings_purchase_cta`,
          }));
      }),
      (t[24] = f),
      (t[25] = l),
      (t[26] = n.isEnabled),
      (t[27] = d),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(R, {
        id: `settings.usage.credit.balance.buyCredits`,
        defaultMessage: `Buy credits`,
        description: `Button label to open the credit purchase flow`,
      })),
      (t[29] = j))
    : (j = t[29]);
  let M;
  t[30] === A
    ? (M = t[31])
    : ((M = (0, Y.jsx)(w, {
        color: `outline`,
        size: `toolbar`,
        onClick: A,
        children: j,
      })),
      (t[30] = A),
      (t[31] = M));
  let N;
  t[32] !== k || t[33] !== M
    ? ((N = (0, Y.jsxs)(K, {
        children: [
          b,
          (0, Y.jsx)(K.Content, {
            children: (0, Y.jsx)(q, {
              children: (0, Y.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 p-4`,
                children: [k, M],
              }),
            }),
          }),
        ],
      })),
      (t[32] = k),
      (t[33] = M),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] !== r ||
  t[36] !== c ||
  t[37] !== i ||
  t[38] !== _ ||
  t[39] !== n ||
  t[40] !== s
    ? ((P = _
        ? (0, Y.jsx)(Ot, {
            open: _,
            serverState: n,
            creditDetails: r,
            enableAutoTopUpMutation: i,
            updateAutoTopUpMutation: s,
            disableAutoTopUpMutation: c,
            onOpenChange: v,
          })
        : null),
      (t[35] = r),
      (t[36] = c),
      (t[37] = i),
      (t[38] = _),
      (t[39] = n),
      (t[40] = s),
      (t[41] = P))
    : (P = t[41]);
  let ee;
  return (
    t[42] !== N || t[43] !== P
      ? ((ee = (0, Y.jsxs)(Y.Fragment, { children: [N, P] })),
        (t[42] = N),
        (t[43] = P),
        (t[44] = ee))
      : (ee = t[44]),
    ee
  );
}
function Et(e) {
  return (0, Y.jsx)(`a`, {
    href: pn,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `inline-flex cursor-interaction text-token-text-link-foreground`,
    onClick: Dt,
    children: e,
  });
}
function Dt(e) {
  A({ event: e, href: pn, initiator: `open_in_browser_bridge` });
}
function Ot(e) {
  let t = (0, sn.c)(74),
    {
      open: n,
      serverState: r,
      creditDetails: i,
      enableAutoTopUpMutation: s,
      updateAutoTopUpMutation: c,
      disableAutoTopUpMutation: l,
      onOpenChange: u,
    } = e,
    d = o(a),
    f = ce(),
    p = le(),
    m;
  t[0] === n ? (m = t[1]) : ((m = { enabled: n }), (t[0] = n), (t[1] = m));
  let { data: h, isPending: _ } = rt(m),
    v;
  t[2] !== h || t[3] !== n
    ? ((v = { billingCurrency: h, enabled: n }),
      (t[2] = h),
      (t[3] = n),
      (t[4] = v))
    : (v = t[4]);
  let { data: y, isPending: b } = Qe(v),
    S = _ || b,
    C = (0, cn.useId)(),
    E = (0, cn.useId)(),
    k = (0, cn.useId)(),
    A = (0, cn.useId)(),
    j = s.isPending || c.isPending,
    M = l.isPending,
    N = j || M,
    [P, ee] = (0, cn.useState)(null),
    [ie, ae] = (0, cn.useState)(!1),
    F;
  t[5] !== f || t[6] !== d
    ? ((F = (e) => {
        d.get(O).danger(rn(e, f), ln);
      }),
      (t[5] = f),
      (t[6] = d),
      (t[7] = F))
    : (F = t[7]);
  let I = F,
    oe;
  t[8] !== f || t[9] !== d
    ? ((oe = (e) => {
        d.get(O).success(an(e, f), ln);
      }),
      (t[8] = f),
      (t[9] = d),
      (t[10] = oe))
    : (oe = t[10]);
  let L = oe,
    se;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = () => {
        (ae(!1), ee(null));
      }),
      (t[11] = se))
    : (se = t[11]);
  let ue = se,
    de;
  t[12] !== y || t[13] !== i?.balance || t[14] !== f
    ? ((de = (e) => {
        let { draftState: t } = e;
        (ae(!0),
          ee(
            Jt({
              intl: f,
              creditBalance: i?.balance,
              rechargeThreshold: t.rechargeThreshold,
              rechargeTarget: t.rechargeTarget,
              pricingInfo: y,
            })?.amount ?? null,
          ));
      }),
      (t[12] = y),
      (t[13] = i?.balance),
      (t[14] = f),
      (t[15] = de))
    : (de = t[15]);
  let fe = de,
    z;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [`usage-settings`, `auto-top-up`, `manage-payment`]), (t[16] = z))
    : (z = t[16]);
  let B;
  t[17] !== f || t[18] !== d
    ? ((B = {
        mutationKey: z,
        mutationFn: Ft,
        onSuccess: Pt,
        onError: () => {
          d.get(O).danger(
            f.formatMessage({
              id: `settings.usage.autoTopUp.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again.`,
              description: `Error shown when opening the manage payment flow from the auto top up settings dialog fails`,
            }),
            ln,
          );
        },
      }),
      (t[17] = f),
      (t[18] = d),
      (t[19] = B))
    : (B = t[19]);
  let V = g(B),
    H;
  t[20] === V
    ? (H = t[21])
    : ((H = () => {
        V.isPending || V.mutate();
      }),
      (t[20] = V),
      (t[21] = H));
  let U = H,
    W = r.rechargeThreshold ?? un,
    G = r.rechargeTarget ?? dn,
    pe;
  t[22] !== W || t[23] !== G
    ? ((pe = { isEnabled: !0, rechargeThreshold: W, rechargeTarget: G }),
      (t[22] = W),
      (t[23] = G),
      (t[24] = pe))
    : (pe = t[24]);
  let me;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = { onChange: Nt, onSubmit: Mt }), (t[25] = me))
    : (me = t[25]);
  let he;
  t[26] !== s ||
  t[27] !== fe ||
  t[28] !== N ||
  t[29] !== u ||
  t[30] !== r ||
  t[31] !== I ||
  t[32] !== L ||
  t[33] !== c
    ? ((he = async (e) => {
        let { value: t } = e,
          n = _t({ draftState: t, serverState: r, isSaving: N });
        if (n.isSaveEnabled)
          switch (n.saveIntent) {
            case `disable`:
            case `none`:
              return;
            case `enable`:
              try {
                if (
                  (ue(),
                  Je((await s.mutateAsync(on(t))).immediate_top_up_status))
                ) {
                  fe({ draftState: t });
                  return;
                }
                (L(`enable`), u(!1));
              } catch {
                I(`enable`);
              }
              return;
            case `update`:
              try {
                if (
                  (ue(),
                  Je((await c.mutateAsync(on(t))).immediate_top_up_status))
                ) {
                  fe({ draftState: t });
                  return;
                }
                (L(`update`), u(!1));
              } catch {
                I(`update`);
              }
              return;
          }
      }),
      (t[26] = s),
      (t[27] = fe),
      (t[28] = N),
      (t[29] = u),
      (t[30] = r),
      (t[31] = I),
      (t[32] = L),
      (t[33] = c),
      (t[34] = he))
    : (he = t[34]);
  let ge;
  t[35] !== pe || t[36] !== he
    ? ((ge = { defaultValues: pe, validators: me, onSubmit: he }),
      (t[35] = pe),
      (t[36] = he),
      (t[37] = ge))
    : (ge = t[37]);
  let _e = ft(ge),
    ve;
  t[38] !== N || t[39] !== u
    ? ((ve = (e) => {
        (N && !e) || (e || ue(), u(e));
      }),
      (t[38] = N),
      (t[39] = u),
      (t[40] = ve))
    : (ve = t[40]);
  let ye = ve,
    be;
  t[41] !== l ||
  t[42] !== u ||
  t[43] !== r.isEnabled ||
  t[44] !== I ||
  t[45] !== L
    ? ((be = async () => {
        if (r.isEnabled)
          try {
            (await l.mutateAsync(), L(`disable`), u(!1));
          } catch {
            I(`disable`);
          }
      }),
      (t[41] = l),
      (t[42] = u),
      (t[43] = r.isEnabled),
      (t[44] = I),
      (t[45] = L),
      (t[46] = be))
    : (be = t[46]);
  let xe = be,
    Se;
  t[47] !== y ||
  t[48] !== i?.balance ||
  t[49] !== E ||
  t[50] !== C ||
  t[51] !== _e ||
  t[52] !== ye ||
  t[53] !== xe ||
  t[54] !== U ||
  t[55] !== ie ||
  t[56] !== P ||
  t[57] !== f ||
  t[58] !== N ||
  t[59] !== S ||
  t[60] !== M ||
  t[61] !== j ||
  t[62] !== u ||
  t[63] !== n ||
  t[64] !== V.isPending ||
  t[65] !== d ||
  t[66] !== r ||
  t[67] !== p ||
  t[68] !== A ||
  t[69] !== k
    ? ((Se = (e) => {
        let { values: t, submissionAttempts: a } = e,
          o = _t({ draftState: t, serverState: r, isSaving: N }),
          s = Jt({
            intl: f,
            creditBalance: i?.balance,
            rechargeThreshold: t.rechargeThreshold,
            rechargeTarget: t.rechargeTarget,
            pricingInfo: y,
          }),
          c =
            !ie &&
            s != null &&
            (o.saveIntent === `enable` || o.saveIntent === `update`)
              ? {
                  saveIntent: o.saveIntent,
                  amount: s.amount,
                  creditCount: s.creditCount,
                }
              : null;
        return (0, Y.jsx)(ne, {
          open: n,
          size: `default`,
          contentClassName: `w-[536px] max-w-[calc(100vw-2rem)]`,
          contentProps: { "aria-describedby": E, onOpenAutoFocus: At },
          shouldIgnoreClickOutside: N,
          onOpenChange: ye,
          children: (0, Y.jsx)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(), _e.handleSubmit());
            },
            children: (0, Y.jsxs)(T, {
              className: `gap-0 px-6 py-6`,
              children: [
                (0, Y.jsx)(x, {
                  asChild: !0,
                  children: (0, Y.jsx)(`h2`, {
                    id: C,
                    className: `sr-only`,
                    children: f.formatMessage({
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, Y.jsx)(`p`, {
                  id: E,
                  className: `sr-only`,
                  children: f.formatMessage({
                    id: `settings.usage.autoTopUp.dialog.description`,
                    defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                    description: `Description shown below the inputs in the auto top up settings dialog`,
                  }),
                }),
                (0, Y.jsx)(D, {
                  children: (0, Y.jsx)(re, {
                    title: (0, Y.jsx)(R, {
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, Y.jsxs)(D, {
                  className: `gap-5`,
                  children: [
                    (0, Y.jsx)(_e.Field, {
                      name: `rechargeThreshold`,
                      children: (e) => {
                        let t =
                          a > 0 || e.state.meta.isBlurred
                            ? Xt(e.state.meta.errors)
                            : null;
                        return (0, Y.jsx)(Ht, {
                          id: k,
                          label: (0, Y.jsx)(R, {
                            id: `settings.usage.autoTopUp.threshold.label`,
                            defaultMessage: `Minimum balance`,
                            description: `Label for the auto top up threshold input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `125`,
                          disabled: N,
                          hasError: t != null,
                          helperText: (0, Y.jsx)(R, {
                            id: `settings.usage.autoTopUp.threshold.helper`,
                            defaultMessage: `Auto reload triggers when your credit balance goes below this amount.`,
                            description: `Helper text shown below the minimum balance input in the auto top up dialog`,
                          }),
                          footerContent: en({
                            fieldError: t,
                            fieldName: `threshold`,
                            intl: f,
                          }),
                          footerTone: `error`,
                          ariaLabel: f.formatMessage({
                            id: `settings.usage.autoTopUp.threshold.ariaLabel`,
                            defaultMessage: `Auto-reload minimum balance`,
                            description: `Aria label for the auto top up threshold input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (ue(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, Y.jsx)(_e.Field, {
                      name: `rechargeTarget`,
                      children: (e) => {
                        let n =
                            a > 0 || e.state.meta.isBlurred
                              ? Zt(e.state.meta.errors)
                              : null,
                          r = qt({
                            intl: f,
                            rechargeThreshold: t.rechargeThreshold,
                            rechargeTarget: e.state.value,
                            pricingInfo: y,
                          });
                        return (0, Y.jsx)(Ht, {
                          id: A,
                          label: (0, Y.jsx)(R, {
                            id: `settings.usage.autoTopUp.target.label`,
                            defaultMessage: `Target balance`,
                            description: `Label for the auto top up target balance input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `250`,
                          disabled: N,
                          hasError: n != null,
                          helperText: (0, Y.jsx)(R, {
                            id: `settings.usage.autoTopUp.target.helper`,
                            defaultMessage: `Auto reload brings your credit balance back up to this amount.`,
                            description: `Helper text shown below the target balance input in the auto top up dialog`,
                          }),
                          footerContent:
                            n == null
                              ? S
                                ? (0, Y.jsx)(Ut, { intl: f })
                                : r == null
                                  ? null
                                  : (0, Y.jsx)(R, {
                                      id: `settings.usage.autoTopUp.target.equivalent`,
                                      defaultMessage: `Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>`,
                                      description: `Message shown below the target balance input with the estimated minimum billing amount`,
                                      values: {
                                        creditCount: r.creditCount,
                                        amount: r.amount,
                                        strong: kt,
                                      },
                                    })
                              : en({
                                  fieldError: n,
                                  fieldName: `target`,
                                  intl: f,
                                }),
                          footerTone: n == null ? `secondary` : `error`,
                          ariaLabel: f.formatMessage({
                            id: `settings.usage.autoTopUp.target.ariaLabel`,
                            defaultMessage: `Auto-reload target balance`,
                            description: `Aria label for the auto top up target balance input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (ue(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `text-sm leading-5 text-token-text-secondary`,
                      children: (0, Y.jsx)(R, {
                        id: `settings.usage.autoTopUp.dialog.description`,
                        defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                        description: `Description shown below the inputs in the auto top up settings dialog`,
                      }),
                    }),
                    c == null
                      ? null
                      : (0, Y.jsx)(It, {
                          saveIntent: c.saveIntent,
                          amount: c.amount,
                          creditCount: c.creditCount,
                        }),
                    ie
                      ? (0, Y.jsx)(zt, {
                          amount: P,
                          isManagePaymentPending: V.isPending,
                          onManagePaymentClick: U,
                          onPurchaseCreditClick: (e) => {
                            (je(p, `personal`),
                              et(d, {
                                audience: `personal`,
                                checkoutKind: `standalone_credit`,
                                entryPoint: `auto_top_up_failure_banner`,
                              }),
                              Be(fn, e));
                          },
                        })
                      : null,
                  ],
                }),
                (0, Y.jsx)(D, {
                  className: `pt-7`,
                  children: (0, Y.jsxs)(te, {
                    children: [
                      r.isEnabled
                        ? (0, Y.jsx)(w, {
                            color: `outline`,
                            className: mn,
                            loading: M,
                            disabled: N,
                            onClick: () => {
                              xe();
                            },
                            children: (0, Y.jsx)(R, {
                              id: `settings.usage.autoTopUp.disable`,
                              defaultMessage: `Turn off`,
                              description: `Button label to disable auto top up`,
                            }),
                          })
                        : (0, Y.jsx)(w, {
                            color: `outline`,
                            className: mn,
                            disabled: N,
                            onClick: () => {
                              u(!1);
                            },
                            children: (0, Y.jsx)(R, {
                              id: `settings.usage.autoTopUp.cancel`,
                              defaultMessage: `Cancel`,
                              description: `Button label to close the auto top up dialog without saving`,
                            }),
                          }),
                      (0, Y.jsx)(w, {
                        color: `primary`,
                        type: `submit`,
                        className: mn,
                        loading: j,
                        disabled: !o.isSaveEnabled,
                        children: r.isEnabled
                          ? (0, Y.jsx)(R, {
                              id: `settings.usage.autoTopUp.save`,
                              defaultMessage: `Save`,
                              description: `Button label to save auto top up settings`,
                            })
                          : (0, Y.jsx)(R, {
                              id: `settings.usage.autoTopUp.enable`,
                              defaultMessage: `Turn on`,
                              description: `Button label to enable auto top up`,
                            }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }),
      (t[47] = y),
      (t[48] = i?.balance),
      (t[49] = E),
      (t[50] = C),
      (t[51] = _e),
      (t[52] = ye),
      (t[53] = xe),
      (t[54] = U),
      (t[55] = ie),
      (t[56] = P),
      (t[57] = f),
      (t[58] = N),
      (t[59] = S),
      (t[60] = M),
      (t[61] = j),
      (t[62] = u),
      (t[63] = n),
      (t[64] = V.isPending),
      (t[65] = d),
      (t[66] = r),
      (t[67] = p),
      (t[68] = A),
      (t[69] = k),
      (t[70] = Se))
    : (Se = t[70]);
  let Ce;
  return (
    t[71] !== _e.Subscribe || t[72] !== Se
      ? ((Ce = (0, Y.jsx)(_e.Subscribe, { selector: jt, children: Se })),
        (t[71] = _e.Subscribe),
        (t[72] = Se),
        (t[73] = Ce))
      : (Ce = t[73]),
    Ce
  );
}
function kt(e) {
  return (0, Y.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function At(e) {
  e.preventDefault();
}
function jt(e) {
  return { values: e.values, submissionAttempts: e.submissionAttempts };
}
function Mt(e) {
  let { value: t } = e;
  return Yt(t);
}
function Nt(e) {
  let { value: t } = e;
  return Yt(t);
}
function Pt(e) {
  E({ href: e.url, initiator: `open_in_browser_bridge` });
}
async function Ft() {
  return await oe.safeGet(`/payments/customer_portal`);
}
function It(e) {
  let t = (0, sn.c)(4),
    { saveIntent: n, amount: r, creditCount: i } = e,
    a;
  return (
    t[0] !== r || t[1] !== i || t[2] !== n
      ? ((a = (0, Y.jsx)(U, {
          type: `normal`,
          layout: `vertical`,
          content:
            n === `enable`
              ? (0, Y.jsx)(R, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.enable`,
                  defaultMessage: `Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.`,
                  description: `Informational banner shown before enabling auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: Rt },
                })
              : (0, Y.jsx)(R, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.update`,
                  defaultMessage: `Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.`,
                  description: `Informational banner shown before updating auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: Lt },
                }),
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Lt(e) {
  return (0, Y.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function Rt(e) {
  return (0, Y.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function zt(e) {
  let t = (0, sn.c)(5),
    {
      amount: n,
      isManagePaymentPending: r,
      onManagePaymentClick: i,
      onPurchaseCreditClick: a,
    } = e,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, Y.jsx)(U, {
          type: `error`,
          layout: `vertical`,
          content:
            n == null
              ? (0, Y.jsx)(R, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.generic`,
                  defaultMessage: `The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails without a price estimate`,
                  values: {
                    actionLine: Vt,
                    managePayment: (e) =>
                      (0, Y.jsx)(`a`, {
                        href: `#`,
                        className: M(
                          `cursor-interaction font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        "aria-disabled": r,
                        onClick: (e) => {
                          (e.preventDefault(), i());
                        },
                        children: e,
                      }),
                    purchaseCredit: (e) =>
                      (0, Y.jsx)(`a`, {
                        href: fn,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `cursor-interaction font-medium underline underline-offset-2`,
                        onClick: (e) => {
                          a(e);
                        },
                        children: e,
                      }),
                  },
                })
              : (0, Y.jsx)(R, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.amount`,
                  defaultMessage: `The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails and a price estimate is available`,
                  values: {
                    amount: n,
                    actionLine: Bt,
                    managePayment: (e) =>
                      (0, Y.jsx)(`a`, {
                        href: `#`,
                        className: M(
                          `cursor-interaction font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        "aria-disabled": r,
                        onClick: (e) => {
                          (e.preventDefault(), i());
                        },
                        children: e,
                      }),
                    purchaseCredit: (e) =>
                      (0, Y.jsx)(`a`, {
                        href: fn,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `cursor-interaction font-medium underline underline-offset-2`,
                        onClick: (e) => {
                          a(e);
                        },
                        children: e,
                      }),
                  },
                }),
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Bt(e) {
  return (0, Y.jsx)(`div`, { className: `mt-1`, children: e });
}
function Vt(e) {
  return (0, Y.jsx)(`div`, { className: `mt-1`, children: e });
}
function Ht(e) {
  let t = (0, sn.c)(22),
    {
      id: n,
      label: r,
      value: i,
      placeholder: a,
      disabled: o,
      hasError: s,
      helperText: c,
      footerContent: l,
      footerTone: u,
      ariaLabel: d,
      onChange: f,
      onBlur: p,
    } = e,
    m = u === void 0 ? `secondary` : u,
    h;
  t[0] !== n || t[1] !== r
    ? ((h = (0, Y.jsx)(`label`, {
        htmlFor: n,
        className: `text-lg text-token-text-secondary`,
        children: r,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] === c
    ? (g = t[4])
    : ((g = c
        ? (0, Y.jsx)(`div`, {
            className: `text-sm leading-4 text-token-text-secondary`,
            children: c,
          })
        : null),
      (t[3] = c),
      (t[4] = g));
  let _;
  t[5] !== d ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== n ||
  t[9] !== p ||
  t[10] !== f ||
  t[11] !== a ||
  t[12] !== i
    ? ((_ = (0, Y.jsx)(Wt, {
        id: n,
        value: i,
        placeholder: a,
        disabled: o,
        hasError: s,
        ariaLabel: d,
        onBlur: p,
        onChange: f,
      })),
      (t[5] = d),
      (t[6] = o),
      (t[7] = s),
      (t[8] = n),
      (t[9] = p),
      (t[10] = f),
      (t[11] = a),
      (t[12] = i),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== l || t[15] !== m
    ? ((v =
        l == null
          ? null
          : (0, Y.jsx)(`div`, {
              className: M(
                `text-sm`,
                m === `error`
                  ? `text-token-error-foreground`
                  : `text-token-text-secondary`,
              ),
              children: l,
            })),
      (t[14] = l),
      (t[15] = m),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== h || t[18] !== g || t[19] !== _ || t[20] !== v
      ? ((y = (0, Y.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [h, g, _, v],
        })),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
function Ut(e) {
  let t = (0, sn.c)(5),
    { intl: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = n.formatMessage({
        id: `settings.usage.autoTopUp.target.equivalent.loading`,
        defaultMessage: `Loading price`,
        description: `Accessible label announced while the auto top up price estimate is loading`,
      })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Y.jsx)(v, {
        className: `icon-xxs text-token-description-foreground`,
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, Y.jsx)(`span`, {
          role: `status`,
          "aria-label": r,
          className: `inline-flex items-center`,
          children: i,
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function Wt(e) {
  let t = (0, sn.c)(12),
    {
      id: n,
      value: r,
      placeholder: i,
      disabled: a,
      hasError: o,
      ariaLabel: s,
      onChange: c,
      onBlur: l,
    } = e,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = M(
        `bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-10 w-full rounded-lg border border-token-border px-3 text-left text-sm tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus`,
        `aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20`,
      )),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === c
    ? (d = t[2])
    : ((d = (e) => {
        c(e.currentTarget.value);
      }),
      (t[1] = c),
      (t[2] = d));
  let f;
  return (
    t[3] !== s ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== n ||
    t[7] !== l ||
    t[8] !== i ||
    t[9] !== d ||
    t[10] !== r
      ? ((f = (0, Y.jsx)(`input`, {
          id: n,
          value: r,
          placeholder: i,
          disabled: a,
          inputMode: `numeric`,
          pattern: `[0-9]*`,
          "aria-label": s,
          "aria-invalid": o,
          className: u,
          onChange: d,
          onBlur: l,
        })),
        (t[3] = s),
        (t[4] = a),
        (t[5] = o),
        (t[6] = n),
        (t[7] = l),
        (t[8] = i),
        (t[9] = d),
        (t[10] = r),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function Gt({ intl: e, creditDetails: t, pricingInfo: n }) {
  let r = e.formatMessage({
    id: `settings.usage.credit.remaining.unavailable`,
    defaultMessage: `Credit remaining unavailable`,
    description: `Fallback title shown when the remaining credit is unavailable`,
  });
  return t == null
    ? r
    : t.unlimited
      ? e.formatMessage({
          id: `settings.usage.credit.remaining.unlimited`,
          defaultMessage: `Unlimited credit`,
          description: `Title shown when the account has unlimited credit`,
        })
      : n == null
        ? r
        : (Ee({ intl: e, creditQuantity: Kt(t.balance), pricingInfo: n }) ?? r);
}
function Kt(e) {
  return Math.floor(Number(e ?? 0));
}
function qt({
  intl: e,
  rechargeThreshold: t,
  rechargeTarget: n,
  pricingInfo: r,
}) {
  if (r == null) return null;
  let i = bt({ rechargeThreshold: t, rechargeTarget: n });
  return i == null
    ? null
    : {
        creditCount: i,
        amount: ke({
          intl: e,
          amount: i * r.amountPerCredit,
          currencyCode: r.currencyCode,
          currencyFractionDigits: r.minorUnitExponent,
        }),
      };
}
function Jt({
  intl: e,
  creditBalance: t,
  rechargeThreshold: n,
  rechargeTarget: r,
  pricingInfo: i,
}) {
  if (i == null) return null;
  let a = Kt(t),
    o = Number(J(n)),
    s = Number(J(r));
  if (a >= o) return null;
  let c = Math.ceil(s - a);
  return c <= 0
    ? null
    : {
        amount: ke({
          intl: e,
          amount: c * i.amountPerCredit,
          currencyCode: i.currencyCode,
          currencyFractionDigits: i.minorUnitExponent,
        }),
        creditCount: c,
      };
}
function Yt({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = gt({ rechargeThreshold: e, rechargeTarget: t });
  if (!(n.rechargeThresholdError == null && n.rechargeTargetError == null))
    return {
      fields: {
        rechargeThreshold: n.rechargeThresholdError ?? void 0,
        rechargeTarget: n.rechargeTargetError ?? void 0,
      },
    };
}
function Xt(e) {
  if (e == null) return null;
  for (let t of e) if (Qt(t)) return t;
  return null;
}
function Zt(e) {
  if (e == null) return null;
  for (let t of e) if ($t(t)) return t;
  return null;
}
function Qt(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `below-threshold-minimum`
  );
}
function $t(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `target-difference-too-small`
  );
}
function en(e) {
  if (e.fieldError == null) return null;
  switch (e.fieldName) {
    case `threshold`:
      return tn(e.fieldError, e.intl);
    case `target`:
      return nn(e.fieldError, e.intl);
  }
}
function tn(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.missing`,
        defaultMessage: `Enter a minimum balance (at least 125 credits).`,
        description: `Validation message when the auto top up threshold is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.wholeNumber`,
        defaultMessage: `Minimum balance must be a whole number.`,
        description: `Validation message when the auto top up threshold is not a whole number`,
      });
    case `below-threshold-minimum`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.minimum`,
        defaultMessage: `Set the minimum balance to at least 125 credits.`,
        description: `Validation message when the auto top up threshold is below the minimum allowed value`,
      });
  }
}
function nn(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.missing`,
        defaultMessage: `Enter a target balance.`,
        description: `Validation message when the auto top up target balance is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.wholeNumber`,
        defaultMessage: `Target balance must be a whole number.`,
        description: `Validation message when the auto top up target balance is not a whole number`,
      });
    case `target-difference-too-small`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.minimumDifference`,
        defaultMessage: `Set the target balance to at least 125 credits above the minimum balance.`,
        description: `Validation message when the auto top up target balance is too close to the minimum balance`,
      });
  }
}
function rn(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.error`,
        defaultMessage: `Failed to enable auto reload`,
        description: `Toast shown when enabling auto top up fails`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.error`,
        defaultMessage: `Failed to update auto reload`,
        description: `Toast shown when updating auto top up fails`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.error`,
        defaultMessage: `Failed to disable auto reload`,
        description: `Toast shown when disabling auto top up fails`,
      });
    case `none`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.save.error`,
        defaultMessage: `Failed to save auto reload settings`,
        description: `Fallback toast shown when saving auto top up settings fails`,
      });
  }
}
function an(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.success`,
        defaultMessage: `Enabled auto reload`,
        description: `Toast shown when enabling auto top up succeeds`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.success`,
        defaultMessage: `Updated auto reload settings`,
        description: `Toast shown when updating auto top up succeeds`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.success`,
        defaultMessage: `Disabled auto reload`,
        description: `Toast shown when disabling auto top up succeeds`,
      });
  }
}
function on(e) {
  return {
    recharge_threshold: J(e.rechargeThreshold),
    recharge_target: J(e.rechargeTarget),
  };
}
var sn,
  cn,
  Y,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn = e(() => {
    ((sn = d()),
      pt(),
      n(),
      k(),
      c(),
      s(),
      (cn = t(l(), 1)),
      F(),
      he(),
      b(),
      y(),
      _(),
      P(),
      S(),
      N(),
      ze(),
      Ie(),
      Oe(),
      Ke(),
      Ve(),
      i(),
      lt(),
      ct(),
      de(),
      Re(),
      I(),
      wt(),
      (Y = p()),
      (ln = { duration: 3 }),
      (un = `125`),
      (dn = `250`),
      (fn = `${r}/settings/usage?credit_modal=true`),
      (pn = `https://help.openai.com/en/articles/20001106-codex-rate-card`),
      (mn = `min-w-[88px] justify-center`));
  });
function gn(e) {
  let t = (0, xn.c)(35),
    { plan: n } = e,
    r = o(a),
    i = ce(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { logExposure: !0 }), (t[0] = s))
    : (s = t[0]);
  let c = Me(s),
    l = ot(),
    u = Ne(n),
    d = u != null,
    f;
  t[1] === d ? (f = t[2]) : ((f = { enabled: d }), (t[1] = d), (t[2] = f));
  let { data: p } = rt(f),
    m = u != null,
    h;
  t[3] !== p || t[4] !== m
    ? ((h = { billingCurrency: p, enabled: m }),
      (t[3] = p),
      (t[4] = m),
      (t[5] = h))
    : (h = t[5]);
  let { data: g } = He(h);
  if (u == null) return null;
  let _ =
      g == null
        ? null
        : ht({
            intl: i,
            amount: g.monthlyAmounts[u.pricePlan],
            currencyCode: g.currencyCode,
            minorUnitExponent: g.minorUnitExponent,
          }),
    v = K,
    y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(K.Header, {
        title: (0, X.jsx)(R, {
          id: `settings.usage.plan.title`,
          defaultMessage: `Your plan`,
          description: `Title for the current plan section in usage settings`,
        }),
      })),
      (t[6] = y))
    : (y = t[6]);
  let b = K,
    x = q,
    S = z,
    C = yn(u.displayPlan),
    T;
  t[7] === _
    ? (T = t[8])
    : ((T =
        _ == null
          ? null
          : (0, X.jsx)(R, {
              id: `settings.usage.plan.monthlyPrice`,
              defaultMessage: `{price}/mo`,
              description: `Localized monthly price below the current plan name`,
              values: { price: _ },
            })),
      (t[7] = _),
      (t[8] = T));
  let E = u.cta === `upgrade` ? `primary` : `outline`,
    D;
  t[9] !== c || t[10] !== l || t[11] !== r || t[12] !== u.pricePlan
    ? ((D = (e) => {
        l({
          scope: r,
          currentPlan: u.pricePlan,
          event: e,
          getPricingUrl: c,
          source: `usage_settings_plan_row`,
        });
      }),
      (t[9] = c),
      (t[10] = l),
      (t[11] = r),
      (t[12] = u.pricePlan),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] === u.cta
    ? (O = t[15])
    : ((O =
        u.cta === `upgrade`
          ? (0, X.jsx)(R, {
              id: `settings.usage.plan.upgrade`,
              defaultMessage: `Upgrade plan`,
              description: `CTA to open the upgrade plan dialog`,
            })
          : (0, X.jsx)(R, {
              id: `settings.usage.plan.view`,
              defaultMessage: `View plans`,
              description: `CTA to open the plan selection dialog`,
            })),
      (t[14] = u.cta),
      (t[15] = O));
  let k;
  t[16] !== E || t[17] !== D || t[18] !== O
    ? ((k = (0, X.jsx)(w, {
        color: E,
        size: `toolbar`,
        onClick: D,
        children: O,
      })),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== S || t[21] !== T || t[22] !== k || t[23] !== C
    ? ((A = (0, X.jsx)(S, {
        className: `gap-6`,
        label: C,
        description: T,
        control: k,
      })),
      (t[20] = S),
      (t[21] = T),
      (t[22] = k),
      (t[23] = C),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] !== x || t[26] !== A
    ? ((j = (0, X.jsx)(x, { children: A })),
      (t[25] = x),
      (t[26] = A),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== j || t[29] !== b.Content
    ? ((M = (0, X.jsx)(b.Content, { children: j })),
      (t[28] = j),
      (t[29] = b.Content),
      (t[30] = M))
    : (M = t[30]);
  let N;
  return (
    t[31] !== v || t[32] !== M || t[33] !== y
      ? ((N = (0, X.jsxs)(v, { children: [y, M] })),
        (t[31] = v),
        (t[32] = M),
        (t[33] = y),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
function _n(e) {
  let t = (0, xn.c)(9),
    { plan: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = De(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === r ? (i = t[3]) : ((i = { enabled: r }), (t[2] = r), (t[3] = i));
  let { data: a } = $e(i);
  if (!De(n)) return null;
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(K.Header, {
        title: (0, X.jsx)(R, {
          id: `settings.usage.cancelPlan.title`,
          defaultMessage: `Cancel plan`,
          description: `Title for the cancel plan section in usage settings`,
        }),
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === a ? (s = t[6]) : ((s = Te(a)), (t[5] = a), (t[6] = s));
  let c;
  return (
    t[7] === s
      ? (c = t[8])
      : ((c = (0, X.jsxs)(K, {
          children: [
            o,
            (0, X.jsx)(K.Content, {
              className: `text-sm text-token-text-secondary`,
              children: (0, X.jsx)(`p`, {
                children: (0, X.jsx)(vn, { platform: s }),
              }),
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = c)),
    c
  );
}
function vn(e) {
  let t = (0, xn.c)(8),
    { platform: n } = e,
    r = n === `ios` ? Pe : n === `android` ? at : Le,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (e) =>
        (0, X.jsx)(`a`, {
          className: `cursor-interaction text-token-text-link-foreground`,
          href: r,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: (e) => bn(e, r),
          children: e,
        })),
      (t[0] = r),
      (t[1] = i));
  let a = i;
  switch (n) {
    case null: {
      let e;
      return (
        t[2] === a
          ? (e = t[3])
          : ((e = (0, X.jsx)(R, {
              id: `settings.usage.cancelPlan.webDescription`,
              defaultMessage: `Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan`,
              description: `Description shown when a ChatGPT-managed subscription can be canceled through web billing settings`,
              values: { cancel: a },
            })),
            (t[2] = a),
            (t[3] = e)),
        e
      );
    }
    case `ios`: {
      let e;
      return (
        t[4] === a
          ? (e = t[5])
          : ((e = (0, X.jsx)(R, {
              id: `settings.usage.cancelPlan.appleDescription`,
              defaultMessage: `Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>`,
              description: `Description shown when an Apple-managed subscription must be canceled through iOS`,
              values: { cancel: a },
            })),
            (t[4] = a),
            (t[5] = e)),
        e
      );
    }
    case `android`: {
      let e;
      return (
        t[6] === a
          ? (e = t[7])
          : ((e = (0, X.jsx)(R, {
              id: `settings.usage.cancelPlan.googlePlayDescription`,
              defaultMessage: `Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>`,
              description: `Description shown when a Google Play-managed subscription must be canceled through Android`,
              values: { cancel: a },
            })),
            (t[6] = a),
            (t[7] = e)),
        e
      );
    }
  }
}
function yn(e) {
  switch (e) {
    case `free`:
      return (0, X.jsx)(R, {
        id: `settings.usage.plan.free`,
        defaultMessage: `Free plan`,
        description: `Name of the Free plan in usage settings`,
      });
    case `go`:
      return (0, X.jsx)(R, {
        id: `settings.usage.plan.go`,
        defaultMessage: `Go plan`,
        description: `Name of the Go plan in usage settings`,
      });
    case `plus`:
      return (0, X.jsx)(R, {
        id: `settings.usage.plan.plus`,
        defaultMessage: `Plus plan`,
        description: `Name of the Plus plan in usage settings`,
      });
    case `pro`:
      return (0, X.jsx)(R, {
        id: `settings.usage.plan.pro`,
        defaultMessage: `Pro plan`,
        description: `Name of the Pro plan in usage settings`,
      });
  }
}
function bn(e, t) {
  A({ event: e, href: t, initiator: `open_in_browser_bridge` });
}
var xn,
  X,
  Sn = e(() => {
    ((xn = d()),
      c(),
      F(),
      b(),
      P(),
      Ae(),
      Ve(),
      i(),
      lt(),
      V(),
      ct(),
      Fe(),
      mt(),
      Ue(),
      (X = p()));
  });
function Cn() {
  let e = (0, Dn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          queryKey: On,
          queryFn: wn,
          staleTime: m.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (e[0] = t))
      : (t = e[0]),
    u(t)
  );
}
function wn() {
  return oe.safeGet(`/wham/usage/daily-token-usage-breakdown`);
}
function Tn(e) {
  let t = (0, Dn.c)(2),
    { enabled: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = {
          queryKey: kn,
          queryFn: En,
          enabled: n,
          staleTime: m.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          retry: !1,
        }),
        (t[0] = n),
        (t[1] = r)),
    u(r)
  );
}
function En() {
  return oe.safeGet(`/wham/usage/credit-usage-events`);
}
var Dn,
  On,
  kn,
  An = e(() => {
    ((Dn = d()),
      n(),
      f(),
      I(),
      (On = [`usage-settings`, `daily-usage-breakdown`]),
      (kn = [`usage-settings`, `credit-usage-events`]));
  });
function jn(e) {
  let t = (0, In.c)(30),
    { showCreditHistory: n } = e,
    r = Cn(),
    i;
  t[0] === n ? (i = t[1]) : ((i = { enabled: n }), (t[0] = n), (t[1] = i));
  let a = Tn(i),
    [o, s] = (0, Ln.useState)(0),
    c;
  t[2] === a.data?.data
    ? (c = t[3])
    : ((c = a.data?.data ?? []), (t[2] = a.data?.data), (t[3] = c));
  let l = c,
    u = Math.max(1, Math.ceil(l.length / Rn)),
    d = Math.min(o, u - 1),
    f;
  t[4] !== a.data?.data || t[5] !== d
    ? ((f = a.data?.data.slice(d * Rn, (d + 1) * Rn)),
      (t[4] = a.data?.data),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(K.Header, {
        title: (0, Z.jsx)(R, {
          id: `settings.usage.daily.title`,
          defaultMessage: `Daily usage`,
          description: `Title for daily usage in usage settings`,
        }),
        subtitle: (0, Z.jsx)(R, {
          id: `settings.usage.daily.subtitle`,
          defaultMessage: `Usage data is approximate and may be delayed by up to 6 hours`,
          description: `Description for daily usage in usage settings`,
        }),
      })),
      (t[7] = m))
    : (m = t[7]);
  let h = r.data?.data,
    g,
    _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(R, {
        id: `settings.usage.daily.empty`,
        defaultMessage: `No daily usage recorded yet`,
        description: `Empty state for daily usage`,
      })),
      (_ = (0, Z.jsx)(R, {
        id: `settings.usage.daily.error`,
        defaultMessage: `Could not load daily usage`,
        description: `Error state for daily usage`,
      })),
      (t[8] = g),
      (t[9] = _))
    : ((g = t[8]), (_ = t[9]));
  let v;
  t[10] === r
    ? (v = t[11])
    : ((v = () => {
        r.refetch();
      }),
      (t[10] = r),
      (t[11] = v));
  let y;
  t[12] === r.data?.units
    ? (y = t[13])
    : ((y = (e) =>
        zn.flatMap((t) => {
          let n = e.product_surface_usage_values[t];
          return n == null
            ? []
            : [
                (0, Z.jsx)(
                  z,
                  {
                    label: (0, Z.jsx)(Pn, { date: e.date }),
                    description: (0, Z.jsx)(R, { ...Bn[t] }),
                    control: (0, Z.jsx)(Fn, { units: r.data?.units, value: n }),
                  },
                  `${e.date}-${t}`,
                ),
              ];
        })),
      (t[12] = r.data?.units),
      (t[13] = y));
  let b;
  t[14] !== r.isError ||
  t[15] !== r.isLoading ||
  t[16] !== h ||
  t[17] !== v ||
  t[18] !== y
    ? ((b = (0, Z.jsxs)(K, {
        children: [
          m,
          (0, Z.jsx)(K.Content, {
            children: (0, Z.jsx)(q, {
              children: (0, Z.jsx)(Nn, {
                data: h,
                emptyMessage: g,
                errorMessage: _,
                isError: r.isError,
                isLoading: r.isLoading,
                onRetry: v,
                renderRow: y,
              }),
            }),
          }),
        ],
      })),
      (t[14] = r.isError),
      (t[15] = r.isLoading),
      (t[16] = h),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== l.length ||
  t[21] !== u ||
  t[22] !== a ||
  t[23] !== d ||
  t[24] !== n ||
  t[25] !== p
    ? ((x = n
        ? (0, Z.jsxs)(K, {
            children: [
              (0, Z.jsx)(K.Header, {
                title: (0, Z.jsx)(R, {
                  id: `settings.usage.creditHistory.title`,
                  defaultMessage: `Credit usage history`,
                  description: `Title for credit usage history`,
                }),
              }),
              (0, Z.jsx)(K.Content, {
                children: (0, Z.jsxs)(q, {
                  children: [
                    (0, Z.jsx)(Nn, {
                      data: p,
                      emptyMessage: (0, Z.jsx)(R, {
                        id: `settings.usage.creditHistory.empty`,
                        defaultMessage: `No credit usage recorded yet`,
                        description: `Empty state for credit usage history`,
                      }),
                      errorMessage: (0, Z.jsx)(R, {
                        id: `settings.usage.creditHistory.error`,
                        defaultMessage: `Could not load credit usage history`,
                        description: `Error state for credit usage history`,
                      }),
                      isError: a.isError,
                      isLoading: a.isLoading,
                      onRetry: () => {
                        a.refetch();
                      },
                      renderRow: Mn,
                    }),
                    l.length > Rn
                      ? (0, Z.jsx)(z, {
                          label: (0, Z.jsx)(R, {
                            id: `settings.usage.creditHistory.range`,
                            defaultMessage: `{from}-{to} of {total} usage events`,
                            description: `Pagination summary for credit usage history`,
                            values: {
                              from: d * Rn + 1,
                              to: Math.min((d + 1) * Rn, l.length),
                              total: l.length,
                            },
                          }),
                          control: (0, Z.jsxs)(`div`, {
                            className: `flex gap-2`,
                            children: [
                              (0, Z.jsx)(w, {
                                color: `secondary`,
                                disabled: d === 0,
                                size: `toolbar`,
                                onClick: () => {
                                  s(d - 1);
                                },
                                children: (0, Z.jsx)(R, {
                                  id: `settings.usage.creditHistory.previous`,
                                  defaultMessage: `Previous`,
                                  description: `Previous credit usage history page button`,
                                }),
                              }),
                              (0, Z.jsx)(w, {
                                color: `secondary`,
                                disabled: d === u - 1,
                                size: `toolbar`,
                                onClick: () => {
                                  s(d + 1);
                                },
                                children: (0, Z.jsx)(R, {
                                  id: `settings.usage.creditHistory.next`,
                                  defaultMessage: `Next`,
                                  description: `Next credit usage history page button`,
                                }),
                              }),
                            ],
                          }),
                        })
                      : null,
                  ],
                }),
              }),
            ],
          })
        : null),
      (t[20] = l.length),
      (t[21] = u),
      (t[22] = a),
      (t[23] = d),
      (t[24] = n),
      (t[25] = p),
      (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== b || t[28] !== x
      ? ((S = (0, Z.jsxs)(Z.Fragment, { children: [b, x] })),
        (t[27] = b),
        (t[28] = x),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function Mn(e, t) {
  return (0, Z.jsx)(
    z,
    {
      label: (0, Z.jsx)(Pn, { date: e.date }),
      description: (0, Z.jsx)(R, { ...Bn[e.product_surface] }),
      control: (0, Z.jsx)(Fn, { units: `credits`, value: e.credit_amount }),
    },
    `${e.usage_id ?? `usage`}-${e.date}-${t}`,
  );
}
function Nn(e) {
  let t = (0, In.c)(14),
    {
      data: n,
      emptyMessage: r,
      errorMessage: i,
      isError: a,
      isLoading: o,
      onRetry: s,
      renderRow: c,
    } = e;
  if (o && n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(z, {
            label: (0, Z.jsx)(R, {
              id: `settings.usage.history.loading`,
              defaultMessage: `Loading usage history…`,
              description: `Loading state for usage history`,
            }),
            control: null,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (a && n == null) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(R, {
          id: `settings.usage.history.retry`,
          defaultMessage: `Retry`,
          description: `Retry usage history button`,
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === s
      ? (n = t[3])
      : ((n = (0, Z.jsx)(w, {
          color: `secondary`,
          size: `toolbar`,
          onClick: s,
          children: e,
        })),
        (t[2] = s),
        (t[3] = n));
    let r;
    return (
      t[4] !== i || t[5] !== n
        ? ((r = (0, Z.jsx)(z, { label: i, control: n })),
          (t[4] = i),
          (t[5] = n),
          (t[6] = r))
        : (r = t[6]),
      r
    );
  }
  if (n == null || n.length === 0) {
    let e;
    return (
      t[7] === r
        ? (e = t[8])
        : ((e = (0, Z.jsx)(z, { label: r, control: null })),
          (t[7] = r),
          (t[8] = e)),
      e
    );
  }
  let l;
  t[9] !== n || t[10] !== c
    ? ((l = n.map(c)), (t[9] = n), (t[10] = c), (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] === l
      ? (u = t[13])
      : ((u = (0, Z.jsx)(Z.Fragment, { children: l })),
        (t[12] = l),
        (t[13] = u)),
    u
  );
}
function Pn(e) {
  let t = (0, In.c)(4),
    { date: n } = e,
    r = `${n}T00:00:00`,
    i;
  t[0] === r ? (i = t[1]) : ((i = new Date(r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, Z.jsx)(L, {
          value: i,
          month: `short`,
          day: `numeric`,
          year: `numeric`,
        })),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
function Fn(e) {
  let t = (0, In.c)(3),
    { units: n, value: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i =
          n === `credits`
            ? (0, Z.jsx)(R, {
                id: `settings.usage.credits.value`,
                defaultMessage: `{value, number} {value, plural, one {credit} other {credits}}`,
                description: `Credit value in usage settings`,
                values: { value: r },
              })
            : (0, Z.jsx)(se, {
                value: r / 100,
                style: `percent`,
                maximumFractionDigits: 0,
              })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var In,
  Ln,
  Z,
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    ((In = d()),
      (Ln = t(l(), 1)),
      F(),
      b(),
      An(),
      lt(),
      V(),
      ct(),
      (Z = p()),
      (Rn = 10),
      (zn = [
        `web`,
        `cli`,
        `vscode`,
        `jetbrains`,
        `github`,
        `github_code_review`,
        `slack`,
        `linear`,
        `sdk`,
        `exec`,
        `desktop_app`,
        `agent_identity`,
        `unknown`,
        `other`,
      ]),
      (Bn = ae({
        web: {
          id: `settings.usage.surface.web`,
          defaultMessage: `Cloud`,
          description: `Cloud usage surface`,
        },
        cli: {
          id: `settings.usage.surface.cli`,
          defaultMessage: `CLI`,
          description: `CLI usage surface`,
        },
        vscode: {
          id: `settings.usage.surface.vscode`,
          defaultMessage: `Extension`,
          description: `VS Code extension usage surface`,
        },
        jetbrains: {
          id: `settings.usage.surface.jetbrains`,
          defaultMessage: `JetBrains`,
          description: `JetBrains usage surface`,
        },
        github: {
          id: `settings.usage.surface.github`,
          defaultMessage: `GitHub`,
          description: `GitHub usage surface`,
        },
        github_code_review: {
          id: `settings.usage.surface.githubCodeReview`,
          defaultMessage: `GitHub code review`,
          description: `GitHub code review usage surface`,
        },
        slack: {
          id: `settings.usage.surface.slack`,
          defaultMessage: `Slack`,
          description: `Slack usage surface`,
        },
        linear: {
          id: `settings.usage.surface.linear`,
          defaultMessage: `Linear`,
          description: `Linear usage surface`,
        },
        sdk: {
          id: `settings.usage.surface.sdk`,
          defaultMessage: `SDK`,
          description: `SDK usage surface`,
        },
        exec: {
          id: `settings.usage.surface.exec`,
          defaultMessage: `Exec`,
          description: `Exec usage surface`,
        },
        desktop_app: {
          id: `settings.usage.surface.desktopApp`,
          defaultMessage: `Desktop app`,
          description: `Desktop app usage surface`,
        },
        agent_identity: {
          id: `settings.usage.surface.agentIdentity`,
          defaultMessage: `Access tokens`,
          description: `Access token usage surface`,
        },
        unknown: {
          id: `settings.usage.surface.unknown`,
          defaultMessage: `Uncategorized`,
          description: `Unknown usage surface`,
        },
        other: {
          id: `settings.usage.surface.other`,
          defaultMessage: `Other`,
          description: `Other usage surface`,
        },
      })));
  });
function Hn(e) {
  let t = (0, cr.c)(15),
    {
      rateLimitStatus: n,
      showEnterpriseMonthlyUsageLimit: r,
      canRequestEnterpriseMonthlyUsageLimit: i,
      workspaceRequestPolicy: a,
      workspaceMonthlyUsage: o,
      workspaceAdminRequests: s,
      isWorkspaceAdminRequestsLoading: c,
      isSavingWorkspaceAdminRequest: l,
      saveWorkspaceAdminRequest: u,
    } = e,
    d = r === void 0 ? !1 : r,
    f = i === void 0 ? !1 : i,
    p = o === void 0 ? null : o,
    m = s === void 0 ? null : s,
    h = c === void 0 ? !1 : c,
    g = l === void 0 ? !1 : l,
    _,
    v,
    y;
  if (
    t[0] !== f ||
    t[1] !== g ||
    t[2] !== h ||
    t[3] !== n ||
    t[4] !== u ||
    t[5] !== d ||
    t[6] !== m ||
    t[7] !== p ||
    t[8] !== a
  ) {
    y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = qe(n),
        t = Xn(e, null),
        r = d ? $n(p, n) : Qn({ rateLimitStatus: n, coreUsageLimitRows: t }),
        i = r == null ? t : t.filter(Gn),
        o = Xn(e, ur),
        s = d && f,
        c = a?.kind === `custom` ? a.request_url : null,
        l = d && r == null;
      if (r == null && i.length === 0 && o.length === 0 && !l && !s) {
        y = null;
        break bb0;
      }
      ((_ =
        r != null || i.length > 0 || l || s
          ? (0, Q.jsxs)(K, {
              children: [
                (0, Q.jsx)(K.Header, {
                  title: (0, Q.jsx)(R, {
                    id: `settings.usage.limits.title`,
                    defaultMessage: `General usage limits`,
                    description: `Title for the usage limits section in usage settings`,
                  }),
                }),
                (0, Q.jsxs)(K.Content, {
                  children: [
                    l
                      ? (0, Q.jsx)(Kn, {
                          currentMonthUsage: p?.current_month_usage ?? null,
                        })
                      : null,
                    r != null || i.length > 0
                      ? (0, Q.jsxs)(q, {
                          children: [
                            r == null
                              ? null
                              : (0, Q.jsx)(Jn, { usageLimit: r }, r.key),
                            i.map(Wn),
                          ],
                        })
                      : null,
                    s && a?.kind === `openai_native`
                      ? (0, Q.jsx)(qn, {
                          pendingRequest: er(m),
                          isLoading: h,
                          isSaving: g,
                          saveWorkspaceAdminRequest: u,
                        })
                      : null,
                    s && a?.kind === `custom`
                      ? (0, Q.jsx)(q, {
                          className: `mt-2`,
                          children: (0, Q.jsx)(z, {
                            label: null,
                            description:
                              a.instructions == null
                                ? null
                                : (0, Q.jsx)(`span`, {
                                    className: `leading-relaxed whitespace-pre-wrap`,
                                    children: a.instructions,
                                  }),
                            control:
                              c == null
                                ? null
                                : (0, Q.jsx)(w, {
                                    color: `primary`,
                                    size: `medium`,
                                    className: `rounded-full`,
                                    onClick: (e) => {
                                      A({
                                        event: e,
                                        href: c,
                                        initiator: `open_in_browser_bridge`,
                                      });
                                    },
                                    children: (0, Q.jsx)(R, {
                                      id: `settings.usage.limits.customRequestIncrease`,
                                      defaultMessage: `Request Increase`,
                                      description: `Member-facing button in Codex usage settings that opens the workspace's custom HTTPS monthly usage-limit-increase request page in the browser.`,
                                    }),
                                  }),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
        (v =
          o.length > 0
            ? (0, Q.jsxs)(K, {
                children: [
                  (0, Q.jsx)(K.Header, {
                    title: (0, Q.jsx)(R, {
                      id: `settings.usage.limits.spark.title`,
                      defaultMessage: `GPT-5.3-Codex-Spark usage limits`,
                      description: `Title for the GPT-5.3-Codex-Spark usage limits section`,
                    }),
                  }),
                  (0, Q.jsx)(K.Content, {
                    children: (0, Q.jsx)(q, { children: o.map(Un) }),
                  }),
                ],
              })
            : null));
    }
    ((t[0] = f),
      (t[1] = g),
      (t[2] = h),
      (t[3] = n),
      (t[4] = u),
      (t[5] = d),
      (t[6] = m),
      (t[7] = p),
      (t[8] = a),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y));
  } else ((_ = t[9]), (v = t[10]), (y = t[11]));
  if (y !== Symbol.for(`react.early_return_sentinel`)) return y;
  let b;
  return (
    t[12] !== _ || t[13] !== v
      ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [_, v] })),
        (t[12] = _),
        (t[13] = v),
        (t[14] = b))
      : (b = t[14]),
    b
  );
}
function Un(e) {
  return (0, Q.jsx)(Yn, { rateLimitRow: e }, e.key);
}
function Wn(e) {
  return (0, Q.jsx)(Yn, { rateLimitRow: e }, e.key);
}
function Gn(e) {
  return !rr(e);
}
function Kn(e) {
  let t = (0, cr.c)(6),
    { currentMonthUsage: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(Se, {
        "aria-hidden": !0,
        className: `icon-sm text-token-text-tertiary`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(q, {
        children: (0, Q.jsx)(z, {
          icon: r,
          label: (0, Q.jsx)(`span`, {
            className: `text-xs text-token-text-tertiary`,
            children: (0, Q.jsx)(R, {
              id: `settings.usage.limits.monthly.none`,
              defaultMessage: `Your administrator hasn’t set a usage limit`,
              description: `Informational message shown when the administrator has not set a monthly usage limit for the current user.`,
            }),
          }),
          control: null,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a =
        n == null
          ? null
          : (0, Q.jsx)(q, {
              children: (0, Q.jsxs)(`div`, {
                className: `p-3`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `text-xs text-token-text-tertiary`,
                    children: (0, Q.jsx)(R, {
                      id: `settings.usage.limits.monthly.currentUsage`,
                      defaultMessage: `Your usage this month`,
                      description: `Label for the current user's monthly credit usage when no monthly usage limit is set.`,
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `text-lg font-semibold text-token-text-primary tabular-nums`,
                    children: (0, Q.jsx)(R, {
                      id: `settings.usage.limits.monthly.currentUsageCredits`,
                      defaultMessage: `{credits, plural, one {# credit} other {# credits}}`,
                      description: `Credit amount used by the current user this month when no monthly usage limit is set.`,
                      values: { credits: Math.max(n, 0) },
                    }),
                  }),
                ],
              }),
            })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [i, a],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function qn(e) {
  let t = (0, cr.c)(28),
    {
      pendingRequest: n,
      isLoading: r,
      isSaving: i,
      saveWorkspaceAdminRequest: s,
    } = e,
    c = o(a),
    l = ce(),
    [u, d] = (0, lr.useState)(!1),
    [f, p] = (0, lr.useState)(n?.justification ?? ``),
    m;
  t[0] !== l || t[1] !== f || t[2] !== n || t[3] !== s || t[4] !== c
    ? ((m = () => {
        let e = f.trim();
        if (e.length === 0) {
          c.get(O).warning(
            l.formatMessage({
              id: `settings.usage.limits.requestMissingJustification`,
              defaultMessage: `Enter a justification to submit your request.`,
              description: `Toast shown when a workspace usage limit request is missing a justification`,
            }),
          );
          return;
        }
        s?.({ justification: e, requestId: n?.id })
          .then(() => {
            (c.get(O).success(
              l.formatMessage(
                n == null
                  ? {
                      id: `settings.usage.limits.requestSaved`,
                      defaultMessage: `Request submitted`,
                      description: `Toast shown when a workspace usage limit request is submitted`,
                    }
                  : {
                      id: `settings.usage.limits.requestUpdated`,
                      defaultMessage: `Request updated`,
                      description: `Toast shown when a workspace usage limit request is updated`,
                    },
              ),
            ),
              d(!1));
          })
          .catch(() => {
            c.get(O).danger(
              l.formatMessage({
                id: `settings.usage.limits.requestSaveError`,
                defaultMessage: `Could not save your request. Please try again.`,
                description: `Toast shown when a workspace usage limit request cannot be saved`,
              }),
            );
          });
      }),
      (t[0] = l),
      (t[1] = f),
      (t[2] = n),
      (t[3] = s),
      (t[4] = c),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] === n
    ? (g = t[7])
    : ((g =
        n == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `text-sm text-token-text-secondary`,
              children: (0, Q.jsx)(R, {
                id: `settings.usage.limits.requestPending`,
                defaultMessage: `Your request is pending admin review.`,
                description: `Status text for a pending workspace usage limit request`,
              }),
            })),
      (t[6] = n),
      (t[7] = g));
  let _ = s == null,
    v;
  t[8] === n?.justification
    ? (v = t[9])
    : ((v = () => {
        (p(n?.justification ?? ``), d(!0));
      }),
      (t[8] = n?.justification),
      (t[9] = v));
  let y;
  t[10] === n
    ? (y = t[11])
    : ((y =
        n == null
          ? (0, Q.jsx)(R, {
              id: `settings.usage.limits.requestIncrease`,
              defaultMessage: `Request limit increase`,
              description: `Button to request a workspace monthly usage limit increase`,
            })
          : (0, Q.jsx)(R, {
              id: `settings.usage.limits.updatePendingRequest`,
              defaultMessage: `Update pending request`,
              description: `Button to update an existing pending workspace usage limit request`,
            })),
      (t[10] = n),
      (t[11] = y));
  let b;
  t[12] !== r || t[13] !== _ || t[14] !== v || t[15] !== y
    ? ((b = (0, Q.jsx)(w, {
        color: `primary`,
        size: `medium`,
        className: `self-start rounded-full`,
        loading: r,
        disabled: _,
        onClick: v,
        children: y,
      })),
      (t[12] = r),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== h ||
  t[18] !== l ||
  t[19] !== u ||
  t[20] !== i ||
  t[21] !== f ||
  t[22] !== n
    ? ((x = u
        ? (0, Q.jsx)(q, {
            className: `mt-1 w-full`,
            children: (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-3 p-3`,
              children: [
                (0, Q.jsxs)(`label`, {
                  className: `flex flex-col gap-1.5 text-sm font-medium text-token-text-primary`,
                  children: [
                    (0, Q.jsx)(R, {
                      id: `settings.usage.limits.requestJustificationLabel`,
                      defaultMessage: `Justification`,
                      description: `Label for the workspace usage limit request justification`,
                    }),
                    (0, Q.jsx)(`textarea`, {
                      value: f,
                      rows: 3,
                      placeholder: l.formatMessage({
                        id: `settings.usage.limits.requestJustificationPlaceholder`,
                        defaultMessage: `Tell your admin why you need more credits.`,
                        description: `Placeholder for the workspace usage limit request justification`,
                      }),
                      className: `min-h-20 resize-none rounded-md border border-token-border bg-token-input-background px-3 py-2 text-sm leading-5 text-token-text-primary outline-none placeholder:text-token-text-tertiary focus:border-token-border-heavy`,
                      onChange: (e) => {
                        p(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex justify-end gap-2`,
                  children: [
                    (0, Q.jsx)(w, {
                      color: `secondary`,
                      size: `default`,
                      onClick: () => {
                        d(!1);
                      },
                      children: (0, Q.jsx)(R, {
                        id: `settings.usage.limits.requestCancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for the workspace usage limit request form`,
                      }),
                    }),
                    (0, Q.jsx)(w, {
                      color: `primary`,
                      size: `default`,
                      loading: i,
                      onClick: h,
                      children:
                        n == null
                          ? (0, Q.jsx)(R, {
                              id: `settings.usage.limits.requestSave`,
                              defaultMessage: `Submit request`,
                              description: `Submit button for a workspace usage limit request`,
                            })
                          : (0, Q.jsx)(R, {
                              id: `settings.usage.limits.requestUpdate`,
                              defaultMessage: `Update request`,
                              description: `Submit button for updating a pending workspace usage limit request`,
                            }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : null),
      (t[17] = h),
      (t[18] = l),
      (t[19] = u),
      (t[20] = i),
      (t[21] = f),
      (t[22] = n),
      (t[23] = x))
    : (x = t[23]);
  let S;
  return (
    t[24] !== g || t[25] !== b || t[26] !== x
      ? ((S = (0, Q.jsxs)(`div`, {
          className: `mt-2 flex flex-col items-start gap-2`,
          children: [g, b, x],
        })),
        (t[24] = g),
        (t[25] = b),
        (t[26] = x),
        (t[27] = S))
      : (S = t[27]),
    S
  );
}
function Jn(e) {
  let t = (0, cr.c)(46),
    { usageLimit: n } = e,
    r = ce(),
    i;
  t[0] === n.usedPercent
    ? (i = t[1])
    : ((i = sr(n.usedPercent)), (t[0] = n.usedPercent), (t[1] = i));
  let a = i,
    o,
    s,
    c,
    l,
    u,
    d,
    f;
  if (
    t[2] !== r ||
    t[3] !== n.limitCredits ||
    t[4] !== n.remainingPercent ||
    t[5] !== n.resetAt ||
    t[6] !== n.usedCredits
  ) {
    let e = sr(n.remainingPercent),
      i;
    if (t[14] !== n.resetAt) {
      let e = ge(n.resetAt);
      ((i = e == null ? null : G(e)), (t[14] = n.resetAt), (t[15] = i));
    } else i = t[15];
    let a = i,
      p;
    (t[16] !== r || t[17] !== n.limitCredits || t[18] !== n.usedCredits
      ? ((p =
          n.usedCredits == null || n.limitCredits == null
            ? null
            : r.formatMessage(
                {
                  id: `settings.usage.limits.monthly.creditsUsed`,
                  defaultMessage: `{used} of {limit} credits used`,
                  description: `Usage summary for monthly usage limit credits that have been used`,
                },
                { used: ar(r, n.usedCredits), limit: ar(r, n.limitCredits) },
              )),
        (t[16] = r),
        (t[17] = n.limitCredits),
        (t[18] = n.usedCredits),
        (t[19] = p))
      : (p = t[19]),
      (f = p));
    let m;
    (t[20] === a
      ? (m = t[21])
      : ((m =
          a == null
            ? null
            : (0, Q.jsx)(R, {
                id: `settings.usage.limits.window.resetAt`,
                defaultMessage: `Resets {time}`,
                description: `Description showing when a usage limit window resets`,
                values: { time: a },
              })),
        (t[20] = a),
        (t[21] = m)),
      (o = m),
      (d = `p-4`),
      (l = `flex items-center justify-between gap-4`),
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((u = (0, Q.jsx)(`div`, {
            className: `text-sm font-semibold text-token-text-primary`,
            children: (0, Q.jsx)(R, {
              id: `settings.usage.limits.monthly.label`,
              defaultMessage: `Monthly usage limit`,
              description: `Label for a monthly usage limit row`,
            }),
          })),
          (t[22] = u))
        : (u = t[22]),
      (s = `shrink-0 text-sm text-token-text-secondary tabular-nums`),
      (c = r.formatMessage(
        {
          id: `settings.usage.limits.monthly.progress.remaining`,
          defaultMessage: `{remaining}% remaining`,
          description: `Remaining percentage shown next to usage progress`,
        },
        { remaining: r.formatNumber(e, { maximumFractionDigits: 0 }) },
      )),
      (t[2] = r),
      (t[3] = n.limitCredits),
      (t[4] = n.remainingPercent),
      (t[5] = n.resetAt),
      (t[6] = n.usedCredits),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f));
  } else
    ((o = t[7]),
      (s = t[8]),
      (c = t[9]),
      (l = t[10]),
      (u = t[11]),
      (d = t[12]),
      (f = t[13]));
  let p;
  t[23] !== s || t[24] !== c
    ? ((p = (0, Q.jsx)(`div`, { className: s, children: c })),
      (t[23] = s),
      (t[24] = c),
      (t[25] = p))
    : (p = t[25]);
  let m;
  t[26] !== l || t[27] !== u || t[28] !== p
    ? ((m = (0, Q.jsxs)(`div`, { className: l, children: [u, p] })),
      (t[26] = l),
      (t[27] = u),
      (t[28] = p),
      (t[29] = m))
    : (m = t[29]);
  let h;
  t[30] === r
    ? (h = t[31])
    : ((h = r.formatMessage({
        id: `settings.usage.limits.monthly.progress.ariaLabel`,
        defaultMessage: `Monthly usage used`,
        description: `Aria label for monthly usage limit progress`,
      })),
      (t[30] = r),
      (t[31] = h));
  let g = `${a}%`,
    _;
  t[32] === g
    ? (_ = t[33])
    : ((_ = (0, Q.jsx)(`div`, {
        className: `bg-[#0285FF]`,
        style: { width: g },
      })),
      (t[32] = g),
      (t[33] = _));
  let v;
  t[34] !== _ || t[35] !== h || t[36] !== a
    ? ((v = (0, Q.jsx)(`div`, {
        role: `progressbar`,
        "aria-label": h,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": a,
        className: `mt-4 flex h-2 overflow-hidden rounded-full bg-[#DFDFDF]`,
        children: _,
      })),
      (t[34] = _),
      (t[35] = h),
      (t[36] = a),
      (t[37] = v))
    : (v = t[37]);
  let y;
  t[38] !== o || t[39] !== f
    ? ((y =
        f != null || o != null
          ? (0, Q.jsxs)(`div`, {
              className: `mt-5 flex items-center justify-between gap-3`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `text-xs text-token-text-tertiary`,
                  children: f,
                }),
                (0, Q.jsx)(`div`, {
                  className: `shrink-0 text-end text-xs text-token-text-tertiary`,
                  children: o,
                }),
              ],
            })
          : null),
      (t[38] = o),
      (t[39] = f),
      (t[40] = y))
    : (y = t[40]);
  let b;
  return (
    t[41] !== v || t[42] !== y || t[43] !== d || t[44] !== m
      ? ((b = (0, Q.jsxs)(`div`, { className: d, children: [m, v, y] })),
        (t[41] = v),
        (t[42] = y),
        (t[43] = d),
        (t[44] = m),
        (t[45] = b))
      : (b = t[45]),
    b
  );
}
function Yn(e) {
  let t = (0, cr.c)(14),
    { rateLimitRow: n } = e,
    r;
  if (t[0] !== n.bucket.resetsAt) {
    let e = ge(n.bucket.resetsAt ?? null);
    ((r = e == null ? null : G(e)), (t[0] = n.bucket.resetsAt), (t[1] = r));
  } else r = t[1];
  let i = r,
    a;
  t[2] === i
    ? (a = t[3])
    : ((a =
        i == null
          ? null
          : (0, Q.jsx)(R, {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: { time: i },
            })),
      (t[2] = i),
      (t[3] = a));
  let o = a,
    s = n.bucket.usedPercent ?? 0,
    c;
  t[4] === s ? (c = t[5]) : ((c = pe(s)), (t[4] = s), (t[5] = c));
  let l = c,
    u;
  t[6] === n ? (u = t[7]) : ((u = Zn(n)), (t[6] = n), (t[7] = u));
  let d;
  t[8] === l
    ? (d = t[9])
    : ((d = (0, Q.jsx)(or, { remainingPercent: l })), (t[8] = l), (t[9] = d));
  let f;
  return (
    t[10] !== o || t[11] !== u || t[12] !== d
      ? ((f = (0, Q.jsx)(z, {
          className: `gap-6`,
          label: u,
          description: o,
          control: d,
        })),
        (t[10] = o),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function Xn(e, t) {
  let n = t == null ? (e.find((e) => e.limitName == null) ?? null) : We(e, t);
  return n == null ? [] : be({ entry: n, keyPrefix: t ?? `core` });
}
function Zn(e) {
  let t = e.bucket.windowDurationMins ?? 0;
  return rr(e)
    ? (0, Q.jsx)(R, {
        id: `settings.usage.limits.monthly.label`,
        defaultMessage: `Monthly usage limit`,
        description: `Label for a monthly usage limit row`,
      })
    : ir(t, dr)
      ? (0, Q.jsx)(R, {
          id: `settings.usage.limits.fiveHour.label`,
          defaultMessage: `5 hour usage limit`,
          description: `Label for the 5-hour usage limit row`,
        })
      : ir(t, 10080)
        ? (0, Q.jsx)(R, {
            id: `settings.usage.limits.week.label`,
            defaultMessage: `Weekly usage limit`,
            description: `Label for a weekly usage limit row`,
          })
        : ir(t, 1440)
          ? (0, Q.jsx)(R, {
              id: `settings.usage.limits.day.label`,
              defaultMessage: `Daily usage limit`,
              description: `Label for a daily usage limit row`,
            })
          : (0, Q.jsx)(R, {
              id: `settings.usage.limits.genericWindow.label`,
              defaultMessage: `Usage limit`,
              description: `Generic label for a usage limit row`,
            });
}
function Qn({ rateLimitStatus: e, coreUsageLimitRows: t }) {
  let n = e?.spend_control?.individual_limit ?? null;
  if (n != null)
    return {
      key: `spend-control-monthly`,
      usedPercent: n.used_percent,
      remainingPercent: n.remaining_percent,
      resetAt: n.reset_at,
      usedCredits: n.used,
      limitCredits: n.limit,
    };
  let r = t.find(rr) ?? null;
  if (r == null) return null;
  let i = r.bucket.usedPercent ?? 0;
  return {
    key: r.key,
    usedPercent: i,
    remainingPercent: pe(i),
    resetAt: r.bucket.resetsAt ?? null,
    usedCredits: null,
    limitCredits: null,
  };
}
function $n(e, t) {
  let n = W(e);
  return n == null
    ? null
    : {
        key: `workspace-monthly`,
        usedPercent: n.usedPercent,
        remainingPercent: n.remainingPercent,
        resetAt:
          Number(t?.spend_control?.individual_limit?.limit) === n.limit
            ? (t?.spend_control?.individual_limit?.reset_at ?? null)
            : null,
        usedCredits: String(n.used),
        limitCredits: String(n.limit),
      };
}
function er(e) {
  return e?.items.find((e) => e.status === `pending` && tr(e) != null) ?? null;
}
function tr(e) {
  return e.payloads.find(nr) ?? null;
}
function nr(e) {
  return (
    e.kind === `spend_limit` &&
    e.target.source === pr &&
    e.target.source_id === mr
  );
}
function rr(e) {
  return ir(e.bucket.windowDurationMins ?? 0, fr);
}
function ir(e, t) {
  return !Number.isFinite(e) || e <= 0 ? !1 : Math.abs(e - t) <= t * 0.05;
}
function ar(e, t) {
  let n = Number(t);
  return Number.isFinite(n)
    ? e.formatNumber(Math.max(n, 0), {
        minimumFractionDigits: 0,
        maximumFractionDigits: n >= 10 ? 0 : 2,
      })
    : t;
}
function or(e) {
  let t = (0, cr.c)(16),
    { remainingPercent: n } = e,
    r = ce(),
    i;
  t[0] === n ? (i = t[1]) : ((i = sr(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === r
    ? (o = t[3])
    : ((o = r.formatMessage({
        id: `settings.usage.limits.progress.ariaLabel`,
        defaultMessage: `Usage remaining`,
        description: `Aria label for usage remaining progress bars`,
      })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = M(
        `h-1.5 w-24 overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-token-foreground/10 [&::-webkit-progress-value]:bg-token-foreground [&::-moz-progress-bar]:bg-token-foreground`,
        `[&::-ms-fill]:bg-token-foreground`,
      )),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] !== a || t[6] !== o
    ? ((c = (0, Q.jsx)(`progress`, {
        max: 100,
        value: a,
        "aria-label": o,
        className: s,
      })),
      (t[5] = a),
      (t[6] = o),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] !== a || t[9] !== r
    ? ((l = r.formatMessage(
        {
          id: `settings.usage.limits.progress.remaining`,
          defaultMessage: `{remaining}% left`,
          description: `Remaining percentage shown next to usage progress`,
        },
        { remaining: r.formatNumber(a, { maximumFractionDigits: 0 }) },
      )),
      (t[8] = a),
      (t[9] = r),
      (t[10] = l))
    : (l = t[10]);
  let u;
  t[11] === l
    ? (u = t[12])
    : ((u = (0, Q.jsx)(`span`, {
        className: `w-[72px] text-right text-sm text-token-text-secondary tabular-nums`,
        children: l,
      })),
      (t[11] = l),
      (t[12] = u));
  let d;
  return (
    t[13] !== c || t[14] !== u
      ? ((d = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [c, u],
        })),
        (t[13] = c),
        (t[14] = u),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
function sr(e) {
  return Number.isFinite(e) ? Math.max(0, Math.min(100, e)) : 0;
}
var cr,
  lr,
  Q,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr = e(() => {
    ((cr = d()),
      k(),
      c(),
      (lr = t(l(), 1)),
      F(),
      b(),
      P(),
      N(),
      xe(),
      me(),
      i(),
      lt(),
      V(),
      ct(),
      ve(),
      H(),
      Ye(),
      (Q = p()),
      (ur = `gpt-5.3-codex-spark`),
      (dr = 300),
      (fr = 30 * B),
      (pr = `account_user_spend_controls`),
      (mr = `account_user.credit_limits`));
  });
function gr() {
  let e = (0, br.c)(63),
    {
      canManageCreditSettings: t,
      isUsageSettingsVisible: n,
      isUsageSettingsAccessLoading: r,
      plan: i,
    } = we(),
    a;
  e[0] === i ? (a = e[1]) : ((a = ie(i)), (e[0] = i), (e[1] = a));
  let o = a,
    s = o && n && !r,
    { data: c, isLoading: l, isError: u, refetch: d } = h(fe),
    f;
  e[2] === t ? (f = e[3]) : ((f = { enabled: t }), (e[2] = t), (e[3] = f));
  let { data: p, isLoading: m, isError: g, refetch: _ } = Xe(f),
    v;
  e[4] === s ? (v = e[5]) : ((v = { enabled: s }), (e[4] = s), (e[5] = v));
  let { data: y, isLoading: b, isError: x, refetch: S } = Ze(v),
    C =
      y?.effective_monthly_limit?.limit != null &&
      y.effective_monthly_limit.limit >= 0 &&
      y.effective_monthly_limit.enforcement_mode === `HARD_CAP`,
    T = s && C,
    E;
  e[6] === T ? (E = e[7]) : ((E = { enabled: T }), (e[6] = T), (e[7] = E));
  let { data: D, refetch: O } = it(E),
    k = D?.kind === `openai_native`,
    A = s && C && k,
    M;
  e[8] === A ? (M = e[9]) : ((M = { enabled: A }), (e[8] = A), (e[9] = M));
  let { data: N, isLoading: P, isError: ee, refetch: te } = Ge(M),
    ne = nt(),
    {
      enableAutoTopUpMutation: re,
      updateAutoTopUpMutation: ae,
      disableAutoTopUpMutation: F,
    } = tt(),
    I;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(ye, { slug: `usage` })), (e[10] = I))
    : (I = e[10]);
  let oe = I;
  if (!n && !r) return null;
  let L = !n && r,
    se = o
      ? (b && y == null) || (C && k && P && N == null)
      : (t && m && p == null) || (l && c == null),
    ce = o
      ? (x && y == null) || (C && k && ee && N == null)
      : (t && g && p == null) || (u && c == null),
    le;
  e[11] !== t ||
  e[12] !== C ||
  e[13] !== o ||
  e[14] !== _ ||
  e[15] !== d ||
  e[16] !== te ||
  e[17] !== S ||
  e[18] !== O ||
  e[19] !== k
    ? ((le = () => {
        if (!o) {
          if (t) {
            Promise.all([_(), d()]);
            return;
          }
          d();
          return;
        }
        (S(), C && (O(), k && te()));
      }),
      (e[11] = t),
      (e[12] = C),
      (e[13] = o),
      (e[14] = _),
      (e[15] = d),
      (e[16] = te),
      (e[17] = S),
      (e[18] = O),
      (e[19] = k),
      (e[20] = le))
    : (le = e[20]);
  let ue = le;
  if (L || ce || se) {
    let t,
      n = null;
    if (L) {
      let n;
      (e[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(R, {
            id: `settings.usage.access.loading`,
            defaultMessage: `Checking subscription…`,
            description: `Loading label while checking whether Usage settings should be visible`,
          })),
          (e[21] = n))
        : (n = e[21]),
        (t = n));
    } else if (ce) {
      let r;
      (e[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, $.jsx)(R, {
            id: `settings.usage.load.error`,
            defaultMessage: `Could not load usage settings.`,
            description: `Error label shown when usage settings cannot be fetched`,
          })),
          (e[22] = r))
        : (r = e[22]),
        (t = r));
      let i;
      e[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(R, {
            id: `settings.usage.load.retry`,
            defaultMessage: `Retry`,
            description: `Retry button for usage settings fetch errors`,
          })),
          (e[23] = i))
        : (i = e[23]);
      let a;
      (e[24] === ue
        ? (a = e[25])
        : ((a = (0, $.jsx)(w, {
            color: `secondary`,
            size: `toolbar`,
            onClick: ue,
            children: i,
          })),
          (e[24] = ue),
          (e[25] = a)),
        (n = a));
    } else {
      let n;
      (e[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(R, {
            id: `settings.usage.load.loading`,
            defaultMessage: `Loading usage settings…`,
            description: `Loading label while usage settings are being fetched`,
          })),
          (e[26] = n))
        : (n = e[26]),
        (t = n));
    }
    let r;
    return (
      e[27] !== n || e[28] !== t
        ? ((r = (0, $.jsx)(yr, { title: oe, rowLabel: t, rowControl: n })),
          (e[27] = n),
          (e[28] = t),
          (e[29] = r))
        : (r = e[29]),
      r
    );
  }
  if (t && p == null) return null;
  if (o) {
    let t, n;
    e[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(R, {
          id: `settings.usage.enterprise.title`,
          defaultMessage: `Usage limits`,
          description: `Title for enterprise usage limits settings`,
        })),
        (n = (0, $.jsx)(R, {
          id: `settings.usage.enterprise.subtitle`,
          defaultMessage: `See your usage within the limits defined by your administrator.`,
          description: `Subtitle for enterprise usage limits settings`,
        })),
        (e[30] = t),
        (e[31] = n))
      : ((t = e[30]), (n = e[31]));
    let r = c ?? null,
      i = y ?? null,
      a = N ?? null,
      o;
    return (
      e[32] !== C ||
      e[33] !== P ||
      e[34] !== r ||
      e[35] !== i ||
      e[36] !== a ||
      e[37] !== ne.isPending ||
      e[38] !== ne.mutateAsync ||
      e[39] !== D
        ? ((o = (0, $.jsx)(dt, {
            title: t,
            subtitle: n,
            subtitleClassName: `whitespace-normal`,
            titleStackClassName: `gap-2 pb-1`,
            children: (0, $.jsx)(Hn, {
              rateLimitStatus: r,
              showEnterpriseMonthlyUsageLimit: !0,
              canRequestEnterpriseMonthlyUsageLimit: C,
              workspaceRequestPolicy: D,
              workspaceMonthlyUsage: i,
              workspaceAdminRequests: a,
              isWorkspaceAdminRequestsLoading: P,
              isSavingWorkspaceAdminRequest: ne.isPending,
              saveWorkspaceAdminRequest: ne.mutateAsync,
            }),
          })),
          (e[32] = C),
          (e[33] = P),
          (e[34] = r),
          (e[35] = i),
          (e[36] = a),
          (e[37] = ne.isPending),
          (e[38] = ne.mutateAsync),
          (e[39] = D),
          (e[40] = o))
        : (o = e[40]),
      o
    );
  }
  let de;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(_r, {})), (e[41] = de))
    : (de = e[41]);
  let z;
  e[42] === i
    ? (z = e[43])
    : ((z = (0, $.jsx)(gn, { plan: i })), (e[42] = i), (e[43] = z));
  let B;
  e[44] !== p ||
  e[45] !== t ||
  e[46] !== F ||
  e[47] !== re ||
  e[48] !== c?.credits ||
  e[49] !== ae
    ? ((B =
        t && p != null
          ? (0, $.jsx)(Tt, {
              serverState: p,
              creditDetails: c?.credits ?? null,
              enableAutoTopUpMutation: re,
              updateAutoTopUpMutation: ae,
              disableAutoTopUpMutation: F,
            })
          : null),
      (e[44] = p),
      (e[45] = t),
      (e[46] = F),
      (e[47] = re),
      (e[48] = c?.credits),
      (e[49] = ae),
      (e[50] = B))
    : (B = e[50]);
  let V = c ?? null,
    H;
  e[51] === V
    ? (H = e[52])
    : ((H = (0, $.jsx)(Hn, { rateLimitStatus: V })), (e[51] = V), (e[52] = H));
  let U;
  e[53] === t
    ? (U = e[54])
    : ((U = (0, $.jsx)(j, {
        browser: !0,
        children: (0, $.jsx)(jn, { showCreditHistory: t }),
      })),
      (e[53] = t),
      (e[54] = U));
  let W;
  e[55] === i
    ? (W = e[56])
    : ((W = (0, $.jsx)(_n, { plan: i })), (e[55] = i), (e[56] = W));
  let G;
  return (
    e[57] !== B || e[58] !== H || e[59] !== U || e[60] !== W || e[61] !== z
      ? ((G = (0, $.jsxs)(dt, {
          title: oe,
          subtitle: de,
          subtitleClassName: `whitespace-normal`,
          titleStackClassName: `gap-2 pb-1`,
          children: [z, B, H, U, W],
        })),
        (e[57] = B),
        (e[58] = H),
        (e[59] = U),
        (e[60] = W),
        (e[61] = z),
        (e[62] = G))
      : (G = e[62]),
    G
  );
}
function _r() {
  let e = (0, br.c)(1),
    t = vr,
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(R, {
          id: `settings.usage.subtitle`,
          defaultMessage: `To view invoices, change your payment method, and take other actions, visit <settings>settings</settings> on Web`,
          description: `Subtitle pointing users to ChatGPT billing settings for broader billing actions`,
          values: {
            settings: (e) =>
              (0, $.jsx)(`a`, {
                className: `inline-flex cursor-interaction text-token-text-link-foreground`,
                href: Le,
                target: `_blank`,
                rel: `noreferrer`,
                onClick: t,
                children: e,
              }),
          },
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function vr(e) {
  A({ event: e, href: Le, initiator: `open_in_browser_bridge` });
}
function yr(e) {
  let t = (0, br.c)(6),
    { title: n, rowLabel: r, rowControl: i } = e,
    a;
  t[0] !== i || t[1] !== r
    ? ((a = (0, $.jsx)(K, {
        children: (0, $.jsx)(K.Content, {
          children: (0, $.jsx)(q, {
            children: (0, $.jsx)(z, {
              className: `gap-6`,
              label: r,
              control: i,
            }),
          }),
        }),
      })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== a || t[4] !== n
      ? ((o = (0, $.jsx)(dt, { title: n, children: a })),
        (t[3] = a),
        (t[4] = n),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var br, $;
e(() => {
  ((br = d()),
    c(),
    F(),
    b(),
    P(),
    ee(),
    ue(),
    Ve(),
    ut(),
    lt(),
    V(),
    _e(),
    ct(),
    Ce(),
    C(),
    hn(),
    Fe(),
    Sn(),
    Vn(),
    hr(),
    ($ = p()));
})();
export { gr as UsageSettings };
//# sourceMappingURL=usage-settings-D_gEzTFv.js.map
