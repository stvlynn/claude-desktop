import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as r,
  Dp as i,
  Ep as a,
  Nn as o,
  Om as s,
  Pn as c,
  hh as l,
  is as u,
  mh as d,
  no as f,
  ns as p,
  oo as m,
  rs as h,
  to as g,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as _,
  Vy as v,
  zy as y,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  $s as b,
  Ks as x,
  Ys as S,
  Zs as C,
  ec as w,
  qs as T,
  tc as E,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  Mn as D,
  Nn as O,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  g as k,
  h as A,
  l as j,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-BWbJojtu.js";
function M(e) {
  let t = (0, N.c)(5),
    { className: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = d(`last:hidden`, n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, P.jsx)(y, {
        id: `codex.ui.bulletSeparator`,
        defaultMessage: `·`,
        description: `Middle dot separator used between inline items`,
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, P.jsx)(`span`, {
          "aria-hidden": !0,
          className: r,
          children: i,
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
var N,
  P,
  F = e(() => {
    ((N = t()), l(), _(), (P = n()));
  });
function I(e) {
  let t = (0, L.c)(6),
    { minutes: n, variant: r } = e,
    i = v(),
    a;
  t[0] !== i || t[1] !== n || t[2] !== r
    ? ((a = T({ intl: i, minutes: n, variant: r })),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, R.jsx)(R.Fragment, { children: a })), (t[4] = a), (t[5] = o)),
    o
  );
}
var L,
  R,
  z = e(() => {
    ((L = t()), _(), w(), (R = n()));
  });
function B(e) {
  let t = (0, K.c)(45),
    {
      rateLimits: n,
      activeLimitName: i,
      planType: s,
      suppressUpsell: c,
      selectedModel: l,
      availableRateLimitResetCount: u,
      onRateLimitResetClick: p,
      onPlanUpgradeClick: m,
      planUpgradeOpensNativeSurface: h,
      onRequestLimitIncreaseClick: _,
      isLoading: v,
      showLearnMore: b,
      layout: S,
    } = e,
    C = u === void 0 ? 0 : u,
    w = v === void 0 ? !1 : v,
    T = b === void 0 ? !0 : b,
    E = S === void 0 ? `default` : S;
  if (!w && n.length === 0 && C === 0) return null;
  let O, A, M, N, P, F, I, L, R, z;
  if (t[0] !== i || t[1] !== E || t[2] !== n || t[3] !== l || t[4] !== c) {
    let e = j(n, { activeLimitName: i, selectedModel: l }),
      r;
    (t[15] !== i || t[16] !== c
      ? ((r = c ?? !k(i)), (t[15] = i), (t[16] = c), (t[17] = r))
      : (r = t[17]),
      (N = r),
      (M = E === `compact`),
      (A = g),
      (O = f.Item),
      (R = D),
      (z = a),
      (P = `left`),
      (F = `flex items-center gap-1`),
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((I = (0, q.jsx)(y, {
            id: `composer.mode.rateLimit.heading`,
            defaultMessage: `Usage remaining`,
            description: `Rate limit summary heading`,
          })),
          (t[18] = I))
        : (I = t[18]),
      (L =
        e &&
        (0, q.jsx)(`span`, {
          className: `whitespace-nowrap text-token-input-placeholder-foreground opacity-60`,
          children: x(e.remainingPercent),
        })),
      (t[0] = i),
      (t[1] = E),
      (t[2] = n),
      (t[3] = l),
      (t[4] = c),
      (t[5] = O),
      (t[6] = A),
      (t[7] = M),
      (t[8] = N),
      (t[9] = P),
      (t[10] = F),
      (t[11] = I),
      (t[12] = L),
      (t[13] = R),
      (t[14] = z));
  } else
    ((O = t[5]),
      (A = t[6]),
      (M = t[7]),
      (N = t[8]),
      (P = t[9]),
      (F = t[10]),
      (I = t[11]),
      (L = t[12]),
      (R = t[13]),
      (z = t[14]));
  let B;
  t[19] !== F || t[20] !== I || t[21] !== L
    ? ((B = (0, q.jsxs)(`span`, { className: F, children: [I, L] })),
      (t[19] = F),
      (t[20] = I),
      (t[21] = L),
      (t[22] = B))
    : (B = t[22]);
  let U;
  t[23] !== O || t[24] !== P || t[25] !== B || t[26] !== R || t[27] !== z
    ? ((U = (0, q.jsx)(O, {
        LeftIcon: R,
        RightIcon: z,
        tooltipSide: P,
        children: B,
      })),
      (t[23] = O),
      (t[24] = P),
      (t[25] = B),
      (t[26] = R),
      (t[27] = z),
      (t[28] = U))
    : (U = t[28]);
  let W;
  t[29] !== C ||
  t[30] !== M ||
  t[31] !== w ||
  t[32] !== m ||
  t[33] !== p ||
  t[34] !== _ ||
  t[35] !== s ||
  t[36] !== h ||
  t[37] !== n ||
  t[38] !== N ||
  t[39] !== T
    ? ((W = (0, q.jsx)(`div`, {
        className: `flex flex-col text-sm`,
        children: w
          ? (0, q.jsx)(f.Item, {
              LeftIcon: r,
              className: d(
                M &&
                  `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
              ),
              disabled: !0,
              children: (0, q.jsx)(y, {
                id: `composer.mode.rateLimit.loading`,
                defaultMessage: `Loading usage…`,
                description: `Loading state for the rate limit summary submenu`,
              }),
            })
          : (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`div`, {
                  className: d(
                    `grid items-center gap-y-1.5 py-1`,
                    M
                      ? `grid-cols-[minmax(0,1fr)_auto] gap-x-3`
                      : `grid-cols-[auto_1fr] gap-x-16 px-[var(--padding-row-x)]`,
                    M &&
                      `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
                  ),
                  children: n.map((e, t) => {
                    let n = k(e.limitName) ? null : e.limitName;
                    return (0, q.jsx)(
                      H,
                      { rateLimit: e.snapshot, limitName: n, compact: M },
                      `${e.limitName ?? `default`}-${t}`,
                    );
                  }),
                }),
                !N &&
                  (0, q.jsx)(G, {
                    planType: s,
                    className: d(
                      M &&
                        `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
                    ),
                    onPlanUpgradeClick: m,
                    opensNativeSurface: h,
                    onRequestLimitIncreaseClick: _,
                  }),
                C > 0
                  ? (0, q.jsx)(f.Item, {
                      RightIcon: a,
                      className: d(
                        M &&
                          `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
                      ),
                      onClick: p,
                      children: (0, q.jsx)(y, {
                        id: `composer.mode.rateLimit.resetsAvailable`,
                        defaultMessage: `{availableRateLimitResetCount, plural, one {# reset available} other {# resets available}}`,
                        description: `Menu item for opening available rate limit resets`,
                        values: { availableRateLimitResetCount: C },
                      }),
                    })
                  : null,
                T &&
                  (0, q.jsx)(f.Item, {
                    rightIcon: (0, q.jsx)(o, {
                      href: Y,
                      className: d(J, M && `text-token-description-foreground`),
                    }),
                    className: d(
                      M &&
                        `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
                    ),
                    href: Y,
                    onClick: V,
                    children: (0, q.jsx)(`span`, {
                      className: d(
                        M
                          ? `text-token-foreground`
                          : `text-token-description-foreground`,
                      ),
                      children: (0, q.jsx)(y, {
                        id: `composer.mode.local.learnMore`,
                        defaultMessage: `Learn more`,
                        description: `Learn more about rate limits`,
                      }),
                    }),
                  }),
              ],
            }),
      })),
      (t[29] = C),
      (t[30] = M),
      (t[31] = w),
      (t[32] = m),
      (t[33] = p),
      (t[34] = _),
      (t[35] = s),
      (t[36] = h),
      (t[37] = n),
      (t[38] = N),
      (t[39] = T),
      (t[40] = W))
    : (W = t[40]);
  let X;
  return (
    t[41] !== A || t[42] !== U || t[43] !== W
      ? ((X = (0, q.jsx)(A, { trigger: U, children: W })),
        (t[41] = A),
        (t[42] = U),
        (t[43] = W),
        (t[44] = X))
      : (X = t[44]),
    X
  );
}
function V(e) {
  u({ event: e, href: Y, initiator: `open_in_browser_bridge` });
}
function H(e) {
  let t = (0, K.c)(19),
    { rateLimit: n, limitName: r, compact: i } = e,
    a = n?.primary,
    o;
  t[0] === a ? (o = t[1]) : ((o = b(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c = n?.secondary,
    l;
  t[2] === c ? (l = t[3]) : ((l = b(c)), (t[2] = c), (t[3] = l));
  let u = l;
  if (!s && !u) return null;
  let f;
  t[4] !== i || t[5] !== r
    ? ((f =
        r != null &&
        (0, q.jsx)(`span`, {
          title: W(r),
          className: d(
            `text-token-foreground col-span-2 min-w-0 truncate font-medium`,
            i ? `mt-1` : `mt-2`,
          ),
          children: (0, q.jsx)(y, {
            id: `composer.mode.rateLimit.modelSectionLabel`,
            defaultMessage: `{modelName} limit:`,
            description: `Section label shown before model-specific rate limit windows in summaries`,
            values: { modelName: W(r) },
          }),
        })),
      (t[4] = i),
      (t[5] = r),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== i || t[8] !== n || t[9] !== s
    ? ((p = s && (0, q.jsx)(U, { bucket: n.primary ?? null, compact: i })),
      (t[7] = i),
      (t[8] = n),
      (t[9] = s),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== i || t[12] !== n || t[13] !== u
    ? ((m = u && (0, q.jsx)(U, { bucket: n.secondary ?? null, compact: i })),
      (t[11] = i),
      (t[12] = n),
      (t[13] = u),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== f || t[16] !== p || t[17] !== m
      ? ((h = (0, q.jsxs)(q.Fragment, { children: [f, p, m] })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function U(e) {
  let t = (0, K.c)(35),
    { bucket: n, compact: r } = e;
  if (!b(n)) return null;
  let i;
  if (t[0] !== n.resetsAt) {
    let e = E(n.resetsAt ?? null);
    ((i = e == null ? null : S(e)), (t[0] = n.resetsAt), (t[1] = i));
  } else i = t[1];
  let a = i,
    o,
    s,
    c,
    l;
  if (t[2] !== n.usedPercent || t[3] !== n.windowDurationMins || t[4] !== r) {
    let e = C(n.usedPercent ?? 0),
      i = r && `flex min-w-0 items-center gap-1`,
      a;
    t[9] === i
      ? (a = t[10])
      : ((a = d(`text-token-foreground font-medium`, i)),
        (t[9] = i),
        (t[10] = a));
    let u = r && `shrink-0`,
      f;
    t[11] === u ? (f = t[12]) : ((f = d(u)), (t[11] = u), (t[12] = f));
    let p = n.windowDurationMins ?? null,
      m;
    t[13] === p
      ? (m = t[14])
      : ((m = (0, q.jsx)(I, { minutes: p })), (t[13] = p), (t[14] = m));
    let h;
    (t[15] !== m || t[16] !== f
      ? ((h = (0, q.jsx)(`span`, { className: f, children: m })),
        (t[15] = m),
        (t[16] = f),
        (t[17] = h))
      : (h = t[17]),
      t[18] !== h || t[19] !== a
        ? ((l = (0, q.jsx)(`span`, { className: a, children: h })),
          (t[18] = h),
          (t[19] = a),
          (t[20] = l))
        : (l = t[20]));
    let g = r
      ? `min-w-0 items-center justify-end`
      : `w-full min-w-0 items-center justify-end overflow-hidden`;
    (t[21] === g
      ? (c = t[22])
      : ((c = d(`text-token-description-foreground flex gap-1 text-end`, g)),
        (t[21] = g),
        (t[22] = c)),
      (o = `shrink-0`),
      (s = x(e)),
      (t[2] = n.usedPercent),
      (t[3] = n.windowDurationMins),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  } else ((o = t[5]), (s = t[6]), (c = t[7]), (l = t[8]));
  let u;
  t[23] !== o || t[24] !== s
    ? ((u = (0, q.jsx)(`span`, { className: o, children: s })),
      (t[23] = o),
      (t[24] = s),
      (t[25] = u))
    : (u = t[25]);
  let f;
  t[26] === a
    ? (f = t[27])
    : ((f =
        a &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, q.jsx)(M, {}),
            }),
            (0, q.jsx)(`span`, {
              title: a,
              className: d(
                `text-token-description-foreground flex items-center gap-1`,
                `min-w-0 truncate text-right`,
              ),
              children: a,
            }),
          ],
        })),
      (t[26] = a),
      (t[27] = f));
  let p;
  t[28] !== c || t[29] !== u || t[30] !== f
    ? ((p = (0, q.jsxs)(`span`, { className: c, children: [u, f] })),
      (t[28] = c),
      (t[29] = u),
      (t[30] = f),
      (t[31] = p))
    : (p = t[31]);
  let m;
  return (
    t[32] !== l || t[33] !== p
      ? ((m = (0, q.jsxs)(q.Fragment, { children: [l, p] })),
        (t[32] = l),
        (t[33] = p),
        (t[34] = m))
      : (m = t[34]),
    m
  );
}
function W(e) {
  return e.replace(/_/g, `-`);
}
function G(e) {
  let t = (0, K.c)(26),
    {
      planType: n,
      className: r,
      onPlanUpgradeClick: i,
      opensNativeSurface: s,
      onRequestLimitIncreaseClick: c,
    } = e;
  if (c != null) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(y, {
          id: `settings.usage.limits.requestIncrease`,
          defaultMessage: `Request limit increase`,
          description: `Button to request a workspace monthly usage limit increase`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] !== r || t[2] !== c
        ? ((n = (0, q.jsx)(f.Item, { className: r, onClick: c, children: e })),
          (t[1] = r),
          (t[2] = c),
          (t[3] = n))
        : (n = t[3]),
      n
    );
  }
  let l = s ? a : void 0,
    d;
  t[4] === l
    ? (d = t[5])
    : ((d = (0, q.jsx)(o, { className: J, href: X, PrimaryIcon: l })),
      (t[4] = l),
      (t[5] = d));
  let p = d,
    m;
  t[6] === i
    ? (m = t[7])
    : ((m = (e) => {
        (!h(e) && (i?.(e), e.defaultPrevented)) ||
          u({ event: e, href: X, initiator: `open_in_browser_bridge` });
      }),
      (t[6] = i),
      (t[7] = m));
  let g = m;
  switch (n) {
    case `free`:
    case `go`: {
      let e;
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(y, {
            id: `composer.mode.upgradeToPlus`,
            defaultMessage: `Upgrade to Plus`,
            description: `Upgrade to Plus message for free plan`,
          })),
          (t[8] = e))
        : (e = t[8]);
      let n;
      return (
        t[9] !== r || t[10] !== g || t[11] !== p
          ? ((n = (0, q.jsx)(f.Item, {
              rightIcon: p,
              className: r,
              href: X,
              onClick: g,
              children: e,
            })),
            (t[9] = r),
            (t[10] = g),
            (t[11] = p),
            (t[12] = n))
          : (n = t[12]),
        n
      );
    }
    case `plus`: {
      let e;
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(y, {
            id: `composer.mode.upgradeToPro`,
            defaultMessage: `Upgrade to Pro`,
            description: `Upgrade to Pro`,
          })),
          (t[13] = e))
        : (e = t[13]);
      let n;
      return (
        t[14] !== r || t[15] !== g || t[16] !== p
          ? ((n = (0, q.jsx)(f.Item, {
              rightIcon: p,
              className: r,
              href: X,
              onClick: g,
              children: e,
            })),
            (t[14] = r),
            (t[15] = g),
            (t[16] = p),
            (t[17] = n))
          : (n = t[17]),
        n
      );
    }
    case `prolite`: {
      let e;
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(y, {
            id: `composer.mode.upgradeForMoreUsage`,
            defaultMessage: `Upgrade for more usage`,
            description: `Upgrade for more usage`,
          })),
          (t[18] = e))
        : (e = t[18]);
      let n;
      return (
        t[19] !== r || t[20] !== g || t[21] !== p
          ? ((n = (0, q.jsx)(f.Item, {
              rightIcon: p,
              className: r,
              href: X,
              onClick: g,
              children: e,
            })),
            (t[19] = r),
            (t[20] = g),
            (t[21] = p),
            (t[22] = n))
          : (n = t[22]),
        n
      );
    }
    case `team`:
    case `self_serve_business_usage_based`:
    case `business`:
    case `enterprise_cbp_automation`:
    case `enterprise_cbp_usage_based`:
    case `education`:
    case `edu_plus`:
    case `edu_pro`:
    case `quorum`:
    case `sci`:
    case `enterprise`:
    case `edu`:
    case `hc`:
    case `finserv`: {
      let e;
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(`span`, {
            className: `text-token-description-foreground`,
            children: (0, q.jsx)(y, {
              id: `composer.mode.contactAdmin`,
              defaultMessage: `To get more access, contact your admin`,
              description: `Suggest contacting admin for increased access`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]);
      let n;
      return (
        t[24] === r
          ? (n = t[25])
          : ((n = (0, q.jsx)(f.Item, {
              className: r,
              allowWrap: !0,
              children: e,
            })),
            (t[24] = r),
            (t[25] = n)),
        n
      );
    }
    case `pro`:
    case `free_workspace`:
    case `guest`:
    case `k12`:
    case void 0:
      return null;
  }
}
var K,
  q,
  J,
  Y,
  X,
  Z = e(() => {
    ((K = t()),
      l(),
      _(),
      F(),
      m(),
      p(),
      c(),
      s(),
      i(),
      O(),
      A(),
      w(),
      z(),
      (q = n()),
      (J = `icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100`),
      (Y = `https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b`),
      (X = `https://openai.com/chatgpt/pricing`));
  });
export { F as i, Z as n, M as r, B as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ecjwgenq-_p4PfxvN.js.map
