import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  cu as r,
  du as i,
  hh as a,
  mh as o,
  yu as s,
  zu as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Kr as l,
  Ur as u,
  qr as d,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function f(e) {
  let t = [],
    n = 0,
    r;
  for (g.lastIndex = 0; (r = g.exec(e)) != null; ) {
    let i = p(r[1], r[2]);
    i != null &&
      (r.index > n && t.push({ type: `text`, text: e.slice(n, r.index) }),
      t.push(i),
      (n = r.index + r[0].length));
  }
  return t.length === 0
    ? [{ type: `text`, text: e }]
    : (n < e.length && t.push({ type: `text`, text: e.slice(n) }), t);
}
function p(e, t) {
  let n = m(e, t);
  return n == null
    ? r(d(t)) == null
      ? null
      : { type: `text`, text: l(e) }
    : { type: `mention`, label: n };
}
function m(e, t) {
  let n = l(e).trim();
  return h(d(t), n)
    ? (n.startsWith(`$[`) || n.startsWith(`@[`)) && n.endsWith(`]`)
      ? n.slice(2, -1)
      : n.startsWith(`$`) || n.startsWith(`@`)
        ? n.slice(1)
        : n
    : null;
}
function h(e, t) {
  return e.startsWith(`app://`) ||
    e.startsWith(`agent://`) ||
    e.startsWith(`plugin://`) ||
    e.startsWith(`subagent://`) ||
    s(e) != null ||
    e.includes(`SKILL.md`)
    ? !0
    : (t.startsWith(`@`) || t.startsWith(`$`)) &&
        (e.startsWith(`/`) || /^[A-Za-z]:\\/.test(e) || e.startsWith(`\\\\`));
}
var g,
  _ = e(() => {
    (c(), u(), i(), (g = /\[((?:\\.|[^\]\n])+)\]\(((?:\\.|[^)\n])+)\)/g));
  }),
  v,
  y,
  b,
  x,
  S,
  C = e(() => {
    (a(),
      (v = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif`),
      (y = o(
        `text-token-text-primary min-h-0 w-full p-0 leading-normal !font-sans`,
        `[&_.ProseMirror]:w-full`,
        `[&_.ProseMirror]:!text-token-foreground`,
        `[&_.ProseMirror]:!font-sans`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
        `[&_.ProseMirror]:!leading-6`,
        `[&_.ProseMirror_p]:!font-sans`,
        `[&_.ProseMirror_p]:!leading-6`,
        `[&_.ProseMirror_p_*]:!font-sans`,
        `[&_.ProseMirror_span]:!font-sans`,
        `!min-h-0 text-base`,
        `[&_.ProseMirror]:min-h-6`,
      )),
      (b = `absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`),
      (x = `absolute inset-x-0 bottom-0 flex h-12 items-center pl-2 pr-3 origin-bottom-left transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`),
      (S = {
        "--codex-chat-font-size": `13px`,
        "--composer-top-tray-background": `var(--color-token-main-surface-primary)`,
        "--composer-top-tray-border": `transparent`,
        "--font-sans": v,
        "--vscode-font-family": v,
        fontFamily: v,
      }));
  });
function w(e) {
  let t = (0, T.c)(12),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, style: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a;
  t[4] === n
    ? (a = t[5])
    : ((a = o(
        `pointer-events-auto overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`,
        n,
      )),
      (t[4] = n),
      (t[5] = a));
  let s;
  t[6] === i ? (s = t[7]) : ((s = { ...S, ...i }), (t[6] = i), (t[7] = s));
  let c;
  return (
    t[8] !== r || t[9] !== a || t[10] !== s
      ? ((c = (0, E.jsx)(`div`, { ...r, className: a, style: s })),
        (t[8] = r),
        (t[9] = a),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
var T,
  E,
  D = e(() => {
    ((T = t()), a(), C(), (E = n()));
  });
export {
  b as a,
  _ as c,
  y as i,
  f as l,
  D as n,
  S as o,
  x as r,
  C as s,
  w as t,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~h422e2ym-Dd6oN7BA.js.map
