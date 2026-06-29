import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Gs as i,
  Js as a,
  Ko as o,
  Vo as s,
  Ys as c,
  _c as l,
  gc as u,
  lc as d,
  qo as f,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Sa as p,
  _o as m,
  go as h,
  xa as g,
  yo as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Em as v,
  Jc as y,
  Jd as b,
  Ju as ee,
  Qu as te,
  Tm as ne,
  Xu as re,
  Yc as ie,
  Zu as ae,
  dp as oe,
  ef as se,
  fp as ce,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Bl as le,
  Ep as ue,
  Iy as x,
  Kp as de,
  Qp as S,
  Rl as fe,
  Vy as pe,
  em as me,
  zy as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  dt as he,
  lt as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Fm as ge,
  Fu as _e,
  Pm as ve,
  Pu as T,
  Sc as ye,
  bc as be,
  bu as E,
  xu as xe,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  ir as Se,
  nr as D,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  n as O,
  t as Ce,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy-C3t3vyRs.js";
import { n as k, t as we } from "./page-search-input-rbsdCe5M.js";
import { n as Te, t as A } from "./use-element-in-view-BYpNnWHn.js";
import {
  B as Ee,
  G as De,
  I as Oe,
  J as j,
  L as ke,
  R as Ae,
  ct as je,
  st as Me,
  v as Ne,
  y as Pe,
  z as Fe,
} from "./plugin-detail-page-B_JVFW0l.js";
import {
  a as Ie,
  c as Le,
  i as Re,
  l as M,
  n as N,
  o as ze,
  r as Be,
  s as Ve,
  t as P,
  u as He,
} from "./plugins-page-D95-xrxa.js";
import { n as Ue, t as We } from "./settings-host-dropdown-D9ctLTpF.js";
function F() {
  let e = (0, I.c)(3),
    t;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { hostId: me }), (e[0] = t))
      : (t = e[0]),
    ie(t))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, R.jsx)(P, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let n;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, R.jsx)(Ge, {})), (e[2] = n))
      : (n = e[2]),
    n
  );
}
function Ge() {
  let e = (0, I.c)(103),
    t = o(r),
    n = pe(),
    { data: i } = se(),
    s = Se(),
    l = f(he),
    u = p(l),
    d;
  e[0] === l ? (d = e[1]) : ((d = l?.map(Ye)), (e[0] = l), (e[1] = d));
  let g = d,
    [_, v] = (0, L.useState)(me),
    y;
  e[2] !== u || e[3] !== _
    ? ((y = _e(_, u)), (e[2] = u), (e[3] = _), (e[4] = y))
    : (y = e[4]);
  let b = y,
    [te, re] = (0, L.useState)(null),
    [ie, ce] = (0, L.useState)(null),
    x;
  e[5] !== ie || e[6] !== te
    ? ((x = { container: te, target: ie }),
      (e[5] = ie),
      (e[6] = te),
      (e[7] = x))
    : (x = e[7]);
  let de = Te(x),
    [S, fe] = (0, L.useState)(``),
    [w, ge] = (0, L.useState)(!1),
    T = a(Ie),
    ye = c(Ie),
    {
      forceReloadSkills: be,
      installedSkillMatchKeys: E,
      isFetching: xe,
      isLoading: D,
      markSkillsUpdated: O,
      standaloneInstalledSkills: k,
      workspaceRoots: A,
    } = Ae(b),
    {
      canInstallRecommendedSkills: De,
      defaultRecommendedRepoRoot: Oe,
      skillCreatorPath: j,
    } = Ee(b),
    {
      errorMessage: je,
      isLoading: Me,
      refresh: Ne,
      repoRoot: Pe,
      skills: Re,
    } = Fe(Oe, b),
    M;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        ge(!0);
      }),
      (e[8] = M))
    : (M = e[8]);
  let N;
  e[9] !== be || e[10] !== b
    ? ((N = { forceReloadSkills: be, hostId: b, onInstalled: M }),
      (e[9] = be),
      (e[10] = b),
      (e[11] = N))
    : (N = e[11]);
  let { installRecommendedSkill: Be, installingSkillId: Ve } = ke(N),
    P;
  e[12] === n
    ? (P = e[13])
    : ((P = h({ scope: `repo`, intl: n })), (e[12] = n), (e[13] = P));
  let He = P,
    Ue = i?.name ?? void 0,
    F;
  e[14] !== n || e[15] !== Ue
    ? ((F = h({ scope: `admin`, intl: n, adminLabel: Ue })),
      (e[14] = n),
      (e[15] = Ue),
      (e[16] = F))
    : (F = e[16]);
  let Ge = F,
    Je;
  e[17] !== n || e[18] !== Ge || e[19] !== He || e[20] !== A
    ? ((Je = (e) => {
        let { scope: t, skillPath: r } = e;
        return h({
          scope: t,
          intl: n,
          repoLabel: m({ skillPath: r, roots: A, fallbackLabel: He }),
          adminLabel: Ge,
        });
      }),
      (e[17] = n),
      (e[18] = Ge),
      (e[19] = He),
      (e[20] = A),
      (e[21] = Je))
    : (Je = e[21]);
  let Qe = Je,
    et;
  if (e[22] !== S || e[23] !== k) {
    let t = S.trim().toLowerCase();
    ((et = k.filter((e) => {
      let { skill: n } = e;
      if (t.length === 0) return !0;
      let r = ae(n).toLowerCase(),
        i = ee(n).toLowerCase();
      return n.name.toLowerCase().includes(t) || i.includes(t) || r.includes(t);
    })),
      (e[22] = S),
      (e[23] = k),
      (e[24] = et));
  } else et = e[24];
  let tt = et,
    nt;
  e[25] !== O || e[26] !== Ne
    ? ((nt = async () => {
        (O(), await Ne(), ge(!1));
      }),
      (e[25] = O),
      (e[26] = Ne),
      (e[27] = nt))
    : (nt = e[27]);
  let rt = nt,
    it;
  (e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = []), (e[28] = it))
    : (it = e[28]),
    (0, L.useEffect)(qe, it));
  let z;
  e[29] === de
    ? (z = e[30])
    : ((z = de
        ? null
        : (0, R.jsx)(C, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (e[29] = de),
      (e[30] = z));
  let B;
  e[31] !== u || e[32] !== g || e[33] !== b
    ? ((B =
        u != null && u.length > 0 && g != null
          ? (0, R.jsx)(We, {
              connectedRemoteConnections: u,
              onSelectHost: v,
              remoteConnectionHostIds: g,
              selectedHostId: b,
            })
          : null),
      (e[31] = u),
      (e[32] = g),
      (e[33] = b),
      (e[34] = B))
    : (B = e[34]);
  let at = w ? `secondary` : `ghost`,
    V;
  e[35] === rt
    ? (V = e[36])
    : ((V = () => {
        rt();
      }),
      (e[35] = rt),
      (e[36] = V));
  let ot = D || xe,
    st;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, R.jsx)(ve, { className: `icon-xs` })), (e[37] = st))
    : (st = e[37]);
  let H;
  e[38] === w
    ? (H = e[39])
    : ((H = (0, R.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: w
          ? (0, R.jsx)(C, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, R.jsx)(C, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (e[38] = w),
      (e[39] = H));
  let U;
  e[40] !== at || e[41] !== V || e[42] !== ot || e[43] !== H
    ? ((U = (0, R.jsxs)(ne, {
        color: at,
        size: `toolbar`,
        onClick: V,
        disabled: ot,
        children: [st, H],
      })),
      (e[40] = at),
      (e[41] = V),
      (e[42] = ot),
      (e[43] = H),
      (e[44] = U))
    : (U = e[44]);
  let W;
  e[45] === n
    ? (W = e[46])
    : ((W = n.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (e[45] = n),
      (e[46] = W));
  let G;
  e[47] === n
    ? (G = e[48])
    : ((G = n.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (e[47] = n),
      (e[48] = G));
  let K;
  e[49] !== S || e[50] !== W || e[51] !== G
    ? ((K = (0, R.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, R.jsx)(we, {
          id: `skills-search`,
          label: W,
          placeholder: G,
          searchQuery: S,
          onSearchQueryChange: fe,
        }),
      })),
      (e[49] = S),
      (e[50] = W),
      (e[51] = G),
      (e[52] = K))
    : (K = e[52]);
  let q;
  e[53] !== T || e[54] !== t || e[55] !== ye || e[56] !== j || e[57] !== s
    ? ((q = () => {
        if (!j) return;
        le(t, ue, {});
        let e = ze({ creatorPath: j, isFirstOpen: !T, kind: `skill` });
        (T || ye(!0), s({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (e[53] = T),
      (e[54] = t),
      (e[55] = ye),
      (e[56] = j),
      (e[57] = s),
      (e[58] = q))
    : (q = e[58]);
  let ct = !j,
    lt,
    ut;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, R.jsx)(oe, { className: `icon-xs` })),
      (ut = (0, R.jsx)(C, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (e[59] = lt),
      (e[60] = ut))
    : ((lt = e[59]), (ut = e[60]));
  let J;
  e[61] !== q || e[62] !== ct
    ? ((J = (0, R.jsxs)(ne, {
        color: `primary`,
        size: `toolbar`,
        onClick: q,
        disabled: ct,
        children: [lt, ut],
      })),
      (e[61] = q),
      (e[62] = ct),
      (e[63] = J))
    : (J = e[63]);
  let Y;
  e[64] !== B || e[65] !== U || e[66] !== K || e[67] !== J
    ? ((Y = (0, R.jsxs)(`div`, {
        className: `flex flex-nowrap items-center gap-1.5`,
        children: [B, U, K, J],
      })),
      (e[64] = B),
      (e[65] = U),
      (e[66] = K),
      (e[67] = J),
      (e[68] = Y))
    : (Y = e[68]);
  let X;
  e[69] !== z || e[70] !== Y
    ? ((X = (0, R.jsx)(Ce, { start: z, trailing: Y })),
      (e[69] = z),
      (e[70] = Y),
      (e[71] = X))
    : (X = e[71]);
  let dt;
  e[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        re(e);
      }),
      (e[72] = dt))
    : (dt = e[72]);
  let ft;
  e[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (e) => {
        ce(e);
      }),
      (e[73] = ft))
    : (ft = e[73]);
  let pt;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, R.jsx)(`div`, {
        className: `heading-xl font-normal text-token-foreground`,
        children: (0, R.jsx)(C, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (e[74] = pt))
    : (pt = e[74]);
  let mt;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, R.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, R.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: ft,
          children: [
            pt,
            (0, R.jsx)(`div`, {
              className: `text-lg font-normal text-token-description-foreground`,
              children: (0, R.jsx)(C, {
                id: `skills.page.subheading`,
                defaultMessage: `Give Codex superpowers. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: Ke },
              }),
            }),
          ],
        }),
      })),
      (e[75] = mt))
    : (mt = e[75]);
  let ht;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, R.jsx)(C, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (e[76] = ht))
    : (ht = e[76]);
  let Z;
  e[77] !== tt ||
  e[78] !== Qe ||
  e[79] !== D ||
  e[80] !== O ||
  e[81] !== b ||
  e[82] !== k.length ||
  e[83] !== A
    ? ((Z = (0, R.jsx)(Xe, {
        title: ht,
        children: (0, R.jsx)(Ze, {
          hostId: b,
          isLoading: D,
          uniqueSkillCount: k.length,
          filteredSkills: tt,
          getScopeBadgeLabel: Qe,
          roots: A,
          onSkillsUpdated: O,
        }),
      })),
      (e[77] = tt),
      (e[78] = Qe),
      (e[79] = D),
      (e[80] = O),
      (e[81] = b),
      (e[82] = k.length),
      (e[83] = A),
      (e[84] = Z))
    : (Z = e[84]);
  let gt;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, R.jsx)(C, {
        id: `skills.section.recommended`,
        defaultMessage: `Recommended`,
        description: `Heading for the recommended skills section`,
      })),
      (e[85] = gt))
    : (gt = e[85]);
  let Q;
  e[86] !== De ||
  e[87] !== Be ||
  e[88] !== E ||
  e[89] !== Ve ||
  e[90] !== Me ||
  e[91] !== Pe ||
  e[92] !== Re ||
  e[93] !== je ||
  e[94] !== S ||
  e[95] !== b
    ? ((Q = (0, R.jsx)(Xe, {
        title: gt,
        children: (0, R.jsx)($e, {
          hostId: b,
          isLoading: Me,
          errorMessage: je,
          skills: Re,
          searchQuery: S,
          canInstall: De,
          repoRoot: Pe,
          onInstall: Be,
          installedSkillMatchKeys: E,
          installingSkillId: Ve,
        }),
      })),
      (e[86] = De),
      (e[87] = Be),
      (e[88] = E),
      (e[89] = Ve),
      (e[90] = Me),
      (e[91] = Pe),
      (e[92] = Re),
      (e[93] = je),
      (e[94] = S),
      (e[95] = b),
      (e[96] = Q))
    : (Q = e[96]);
  let $;
  e[97] !== Z || e[98] !== Q
    ? (($ = (0, R.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: dt,
        children: (0, R.jsxs)(Le, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            mt,
            (0, R.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, R.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col gap-9 pb-10`,
                children: [Z, Q],
              }),
            }),
          ],
        }),
      })),
      (e[97] = Z),
      (e[98] = Q),
      (e[99] = $))
    : ($ = e[99]);
  let _t;
  return (
    e[100] !== X || e[101] !== $
      ? ((_t = (0, R.jsxs)(`div`, {
          className: `mr-4 flex h-full flex-col text-base`,
          children: [X, $],
        })),
        (e[100] = X),
        (e[101] = $),
        (e[102] = _t))
      : (_t = e[102]),
    _t
  );
}
function Ke(e) {
  return (0, R.jsx)(`a`, {
    href: be,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-token-link`,
    children: e,
  });
}
function qe() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), Je);
}
function Je() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function Ye(e) {
  return e.hostId;
}
function Xe(e) {
  let t = (0, I.c)(5),
    { title: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, R.jsx)(`div`, {
        className: `pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, R.jsxs)(`section`, {
          className: `flex flex-col gap-4`,
          children: [i, r],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ze(e) {
  let t = (0, I.c)(16),
    {
      hostId: n,
      isLoading: r,
      uniqueSkillCount: i,
      filteredSkills: a,
      getScopeBadgeLabel: o,
      roots: s,
      onSkillsUpdated: c,
    } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, R.jsx)(E, {
              title: (0, R.jsx)(C, {
                id: `skills.page.loading`,
                defaultMessage: `Loading skills...`,
                description: `Loading label on the skills page`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === 0) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, R.jsx)(E, {
              title: (0, R.jsx)(C, {
                id: `skills.page.empty`,
                defaultMessage: `No skills found`,
                description: `Empty state on the skills page`,
              }),
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, R.jsx)(E, {
              title: (0, R.jsx)(C, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, R.jsx)(C, {
                id: `skills.page.filteredEmptyDescription`,
                defaultMessage: `Try adjusting your search or scope filters`,
                description: `Description for filtered skills empty state`,
              }),
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let l;
  if (t[3] !== a || t[4] !== o || t[5] !== n || t[6] !== c || t[7] !== s) {
    let e;
    (t[9] !== o || t[10] !== n || t[11] !== c || t[12] !== s
      ? ((e = (e) => {
          let { skill: t } = e,
            r =
              t.scope === `repo`
                ? [
                    (0, R.jsx)(
                      Qe,
                      { label: o({ scope: `repo`, skillPath: t.path }) },
                      `${t.path}-repo`,
                    ),
                  ]
                : [],
            i = t.scope === `repo` ? Me({ skillPath: t.path, roots: s }) : null;
          return (0, R.jsx)(
            Ne,
            {
              skill: t,
              displayName: ee(t),
              hostId: n,
              scopeBadges: r,
              repoRoot: i,
              onSkillsUpdated: c,
            },
            t.path,
          );
        }),
        (t[9] = o),
        (t[10] = n),
        (t[11] = c),
        (t[12] = s),
        (t[13] = e))
      : (e = t[13]),
      (l = a.map(e)),
      (t[3] = a),
      (t[4] = o),
      (t[5] = n),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l));
  } else l = t[8];
  let u;
  return (
    t[14] === l
      ? (u = t[15])
      : ((u = (0, R.jsx)(M, { children: l })), (t[14] = l), (t[15] = u)),
    u
  );
}
function Qe(e) {
  let t = (0, I.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, R.jsx)(`span`, {
          className: `text-token-description-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function $e(e) {
  let t = (0, I.c)(31),
    {
      hostId: n,
      isLoading: r,
      errorMessage: i,
      skills: a,
      searchQuery: o,
      canInstall: s,
      repoRoot: c,
      onInstall: l,
      installedSkillMatchKeys: u,
      installingSkillId: d,
    } = e,
    f,
    p,
    m;
  if (
    t[0] !== s ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== u ||
    t[4] !== d ||
    t[5] !== r ||
    t[6] !== l ||
    t[7] !== c ||
    t[8] !== o ||
    t[9] !== a
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === u
        ? (e = t[14])
        : ((e = (e) => !j({ installedSkillMatchKeys: u, skill: e })),
          (t[13] = u),
          (t[14] = e));
      let h = a.filter(e),
        g = o.trim().toLowerCase(),
        _ = h.filter((e) =>
          g.length === 0
            ? !0
            : [e.name, e.description, e.shortDescription ?? ``]
                .join(` `)
                .toLowerCase()
                .includes(g),
        );
      if (r) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, R.jsx)(E, {
                title: (0, R.jsx)(C, {
                  id: `skills.page.loading`,
                  defaultMessage: `Loading skills...`,
                  description: `Loading label on the skills page`,
                }),
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (m = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(C, {
              id: `skills.recommended.error`,
              defaultMessage: `Unable to load recommended skills`,
              description: `Error title when recommended skills fail to load`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        (t[17] === i
          ? (n = t[18])
          : ((n = (0, R.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, R.jsx)(E, { title: e, description: i }),
            })),
            (t[17] = i),
            (t[18] = n)),
          (m = n));
        break bb0;
      }
      if (h.length === 0) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, R.jsx)(E, {
                title: (0, R.jsx)(C, {
                  id: `skills.page.empty`,
                  defaultMessage: `No skills found`,
                  description: `Empty state on the skills page`,
                }),
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (m = e));
        break bb0;
      }
      if (_.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, R.jsx)(E, {
                title: (0, R.jsx)(C, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, R.jsx)(C, {
                  id: `skills.page.filteredEmptyDescription`,
                  defaultMessage: `Try adjusting your search or scope filters`,
                  description: `Description for filtered skills empty state`,
                }),
              }),
            })),
            (t[20] = e))
          : (e = t[20]),
          (m = e));
        break bb0;
      }
      f = M;
      let v;
      (t[21] !== s ||
      t[22] !== n ||
      t[23] !== u ||
      t[24] !== d ||
      t[25] !== l ||
      t[26] !== c
        ? ((v = (e) =>
            (0, R.jsx)(
              Be,
              {
                skill: e,
                canInstall: s,
                hostId: n,
                isInstalled: j({ installedSkillMatchKeys: u, skill: e }),
                isInstalling: d === e.id,
                repoRoot: c,
                onInstall: l,
              },
              e.id,
            )),
          (t[21] = s),
          (t[22] = n),
          (t[23] = u),
          (t[24] = d),
          (t[25] = l),
          (t[26] = c),
          (t[27] = v))
        : (v = t[27]),
        (p = _.map(v)));
    }
    ((t[0] = s),
      (t[1] = i),
      (t[2] = n),
      (t[3] = u),
      (t[4] = d),
      (t[5] = r),
      (t[6] = l),
      (t[7] = c),
      (t[8] = o),
      (t[9] = a),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  } else ((f = t[10]), (p = t[11]), (m = t[12]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h;
  return (
    t[28] !== f || t[29] !== p
      ? ((h = (0, R.jsx)(f, { children: p })),
        (t[28] = f),
        (t[29] = p),
        (t[30] = h))
      : (h = t[30]),
    h
  );
}
var I,
  L,
  R,
  et = e(() => {
    ((I = u()),
      de(),
      i(),
      s(),
      (L = t(l(), 1)),
      x(),
      g(),
      b(),
      v(),
      xe(),
      k(),
      ye(),
      y(),
      D(),
      ce(),
      ge(),
      fe(),
      w(),
      n(),
      Ue(),
      T(),
      S(),
      _(),
      te(),
      N(),
      De(),
      je(),
      Re(),
      Pe(),
      re(),
      He(),
      Oe(),
      O(),
      A(),
      Ve(),
      (R = d()));
  });
export { et as n, F as t };
//# sourceMappingURL=skills-page-zCIrhInI.js.map
