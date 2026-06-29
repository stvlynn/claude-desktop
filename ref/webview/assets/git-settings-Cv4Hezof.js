import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  D as r,
  E as ee,
  Ko as te,
  O as i,
  Vo as a,
  X as o,
  _c as s,
  gc as c,
  lc as l,
  tc as u,
  tt as d,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  An as f,
  Ca as p,
  Do as m,
  Em as h,
  Hm as g,
  Tm as _,
  Um as v,
  _a as y,
  ba as b,
  gp as x,
  kn as ne,
  ls as re,
  mp as S,
  us as C,
  va as w,
  wo as T,
  ya as E,
  zm as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fy as O,
  Iy as k,
  Vy as ie,
  ry as ae,
  ty as A,
  zy as j,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Fn as oe,
  In as M,
  Kd as se,
  Wd as N,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as P,
  V as F,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  J as I,
  d as L,
  f as R,
  q as z,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as B,
  t as V,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import { n as H, t as U } from "./segmented-toggle-DYZLeHEX.js";
var W,
  G = e(() => {
    (k(),
      (W = O({
        branchPrefix: {
          id: `settings.git.branchPrefix.label`,
          defaultMessage: `Branch prefix`,
          description: `Label for git branch prefix setting`,
        },
        alwaysForcePush: {
          id: `settings.git.forcePush.label`,
          defaultMessage: `Always force push`,
          description: `Label for always force push toggle`,
        },
        createDraftPullRequests: {
          id: `settings.git.createDraftPullRequest.label`,
          defaultMessage: `Create draft pull requests`,
          description: `Label for create draft pull requests toggle`,
        },
        pullRequestMergeMethod: {
          id: `settings.git.pullRequestMergeMethod.label`,
          defaultMessage: `Pull request merge method`,
          description: `Label for pull request merge method setting`,
        },
        merge: {
          id: `settings.git.pullRequestMergeMethod.merge`,
          defaultMessage: `Merge`,
          description: `Merge option for pull request merge method`,
        },
        squash: {
          id: `settings.git.pullRequestMergeMethod.squash`,
          defaultMessage: `Squash`,
          description: `Squash option for pull request merge method`,
        },
        automaticWorktreeDeletion: {
          id: `settings.worktrees.autoCleanup.label`,
          defaultMessage: `Automatically delete old worktrees`,
          description: `Label for the automatic worktree deletion toggle`,
        },
        autoDeleteLimit: {
          id: `settings.worktrees.keepCount.label`,
          defaultMessage: `Auto-delete limit`,
          description: `Label for the worktree auto-delete limit setting`,
        },
        commitInstructions: {
          id: `settings.git.commitInstructions.label`,
          defaultMessage: `Commit instructions`,
          description: `Label for commit instructions`,
        },
        pullRequestInstructions: {
          id: `settings.git.prInstructions.label`,
          defaultMessage: `Pull request instructions`,
          description: `Label for pull request instructions`,
        },
      })));
  });
