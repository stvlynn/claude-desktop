import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Op as r,
  do as i,
  eo as a,
  fo as o,
  hh as s,
  kp as c,
  mh as l,
  no as u,
  oo as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as f,
  Qp as p,
  Vy as m,
  em as h,
  zy as g,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Jn as _,
  qn as v,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as y,
  R as b,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  v as x,
  y as S,
} from "./app-initial~app-main~projects-index-page~local-conversation-page-HgUkvfGN.js";
function C(e) {
  let t = (0, E.c)(43),
    {
      connectedRemoteConnections: n,
      disabled: i,
      onSelectHost: o,
      remoteConnectionHostIds: s,
      selectedHostId: c,
      align: l,
      contentWidth: d,
      localIcon: f,
      localLabel: p,
      showConnectedIndicator: _,
      triggerClassName: y,
      triggerColor: x,
      useRemoteHostColors: S,
    } = e,
    C = i === void 0 ? !1 : i,
    O = f === void 0 ? v : f,
    k = _ === void 0 ? !1 : _,
    A = S === void 0 ? !0 : S,
    j = m(),
    M;
  t[0] !== n || t[1] !== c
    ? ((M = n.find((e) => e.hostId === c) ?? null),
      (t[0] = n),
      (t[1] = c),
      (t[2] = M))
    : (M = t[2]);
  let N = M,
    P;
  t[3] !== j || t[4] !== p
    ? ((P =
        p ??
        j.formatMessage({
          id: `settings.hostDropdown.local`,
          defaultMessage: `Local`,
          description: `Label for the local host in settings connection dropdowns`,
        })),
      (t[3] = j),
      (t[4] = p),
      (t[5] = P))
    : (P = t[5]);
  let F = P,
    I = N?.displayName ?? F,
    L;
  t[6] === F
    ? (L = t[7])
    : ((L = { hostId: h, displayName: F }), (t[6] = F), (t[7] = L));
  let R;
  t[8] !== n || t[9] !== L
    ? ((R = [L, ...n]), (t[8] = n), (t[9] = L), (t[10] = R))
    : (R = t[10]);
  let z = R,
    B = C ? `hidden` : void 0,
    V;
  t[11] !== O || t[12] !== s || t[13] !== N || t[14] !== A
    ? ((V =
        N == null
          ? (0, D.jsx)(O, {
              className: `icon-xs shrink-0 text-token-foreground`,
            })
          : (0, D.jsx)(T, {
              className: `icon-xs shrink-0`,
              hostId: N.hostId,
              hostIdsForColorAssignment: s,
              useRemoteHostColors: A,
            })),
      (t[11] = O),
      (t[12] = s),
      (t[13] = N),
      (t[14] = A),
      (t[15] = V))
    : (V = t[15]);
  let H;
  t[16] === I
    ? (H = t[17])
    : ((H = (0, D.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: I,
      })),
      (t[16] = I),
      (t[17] = H));
  let U;
  t[18] !== N || t[19] !== k
    ? ((U = N != null && k ? (0, D.jsx)(w, {}) : null),
      (t[18] = N),
      (t[19] = k),
      (t[20] = U))
    : (U = t[20]);
  let W;
  t[21] !== C ||
  t[22] !== V ||
  t[23] !== H ||
  t[24] !== U ||
  t[25] !== B ||
  t[26] !== y ||
  t[27] !== x
    ? ((W = (0, D.jsxs)(b, {
        className: y,
        color: x,
        disabled: C,
        chevronClassName: B,
        children: [V, H, U],
      })),
      (t[21] = C),
      (t[22] = V),
      (t[23] = H),
      (t[24] = U),
      (t[25] = B),
      (t[26] = y),
      (t[27] = x),
      (t[28] = W))
    : (W = t[28]);
  let G = W;
  if (C) return G;
  let K = l ?? `end`,
    q = d ?? `menuWide`,
    J;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, D.jsx)(u.Title, {
        children: (0, D.jsx)(g, {
          id: `settings.hostDropdown.title`,
          defaultMessage: `Host`,
          description: `Title for the Host dropdown shown in settings pages`,
        }),
      })),
      (t[29] = J))
    : (J = t[29]);
  let Y;
  t[30] !== O ||
  t[31] !== z ||
  t[32] !== o ||
  t[33] !== s ||
  t[34] !== c ||
  t[35] !== k ||
  t[36] !== A
    ? ((Y = (0, D.jsx)(u.Section, {
        className: `max-h-40 overflow-y-auto`,
        children: z.map((e) =>
          (0, D.jsx)(
            u.Item,
            {
              RightIcon: e.hostId === c ? r : void 0,
              onSelect: () => {
                o(e.hostId);
              },
              children: (0, D.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  e.hostId === `local`
                    ? (0, D.jsx)(O, { className: `icon-xs shrink-0` })
                    : (0, D.jsx)(T, {
                        className: `icon-xs shrink-0`,
                        hostId: e.hostId,
                        hostIdsForColorAssignment: s,
                        useRemoteHostColors: A,
                      }),
                  (0, D.jsx)(`span`, {
                    className: `truncate`,
                    children: e.displayName,
                  }),
                  e.hostId !== `local` && k ? (0, D.jsx)(w, {}) : null,
                ],
              }),
            },
            e.hostId,
          ),
        ),
      })),
      (t[30] = O),
      (t[31] = z),
      (t[32] = o),
      (t[33] = s),
      (t[34] = c),
      (t[35] = k),
      (t[36] = A),
      (t[37] = Y))
    : (Y = t[37]);
  let X;
  return (
    t[38] !== K || t[39] !== q || t[40] !== Y || t[41] !== G
      ? ((X = (0, D.jsxs)(a, {
          align: K,
          contentWidth: q,
          triggerButton: G,
          children: [J, Y],
        })),
        (t[38] = K),
        (t[39] = q),
        (t[40] = Y),
        (t[41] = G),
        (t[42] = X))
      : (X = t[42]),
    X
  );
}
function w() {
  let e = (0, E.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, D.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 shrink-0 rounded-full bg-green-500`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function T(e) {
  let t = (0, E.c)(8),
    {
      className: n,
      hostId: r,
      hostIdsForColorAssignment: a,
      useRemoteHostColors: o,
    } = e;
  if (!o) {
    let e;
    t[0] === n
      ? (e = t[1])
      : ((e = l(n, `text-token-foreground`)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, D.jsx)(i, { className: e })), (t[2] = e), (t[3] = r)),
      r
    );
  }
  let s;
  return (
    t[4] !== n || t[5] !== r || t[6] !== a
      ? ((s = (0, D.jsx)(x, {
          className: n,
          hostId: r,
          hostIdsForColorAssignment: a,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = a),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var E,
  D,
  O = e(() => {
    ((E = t()), s(), f(), d(), S(), c(), o(), _(), p(), y(), (D = n()));
  });
export { O as n, C as t };
//# sourceMappingURL=settings-host-dropdown-D9ctLTpF.js.map
