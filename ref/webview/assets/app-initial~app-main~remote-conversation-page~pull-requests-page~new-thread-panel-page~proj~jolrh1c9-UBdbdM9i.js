import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Fs as r,
  Vo as i,
  js as a,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $n as o,
  Ln as s,
  Qn as c,
  Zn as l,
  ar as u,
  er as d,
  ir as f,
  or as p,
  zn as m,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function h({ getOptions: e, getParams: t, method: i }) {
  let f = r(
      n,
      (n) =>
        s(
          i,
          { commonDir: n.commonDir, root: n.root },
          t(n),
          u(n.hostConfig),
          n.hostConfig,
          { enabled: n.enabled, ...e?.(n) },
        ),
      { excludeFieldsFromKey: [`operationSource`] },
    ),
    p = a(
      n,
      (e, { get: t }) => (
        t(
          t(o, {
            commonDir: e.commonDir,
            enabled: e.enabled,
            hostConfig: e.hostConfig,
            operationSource: e.operationSource,
            root: e.root,
          }),
        ),
        t(f, e)
      ),
      { excludeFieldsFromKey: [`operationSource`] },
    );
  return {
    fromCwd$: a(
      n,
      (e, { get: t }) => {
        if (!e.enabled || e.cwd == null) return l();
        let n = t(d, {
            cwd: e.cwd,
            enabled: e.enabled,
            hostConfig: e.hostConfig,
            operationSource: e.operationSource,
            watchForGitInit: !1,
          }),
          r = n.data ?? null;
        if (r == null) return c(n);
        let { cwd: i, ...a } = e;
        return t(p, { ...a, commonDir: r.commonDir, root: r.root });
      },
      { excludeFieldsFromKey: [`operationSource`] },
    ),
    fromMetadata$: p,
    queryByMetadata$: f,
  };
}
var g = e(() => {
    (i(), t(), m(), f(), p());
  }),
  _,
  v,
  y,
  b = e(() => {
    (g(),
      (_ = h({
        method: `config-value`,
        getParams: (e) => ({
          key: e.key,
          operationSource: e.operationSource,
          root: e.root,
          scope: e.scope,
        }),
        getOptions: (e) => ({
          refetchOnWindowFocus: e.refetchOnWindowFocus,
          select: (e) => e.value,
          ...(e.staleTime == null ? {} : { staleTime: e.staleTime }),
        }),
      })),
      (v = _.fromCwd$),
      (y = _.queryByMetadata$));
  });
export { g as a, h as i, v as n, b as r, y as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-UBdbdM9i.js.map
