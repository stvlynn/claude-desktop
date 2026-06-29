import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  C as r,
  D as i,
  E as a,
  Ko as o,
  O as s,
  S as c,
  Vo as l,
  _c as u,
  c as d,
  gc as f,
  i as p,
  lc as m,
  nt as h,
  tc as g,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $r as _,
  Hf as v,
  Lc as y,
  Rc as b,
  Uf as ee,
  Yd as te,
  ef as x,
  ei as ne,
  hm as re,
  jd as S,
  kd as ie,
  mm as ae,
  nf as oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Dm as C,
  Em as se,
  Om as w,
  Tm as ce,
  Um as le,
  gp as T,
  mp as E,
  zm as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Bl as ue,
  Hh as O,
  Hi as de,
  Iy as k,
  Kp as fe,
  N as A,
  Ri as pe,
  Rl as j,
  Vh as M,
  Vy as N,
  hp as P,
  lr as F,
  pt as I,
  qh as L,
  qn as R,
  ur as me,
  vg as z,
  yg as B,
  zn as V,
  zy as H,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  C as U,
  y as W,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Fc as G,
  Hc as he,
  _l as ge,
  fo as K,
  gl as q,
  po as J,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  $ as Y,
  tt as _e,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  c as ve,
  s as X,
} from "./app-initial~app-main~local-conversation-page-D-F_r9ay.js";
import { n as ye, t as be } from "./use-git-recent-branches-BVnl1r0u.js";
var xe,
  Se = e(() => {
    xe = `# Review Guidelines

You are acting as a reviewer for a proposed code change made by another engineer.

Review the change and respond in normal Markdown. Do not return JSON, XML, a findings object, or any structured review schema.

When feedback should be attached directly to a changed line, emit one \`::code-comment{...}\` directive for that issue. The directive creates an inline code comment in the review UI; keep the visible response as normal Markdown. Emit no directives when there are no actionable inline comments.

Required \`code-comment\` attributes: \`title\`, \`body\`, and \`file\`. Optional attributes: \`start\`, \`end\`, and \`priority\`. Use the shortest useful line range. \`file\` should be an absolute path or include the workspace folder segment.

Focus on discrete, actionable issues the original author would likely fix if they knew about them. Prefer no issues over speculative or low-signal feedback.

General guidelines for whether to call out an issue:

1. It meaningfully impacts correctness, performance, security, or maintainability.
2. It is discrete and actionable.
3. It was introduced by the change under review.
4. The author would likely fix it once aware.
5. It does not rely on unstated assumptions about intent.
6. It identifies the affected behavior clearly rather than speculating broadly.

When you call out an issue, include the relevant file and line or function in prose, explain the scenario where it matters, and keep the explanation concise. Use priority labels such as \`[P1]\` or \`[P2]\` only when helpful to communicate severity.

If there are no actionable issues, say that directly and briefly.
`;
  });
