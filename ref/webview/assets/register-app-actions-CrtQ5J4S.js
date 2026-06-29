import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Eo as t,
  Jt as n,
  O as r,
  Ro as i,
  So as a,
  To as o,
  _ as s,
  a as c,
  c as l,
  go as u,
  jo as d,
  so as f,
  st as p,
  ta as ee,
  uo as m,
  v as h,
  vo as te,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $c as ne,
  $l as re,
  $p as ie,
  Bp as ae,
  Ff as g,
  Hf as oe,
  Hp as se,
  Ip as ce,
  Iu as le,
  Lf as _,
  Nu as ue,
  Pp as de,
  Qp as fe,
  Rf as pe,
  Ru as me,
  Uf as he,
  Up as ge,
  Vf as _e,
  Xf as ve,
  Xp as ye,
  Yc as be,
  Yf as v,
  Yl as y,
  ad as xe,
  em as Se,
  fm as b,
  hm as x,
  mm as S,
  nu as Ce,
  rm as we,
  sd as C,
  tm as Te,
  tu as Ee,
  zf as De,
  zp as w,
  zu as Oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  $o as ke,
  Bm as T,
  Gm as Ae,
  Qo as je,
  es as Me,
  zm as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Av as D,
  Cv as Ne,
  Dv as Pe,
  Ev as Fe,
  Ii as O,
  Li as Ie,
  M as Le,
  N as Re,
  Ov as k,
  Pi as ze,
  Qp as Be,
  Sv as A,
  Tv as j,
  _v as M,
  bv as Ve,
  gv as N,
  hv as P,
  ji as He,
  jv as Ue,
  mv as We,
  vv as F,
  wv as Ge,
  xv as I,
  yv as Ke,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  a as L,
  i as qe,
  o as R,
  r as Je,
  t as Ye,
} from "./app-initial~app-main~register-app-actions-CTTYxHO5.js";
var z,
  B,
  Xe = e(() => {
    (r(),
      f(),
      E(),
      R(),
      (z = t({ type: a(`app.appearance.get`) })),
      (B = L({
        schema: z,
        run: async () => {
          let [e, t, n, r, i] = await Promise.all([
            T(p.theme),
            T(p.lightCodeThemeId),
            T(p.darkCodeThemeId),
            T(p.lightChromeTheme),
            T(p.darkChromeTheme),
          ]);
          return {
            schemaVersion: 1,
            mode: e,
            themes: {
              light: { codeThemeId: t, chromeTheme: r },
              dark: { codeThemeId: n, chromeTheme: i },
            },
          };
        },
      })));
  }),
  V,
  H,
  Ze = e(() => {
    (f(),
      w(),
      R(),
      (V = t({ type: a(`app.appearance.get_available_themes`) })),
      (H = L({
        schema: V,
        run: () => ({
          schemaVersion: 1,
          themes: ce().map((e) => ({
            id: e.id,
            label: e.label,
            supportsDark: e.registrationByVariant.dark != null,
            supportsLight: e.registrationByVariant.light != null,
          })),
        }),
      })));
  });
async function U(e, t, n, r) {
  let i = c(`get-settings`),
    a = e.queryClient?.getQueryData(i),
    o = r?.optimistic ?? !0;
  o &&
    e.queryClient?.setQueryData(i, {
      ...a,
      values: { ...a?.values, [t.key]: n },
    });
  try {
    (await Ae(t, n),
      o ||
        e.queryClient?.setQueryData(i, {
          ...a,
          values: { ...a?.values, [t.key]: n },
        }));
  } catch (t) {
    throw (a != null && e.queryClient?.setQueryData(i, a), t);
  } finally {
    (await e.queryClient?.invalidateQueries({ queryKey: i }),
      h.dispatchMessage(`query-cache-invalidate`, { queryKey: [...i] }));
  }
}
var W = e(() => {
    (s(), E(), l());
  }),
  G,
  K,
  Qe = e(() => {
    (r(),
      f(),
      R(),
      W(),
      (G = t({
        type: a(`app.appearance.set_mode`),
        mode: m([`light`, `dark`, `system`]),
      })),
      (K = L({
        schema: G,
        run: async ({ mode: e }, t) => (
          await U(t, p.theme, e, { optimistic: !1 }),
          { schemaVersion: 1, mode: e }
        ),
      })));
  });
