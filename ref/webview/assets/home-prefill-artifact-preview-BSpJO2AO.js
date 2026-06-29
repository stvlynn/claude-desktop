import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ko as n,
  Vo as r,
  _c as i,
  gc as a,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  dn as o,
  fn as s,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Hi as c,
  Ri as l,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function u(e) {
  let t = (0, f.c)(4),
    { hostId: n, locationKey: r, previewFiles: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = { hostId: n, locationKey: r, previewFiles: i }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    d(a),
    null
  );
}
function d(e) {
  let t = (0, f.c)(6),
    { hostId: r, locationKey: i, previewFiles: a } = e,
    o = n(l),
    c = (0, p.useRef)(null),
    u,
    d;
  (t[0] !== r || t[1] !== i || t[2] !== a || t[3] !== o
    ? ((u = () => {
        if (!(a == null || a.length === 0 || c.current === i)) {
          c.current = i;
          for (let e of a) {
            let t = e.fsPath || e.path;
            t == null ||
              t.length === 0 ||
              s(o, t, { hostId: r, title: e.label });
          }
        }
      }),
      (d = [r, i, a, o]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = u),
      (t[5] = d))
    : ((u = t[4]), (d = t[5])),
    (0, p.useEffect)(u, d));
}
var f, p;
e(() => {
  ((f = a()), r(), (p = t(i(), 1)), o(), c());
})();
export { u as HomePrefillArtifactPreview };
//# sourceMappingURL=home-prefill-artifact-preview-BSpJO2AO.js.map
