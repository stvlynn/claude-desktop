import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Ko as r,
  Vo as i,
  gc as a,
  lc as o,
  qo as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ca as c,
  Dm as l,
  Do as u,
  Em as d,
  Om as f,
  Tm as p,
  _a as m,
  ba as h,
  va as g,
  wo as _,
  ya as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as y,
  zy as b,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import { n as x, t as S } from "./avatar-mascot-button-CdmzjmYy.js";
import {
  bn as C,
  yn as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  r as T,
  t as E,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js";
import { r as D, t as O } from "./custom-avatars-query-tr8cLFBL.js";
import {
  i as k,
  n as A,
  r as j,
  t as M,
} from "./pet-install-state-DxmDfR1m.js";
function N(e) {
  let t = (0, P.c)(37),
    { session: n, onClose: r, onInstall: i } = e,
    { setSelectedAvatarId: a } = T(),
    o = n.status !== `installing`,
    s = n.status === `ready` || n.status === `installError`,
    c;
  t[0] !== o || t[1] !== r
    ? ((c = (e) => {
        !e && o && r();
      }),
      (t[0] = o),
      (t[1] = r),
      (t[2] = c))
    : (c = t[2]);
  let u = !o,
    d;
  t[3] !== s || t[4] !== i
    ? ((d = (e) => {
        (e.preventDefault(), s && i());
      }),
      (t[3] = s),
      (t[4] = i),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== n.name || t[7] !== n.status
    ? ((f =
        n.status === `installed`
          ? (0, F.jsx)(b, {
              id: `pets.install.installedTitle`,
              defaultMessage: `Installed {petName}`,
              description: `Title shown after a pet installs successfully`,
              values: { petName: n.name },
            })
          : (0, F.jsx)(b, {
              id: `pets.install.title`,
              defaultMessage: `Install {petName}?`,
              description: `Title for the pet install modal`,
              values: { petName: n.name },
            })),
      (t[6] = n.name),
      (t[7] = n.status),
      (t[8] = f))
    : (f = t[8]);
  let y;
  t[9] !== n.description || t[10] !== f
    ? ((y = (0, F.jsx)(h, {
        children: (0, F.jsx)(v, { title: f, subtitle: n.description }),
      })),
      (t[9] = n.description),
      (t[10] = f),
      (t[11] = y))
    : (y = t[11]);
  let x;
  t[12] !== n.name || t[13] !== n.preview || t[14] !== n.status
    ? ((x = (0, F.jsx)(h, {
        children: (0, F.jsx)(`div`, {
          className: `flex min-h-32 items-center justify-center`,
          children:
            n.status === `loading`
              ? (0, F.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                  children: [
                    (0, F.jsx)(l, { className: `icon-xs` }),
                    (0, F.jsx)(b, {
                      id: `pets.install.loading`,
                      defaultMessage: `Loading {petName}`,
                      description: `Loading state shown while a pet preview is prepared`,
                      values: { petName: n.name },
                    }),
                  ],
                })
              : n.status === `previewError`
                ? (0, F.jsx)(`div`, {
                    className: `px-5 text-center text-sm text-token-text-secondary`,
                    children: (0, F.jsx)(b, {
                      id: `pets.install.error`,
                      defaultMessage: `Unable to load {petName}`,
                      description: `Error state shown when a pet cannot be prepared`,
                      values: { petName: n.name },
                    }),
                  })
                : (0, F.jsx)(S, {
                    assetRef: `codex`,
                    spritesheetUrl: n.preview.spritesheetDataUrl,
                  }),
        }),
      })),
      (t[12] = n.name),
      (t[13] = n.preview),
      (t[14] = n.status),
      (t[15] = x))
    : (x = t[15]);
  let C;
  t[16] !== n.name || t[17] !== n.status
    ? ((C =
        n.status === `installError`
          ? (0, F.jsx)(h, {
              children: (0, F.jsx)(`div`, {
                className: `text-sm text-token-text-secondary`,
                children: (0, F.jsx)(b, {
                  id: `pets.install.installError`,
                  defaultMessage: `Unable to install {petName}`,
                  description: `Error state shown when a pet preview is valid but installation fails`,
                  values: { petName: n.name },
                }),
              }),
            })
          : null),
      (t[16] = n.name),
      (t[17] = n.status),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== o ||
  t[20] !== s ||
  t[21] !== r ||
  t[22] !== n.installedAvatarId ||
  t[23] !== n.status ||
  t[24] !== a
    ? ((w = (0, F.jsx)(h, {
        children:
          n.status === `installed`
            ? (0, F.jsxs)(g, {
                children: [
                  (0, F.jsx)(p, {
                    color: `outline`,
                    type: `button`,
                    onClick: r,
                    children: (0, F.jsx)(b, {
                      id: `pets.install.close`,
                      defaultMessage: `Close`,
                      description: `Button label to close a completed pet install modal`,
                    }),
                  }),
                  (0, F.jsx)(p, {
                    type: `button`,
                    onClick: () => {
                      (a(n.installedAvatarId), r());
                    },
                    children: (0, F.jsx)(b, {
                      id: `pets.install.usePet`,
                      defaultMessage: `Use this pet`,
                      description: `Button label to select an installed pet`,
                    }),
                  }),
                ],
              })
            : (0, F.jsxs)(g, {
                children: [
                  (0, F.jsx)(p, {
                    color: `outline`,
                    disabled: !o,
                    type: `button`,
                    onClick: r,
                    children: (0, F.jsx)(b, {
                      id: `pets.install.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button label to cancel a pet install`,
                    }),
                  }),
                  (0, F.jsx)(p, {
                    disabled: !s,
                    loading: n.status === `installing`,
                    type: `submit`,
                    children:
                      n.status === `installError`
                        ? (0, F.jsx)(b, {
                            id: `pets.install.tryAgain`,
                            defaultMessage: `Try again`,
                            description: `Button label to retry a failed pet install`,
                          })
                        : (0, F.jsx)(b, {
                            id: `pets.install.install`,
                            defaultMessage: `Install`,
                            description: `Button label to install a pet`,
                          }),
                  }),
                ],
              }),
      })),
      (t[19] = o),
      (t[20] = s),
      (t[21] = r),
      (t[22] = n.installedAvatarId),
      (t[23] = n.status),
      (t[24] = a),
      (t[25] = w))
    : (w = t[25]);
  let E;
  t[26] !== d || t[27] !== y || t[28] !== x || t[29] !== C || t[30] !== w
    ? ((E = (0, F.jsxs)(m, {
        as: `form`,
        onSubmit: d,
        children: [y, x, C, w],
      })),
      (t[26] = d),
      (t[27] = y),
      (t[28] = x),
      (t[29] = C),
      (t[30] = w),
      (t[31] = E))
    : (E = t[31]);
  let D;
  return (
    t[32] !== o || t[33] !== c || t[34] !== u || t[35] !== E
      ? ((D = (0, F.jsx)(_, {
          open: !0,
          onOpenChange: c,
          shouldIgnoreClickOutside: u,
          showDialogClose: o,
          size: `compact`,
          children: E,
        })),
        (t[32] = o),
        (t[33] = c),
        (t[34] = u),
        (t[35] = E),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
var P,
  F,
  I = e(() => {
    ((P = a()), y(), x(), E(), d(), u(), c(), f(), (F = o()));
  });
function L(e) {
  let t = (0, R.c)(10),
    { onClose: i } = e,
    a = r(n),
    o = s(k),
    c = C();
  if (o == null) return null;
  let l;
  t[0] !== i || t[1] !== a
    ? ((l = () => {
        (M(a), i());
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== c || t[4] !== a
    ? ((u = () => j(a, () => c(O))), (t[3] = c), (t[4] = a), (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== o || t[7] !== l || t[8] !== u
      ? ((d = (0, z.jsx)(N, { session: o, onClose: l, onInstall: u })),
        (t[6] = o),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
var R, z;
e(() => {
  ((R = a()), i(), D(), w(), t(), I(), A(), (z = o()));
})();
export { L as PetInstallModalHost };
//# sourceMappingURL=pet-install-modal-host-D2_OQIXZ.js.map
