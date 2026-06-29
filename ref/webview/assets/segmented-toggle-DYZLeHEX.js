import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Em as r,
  Tm as i,
  hh as a,
  mh as o,
  xp as s,
  yp as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
function l(e) {
  let t = (0, u.c)(29),
    {
      options: n,
      selectedId: r,
      onSelect: a,
      size: s,
      className: l,
      buttonClassName: f,
      fullWidth: p,
      uniform: m,
      selectedColor: h,
      unselectedColor: g,
      ariaLabel: _,
      ariaLabelledBy: v,
    } = e,
    y;
  t[0] === n
    ? (y = t[1])
    : ((y = n === void 0 ? [] : n), (t[0] = n), (t[1] = y));
  let b = y,
    x = s === void 0 ? `default` : s,
    S = p === void 0 ? !1 : p,
    C = h === void 0 ? `secondary` : h,
    w = g === void 0 ? `ghost` : g,
    T = m ?? (x === `icon` && b.length > 2),
    E = S ? `flex w-full` : `inline-flex`,
    D;
  t[2] !== l || t[3] !== E
    ? ((D = o(E, `items-center gap-0.5`, l)),
      (t[2] = l),
      (t[3] = E),
      (t[4] = D))
    : (D = t[4]);
  let O;
  if (
    t[5] !== f ||
    t[6] !== S ||
    t[7] !== a ||
    t[8] !== b ||
    t[9] !== C ||
    t[10] !== r ||
    t[11] !== x ||
    t[12] !== T ||
    t[13] !== w
  ) {
    let e;
    (t[15] !== f ||
    t[16] !== S ||
    t[17] !== a ||
    t[18] !== C ||
    t[19] !== r ||
    t[20] !== x ||
    t[21] !== T ||
    t[22] !== w
      ? ((e = (e) => {
          let t = e.id === r,
            n = e.disabled ?? !1,
            s = () => {
              n || a(e.id);
            };
          return e.tooltipContent
            ? (0, d.jsx)(
                c,
                {
                  tooltipContent: e.tooltipContent,
                  children: (0, d.jsx)(
                    i,
                    {
                      color: t ? C : w,
                      size: x,
                      onClick: s,
                      "aria-pressed": t,
                      uniform: T,
                      "aria-label": e.ariaLabel,
                      disabled: n,
                      className: o(S ? `flex-1 justify-center` : void 0, f),
                      children: e.label,
                    },
                    e.id,
                  ),
                },
                e.id,
              )
            : (0, d.jsx)(
                i,
                {
                  color: t ? C : w,
                  size: x,
                  onClick: s,
                  "aria-pressed": t,
                  uniform: T,
                  "aria-label": e.ariaLabel,
                  disabled: n,
                  className: o(S ? `flex-1 justify-center` : void 0, f),
                  children: e.label,
                },
                e.id,
              );
        }),
        (t[15] = f),
        (t[16] = S),
        (t[17] = a),
        (t[18] = C),
        (t[19] = r),
        (t[20] = x),
        (t[21] = T),
        (t[22] = w),
        (t[23] = e))
      : (e = t[23]),
      (O = b.map(e)),
      (t[5] = f),
      (t[6] = S),
      (t[7] = a),
      (t[8] = b),
      (t[9] = C),
      (t[10] = r),
      (t[11] = x),
      (t[12] = T),
      (t[13] = w),
      (t[14] = O));
  } else O = t[14];
  let k;
  return (
    t[24] !== _ || t[25] !== v || t[26] !== D || t[27] !== O
      ? ((k = (0, d.jsx)(`div`, {
          className: D,
          role: `group`,
          "aria-label": _,
          "aria-labelledby": v,
          children: O,
        })),
        (t[24] = _),
        (t[25] = v),
        (t[26] = D),
        (t[27] = O),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
var u,
  d,
  f = e(() => {
    ((u = t()), a(), r(), s(), (d = n()));
  });
export { f as n, l as t };
//# sourceMappingURL=segmented-toggle-DYZLeHEX.js.map
