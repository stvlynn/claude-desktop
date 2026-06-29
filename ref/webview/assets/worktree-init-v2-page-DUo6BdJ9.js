import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  C as r,
  D as i,
  E as a,
  Jt as o,
  Ko as s,
  O as c,
  S as l,
  Ti as ee,
  Vo as te,
  Zt as ne,
  _ as u,
  _c as d,
  gc as f,
  lc as p,
  tc as re,
  y as ie,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Cc as ae,
  Dc as oe,
  Ec as se,
  Lc as m,
  Rc as ce,
  Sc as le,
  Tc as h,
  bc as ue,
  i as de,
  n as g,
  t as fe,
  xc as pe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Em as me,
  Tm as _,
  gp as he,
  mp as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Ea as ge,
  Ey as y,
  Fa as _e,
  Iy as ve,
  Kh as b,
  La as ye,
  Na as be,
  Ty as x,
  Vy as xe,
  aa as Se,
  bh as S,
  dc as C,
  fa as w,
  fc as T,
  qh as E,
  sa as Ce,
  vg as D,
  vh as O,
  xa as k,
  yg as A,
  zy as j,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Bt as we,
  Ht as M,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  Au as N,
  ht as P,
  ju as Te,
  mt as F,
  ni as I,
  ri as L,
  vt as R,
  yt as z,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  ir as Ee,
  nr as B,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import { i as V } from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~l0drf339-C-9b569O.js";