function Ce({ reviewInstructions: e, requestMessage: t }) {
  return [M, xe.trim(), e.trim(), O, t].join(`
`);
}
async function we({ context: e, hostId: t, intl: n }) {
  if (e.mode === `uncommitted`)
    return {
      diffFilter: `unstaged`,
      prompt: Ce({
        reviewInstructions: Oe,
        requestMessage: n.formatMessage({
          id: `quickAction.request.codeReview.uncommitted`,
          defaultMessage: `Please review my uncommitted changes`,
          description: `User message used when reviewing uncommitted changes`,
        }),
      }),
      baseBranch: null,
    };
  let r = await p(`git-merge-base`, {
    source: `review_model`,
    params: { gitRoot: e.gitRoot, baseBranch: e.baseBranch, hostId: t },
  });
  if (!r.mergeBaseSha)
    throw Error(
      `Failed to resolve a merge base between HEAD and ${e.baseBranch}.`,
    );
  let i = n.formatMessage(
    {
      id: `quickAction.request.codeReview.branches`,
      defaultMessage: `Please review changes on {from} against {to}`,
      description: `User message used when reviewing against a selected base branch`,
    },
    { from: e.sourceBranch, to: e.baseBranch },
  );
  return {
    diffFilter: `branch`,
    prompt: Ce({
      reviewInstructions: De.replaceAll(
        `{baseBranch}`,
        e.baseBranch,
      ).replaceAll(`{mergeBaseSha}`, r.mergeBaseSha.trim()),
      requestMessage: i,
    }),
    baseBranch: e.baseBranch,
  };
}
function Te(e) {
  let t = (0, Ee.c)(13),
    { hostId: n, onError: i, onSuccess: s } = e,
    c = o(a),
    l = N(),
    u = U(n),
    d;
  t[0] !== n || t[1] !== u || t[2] !== l || t[3] !== c
    ? ((d = async (e) => {
        let { context: t, conversationId: r, delivery: i } = e,
          { gitRoot: a, cwd: o } = t,
          s = await we({ context: t, hostId: n, intl: l }),
          d = r == null ? null : c.get(I, r);
        if (i === `inline` && r != null && d === n) {
          if (u == null) throw Error(`Code review host is unavailable`);
          return (
            await B(`start-turn-for-host`, {
              hostId: u.getHostId(),
              conversationId: r,
              params: {
                cwd: o,
                input: [{ type: `text`, text: s.prompt, text_elements: [] }],
                approvalsReviewer: `user`,
                collaborationMode: null,
                inheritThreadSettings: !1,
                serviceTier: await b(c, n, null),
              },
            }),
            {
              delivery: `inline`,
              diffFilter: s.diffFilter,
              baseBranch: s.baseBranch,
            }
          );
        }
        let f = await B(`start-conversation`, {
          hostId: n,
          input: [{ type: `text`, text: s.prompt, text_elements: [] }],
          cwd: o,
          workspaceRoots: [a],
          collaborationMode: null,
          serviceTier: await b(c, n, null),
          approvalsReviewer: `user`,
        });
        return {
          baseBranch: s.baseBranch,
          conversationId: f,
          delivery: `detached`,
          diffFilter: s.diffFilter,
        };
      }),
      (t[0] = n),
      (t[1] = u),
      (t[2] = l),
      (t[3] = c),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === s
    ? (f = t[6])
    : ((f = (e) => {
        s(e);
      }),
      (t[5] = s),
      (t[6] = f));
  let p;
  t[7] === i
    ? (p = t[8])
    : ((p = (e) => {
        (r.error(`Failed to start quick review conversation`, {
          safe: {},
          sensitive: { error: e },
        }),
          i(e));
      }),
      (t[7] = i),
      (t[8] = p));
  let m;
  return (
    t[9] !== d || t[10] !== f || t[11] !== p
      ? ((m = { mutationFn: d, onSuccess: f, onError: p }),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    g(m)
  );
}
var Ee,
  De,
  Oe,
  ke = e(() => {
    ((Ee = f()),
      n(),
      l(),
      k(),
      W(),
      A(),
      z(),
      y(),
      Se(),
      L(),
      i(),
      c(),
      d(),
      (De =
        "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response."),
      (Oe = `Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.`));
  });
function Ae(e, t, n, r) {
  let i = (0, je.c)(2),
    a;
  return (
    i[0] === n
      ? (a = i[1])
      : ((a = (e) => {
          let { root: t } = e;
          return { operationSource: n, root: t };
        }),
        (i[0] = n),
        (i[1] = a)),
    R(e, t, `base-branch`, a, n, r)
  );
}
var je,
  Me = e(() => {
    ((je = f()), V());
  });
function Ne({ currentBranch: e, defaultTargetBranch: t, recentBranches: n }) {
  let r = [],
    i = [t ?? Pe],
    a = new Set();
  return (
    e && a.add(e),
    n != null && i.push(...n),
    i.forEach((e) => {
      !e || a.has(e) || (r.push(e), a.add(e));
    }),
    r
  );
}
var Pe,
  Fe = e(() => {
    Pe = `main`;
  });
function Ie(e) {
  let t = (0, Z.c)(24),
    {
      onSelectUnstaged: n,
      onSelectBaseBranch: r,
      isSubmitting: i,
      isLoadingBaseBranch: a,
      requiresXcodeLicense: o,
      isRetryingGit: s,
      onRetryGit: c,
    } = e,
    l = N();
  if (o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(K, {
          className: `icon-xs shrink-0 text-token-charts-red`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(`span`, {
          className: `font-medium text-token-foreground`,
          children: (0, Q.jsx)(H, {
            id: `composer.reviewMode.xcodeLicenseRequired.title`,
            defaultMessage: `Review the Xcode license to use Git`,
            description: `Title shown when Git cannot run until the user accepts the Xcode license`,
          }),
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [
            n,
            (0, Q.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Q.jsx)(H, {
                id: `composer.reviewMode.xcodeLicenseRequired.detail`,
                defaultMessage: `In your terminal, run <command>sudo xcodebuild -license</command>, follow the prompts, and try again.`,
                description: `Instructions shown when Git cannot run until the user accepts the Xcode license`,
                values: { command: Le },
              }),
            }),
          ],
        })),
        (t[2] = r))
      : (r = t[2]);
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(H, {
          id: `composer.reviewMode.xcodeLicenseRequired.retry`,
          defaultMessage: `Try again`,
          description: `Button label for retrying Git after accepting the Xcode license`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] !== s || t[5] !== c
        ? ((a = (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2 px-3 py-2 text-sm`,
            role: `alert`,
            children: [
              e,
              r,
              (0, Q.jsx)(ce, {
                className: `shrink-0`,
                loading: s,
                onClick: c,
                size: `composerSm`,
                children: i,
              }),
            ],
          })),
          (t[4] = s),
          (t[5] = c),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = l.formatMessage({
        id: `composer.reviewMode.option.baseBranch.simple`,
        defaultMessage: `Review against a base branch`,
        description: `Button label for reviewing against a base branch`,
      })),
      (t[7] = l),
      (t[8] = u));
  let d = i || a,
    f = a ? C : void 0,
    p;
  t[9] !== r || t[10] !== u || t[11] !== d || t[12] !== f
    ? ((p = (0, Q.jsx)(X, {
        value: `base-branch`,
        title: u,
        onSelect: r,
        disabled: d,
        RightIcon: f,
      })),
      (t[9] = r),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === l
    ? (m = t[15])
    : ((m = l.formatMessage({
        id: `composer.reviewMode.option.unstaged.simple`,
        defaultMessage: `Review uncommitted changes`,
        description: `Button label for reviewing unstaged changes`,
      })),
      (t[14] = l),
      (t[15] = m));
  let h = i ? C : void 0,
    g;
  t[16] !== i || t[17] !== n || t[18] !== m || t[19] !== h
    ? ((g = (0, Q.jsx)(X, {
        value: `unstaged`,
        title: m,
        onSelect: n,
        disabled: i,
        RightIcon: h,
      })),
      (t[16] = i),
      (t[17] = n),
      (t[18] = m),
      (t[19] = h),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== p || t[22] !== g
      ? ((_ = (0, Q.jsxs)(Q.Fragment, { children: [p, g] })),
        (t[21] = p),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function Le(e) {
  return (0, Q.jsx)(`code`, { className: `font-mono`, children: e }, `command`);
}
function Re(e) {
  let t = (0, Z.c)(10),
    {
      onSelect: n,
      branchLines: r,
      isLoading: i,
      isError: a,
      refetchBranchOverview: o,
      submittingBranchName: s,
    } = e,
    c = s != null,
    l;
  t[0] !== r ||
  t[1] !== a ||
  t[2] !== i ||
  t[3] !== c ||
  t[4] !== n ||
  t[5] !== o ||
  t[6] !== s
    ? ((l = i
        ? (0, Q.jsx)(`div`, {
            className: `flex items-center justify-center gap-2 py-4 text-xs text-token-foreground/70`,
            children: (0, Q.jsx)(C, { className: `size-3` }),
          })
        : a
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-2 py-2`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `text-center text-xs text-token-foreground/70`,
                  children: (0, Q.jsx)(H, {
                    id: `composer.reviewMode.branches.error`,
                    defaultMessage: `Unable to load branches`,
                    description: `Error message when branch list could not be loaded`,
                  }),
                }),
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `text-xs font-medium text-token-text-link-foreground`,
                  onClick: o,
                  children: (0, Q.jsx)(H, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                }),
              ],
            })
          : r.map((e) =>
              (0, Q.jsx)(
                X,
                {
                  value: e.label,
                  title: e.label,
                  onSelect: n,
                  disabled: c,
                  RightIcon: s === e.key ? C : void 0,
                },
                e.key,
              ),
            )),
      (t[0] = r),
      (t[1] = a),
      (t[2] = i),
      (t[3] = c),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] === l
      ? (u = t[9])
      : ((u = (0, Q.jsx)(Q.Fragment, { children: l })), (t[8] = l), (t[9] = u)),
    u
  );
}
var Z,
  Q,
  ze = e(() => {
    ((Z = f()), k(), se(), w(), J(), ve(), (Q = m()));
  });
