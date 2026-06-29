import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  gc as r,
  lc as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dp as a,
  Em as o,
  Ep as s,
  Tm as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as l,
  Vy as u,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function d(e) {
  let t = (0, p.c)(11),
    { ancestors: n, current: r } = e,
    i = u(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = n.map(f)), (t[2] = n), (t[3] = o));
  let c;
  t[4] !== n.length || t[5] !== r
    ? ((c =
        r == null
          ? null
          : (0, h.jsxs)(h.Fragment, {
              children: [
                n.length > 0
                  ? (0, h.jsx)(s, {
                      "aria-hidden": !0,
                      className: `icon-xs shrink-0`,
                    })
                  : null,
                (0, h.jsx)(`span`, {
                  "aria-current": `page`,
                  className: `flex h-token-button-composer min-w-0 items-center truncate px-2 text-token-foreground`,
                  children: r,
                }),
              ],
            })),
      (t[4] = n.length),
      (t[5] = r),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== a || t[8] !== o || t[9] !== c
      ? ((l = (0, h.jsxs)(`nav`, {
          "aria-label": a,
          className: `flex min-w-0 items-center gap-1 text-base text-token-description-foreground`,
          children: [o, c],
        })),
        (t[7] = a),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function f(e, t) {
  return (0, h.jsxs)(
    m.Fragment,
    {
      children: [
        t > 0
          ? (0, h.jsx)(s, { "aria-hidden": !0, className: `icon-xs shrink-0` })
          : null,
        (0, h.jsx)(c, {
          className: `min-w-0`,
          color: `ghost`,
          size: `toolbar`,
          onClick: e.onClick,
          children: (0, h.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: e.label,
          }),
        }),
      ],
    },
    e.id,
  );
}
var p,
  m,
  h,
  g = e(() => {
    ((p = r()), (m = t(n(), 1)), l(), a(), o(), (h = i()));
  });
export { g as n, d as t };
//# sourceMappingURL=toolbar-breadcrumb-Z_0PUIuH.js.map