import {
  a as H,
  i as De,
} from "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js";
import {
  i as Oe,
  n as U,
  r as ke,
} from "./app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page-BwSKiuwm.js";
import { n as W, t as Ae } from "./thread-scroll-layout-lROgzP0x.js";
function G({
  pendingWorktree: e,
  isConversationStarting: t,
  isConversationStartFailed: n,
}) {
  let r = e.worktreeGitRoot != null && e.worktreeWorkspaceRoot != null,
    i = [
      {
        id: `${e.id}:${e.attempt}:worktree`,
        kind: `worktree`,
        status: K(e.phase, r),
        outputText: e.worktreeOutputText,
      },
    ],
    a = q(e, r);
  return (
    a != null &&
      i.push({
        id: `${e.id}:${e.attempt}:setup`,
        kind: `setup`,
        status: a,
        outputText: e.setupOutputText,
      }),
    (t || n) &&
      i.push({
        id: `${e.id}:${e.attempt}:conversation`,
        kind: `conversation`,
        status: n ? `failed` : `running`,
        outputText: ``,
      }),
    i
  );
}
function K(e, t) {
  switch (e) {
    case `queued`:
    case `creating`:
      return `running`;
    case `setting-up`:
    case `worktree-ready`:
      return `completed`;
    case `failed`:
      return t ? `completed` : `failed`;
  }
}
function q(e, t) {
  switch (e.phase) {
    case `queued`:
    case `creating`:
      return null;
    case `setting-up`:
      return `running`;
    case `worktree-ready`:
      return e.localEnvironmentConfigPath == null
        ? null
        : e.errorMessage == null
          ? `completed`
          : `skipped`;
    case `failed`:
      return t ? `failed` : null;
  }
}
var J = e(() => {});
function je(e) {
  let t = (0, Y.c)(7),
    {
      pendingWorktree: n,
      isConversationStarting: r,
      isConversationStartFailed: i,
      children: a,
    } = e,
    o;
  t[0] !== i || t[1] !== r || t[2] !== n
    ? ((o = G({
        pendingWorktree: n,
        isConversationStarting: r,
        isConversationStartFailed: i,
      })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = n),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, X.jsx)(F, { activities: o, children: a })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var Y,
  X,
  Me = e(() => {
    ((Y = f()), P(), J(), (X = p()));
  });
async function Ne({
  createPendingWorktree: e,
  intl: t,
  pendingWorktree: n,
  serviceTier: r,
}) {
  let i = Fe(n, t),
    a = await Pe(n, i, r),
    o = t.formatMessage({
      id: `worktreeInitV2.autoFix.label`,
      defaultMessage: `Fix worktree setup`,
      description: `Pending worktree label for a repair thread created after local environment setup fails`,
    });
  return e({
    hostId: n.hostId,
    label: o,
    initialThreadTitle: o,
    sourceWorkspaceRoot: n.sourceWorkspaceRoot,
    startingState: n.startingState,
    localEnvironmentConfigPath: null,
    launchMode: `start-conversation`,
    prompt: i,
    startConversationParamsInput: a,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
async function Pe(e, t, n) {
  let r = [{ type: `text`, text: t, text_elements: [] }];
  if (e.launchMode === `start-conversation`)
    return {
      ...e.startConversationParamsInput,
      input: r,
      commentAttachments: [],
      workspaceRoots: [e.sourceWorkspaceRoot],
      cwd: e.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: `system`,
      serviceTier: n,
    };
  let { config: i } = await A(`read-config-for-host`, {
    hostId: e.hostId,
    includeLayers: !1,
    cwd: e.sourceWorkspaceRoot,
  });
  return {
    input: r,
    commentAttachments: [],
    workspaceRoots: [e.sourceWorkspaceRoot],
    cwd: e.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode: x(`agent-mode-by-host-id`, {})[e.hostId] ?? `auto`,
    shouldSendPermissionOverrides: !0,
    model: null,
    serviceTier: n,
    reasoningEffort: null,
    collaborationMode:
      e.launchMode === `fork-conversation` ? e.sourceCollaborationMode : null,
    config: C(i),
    threadSource: `system`,
    workspaceKind: `project`,
  };
}
function Fe(e, t) {
  return t.formatMessage(
    {
      id: `worktreeInitV2.autoFix.prompt`,
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description: `Prompt sent to a repair thread created after local environment setup fails`,
    },
    {
      configPath: e.localEnvironmentConfigPath ?? ``,
      errorMessage: e.errorMessage ?? ``,
      lineBreak: `
`,
      outputText: e.setupOutputText,
      paragraphBreak: `

`,
    },
  );
}
var Ie = e(() => {
  (D(), T(), V(), y());
});
function Le(e) {
  let t = (0, Z.c)(54),
    {
      homePath: n,
      pendingWorktreeId: i,
      conversationPathBuilder: c,
      onConversationReady: l,
      stayOnClientThread: te,
    } = e === void 0 ? {} : e,
    u = n === void 0 ? `/` : n,
    d = c === void 0 ? o : c,
    f = te === void 0 ? !1 : te,
    p = s(a),
    m = be(),
    h = _e(),
    ue = Ee(),
    g = xe(),
    { pendingWorktreeId: me } = ye(),
    v = i ?? me,
    {
      cancelPendingWorktree: y,
      clearPendingWorktreeAttention: ve,
      continuePendingWorktree: b,
      createPendingWorktree: x,
      retryPendingWorktree: S,
      setPendingWorktreePinned: C,
    } = ae(),
    { retryPendingWorktreeConversationStart: w } = se(),
    T = le(v),
    E = oe().find((e) => e.pendingWorktreeId === v),
    D = re({
      mutationFn: async (e) => {
        let { continueLocally: t } = e;
        if (T)
          if ((y(T.id), t))
            try {
              let e = await ke({
                entry: T,
                workspaceRoot: T.sourceWorkspaceRoot,
              });
              (de(p, {
                pendingWorktreeId: T.id,
                targetConversationId: e,
                targetWorkspaceRoot: T.sourceWorkspaceRoot,
              }),
                T.clientThreadId == null
                  ? Ce(p, { conversationId: e, pendingWorktreeId: T.id }) ||
                    Oe(T, e)
                  : Se(p, {
                      clientThreadId: T.clientThreadId,
                      conversationId: e,
                    }),
                l?.(e),
                l == null && T.clientThreadId == null && h(d(e)));
            } catch (e) {
              let t = e;
              throw (
                y(T.id),
                r.error(`Error creating local task from worktree`, {
                  safe: {},
                  sensitive: { error: t },
                }),
                p.get(he).danger(
                  g.formatMessage(
                    {
                      id: `composer.localTaskError.v2`,
                      defaultMessage: `Error starting chat{br}{error}`,
                      description: `Toast text shown when we failed to start a thread`,
                    },
                    { br: (0, $.jsx)(`br`, {}), error: ee(t) },
                  ),
                ),
                t
              );
            }
          else (fe(p, T.id), ue(Re(T)));
      },
    }),
    O;
  t[0] !== x || t[1] !== g || t[2] !== h || t[3] !== T || t[4] !== p
    ? ((O = async () => {
        if (!T) return;
        let e =
          T.launchMode === `start-conversation`
            ? (T.startConversationParamsInput.collaborationMode?.settings
                .model ?? null)
            : (T.sourceCollaborationMode?.settings.model ?? null);
        h(
          ne(
            await Ne({
              createPendingWorktree: x,
              intl: g,
              pendingWorktree: T,
              serviceTier: await ce(p, T.hostId, e),
            }),
          ),
        );
      }),
      (t[0] = x),
      (t[1] = g),
      (t[2] = h),
      (t[3] = T),
      (t[4] = p),
      (t[5] = O))
    : (O = t[5]);
  let k;
  t[6] !== g || t[7] !== p
    ? ((k = (e) => {
        (r.error(`Error starting worktree setup repair thread`, {
          safe: {},
          sensitive: { error: e },
        }),
          p.get(he).danger(
            g.formatMessage(
              {
                id: `composer.localTaskError.v2`,
                defaultMessage: `Error starting chat{br}{error}`,
                description: `Toast text shown when we failed to start a thread`,
              },
              { br: (0, $.jsx)(`br`, {}), error: ee(e) },
            ),
          ));
      }),
      (t[6] = g),
      (t[7] = p),
      (t[8] = k))
    : (k = t[8]);
  let A;
  t[9] !== O || t[10] !== k
    ? ((A = { mutationFn: O, onError: k }),
      (t[9] = O),
      (t[10] = k),
      (t[11] = A))
    : (A = t[11]);
  let M = re(A),
    N,
    P;
  (t[12] !== T || t[13] !== C
    ? ((P = () => {
        T && C(T.id, !T.isPinned);
      }),
      (N = [T, C]),
      (t[12] = T),
      (t[13] = C),
      (t[14] = N),
      (t[15] = P))
    : ((N = t[14]), (P = t[15])),
    ie(`toggle-thread-pin`, P, N));
  let F = (0, Q.useEffectEvent)(() => {
      v && ve(v);
    }),
    I;
  t[16] === F
    ? (I = t[17])
    : ((I = () => {
        F();
      }),
      (t[16] = F),
      (t[17] = I));
  let L;
  if (
    (t[18] === v ? (L = t[19]) : ((L = [v]), (t[18] = v), (t[19] = L)),
    (0, Q.useEffect)(I, L),
    D.isPending || D.isSuccess || T === void 0)
  )
    return null;
  if (E?.state === `succeeded` && !f)
    return (0, $.jsx)(ge, { to: d(E.conversationId), replace: !0 });
  if (T == null && E != null) return null;
  if (!T) {
    let e;
    return (
      t[20] === u
        ? (e = t[21])
        : ((e = (0, $.jsx)(ge, { to: u, replace: !0 })),
          (t[20] = u),
          (t[21] = e)),
      e
    );
  }
  let R;
  t[22] === T.phase
    ? (R = t[23])
    : ((R = pe(T.phase)), (t[22] = T.phase), (t[23] = R));
  let z = R,
    B = E?.state === `failed`,
    V = E?.state === `starting`,
    H = T.phase === `failed` || B,
    U = T.launchMode === `create-stable-worktree`,
    W =
      T.phase === `failed` &&
      T.worktreeGitRoot != null &&
      T.worktreeWorkspaceRoot != null,
    G = W && !U,
    K = W && T.localEnvironmentConfigPath != null,
    q;
  t[24] !== T.hostId || t[25] !== T.prompt
    ? ((q = (0, $.jsx)(ze, { hostId: T.hostId, prompt: T.prompt })),
      (t[24] = T.hostId),
      (t[25] = T.prompt),
      (t[26] = q))
    : (q = t[26]);
  let J;
  t[27] !== M ||
  t[28] !== K ||
  t[29] !== G ||
  t[30] !== D ||
  t[31] !== b ||
  t[32] !== z ||
  t[33] !== H ||
  t[34] !== U ||
  t[35] !== m ||
  t[36] !== h ||
  t[37] !== T.hostId ||
  t[38] !== T.id ||
  t[39] !== T.localEnvironmentConfigPath ||
  t[40] !== T.phase ||
  t[41] !== T.sourceWorkspaceRoot ||
  t[42] !== S ||
  t[43] !== w ||
  t[44] !== p
    ? ((J =
        z || H
          ? (0, $.jsxs)($.Fragment, {
              children: [
                z && !U
                  ? (0, $.jsx)(_, {
                      color: `secondary`,
                      loading: D.isPending,
                      onClick: () => {
                        D.mutate({ continueLocally: !0 });
                      },
                      children: (0, $.jsx)(j, {
                        id: `worktreeInitV2.workLocallyInstead`,
                        defaultMessage: `Work locally`,
                        description: `Button that cancels worktree setup and starts a local conversation`,
                      }),
                    })
                  : null,
                z
                  ? (0, $.jsx)(_, {
                      color: `secondary`,
                      loading: D.isPending,
                      onClick: () => {
                        D.mutate({ continueLocally: !1 });
                      },
                      children: (0, $.jsx)(j, {
                        id: `worktreeInitV2.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for worktree creation`,
                      }),
                    })
                  : null,
                H &&
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      T.phase === `failed` &&
                        (0, $.jsx)(_, {
                          color: `secondary`,
                          onClick: () => {
                            if (
                              (Te(p, T.hostId),
                              T.localEnvironmentConfigPath != null)
                            ) {
                              h(
                                we({
                                  configPath: T.localEnvironmentConfigPath,
                                  workspaceRoot: T.sourceWorkspaceRoot,
                                }),
                                {
                                  state: {
                                    hostId: T.hostId,
                                    returnTo: `${m.pathname}${m.search}${m.hash}`,
                                  },
                                },
                              );
                              return;
                            }
                            h(
                              `/settings/local-environments?${new URLSearchParams({ workspaceRoot: T.sourceWorkspaceRoot }).toString()}`,
                            );
                          },
                          children: (0, $.jsx)(j, {
                            id: `worktreeInitV2.editEnvironment`,
                            defaultMessage: `Edit environment`,
                            description: `Button label to open local environment settings after worktree setup fails`,
                          }),
                        }),
                      K &&
                        (0, $.jsx)(_, {
                          color: `secondary`,
                          loading: M.isPending,
                          onClick: () => {
                            M.mutate();
                          },
                          children: (0, $.jsx)(j, {
                            id: `worktreeInitV2.autoFix`,
                            defaultMessage: `Auto-fix`,
                            description: `Button label to start a repair thread after worktree setup fails`,
                          }),
                        }),
                      (0, $.jsx)(_, {
                        color: `secondary`,
                        onClick: () => {
                          if (T.phase === `failed`) {
                            S(T.id);
                            return;
                          }
                          w(T.id);
                        },
                        children: (0, $.jsx)(j, {
                          id: `codex.common.retry`,
                          defaultMessage: `Retry`,
                          description: `Retry button`,
                        }),
                      }),
                      G &&
                        (0, $.jsx)(_, {
                          color: `primary`,
                          onClick: () => {
                            b(T.id);
                          },
                          children: (0, $.jsx)(j, {
                            id: `worktreeInitV2.continueAnyway`,
                            defaultMessage: `Continue anyway`,
                            description: `Button label to continue starting a thread after local environment setup fails`,
                          }),
                        }),
                    ],
                  }),
              ],
            })
          : null),
      (t[27] = M),
      (t[28] = K),
      (t[29] = G),
      (t[30] = D),
      (t[31] = b),
      (t[32] = z),
      (t[33] = H),
      (t[34] = U),
      (t[35] = m),
      (t[36] = h),
      (t[37] = T.hostId),
      (t[38] = T.id),
      (t[39] = T.localEnvironmentConfigPath),
      (t[40] = T.phase),
      (t[41] = T.sourceWorkspaceRoot),
      (t[42] = S),
      (t[43] = w),
      (t[44] = p),
      (t[45] = J))
    : (J = t[45]);
  let Y;
  t[46] !== B || t[47] !== V || t[48] !== T || t[49] !== J
    ? ((Y = (0, $.jsx)(je, {
        pendingWorktree: T,
        isConversationStarting: V,
        isConversationStartFailed: B,
        children: J,
      })),
      (t[46] = B),
      (t[47] = V),
      (t[48] = T),
      (t[49] = J),
      (t[50] = Y))
    : (Y = t[50]);
  let X;
  return (
    t[51] !== q || t[52] !== Y
      ? ((X = (0, $.jsx)(De, {
          children: (0, $.jsx)(Ae, {
            children: (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [q, Y],
            }),
          }),
        })),
        (t[51] = q),
        (t[52] = Y),
        (t[53] = X))
      : (X = t[53]),
    X
  );
}
function Re(e) {
  let t = b(e.prompt).trim();
  if (e.launchMode !== `start-conversation`) return { prefillPrompt: t };
  let n = e.startConversationParamsInput.commentAttachments;
  return n == null || n.length === 0
    ? { prefillPrompt: t }
    : { prefillPrompt: t, prefillCommentAttachments: n };
}
function ze(e) {
  let t = (0, Z.c)(10),
    { hostId: n, prompt: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = O(r)), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = a && (0, $.jsx)(R, { pullRequestNumber: a })),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] !== n || t[5] !== r
    ? ((s = (0, $.jsx)(I, {
        message: r,
        sentAtMs: null,
        hostId: n,
        alwaysShowActions: !0,
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, {
          className: `flex flex-col items-end gap-2`,
          children: [o, s],
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var Z,
  Q,
  $,
  Be = e(() => {
    ((Z = f()),
      n(),
      te(),
      c(),
      (Q = t(d(), 1)),
      ve(),
      k(),
      m(),
      me(),
      v(),
      L(),
      g(),
      B(),
      z(),
      S(),
      u(),
      E(),
      i(),
      w(),
      M(),
      N(),
      H(),
      W(),
      l(),
      U(),
      h(),
      ue(),
      Me(),
      Ie(),
      ($ = p()));
  });
export { Be as n, Le as t };
//# sourceMappingURL=worktree-init-v2-page-DUo6BdJ9.js.map