function Be(e) {
  let t = (0, He.c)(63),
    {
      conversationId: n,
      onItemsChanged: i,
      onClose: a,
      cwd: s,
      hostConfig: c,
    } = e,
    l = o(pe),
    u = N(),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { status: `choose-target` }), (t[0] = d))
    : (d = t[0]);
  let [f, p] = (0, Ue.useState)(d),
    m = ne(),
    g;
  t[1] === c.id
    ? (g = t[2])
    : ((g = { hostId: c.id, source: `review_mode_content` }),
      (t[1] = c.id),
      (t[2] = g));
  let { gitRoot: _ } = _e(s, g),
    {
      data: v,
      error: y,
      isFetching: b,
      isLoading: x,
      refetch: S,
    } = ge(_, c, `review_mode_content`),
    {
      data: ae,
      isLoading: C,
      isError: se,
      refetch: w,
    } = Ae(_, c, `review_mode_content`),
    {
      data: ce,
      isLoading: E,
      isError: D,
      refetch: O,
    } = ye(_, c, `review_mode_content`),
    de = ie(ae ?? null),
    k = le(h.reviewDelivery),
    fe = Ne({ currentBranch: v, defaultTargetBranch: de, recentBranches: ce }),
    A = C || E,
    j = se || D,
    M;
  t[3] !== w || t[4] !== O
    ? ((M = () => {
        Promise.all([w(), O()]);
      }),
      (t[3] = w),
      (t[4] = O),
      (t[5] = M))
    : (M = t[5]);
  let F = M,
    I;
  t[6] !== u || t[7] !== l
    ? ((I = (e) => {
        (r.error(`Failed to start code review`, {
          safe: {},
          sensitive: { error: e },
        }),
          l.get(T).danger(
            u.formatMessage({
              id: `composer.reviewMode.quickReviewError`,
              defaultMessage: `Failed to start code review.`,
              description: `Toast shown when quick review action fails`,
            }),
          ));
      }),
      (t[6] = u),
      (t[7] = l),
      (t[8] = I))
    : (I = t[8]);
  let L;
  t[9] !== n || t[10] !== m || t[11] !== l
    ? ((L = (e) => {
        if ((oe(l, e.diffFilter), e.delivery === `detached`)) {
          (te(l, e.conversationId, e.baseBranch), m(e.conversationId));
          return;
        }
        te(l, n, e.baseBranch);
        let t = l.get(ee.activeTab$)?.tabId;
        (he(l, !t?.startsWith(`sidechat:`)), l.set(re, !1));
      }),
      (t[9] = n),
      (t[10] = m),
      (t[11] = l),
      (t[12] = L))
    : (L = t[12]);
  let R;
  t[13] !== c.id || t[14] !== I || t[15] !== L
    ? ((R = { hostId: c.id, onError: I, onSuccess: L }),
      (t[13] = c.id),
      (t[14] = I),
      (t[15] = L),
      (t[16] = R))
    : (R = t[16]);
  let { mutate: z, isPending: B, variables: V } = Te(R),
    H = B && V?.context.mode === `base-branch` ? V.context.baseBranch : null,
    U;
  t[17] !== n ||
  t[18] !== v ||
  t[19] !== s ||
  t[20] !== _ ||
  t[21] !== u ||
  t[22] !== B ||
  t[23] !== a ||
  t[24] !== i ||
  t[25] !== k ||
  t[26] !== l ||
  t[27] !== z
    ? ((U = (e) => {
        if (!B) {
          if (!_) {
            l.get(T).danger(
              u.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          if (e === `base-branch`) {
            (ue(l, P, { target: `base_branch` }),
              p({ status: `choose-base` }),
              i());
            return;
          }
          (ue(l, P, { target: `unstaged` }),
            z(
              {
                conversationId: n,
                context: {
                  mode: `uncommitted`,
                  sourceBranch: v ?? `HEAD`,
                  gitRoot: _,
                  cwd: s,
                },
                delivery: k ?? `inline`,
              },
              { onSuccess: a },
            ));
        }
      }),
      (t[17] = n),
      (t[18] = v),
      (t[19] = s),
      (t[20] = _),
      (t[21] = u),
      (t[22] = B),
      (t[23] = a),
      (t[24] = i),
      (t[25] = k),
      (t[26] = l),
      (t[27] = z),
      (t[28] = U))
    : (U = t[28]);
  let W = U,
    G;
  t[29] !== n ||
  t[30] !== v ||
  t[31] !== s ||
  t[32] !== _ ||
  t[33] !== u ||
  t[34] !== B ||
  t[35] !== a ||
  t[36] !== k ||
  t[37] !== l ||
  t[38] !== z
    ? ((G = (e) => {
        if (!B) {
          if (!_) {
            l.get(T).danger(
              u.formatMessage({
                id: `composer.reviewMode.gitRoot.error`,
                defaultMessage: `Git root not found`,
                description: `Toast shown when git root not found`,
              }),
            );
            return;
          }
          z(
            {
              conversationId: n,
              context: {
                mode: `base-branch`,
                sourceBranch: v ?? `HEAD`,
                baseBranch: e,
                gitRoot: _,
                cwd: s,
              },
              delivery: k ?? `inline`,
            },
            { onSuccess: a },
          );
        }
      }),
      (t[29] = n),
      (t[30] = v),
      (t[31] = s),
      (t[32] = _),
      (t[33] = u),
      (t[34] = B),
      (t[35] = a),
      (t[36] = k),
      (t[37] = l),
      (t[38] = z),
      (t[39] = G))
    : (G = t[39]);
  let K = G;
  if (f.status === `choose-target`) {
    let e, n;
    t[40] === W
      ? ((e = t[41]), (n = t[42]))
      : ((n = () => W(`unstaged`)),
        (e = () => W(`base-branch`)),
        (t[40] = W),
        (t[41] = e),
        (t[42] = n));
    let r;
    t[43] === y ? (r = t[44]) : ((r = me(y)), (t[43] = y), (t[44] = r));
    let i;
    t[45] === S
      ? (i = t[46])
      : ((i = () => {
          S();
        }),
        (t[45] = S),
        (t[46] = i));
    let a;
    return (
      t[47] !== b ||
      t[48] !== x ||
      t[49] !== B ||
      t[50] !== e ||
      t[51] !== r ||
      t[52] !== i ||
      t[53] !== n
        ? ((a = (0, $.jsx)(Ie, {
            onSelectUnstaged: n,
            onSelectBaseBranch: e,
            isSubmitting: B,
            isLoadingBaseBranch: x,
            requiresXcodeLicense: r,
            isRetryingGit: b,
            onRetryGit: i,
          })),
          (t[47] = b),
          (t[48] = x),
          (t[49] = B),
          (t[50] = e),
          (t[51] = r),
          (t[52] = i),
          (t[53] = n),
          (t[54] = a))
        : (a = t[54]),
      a
    );
  }
  let q = Re,
    J = fe.map(Ve),
    Y;
  return (
    t[55] !== q ||
    t[56] !== K ||
    t[57] !== j ||
    t[58] !== A ||
    t[59] !== F ||
    t[60] !== H ||
    t[61] !== J
      ? ((Y = (0, $.jsx)(q, {
          onSelect: K,
          branchLines: J,
          isLoading: A,
          isError: j,
          refetchBranchOverview: F,
          submittingBranchName: H,
        })),
        (t[55] = q),
        (t[56] = K),
        (t[57] = j),
        (t[58] = A),
        (t[59] = F),
        (t[60] = H),
        (t[61] = J),
        (t[62] = Y))
      : (Y = t[62]),
    Y
  );
}
function Ve(e) {
  return { key: e, label: e };
}
var He, Ue, $;
e(() => {
  ((He = f()),
    fe(),
    l(),
    s(),
    (Ue = t(u(), 1)),
    k(),
    ke(),
    ae(),
    v(),
    E(),
    F(),
    Me(),
    q(),
    be(),
    j(),
    x(),
    S(),
    de(),
    D(),
    G(),
    Y(),
    c(),
    _(),
    Fe(),
    ze(),
    ($ = m()));
})();
export { Be as ReviewModeContent };
//# sourceMappingURL=review-mode-content-Bx3AaAoJ.js.map
