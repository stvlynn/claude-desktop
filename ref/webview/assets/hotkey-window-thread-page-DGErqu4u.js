import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Go as t,
  Jt as n,
  Ko as r,
  O as i,
  Qt as a,
  Vo as o,
  gc as s,
  lc as c,
  qo as l,
  tr as u,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Rf as d,
  zf as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Ea as p,
  Hi as m,
  Iy as h,
  La as g,
  N as _,
  Ri as v,
  Vy as y,
  x as b,
  xa as x,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  $n as S,
  Qn as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  n as w,
  r as T,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-DXs0ueRP.js";
import { n as E, r as D } from "./use-hotkey-window-detail-layout-D-pNZzEr.js";
import {
  i as O,
  n as k,
  r as A,
  t as j,
} from "./local-conversation-stream-role-product-event-Dx3HoaAZ.js";
import {
  D as M,
  E as N,
  a as P,
  i as F,
} from "./local-conversation-thread-BvhTyO40.js";
function I() {
  let e = (0, L.c)(20),
    i = r(v),
    o = y(),
    { conversationId: s } = g(),
    { data: c } = l(w),
    d = c == null || c.configuredHotkey != null,
    m;
  e[0] === d ? (m = e[1]) : ((m = a(d)), (e[0] = d), (e[1] = m));
  let h = m,
    _ = t(f, s ?? null),
    x = t(b, s ?? null),
    S;
  e[2] === x ? (S = e[3]) : ((S = C(x ? u(x) : null)), (e[2] = x), (e[3] = S));
  let T = S;
  M(i);
  let E;
  if (
    (e[4] !== s || e[5] !== o || e[6] !== T || e[7] !== _
      ? ((E =
          s == null
            ? null
            : {
                title: (0, R.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, R.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-token-foreground`,
                      children:
                        _ ??
                        o.formatMessage({
                          id: `hotkeyWindow.defaultTitle`,
                          defaultMessage: `Codex`,
                          description: `Fallback title for hotkey window thread header`,
                        }),
                    }),
                    T == null
                      ? null
                      : (0, R.jsx)(`div`, {
                          className: `flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground`,
                          children: (0, R.jsx)(`span`, {
                            className: `truncate`,
                            children: T,
                          }),
                        }),
                  ],
                }),
                mainWindowPath: n(s),
              }),
        (e[4] = s),
        (e[5] = o),
        (e[6] = T),
        (e[7] = _),
        (e[8] = E))
      : (E = e[8]),
    D(E),
    !s)
  ) {
    let t;
    return (
      e[9] === h
        ? (t = e[10])
        : ((t = (0, R.jsx)(p, { to: h, replace: !0 })),
          (e[9] = h),
          (e[10] = t)),
      t
    );
  }
  let O, k;
  e[11] === s
    ? ((O = e[12]), (k = e[13]))
    : ((O = (0, R.jsx)(j, { conversationId: s })),
      (k = (0, R.jsx)(A, { conversationId: s })),
      (e[11] = s),
      (e[12] = O),
      (e[13] = k));
  let N;
  e[14] === s
    ? (N = e[15])
    : ((N = (0, R.jsx)(`div`, {
        className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
        children: (0, R.jsx)(F, {
          conversationId: s,
          allowMissingConversation: !0,
          showExternalFooter: !0,
        }),
      })),
      (e[14] = s),
      (e[15] = N));
  let P;
  return (
    e[16] !== O || e[17] !== k || e[18] !== N
      ? ((P = (0, R.jsxs)(R.Fragment, { children: [O, k, N] })),
        (e[16] = O),
        (e[17] = k),
        (e[18] = N),
        (e[19] = P))
      : (P = e[19]),
    P
  );
}
var L, R;
e(() => {
  ((L = s()),
    o(),
    i(),
    h(),
    x(),
    _(),
    O(),
    k(),
    P(),
    d(),
    m(),
    S(),
    N(),
    T(),
    E(),
    (R = c()));
})();
export { I as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page-DGErqu4u.js.map
