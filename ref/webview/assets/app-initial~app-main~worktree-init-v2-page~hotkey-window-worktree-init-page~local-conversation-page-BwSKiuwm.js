import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  C as t,
  O as n,
  S as r,
  c as i,
  fa as a,
  i as o,
  nr as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  pp as c,
  vp as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Dh as u,
  kh as d,
  vg as f,
  yg as p,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Cp as m,
  Ga as h,
  Ua as g,
  wp as _,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
async function v({ entry: e, threadGoalObjective: t, workspaceRoot: n }) {
  let r = C(e);
  if (e.launchMode === `fork-conversation`) {
    let t;
    return (
      (t =
        e.targetTurnId == null
          ? await p(`fork-conversation-from-latest`, {
              hostId: e.hostId,
              conversationId: e.sourceConversationId,
              cwd: n,
              workspaceRoots: [n],
              collaborationMode: e.sourceCollaborationMode,
              threadSource: e.threadSource,
            })
          : await p(`fork-conversation-from-turn`, {
              conversationId: e.sourceConversationId,
              targetTurnId: e.targetTurnId,
              cwd: n,
              workspaceRoots: [n],
              collaborationMode: e.sourceCollaborationMode,
              threadSource: e.threadSource,
            })),
      r != null &&
        (await p(`add-worktree-init-synthetic-turn`, {
          conversationId: t,
          worktreeInit: r,
        })),
      t
    );
  }
  if (e.launchMode !== `start-conversation`)
    throw Error(`Unsupported launch mode: ${e.launchMode}`);
  let i =
      t == null
        ? e.startConversationParamsInput
        : {
            ...e.startConversationParamsInput,
            fileAttachments: y(e),
            input: x(e.startConversationParamsInput.input, u(t)),
          },
    a = i.projectAssignment;
  return p(`start-conversation`, {
    hostId: e.threadStartHostId ?? e.hostId,
    ...m({
      ...i,
      workspaceRoots: [n],
      cwd: n,
      projectAssignment: a == null ? a : { ...a, cwd: n },
    }),
    skipAutoTitleGeneration: e.initialThreadTitle != null,
    worktreeInit: r ?? void 0,
  });
}
function y(e) {
  let t = new Set(
    e.threadGoalDraft?.pastedTextAttachments.map((e) => e.file.path),
  );
  return e.startConversationParamsInput.fileAttachments.filter(
    (e) => !t.has(e.path),
  );
}
async function b({
  entry: e,
  conversationId: n,
  hostConfig: r,
  threadGoalObjective: i,
}) {
  let a = e.initialThreadTitle == null && e.labelEdited,
    c = (e.initialThreadTitle ?? (a ? e.label : ``)).trim();
  if (
    (c.length > 0 &&
      (await p(`set-thread-title`, {
        conversationId: n,
        title: c,
        ...(a ? { onlyIfUntitled: !0 } : {}),
      })),
    e.worktreeGitRoot != null)
  )
    try {
      await o(`worktree-set-owner-thread`, {
        params: {
          hostId: r.id,
          worktree: s(e.worktreeGitRoot),
          conversationId: n,
        },
      });
    } catch (e) {
      t.warning(
        `Worktree created and conversation started, but failed to set worktree owner metadata: {}`,
        { safe: {}, sensitive: { error: e } },
      );
    }
  if (e.isPinned)
    try {
      await h(n, !0, e.pinnedBeforeThreadId);
    } catch (e) {
      t.warning(
        `Worktree conversation started, but failed to set pinned metadata: {}`,
        { safe: {}, sensitive: { error: e } },
      );
    }
  e.launchMode === `start-conversation` &&
    i != null &&
    (await p(`set-thread-goal`, {
      appendTranscriptItem: !1,
      conversationId: n,
      hostId: e.threadStartHostId ?? r.id,
      objective: i,
    }));
}
function x(e, t) {
  let n = !1;
  return e.map((e) =>
    !n && e.type === `text` ? ((n = !0), { ...e, text: t }) : e,
  );
}
function S(e, t) {
  let n = e.browserTransferSourceConversationId;
  if (n == null) return;
  let r = e.browserTransferSourceBrowserTabIds,
    i = r != null && r.length > 0,
    o = a(`${n}:legacy`),
    s =
      r != null && r.length > 0
        ? r
        : [e.browserTransferSourceBrowserTabId ?? o],
    c =
      e.browserTransferSourceBrowserTabId != null &&
      s.includes(e.browserTransferSourceBrowserTabId)
        ? e.browserTransferSourceBrowserTabId
        : s.at(-1);
  for (let r of s)
    l(t, {
      active: r === c,
      browserTabId:
        i || e.browserTransferSourceBrowserTabId != null ? r : a(`${t}:legacy`),
      transferSourceBrowserTabId: r,
      transferSourceConversationId: n,
    });
}
function C(e) {
  return e.phase === `worktree-ready`
    ? {
        id: `${e.id}:${e.attempt}`,
        worktreeOutputText: e.worktreeOutputText,
        setup:
          e.localEnvironmentConfigPath == null
            ? null
            : {
                outcome: e.errorMessage == null ? `completed` : `skipped`,
                outputText: e.setupOutputText,
              },
      }
    : null;
}
var w = e(() => {
  (n(), f(), c(), _(), d(), g(), r(), i());
});
export { S as i, w as n, v as r, b as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page-BwSKiuwm.js.map
