import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Ko as i,
  Vo as a,
  _ as o,
  _c as s,
  c,
  gc as l,
  i as u,
  lc as d,
  qo as f,
  u as p,
  v as m,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as h,
  Dn as g,
  Em as _,
  Om as v,
  On as y,
  Tm as b,
  Xu as x,
  gp as S,
  hh as C,
  ls as w,
  mh as T,
  mp as E,
  mr as D,
  pr as O,
  qu as k,
  us as A,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Eu as ee,
  Hl as j,
  Iy as M,
  Kp as N,
  Qp as P,
  Rl as F,
  Tu as I,
  Vy as L,
  em as R,
  ku as te,
  zy as z,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  gt as ne,
  ht as re,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import { n as ie, t as ae } from "./codex-avatar-Bz6TO2Qk.js";
import {
  bn as oe,
  yn as se,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Fn as B,
  In as V,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as ce,
  V as le,
  ir as ue,
  nr as de,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  n as fe,
  r as pe,
  t as me,
} from "./recommended-skill-statsig-overrides-CaQK62gR.js";
import {
  J as he,
  d as ge,
  f as _e,
  l as ve,
  q as ye,
  u as be,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as xe,
  t as Se,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import {
  i as Ce,
  o as we,
  r as Te,
  t as Ee,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js";
import {
  n as De,
  t as Oe,
} from "./app-initial~app-main~pets-settings-CPYQX7qb.js";
import { r as ke, t as Ae } from "./custom-avatars-query-tr8cLFBL.js";
import { n as je, t as Me } from "./use-avatar-options-CMZnWjwp.js";
function Ne(e) {
  let t = (0, H.c)(11),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = T(
        `flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border bg-token-bg-secondary`,
        o,
        r,
      )),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c = n?.id ?? `default`,
    l = n?.assetRef,
    u = a === `sm` ? `scale-[0.42]` : `scale-75`,
    d = n?.spritesheetUrl,
    f;
  t[3] !== l || t[4] !== u || t[5] !== d
    ? ((f = (0, U.jsx)(ae, { assetRef: l, className: u, spritesheetUrl: d })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== s || t[8] !== c || t[9] !== f
      ? ((p = (0, U.jsx)(`div`, {
          className: s,
          "data-avatar-id": c,
          children: f,
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var H,
  U,
  Pe = e(() => {
    ((H = l()), C(), ie(), (U = d()));
  });
function Fe(e) {
  let t = (0, W.c)(21),
    { avatarDirectory: n } = e,
    a = i(r),
    o = L(),
    s;
  t[0] !== o || t[1] !== a
    ? ((s = () => {
        a.get(S).danger(
          o.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = o),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (e) => {
        e.success || c();
      }),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] !== c || t[6] !== l
    ? ((u = { onSuccess: l, onError: c }), (t[5] = c), (t[6] = l), (t[7] = u))
    : (u = t[7]);
  let { mutate: d } = p(`open-file`, u),
    f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(z, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = f))
    : (f = t[8]);
  let m;
  t[9] === n
    ? (m = t[10])
    : ((m = (0, G.jsx)(`span`, {
        className: `font-mono text-xs break-all`,
        children: n,
      })),
      (t[9] = n),
      (t[10] = m));
  let h;
  t[11] !== n || t[12] !== d
    ? ((h = () => {
        d({ path: n, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = n),
      (t[12] = d),
      (t[13] = h))
    : (h = t[13]);
  let _, v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, G.jsx)(z, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (v = (0, G.jsx)(g, { className: `icon-2xs` })),
      (t[14] = _),
      (t[15] = v))
    : ((_ = t[14]), (v = t[15]));
  let y;
  t[16] === h
    ? (y = t[17])
    : ((y = (0, G.jsxs)(b, {
        color: `ghost`,
        onClick: h,
        size: `toolbar`,
        children: [_, v],
      })),
      (t[16] = h),
      (t[17] = y));
  let x;
  return (
    t[18] !== m || t[19] !== y
      ? ((x = (0, G.jsx)(B, { label: f, description: m, control: y })),
        (t[18] = m),
        (t[19] = y),
        (t[20] = x))
      : (x = t[20]),
    x
  );
}
var W,
  G,
  Ie = e(() => {
    ((W = l()), a(), M(), _(), E(), y(), n(), V(), c(), (G = d()));
  });
function Le(e) {
  let t = (0, q.c)(8),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
    } = e,
    l = r === void 0 ? Ce : r,
    u = i === void 0 ? !1 : i,
    d = a === void 0 ? !1 : a,
    f = o === void 0 ? !1 : o,
    p;
  return (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== u ||
    t[3] !== d ||
    t[4] !== f ||
    t[5] !== s ||
    t[6] !== c
      ? ((p = (0, J.jsx)(w, {
          electron: !0,
          children: (0, J.jsx)(Re, {
            avatarDirectory: n,
            avatarOptions: l,
            isCreatingCustomAvatar: u,
            isCustomAvatarLoadError: d,
            isLoadingCustomAvatars: f,
            onCreateCustomAvatar: s,
            onRefreshCustomAvatars: c,
          }),
        })),
        (t[0] = n),
        (t[1] = l),
        (t[2] = u),
        (t[3] = d),
        (t[4] = f),
        (t[5] = s),
        (t[6] = c),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function Re(e) {
  let t = (0, q.c)(77),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
    } = e,
    l = f(Oe),
    u = f(j),
    { selectedAvatar: d, setSelectedAvatarId: p } = Te(r),
    g,
    _,
    v,
    y,
    x,
    S,
    C,
    w,
    T,
    E;
  if (
    t[0] !== r ||
    t[1] !== l ||
    t[2] !== i ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== u ||
    t[8] !== d ||
    t[9] !== p
  ) {
    let e = r.filter(Be),
      n = r.filter(ze),
      f;
    t[20] === u
      ? (f = t[21])
      : ((f = (e, t) => {
          u.logProductEvent(
            ee,
            re({
              action: e,
              selectedAvatar: t,
              source: te.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
            }),
          );
        }),
        (t[20] = u),
        (t[21] = f));
    let D = f,
      O;
    t[22] !== p || t[23] !== D
      ? ((O = (e) => {
          (p(e.id), D(I.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[22] = p),
        (t[23] = D),
        (t[24] = O))
      : (O = t[24]);
    let k = O;
    ((E = `flex flex-col gap-[var(--padding-panel)]`),
      (v = ge),
      (_ = ge.Content),
      (g = ye),
      (y = `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`));
    let A;
    t[25] !== i || t[26] !== s || t[27] !== d || t[28] !== D
      ? ((A = s
          ? (0, J.jsx)(b, {
              color: `secondary`,
              loading: i,
              onClick: () => {
                (D(I.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, d),
                  s());
              },
              size: `toolbar`,
              children: (0, J.jsx)(z, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create your own pet`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (t[25] = i),
        (t[26] = s),
        (t[27] = d),
        (t[28] = D),
        (t[29] = A))
      : (A = t[29]);
    let j;
    t[30] === c
      ? (j = t[31])
      : ((j = c
          ? (0, J.jsx)(b, {
              color: `secondary`,
              onClick: c,
              size: `toolbar`,
              children: (0, J.jsx)(z, {
                id: `settings.pets.refresh`,
                defaultMessage: `Refresh`,
                description: `Button label to refresh custom pets from local manifests`,
              }),
            })
          : null),
        (t[30] = c),
        (t[31] = j));
    let M;
    t[32] !== l || t[33] !== d || t[34] !== D
      ? ((M = () => {
          (D(
            l
              ? I.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : I.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            d,
          ),
            m.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (t[32] = l),
        (t[33] = d),
        (t[34] = D),
        (t[35] = M))
      : (M = t[35]);
    let N;
    t[36] === l
      ? (N = t[37])
      : ((N = l
          ? (0, J.jsx)(z, {
              id: `settings.personalization.pets.tuckAwayPet`,
              defaultMessage: `Tuck Away Pet`,
              description: `Button that closes the floating pet overlay`,
            })
          : (0, J.jsx)(z, {
              id: `settings.personalization.pets.openPet`,
              defaultMessage: `Wake Pet`,
              description: `Button that opens the floating pet overlay`,
            })),
        (t[36] = l),
        (t[37] = N));
    let P;
    (t[38] !== M || t[39] !== N
      ? ((P = (0, J.jsx)(b, {
          color: `secondary`,
          onClick: M,
          size: `toolbar`,
          children: N,
        })),
        (t[38] = M),
        (t[39] = N),
        (t[40] = P))
      : (P = t[40]),
      t[41] !== A || t[42] !== j || t[43] !== P
        ? ((x = (0, J.jsxs)(`div`, {
            className: `flex justify-end gap-2 p-3`,
            children: [A, j, P],
          })),
          (t[41] = A),
          (t[42] = j),
          (t[43] = P),
          (t[44] = x))
        : (x = t[44]),
      t[45] === o
        ? (S = t[46])
        : ((S = o
            ? (0, J.jsxs)(`div`, {
                className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, J.jsx)(h, { className: `icon-xs` }),
                  (0, J.jsx)(z, {
                    id: `settings.pets.loadingCustom`,
                    defaultMessage: `Loading custom pets`,
                    description: `Message shown while loading custom pet manifests`,
                  }),
                ],
              })
            : null),
          (t[45] = o),
          (t[46] = S)),
      t[47] === a
        ? (C = t[48])
        : ((C = a
            ? (0, J.jsx)(`div`, {
                className: `p-3 text-sm text-token-text-secondary`,
                children: (0, J.jsx)(z, {
                  id: `settings.pets.loadCustomError`,
                  defaultMessage: `Unable to load custom pets`,
                  description: `Message shown when custom pet manifests fail to load`,
                }),
              })
            : null),
          (t[47] = a),
          (t[48] = C)));
    let F;
    (t[49] !== k || t[50] !== d
      ? ((F = (e) =>
          (0, J.jsx)(
            K,
            { avatar: e, isSelected: e.id === d.id, onSelectAvatar: k },
            e.id,
          )),
        (t[49] = k),
        (t[50] = d),
        (t[51] = F))
      : (F = t[51]),
      (w = n.map(F)));
    let L;
    (t[52] !== k || t[53] !== d
      ? ((L = (e) =>
          (0, J.jsx)(
            K,
            { avatar: e, isSelected: e.id === d.id, onSelectAvatar: k },
            e.id,
          )),
        (t[52] = k),
        (t[53] = d),
        (t[54] = L))
      : (L = t[54]),
      (T = e.map(L)),
      (t[0] = r),
      (t[1] = l),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d),
      (t[9] = p),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E));
  } else
    ((g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (E = t[19]));
  let D;
  t[55] === n
    ? (D = t[56])
    : ((D = n == null ? null : (0, J.jsx)(Fe, { avatarDirectory: n })),
      (t[55] = n),
      (t[56] = D));
  let O;
  t[57] !== y ||
  t[58] !== x ||
  t[59] !== S ||
  t[60] !== C ||
  t[61] !== w ||
  t[62] !== T ||
  t[63] !== D
    ? ((O = (0, J.jsxs)(`div`, { className: y, children: [x, S, C, w, T, D] })),
      (t[57] = y),
      (t[58] = x),
      (t[59] = S),
      (t[60] = C),
      (t[61] = w),
      (t[62] = T),
      (t[63] = D),
      (t[64] = O))
    : (O = t[64]);
  let k;
  t[65] !== g || t[66] !== O
    ? ((k = (0, J.jsx)(g, { children: O })),
      (t[65] = g),
      (t[66] = O),
      (t[67] = k))
    : (k = t[67]);
  let A;
  t[68] !== _ || t[69] !== k
    ? ((A = (0, J.jsx)(_, { children: k })),
      (t[68] = _),
      (t[69] = k),
      (t[70] = A))
    : (A = t[70]);
  let M;
  t[71] !== v || t[72] !== A
    ? ((M = (0, J.jsx)(v, { children: A })),
      (t[71] = v),
      (t[72] = A),
      (t[73] = M))
    : (M = t[73]);
  let N;
  return (
    t[74] !== M || t[75] !== E
      ? ((N = (0, J.jsx)(`section`, { className: E, children: M })),
        (t[74] = M),
        (t[75] = E),
        (t[76] = N))
      : (N = t[76]),
    N
  );
}
function ze(e) {
  return e.id.startsWith(`custom:`);
}
function Be(e) {
  return !e.id.startsWith(`custom:`);
}
function K(e) {
  let t = (0, q.c)(11),
    { avatar: n, isSelected: r, onSelectAvatar: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, J.jsx)(Ne, { avatar: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = r
        ? (0, J.jsx)(b, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, J.jsx)(z, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, J.jsx)(b, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, J.jsx)(z, {
              id: `settings.personalization.avatars.select`,
              defaultMessage: `Select`,
              description: `Button label to select an avatar`,
            }),
          })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o))
    : (o = t[5]);
  let s;
  return (
    t[6] !== n.description || t[7] !== n.displayName || t[8] !== a || t[9] !== o
      ? ((s = (0, J.jsx)(B, {
          icon: a,
          label: n.displayName,
          description: n.description,
          control: o,
        })),
        (t[6] = n.description),
        (t[7] = n.displayName),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
var q,
  J,
  Ve = e(() => {
    ((q = l()),
      N(),
      a(),
      M(),
      Pe(),
      ne(),
      De(),
      _(),
      v(),
      A(),
      o(),
      F(),
      _e(),
      V(),
      he(),
      we(),
      Ee(),
      Ie(),
      (J = d()));
  });
async function He({ forceReloadSkills: e, skillStatsigOverride: t }) {
  let n = await u(`install-recommended-skill`, {
    params: {
      forceReinstall: !0,
      hostId: R,
      installRoot: null,
      repoPath: X,
      skillId: Y,
      skillStatsigOverride: t,
      source: `bundled`,
    },
  });
  if (!n.success || n.destination == null)
    throw Error(n.error ?? `Unable to install Hatch Pet`);
  return (
    await e(),
    `${k({ name: Y, path: be(n.destination, `SKILL.md`) })} create a pet based on what you know about me`
  );
}
var Y,
  X,
  Ue = e(() => {
    (ve(), P(), x(), c(), (Y = `hatch-pet`), (X = `skills/.curated/hatch-pet`));
  });
function We() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(w, { electron: !0, children: (0, Q.jsx)(Ge, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ge() {
  let e = i(r),
    [t, n] = (0, Ke.useState)(!1),
    { avatarDirectory: a, avatarOptions: o, isError: s, isLoading: c } = je(),
    l = oe(),
    u = ue(),
    { forceReload: d } = D(void 0, R),
    f = pe(),
    p = async () => {
      n(!0);
      try {
        u({
          prefillPrompt: await He({
            forceReloadSkills: d,
            skillStatsigOverride: me(f, `hatch-pet`),
          }),
        });
      } catch {
        e.get(S).danger(
          (0, Q.jsx)(z, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the Hatch Pet skill cannot be installed`,
          }),
        );
      } finally {
        n(!1);
      }
    };
  return (0, Q.jsx)(Le, {
    avatarDirectory: a,
    avatarOptions: o,
    isCreatingCustomAvatar: t,
    isCustomAvatarLoadError: s,
    isLoadingCustomAvatars: c,
    onCreateCustomAvatar: () => {
      p();
    },
    onRefreshCustomAvatars: () => {
      l(Ae);
    },
  });
}
var Z,
  Ke,
  Q,
  qe = e(() => {
    ((Z = l()),
      a(),
      (Ke = t(s(), 1)),
      M(),
      E(),
      A(),
      de(),
      se(),
      n(),
      P(),
      fe(),
      O(),
      Ve(),
      Ue(),
      ke(),
      Me(),
      (Q = d()));
  });
function Je() {
  let e = (0, Ye.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Se, {
          title: (0, $.jsx)(le, { slug: `pets` }),
          children: (0, $.jsx)(We, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Ye, $;
e(() => {
  ((Ye = l()), qe(), xe(), ce(), ($ = d()));
})();
export { Je as PetsSettings };
//# sourceMappingURL=pets-settings-CeDsTNTI.js.map