async function $e(e, t, n) {
  let { chromeThemeSetting: r, codeThemeSetting: i } = tt(t),
    a = se(await T(r), t);
  if (n.kind === `custom`) {
    let t = et(a, n.patch);
    return (await U(e, r, t), t);
  }
  let o = await de(n.themeId, t),
    s = {
      ...a,
      ...o,
      fonts: { ...a.fonts, ...o.fonts },
      semanticColors: { ...a.semanticColors, ...o.semanticColors },
    };
  return (await Promise.all([U(e, i, n.themeId), U(e, r, s)]), s);
}
function et(e, t) {
  return {
    ...e,
    ...t,
    fonts: t.fonts == null ? e.fonts : { ...e.fonts, ...t.fonts },
    semanticColors:
      t.semanticColors == null
        ? e.semanticColors
        : { ...e.semanticColors, ...t.semanticColors },
  };
}
function tt(e) {
  return e === `light`
    ? {
        chromeThemeSetting: p.lightChromeTheme,
        codeThemeSetting: p.lightCodeThemeId,
      }
    : {
        chromeThemeSetting: p.darkChromeTheme,
        codeThemeSetting: p.darkCodeThemeId,
      };
}
var q,
  nt,
  rt,
  it,
  at,
  ot,
  st = e(() => {
    (r(),
      f(),
      E(),
      ge(),
      w(),
      R(),
      W(),
      (q = d().regex(/^#[0-9a-fA-F]{6}$/)),
      (nt = t({
        code: d().nullable().optional(),
        ui: d().nullable().optional(),
      })),
      (rt = t({ diffAdded: q, diffRemoved: q, skill: q })),
      (it = t({
        accent: q.optional(),
        contrast: o().int().min(0).max(100).optional(),
        fonts: nt.optional(),
        ink: q.optional(),
        opaqueWindows: u().optional(),
        semanticColors: rt.partial().optional(),
        surface: q.optional(),
      })),
      (at = t({
        type: a(`app.appearance.set_theme`),
        theme: te(`kind`, [
          t({
            kind: a(`preset`),
            themeId: d().refine(ae, `Invalid code theme id`),
          }),
          t({ kind: a(`custom`), patch: it }),
        ]),
        variant: m([`light`, `dark`, `both`]).default(`both`),
      })),
      (ot = L({
        schema: at,
        run: async ({ theme: e, variant: t }, n) => {
          let r = [],
            i = { schemaVersion: 1, theme: e, updated: r };
          if (t === `light` || t === `both`) {
            let t = await $e(n, `light`, e);
            (r.push(`light`), (i.appearanceLightChromeTheme = t));
          }
          if (t === `dark` || t === `both`) {
            let t = await $e(n, `dark`, e);
            (r.push(`dark`), (i.appearanceDarkChromeTheme = t));
          }
          return ((i.updated = r), i);
        },
      })));
  });
function J(e) {
  if (e.scope == null) throw Error(`App action requires a route scope`);
  return e.scope;
}
var Y = e(() => {});
function X(e) {
  switch (e.routeKind) {
    case `local-thread`:
    case `remote-thread`:
    case `chatgpt-thread`:
    case `client-local-thread`:
      return !0;
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return !1;
  }
}
function ct(e) {
  switch (e.value.routeKind) {
    case `local-thread`:
      return {
        id: e.value.conversationId,
        kind: `local`,
        hostId: e.get(Le, e.value.conversationId) ?? `local`,
        title: e.get(De, e.value.conversationId),
      };
    case `remote-thread`:
      return { id: e.value.taskId, kind: `remote`, title: null };
    case `chatgpt-thread`:
      return { id: e.value.conversationId, kind: `chatgpt`, title: null };
    case `client-local-thread`:
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function lt(e) {
  switch (e.routeKind) {
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
      };
    case `local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
    case `client-local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.clientThreadId,
      };
    case `remote-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        taskId: e.taskId,
      };
    case `chatgpt-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
  }
}
function ut(e, t, n, r, i) {
  let a = t == null ? [] : ue(e, t),
    o = t == null ? null : me(t, e.get(b), { bottom: n, right: r }),
    s = o == null ? null : (a.find((e) => e.browserTabId === o) ?? null),
    c = t == null || o == null ? null : v.getSnapshot(t, o);
  return {
    canGoBack: c?.canGoBack ?? !1,
    canGoForward: c?.canGoForward ?? !1,
    fullscreen: s?.target === `right` && i,
    isLoading: c?.isLoading ?? !1,
    open: s != null,
    tabs: dt(
      t,
      a.map((e) => e.browserTabId),
      o,
    ),
    title: c?.title ?? null,
    url: c?.url ?? null,
  };
}
function dt(e, t, n) {
  if (e == null) return [];
  let r = v.getBrowserUseBrowserTabIds(e),
    i = [...t, ...r],
    a = new Set(r),
    o = new Set();
  return i.flatMap((t) => {
    if (o.has(t)) return [];
    o.add(t);
    let r = v.getSnapshot(e, t);
    return [
      {
        active: t === n,
        browserTabId: t,
        isBrowserUseActive: v.isBrowserUseActive(e, t),
        isBrowserUseManaged: a.has(t),
        isLoading: r?.isLoading ?? !1,
        title: r?.title ?? null,
        url: r?.url ?? null,
      },
    ];
  });
}
function Z(e) {
  let t = document.querySelector(e);
  return t == null
    ? { present: !1 }
    : {
        present: !0,
        scrollTop: Math.round(t.scrollTop),
        scrollHeight: Math.round(t.scrollHeight),
        clientHeight: Math.round(t.clientHeight),
      };
}
function ft() {
  return Array.from(document.querySelectorAll(Ue)).map((e, t) => pt(e, t));
}
function pt(e, t) {
  let n = _t(e);
  return e.matches(D.sidebarSection)
    ? {
        type: `section`,
        index: t,
        heading: e.dataset.appActionSidebarSectionHeading ?? ``,
        collapsed: e.dataset.appActionSidebarSectionCollapsed === `true`,
        visibility: n,
      }
    : e.matches(D.sidebarProjectRow)
      ? {
          type: `project`,
          index: t,
          projectId: e.dataset.appActionSidebarProjectId ?? ``,
          label: e.dataset.appActionSidebarProjectLabel ?? ``,
          collapsed: e.dataset.appActionSidebarProjectCollapsed === `true`,
          visibility: n,
        }
      : {
          type: `thread`,
          index: t,
          active: e.dataset.appActionSidebarThreadActive === `true`,
          hostId: e.dataset.appActionSidebarThreadHostId || null,
          id: e.dataset.appActionSidebarThreadId ?? ``,
          kind: e.dataset.appActionSidebarThreadKind ?? ``,
          pinned: e.dataset.appActionSidebarThreadPinned === `true`,
          title: e.dataset.appActionSidebarThreadTitle ?? ``,
          visibility: n,
        };
}
function mt(e) {
  let t = gt(),
    n = new Set(e.get(C).map((e) => e.path));
  return [
    ...e.get(C).map((e) => ({
      path: e.path,
      additions: e.summary?.additions ?? e.diff?.additions ?? 0,
      deletions: e.summary?.deletions ?? e.diff?.deletions ?? 0,
      ...ht(t.get(e.path)),
    })),
    ...Array.from(t.entries()).flatMap(([e, t]) =>
      n.has(e) ? [] : [{ path: e, additions: null, deletions: null, ...ht(t) }],
    ),
  ].map((e, t) => ({ index: t, ...e }));
}
function ht(e) {
  let t = e?.querySelector(D.reviewFileToggle);
  return {
    expanded:
      t == null ? null : t.dataset.appActionReviewFileExpanded === `true`,
    visibility: e == null ? `not_mounted` : _t(e),
  };
}
function gt() {
  let e = Array.from(document.querySelectorAll(D.reviewFile));
  return new Map(
    e.flatMap((e) => {
      let t = e.dataset.reviewPath;
      return t == null ? [] : [[t, e]];
    }),
  );
}
function _t(e) {
  let t = e.getBoundingClientRect();
  return t.bottom <= 0 ||
    t.right <= 0 ||
    t.top >= window.innerHeight ||
    t.left >= window.innerWidth
    ? `offscreen`
    : `visible`;
}
var vt,
  yt,
  bt = e(() => {
    (f(),
      Re(),
      ve(),
      S(),
      oe(),
      we(),
      pe(),
      g(),
      xe(),
      Be(),
      Oe(),
      ze(),
      y(),
      Ie(),
      Y(),
      R(),
      I(),
      (vt = t({ type: a(`app.get_summary`) })),
      (yt = L({
        schema: vt,
        run: (e, t) => {
          let n = J(t),
            r = n.get(Se),
            i = n.get(fe),
            a = n.get(ie),
            o = i && a ? n.get(he.activeTab$) : null,
            s = n.get(ye) ? n.get(_e.activeTab$) : null,
            c = o?.tabId ?? null,
            l = null;
          c === O.DIFF ? (l = `right`) : s?.tabId === O.DIFF && (l = `bottom`);
          let u = l != null,
            d = n.get(x),
            f = le(n.get(b), { bottom: n.get(re), right: n.get(Ee) });
          return {
            schemaVersion: 1,
            window: {
              windowId: We,
              route: lt(n.value),
              thread: ct(n),
              panels: {
                browser: ut(n, X(n.value) ? He(n) : null, s, o, d),
                sidebar: { open: r },
                review: {
                  open: u,
                  placement: l,
                  fullscreen: l === `right` && d,
                  fileTreeOpen: u && n.get(Te),
                  view: n.get(_),
                },
                terminal: { open: f != null, placement: f },
                rightPanel: { fullscreen: d, kind: c },
              },
              ...(r
                ? { sidebar: { viewport: Z(D.sidebarScroll), rows: ft() } }
                : {}),
              ...(u
                ? { review: { viewport: Z(D.reviewScroll), files: mt(n) } }
                : {}),
              ...(X(n.value) ? { timeline: Z(D.timelineScroll) } : {}),
            },
          };
        },
      })));
  });
function xt(e) {
  return L({ schema: Ct, run: ({ action: t }) => St(e(), t) });
}
function St(e, t, n = wt) {
  return {
    schemaVersion: 1,
    prompt: n,
    actions: e
      .filter((e) => (t == null ? !0 : e.type === t))
      .map((e) => ({
        type: e.type,
        jsonSchema: JSON.stringify(i(e.schema), null, 2),
      })),
  };
}
var Ct,
  wt,
  Tt = e(() => {
    (f(),
      R(),
      (Ct = t({ type: a(`app.help`), action: d().optional() })),
      (wt = `You can inspect or operate the Codex desktop app itself by calling this dynamic tool with exactly one JSON action payload.

Use this dynamic tool only for Codex Desktop UI state and actions, such as windows, sidebars, review panels, appearance, and Codex settings. It can show workspace files, browser tabs, terminals, and reviews inside Codex with windows.tabs.open. Use the relevant browser, shell, or file tool to inspect or interact with their contents.

Use {"type":"app.get_summary"} before acting on anything that depends on the visible UI, such as "my first pinned thread", "the second project", "the visible review file", or current panel state. The summary returns stable references such as thread ids, project ids, file paths, panel open state, and scroll positions. Use those references exactly in follow-up actions.

Use {"type":"app.help","action":"windows.show_thread"} to inspect one action, or {"type":"app.help"} to inspect every registered action schema.

The current implementation targets the active primary app window. Use "current" for windowId.

Common workflow examples:
- Read the current appearance mode, preset ids, and custom chrome colors with app.appearance.get.
- Switch app appearance mode with app.appearance.set_mode and {"mode":"light"}, {"mode":"dark"}, or {"mode":"system"}.
- Pick a code theme preset with app.appearance.set_theme and {"variant":"light","theme":{"kind":"preset","themeId":"monokai"}}.
- Adjust custom chrome theme colors with app.appearance.set_theme and {"variant":"dark","theme":{"kind":"custom","patch":{"accent":"#ff8800"}}}.
- Get available theme ids with app.appearance.get_available_themes.
- Open a review file: call app.get_summary while the review panel is open, choose a file path from window.review.files, then call windows.review.scroll_to_file or windows.review.file_set_expanded.
- Scroll Codex UI surfaces: use the relevant windows.sidebar.scroll, windows.review.scroll, or windows.timeline.scroll action with a pixels, pages, or edge scroll object. Use the dedicated browser-use tool for browser navigation and page scrolling.

- Go to the first pinned thread: call app.get_summary, find the first row in window.sidebar.rows with type "thread" and pinned true, then call windows.show_thread with that row's id as threadId.
- Go home: call windows.show_home.
- Toggle panels: call windows.sidebar.toggle, windows.terminal.toggle, or windows.review.toggle.
- Show a workspace file, browser tab, terminal, or review in a Codex panel with windows.tabs.open.

Prefer the smallest action that directly satisfies the user request.`));
  }),
  Et,
  Dt,
  Ot = e(() => {
    (f(),
      s(),
      R(),
      I(),
      (Et = t({ type: a(`windows.nav.back`), windowId: P })),
      (Dt = L({
        schema: Et,
        run: () => {
          h.dispatchHostMessage({ type: `navigate-back` });
        },
      })));
  }),
  kt,
  At,
  jt = e(() => {
    (f(),
      s(),
      R(),
      I(),
      (kt = t({ type: a(`windows.nav.forward`), windowId: P })),
      (At = L({
        schema: kt,
        run: () => {
          h.dispatchHostMessage({ type: `navigate-forward` });
        },
      })));
  }),
  Mt,
  Nt,
  Pt = e(() => {
    (f(),
      R(),
      I(),
      (Mt = t({ type: a(`windows.review.collapse_all`), windowId: P })),
      (Nt = L({
        schema: Mt,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, {
              detail: { open: !1, scope: `review` },
            }),
          );
        },
      })));
  }),
  Ft,
  It,
  Lt = e(() => {
    (f(),
      R(),
      I(),
      (Ft = t({ type: a(`windows.review.expand_all`), windowId: P })),
      (It = L({
        schema: Ft,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, {
              detail: { open: !0, scope: `review` },
            }),
          );
        },
      })));
  }),
  Rt,
  zt,
  Bt = e(() => {
    (f(),
      R(),
      I(),
      (Rt = t({
        type: a(`windows.review.file_set_expanded`),
        windowId: P,
        path: d(),
        expanded: u(),
      })),
      (zt = L({
        schema: Rt,
        run: ({ path: e, expanded: t }) => {
          let n = M(e).querySelector(D.reviewFileToggle);
          if (n == null) throw Error(`Missing review file toggle: ${e}`);
          n.dataset.appActionReviewFileExpanded !== String(t) && n.click();
        },
      })));
  }),
  Vt,
  Ht,
  Ut = e(() => {
    (f(),
      R(),
      I(),
      (Vt = t({ type: a(`windows.review.scroll`), windowId: P, scroll: k })),
      (Ht = L({
        schema: Vt,
        run: ({ scroll: e }) => {
          A(N(D.reviewScroll), e);
        },
      })));
  });
