import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  gc as r,
  lc as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as a,
  Om as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
function s(e) {
  let t = (0, l.c)(12),
    { hasNextPage: n, isFetchingNextPage: r, onLoadNextPage: i } = e,
    o = (0, u.useRef)(null),
    s;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((s = () => {
        n && !r && i();
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s))
    : (s = t[3]);
  let f = (0, u.useEffectEvent)(s),
    p;
  t[4] !== n || t[5] !== r || t[6] !== f
    ? ((p = () => {
        let e = o.current;
        if (e == null || !n || r) return;
        if (typeof IntersectionObserver > `u`) {
          f();
          return;
        }
        let t = new IntersectionObserver((e) => {
          e.some(c) && (t.disconnect(), f());
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = f),
      (t[7] = p))
    : (p = t[7]);
  let m;
  if (
    (t[8] !== n || t[9] !== r
      ? ((m = [n, r]), (t[8] = n), (t[9] = r), (t[10] = m))
      : (m = t[10]),
    (0, u.useEffect)(p, m),
    !n && !r)
  )
    return null;
  let h;
  return (
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, d.jsx)(`div`, {
          ref: o,
          className: `flex justify-center py-3`,
          children: (0, d.jsx)(a, {
            className: `icon-xs text-token-text-secondary`,
          }),
        })),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
function c(e) {
  return e.isIntersecting;
}
var l,
  u,
  d,
  f = e(() => {
    ((l = r()), (u = t(n(), 1)), o(), (d = i()));
  });
export { f as n, s as t };
//# sourceMappingURL=infinite-scroll-pagination-spinner-DKk_zYlO.js.map
