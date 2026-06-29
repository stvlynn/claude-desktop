import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  O as t,
  tr as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $r as r,
  Hv as i,
  Ja as a,
  Ka as o,
  Qa as s,
  Qr as c,
  Rv as l,
  Uv as u,
  Za as d,
  _m as f,
  vm as p,
  zv as m,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Ai as ee,
  G as te,
  K as h,
  Mi as ne,
  Ni as re,
  Pi as g,
  W as ie,
  at as ae,
  it as _,
  ji as oe,
  ki as v,
  q as se,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function y({
  cwd: e = null,
  projectlessOutputDirectory: t = null,
  title: n,
  turns: r,
}) {
  let i = [],
    a = U(e);
  i.push(`# ${Ce(n ?? `Codex conversation`)}`);
  for (let n of r) {
    let r = b(n, e, a, t);
    r != null && i.push(r);
  }
  return `${i
    .join(
      `

`,
    )
    .trimEnd()}\n`;
}
function b(e, t, i, a) {
  let o = [],
    s = e.cwd == null ? i : U(e.cwd),
    c =
      a == null
        ? void 0
        : (i) =>
            r({
              cwd: e.cwd ?? (t == null ? null : n(t)),
              projectlessOutputDirectory: a,
              resourcePath: i,
            }),
    {
      userItems: l,
      assistantItem: u,
      agentItems: f,
      automationUpdateItems: p,
      toolOutputItems: m,
      postAssistantItems: h,
      systemEventItem: g,
      remoteTaskCreatedItems: ie,
      personalityChangedItems: _,
      forkedFromConversationItems: v,
      modelChangedItems: y,
      modelReroutedItems: b,
      todoListItem: S,
      proposedPlanItem: C,
      planImplementationItem: w,
      mcpServerElicitationItems: T,
      permissionRequestItems: ue,
      approvalItem: E,
      userInputItem: D,
    } = te(
      c == null
        ? e.items
        : e.items.map((e) =>
            e.type === `assistant-message`
              ? { ...e, content: d(e.content, c) }
              : e,
          ),
      e.status,
    );
  for (let e of y) P(o, x(e, s));
  for (let e of l) P(o, ce(e, s));
  for (let e of b) P(o, x(e, s));
  let O = [],
    { renderableAgentItems: k } = se({
      agentItems: f,
      isTurnInProgress: e.status === `in_progress`,
      isAnyNonAgentItemInProgress: ae(u) || ae(C),
    }),
    A = ne({
      units: oe({
        units: ee({
          units: re(k),
          isActivitySliceClosed: u != null,
          conversationDetailLevel: Q,
        }),
      }),
      isActivitySliceClosed: u != null,
    });
  for (let e of A) P(O, fe(e, s));
  for (let e of p) P(O, x(e, s));
  g != null && P(O, x(g, s));
  for (let e of m) P(O, x(e, s));
  for (let e of h) P(O, x(e, s));
  (S != null && P(O, x(S, s)),
    C != null && P(O, x(C, s)),
    w != null && P(O, x(w, s)));
  for (let e of T) P(O, x(e, s));
  for (let e of ue) P(O, x(e, s));
  (E != null && P(O, x(E, s)),
    D != null && P(O, x(D, s)),
    O.length > 0 &&
      o.push(
        we(
          Pe(O.length),
          O.join(`

`),
        ),
      ),
    u != null && P(o, le(u, { pathContext: s })));
  for (let e of ie) P(o, x(e, s));
  for (let e of _) P(o, x(e, s));
  for (let e of v) P(o, x(e, s));
  return o.length === 0
    ? null
    : o.join(`

`);
}
function x(e, t) {
  switch (e.type) {
    case `user-message`:
      return S(e, { escapeDetailsTags: !0, pathContext: t });
    case `assistant-message`:
      return le(e, { escapeDetailsTags: !0, pathContext: t });
    case `reasoning`:
      return null;
    case `proposed-plan`:
      return xe(`Plan`, e.content);
    case `todo-list`:
      return E(e);
    case `exec`:
      return w(e);
    case `patch`:
      return T(e);
    case `turn-diff`:
      return ue(e);
    case `web-search`:
      return `Searched the web for ${K(e.query)}`;
    case `generated-image`:
      return de(e.src, e.status);
    case `userInput`:
      return N(
        e.completed ? `User input request` : `User input requested`,
        e.questions.map((e) => `- ${e.question}`),
      );
    case `user-input-response`:
      return N(
        `User input response`,
        e.questionsAndAnswers.flatMap((e) => [
          `- ${e.question}`,
          ...e.answers.map((e) => `  - ${e}`),
        ]),
      );
    case `mcp-server-elicitation`:
      return N(`MCP server elicitation`, [
        e.completed ? `Status: completed` : `Status: pending`,
        `Action: ${e.action ?? `none`}`,
      ]);
    case `permission-request`:
      return N(`Permission request`, [
        e.completed ? `Status: completed` : `Status: pending`,
        `Reason: ${e.reason ?? `Not provided`}`,
        `Response: ${e.response == null ? `none` : `granted`}`,
      ]);
    case `mcp-tool-call`:
      return D(e);
    case `automation-update`:
      return N(`Scheduled task update`, [
        `Mode: ${e.result?.mode ?? `pending`}`,
        `Automation ID: ${e.result?.automationId ?? `pending`}`,
      ]);
    case `dynamic-tool-call`:
      return N(`Tool call`, [
        `Tool: ${e.tool}`,
        e.completed ? `Status: completed` : `Status: running`,
      ]);
    case `worktree-init`:
      return N(`Worktree initialization`, [
        `Worktree: created`,
        e.setup == null ? null : `Environment setup: ${e.setup.outcome}`,
      ]);
    case `automatic-approval-review`:
      return k(e);
    case `multi-agent-action`:
      return N(`Subagent action`, [
        `Action: ${e.action}`,
        `Status: ${e.status}`,
        `Receiver threads: ${e.receiverThreads.length}`,
        e.prompt == null ? null : `Prompt: ${e.prompt}`,
      ]);
    case `subagent-activity`:
      return null;
    case `plan-implementation`:
      return N(`Plan implementation`, [
        e.isCompleted ? `Status: completed` : `Status: running`,
        e.planContent,
      ]);
    case `remote-task-created`:
      return N(`Remote task created`, [`Task ID: ${e.taskId}`]);
    case `context-compaction`:
      return N(`Context compaction`, [
        `Source: ${e.source}`,
        e.completed ? `Status: completed` : `Status: running`,
      ]);
    case `personality-changed`:
      return N(`Personality changed`, [`Personality: ${e.personality}`]);
    case `forked-from-conversation`:
      return N(`Forked conversation`, [
        `Source conversation: ${e.sourceConversationId}`,
      ]);
    case `model-changed`:
      return N(`Model changed`, [`${e.fromModel} -> ${e.toModel}`]);
    case `model-rerouted`:
      return N(`Model rerouted`, [
        `${e.fromModel} -> ${e.toModel}`,
        `Reason: ${e.reason}`,
      ]);
    case `auto-review-interruption-warning`:
      return null;
    case `system-error`:
      return xe(`System error`, e.content);
    case `stream-error`:
      return N(`Stream error`, [e.content, e.additionalDetails]);
    case `realtime-transcript`:
      return N(
        `Realtime transcript`,
        e.entries.map(({ role: e, text: t }) => `${e}: ${t}`),
      );
    case `steered`:
    case `worked-for`:
      return null;
  }
}
function ce(e, t) {
  let n = S(e, { pathContext: t });
  return n == null ? null : I(n);
}
function S(e, { escapeDetailsTags: t = !1, pathContext: n = $ } = {}) {
  let r = [],
    i = R(e.message, n).trim();
  i.length > 0 && r.push(i);
  let a = C(e, n);
  if ((a.length > 0 && r.push(N(`User context`, a)), r.length === 0))
    return null;
  let o = r.join(`

`);
  return t ? G(o) : o;
}
function C(e, t) {
  let n = [];
  if (e.attachments.length > 0) {
    n.push(`Attachments:`);
    for (let r of e.attachments) n.push(`- ${r.label}: ${z(r.path, t)}`);
  }
  if (e.images.length > 0) {
    n.push(`Images:`);
    for (let r of e.images) n.push(`- ${z(r, t)}`);
  }
  if (e.comments != null && e.comments.length > 0) {
    n.push(`Comments:`);
    for (let r of e.comments) {
      let e = r.lineRange == null ? `` : ` ${K(r.lineRange)}`;
      n.push(
        `- ${B(r.path, t)}${e}: ${L(r.body).replaceAll(
          `
`,
          ` `,
        )}`,
      );
    }
  }
  return (
    e.referencesPriorConversation && n.push(`Referenced prior conversation`),
    e.reviewMode && n.push(`Mode: code review`),
    e.pullRequestFixMode && n.push(`Mode: pull request fix`),
    e.autoResolveSync && n.push(`Mode: auto resolve merge`),
    e.pullRequestCheckNames != null &&
      e.pullRequestCheckNames.length > 0 &&
      n.push(`Pull request checks: ${e.pullRequestCheckNames.join(`, `)}`),
    e.pullRequestMergeConflictNumber !== void 0 &&
      n.push(
        e.pullRequestMergeConflictNumber == null
          ? `Pull request merge conflict`
          : `Pull request merge conflict: #${e.pullRequestMergeConflictNumber}`,
      ),
    n
  );
}
function le(e, { escapeDetailsTags: t = !1, pathContext: n = $ } = {}) {
  let r = R(e.content, n).trim();
  return r.length === 0 ? null : t ? G(r) : r;
}
function w(e) {
  let t = [],
    n = p(e.cmd);
  t.push(J(`bash`, `$ ${n}`));
  let r = e.output?.aggregatedOutput;
  if (r != null) {
    let e = L(r);
    e.trim().length > 0 && t.push(J(`text`, e));
  }
  return (
    t.push(Ve(e)),
    P(t, A(e.automaticApprovalReviews)),
    F(
      `Ran ${q(n)}`,
      t.join(`

`),
    )
  );
}
function T(e) {
  let t = Object.entries(e.changes).flatMap(([e, t]) => {
    let n = o(e, t);
    if (n == null || n.trim().length === 0) return [];
    let r = Be(n);
    return [
      F(`${ze(t.type)} ${q(e)} +${r.additions} -${r.deletions}`, J(`diff`, n)),
    ];
  });
  return (
    P(t, A(e.automaticApprovalReviews)),
    t.length === 0
      ? null
      : t.join(`
`)
  );
}
function ue(e) {
  return F(`Diff`, J(`diff`, e.unifiedDiff));
}
function E(e) {
  let t = [];
  return (
    e.explanation != null &&
      e.explanation.trim().length > 0 &&
      t.push(W(e.explanation).trim()),
    t.push(
      e.plan.map((e) => `- [${Se(e.status)}] ${W(e.step)}`).join(`
`),
    ),
    F(
      `Plan`,
      t.join(`

`),
    )
  );
}
function D(e) {
  let t = [];
  if (
    (t.push(
      `MCP tool call\n\n${W(`${e.invocation.server}.${e.invocation.tool}`)}`,
    ),
    t.push(J(`json`, Y(e.invocation.arguments))),
    P(t, A(e.automaticApprovalReviews)),
    e.result == null)
  )
    return (
      t.push(e.completed ? `Result: none` : `Status: running`),
      t.join(`

`)
    );
  if (e.result.type === `error`)
    return (
      t.push(W(`Error: ${e.result.error}`)),
      t.join(`

`)
    );
  let n = e.result.content.map(O).filter((e) => e.length > 0).join(`

`);
  return (
    n.length > 0 && t.push(n),
    e.result.structuredContent != null &&
      t.push(J(`json`, Y(e.result.structuredContent))),
    t.join(`

`)
  );
}
function O(e) {
  switch (e.type) {
    case `text`:
      return J(`text`, e.text);
    case `image`:
      return W(`Image output: ${e.mimeType}`);
    case `audio`:
      return W(`Audio output: ${e.mimeType}`);
    case `resource_link`:
      return W(`Resource: ${e.title ?? e.name ?? e.uri} (${e.uri})`);
    case `embedded_resource`: {
      let t = e.resource.title ?? e.resource.name ?? e.resource.uri;
      return e.resource.text != null && e.resource.text.trim().length > 0
        ? `${W(`Resource: ${t}`)}\n\n${J(`text`, e.resource.text)}`
        : W(`Resource: ${t}`);
    }
    case `unknown`:
      return J(`json`, Y(e.raw));
  }
}
function k(e) {
  return N(`Auto-review`, [
    `Status: ${e.status}`,
    e.riskLevel == null ? null : `Risk: ${e.riskLevel}`,
    e.rationale == null ? null : `Rationale: ${e.rationale}`,
  ]);
}
function A(e) {
  return e == null
    ? null
    : e.map(k).join(`

`);
}
function de(e, t) {
  return e == null
    ? N(`Generated image`, [`Status: ${t}`])
    : `Generated image\n\n![Generated image](${e})`;
}
function fe(e, t) {
  if (e.kind === `collapsed-tool-activity`) {
    let n = Ie(e.summary);
    if (!v(Q, e.units)) {
      let r = e.units.flatMap((e) => he(e, t)).map((e) => `- ${e}`);
      return r.length === 0
        ? n
        : F(
            n,
            r.join(`
`),
          );
    }
    if (e.units.length === 1) {
      let n = e.units[0];
      if (n?.kind === `entry` && n.entry.kind === `exploration`) return M(n, t);
    }
    return F(
      n,
      e.units.map((e) => pe(e, t)).filter((e) => e != null).join(`

`),
    );
  }
  return e.kind === `pending-mcp-tool-calls`
    ? F(
        Re(e.items.length),
        e.items.map((e) => D(e)).join(`

`),
      )
    : e.kind === `dynamic-tool-call-group`
      ? F(
          Re(e.items.length),
          e.items.map((e) => x(e, t)).join(`

`),
        )
      : M(e, t);
}
function pe(e, t) {
  return e.kind === `entry` &&
    e.entry.kind === `item` &&
    (e.entry.item.type === `exec` || e.entry.item.type === `patch`)
    ? me(e, t)
    : M(e, t);
}
function me(e, t) {
  let n = he(e, t);
  return n.length === 0
    ? null
    : n.map((e) => `- ${e}`).join(`
`);
}
function he(e, t) {
  return e.kind !== `entry` || e.entry.kind !== `item`
    ? []
    : e.entry.item.type === `exec`
      ? [
          `Ran ${K(ge(e.entry.item))}`,
          ...j(e.entry.item.automaticApprovalReviews),
        ]
      : e.entry.item.type === `patch`
        ? [..._e(e.entry.item, t), ...j(e.entry.item.automaticApprovalReviews)]
        : [];
}
function j(e) {
  return e == null
    ? []
    : e.flatMap((e) => [
        `Auto-review: ${e.status}`,
        ...(e.riskLevel == null ? [] : [`Auto-review risk: ${e.riskLevel}`]),
        ...(e.rationale == null
          ? []
          : [`Auto-review rationale: ${W(e.rationale)}`]),
      ]);
}
function ge(e) {
  let t = e.parsedCmd.cmd.trim();
  return t.length === 0 ? p(e.cmd) : t;
}
function _e(e, t) {
  let n = e.grantRoot == null ? t : U(e.grantRoot);
  return Object.entries(e.changes).flatMap(([e, t]) => {
    let r = o(e, t);
    if (r == null || r.trim().length === 0) return [];
    let i = Be(r);
    return [`${ve(t.type)} ${ke(e, n)} (+${i.additions} -${i.deletions})`];
  });
}
function ve(e) {
  switch (e) {
    case `add`:
    case `update`:
      return `Wrote`;
    case `delete`:
      return `Deleted`;
  }
}
function M(e, t) {
  if (e.kind === `web-search-group`)
    return F(
      `Searched the web`,
      e.items.map((e) => `- Searched the web for ${K(e.query)}`).join(`
`),
    );
  if (e.kind === `multi-agent-group`) {
    let t = e.items[0];
    return N(`Subagent action`, [
      t == null ? null : `Action: ${t.action}`,
      t == null ? null : `Status: ${t.status}`,
      `Receiver threads: ${e.items.length}`,
    ]);
  }
  return e.entry.kind === `exploration` ? ye(e.entry, t) : x(e.entry.item, t);
}
function ye(e, t) {
  let n = e.items
    .map((e) => be(e, t))
    .filter((e) => e != null)
    .map((e) => `- ${e}`);
  return n.length === 0
    ? null
    : F(
        Fe(e.items),
        n.join(`
`),
      );
}
function be(e, t) {
  if (e.type !== `exec`) return null;
  let n = e.parsedCmd,
    r = e.cwd == null ? t : U(e.cwd);
  switch (n.type) {
    case `read`:
      return `Read ${z(n.path ?? n.name, r)}`;
    case `search`:
      return n.query != null && n.path != null
        ? `Searched for ${K(n.query)} in ${z(n.path, r)}`
        : n.query == null
          ? `Searched for files`
          : `Searched for ${K(n.query)}`;
    case `list_files`:
      return n.path == null
        ? `Listed files`
        : `Listed files in ${z(n.path, r)}`;
    case `format`:
    case `test`:
    case `lint`:
    case `noop`:
    case `unknown`:
      return K(n.cmd);
  }
}
function xe(e, t) {
  let n = W(t).trim();
  return n.length === 0 ? null : `${e}\n\n${n}`;
}
function N(e, t) {
  let n = t.flatMap((e) => {
    if (e == null) return [];
    let t = W(e);
    return t.trim().length === 0 ? [] : [t];
  });
  return n.length === 0
    ? e
    : `${e}\n\n${n.join(`
`)}`;
}
function P(e, t) {
  t != null && t.trim().length > 0 && e.push(t);
}
function Se(e) {
  switch (e) {
    case `completed`:
      return `x`;
    case `in_progress`:
    case `pending`:
      return ` `;
  }
}
function Ce(e) {
  let t = e.replaceAll(/\s+/g, ` `).trim();
  return t.length === 0 ? `Codex conversation` : t.replaceAll(`#`, `\\#`);
}
function F(e, t) {
  return `<details><summary>${e}</summary>\n\n${L(t).trim()}\n\n</details>`;
}
function we(e, t) {
  return `<details><summary>${e}</summary>\n\n${I(t)}\n</details>`;
}
function I(e) {
  return L(e)
    .trim()
    .split(
      `
`,
    )
    .map((e) => (e.length === 0 ? `>` : `> ${e}`)).join(`
`);
}
function L(e) {
  return e.replaceAll(
    /\r\n?/g,
    `
`,
  );
}
function R(e, t) {
  return Ee(Te(L(d(e))), t);
}
function Te(e) {
  return e
    .split(
      `
`,
    )
    .map((e) => {
      let t = e.replaceAll(Ue, ``);
      return t.trim().length === 0 ? `` : t.trimEnd();
    })
    .join(
      `
`,
    )
    .replaceAll(
      /\n{3,}/g,
      `

`,
    );
}
function Ee(e, t) {
  return e.replaceAll(We, (e, n, r) => {
    let i = n.startsWith(`<`) && n.endsWith(`>`),
      a = i ? n.slice(1, -1) : n,
      o = De(a, t);
    return o === a ? e : `](${Oe(o, i)}${r ?? ``})`;
  });
}
function De(e, t) {
  let { path: n } = V(e);
  return m(n) ? B(e, t) : e;
}
function Oe(e, t) {
  return t || /[\s()]/.test(e) ? `<${e}>` : e;
}
function z(e, t) {
  return K(B(e, t));
}
function ke(e, t) {
  return K(Ae(e, t));
}
function Ae(e, t) {
  let n = B(e, t);
  return n === `.` ||
    n === `~` ||
    n.startsWith(`./`) ||
    n.startsWith(`../`) ||
    n.startsWith(`~/`) ||
    m(n)
    ? n
    : `./${n}`;
}
function B(e, t) {
  let { path: n, lineSuffix: r } = V(e),
    i = u(n),
    a = H(i, t.cwd, `.`);
  if (a != null) return `${a}${r}`;
  let o = H(i, t.homeDir, `~`);
  return o == null ? `${i}${r}` : `${o}${r}`;
}
function V(e) {
  let t = qe.exec(e);
  return t?.[1] == null || t[2] == null || !m(t[1])
    ? { lineSuffix: ``, path: e }
    : { lineSuffix: t[2], path: t[1] };
}
function H(e, t, n) {
  if (t == null || t === `/`) return null;
  let r = i(e),
    a = i(t);
  return r === a
    ? n
    : r.startsWith(`${a}/`)
      ? `${n}/${e.slice(t.length + 1)}`
      : null;
}
function U(e) {
  if (e == null) return $;
  let t = je(e);
  return t == null ? $ : { cwd: t, homeDir: Me(t) };
}
function je(e) {
  let t = u(e).replace(/\/+$/, ``);
  return m(t) ? t : null;
}
function Me(e) {
  let t = Ge.exec(e);
  if (t != null) return t[0];
  let n = Ke.exec(e);
  return n == null ? null : n[0];
}
function W(e) {
  return G(L(e));
}
function G(e) {
  return e.replaceAll(/<\/?details(?=[\s>])[^>]*>/gi, (e) => He(e));
}
function K(e) {
  let t = "`".repeat(Ne(e) + 1);
  return `${t}${e}${t}`;
}
function q(e) {
  return `<code>${He(e)}</code>`;
}
function J(e, t) {
  let n = L(t).trimEnd(),
    r = "`".repeat(Math.max(3, Ne(n) + 1));
  return `${r}${e}\n${n}\n${r}`;
}
function Ne(e) {
  let t = 0;
  for (let n of e.matchAll(/`+/g)) t = Math.max(t, n[0].length);
  return t;
}
function Y(e) {
  return JSON.stringify(e, null, 2) ?? `null`;
}
function Pe(e) {
  return `${e} previous ${e === 1 ? `message` : `messages`}`;
}
function Fe(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i of e)
    if (i.type === `exec`)
      switch (i.parsedCmd.type) {
        case `read`:
          t += 1;
          break;
        case `search`:
          n += 1;
          break;
        case `list_files`:
          r += 1;
          break;
        case `format`:
        case `test`:
        case `lint`:
        case `noop`:
        case `unknown`:
          break;
      }
  let i = [
    Z(t, `file`, `files`),
    Z(n, `search`, `searches`),
    Z(r, `list`, `lists`),
  ].filter((e) => e != null);
  return i.length === 0 ? `Explored` : `Explored ${i.join(`, `)}`;
}
function Ie(e) {
  let t = [];
  (X(t, e.createdFileCount, `Created`, `created`, `file`, `files`),
    X(t, e.editedFileCount, `Edited`, `edited`, `file`, `files`),
    X(t, e.deletedFileCount, `Deleted`, `deleted`, `file`, `files`));
  let n = [
    Z(e.exploredFileCount, `file`, `files`),
    Z(e.searchCount, `search`, `searches`),
    Z(e.listCount, `list`, `lists`),
  ].filter((e) => e != null);
  return (
    n.length > 0 &&
      t.push(`${t.length === 0 ? `Explored` : `explored`} ${n.join(`, `)}`),
    X(t, e.deniedRequestCount, `Denied`, `denied`, `request`, `requests`),
    Le(t, e.timedOutRequestCount),
    X(t, e.commandCount, `Ran`, `ran`, `command`, `commands`),
    X(t, e.mcpToolCallCount, `Called`, `called`, `tool`, `tools`),
    e.webSearchCount > 0 &&
      t.push(t.length === 0 ? `Searched the web` : `searched the web`),
    t.length === 0 ? `Tool activity` : t.join(`, `)
  );
}
function X(e, t, n, r, i, a) {
  let o = Z(t, i, a);
  o != null && e.push(`${e.length === 0 ? n : r} ${o}`);
}
function Le(e, t) {
  let n = Z(t, `request`, `requests`);
  n != null && e.push(`${n} timed out`);
}
function Z(e, t, n) {
  return e === 0 ? null : e === 1 ? `a ${t}` : `${e} ${n}`;
}
function Re(e) {
  return e === 1 ? `Called a tool` : `Called ${e} tools`;
}
function ze(e) {
  switch (e) {
    case `add`:
      return `Created`;
    case `delete`:
      return `Deleted`;
    case `update`:
      return `Edited`;
  }
}
function Be(e) {
  let t = 0,
    n = 0;
  for (let r of L(e).split(`
`)) {
    if (r.startsWith(`+`) && !r.startsWith(`+++`)) {
      t += 1;
      continue;
    }
    r.startsWith(`-`) && !r.startsWith(`---`) && (n += 1);
  }
  return { additions: t, deletions: n };
}
function Ve(e) {
  return e.executionStatus === `interrupted`
    ? `Stopped`
    : e.output?.exitCode == null
      ? e.executionStatus === `completed`
        ? `Success`
        : `Running`
      : e.output.exitCode === 0
        ? `Success`
        : `Failed with exit code ${e.output.exitCode}`;
}
function He(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`);
}
var Ue, Q, $, We, Ge, Ke, qe;
e(() => {
  (t(),
    s(),
    l(),
    g(),
    a(),
    _(),
    f(),
    c(),
    h(),
    ie(),
    (Ue = /::git-[a-z-]+\{[^}\n]*\}/g),
    (Q = `STEPS_PROSE`),
    ($ = { cwd: null, homeDir: null }),
    (We =
      /\]\((<[^>\n]+>|[^)\s\n]+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)/g),
    (Ge = /^\/(?:Users|home)\/[^/]+(?=\/|$)/),
    (Ke = /^[A-Za-z]:\/Users\/[^/]+(?=\/|$)/),
    (qe = /^(.*?)(:\d+(?:-\d+)?)$/));
})();
export { y as renderConversationMarkdown };
//# sourceMappingURL=conversation-markdown-B6eEpGgd.js.map
