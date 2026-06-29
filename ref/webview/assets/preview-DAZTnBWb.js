const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./3Dmol-BR8fUS3S.js", "./rolldown-runtime-Czos8NxU.js"]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  ar as r,
  c as i,
  gc as a,
  ir as o,
  l as s,
  lc as c,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ii as l,
  Li as u,
  Ri as d,
  aa as f,
  sa as p,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Em as m,
  Op as h,
  Tm as g,
  eo as _,
  fh as v,
  hh as y,
  kp as b,
  mh as x,
  no as ee,
  oo as S,
  ph as C,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as w,
  Vy as te,
  zy as T,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function E(e) {
  return O[e.toUpperCase()] ?? `X`;
}
function D(e) {
  return O[e.toUpperCase()] != null;
}
var O,
  k = e(() => {
    O = {
      A: `A`,
      ALA: `A`,
      ARG: `R`,
      ASN: `N`,
      ASP: `D`,
      ASX: `B`,
      C: `C`,
      CYS: `C`,
      CYM: `C`,
      CYX: `C`,
      DA: `A`,
      DC: `C`,
      DG: `G`,
      DT: `T`,
      DU: `U`,
      G: `G`,
      GLN: `Q`,
      GLU: `E`,
      GLX: `Z`,
      GLY: `G`,
      HIS: `H`,
      HSD: `H`,
      HSE: `H`,
      HSP: `H`,
      ILE: `I`,
      LEU: `L`,
      LYS: `K`,
      M: `M`,
      MET: `M`,
      MSE: `M`,
      PHE: `F`,
      PRO: `P`,
      PYL: `O`,
      SEC: `U`,
      SEP: `S`,
      SER: `S`,
      T: `T`,
      THR: `T`,
      TPO: `T`,
      TRP: `W`,
      TYR: `Y`,
      U: `U`,
      VAL: `V`,
    };
  });
