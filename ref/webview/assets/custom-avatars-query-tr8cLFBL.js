import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Fs as r,
  Is as i,
  Vo as a,
  h as o,
  m as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  nv as c,
  tv as l,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
var u,
  d,
  f,
  p = e(() => {
    (a(),
      c(),
      t(),
      o(),
      (u = [`custom-avatars`]),
      (d = i(n, () => ({
        queryKey: u,
        queryFn: () => l.customAvatars.load(),
        enabled: !0,
        networkMode: `always`,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        staleTime: s.INFINITE,
      }))),
      (f = r(n, (e, { get: t, scope: n }) => ({
        queryKey: [...u, `selected`, e],
        queryFn: async () => (
          await n.query.invalidate(d, { exact: !0, refetchType: `none` }),
          n.query.fetch(d)
        ),
        enabled:
          e.startsWith(`custom:`) &&
          t(d).data?.avatars.some(({ id: t }) => t === e) !== !0,
        gcTime: 0,
        networkMode: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: s.INFINITE,
      }))));
  });
export { f as i, d as n, p as r, u as t };
//# sourceMappingURL=custom-avatars-query-tr8cLFBL.js.map
