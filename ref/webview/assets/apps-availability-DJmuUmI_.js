import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as t,
  C as n,
  D as r,
  E as i,
  Go as a,
  Ko as o,
  S as s,
  Vo as c,
  cc as l,
  gc as u,
  tc as d,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  gp as f,
  ic as p,
  mp as m,
  tc as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fy as g,
  Iy as _,
  Qp as v,
  Vy as y,
  vg as b,
  yg as x,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Wt as S,
  bn as C,
  nn as w,
  yn as T,
  zt as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
function D(e) {
  let t = (0, k.c)(28),
    r = e?.hostId ?? `local`,
    s = o(i),
    { data: c } = a(w, r),
    u = l(),
    p = C(),
    m = y(),
    g;
  t[0] === r ? (g = t[1]) : ((g = h(r)), (t[0] = r), (t[1] = g));
  let _ = g,
    v;
  t[2] !== _ || t[3] !== p
    ? ((v = async () => {
        await Promise.all([p(_), p(E), p([`user-saved-config`])]);
      }),
      (t[2] = _),
      (t[3] = p),
      (t[4] = v))
    : (v = t[4]);
  let b = v,
    S;
  t[5] !== r ||
  t[6] !== c?.configWriteTarget?.expectedVersion ||
  t[7] !== c?.configWriteTarget?.filePath
    ? ((S = async (e) => {
        let { appId: t, enabled: n } = e;
        await x(`batch-write-config-value`, {
          hostId: r,
          edits: O({ appId: t, enabled: n }),
          filePath: c?.configWriteTarget?.filePath ?? null,
          expectedVersion: c?.configWriteTarget?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (t[5] = r),
      (t[6] = c?.configWriteTarget?.expectedVersion),
      (t[7] = c?.configWriteTarget?.filePath),
      (t[8] = S))
    : (S = t[8]);
  let T;
  t[9] !== _ || t[10] !== u
    ? ((T = async (e) => {
        let { appId: t, enabled: n } = e;
        await u.cancelQueries({ queryKey: _ });
        let r = u.getQueryData(_);
        return (
          r &&
            u.setQueryData(
              _,
              r.map((e) =>
                e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n },
              ),
            ),
          { previousApps: r }
        );
      }),
      (t[9] = _),
      (t[10] = u),
      (t[11] = T))
    : (T = t[11]);
  let D, A;
  t[12] !== _ || t[13] !== m || t[14] !== u || t[15] !== s
    ? ((D = (e, t) => {
        let { appId: n, appName: r, enabled: i } = t,
          a = r ?? u.getQueryData(_)?.find((e) => e.id === n)?.name ?? n;
        s.get(f).success(
          m.formatMessage(i ? j.enableSuccess : j.disableSuccess, {
            appName: a,
          }),
        );
      }),
      (A = (e, t, r) => {
        (n.error(`Failed to update app enablement`, {
          safe: {},
          sensitive: { error: e },
        }),
          s.get(f).danger(m.formatMessage(j.updateError)),
          r?.previousApps && u.setQueryData(_, r.previousApps));
      }),
      (t[12] = _),
      (t[13] = m),
      (t[14] = u),
      (t[15] = s),
      (t[16] = D),
      (t[17] = A))
    : ((D = t[16]), (A = t[17]));
  let M;
  t[18] !== b || t[19] !== S || t[20] !== T || t[21] !== D || t[22] !== A
    ? ((M = {
        mutationFn: S,
        onMutate: T,
        onSuccess: D,
        onError: A,
        onSettled: b,
      }),
      (t[18] = b),
      (t[19] = S),
      (t[20] = T),
      (t[21] = D),
      (t[22] = A),
      (t[23] = M))
    : (M = t[23]);
  let N = d(M),
    P = N.isPending ? (N.variables?.appId ?? null) : null,
    F;
  return (
    t[24] !== N.isPending || t[25] !== N.mutateAsync || t[26] !== P
      ? ((F = {
          setAppEnabled: N.mutateAsync,
          isUpdating: N.isPending,
          updatingAppId: P,
        }),
        (t[24] = N.isPending),
        (t[25] = N.mutateAsync),
        (t[26] = P),
        (t[27] = F))
      : (F = t[27]),
    F
  );
}
function O({ appId: e, enabled: t }) {
  return [{ keyPath: `${A}.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
var k,
  A,
  j,
  M = e(() => {
    ((k = u()),
      t(),
      c(),
      _(),
      b(),
      m(),
      p(),
      S(),
      T(),
      r(),
      v(),
      s(),
      (A = `apps`),
      (j = g({
        enableSuccess: {
          id: `apps.enable.success`,
          defaultMessage: `{appName} app enabled`,
          description: `Toast shown after successfully enabling an app`,
        },
        disableSuccess: {
          id: `apps.disable.success`,
          defaultMessage: `{appName} app disabled`,
          description: `Toast shown after successfully disabling an app`,
        },
        updateError: {
          id: `apps.update.error`,
          defaultMessage: `Failed to update app`,
          description: `Toast shown when enabling or disabling an app fails`,
        },
      })));
  });
export { D as n, M as t };
//# sourceMappingURL=apps-availability-DJmuUmI_.js.map