function ce() {
  let e = (0, ue.c)(66),
    t = te(ee),
    n = ie(),
    [r, i] = (0, de.useState)(!1),
    [a, s] = (0, de.useState)(null),
    c = v(o.autoCleanupEnabled),
    l = v(o.keepCount),
    d;
  e[0] === t
    ? (d = e[1])
    : ((d = (e) => g(t, o.autoCleanupEnabled, e)), (e[0] = t), (e[1] = d));
  let f, p;
  e[2] !== n || e[3] !== t
    ? ((f = (e, r) => {
        if (r) {
          t.get(x).success(
            n.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        t.get(x).success(
          n.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (p = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = f),
      (e[5] = p))
    : ((f = e[4]), (p = e[5]));
  let m;
  e[6] !== d || e[7] !== f || e[8] !== p
    ? ((m = { mutationFn: d, onSuccess: f, onError: p }),
      (e[6] = d),
      (e[7] = f),
      (e[8] = p),
      (e[9] = m))
    : (m = e[9]);
  let h = u(m),
    _;
  e[10] === t
    ? (_ = e[11])
    : ((_ = (e) => g(t, o.keepCount, e)), (e[10] = t), (e[11] = _));
  let y, b;
  e[12] !== n || e[13] !== t
    ? ((y = () => {
        (s(null),
          t.get(x).success(
            n.formatMessage({
              id: `settings.worktrees.keepCount.save.success`,
              defaultMessage: `Saved auto-delete limit`,
              description: `Toast shown when the worktree auto-delete limit is saved`,
            }),
          ));
      }),
      (b = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = y),
      (e[15] = b))
    : ((y = e[14]), (b = e[15]));
  let re;
  e[16] !== _ || e[17] !== y || e[18] !== b
    ? ((re = { mutationFn: _, onSuccess: y, onError: b }),
      (e[16] = _),
      (e[17] = y),
      (e[18] = b),
      (e[19] = re))
    : (re = e[19]);
  let S = u(re),
    C = String(l),
    w = a ?? C,
    T = h.isPending,
    E = S.isPending || T || !c,
    D;
  e[20] !== T || e[21] !== h
    ? ((D = (e) => {
        if (!T) {
          if (e) {
            h.mutate(!0);
            return;
          }
          i(!0);
        }
      }),
      (e[20] = T),
      (e[21] = h),
      (e[22] = D))
    : (D = e[22]);
  let O = D,
    k;
  e[23] === h
    ? (k = e[24])
    : ((k = () => {
        (s(null), i(!1), h.mutate(!1));
      }),
      (e[23] = h),
      (e[24] = k));
  let ae = k,
    A;
  e[25] !== E || e[26] !== l || e[27] !== a || e[28] !== S
    ? ((A = () => {
        if (E || a == null) return;
        let e = a.trim(),
          t = Number.parseInt(e, 10);
        if (e.length === 0 || Number.isNaN(t)) {
          s(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === l) {
          s(null);
          return;
        }
        S.mutate(n);
      }),
      (e[25] = E),
      (e[26] = l),
      (e[27] = a),
      (e[28] = S),
      (e[29] = A))
    : (A = e[29]);
  let M = A,
    se,
    N;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, K.jsx)(j, { ...W.automaticWorktreeDeletion })),
      (N = (0, K.jsx)(j, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (e[30] = se),
      (e[31] = N))
    : ((se = e[30]), (N = e[31]));
  let P;
  e[32] === n
    ? (P = e[33])
    : ((P = n.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (e[32] = n),
      (e[33] = P));
  let F;
  e[34] !== c || e[35] !== O || e[36] !== T || e[37] !== P
    ? ((F = (0, K.jsx)(oe, {
        label: se,
        description: N,
        control: (0, K.jsx)(ne, {
          checked: c,
          disabled: T,
          onChange: O,
          ariaLabel: P,
        }),
      })),
      (e[34] = c),
      (e[35] = O),
      (e[36] = T),
      (e[37] = P),
      (e[38] = F))
    : (F = e[38]);
  let I;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, K.jsx)(j, { ...W.autoDeleteLimit })), (e[39] = I))
    : (I = e[39]);
  let L;
  e[40] === c
    ? (L = e[41])
    : ((L = c
        ? (0, K.jsx)(j, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of Codex worktrees to keep before older ones are pruned automatically. Codex snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, K.jsx)(j, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. Codex will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (e[40] = c),
      (e[41] = L));
  let R;
  e[42] !== E || e[43] !== C
    ? ((R = (e) => {
        if (E) return;
        let t = e.target.value;
        s(t === C ? null : t);
      }),
      (e[42] = E),
      (e[43] = C),
      (e[44] = R))
    : (R = e[44]);
  let z;
  e[45] === M
    ? (z = e[46])
    : ((z = (e) => {
        e.key === `Enter` && (e.preventDefault(), M());
      }),
      (e[45] = M),
      (e[46] = z));
  let B;
  e[47] === n
    ? (B = e[48])
    : ((B = n.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (e[47] = n),
      (e[48] = B));
  let V;
  e[49] !== M ||
  e[50] !== E ||
  e[51] !== w ||
  e[52] !== R ||
  e[53] !== z ||
  e[54] !== B
    ? ((V = (0, K.jsx)(`div`, {
        className: `ml-6`,
        children: (0, K.jsx)(`input`, {
          className: `w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: w,
          onChange: R,
          onBlur: M,
          onKeyDown: z,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": B,
          disabled: E,
        }),
      })),
      (e[49] = M),
      (e[50] = E),
      (e[51] = w),
      (e[52] = R),
      (e[53] = z),
      (e[54] = B),
      (e[55] = V))
    : (V = e[55]);
  let H;
  e[56] !== L || e[57] !== V
    ? ((H = (0, K.jsx)(oe, { label: I, description: L, control: V })),
      (e[56] = L),
      (e[57] = V),
      (e[58] = H))
    : (H = e[58]);
  let U;
  e[59] !== ae || e[60] !== r
    ? ((U = (0, K.jsx)(le, { open: r, onOpenChange: i, onConfirm: ae })),
      (e[59] = ae),
      (e[60] = r),
      (e[61] = U))
    : (U = e[61]);
  let G;
  return (
    e[62] !== F || e[63] !== H || e[64] !== U
      ? ((G = (0, K.jsxs)(K.Fragment, { children: [F, H, U] })),
        (e[62] = F),
        (e[63] = H),
        (e[64] = U),
        (e[65] = G))
      : (G = e[65]),
    G
  );
}
function le(e) {
  let t = (0, ue.c)(19),
    { open: n, onOpenChange: r, onConfirm: ee } = e,
    te;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, K.jsx)(b, {
        children: (0, K.jsx)(E, {
          title: (0, K.jsx)(j, {
            id: `settings.worktrees.autoCleanup.confirm.title`,
            defaultMessage: `Disable automatic worktree deletion?`,
            description: `Title for the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[0] = te))
    : (te = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, K.jsx)(b, {
        className: `text-token-description-foreground`,
        children: (0, K.jsx)(`p`, {
          children: (0, K.jsx)(j, {
            id: `settings.worktrees.autoCleanup.confirm.body`,
            defaultMessage: `We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and Codex will stop deleting them automatically.`,
            description: `Body copy in the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = () => {
        r(!1);
      }),
      (t[2] = r),
      (t[3] = a));
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(j, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === a
    ? (s = t[6])
    : ((s = (0, K.jsx)(_, { color: `ghost`, onClick: a, children: o })),
      (t[5] = a),
      (t[6] = s));
  let c;
  t[7] === ee
    ? (c = t[8])
    : ((c = () => {
        ee();
      }),
      (t[7] = ee),
      (t[8] = c));
  let l;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, K.jsx)(j, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = l))
    : (l = t[9]);
  let u;
  t[10] === c
    ? (u = t[11])
    : ((u = (0, K.jsx)(_, { color: `danger`, onClick: c, children: l })),
      (t[10] = c),
      (t[11] = u));
  let d;
  t[12] !== s || t[13] !== u
    ? ((d = (0, K.jsxs)(y, {
        children: [
          te,
          i,
          (0, K.jsx)(b, { children: (0, K.jsxs)(w, { children: [s, u] }) }),
        ],
      })),
      (t[12] = s),
      (t[13] = u),
      (t[14] = d))
    : (d = t[14]);
  let f;
  return (
    t[15] !== r || t[16] !== n || t[17] !== d
      ? ((f = (0, K.jsx)(T, {
          open: n,
          showDialogClose: !1,
          onOpenChange: r,
          children: d,
        })),
        (t[15] = r),
        (t[16] = n),
        (t[17] = d),
        (t[18] = f))
      : (f = t[18]),
    f
  );
}
var ue,
  de,
  K,
  q = e(() => {
    ((ue = c()),
      n(),
      a(),
      i(),
      (de = t(s(), 1)),
      k(),
      h(),
      m(),
      p(),
      S(),
      f(),
      r(),
      D(),
      G(),
      M(),
      (K = l()));
  });
function J() {
  let e = (0, fe.c)(193),
    t = te(ee),
    n = ie(),
    r = ae(`2764989143`),
    [i, a] = (0, pe.useState)(null),
    o = v(d.branchPrefix),
    s = v(d.alwaysForcePush),
    c = v(d.createPullRequestAsDraft),
    l = v(d.pullRequestMergeMethod),
    f = v(d.commitInstructions),
    p = v(d.pullRequestInstructions),
    m;
  e[0] === t
    ? (m = e[1])
    : ((m = (e) => g(t, d.branchPrefix, e)), (e[0] = t), (e[1] = m));
  let h, y;
  e[2] !== n || e[3] !== t
    ? ((h = () => {
        (a(null),
          t.get(x).success(
            n.formatMessage({
              id: `settings.git.branchPrefix.save.success`,
              defaultMessage: `Saved branch prefix`,
              description: `Toast shown when git branch prefix is saved`,
            }),
          ));
      }),
      (y = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = h),
      (e[5] = y))
    : ((h = e[4]), (y = e[5]));
  let b;
  e[6] !== m || e[7] !== h || e[8] !== y
    ? ((b = { mutationFn: m, onSuccess: h, onError: y }),
      (e[6] = m),
      (e[7] = h),
      (e[8] = y),
      (e[9] = b))
    : (b = e[9]);
  let S = u(b),
    C;
  e[10] === t
    ? (C = e[11])
    : ((C = (e) => g(t, d.alwaysForcePush, e)), (e[10] = t), (e[11] = C));
  let w, T;
  e[12] !== n || e[13] !== t
    ? ((w = (e, r) => {
        r
          ? t.get(x).success(
              n.formatMessage({
                id: `settings.git.forcePush.save.enabled`,
                defaultMessage: `Always force push enabled`,
                description: `Toast shown when the always force push toggle is enabled`,
              }),
            )
          : t.get(x).success(
              n.formatMessage({
                id: `settings.git.forcePush.save.disabled`,
                defaultMessage: `Always force push disabled`,
                description: `Toast shown when the always force push toggle is disabled`,
              }),
            );
      }),
      (T = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = w),
      (e[15] = T))
    : ((w = e[14]), (T = e[15]));
  let E;
  e[16] !== C || e[17] !== w || e[18] !== T
    ? ((E = { mutationFn: C, onSuccess: w, onError: T }),
      (e[16] = C),
      (e[17] = w),
      (e[18] = T),
      (e[19] = E))
    : (E = e[19]);
  let D = u(E),
    O;
  e[20] === t
    ? (O = e[21])
    : ((O = (e) => g(t, d.pullRequestMergeMethod, e)),
      (e[20] = t),
      (e[21] = O));
  let k, A;
  e[22] !== n || e[23] !== t
    ? ((A = () => {
        t.get(x).success(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (k = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
        );
      }),
      (e[22] = n),
      (e[23] = t),
      (e[24] = k),
      (e[25] = A))
    : ((k = e[24]), (A = e[25]));
  let M;
  e[26] !== k || e[27] !== O || e[28] !== A
    ? ((M = { mutationFn: O, onSuccess: A, onError: k }),
      (e[26] = k),
      (e[27] = O),
      (e[28] = A),
      (e[29] = M))
    : (M = e[29]);
  let N = u(M),
    P;
  e[30] === t
    ? (P = e[31])
    : ((P = (e) => g(t, d.createPullRequestAsDraft, e)),
      (e[30] = t),
      (e[31] = P));
  let I, R;
  e[32] !== n || e[33] !== t
    ? ((I = (e, r) => {
        r
          ? t.get(x).success(
              n.formatMessage({
                id: `settings.git.createDraftPullRequest.save.enabled`,
                defaultMessage: `Create draft pull requests enabled`,
                description: `Toast shown when the draft pull request toggle is enabled`,
              }),
            )
          : t.get(x).success(
              n.formatMessage({
                id: `settings.git.createDraftPullRequest.save.disabled`,
                defaultMessage: `Create draft pull requests disabled`,
                description: `Toast shown when the draft pull request toggle is disabled`,
              }),
            );
      }),
      (R = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
        );
      }),
      (e[32] = n),
      (e[33] = t),
      (e[34] = I),
      (e[35] = R))
    : ((I = e[34]), (R = e[35]));
  let B;
  e[36] !== P || e[37] !== I || e[38] !== R
    ? ((B = { mutationFn: P, onSuccess: I, onError: R }),
      (e[36] = P),
      (e[37] = I),
      (e[38] = R),
      (e[39] = B))
    : (B = e[39]);
  let H = u(B),
    [G, le] = (0, pe.useState)(null),
    [ue, de] = (0, pe.useState)(null),
    K;
  e[40] === t
    ? (K = e[41])
    : ((K = (e) => g(t, d.commitInstructions, e)), (e[40] = t), (e[41] = K));
  let q, J;
  e[42] !== n || e[43] !== t
    ? ((q = () => {
        (le(null),
          t.get(x).success(
            n.formatMessage({
              id: `settings.git.commitInstructions.save.success`,
              defaultMessage: `Saved commit instructions`,
              description: `Toast shown when commit instructions are saved`,
            }),
          ));
      }),
      (J = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.commitInstructions.save.error`,
            defaultMessage: `Failed to save commit instructions`,
            description: `Toast shown when commit instructions save fails`,
          }),
        );
      }),
      (e[42] = n),
      (e[43] = t),
      (e[44] = q),
      (e[45] = J))
    : ((q = e[44]), (J = e[45]));
  let me;
  e[46] !== K || e[47] !== q || e[48] !== J
    ? ((me = { mutationFn: K, onSuccess: q, onError: J }),
      (e[46] = K),
      (e[47] = q),
      (e[48] = J),
      (e[49] = me))
    : (me = e[49]);
  let X = u(me),
    he;
  e[50] === t
    ? (he = e[51])
    : ((he = (e) => g(t, d.pullRequestInstructions, e)),
      (e[50] = t),
      (e[51] = he));
  let ge, _e;
  e[52] !== n || e[53] !== t
    ? ((ge = () => {
        (de(null),
          t.get(x).success(
            n.formatMessage({
              id: `settings.git.prInstructions.save.success`,
              defaultMessage: `Saved pull request instructions`,
              description: `Toast shown when pull request instructions are saved`,
            }),
          ));
      }),
      (_e = () => {
        t.get(x).danger(
          n.formatMessage({
            id: `settings.git.prInstructions.save.error`,
            defaultMessage: `Failed to save pull request instructions`,
            description: `Toast shown when pull request instructions save fails`,
          }),
        );
      }),
      (e[52] = n),
      (e[53] = t),
      (e[54] = ge),
      (e[55] = _e))
    : ((ge = e[54]), (_e = e[55]));
  let ve;
  e[56] !== he || e[57] !== ge || e[58] !== _e
    ? ((ve = { mutationFn: he, onSuccess: ge, onError: _e }),
      (e[56] = he),
      (e[57] = ge),
      (e[58] = _e),
      (e[59] = ve))
    : (ve = e[59]);
  let ye = u(ve),
    be = o,
    xe = i ?? be,
    Se = i != null && i !== be,
    Z = S.isPending,
    Ce = D.isPending,
    we = H.isPending,
    Te = N.isPending,
    Ee = f ?? ``,
    De = G ?? Ee,
    Oe = G != null && G !== Ee,
    Q = X.isPending,
    ke = p ?? ``,
    Ae = ue ?? ke,
    je = ue != null && ue !== ke,
    $ = ye.isPending,
    Me;
  e[60] !== xe || e[61] !== Z || e[62] !== Se || e[63] !== S
    ? ((Me = () => {
        !Se || Z || S.mutate(xe);
      }),
      (e[60] = xe),
      (e[61] = Z),
      (e[62] = Se),
      (e[63] = S),
      (e[64] = Me))
    : (Me = e[64]);
  let Ne = Me,
    Pe;
  e[65] !== D || e[66] !== Ce
    ? ((Pe = (e) => {
        Ce || D.mutate(e);
      }),
      (e[65] = D),
      (e[66] = Ce),
      (e[67] = Pe))
    : (Pe = e[67]);
  let Fe = Pe,
    Ie;
  e[68] !== H || e[69] !== we
    ? ((Ie = (e) => {
        we || H.mutate(e);
      }),
      (e[68] = H),
      (e[69] = we),
      (e[70] = Ie))
    : (Ie = e[70]);
  let Le = Ie,
    Re;
  e[71] !== Te || e[72] !== l || e[73] !== N
    ? ((Re = (e) => {
        Te || (e !== l && N.mutate(e));
      }),
      (e[71] = Te),
      (e[72] = l),
      (e[73] = N),
      (e[74] = Re))
    : (Re = e[74]);
  let ze = Re,
    Be;
  e[75] !== De || e[76] !== Q || e[77] !== Oe || e[78] !== X
    ? ((Be = () => {
        Q || !Oe || X.mutate(De);
      }),
      (e[75] = De),
      (e[76] = Q),
      (e[77] = Oe),
      (e[78] = X),
      (e[79] = Be))
    : (Be = e[79]);
  let Ve = Be,
    He;
  e[80] !== $ || e[81] !== je || e[82] !== Ae || e[83] !== ye
    ? ((He = () => {
        $ || !je || ye.mutate(Ae);
      }),
      (e[80] = $),
      (e[81] = je),
      (e[82] = Ae),
      (e[83] = ye),
      (e[84] = He))
    : (He = e[84]);
  let Ue = He,
    We = (Se && !Z) || (Oe && !Q) || (je && !$),
    Ge;
  e[85] !== Ne || e[86] !== Ve || e[87] !== Ue
    ? ((Ge = (e) => {
        (e.preventDefault(), Ne(), Ve(), Ue());
      }),
      (e[85] = Ne),
      (e[86] = Ve),
      (e[87] = Ue),
      (e[88] = Ge))
    : (Ge = e[88]);
  let Ke;
  (e[89] !== We || e[90] !== Ge
    ? ((Ke = { accelerator: `CmdOrCtrl+S`, enabled: We, onKeyDown: Ge }),
      (e[89] = We),
      (e[90] = Ge),
      (e[91] = Ke))
    : (Ke = e[91]),
    se(Ke));
  let qe;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, Y.jsx)(F, { slug: `git-settings` })), (e[92] = qe))
    : (qe = e[92]);
  let Je, Ye;
  e[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, Y.jsx)(j, { ...W.branchPrefix })),
      (Ye = (0, Y.jsx)(j, {
        id: `settings.git.branchPrefix.description`,
        defaultMessage: `Prefix used when creating new branches in Codex`,
        description: `Description for git branch prefix setting`,
      })),
      (e[93] = Je),
      (e[94] = Ye))
    : ((Je = e[93]), (Ye = e[94]));
  let Xe;
  e[95] !== Z || e[96] !== be
    ? ((Xe = (e) => {
        if (Z) return;
        let t = e.target.value;
        a(t === be ? null : t);
      }),
      (e[95] = Z),
      (e[96] = be),
      (e[97] = Xe))
    : (Xe = e[97]);
  let Ze;
  e[98] === n
    ? (Ze = e[99])
    : ((Ze = n.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[98] = n),
      (e[99] = Ze));
  let Qe;
  e[100] === n
    ? (Qe = e[101])
    : ((Qe = n.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[100] = n),
      (e[101] = Qe));
  let $e;
  e[102] !== xe ||
  e[103] !== Ne ||
  e[104] !== Z ||
  e[105] !== Xe ||
  e[106] !== Ze ||
  e[107] !== Qe
    ? (($e = (0, Y.jsx)(oe, {
        label: Je,
        description: Ye,
        control: (0, Y.jsx)(`input`, {
          className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: xe,
          onChange: Xe,
          onBlur: Ne,
          placeholder: Ze,
          "aria-label": Qe,
          disabled: Z,
        }),
      })),
      (e[102] = xe),
      (e[103] = Ne),
      (e[104] = Z),
      (e[105] = Xe),
      (e[106] = Ze),
      (e[107] = Qe),
      (e[108] = $e))
    : ($e = e[108]);
  let et;
  e[109] !== ze || e[110] !== n || e[111] !== Te || e[112] !== r || e[113] !== l
    ? ((et = r
        ? (0, Y.jsx)(oe, {
            label: (0, Y.jsx)(j, { ...W.pullRequestMergeMethod }),
            description: (0, Y.jsx)(j, {
              id: `settings.git.pullRequestMergeMethod.description`,
              defaultMessage: `Choose how Codex merges pull requests`,
              description: `Description for pull request merge method setting`,
            }),
            control: (0, Y.jsx)(U, {
              ariaLabel: n.formatMessage({
                id: `settings.git.pullRequestMergeMethod.ariaLabel`,
                defaultMessage: `Pull request merge method`,
                description: `Accessible label for pull request merge method selector`,
              }),
              selectedId: l,
              onSelect: ze,
              options: [
                {
                  id: `merge`,
                  label: (0, Y.jsx)(j, { ...W.merge }),
                  ariaLabel: n.formatMessage(W.merge),
                  disabled: Te,
                },
                {
                  id: `squash`,
                  label: (0, Y.jsx)(j, { ...W.squash }),
                  ariaLabel: n.formatMessage(W.squash),
                  disabled: Te,
                },
              ],
            }),
          })
        : null),
      (e[109] = ze),
      (e[110] = n),
      (e[111] = Te),
      (e[112] = r),
      (e[113] = l),
      (e[114] = et))
    : (et = e[114]);
  let tt, nt;
  e[115] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, Y.jsx)(j, { ...W.alwaysForcePush })),
      (nt = (0, Y.jsx)(j, {
        id: `settings.git.forcePush.description`,
        defaultMessage: `Use --force-with-lease when pushing from Codex`,
        description: `Description for always force push toggle`,
      })),
      (e[115] = tt),
      (e[116] = nt))
    : ((tt = e[115]), (nt = e[116]));
  let rt;
  e[117] === Fe
    ? (rt = e[118])
    : ((rt = (e) => {
        Fe(e);
      }),
      (e[117] = Fe),
      (e[118] = rt));
  let it;
  e[119] === n
    ? (it = e[120])
    : ((it = n.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Aria label for always force push toggle`,
      })),
      (e[119] = n),
      (e[120] = it));
  let at;
  e[121] !== s || e[122] !== Ce || e[123] !== rt || e[124] !== it
    ? ((at = (0, Y.jsx)(oe, {
        label: tt,
        description: nt,
        control: (0, Y.jsx)(ne, {
          checked: s,
          disabled: Ce,
          onChange: rt,
          ariaLabel: it,
        }),
      })),
      (e[121] = s),
      (e[122] = Ce),
      (e[123] = rt),
      (e[124] = it),
      (e[125] = at))
    : (at = e[125]);
  let ot, st;
  e[126] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, Y.jsx)(j, { ...W.createDraftPullRequests })),
      (st = (0, Y.jsx)(j, {
        id: `settings.git.createDraftPullRequest.description`,
        defaultMessage: `Use draft pull requests by default when creating PRs from Codex`,
        description: `Description for create draft pull requests toggle`,
      })),
      (e[126] = ot),
      (e[127] = st))
    : ((ot = e[126]), (st = e[127]));
  let ct;
  e[128] === Le
    ? (ct = e[129])
    : ((ct = (e) => {
        Le(e);
      }),
      (e[128] = Le),
      (e[129] = ct));
  let lt;
  e[130] === n
    ? (lt = e[131])
    : ((lt = n.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[130] = n),
      (e[131] = lt));
  let ut;
  e[132] !== c || e[133] !== we || e[134] !== ct || e[135] !== lt
    ? ((ut = (0, Y.jsx)(oe, {
        label: ot,
        description: st,
        control: (0, Y.jsx)(ne, {
          checked: c,
          disabled: we,
          onChange: ct,
          ariaLabel: lt,
        }),
      })),
      (e[132] = c),
      (e[133] = we),
      (e[134] = ct),
      (e[135] = lt),
      (e[136] = ut))
    : (ut = e[136]);
  let dt;
  e[137] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, Y.jsx)(re, { electron: !0, children: (0, Y.jsx)(ce, {}) })),
      (e[137] = dt))
    : (dt = e[137]);
  let ft;
  e[138] !== $e || e[139] !== et || e[140] !== at || e[141] !== ut
    ? ((ft = (0, Y.jsx)(L, {
        children: (0, Y.jsx)(L.Content, {
          children: (0, Y.jsxs)(z, { children: [$e, et, at, ut, dt] }),
        }),
      })),
      (e[138] = $e),
      (e[139] = et),
      (e[140] = at),
      (e[141] = ut),
      (e[142] = ft))
    : (ft = e[142]);
  let pt, mt;
  e[143] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, Y.jsx)(j, { ...W.commitInstructions })),
      (mt = (0, Y.jsx)(j, {
        id: `settings.git.commitInstructions.description`,
        defaultMessage: `Added to commit message generation prompts`,
        description: `Description for commit instructions`,
      })),
      (e[143] = pt),
      (e[144] = mt))
    : ((pt = e[143]), (mt = e[144]));
  let ht = !Oe || Q,
    gt;
  e[145] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, Y.jsx)(j, {
        id: `settings.git.commitInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save commit instructions`,
      })),
      (e[145] = gt))
    : (gt = e[145]);
  let _t;
  e[146] !== Ve || e[147] !== X.isPending || e[148] !== ht
    ? ((_t = (0, Y.jsx)(L.Header, {
        title: pt,
        subtitle: mt,
        actions: (0, Y.jsx)(_, {
          color: `secondary`,
          disabled: ht,
          loading: X.isPending,
          onClick: Ve,
          size: `toolbar`,
          children: gt,
        }),
      })),
      (e[146] = Ve),
      (e[147] = X.isPending),
      (e[148] = ht),
      (e[149] = _t))
    : (_t = e[149]);
  let vt;
  e[150] !== Q || e[151] !== Ee
    ? ((vt = (e) => {
        if (Q) return;
        let t = e.target.value;
        le(t === Ee ? null : t);
      }),
      (e[150] = Q),
      (e[151] = Ee),
      (e[152] = vt))
    : (vt = e[152]);
  let yt;
  e[153] === n
    ? (yt = e[154])
    : ((yt = n.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[153] = n),
      (e[154] = yt));
  let bt;
  e[155] === n
    ? (bt = e[156])
    : ((bt = n.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[155] = n),
      (e[156] = bt));
  let xt;
  e[157] !== De ||
  e[158] !== Q ||
  e[159] !== vt ||
  e[160] !== yt ||
  e[161] !== bt
    ? ((xt = (0, Y.jsx)(L.Content, {
        children: (0, Y.jsx)(`textarea`, {
          className: `mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: De,
          onChange: vt,
          placeholder: yt,
          "aria-label": bt,
          disabled: Q,
          rows: 6,
        }),
      })),
      (e[157] = De),
      (e[158] = Q),
      (e[159] = vt),
      (e[160] = yt),
      (e[161] = bt),
      (e[162] = xt))
    : (xt = e[162]);
  let St;
  e[163] !== _t || e[164] !== xt
    ? ((St = (0, Y.jsxs)(L, { children: [_t, xt] })),
      (e[163] = _t),
      (e[164] = xt),
      (e[165] = St))
    : (St = e[165]);
  let Ct, wt;
  e[166] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, Y.jsx)(j, { ...W.pullRequestInstructions })),
      (wt = (0, Y.jsx)(j, {
        id: `settings.git.prInstructions.description`,
        defaultMessage: `Added to PR title/description generation prompts`,
        description: `Description for pull request instructions`,
      })),
      (e[166] = Ct),
      (e[167] = wt))
    : ((Ct = e[166]), (wt = e[167]));
  let Tt = !je || $,
    Et;
  e[168] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, Y.jsx)(j, {
        id: `settings.git.prInstructions.save`,
        defaultMessage: `Save`,
        description: `Button label to save pull request instructions`,
      })),
      (e[168] = Et))
    : (Et = e[168]);
  let Dt;
  e[169] !== Ue || e[170] !== ye.isPending || e[171] !== Tt
    ? ((Dt = (0, Y.jsx)(L.Header, {
        title: Ct,
        subtitle: wt,
        actions: (0, Y.jsx)(_, {
          color: `secondary`,
          disabled: Tt,
          loading: ye.isPending,
          onClick: Ue,
          size: `toolbar`,
          children: Et,
        }),
      })),
      (e[169] = Ue),
      (e[170] = ye.isPending),
      (e[171] = Tt),
      (e[172] = Dt))
    : (Dt = e[172]);
  let Ot;
  e[173] !== $ || e[174] !== ke
    ? ((Ot = (e) => {
        if ($) return;
        let t = e.target.value;
        de(t === ke ? null : t);
      }),
      (e[173] = $),
      (e[174] = ke),
      (e[175] = Ot))
    : (Ot = e[175]);
  let kt;
  e[176] === n
    ? (kt = e[177])
    : ((kt = n.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[176] = n),
      (e[177] = kt));
  let At;
  e[178] === n
    ? (At = e[179])
    : ((At = n.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[178] = n),
      (e[179] = At));
  let jt;
  e[180] !== $ ||
  e[181] !== Ae ||
  e[182] !== Ot ||
  e[183] !== kt ||
  e[184] !== At
    ? ((jt = (0, Y.jsx)(L.Content, {
        children: (0, Y.jsx)(`textarea`, {
          className: `mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
          value: Ae,
          onChange: Ot,
          placeholder: kt,
          "aria-label": At,
          disabled: $,
          rows: 6,
        }),
      })),
      (e[180] = $),
      (e[181] = Ae),
      (e[182] = Ot),
      (e[183] = kt),
      (e[184] = At),
      (e[185] = jt))
    : (jt = e[185]);
  let Mt;
  e[186] !== Dt || e[187] !== jt
    ? ((Mt = (0, Y.jsxs)(L, { children: [Dt, jt] })),
      (e[186] = Dt),
      (e[187] = jt),
      (e[188] = Mt))
    : (Mt = e[188]);
  let Nt;
  return (
    e[189] !== ft || e[190] !== St || e[191] !== Mt
      ? ((Nt = (0, Y.jsxs)(V, { title: qe, children: [ft, St, Mt] })),
        (e[189] = ft),
        (e[190] = St),
        (e[191] = Mt),
        (e[192] = Nt))
      : (Nt = e[192]),
    Nt
  );
}
var fe, pe, Y;
e(() => {
  ((fe = c()),
    n(),
    a(),
    i(),
    (pe = t(s(), 1)),
    k(),
    h(),
    H(),
    S(),
    f(),
    C(),
    N(),
    r(),
    D(),
    B(),
    G(),
    q(),
    R(),
    M(),
    P(),
    I(),
    A(),
    (Y = l()));
})();
export { J as GitSettings };
//# sourceMappingURL=git-settings-Cv4Hezof.js.map
