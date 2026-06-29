import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Ko as i,
  Vo as a,
  _c as o,
  gc as s,
  lc as c,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ca as l,
  Do as u,
  Em as d,
  Eo as f,
  Fs as p,
  If as m,
  Jd as h,
  Ld as g,
  Lf as _,
  Ps as v,
  Rd as y,
  Tm as b,
  To as x,
  _a as S,
  as as C,
  ef as w,
  gp as T,
  hh as E,
  is as D,
  mh as O,
  mp as k,
  ns as A,
  rs as j,
  wo as ee,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Bl as M,
  Hp as N,
  Iy as te,
  Kp as P,
  Rl as ne,
  Up as re,
  Vy as ie,
  ay as ae,
  ty as F,
  zy as I,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Ut as L,
  Wt as R,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  $ as oe,
  D as se,
  E as ce,
  G as le,
  I as z,
  L as ue,
  N as B,
  P as de,
  Q as fe,
  X as pe,
  Z as me,
  at as V,
  j as he,
  mt as H,
  pt as ge,
  q as _e,
  tt as U,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~fjhbmao5-BWbJojtu.js";
import { r as ve, t as W } from "./conversation-starter-card-Ddm44v7Z.js";
import {
  a as ye,
  i as G,
  n as be,
  o as xe,
  r as K,
  s as q,
  t as J,
} from "./subscription-update-plan-C6ivP0af.js";
import { r as Y, t as X } from "./plan-pricing-DANGBAbm.js";
function Se(e) {
  let t = (0, Z.c)(96),
    {
      currentPlan: n,
      defaultTab: r,
      loadingTargetPlan: i,
      pricingInfo: a,
      getPlansUrl: o,
      onCtaClick: s,
      onOpenChange: c,
      onOpenUrl: l,
      open: u,
    } = e,
    d = r === void 0 ? `personal` : r,
    p = i === void 0 ? null : i,
    m = ie(),
    [h, _] = (0, Q.useState)(d),
    [v, y] = (0, Q.useState)(n === g.PRO ? g.PRO : g.PROLITE),
    b = n === g.GO || n === g.PLUS || n === g.PROLITE || n === g.PRO,
    C;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(f, {
        className: `text-lg font-medium`,
        children: (0, $.jsx)(I, {
          id: `settings.usage.upgradePlan.title`,
          defaultMessage: `Upgrade plan`,
          description: `Title for the plan upgrade dialog`,
        }),
      })),
      (t[0] = C))
    : (C = t[0]);
  let w;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(x, {
        className: `sr-only`,
        children: (0, $.jsx)(I, {
          id: `settings.usage.upgradePlan.description`,
          defaultMessage: `Compare personal and business plans`,
          description: `Screen reader description for the plan upgrade dialog`,
        }),
      })),
      (t[1] = w))
    : (w = t[1]);
  let T;
  t[2] === m
    ? (T = t[3])
    : ((T = m.formatMessage({
        id: `settings.usage.upgradePlan.tabs.ariaLabel`,
        defaultMessage: `Choose plan category`,
        description: `Aria label for the plan category toggle`,
      })),
      (t[2] = m),
      (t[3] = T));
  let E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = {
        id: `personal`,
        label: (0, $.jsx)(I, {
          id: `settings.usage.upgradePlan.tabs.personal`,
          defaultMessage: `Personal`,
          description: `Label for personal plans tab`,
        }),
      }),
      (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = [
        E,
        {
          id: `business`,
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.tabs.business`,
            defaultMessage: `Business`,
            description: `Label for business plans tab`,
          }),
        },
      ]),
      (t[5] = D))
    : (D = t[5]);
  let k;
  t[6] !== T || t[7] !== h
    ? ((k = (0, $.jsx)(xe, {
        ariaLabel: T,
        className: `w-fit`,
        selectedId: h,
        onSelect: _,
        options: D,
      })),
      (t[6] = T),
      (t[7] = h),
      (t[8] = k))
    : (k = t[8]);
  let A = h !== `personal`,
    j = h !== `personal` && `invisible pointer-events-none`,
    M;
  t[9] === j
    ? (M = t[10])
    : ((M = O(`col-start-1 row-start-1 grid gap-2.5 md:grid-cols-3`, j)),
      (t[9] = j),
      (t[10] = M));
  let N;
  t[11] !== n ||
  t[12] !== o ||
  t[13] !== m ||
  t[14] !== s ||
  t[15] !== l ||
  t[16] !== a ||
  t[17] !== b
    ? ((N = b
        ? null
        : (0, $.jsx)(we, {
            currentPlan: n,
            targetPlan: g.FREE,
            price: je({ intl: m, pricingInfo: a, plan: g.FREE }),
            title: (0, $.jsx)(I, {
              id: `settings.usage.upgradePlan.personal.free.title`,
              defaultMessage: `Free`,
              description: `Title for the Free personal plan card`,
            }),
            features: [
              {
                icon: (0, $.jsx)(Ne, {}),
                label: (0, $.jsx)(I, {
                  id: `settings.usage.upgradePlan.personal.free.usage`,
                  defaultMessage: `Limited Codex usage`,
                  description: `Usage feature on the Free personal plan card`,
                }),
              },
              {
                icon: (0, $.jsx)(Pe, {}),
                label: (0, $.jsx)(I, {
                  id: `settings.usage.upgradePlan.personal.free.model`,
                  defaultMessage: `GPT-5.3`,
                  description: `Model feature on the Free personal plan card`,
                }),
              },
            ],
            getPlansUrl: o,
            onCtaClick: s,
            onOpenUrl: l,
          })),
      (t[11] = n),
      (t[12] = o),
      (t[13] = m),
      (t[14] = s),
      (t[15] = l),
      (t[16] = a),
      (t[17] = b),
      (t[18] = N))
    : (N = t[18]);
  let te = p === g.PLUS,
    P;
  t[19] !== m || t[20] !== a
    ? ((P = je({ intl: m, pricingInfo: a, plan: g.PLUS })),
      (t[19] = m),
      (t[20] = a),
      (t[21] = P))
    : (P = t[21]);
  let ne, re;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.personal.plus.title`,
        defaultMessage: `Plus`,
        description: `Title for the Plus personal plan card`,
      })),
      (re = [
        {
          icon: (0, $.jsx)(Ne, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.personal.plus.usage`,
            defaultMessage: `Enhanced Codex usage`,
            description: `Usage feature on the Plus personal plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Pe, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.personal.plus.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the Plus personal plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Fe, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.personal.plus.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the Plus personal plan card`,
          }),
        },
      ]),
      (t[22] = ne),
      (t[23] = re))
    : ((ne = t[22]), (re = t[23]));
  let ae;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.more.plus`,
        defaultMessage: `View more details for Plus plan`,
        description: `Screen reader label for the Plus plan details link`,
      })),
      (t[24] = ae))
    : (ae = t[24]);
  let F;
  t[25] !== n ||
  t[26] !== o ||
  t[27] !== s ||
  t[28] !== l ||
  t[29] !== te ||
  t[30] !== P
    ? ((F = (0, $.jsx)(we, {
        currentPlan: n,
        isLoading: te,
        targetPlan: g.PLUS,
        price: P,
        title: ne,
        features: re,
        getPlansUrl: o,
        onCtaClick: s,
        onOpenUrl: l,
        planDetailsLabel: ae,
      })),
      (t[25] = n),
      (t[26] = o),
      (t[27] = s),
      (t[28] = l),
      (t[29] = te),
      (t[30] = P),
      (t[31] = F))
    : (F = t[31]);
  let L;
  t[32] !== n ||
  t[33] !== o ||
  t[34] !== m ||
  t[35] !== p ||
  t[36] !== s ||
  t[37] !== l ||
  t[38] !== a ||
  t[39] !== v ||
  t[40] !== b
    ? ((L = b
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(we, {
                currentPlan: n,
                isLoading: p === g.PROLITE,
                targetPlan: g.PROLITE,
                price: je({ intl: m, pricingInfo: a, plan: g.PROLITE }),
                title: (0, $.jsx)(Ee, {
                  tier: (0, $.jsx)(I, {
                    id: `settings.usage.upgradePlan.personal.proLite.tier`,
                    defaultMessage: `5x`,
                    description: `Tier suffix for the Pro 5x personal plan card`,
                  }),
                }),
                features: De(g.PROLITE),
                getPlansUrl: o,
                onCtaClick: s,
                onOpenUrl: l,
                planDetailsLabel: (0, $.jsx)(Oe, { plan: g.PROLITE }),
              }),
              (0, $.jsx)(we, {
                currentPlan: n,
                isLoading: p === g.PRO,
                targetPlan: g.PRO,
                price: je({ intl: m, pricingInfo: a, plan: g.PRO }),
                title: (0, $.jsx)(Ee, {
                  tier: (0, $.jsx)(I, {
                    id: `settings.usage.upgradePlan.personal.pro.tier`,
                    defaultMessage: `20x`,
                    description: `Tier suffix for the Pro 20x personal plan card`,
                  }),
                }),
                features: De(g.PRO),
                getPlansUrl: o,
                onCtaClick: s,
                onOpenUrl: l,
                planDetailsLabel: (0, $.jsx)(Oe, { plan: g.PRO }),
              }),
            ],
          })
        : (0, $.jsx)(we, {
            currentPlan: n,
            isLoading: p === v,
            targetPlan: v,
            price: je({ intl: m, pricingInfo: a, plan: v }),
            title: (0, $.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4`,
              children: [
                (0, $.jsx)(I, {
                  id: `settings.usage.upgradePlan.personal.pro.title`,
                  defaultMessage: `Pro`,
                  description: `Title for the Pro personal plan card`,
                }),
                (0, $.jsx)(xe, {
                  ariaLabel: m.formatMessage({
                    id: `settings.usage.upgradePlan.personal.proTier.ariaLabel`,
                    defaultMessage: `Choose Pro plan tier`,
                    description: `Aria label for the Pro tier toggle`,
                  }),
                  className: `shrink-0`,
                  selectedId: v,
                  onSelect: y,
                  options: [
                    {
                      id: g.PROLITE,
                      label: (0, $.jsx)(I, {
                        id: `settings.usage.upgradePlan.personal.proTier.fiveX`,
                        defaultMessage: `5x`,
                        description: `Label for the Pro 5x tier toggle`,
                      }),
                    },
                    {
                      id: g.PRO,
                      label: (0, $.jsx)(I, {
                        id: `settings.usage.upgradePlan.personal.proTier.twentyX`,
                        defaultMessage: `20x`,
                        description: `Label for the Pro 20x tier toggle`,
                      }),
                    },
                  ],
                }),
              ],
            }),
            features: De(v),
            getPlansUrl: o,
            onCtaClick: s,
            onOpenUrl: l,
            planDetailsLabel: (0, $.jsx)(Oe, { plan: v }),
          })),
      (t[32] = n),
      (t[33] = o),
      (t[34] = m),
      (t[35] = p),
      (t[36] = s),
      (t[37] = l),
      (t[38] = a),
      (t[39] = v),
      (t[40] = b),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] !== M || t[43] !== N || t[44] !== F || t[45] !== L || t[46] !== A
    ? ((R = (0, $.jsxs)(`div`, {
        "aria-hidden": A,
        className: M,
        children: [N, F, L],
      })),
      (t[42] = M),
      (t[43] = N),
      (t[44] = F),
      (t[45] = L),
      (t[46] = A),
      (t[47] = R))
    : (R = t[47]);
  let oe = h !== `business`,
    le = h !== `business` && `invisible pointer-events-none`,
    z;
  t[48] === le
    ? (z = t[49])
    : ((z = O(`col-start-1 row-start-1 grid gap-2.5 md:grid-cols-2`, le)),
      (t[48] = le),
      (t[49] = z));
  let ue, B, de, fe, pe, me;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.codex.title`,
        defaultMessage: `Business`,
        description: `Title for the Codex Business plan card`,
      })),
      (B = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.codex.subtitle`,
        defaultMessage: `Codex`,
        description: `Subtitle for the Codex Business plan card`,
      })),
      (de = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.codex.price`,
        defaultMessage: `Usage pricing`,
        description: `Price label for the Codex Business plan card`,
      })),
      (fe = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.codex.description`,
        defaultMessage: `No fixed seat. Pay as you go based on usage`,
        description: `Description for the Codex Business plan card`,
      })),
      (pe = [
        {
          icon: (0, $.jsx)(Ne, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.codex.usage`,
            defaultMessage: `Pay-as-you-go usage`,
            description: `Usage feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Pe, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.codex.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Fe, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.codex.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Ie, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.codex.security`,
            defaultMessage: `Enhanced security and admin controls`,
            description: `Security feature on the Codex Business plan card`,
          }),
        },
      ]),
      (me = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.addWorkspace`,
        defaultMessage: `Add Business workspace`,
        description: `CTA to add a business workspace`,
      })),
      (t[50] = ue),
      (t[51] = B),
      (t[52] = de),
      (t[53] = fe),
      (t[54] = pe),
      (t[55] = me))
    : ((ue = t[50]),
      (B = t[51]),
      (de = t[52]),
      (fe = t[53]),
      (pe = t[54]),
      (me = t[55]));
  let V;
  t[56] === l
    ? (V = t[57])
    : ((V = (e) => {
        l(se, g.SELF_SERVE_BUSINESS_USAGE_BASED, e);
      }),
      (t[56] = l),
      (t[57] = V));
  let he;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.more.businessCodex`,
        defaultMessage: `View more details for Business Codex plan`,
        description: `Screen reader label for the Business Codex plan details link`,
      })),
      (t[58] = he))
    : (he = t[58]);
  let H;
  t[59] !== o || t[60] !== s || t[61] !== l || t[62] !== V
    ? ((H = (0, $.jsx)(Te, {
        title: ue,
        subtitle: B,
        priceLabel: de,
        description: fe,
        features: pe,
        cta: me,
        onClick: V,
        targetPlan: g.SELF_SERVE_BUSINESS_USAGE_BASED,
        getPlansUrl: o,
        onCtaClick: s,
        onOpenUrl: l,
        planDetailsLabel: he,
      })),
      (t[59] = o),
      (t[60] = s),
      (t[61] = l),
      (t[62] = V),
      (t[63] = H))
    : (H = t[63]);
  let ge, _e;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.team.title`,
        defaultMessage: `Business`,
        description: `Title for the ChatGPT and Codex Business plan card`,
      })),
      (_e = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.team.subtitle`,
        defaultMessage: `ChatGPT & Codex`,
        description: `Subtitle for the ChatGPT and Codex Business plan card`,
      })),
      (t[64] = ge),
      (t[65] = _e))
    : ((ge = t[64]), (_e = t[65]));
  let U;
  t[66] !== m || t[67] !== a
    ? ((U = Me({ intl: m, pricingInfo: a })),
      (t[66] = m),
      (t[67] = a),
      (t[68] = U))
    : (U = t[68]);
  let ve, W, ye;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.team.description`,
        defaultMessage: `When billed annually. Minimum of 2 users`,
        description: `Description for the ChatGPT and Codex Business plan card`,
      })),
      (W = [
        {
          icon: (0, $.jsx)(Ne, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.team.usage`,
            defaultMessage: `Enhanced Codex usage`,
            description: `Usage feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Pe, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.team.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Fe, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.team.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, $.jsx)(Ie, {}),
          label: (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.business.team.security`,
            defaultMessage: `Enhanced security and admin controls`,
            description: `Security feature on the ChatGPT and Codex Business plan card`,
          }),
        },
      ]),
      (ye = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.addWorkspace`,
        defaultMessage: `Add Business workspace`,
        description: `CTA to add a business workspace`,
      })),
      (t[69] = ve),
      (t[70] = W),
      (t[71] = ye))
    : ((ve = t[69]), (W = t[70]), (ye = t[71]));
  let G;
  t[72] === l
    ? (G = t[73])
    : ((G = (e) => {
        l(ce, g.SELF_SERVE_BUSINESS, e);
      }),
      (t[72] = l),
      (t[73] = G));
  let be;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.more.businessTeam`,
        defaultMessage: `View more details for Business ChatGPT and Codex plan`,
        description: `Screen reader label for the Business ChatGPT and Codex plan details link`,
      })),
      (t[74] = be))
    : (be = t[74]);
  let K;
  t[75] !== o || t[76] !== s || t[77] !== l || t[78] !== U || t[79] !== G
    ? ((K = (0, $.jsx)(Te, {
        title: ge,
        subtitle: _e,
        priceLabel: U,
        description: ve,
        features: W,
        cta: ye,
        onClick: G,
        targetPlan: g.SELF_SERVE_BUSINESS,
        getPlansUrl: o,
        onCtaClick: s,
        onOpenUrl: l,
        planDetailsLabel: be,
      })),
      (t[75] = o),
      (t[76] = s),
      (t[77] = l),
      (t[78] = U),
      (t[79] = G),
      (t[80] = K))
    : (K = t[80]);
  let q;
  t[81] !== oe || t[82] !== z || t[83] !== H || t[84] !== K
    ? ((q = (0, $.jsxs)(`div`, {
        "aria-hidden": oe,
        className: z,
        children: [H, K],
      })),
      (t[81] = oe),
      (t[82] = z),
      (t[83] = H),
      (t[84] = K),
      (t[85] = q))
    : (q = t[85]);
  let J;
  t[86] !== R || t[87] !== q
    ? ((J = (0, $.jsxs)(`div`, { className: `grid`, children: [R, q] })),
      (t[86] = R),
      (t[87] = q),
      (t[88] = J))
    : (J = t[88]);
  let Y;
  t[89] !== J || t[90] !== k
    ? ((Y = (0, $.jsxs)(S, {
        className: `max-h-[calc(100vh-2rem)] gap-3 overflow-y-auto px-5 py-4 [--pricing-plan-highlight:#635ef4]`,
        children: [C, w, k, J],
      })),
      (t[89] = J),
      (t[90] = k),
      (t[91] = Y))
    : (Y = t[91]);
  let X;
  return (
    t[92] !== c || t[93] !== u || t[94] !== Y
      ? ((X = (0, $.jsx)(ee, {
          open: u,
          onOpenChange: c,
          contentClassName: `!w-[min(800px,calc(100vw-2rem))]`,
          children: Y,
        })),
        (t[92] = c),
        (t[93] = u),
        (t[94] = Y),
        (t[95] = X))
      : (X = t[95]),
    X
  );
}
function Ce({ currentPlan: e, defaultTab: t, onClose: n, source: a }) {
  let o = i(r),
    s = ie(),
    c = o.queryClient,
    { email: l } = _(),
    u = ae(),
    { data: d } = w(),
    [f, p] = (0, Q.useState)(null),
    [m, h] = (0, Q.useState)(null),
    [v, y] = (0, Q.useState)(!1),
    { data: b } = U({ enabled: !0 }),
    { data: x } = V({ billingCurrency: b, enabled: !0 }),
    S = ue({ logExposure: !1 }),
    E = d?.plan_type;
  ((0, Q.useEffect)(() => {
    E != null && E !== e.toString() && n();
  }, [e, E, n]),
    (0, Q.useEffect)(() => {
      M(o, re, { defaultTab: t, source: a });
    }, [t, o, a]));
  let O = (e, t) => {
      if (t != null) {
        D({ event: t, href: e, initiator: `open_in_browser_bridge` });
        return;
      }
      C({ href: e, initiator: `open_in_browser_bridge` });
    },
    k = async (t, n, r) => {
      let i = ge({ loginHint: l, statsigClient: u, url: t });
      if (j(r)) {
        O(i, r);
        return;
      }
      if (
        d == null ||
        e === g.FREE ||
        (n !== g.PLUS && n !== g.PROLITE && n !== g.PRO)
      ) {
        O(i, r);
        return;
      }
      let a = J(n),
        o = e === g.GO,
        s = e === g.PLUS && (n === g.PROLITE || n === g.PRO),
        f = e === g.PRO && n === g.PROLITE,
        m = e === g.PROLITE && n === g.PRO;
      if (!o && !s && !f && !m) {
        O(i, r);
        return;
      }
      h(n);
      try {
        let e = await c.fetchQuery(fe({ accountId: d.id, updatedPlan: a }));
        if (f) {
          p({
            kind: `scheduled_downgrade`,
            preview: e,
            updatedPlan: `chatgptprolite`,
            webUrl: i,
          });
          return;
        }
        let t = e.default_payment_method;
        if (
          !t?.card_last4?.trim() ||
          x?.minorUnitExponent == null ||
          x.currencyCode.toUpperCase() !== e.currency.toUpperCase()
        ) {
          O(i, r);
          return;
        }
        p({
          kind: `saved_card_upgrade`,
          minorUnitExponent: x.minorUnitExponent,
          paymentMethod: t,
          preview: e,
          updatedPlan: a,
          webUrl: i,
        });
      } catch {
        O(i, r);
      } finally {
        h(null);
      }
    },
    A = (e) => {
      f != null &&
        M(o, N, {
          ctaAction: e,
          modalType: f.kind,
          source: a,
          targetPlan: be(f.updatedPlan),
        });
    },
    ee = async () => {
      if (!(f == null || d == null)) {
        y(!0);
        try {
          let e = await oe({ accountId: d.id, updatedPlan: f.updatedPlan });
          if (e.status == null || e.status === `pending`) {
            (p(null),
              e.status == null &&
                f.kind === `saved_card_upgrade` &&
                (o.get(T).success(
                  s.formatMessage({
                    id: `settings.usage.pricingPlanPage.subscriptionUpdate.upgradeSucceeded`,
                    defaultMessage: `Successfully upgraded plan`,
                    description: `Toast shown after a plan upgrade succeeds`,
                  }),
                ),
                n()),
              await Promise.all([
                c.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                c.invalidateQueries({ queryKey: [`rate-limit-status`] }),
              ]));
            return;
          }
          (await pe({ accountId: d.id }), O(f.webUrl), p(null));
        } catch {
          (O(f.webUrl), p(null));
        } finally {
          y(!1);
        }
      }
    };
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(Se, {
        open: f == null,
        currentPlan: e,
        defaultTab: t,
        loadingTargetPlan: m,
        pricingInfo: x ?? null,
        getPlansUrl: S,
        onCtaClick: (e, t) => {
          (t === g.SELF_SERVE_BUSINESS_USAGE_BASED &&
            _e(o, {
              audience: `workspace`,
              checkoutKind: `codex_team`,
              entryPoint: `upgrade_plan_modal`,
            }),
            M(o, N, { ctaAction: e, source: a, targetPlan: t }));
        },
        onOpenChange: (e) => {
          !e && f == null && n();
        },
        onOpenUrl: (e, t, n) => {
          k(e, t, n);
        },
      }),
      f == null
        ? null
        : (0, $.jsx)(G, {
            isUpdating: v,
            pricingInfo: x ?? null,
            subscriptionUpdate: f,
            onCancel: () => {
              (A(`cancel`), p(null));
            },
            onConfirm: () => {
              (A(
                f.kind === `saved_card_upgrade` &&
                  f.preview.amount_due.amount > 0
                  ? `pay_now`
                  : `confirm`,
              ),
                ee());
            },
            onGoToWeb: (e) => {
              (A(`go_to_web`), O(f.webUrl, e), p(null));
            },
            onOpenChange: (e) => {
              e || (A(`dismiss`), v || p(null));
            },
          }),
    ],
  });
}
function we(e) {
  let t = (0, Z.c)(32),
    {
      currentPlan: n,
      features: r,
      getPlansUrl: i,
      isLoading: a,
      onCtaClick: o,
      onOpenUrl: s,
      planDetailsLabel: c,
      price: l,
      targetPlan: u,
      title: d,
    } = e,
    f = a === void 0 ? !1 : a,
    p;
  t[0] !== n || t[1] !== u
    ? ((p = he({ currentPlan: n, targetPlan: u })),
      (t[0] = n),
      (t[1] = u),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  t[3] !== n || t[4] !== u
    ? ((h = B({ currentPlan: n, targetPlan: u })),
      (t[3] = n),
      (t[4] = u),
      (t[5] = h))
    : (h = t[5]);
  let _ = h,
    v = (n === g.GO && u === g.PLUS) || (n === g.PLUS && u === g.PROLITE),
    y;
  t[6] !== i || t[7] !== s || t[8] !== c
    ? ((y =
        c == null
          ? null
          : (0, $.jsx)(Ae, { detailsLabel: c, getPlansUrl: i, onOpenUrl: s })),
      (t[6] = i),
      (t[7] = s),
      (t[8] = c),
      (t[9] = y))
    : (y = t[9]);
  let x = m === `upgrade` ? `primary` : `outline`,
    S = m === `current`,
    C;
  t[10] !== m || t[11] !== o || t[12] !== s || t[13] !== u || t[14] !== _
    ? ((C = (e) => {
        _ == null || m === `current` || (o(m, u), s(_, u, e));
      }),
      (t[10] = m),
      (t[11] = o),
      (t[12] = s),
      (t[13] = u),
      (t[14] = _),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== m || t[17] !== f
    ? ((w = f
        ? (0, $.jsx)(I, {
            id: `settings.usage.upgradePlan.loadingPlanChange`,
            defaultMessage: `Loading…`,
            description: `Label shown in an upgrade plan button while loading its confirmation dialog`,
          })
        : m === `current`
          ? (0, $.jsx)(I, {
              id: `settings.usage.upgradePlan.current`,
              defaultMessage: `Current plan`,
              description: `Disabled CTA label for the user's current plan`,
            })
          : m === `downgrade`
            ? (0, $.jsx)(I, {
                id: `settings.usage.upgradePlan.downgrade`,
                defaultMessage: `Downgrade`,
                description: `CTA label for moving to a lower-tier plan`,
              })
            : (0, $.jsx)(I, {
                id: `settings.usage.upgradePlan.upgrade`,
                defaultMessage: `Upgrade plan`,
                description: `CTA label for moving to a higher-tier plan`,
              })),
      (t[16] = m),
      (t[17] = f),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== f || t[20] !== x || t[21] !== S || t[22] !== C || t[23] !== w
    ? ((T = (0, $.jsx)(b, {
        className: `w-full justify-center`,
        color: x,
        disabled: S,
        loading: f,
        size: `large`,
        onClick: C,
        children: w,
      })),
      (t[19] = f),
      (t[20] = x),
      (t[21] = S),
      (t[22] = C),
      (t[23] = w),
      (t[24] = T))
    : (T = t[24]);
  let E;
  return (
    t[25] !== r ||
    t[26] !== l ||
    t[27] !== T ||
    t[28] !== v ||
    t[29] !== y ||
    t[30] !== d
      ? ((E = (0, $.jsx)(ke, {
          highlighted: v,
          title: d,
          priceLabel: l,
          features: r,
          featureSlotCount: 3,
          detailsLink: y,
          footer: T,
        })),
        (t[25] = r),
        (t[26] = l),
        (t[27] = T),
        (t[28] = v),
        (t[29] = y),
        (t[30] = d),
        (t[31] = E))
      : (E = t[31]),
    E
  );
}
function Te(e) {
  let t = (0, Z.c)(20),
    {
      cta: n,
      description: r,
      features: i,
      getPlansUrl: a,
      onCtaClick: o,
      onClick: s,
      onOpenUrl: c,
      planDetailsLabel: l,
      priceLabel: u,
      subtitle: d,
      targetPlan: f,
      title: p,
    } = e,
    m = f === g.SELF_SERVE_BUSINESS,
    h;
  t[0] !== a || t[1] !== c || t[2] !== l
    ? ((h = (0, $.jsx)(Ae, { detailsLabel: l, getPlansUrl: a, onOpenUrl: c })),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l),
      (t[3] = h))
    : (h = t[3]);
  let _;
  t[4] !== s || t[5] !== o || t[6] !== f
    ? ((_ = (e) => {
        (o(`upgrade`, f), s(e));
      }),
      (t[4] = s),
      (t[5] = o),
      (t[6] = f),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== n || t[9] !== _
    ? ((v = (0, $.jsx)(b, {
        className: `w-full justify-center`,
        size: `large`,
        onClick: _,
        children: n,
      })),
      (t[8] = n),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y;
  return (
    t[11] !== r ||
    t[12] !== i ||
    t[13] !== u ||
    t[14] !== d ||
    t[15] !== m ||
    t[16] !== h ||
    t[17] !== v ||
    t[18] !== p
      ? ((y = (0, $.jsx)(ke, {
          highlighted: m,
          title: p,
          subtitle: d,
          priceLabel: u,
          priceLabelSize: `compact`,
          description: r,
          features: i,
          featureSlotCount: 4,
          detailsLink: h,
          footer: v,
        })),
        (t[11] = r),
        (t[12] = i),
        (t[13] = u),
        (t[14] = d),
        (t[15] = m),
        (t[16] = h),
        (t[17] = v),
        (t[18] = p),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
function Ee(e) {
  let t = (0, Z.c)(3),
    { tier: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.personal.pro.title`,
        defaultMessage: `Pro`,
        description: `Title for the Pro personal plan card`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            r,
            (0, $.jsx)(`span`, {
              className: `font-normal text-token-text-secondary`,
              children: n,
            }),
          ],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function De(e) {
  return [
    {
      icon: (0, $.jsx)(Ne, {}),
      label:
        e === g.PROLITE
          ? (0, $.jsx)(I, {
              id: `settings.usage.upgradePlan.personal.proLite.usage`,
              defaultMessage: `5x more usage than Plus`,
              description: `Usage feature for the Pro 5x plan card`,
            })
          : (0, $.jsx)(I, {
              id: `settings.usage.upgradePlan.personal.pro.usage`,
              defaultMessage: `20x more usage than Plus`,
              description: `Usage feature for the Pro 20x plan card`,
            }),
    },
    {
      icon: (0, $.jsx)(Pe, {}),
      label: (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.personal.pro.model`,
        defaultMessage: `GPT-5.5 Pro`,
        description: `Model feature on the Pro personal plan card`,
      }),
    },
    {
      icon: (0, $.jsx)(Fe, {}),
      label: (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.personal.pro.workspace`,
        defaultMessage: `Connect to Google Workspace`,
        description: `Workspace feature on the Pro personal plan card`,
      }),
    },
  ];
}
function Oe(e) {
  let t = (0, Z.c)(2),
    { plan: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === g.PROLITE
            ? (0, $.jsx)(I, {
                id: `settings.usage.upgradePlan.more.proLite`,
                defaultMessage: `View more details for Pro 5x plan`,
                description: `Screen reader label for the Pro 5x plan details link`,
              })
            : (0, $.jsx)(I, {
                id: `settings.usage.upgradePlan.more.pro`,
                defaultMessage: `View more details for Pro 20x plan`,
                description: `Screen reader label for the Pro 20x plan details link`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ke(e) {
  let t = (0, Z.c)(44),
    {
      description: n,
      detailsLink: r,
      features: i,
      featureSlotCount: a,
      footer: o,
      highlighted: s,
      priceLabel: c,
      priceLabelSize: l,
      subtitle: u,
      title: d,
    } = e,
    f = l === void 0 ? `large` : l,
    p = s
      ? `border-[color-mix(in_srgb,var(--pricing-plan-highlight)_30%,transparent)] bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_6%,transparent)]`
      : `border-token-border`,
    m;
  t[0] === p
    ? (m = t[1])
    : ((m = O(`flex h-full min-h-0 flex-col rounded-2xl border p-4`, p)),
      (t[0] = p),
      (t[1] = m));
  let h = f === `large` && `h-10 justify-center`,
    g;
  t[2] === h
    ? (g = t[3])
    : ((g = O(`flex flex-col gap-1`, h)), (t[2] = h), (t[3] = g));
  let _;
  t[4] === d
    ? (_ = t[5])
    : ((_ = (0, $.jsx)(`div`, {
        className: `text-base font-semibold text-token-text-primary`,
        children: d,
      })),
      (t[4] = d),
      (t[5] = _));
  let v;
  t[6] === u
    ? (v = t[7])
    : ((v =
        u == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-sm font-medium text-token-text-secondary`,
              children: u,
            })),
      (t[6] = u),
      (t[7] = v));
  let y;
  t[8] !== g || t[9] !== _ || t[10] !== v
    ? ((y = (0, $.jsxs)(`div`, { className: g, children: [_, v] })),
      (t[8] = g),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b = f === `large` && `h-12 justify-center`,
    x;
  t[12] === b
    ? (x = t[13])
    : ((x = O(`mt-3 flex flex-col`, b)), (t[12] = b), (t[13] = x));
  let S;
  t[14] !== c || t[15] !== f
    ? ((S =
        c == null
          ? null
          : (0, $.jsx)(`div`, {
              className: O(
                `text-token-text-primary`,
                f === `large`
                  ? `text-2xl font-normal`
                  : `text-base font-medium`,
              ),
              children: c,
            })),
      (t[14] = c),
      (t[15] = f),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] === n
    ? (C = t[18])
    : ((C =
        n == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `mt-1 text-xs text-token-text-secondary`,
              children: n,
            })),
      (t[17] = n),
      (t[18] = C));
  let w;
  t[19] !== x || t[20] !== S || t[21] !== C
    ? ((w = (0, $.jsxs)(`div`, { className: x, children: [S, C] })),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w))
    : (w = t[22]);
  let T;
  if (t[23] !== a || t[24] !== i || t[25] !== f) {
    let e;
    (t[27] !== i || t[28] !== f
      ? ((e = (e, t) => {
          let n = i[t];
          return (0, $.jsx)(
            `div`,
            {
              className: O(
                `flex items-center gap-3 text-sm text-token-text-primary`,
                f === `large` ? `h-10` : `h-8`,
              ),
              children:
                n == null
                  ? null
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `inline-flex h-6 w-6 shrink-0 items-center justify-center`,
                          children: n.icon,
                        }),
                        (0, $.jsx)(`span`, { children: n.label }),
                      ],
                    }),
            },
            t,
          );
        }),
        (t[27] = i),
        (t[28] = f),
        (t[29] = e))
      : (e = t[29]),
      (T = (0, $.jsx)(`div`, {
        className: `mt-3 flex flex-col`,
        children: Array.from({ length: a }, e),
      })),
      (t[23] = a),
      (t[24] = i),
      (t[25] = f),
      (t[26] = T));
  } else T = t[26];
  let E = r == null ? `pt-8` : `gap-3`,
    D;
  t[30] === E
    ? (D = t[31])
    : ((D = O(`mt-3 flex flex-col`, E)), (t[30] = E), (t[31] = D));
  let k;
  t[32] === r
    ? (k = t[33])
    : ((k =
        r == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `flex h-5 items-center`,
              children: r,
            })),
      (t[32] = r),
      (t[33] = k));
  let A;
  t[34] !== o || t[35] !== D || t[36] !== k
    ? ((A = (0, $.jsxs)(`div`, { className: D, children: [k, o] })),
      (t[34] = o),
      (t[35] = D),
      (t[36] = k),
      (t[37] = A))
    : (A = t[37]);
  let j;
  return (
    t[38] !== w || t[39] !== T || t[40] !== A || t[41] !== m || t[42] !== y
      ? ((j = (0, $.jsxs)(`section`, { className: m, children: [y, w, T, A] })),
        (t[38] = w),
        (t[39] = T),
        (t[40] = A),
        (t[41] = m),
        (t[42] = y),
        (t[43] = j))
      : (j = t[43]),
    j
  );
}
function Ae(e) {
  let t = (0, Z.c)(9),
    { detailsLabel: n, getPlansUrl: r, onOpenUrl: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = (e) => {
        i(r(), void 0, e);
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        "aria-hidden": `true`,
        children: (0, $.jsx)(I, {
          id: `settings.usage.upgradePlan.more`,
          defaultMessage: `+ more`,
          description: `Link to view more plan details from a plan card`,
        }),
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, $.jsx)(`span`, { className: `sr-only`, children: n })),
      (t[4] = n),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== s
      ? ((c = (0, $.jsxs)(`button`, {
          className: `w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-token-text-primary underline underline-offset-2`,
          type: `button`,
          onClick: a,
          children: [o, s],
        })),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function je({ intl: e, plan: t, pricingInfo: n }) {
  return n == null
    ? null
    : X({
        intl: e,
        amount: n.monthlyAmounts[t],
        currencyCode: n.currencyCode,
        minorUnitExponent: n.minorUnitExponent,
      });
}
function Me({ intl: e, pricingInfo: t }) {
  if (t == null) return null;
  let n = X({
    intl: e,
    amount: t.monthlyAmounts.business,
    currencyCode: t.businessCurrencyCode,
    minorUnitExponent: t.businessMinorUnitExponent,
  });
  return n == null
    ? null
    : (0, $.jsx)(I, {
        id: `settings.usage.upgradePlan.business.team.price`,
        defaultMessage: `{price} / user / month`,
        description: `Localized monthly per-user price for the ChatGPT and Codex Business plan`,
        values: { price: n },
      });
}
function Ne() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(W, {
          className: `icon-sm`,
          name: `bubble-on-bubble`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(L, { className: `icon-sm text-token-charts-yellow` })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fe() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(v, { className: `icon-sm` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ie() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(W, { className: `icon-base`, name: `shield` })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Z, Q, $;
e(() => {
  ((Z = s()),
    P(),
    E(),
    a(),
    (Q = t(o(), 1)),
    te(),
    m(),
    h(),
    q(),
    d(),
    u(),
    l(),
    A(),
    k(),
    ve(),
    le(),
    z(),
    p(),
    R(),
    ne(),
    me(),
    n(),
    F(),
    H(),
    y(),
    de(),
    Y(),
    ye(),
    K(),
    ($ = c()));
})();
export { Se as UpgradePlanDialog, Ce as UpgradePlanDialogModal };
//# sourceMappingURL=upgrade-plan-dialog-CtSyWdd4.js.map