function A(e) {
  return {
    models: j(e)
      .map((e) => {
        let t = M(e.contents),
          n = I(t),
          r = [...new Set(t.map((e) => e.chainId))].sort(),
          i = P(t);
        return {
          atoms: t,
          chains: r,
          contents: e.contents,
          modelNumber: e.modelNumber,
          residueChains: i,
          stats: L(t, n),
          title: e.title,
          trace: n,
        };
      })
      .filter((e) => e.atoms.length > 0),
  };
}
function j(e) {
  let t = e.split(/\r?\n/);
  if (!t.some((e) => e.slice(0, 6).trim() === `MODEL`))
    return [{ contents: e, modelNumber: 1, title: z(t) }];
  let n = [],
    r = [],
    i = null,
    a = 1,
    o = !1;
  for (let e of t) {
    let t = e.slice(0, 6).trim();
    if (t === `MODEL`) {
      (i != null && r.push(i),
        (o = !0),
        (i = { lines: [e], modelNumber: H(e.slice(10, 14)) ?? a, title: null }),
        (a += 1));
      continue;
    }
    if (i == null) {
      o || n.push(e);
      continue;
    }
    (i.lines.push(e),
      i.title == null && t === `REMARK` && (i.title = B(e)),
      t === `ENDMDL` && (r.push(i), (i = null)));
  }
  i != null && r.push(i);
  let s = z(n);
  return r.map((e) => ({
    contents: [...n, ...e.lines].join(`
`),
    modelNumber: e.modelNumber,
    title: e.title ?? s,
  }));
}
function M(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.slice(0, 6).trim();
    if (e !== `ATOM` && e !== `HETATM`) continue;
    let r = N(n);
    r != null && t.push(r);
  }
  return t;
}
function N(e) {
  let t = V(e.slice(30, 38)),
    n = V(e.slice(38, 46)),
    r = V(e.slice(46, 54));
  if (t == null || n == null || r == null) return null;
  let i = e.slice(12, 16).trim(),
    a = e.slice(0, 6).trim();
  return {
    atomName: i,
    bFactor: V(e.slice(60, 66)),
    chainId: e.slice(21, 22).trim() || ` `,
    element: e.slice(76, 78).trim() || R(i),
    insertionCode: e.slice(26, 27).trim() || ` `,
    isHetAtom: a === `HETATM`,
    residueName: e.slice(17, 20).trim(),
    residueNumber: H(e.slice(22, 26)) ?? 0,
    serial: H(e.slice(6, 11)),
    x: t,
    y: n,
    z: r,
  };
}
function P(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e) {
    if (r.isHetAtom && !D(r.residueName)) continue;
    let e = F(r),
      i = n.get(e);
    if (i != null) {
      r.serial != null && i.atomSerials.push(r.serial);
      continue;
    }
    let a = t.get(r.chainId) ?? [],
      o = {
        atomSerials: r.serial == null ? [] : [r.serial],
        chainId: r.chainId,
        insertionCode: r.insertionCode,
        residueName: r.residueName,
        residueNumber: r.residueNumber,
        sequenceCode: E(r.residueName),
      };
    (a.push(o), n.set(e, o), t.set(r.chainId, a));
  }
  return [...t.entries()]
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, t]) => ({
      chainId: e,
      residues: t,
      sequence: t.map((e) => e.sequenceCode).join(``),
    }));
}
function F(e) {
  return [e.chainId, e.residueNumber, e.insertionCode, e.residueName].join(`:`);
}
function I(e) {
  let t = e.filter((e) => e.atomName === `CA`);
  return t.length > 0 ? t : e;
}
function L(e, t) {
  let n = new Set(
      e.map((e) =>
        [e.chainId, e.residueName, e.residueNumber, e.insertionCode].join(`:`),
      ),
    ),
    r = (t.length > 0 ? t : e).map((e) => e.bFactor).filter((e) => e != null);
  return {
    atomCount: e.length,
    chainCount: new Set(e.map((e) => e.chainId)).size,
    maxScore: r.length > 0 ? Math.max(...r) : null,
    meanScore: r.length > 0 ? r.reduce((e, t) => e + t, 0) / r.length : null,
    minScore: r.length > 0 ? Math.min(...r) : null,
    residueCount: n.size,
  };
}
function R(e) {
  return (
    e
      .match(/[A-Za-z]+/)?.[0]
      ?.slice(0, 2)
      .toUpperCase() ?? null
  );
}
function z(e) {
  for (let t of e) if (t.slice(0, 6).trim() === `REMARK`) return B(t);
  return null;
}
function B(e) {
  let t = e.slice(6).trim();
  return t.length > 0 ? t : null;
}
function V(e) {
  let t = Number.parseFloat(e.trim());
  return Number.isFinite(t) ? t : null;
}
function H(e) {
  let t = Number.parseInt(e.trim(), 10);
  return Number.isFinite(t) ? t : null;
}
var U = e(() => {
  k();
});
function W(e) {
  let t = (0, X.c)(17),
    { className: n, fallback: r, hostId: i, path: a, showFileName: o } = e,
    c = o === void 0 ? !1 : o,
    u = a != null && a.length > 0,
    d = a ?? ``,
    f;
  t[0] !== i || t[1] !== d
    ? ((f = { path: d, hostId: i }), (t[0] = i), (t[1] = d), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] === u ? (p = t[4]) : ((p = { enabled: u }), (t[3] = u), (t[4] = p));
  let m;
  t[5] !== f || t[6] !== p
    ? ((m = { params: f, queryConfig: p }), (t[5] = f), (t[6] = p), (t[7] = m))
    : (m = t[7]);
  let { data: h, isError: g, isLoading: _ } = s(`read-file`, m);
  if (!u) return r;
  if (_) {
    let e;
    t[8] === n
      ? (e = t[9])
      : ((e = x(
          `flex h-full items-center justify-center bg-token-main-surface-primary`,
          n,
        )),
        (t[8] = n),
        (t[9] = e));
    let r;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(l, { className: `text-sm` })), (t[10] = r))
      : (r = t[10]);
    let i;
    return (
      t[11] === e
        ? (i = t[12])
        : ((i = (0, Q.jsx)(`div`, { className: e, children: r })),
          (t[11] = e),
          (t[12] = i)),
      i
    );
  }
  if (g || h == null) return r;
  let v = c ? (a ?? void 0) : void 0,
    y;
  return (
    t[13] !== n || t[14] !== h.contents || t[15] !== v
      ? ((y = (0, Q.jsx)(G, {
          className: n,
          contents: h.contents,
          filePath: v,
        })),
        (t[13] = n),
        (t[14] = h.contents),
        (t[15] = v),
        (t[16] = y))
      : (y = t[16]),
    y
  );
}
function G({ className: e, contents: n, filePath: r }) {
  let i = te(),
    a = (0, Z.useMemo)(() => A(n), [n]),
    [s, c] = (0, Z.useState)(0),
    [d, f] = (0, Z.useState)(null),
    [m, y] = (0, Z.useState)(`idle`),
    [b, x] = (0, Z.useState)(0),
    [S, C] = (0, Z.useState)(null),
    [w, E] = (0, Z.useState)(null),
    [D, O] = (0, Z.useState)(null),
    [k, j] = (0, Z.useState)(null),
    M = (0, Z.useRef)(null),
    N = (0, Z.useRef)(null),
    P = a.models,
    F = P[s] ?? null,
    I = F?.contents ?? null,
    L = F?.residueChains ?? ge,
    R = L.find((e) => e.chainId === S) ?? L[0] ?? null,
    z = w?.modelIndex === s ? w : null,
    B = (0, Z.useMemo)(() => ae(R, z), [R, z]),
    V = (0, Z.useMemo)(() => oe(B), [B]),
    H = (0, Z.useMemo)(() => ae(R, k?.modelIndex === s ? k : null), [s, R, k]),
    U = (0, Z.useMemo)(() => oe(H), [H]);
  function W(e) {
    ((N.current = e), E(e));
  }
  (0, Z.useEffect)(() => {
    s >= P.length && c(0);
  }, [s, P.length]);
  let G = p(() => {
      let e = M.current;
      e != null && (e.resize(), e.render());
    }),
    se = (0, Z.useCallback)(
      (e) => {
        (f(e), G(e));
      },
      [G],
    );
  function ue(e) {
    (C(e), W(null), O(null), j(null));
  }
  function J(e) {
    R != null &&
      (O(e),
      W({ chainId: R.chainId, endIndex: e, modelIndex: s, startIndex: e }));
  }
  function Y(e) {
    D == null ||
      R == null ||
      W({
        chainId: R.chainId,
        endIndex: Math.max(D, e),
        modelIndex: s,
        startIndex: Math.min(D, e),
      });
  }
  function de() {
    let e = N.current;
    (O(null), e != null && e.modelIndex === s && j(e));
  }
  function X(e) {
    if (R == null) return;
    let t = { chainId: R.chainId, endIndex: e, modelIndex: s, startIndex: e };
    (O(null), W(t), j(t));
  }
  function $() {
    (W(null), O(null), j(null), x((e) => e + 1));
  }
  return (
    (0, Z.useEffect)(() => {
      if (d == null || I == null) return;
      let e = !0;
      return (
        y(`loading`),
        q(d, M.current),
        (M.current = null),
        (async () => {
          try {
            let n = ce(
              await o(
                () =>
                  import(`./3Dmol-BR8fUS3S.js`).then((e) => t(e.default, 1)),
                __vite__mapDeps([0, 1]),
                import.meta.url,
              ),
            );
            if (!e) return;
            let r = n(d, { backgroundColor: `white`, disableFog: !0 });
            ((M.current = r),
              r.addModel(I, `pdb`),
              ie(r, null),
              r.zoomTo(),
              r.setBackgroundColor(`white`),
              r.resize(),
              r.render(),
              y(`idle`));
          } catch {
            e && (q(d, M.current), (M.current = null), y(`error`));
          }
        })(),
        () => {
          ((e = !1), q(d, M.current), (M.current = null));
        }
      );
    }, [I, b, d]),
    (0, Z.useEffect)(() => {
      let e = M.current;
      e == null || m !== `idle` || (ie(e, V), e.render());
    }, [V, m]),
    (0, Z.useEffect)(() => {
      let e = M.current;
      e == null ||
        m !== `idle` ||
        k == null ||
        U == null ||
        (e.zoomTo(U, 350, !0), e.render());
    }, [U, k, m]),
    P.length === 0 || F == null
      ? (0, Q.jsx)(ne, {
          className: e,
          filePath: r,
          children: (0, Q.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, Q.jsx)(u, {
              children: (0, Q.jsx)(T, {
                id: `codex.filePreview.pdb.empty`,
                defaultMessage: `No PDB atoms found`,
                description: `Placeholder text when a PDB file cannot be parsed into atom records.`,
              }),
            }),
          }),
        })
      : (0, Q.jsxs)(ne, {
          className: e,
          filePath: r,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-2 border-b border-token-border px-3 py-2`,
              children: [
                P.length > 1
                  ? (0, Q.jsx)(_, {
                      align: `end`,
                      contentWidth: `xs`,
                      triggerButton: (0, Q.jsxs)(g, {
                        "aria-label": i.formatMessage({
                          id: `codex.filePreview.pdb.modelSelectLabel`,
                          defaultMessage: `Select PDB model`,
                          description: `Accessible label for selecting a model inside a multi-model PDB file.`,
                        }),
                        color: `ghost`,
                        size: `toolbar`,
                        className: `!h-6 shrink-0 gap-1 rounded-md px-1.5 text-sm text-token-text-tertiary hover:text-token-text-primary`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `text-token-text-primary tabular-nums`,
                            children: i.formatMessage(
                              {
                                id: `codex.filePreview.pdb.modelOption`,
                                defaultMessage: `Model {modelNumber}`,
                                description: `Dropdown option label for selecting a model inside a multi-model PDB file.`,
                              },
                              { modelNumber: F.modelNumber },
                            ),
                          }),
                          (0, Q.jsx)(v, { className: `icon-2xs opacity-65` }),
                        ],
                      }),
                      children: P.map((e, t) =>
                        (0, Q.jsx)(
                          ee.Item,
                          {
                            RightIcon: t === s ? h : void 0,
                            onSelect: () => c(t),
                            className: `text-token-text-primary`,
                            children: i.formatMessage(
                              {
                                id: `codex.filePreview.pdb.modelOption`,
                                defaultMessage: `Model {modelNumber}`,
                                description: `Dropdown option label for selecting a model inside a multi-model PDB file.`,
                              },
                              { modelNumber: e.modelNumber },
                            ),
                          },
                          `${e.modelNumber}-${t}`,
                        ),
                      ),
                    })
                  : null,
                (0, Q.jsx)(g, {
                  color: `outline`,
                  size: `toolbar`,
                  className: `!h-6 shrink-0 rounded-md !border-token-border-default bg-token-main-surface-primary text-sm text-token-text-primary hover:text-token-text-primary`,
                  onClick: $,
                  children: (0, Q.jsx)(T, {
                    id: `codex.filePreview.pdb.resetView`,
                    defaultMessage: `Reset view`,
                    description: `Button label for resetting PDB viewer rotation and zoom.`,
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `ml-auto flex flex-wrap gap-x-4 gap-y-1 text-xs text-token-text-secondary`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      children: (0, Q.jsx)(T, {
                        id: `codex.filePreview.pdb.residueCount`,
                        defaultMessage: `{count, number} residues`,
                        description: `Summary count of residues parsed from a PDB file.`,
                        values: { count: F.stats.residueCount },
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      children: (0, Q.jsx)(T, {
                        id: `codex.filePreview.pdb.atomCount`,
                        defaultMessage: `{count, number} atoms`,
                        description: `Summary count of atoms parsed from a PDB file.`,
                        values: { count: F.stats.atomCount },
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      children: (0, Q.jsx)(T, {
                        id: `codex.filePreview.pdb.scoreSummary`,
                        defaultMessage: `B-factor/pLDDT {mean}`,
                        description: `Summary of the mean B-factor or AlphaFold pLDDT score in a PDB file.`,
                        values: { mean: le(F.stats.meanScore) },
                      }),
                    }),
                  ],
                }),
              ],
            }),
            R == null
              ? null
              : (0, Q.jsx)(re, {
                  chains: L,
                  selectedChain: R,
                  selectedRange: z,
                  selectedResidues: B,
                  onChainChange: ue,
                  onResidueSelectionCommit: de,
                  onResidueSelectionMove: Y,
                  onResidueSelectionSelect: X,
                  onResidueSelectionStart: J,
                }),
            (0, Q.jsxs)(`div`, {
              className: `relative min-h-0 flex-1 bg-white`,
              children: [
                (0, Q.jsx)(`div`, {
                  ref: se,
                  className: `h-full w-full overflow-hidden`,
                  "aria-label": i.formatMessage({
                    id: `codex.filePreview.pdb.viewerLabel`,
                    defaultMessage: `Interactive PDB structure viewer`,
                    description: `Accessible label for the PDB structure viewer.`,
                  }),
                }),
                m === `loading`
                  ? (0, Q.jsx)(`div`, {
                      className: `pointer-events-none absolute inset-0 flex items-center justify-center bg-white/70`,
                      children: (0, Q.jsx)(l, { className: `text-sm` }),
                    })
                  : null,
                m === `error`
                  ? (0, Q.jsx)(`div`, {
                      className: `absolute inset-0 flex items-center justify-center bg-token-main-surface-primary`,
                      children: (0, Q.jsx)(u, {
                        children: (0, Q.jsx)(T, {
                          id: `codex.filePreview.pdb.viewerLoadError`,
                          defaultMessage: `Unable to load the 3Dmol PDB viewer`,
                          description: `Error text when the 3Dmol PDB viewer cannot be loaded.`,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex flex-wrap gap-3 border-t border-token-border px-3 py-2 text-xs text-token-text-secondary`,
              children: [
                (0, Q.jsx)(K, {
                  className: `bg-[#0053d6]`,
                  children: (0, Q.jsx)(T, {
                    id: `codex.filePreview.pdb.legendVeryHigh`,
                    defaultMessage: `90+`,
                    description: `PDB confidence legend label for very high scores.`,
                  }),
                }),
                (0, Q.jsx)(K, {
                  className: `bg-[#65cbf3]`,
                  children: (0, Q.jsx)(T, {
                    id: `codex.filePreview.pdb.legendConfident`,
                    defaultMessage: `70-90`,
                    description: `PDB confidence legend label for confident scores.`,
                  }),
                }),
                (0, Q.jsx)(K, {
                  className: `bg-[#ffdb13]`,
                  children: (0, Q.jsx)(T, {
                    id: `codex.filePreview.pdb.legendLow`,
                    defaultMessage: `50-70`,
                    description: `PDB confidence legend label for low scores.`,
                  }),
                }),
                (0, Q.jsx)(K, {
                  className: `bg-[#ff7d45]`,
                  children: (0, Q.jsx)(T, {
                    id: `codex.filePreview.pdb.legendVeryLow`,
                    defaultMessage: `<50`,
                    description: `PDB confidence legend label for very low scores.`,
                  }),
                }),
                (0, Q.jsx)(`span`, {
                  className: `ml-auto`,
                  children: (0, Q.jsx)(T, {
                    id: `codex.filePreview.pdb.interactionHint`,
                    defaultMessage: `Drag to rotate. Scroll to zoom.`,
                    description: `Interaction hint for the PDB structure viewer.`,
                  }),
                }),
              ],
            }),
          ],
        })
  );
}
function ne(e) {
  let t = (0, X.c)(8),
    { children: n, className: r, filePath: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = x(`flex h-full min-h-0 flex-col bg-token-main-surface-primary`, r)),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `border-b border-token-border px-3 py-2 text-sm font-medium text-token-text-primary`,
              children: de(i),
            })),
      (t[2] = i),
      (t[3] = o));
  let s;
  return (
    t[4] !== n || t[5] !== a || t[6] !== o
      ? ((s = (0, Q.jsxs)(`div`, { className: a, children: [o, n] })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function re(e) {
  let t = (0, X.c)(40),
    {
      chains: n,
      onChainChange: r,
      onResidueSelectionCommit: i,
      onResidueSelectionMove: a,
      onResidueSelectionSelect: o,
      onResidueSelectionStart: s,
      selectedChain: c,
      selectedRange: l,
      selectedResidues: u,
    } = e,
    d = te(),
    f = (0, Z.useRef)(null),
    p = (0, Z.useRef)(null),
    m = l?.chainId === c.chainId ? l : null,
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = function (e) {
        if (!(e instanceof Element)) return null;
        let t = f.current,
          n = e.closest(`[data-pdb-residue-index]`);
        if (t == null || !(n instanceof HTMLElement) || !t.contains(n))
          return null;
        let r = Number(n.dataset.pdbResidueIndex);
        return Number.isInteger(r) ? r : null;
      }),
      (t[0] = y))
    : (y = t[0]);
  let b = y,
    S;
  t[1] === i
    ? (S = t[2])
    : ((S = function (e) {
        p.current === e.pointerId &&
          ((p.current = null),
          e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId),
          i());
      }),
      (t[1] = i),
      (t[2] = S));
  let C = S,
    w;
  t[3] !== n || t[4] !== d || t[5] !== r || t[6] !== c.chainId
    ? ((w =
        n.length > 1
          ? (0, Q.jsx)(_, {
              align: `start`,
              contentWidth: `xs`,
              triggerButton: (0, Q.jsxs)(g, {
                "aria-label": d.formatMessage({
                  id: `codex.filePreview.pdb.chainSelectLabel`,
                  defaultMessage: `Select PDB chain`,
                  description: `Accessible label for selecting a chain in a PDB sequence preview.`,
                }),
                color: `ghost`,
                size: `toolbar`,
                className: `!h-6 shrink-0 gap-1 rounded-md px-1.5 text-xs text-token-text-tertiary hover:text-token-text-primary`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `text-token-text-primary`,
                    children: (0, Q.jsx)(T, {
                      id: `codex.filePreview.pdb.chainLabel`,
                      defaultMessage: `Chain {chainId}`,
                      description: `Label for the active chain in a PDB sequence preview.`,
                      values: { chainId: Y(c.chainId) },
                    }),
                  }),
                  (0, Q.jsx)(v, { className: `icon-2xs opacity-65` }),
                ],
              }),
              children: n.map((e) =>
                (0, Q.jsx)(
                  ee.Item,
                  {
                    RightIcon: e.chainId === c.chainId ? h : void 0,
                    onSelect: () => r(e.chainId),
                    className: `text-token-text-primary`,
                    children: (0, Q.jsx)(T, {
                      id: `codex.filePreview.pdb.chainOption`,
                      defaultMessage: `Chain {chainId} ({count, number} residues)`,
                      description: `Dropdown option for a PDB chain sequence.`,
                      values: {
                        chainId: Y(e.chainId),
                        count: e.residues.length,
                      },
                    }),
                  },
                  e.chainId,
                ),
              ),
            })
          : (0, Q.jsx)(`span`, {
              className: `font-medium text-token-text-primary`,
              children: (0, Q.jsx)(T, {
                id: `codex.filePreview.pdb.chainLabel`,
                defaultMessage: `Chain {chainId}`,
                description: `Label for the active chain in a PDB sequence preview.`,
                values: { chainId: Y(c.chainId) },
              }),
            })),
      (t[3] = n),
      (t[4] = d),
      (t[5] = r),
      (t[6] = c.chainId),
      (t[7] = w))
    : (w = t[7]);
  let E;
  t[8] === c.residues.length
    ? (E = t[9])
    : ((E = (0, Q.jsx)(`span`, {
        className: `tabular-nums`,
        children: (0, Q.jsx)(T, {
          id: `codex.filePreview.pdb.sequenceResidueCount`,
          defaultMessage: `{count, number} coordinate residues`,
          description: `Coordinate residue count for the current PDB sequence chain.`,
          values: { count: c.residues.length },
        }),
      })),
      (t[8] = c.residues.length),
      (t[9] = E));
  let D;
  t[10] === u
    ? (D = t[11])
    : ((D =
        u.length > 0
          ? (0, Q.jsx)(`span`, {
              className: `ml-auto font-medium text-token-text-primary`,
              children: (0, Q.jsx)(T, {
                id: `codex.filePreview.pdb.selectedResidues`,
                defaultMessage: `Selected {range}`,
                description: `Summary of the selected PDB residue range.`,
                values: { range: ue(u) },
              }),
            })
          : null),
      (t[10] = u),
      (t[11] = D));
  let O;
  t[12] !== w || t[13] !== E || t[14] !== D
    ? ((O = (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2 px-3 py-1.5 text-xs text-token-text-secondary`,
        children: [w, E, D],
      })),
      (t[12] = w),
      (t[13] = E),
      (t[14] = D),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] === d
    ? (k = t[17])
    : ((k = d.formatMessage({
        id: `codex.filePreview.pdb.sequenceLabel`,
        defaultMessage: `PDB chain sequence`,
        description: `Accessible label for the PDB chain sequence row.`,
      })),
      (t[16] = d),
      (t[17] = k));
  let A;
  t[18] === s
    ? (A = t[19])
    : ((A = (e) => {
        let t = b(e.target);
        t != null &&
          (e.preventDefault(),
          (p.current = e.pointerId),
          e.currentTarget.setPointerCapture(e.pointerId),
          s(t));
      }),
      (t[18] = s),
      (t[19] = A));
  let j;
  t[20] === a
    ? (j = t[21])
    : ((j = (e) => {
        if (p.current !== e.pointerId) return;
        let t = b(document.elementFromPoint(e.clientX, e.clientY));
        t != null && a(t);
      }),
      (t[20] = a),
      (t[21] = j));
  let M;
  if (t[22] !== d || t[23] !== o || t[24] !== c.residues || t[25] !== m) {
    let e;
    (t[27] !== d || t[28] !== o || t[29] !== m
      ? ((e = (e, t) => {
          let n = m != null && t >= m.startIndex && t <= m.endIndex,
            r = n && t === m?.startIndex,
            i = n && t === m?.endIndex;
          return (0, Q.jsx)(
            `button`,
            {
              "data-pdb-residue-index": t,
              type: `button`,
              "aria-label": d.formatMessage(
                {
                  id: `codex.filePreview.pdb.residueLabel`,
                  defaultMessage: `{residueName} {residueNumber} in chain {chainId}`,
                  description: `Accessible label for a residue in the PDB sequence strip.`,
                },
                {
                  chainId: Y(e.chainId),
                  residueName: e.residueName,
                  residueNumber: J(e),
                },
              ),
              "aria-pressed": n,
              className: x(
                `cursor-interaction inline-flex h-5 min-w-[1.35ch] select-none items-center justify-center rounded-none px-0 text-token-text-secondary`,
                `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-token-text-primary`,
                !n &&
                  `hover:rounded-sm hover:bg-token-main-surface-secondary hover:text-token-text-primary`,
                n && `bg-orange-100 text-orange-800`,
                r && `rounded-l-sm`,
                i && `rounded-r-sm`,
                r && i && `rounded-sm ring-1 ring-orange-300`,
              ),
              onKeyDown: (e) => {
                (e.key !== `Enter` && e.key !== ` `) ||
                  (e.preventDefault(), o(t));
              },
              title: d.formatMessage(
                {
                  id: `codex.filePreview.pdb.residueTitle`,
                  defaultMessage: `{residueName} {residueNumber}`,
                  description: `Tooltip title for a residue in the PDB sequence strip.`,
                },
                { residueName: e.residueName, residueNumber: J(e) },
              ),
              children: e.sequenceCode,
            },
            `${e.chainId}:${e.residueNumber}:${e.insertionCode}:${e.residueName}:${t}`,
          );
        }),
        (t[27] = d),
        (t[28] = o),
        (t[29] = m),
        (t[30] = e))
      : (e = t[30]),
      (M = c.residues.map(e)),
      (t[22] = d),
      (t[23] = o),
      (t[24] = c.residues),
      (t[25] = m),
      (t[26] = M));
  } else M = t[26];
  let N;
  t[31] !== C || t[32] !== M || t[33] !== k || t[34] !== A || t[35] !== j
    ? ((N = (0, Q.jsx)(`div`, {
        ref: f,
        "aria-label": k,
        className: `max-h-24 overflow-auto border-t border-token-border px-3 py-2 font-mono text-[11px] leading-5`,
        onPointerCancel: C,
        onPointerDown: A,
        onPointerMove: j,
        onPointerUp: C,
        children: M,
      })),
      (t[31] = C),
      (t[32] = M),
      (t[33] = k),
      (t[34] = A),
      (t[35] = j),
      (t[36] = N))
    : (N = t[36]);
  let P;
  return (
    t[37] !== N || t[38] !== O
      ? ((P = (0, Q.jsxs)(`div`, {
          className: `border-b border-token-border bg-token-main-surface-primary`,
          children: [O, N],
        })),
        (t[37] = N),
        (t[38] = O),
        (t[39] = P))
      : (P = t[39]),
    P
  );
}
function K(e) {
  let t = (0, X.c)(7),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = x(`h-2.5 w-2.5 rounded-sm`, r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] === i
    ? (a = t[3])
    : ((a = (0, Q.jsx)(`span`, { className: i })), (t[2] = i), (t[3] = a));
  let o;
  return (
    t[4] !== n || t[5] !== a
      ? ((o = (0, Q.jsxs)(`span`, {
          className: `inline-flex items-center gap-1`,
          children: [a, n],
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function ie(e, t) {
  if (t == null) {
    (e.setStyle({}, $), e.addStyle({ hetflag: !1 }, fe));
    return;
  }
  let n = { not: t };
  (e.setStyle(n, pe),
    e.addStyle({ and: [n, { hetflag: !1 }] }, me),
    e.setStyle(t, he));
}
function ae(e, t) {
  if (e == null || t == null || t.chainId !== e.chainId) return [];
  let n = Math.max(0, Math.min(t.startIndex, e.residues.length - 1)),
    r = Math.max(n, Math.min(t.endIndex, e.residues.length - 1));
  return e.residues.slice(n, r + 1);
}
function oe(e) {
  if (e.length === 0) return null;
  let t = [...new Set(e.flatMap((e) => e.atomSerials))];
  return t.length > 0 ? { serial: t } : { or: e.map(se) };
}
function se(e) {
  return {
    chain: e.chainId,
    icode: e.insertionCode,
    resi: e.residueNumber,
    resn: e.residueName,
  };
}
function ce(e) {
  let t = e,
    n =
      typeof t.createViewer == `function`
        ? t.createViewer
        : typeof t.default?.createViewer == `function`
          ? t.default.createViewer
          : null;
  if (n == null) throw Error(`3Dmol createViewer export was not found`);
  return n;
}
function q(e, t) {
  (t != null && (t.removeAllModels(), t.clear()), e.replaceChildren());
}
function le(e) {
  return e == null ? `n/a` : e.toFixed(1);
}
function ue(e) {
  let t = e[0],
    n = e.at(-1);
  if (t == null || n == null) return ``;
  let r = Y(t.chainId),
    i = J(t),
    a = J(n);
  return i === a ? `${r}:${i}` : `${r}:${i}-${a}`;
}
function J(e) {
  let t = e.insertionCode.trim();
  return t.length > 0 ? `${e.residueNumber}${t}` : String(e.residueNumber);
}
function Y(e) {
  return e.trim().length > 0 ? e : `(blank)`;
}
function de(e) {
  return e.split(/[/\\]+/).at(-1) ?? e;
}
var X, Z, Q, $, fe, pe, me, he, ge;
e(() => {
  ((X = a()),
    y(),
    (Z = t(n(), 1)),
    w(),
    m(),
    S(),
    d(),
    b(),
    C(),
    f(),
    i(),
    U(),
    (Q = c()),
    r(),
    ($ = {
      cartoon: {
        colorscheme: { gradient: `roygb`, max: 100, min: 50, prop: `b` },
      },
    }),
    (fe = { stick: { radius: 0.12 } }),
    (pe = {
      cartoon: {
        colorscheme: { gradient: `roygb`, max: 100, min: 50, prop: `b` },
        opacity: 0.34,
      },
    }),
    (me = { stick: { hidden: !0 } }),
    (he = {
      cartoon: { color: `#f97316` },
      stick: { color: `#f97316`, radius: 0.12 },
    }),
    (ge = []));
})();
export { W as PdbPreviewFromFile };
//# sourceMappingURL=preview-DAZTnBWb.js.map
