import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as t,
  ac as n,
  gc as r,
  h as i,
  m as a,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  ot as o,
  st as s,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  ar as c,
  fr as l,
  or as u,
  pr as d,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function f(e, t) {
  let r = (0, p.c)(9),
    i,
    s;
  if (r[0] !== e) {
    let t = c(e);
    ((s = n), (i = o(t)), (r[0] = e), (r[1] = i), (r[2] = s));
  } else ((i = r[1]), (s = r[2]));
  let l;
  r[3] !== e || r[4] !== t
    ? ((l = (n) => {
        let { signal: r } = n;
        return d(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: t },
          signal: r,
        });
      }),
      (r[3] = e),
      (r[4] = t),
      (r[5] = l))
    : (l = r[5]);
  let u;
  return (
    r[6] !== i || r[7] !== l
      ? ((u = { queryKey: i, queryFn: l, staleTime: a.INFINITE, gcTime: 18e5 }),
        (r[6] = i),
        (r[7] = l),
        (r[8] = u))
      : (u = r[8]),
    s(u)
  );
}
var p,
  m = e(() => {
    ((p = r()), t(), i(), l(), s(), u());
  });
export { f as n, m as t };
//# sourceMappingURL=use-codex-worktrees-DzKC3qS4.js.map