function Wt(e) {
  switch (e) {
    case `top`:
      return `start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `end`;
  }
}
var Gt,
  Kt,
  qt = e(() => {
    (f(),
      be(),
      Y(),
      R(),
      I(),
      (Gt = t({
        type: a(`windows.review.scroll_to_file`),
        windowId: P,
        path: d(),
        align: m([`top`, `center`, `bottom`]).optional(),
      })),
      (Kt = L({
        schema: Gt,
        run: ({ path: e, align: t }, n) => {
          let r = M(e);
          (ne(J(n), r.dataset.reviewPath ?? e),
            r.scrollIntoView({ block: Wt(t ?? `top`), behavior: `auto` }));
        },
      })));
  }),
  Jt,
  Yt,
  Xt = e(() => {
    (f(),
      S(),
      Y(),
      R(),
      I(),
      (Jt = t({
        type: a(`windows.review.set_fullscreen`),
        windowId: P,
        fullscreen: u(),
      })),
      (Yt = L({
        schema: Jt,
        run: ({ fullscreen: e }, t) => {
          J(t).set(x, e);
        },
      })));
  }),
  Zt,
  Qt,
  $t = e(() => {
    (f(),
      g(),
      Y(),
      R(),
      I(),
      (Zt = t({
        type: a(`windows.review.set_view`),
        windowId: P,
        view: m([`turn`, `branch`, `unstaged`, `staged`]),
      })),
      (Qt = L({
        schema: Zt,
        run: ({ view: e }, t) => {
          J(t).set(_, e === `turn` ? `last-turn` : e);
        },
      })));
  }),
  en,
  tn,
  nn = e(() => {
    (f(),
      s(),
      R(),
      I(),
      (en = t({ type: a(`windows.review.toggle`), windowId: P })),
      (tn = L({
        schema: en,
        run: () => {
          h.dispatchHostMessage({ type: `toggle-diff-panel` });
        },
      })));
  }),
  rn,
  an,
  on = e(() => {
    (f(),
      s(),
      R(),
      I(),
      (rn = t({ type: a(`windows.show_home`), windowId: P })),
      (an = L({
        schema: rn,
        run: () => {
          h.dispatchHostMessage({ type: `new-chat` });
        },
      })));
  });
function sn(e) {
  let t = Me(e);
  return t == null ? n(ee(e)) : je(t.key);
}
var cn,
  ln,
  un = e(() => {
    (r(),
      f(),
      s(),
      ke(),
      R(),
      I(),
      (cn = t({ type: a(`windows.show_thread`), windowId: P, threadId: d() })),
      (ln = L({
        schema: cn,
        run: ({ threadId: e }) => {
          h.dispatchHostMessage({ type: `navigate-to-route`, path: sn(e) });
        },
      })));
  }),
  dn,
  fn,
  pn = e(() => {
    (f(),
      R(),
      I(),
      (dn = t({
        type: a(`windows.sidebar.project_set_collapsed`),
        windowId: P,
        project: j,
        collapsed: u(),
      })),
      (fn = L({
        schema: dn,
        run: ({ project: e, collapsed: t }) => {
          let n = F(e);
          n.dataset.appActionSidebarProjectCollapsed !== String(t) && n.click();
        },
      })));
  }),
  mn,
  hn,
  gn = e(() => {
    (f(),
      R(),
      I(),
      (mn = t({
        type: a(`windows.sidebar.project_set_show_all`),
        windowId: P,
        project: j,
        showAll: u(),
      })),
      (hn = L({
        schema: mn,
        run: ({ project: e, showAll: t }) => {
          let n = F(e);
          if (n.dataset.appActionSidebarProjectCollapsed === `true` && !t)
            return;
          let r = n.dataset.appActionSidebarProjectId;
          if (r == null) throw Error(`Missing sidebar project id`);
          let i = N(Ke(r));
          if (i.dataset.appActionSidebarProjectShowAll === String(t)) return;
          let a = i.querySelector(D.sidebarProjectShowAllToggle);
          if (a == null)
            throw Error(`Missing sidebar project show more toggle: ${r}`);
          a.click();
        },
      })));
  }),
  _n,
  vn,
  yn = e(() => {
    (f(),
      R(),
      I(),
      (_n = t({ type: a(`windows.sidebar.scroll`), windowId: P, scroll: k })),
      (vn = L({
        schema: _n,
        run: ({ scroll: e }) => {
          A(N(D.sidebarScroll), e);
        },
      })));
  }),
  bn,
  xn,
  Sn = e(() => {
    (f(),
      R(),
      I(),
      (bn = t({
        type: a(`windows.sidebar.section_set_collapsed`),
        windowId: P,
        section: Fe,
        collapsed: u(),
      })),
      (xn = L({
        schema: bn,
        run: ({ section: e, collapsed: t }) => {
          let n = Ve(e);
          if (n.dataset.appActionSidebarSectionCollapsed === String(t)) return;
          let r = n.querySelector(D.sidebarSectionToggle);
          if (r == null)
            throw Error(`Sidebar section does not have a collapse toggle`);
          r.click();
        },
      })));
  }),
  Cn,
  wn,
  Tn = e(() => {
    (f(),
      R(),
      I(),
      (Cn = t({
        type: a(`windows.sidebar.select_project`),
        windowId: P,
        project: j,
      })),
      (wn = L({
        schema: Cn,
        run: ({ project: e }) => {
          let t = F(e).querySelector(D.sidebarProjectSelect);
          if (t == null) throw Error(`Missing sidebar project select action`);
          t.click();
        },
      })));
  }),
  En,
  Dn,
  On = e(() => {
    (f(),
      s(),
      R(),
      I(),
      (En = t({ type: a(`windows.sidebar.toggle`), windowId: P })),
      (Dn = L({
        schema: En,
        run: () => {
          h.dispatchHostMessage({ type: `toggle-sidebar` });
        },
      })));
  }),
  kn,
  An,
  jn = e(() => {
    (f(),
      y(),
      Y(),
      R(),
      I(),
      (kn = t({ type: a(`windows.terminal.toggle`), windowId: P })),
      (An = L({
        schema: kn,
        run: (e, t) => {
          Ce(J(t));
        },
      })));
  }),
  Mn,
  Nn,
  Pn = e(() => {
    (f(),
      R(),
      I(),
      (Mn = t({ type: a(`windows.timeline.scroll`), windowId: P, scroll: k })),
      (Nn = L({
        schema: Mn,
        run: ({ scroll: e }) => {
          Ne(N(D.timelineScroll), e);
        },
      })));
  }),
  Fn,
  In,
  Ln = e(() => {
    (f(),
      R(),
      I(),
      (Fn = t({
        type: a(`windows.timeline.scroll_to_turn`),
        windowId: P,
        direction: Pe,
      })),
      (In = L({
        schema: Fn,
        run: ({ direction: e }) => {
          Ge(N(D.timelineScroll), e);
        },
      })));
  });
function Rn() {
  return Q;
}
var zn, Q, $;
e(() => {
  (R(),
    Xe(),
    Ze(),
    Qe(),
    st(),
    bt(),
    Tt(),
    Ot(),
    jt(),
    Pt(),
    Lt(),
    Bt(),
    Ut(),
    qt(),
    Xt(),
    $t(),
    nn(),
    on(),
    un(),
    pn(),
    gn(),
    yn(),
    Sn(),
    Tn(),
    On(),
    Ye(),
    jn(),
    Pn(),
    Ln(),
    (zn = [
      yt,
      B,
      H,
      K,
      ot,
      Dt,
      At,
      Nt,
      It,
      zt,
      Ht,
      Kt,
      Yt,
      Qt,
      tn,
      an,
      ln,
      fn,
      hn,
      vn,
      xn,
      wn,
      Dn,
      An,
      Je,
      Nn,
      In,
    ]),
    (Q = [xt(Rn), ...zn]),
    ($ = qe(Q)));
})();
export { $ as appActionRegistry };
//# sourceMappingURL=register-app-actions-CrtQ5J4S.js.map
