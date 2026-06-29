import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Vo as r,
  c as i,
  gc as a,
  h as o,
  lc as s,
  m as c,
  qo as l,
  s as u,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Em as d,
  Tm as f,
  bs as p,
  ys as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fa as h,
  Iy as g,
  Na as _,
  xa as v,
  zy as y,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  J as b,
  d as x,
  f as S,
  q as C,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as w,
  t as T,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
function E() {
  let e = (0, O.c)(18),
    t = h(),
    n = _(),
    r;
  e[0] === n.state
    ? (r = e[1])
    : ((r = D(n.state)), (e[0] = n.state), (e[1] = r));
  let i = r,
    a =
      n.state != null && typeof n.state == `object` && !Array.isArray(n.state)
        ? n.state
        : null,
    { data: o, isLoading: s } = l(A),
    c;
  e[2] !== i || e[3] !== a || e[4] !== t
    ? ((c = () => {
        t(i, { replace: !0, state: a });
      }),
      (e[2] = i),
      (e[3] = a),
      (e[4] = t),
      (e[5] = c))
    : (c = e[5]);
  let u, d;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, k.jsx)(m, { className: `icon-xs` })),
      (d = (0, k.jsx)(y, {
        id: `settings.openSourceLicenses.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to the main settings page`,
      })),
      (e[6] = u),
      (e[7] = d))
    : ((u = e[6]), (d = e[7]));
  let p;
  e[8] === c
    ? (p = e[9])
    : ((p = (0, k.jsxs)(f, {
        color: `ghost`,
        size: `toolbar`,
        onClick: c,
        children: [u, d],
      })),
      (e[8] = c),
      (e[9] = p));
  let g, v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, k.jsx)(y, {
        id: `settings.openSourceLicenses.title`,
        defaultMessage: `Open source licenses`,
        description: `Title for the open source licenses settings page`,
      })),
      (v = (0, k.jsx)(y, {
        id: `settings.openSourceLicenses.subtitle`,
        defaultMessage: `Third-party notices for dependencies included in this app`,
        description: `Subtitle for the open source licenses settings page`,
      })),
      (e[10] = g),
      (e[11] = v))
    : ((g = e[10]), (v = e[11]));
  let b;
  e[12] !== o || e[13] !== s
    ? ((b = (0, k.jsx)(x, {
        children: (0, k.jsx)(x.Content, {
          children: (0, k.jsx)(C, {
            children: s
              ? (0, k.jsx)(`div`, {
                  className: `text-sm text-token-text-secondary`,
                  children: (0, k.jsx)(y, {
                    id: `settings.openSourceLicenses.loading`,
                    defaultMessage: `Loading…`,
                    description: `Loading label while fetching third-party notices`,
                  }),
                })
              : o?.text
                ? (0, k.jsx)(`pre`, {
                    className: `bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary`,
                    children: o.text,
                  })
                : (0, k.jsx)(`div`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, k.jsx)(y, {
                      id: `settings.openSourceLicenses.missing`,
                      defaultMessage: `No third-party notices were found.`,
                      description: `Message shown when the third-party notices file is missing`,
                    }),
                  }),
          }),
        }),
      })),
      (e[12] = o),
      (e[13] = s),
      (e[14] = b))
    : (b = e[14]);
  let S;
  return (
    e[15] !== p || e[16] !== b
      ? ((S = (0, k.jsx)(T, {
          backSlot: p,
          title: g,
          subtitle: v,
          children: b,
        })),
        (e[15] = p),
        (e[16] = b),
        (e[17] = S))
      : (S = e[17]),
    S
  );
}
function D(e) {
  if (
    typeof e == `object` &&
    e &&
    !Array.isArray(e) &&
    `licensesBackPath` in e
  ) {
    let t = e.licensesBackPath;
    if (typeof t == `string` && t.startsWith(`/settings/`)) return t;
  }
  return `/settings/general`;
}
var O, k, A;
e(() => {
  ((O = a()),
    r(),
    g(),
    v(),
    d(),
    p(),
    t(),
    w(),
    S(),
    b(),
    o(),
    i(),
    (k = s()),
    (A = u(n, `third-party-notices`, {
      enabled: !0,
      staleTime: c.ONE_MINUTE,
    })));
})();
export { E as OpenSourceLicensesPage };
//# sourceMappingURL=open-source-licenses-page-DiIBjlKM.js.map
