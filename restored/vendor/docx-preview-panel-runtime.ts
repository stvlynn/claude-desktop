// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// Flat boundary. Vendored runtime chunk preserved from the Codex webview bundle.
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview"]),
) => i.map((i) => d[i]);
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  D as n,
  E as r,
  Go as i,
  Ji as a,
  Ko as o,
  O as s,
  Vo as c,
  _ as l,
  _c as u,
  ar as d,
  gc as f,
  ir as p,
  lc as m,
  qi as h,
  v as ee,
} from "./current-app-initial-bnlvjk3w-shared-bundle";
import {
  aa as g,
  ac as _,
  bs as v,
  ic as y,
  oc as b,
  sa as useResizeObserverRef,
  ws as te,
} from "./worktree-new-thread-orchestrator-current-bundle";
import {
  $t as S,
  Np as ne,
  Xt as C,
  Yt as w,
  Zt as re,
  an as computeWheelZoomPercent,
  gh as ae,
  hh as oe,
  in as computePinchZoomPercent,
  jp as se,
  mh as ce,
  nn as le,
  on as measureTouchDistance,
  rn as normalizeZoomPercent,
  sn as de,
  tn as fe,
} from "./worktree-new-thread-query-current-bundle";
import {
  Hi as D,
  Iy as O,
  Ri as pe,
  Vi as me,
  Vy as he,
  ba as k,
  ya as ge,
} from "./remote-projects-app-shared-current-bundle";
import {
  appMainCurrentCompatSlotDollarLowerU as _e,
  appMainCurrentCompatSlotUpperALowerT as ve,
  appMainCurrentCompatSlotUpperCLowerT as ye,
  appMainCurrentCompatSlotUpperILowerT as M,
  appMainCurrentCompatSlotUpperLLowerT as xe,
  appMainCurrentCompatSlotUpperMLowerT as Se,
  appMainCurrentCompatSlotUpperOLowerT as Ce,
  appMainCurrentCompatSlotUpperQLowerU as we,
  appMainCurrentCompatSlotUpperSLowerT as Te,
  appMainCurrentCompatSlotLowerJLowerT as Ee,
  appMainCurrentCompatSlotLowerNLowerD as De,
  appMainCurrentCompatSlotLowerRLowerD as I,
} from "./app-main-current-runtime";
import {
  composeRefs as Oe,
  initComposeRefsChunk as R,
} from "../utils/compose-refs";
import {
  initArtifactAnalyticsChunk as z,
  trackArtifactAnnotationStarted as Ae,
  trackArtifactAnnotationSubmitted as ke,
} from "../features/artifact-analytics";
import {
  getArtifactAnnotationCommentsForPath as B,
  getNextArtifactAnnotationLine as Me,
  initArtifactAnnotationCommentChunk as je,
} from "../ui/artifact-annotation-comment";
import {
  ArtifactPreviewStatus as V,
  initArtifactPreviewStatusChunk as Ne,
} from "../utils/artifact-preview-status";
import {
  anchorFromDocxComment as et,
  anchorFromPointerDrag as Be,
  computeDocxAskForEditPosition as Pe,
  createDocxPreviewStyleText,
  createDocxAnnotationMetadata as Xe,
  createDocxCommentPayload as Ye,
  describeDocxAnnotationAnchor as Ze,
  docxCommentKey as nt,
  docxCommentPageNumber as Qe,
  docxCommentPageSize as $e,
  docxCommentText as tt,
  DOCX_PREVIEW_SCROLL_CLASS as Kt,
  docxTitleFromPath as It,
  measureDocxPage as Vt,
  pagePointFromPointerEvent as Fe,
  pointerDragMoved as ze,
  readDocxElementAnnotationAnchorAtPoint as dt,
  readDocxTextSelectionAnchor as ut,
  rectFromPoints as Ve,
  DocxAnnotationHighlightRect,
  DocxAnnotationSelectionRect,
  DocxCommentMarkerOverlay,
  DocxCommentPreviewOverlay,
  DocxDraftCommentMarkerOverlay,
  useDocxPageNavigation as zt,
  useDocxPreviewRenderState as X,
  useDocxPreviewZoom as Nt,
} from "../features/documents/docx-preview-panel";
function Tt(e) {
  let t = (0, Ot.c)(244),
    {
      comments: n,
      conversationId: i,
      isCommentMode: a,
      nextCommentNumber: s,
      onCommentsChange: c,
      onTouchCancel: l,
      onTouchEnd: u,
      onTouchMove: d,
      onTouchStart: f,
      onWheel: p,
      pageCount: m,
      pageNumber: g,
      pageSize: _,
      path: v,
      tabId: y,
      threadId: b,
      title: x,
      zoomScale: te,
    } = e,
    S = te === void 0 ? 1 : te,
    ne = o(r),
    C = he(),
    [w, re] = (0, J.useState)(null),
    ie = (0, J.useRef)(null),
    ae = (0, J.useRef)(null),
    oe = (0, J.useRef)(!1),
    [T, se] = (0, J.useState)(null),
    [le, ue] = (0, J.useState)(null),
    [E, de] = (0, J.useState)(null),
    [fe, D] = (0, J.useState)(null),
    O = 1 / (Math.max(S, 2 ** -52) / 0.9),
    [pe, me] = (0, J.useState)(``),
    [k, ge] = (0, J.useState)(null),
    [A, j] = (0, J.useState)(null),
    [M, N] = (0, J.useState)(null),
    [Ce, P] = (0, J.useState)(!1),
    we;
  if (t[0] !== n || t[1] !== g || t[2] !== v) {
    let e;
    (t[4] !== g || t[5] !== v
      ? ((e = (e) =>
          e.localArtifactAnnotationContext?.path === v && Qe(e) === g),
        (t[4] = g),
        (t[5] = v),
        (t[6] = e))
      : (e = t[6]),
      (we = n.filter(e)),
      (t[0] = n),
      (t[1] = g),
      (t[2] = v),
      (t[3] = we));
  } else we = t[3];
  let F = we,
    I;
  t[7] !== F || t[8] !== M
    ? ((I = M == null ? null : (F.find((e) => nt(e) === M) ?? null)),
      (t[7] = F),
      (t[8] = M),
      (t[9] = I))
    : (I = t[9]);
  let L = I,
    R,
    Oe,
    z,
    je;
  t[10] !== F || t[11] !== T || t[12] !== le || t[13] !== A || t[14] !== _
    ? ((z = A == null ? null : (F.find((e) => nt(e) === A) ?? null)),
      (Oe = z == null ? null : et(z)),
      (R = T ?? Oe),
      (je = T == null ? ((z == null ? null : ($e(z) ?? _)) ?? _) : (le ?? _)),
      (t[10] = F),
      (t[11] = T),
      (t[12] = le),
      (t[13] = A),
      (t[14] = _),
      (t[15] = R),
      (t[16] = Oe),
      (t[17] = z),
      (t[18] = je))
    : ((R = t[15]), (Oe = t[16]), (z = t[17]), (je = t[18]));
  let B = je,
    Me;
  bb0: {
    if (T != null) {
      let e;
      (t[19] !== B ||
      t[20] !== i ||
      t[21] !== T ||
      t[22] !== pe ||
      t[23] !== g ||
      t[24] !== v ||
      t[25] !== x
        ? ((e = Ye({
            anchor: T,
            body: pe,
            conversationId: i,
            pageNumber: g,
            pageSize: B,
            path: v,
            target: { mode: `create` },
            title: x,
          })),
          (t[19] = B),
          (t[20] = i),
          (t[21] = T),
          (t[22] = pe),
          (t[23] = g),
          (t[24] = v),
          (t[25] = x),
          (t[26] = e))
        : (e = t[26]),
        (Me = e));
      break bb0;
    }
    if (Oe == null || z == null || A == null) {
      Me = null;
      break bb0;
    }
    let e;
    (t[27] !== B ||
    t[28] !== i ||
    t[29] !== Oe ||
    t[30] !== z ||
    t[31] !== A ||
    t[32] !== g ||
    t[33] !== v ||
    t[34] !== x
      ? ((e = Ye({
          anchor: Oe,
          body: tt(z),
          conversationId: i,
          pageNumber: g,
          pageSize: B,
          path: v,
          target: { mode: `edit`, commentId: A },
          title: x,
        })),
        (t[27] = B),
        (t[28] = i),
        (t[29] = Oe),
        (t[30] = z),
        (t[31] = A),
        (t[32] = g),
        (t[33] = v),
        (t[34] = x),
        (t[35] = e))
      : (e = t[35]),
      (Me = e));
  }
  let V = Me,
    Ne;
  t[36] !== R || t[37] !== B || t[38] !== O || t[39] !== w
    ? ((Ne =
        R == null
          ? null
          : Pe({ anchor: R, editorScale: O, layer: w, pageSize: B })),
      (t[36] = R),
      (t[37] = B),
      (t[38] = O),
      (t[39] = w),
      (t[40] = Ne))
    : (Ne = t[40]);
  let H = Ne,
    U = R != null,
    W;
  t[41] === C
    ? (W = t[42])
    : ((W = C.formatMessage({
        id: `artifactDocxPreview.commentInput`,
        defaultMessage: `Document annotation comment`,
        description: `Aria label for the DOCX annotation comment input`,
      })),
      (t[41] = C),
      (t[42] = W));
  let Ie = W,
    G;
  t[43] === C
    ? (G = t[44])
    : ((G = C.formatMessage({
        id: `artifactAnnotationComment.placeholder`,
        defaultMessage: `Describe a change or ask a question`,
        description: `Placeholder text for an artifact annotation comment editor`,
      })),
      (t[43] = C),
      (t[44] = G));
  let Le = G,
    Re;
  t[45] === C
    ? (Re = t[46])
    : ((Re = C.formatMessage({
        id: `artifactDocxPreview.askCodex`,
        defaultMessage: `Ask Codex`,
        description: `Button label for starting a contextual DOCX annotation from the selected document element`,
      })),
      (t[45] = C),
      (t[46] = Re));
  let He = Re,
    Ue;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = () => {
        (se(null), ue(null), de(null), D(null), me(``), j(null), P(!1));
      }),
      (t[47] = Ue))
    : (Ue = t[47]);
  let We = Ue,
    Ge;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (e) => {
        (me(e), P(!1));
      }),
      (t[48] = Ge))
    : (Ge = t[48]);
  let Ke = Ge,
    qe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = () => {
        typeof window > `u` ||
          _e({
            animationFrameRef: ae,
            animationWindow: window,
            editorWrapper: ie.current,
          });
      }),
      (t[49] = qe))
    : (qe = t[49]);
  let Je = qe,
    rt;
  t[50] !== V || t[51] !== pe || t[52] !== Ce
    ? ((rt = () =>
        V == null
          ? !1
          : V.target.mode === `create` && pe.trim().length > 0
            ? Ce
              ? (We(), !0)
              : (P(!0), Je(), !1)
            : (We(), !0)),
      (t[50] = V),
      (t[51] = pe),
      (t[52] = Ce),
      (t[53] = rt))
    : (rt = t[53]);
  let K = rt,
    ct;
  t[54] !== R || t[55] !== B || t[56] !== O || t[57] !== w
    ? ((ct = () => {
        if (R == null) return;
        let e = Pe({ anchor: R, editorScale: O, layer: w, pageSize: B });
        e != null && Se(ie.current, e);
      }),
      (t[54] = R),
      (t[55] = B),
      (t[56] = O),
      (t[57] = w),
      (t[58] = ct))
    : (ct = t[58]);
  let q = (0, J.useEffectEvent)(ct),
    lt;
  t[59] !== q || t[60] !== U || t[61] !== w
    ? ((lt = () => {
        if (!U || w == null) return;
        let e = w.ownerDocument,
          t = e.defaultView,
          n = () => {
            q();
          };
        (e.addEventListener(`scroll`, n, { capture: !0 }),
          t?.addEventListener(`resize`, n));
        let r = typeof ResizeObserver > `u` ? null : new ResizeObserver(n);
        return (
          r?.observe(w),
          n(),
          () => {
            (e.removeEventListener(`scroll`, n, { capture: !0 }),
              t?.removeEventListener(`resize`, n),
              r?.disconnect());
          }
        );
      }),
      (t[59] = q),
      (t[60] = U),
      (t[61] = w),
      (t[62] = lt))
    : (lt = t[62]);
  let ft;
  (t[63] !== B.height ||
  t[64] !== B.width ||
  t[65] !== O ||
  t[66] !== U ||
  t[67] !== w
    ? ((ft = [B.height, B.width, O, U, w]),
      (t[63] = B.height),
      (t[64] = B.width),
      (t[65] = O),
      (t[66] = U),
      (t[67] = w),
      (t[68] = ft))
    : (ft = t[68]),
    (0, J.useEffect)(lt, ft));
  let pt;
  t[69] !== w?.ownerDocument || t[70] !== K
    ? ((pt = (e) => {
        let t = e.target;
        (t instanceof Node && ie.current?.contains(t)) ||
          (e.preventDefault(),
          e.stopPropagation(),
          K() &&
            (t instanceof Node ? t.ownerDocument : w?.ownerDocument)
              ?.getSelection()
              ?.removeAllRanges());
      }),
      (t[69] = w?.ownerDocument),
      (t[70] = K),
      (t[71] = pt))
    : (pt = t[71]);
  let mt = (0, J.useEffectEvent)(pt),
    ht;
  t[72] !== V?.target.mode || t[73] !== mt || t[74] !== a || t[75] !== w
    ? ((ht = () => {
        if (a || V?.target.mode !== `create` || w == null) return;
        let e = w.ownerDocument,
          t = (e) => {
            mt(e);
          };
        return (
          e.addEventListener(`pointerdown`, t, { capture: !0 }),
          () => {
            e.removeEventListener(`pointerdown`, t, { capture: !0 });
          }
        );
      }),
      (t[72] = V?.target.mode),
      (t[73] = mt),
      (t[74] = a),
      (t[75] = w),
      (t[76] = ht))
    : (ht = t[76]);
  let gt = V?.target.mode,
    _t;
  (t[77] !== a || t[78] !== w || t[79] !== gt
    ? ((_t = [gt, a, w]), (t[77] = a), (t[78] = w), (t[79] = gt), (t[80] = _t))
    : (_t = t[80]),
    (0, J.useEffect)(ht, _t));
  let vt;
  t[81] !== T ||
  t[82] !== A ||
  t[83] !== a ||
  t[84] !== w ||
  t[85] !== _ ||
  t[86] !== K
    ? ((vt = () => {
        if (a || w == null) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = ut({ pageElement: e, pageSize: _ });
        if (t == null) {
          de(null);
          return;
        }
        ((T != null || A != null) && !K()) ||
          (de(t), se(null), ue(null), me(``), j(null), N(null), P(!1));
      }),
      (t[81] = T),
      (t[82] = A),
      (t[83] = a),
      (t[84] = w),
      (t[85] = _),
      (t[86] = K),
      (t[87] = vt))
    : (vt = t[87]);
  let yt = (0, J.useEffectEvent)(vt),
    bt;
  t[88] !== a || t[89] !== w || t[90] !== yt
    ? ((bt = () => {
        if (w == null || a) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = () => {
          yt();
        };
        return (
          e.addEventListener(`mouseup`, t),
          e.addEventListener(`keyup`, t),
          () => {
            (e.removeEventListener(`mouseup`, t),
              e.removeEventListener(`keyup`, t));
          }
        );
      }),
      (t[88] = a),
      (t[89] = w),
      (t[90] = yt),
      (t[91] = bt))
    : (bt = t[91]);
  let xt;
  (t[92] !== a || t[93] !== w
    ? ((xt = [a, w]), (t[92] = a), (t[93] = w), (t[94] = xt))
    : (xt = t[94]),
    (0, J.useEffect)(bt, xt));
  let St;
  t[95] !== T ||
  t[96] !== A ||
  t[97] !== a ||
  t[98] !== w ||
  t[99] !== _ ||
  t[100] !== K
    ? ((St = (e) => {
        if (a || w == null || e.defaultPrevented) return;
        let t = e.target;
        if (t instanceof Node && w.contains(t)) return;
        let n = w.parentElement;
        if (n == null) return;
        let r = dt({
          clientX: e.clientX,
          clientY: e.clientY,
          includePreviewMetadata: !0,
          layerElement: w,
          pageElement: n,
          pageSize: _,
          selectionKindFilter: Dt,
        });
        r != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          !((T != null || A != null) && !K()) &&
            (n.ownerDocument.getSelection()?.removeAllRanges(),
            de(r),
            se(null),
            ue(null),
            me(``),
            j(null),
            N(null),
            P(!1)));
      }),
      (t[95] = T),
      (t[96] = A),
      (t[97] = a),
      (t[98] = w),
      (t[99] = _),
      (t[100] = K),
      (t[101] = St))
    : (St = t[101]);
  let Ct = (0, J.useEffectEvent)(St),
    wt;
  t[102] !== a || t[103] !== w || t[104] !== Ct
    ? ((wt = () => {
        if (w == null || a) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = (e) => {
          Ct(e);
        };
        return (
          e.addEventListener(`click`, t),
          () => {
            e.removeEventListener(`click`, t);
          }
        );
      }),
      (t[102] = a),
      (t[103] = w),
      (t[104] = Ct),
      (t[105] = wt))
    : (wt = t[105]);
  let Tt;
  (t[106] !== a || t[107] !== w
    ? ((Tt = [a, w]), (t[106] = a), (t[107] = w), (t[108] = Tt))
    : (Tt = t[108]),
    (0, J.useEffect)(wt, Tt));
  let At;
  t[109] !== a || t[110] !== w || t[111] !== _
    ? ((At = (e, t, n) => {
        if (!a || w == null) return null;
        let r = w.parentElement;
        return r == null
          ? null
          : dt({
              clientX: e,
              clientY: t,
              includePreviewMetadata: n,
              layerElement: w,
              pageElement: r,
              pageSize: _,
            });
      }),
      (t[109] = a),
      (t[110] = w),
      (t[111] = _),
      (t[112] = At))
    : (At = t[112]);
  let jt = At,
    Mt;
  t[113] !== a || t[114] !== _ || t[115] !== ne || t[116] !== y || t[117] !== b
    ? ((Mt = (e, t) => {
        (Ae(
          ne,
          {
            artifactTabId: y,
            artifactType: `document`,
            importKind: `docx`,
            threadId: b,
          },
          { annotationModeEnabled: a, startSource: t },
        ),
          se(e),
          ue(_),
          de(null),
          D(null),
          me(``),
          j(null),
          N(null),
          P(!1));
      }),
      (t[113] = a),
      (t[114] = _),
      (t[115] = ne),
      (t[116] = y),
      (t[117] = b),
      (t[118] = Mt))
    : (Mt = t[118]);
  let X = Mt,
    Nt;
  t[119] !== T || t[120] !== A || t[121] !== X || t[122] !== _ || t[123] !== E
    ? ((Nt = (e, t) => {
        if (T != null || A != null || !xe(e)) return;
        let n =
          ut({ pageElement: t, pageSize: _ }) ??
          (E?.selectionKind === `text` ? null : E);
        n != null &&
          (e.preventDefault(), e.stopPropagation(), X(n, `ask_codex_shortcut`));
      }),
      (t[119] = T),
      (t[120] = A),
      (t[121] = X),
      (t[122] = _),
      (t[123] = E),
      (t[124] = Nt))
    : (Nt = t[124]);
  let Pt = (0, J.useEffectEvent)(Nt),
    Ft;
  t[125] !== a || t[126] !== w || t[127] !== Pt
    ? ((Ft = () => {
        if (w == null || a) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = (t) => {
          Pt(t, e);
        };
        return (
          e.ownerDocument.addEventListener(`keydown`, t, { capture: !0 }),
          () => {
            e.ownerDocument.removeEventListener(`keydown`, t, { capture: !0 });
          }
        );
      }),
      (t[125] = a),
      (t[126] = w),
      (t[127] = Pt),
      (t[128] = Ft))
    : (Ft = t[128]);
  let It;
  (t[129] !== a || t[130] !== w
    ? ((It = [a, w]), (t[129] = a), (t[130] = w), (t[131] = It))
    : (It = t[131]),
    (0, J.useEffect)(Ft, It));
  let Lt;
  t[132] !== T || t[133] !== A || t[134] !== X || t[135] !== K
    ? ((Lt = (e) => {
        ((T != null || A != null) && !K()) || X(e, `annotation_mode_pointer`);
      }),
      (t[132] = T),
      (t[133] = A),
      (t[134] = X),
      (t[135] = K),
      (t[136] = Lt))
    : (Lt = t[136]);
  let Rt = Lt,
    zt;
  t[137] !== a || t[138] !== _
    ? ((zt = (e) => {
        if (!a || !e.isPrimary || e.pointerType === `touch` || e.button !== 0)
          return;
        let t = Fe(e, _);
        t != null &&
          ((oe.current = !1),
          e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.setPointerCapture(e.pointerId),
          de(null),
          D(null),
          N(null),
          ge({
            pointerId: e.pointerId,
            start: t,
            current: t,
            clientStart: { x: e.clientX, y: e.clientY },
            clientCurrent: { x: e.clientX, y: e.clientY },
          }));
      }),
      (t[137] = a),
      (t[138] = _),
      (t[139] = zt))
    : (zt = t[139]);
  let Bt = zt,
    Vt;
  t[140] !== T || t[141] !== k || t[142] !== A || t[143] !== jt || t[144] !== _
    ? ((Vt = (e) => {
        if (k == null) {
          if (T != null || A != null) {
            D(null);
            return;
          }
          D(jt(e.clientX, e.clientY, !1));
          return;
        }
        if (e.pointerId !== k.pointerId) return;
        let t = Fe(e, _);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          ge((n) =>
            n == null || n.pointerId !== e.pointerId
              ? n
              : {
                  ...n,
                  current: t,
                  clientCurrent: { x: e.clientX, y: e.clientY },
                },
          ));
      }),
      (t[140] = T),
      (t[141] = k),
      (t[142] = A),
      (t[143] = jt),
      (t[144] = _),
      (t[145] = Vt))
    : (Vt = t[145]);
  let Ht = Vt,
    Ut;
  t[146] !== T ||
  t[147] !== k ||
  t[148] !== jt ||
  t[149] !== Rt ||
  t[150] !== X ||
  t[151] !== _ ||
  t[152] !== K
    ? ((Ut = (e) => {
        if (k == null || e.pointerId !== k.pointerId) return;
        let t = Fe(e, _) ?? k.current;
        (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId));
        let n = {
            ...k,
            current: t,
            clientCurrent: { x: e.clientX, y: e.clientY },
          },
          r = ze(n),
          i = Be(n, r);
        if (((oe.current = r), !r)) {
          let t = jt(e.clientX, e.clientY, !0);
          if (t != null) {
            ((oe.current = !0), ge(null), Rt(t));
            return;
          }
        }
        if (T != null && i.kind === `point`) {
          (K(), ge(null));
          return;
        }
        (X(i, `annotation_mode_pointer`), ge(null));
      }),
      (t[146] = T),
      (t[147] = k),
      (t[148] = jt),
      (t[149] = Rt),
      (t[150] = X),
      (t[151] = _),
      (t[152] = K),
      (t[153] = Ut))
    : (Ut = t[153]);
  let Wt = Ut,
    Z;
  t[154] !== jt || t[155] !== Rt
    ? ((Z = (e) => {
        if (oe.current) {
          ((oe.current = !1), e.preventDefault(), e.stopPropagation());
          return;
        }
        let t = jt(e.clientX, e.clientY, !0);
        t != null && (e.preventDefault(), e.stopPropagation(), Rt(t));
      }),
      (t[154] = jt),
      (t[155] = Rt),
      (t[156] = Z))
    : (Z = t[156]);
  let Gt = Z,
    Q;
  t[157] !== i ||
  t[158] !== T ||
  t[159] !== le ||
  t[160] !== A ||
  t[161] !== a ||
  t[162] !== s ||
  t[163] !== c ||
  t[164] !== m ||
  t[165] !== g ||
  t[166] !== _ ||
  t[167] !== v ||
  t[168] !== ne ||
  t[169] !== y ||
  t[170] !== b ||
  t[171] !== x
    ? ((Q = (e, t) => {
        let { submitDirectly: n } = t === void 0 ? {} : t,
          r = n === void 0 ? !1 : n,
          o = e.body.trim();
        if (A != null) {
          if (o.length === 0) return;
          (c((e) =>
            e.map((e) =>
              nt(e) === A
                ? { ...e, content: [{ content_type: `text`, text: o }] }
                : e,
            ),
          ),
            We());
          return;
        }
        if (T == null || o.length === 0) return;
        let l = Xe({
            anchor: T,
            pageCount: m,
            pageNumber: g,
            pageSize: le ?? _,
          }),
          u = h({
            artifactKind: `document`,
            body: o,
            label: Ze(T, g),
            line: s,
            metadata: l,
            path: v,
            title: x,
          });
        (ke(
          ne,
          {
            artifactTabId: y,
            artifactType: `document`,
            importKind: `docx`,
            threadId: b,
          },
          {
            annotationModeEnabled: a,
            annotationTargetKind: l.target.type,
            submitMode: r ? `direct` : `saved`,
            submitSource: e.submitSource,
          },
        ),
          r
            ? ee.dispatchHostMessage({
                type: `artifact-direct-comment`,
                body: o,
                comment: u,
                conversationId: i,
                sessionId: crypto.randomUUID(),
              })
            : c((e) => [...e, u]),
          We());
      }),
      (t[157] = i),
      (t[158] = T),
      (t[159] = le),
      (t[160] = A),
      (t[161] = a),
      (t[162] = s),
      (t[163] = c),
      (t[164] = m),
      (t[165] = g),
      (t[166] = _),
      (t[167] = v),
      (t[168] = ne),
      (t[169] = y),
      (t[170] = b),
      (t[171] = x),
      (t[172] = Q))
    : (Q = t[172]);
  let $ = Q,
    Kt = a ? `pointer-events-auto` : `pointer-events-none`,
    qt;
  t[173] === Kt
    ? (qt = t[174])
    : ((qt = ce(`absolute inset-0 z-[3]`, Kt)), (t[173] = Kt), (t[174] = qt));
  let Jt;
  t[175] === a
    ? (Jt = t[176])
    : ((Jt = a ? { cursor: ve } : void 0), (t[175] = a), (t[176] = Jt));
  let Yt, Xt;
  t[177] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = () => {
        (ge(null), D(null));
      }),
      (Xt = () => D(null)),
      (t[177] = Yt),
      (t[178] = Xt))
    : ((Yt = t[177]), (Xt = t[178]));
  let Zt;
  if (t[179] !== F || t[180] !== A || t[181] !== S) {
    let e;
    (t[183] !== A || t[184] !== S
      ? ((e = (e) =>
          (0, Y.jsx)(
            DocxCommentMarkerOverlay,
            {
              comment: e,
              isSelected: nt(e) === A,
              onEdit: (e) => {
                (se(null), ue(null), me(``), P(!1), N(null), D(null), j(e));
              },
              onPreviewChange: N,
              zoomScale: S,
            },
            nt(e),
          )),
        (t[183] = A),
        (t[184] = S),
        (t[185] = e))
      : (e = t[185]),
      (Zt = F.map(e)),
      (t[179] = F),
      (t[180] = A),
      (t[181] = S),
      (t[182] = Zt));
  } else Zt = t[182];
  let Qt;
  t[186] !== A || t[187] !== L || t[188] !== w
    ? ((Qt =
        L == null || A != null
          ? null
          : (0, Y.jsx)(DocxCommentPreviewOverlay, { comment: L, layer: w })),
      (t[186] = A),
      (t[187] = L),
      (t[188] = w),
      (t[189] = Qt))
    : (Qt = t[189]);
  let $t;
  t[190] !== T || t[191] !== A || t[192] !== fe || t[193] !== _
    ? (($t =
        fe != null && T == null && A == null
          ? (0, Y.jsx)(DocxAnnotationHighlightRect, {
              paddingPx: 4,
              pageSize: _,
              rect: fe.rect,
              testId: `artifact-docx-element-hover-highlight`,
            })
          : null),
      (t[190] = T),
      (t[191] = A),
      (t[192] = fe),
      (t[193] = _),
      (t[194] = $t))
    : ($t = t[194]);
  let en;
  t[195] !== He ||
  t[196] !== T ||
  t[197] !== X ||
  t[198] !== _ ||
  t[199] !== E ||
  t[200] !== S
    ? ((en =
        E != null && T == null
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                E.selectionKind === `text`
                  ? null
                  : (0, Y.jsx)(DocxAnnotationHighlightRect, {
                      bordered: !0,
                      paddingPx: 4,
                      pageSize: _,
                      rect: E.rect,
                      testId: `artifact-docx-selection-outline`,
                    }),
                (0, Y.jsx)(ye, {
                  anchor: E.askForEditAnchor,
                  label: He,
                  pageSize: _,
                  rect: E.rect,
                  testId: `artifact-docx-ask-for-edit-button`,
                  zoomScale: S,
                  onClick: () => X(E, `ask_codex_button`),
                }),
              ],
            })
          : null),
      (t[195] = He),
      (t[196] = T),
      (t[197] = X),
      (t[198] = _),
      (t[199] = E),
      (t[200] = S),
      (t[201] = en))
    : (en = t[201]);
  let tn;
  t[202] !== k || t[203] !== _
    ? ((tn =
        k == null
          ? null
          : (0, Y.jsx)(DocxAnnotationSelectionRect, {
              pageSize: _,
              rect: Ve(k.start, k.current),
              testId: `artifact-docx-comment-region-outline`,
            })),
      (t[202] = k),
      (t[203] = _),
      (t[204] = tn))
    : (tn = t[204]);
  let nn;
  t[205] !== T || t[206] !== le || t[207] !== s || t[208] !== _ || t[209] !== S
    ? ((nn =
        T == null
          ? null
          : (0, Y.jsx)(DocxDraftCommentMarkerOverlay, {
              anchor: T,
              label: s,
              pageSize: le ?? _,
              zoomScale: S,
            })),
      (t[205] = T),
      (t[206] = le),
      (t[207] = s),
      (t[208] = _),
      (t[209] = S),
      (t[210] = nn))
    : (nn = t[210]);
  let rn;
  t[211] !== R ||
  t[212] !== H ||
  t[213] !== V ||
  t[214] !== Ie ||
  t[215] !== Le ||
  t[216] !== O ||
  t[217] !== $ ||
  t[218] !== c ||
  t[219] !== l ||
  t[220] !== u ||
  t[221] !== d ||
  t[222] !== f ||
  t[223] !== p
    ? ((rn =
        R == null || H == null || V == null
          ? null
          : (0, Y.jsx)(`div`, {
              ref: ie,
              className: Te,
              style: {
                scale: `${O}`,
                transformOrigin: `top left`,
                left: H.x,
                top: H.y,
                height: Ee,
                width: 294,
              },
              onPointerDown: Et,
              onTouchCancel: (e) => {
                (e.stopPropagation(), l?.());
              },
              onTouchEnd: (e) => {
                (e.stopPropagation(), u?.());
              },
              onTouchMove: (e) => {
                (e.stopPropagation(), d?.(e));
              },
              onTouchStart: (e) => {
                (e.stopPropagation(), f?.(e));
              },
              onWheel: (e) => {
                (e.stopPropagation(), p?.(e));
              },
              children: (0, Y.jsx)(
                De,
                {
                  allowImageAttachments: !1,
                  defaultCreateSubmitMode: `direct`,
                  inputAriaLabel: Ie,
                  keyboardEventTarget: typeof window > `u` ? void 0 : window,
                  placeholder: Le,
                  session: V,
                  windowHeight: Ee,
                  onCancel: We,
                  onDelete: (e) => {
                    (c((t) => t.filter((t) => nt(t) !== e)), We());
                  },
                  onEscape: We,
                  onBodyChange: V.target.mode === `create` ? Ke : void 0,
                  onLightDismissibilityChange: kt,
                  onMounted: kt,
                  onDirectSubmit: (e) => {
                    $(e, { submitDirectly: !0 });
                  },
                  onSubmit: $,
                },
                V.sessionId,
              ),
            })),
      (t[211] = R),
      (t[212] = H),
      (t[213] = V),
      (t[214] = Ie),
      (t[215] = Le),
      (t[216] = O),
      (t[217] = $),
      (t[218] = c),
      (t[219] = l),
      (t[220] = u),
      (t[221] = d),
      (t[222] = f),
      (t[223] = p),
      (t[224] = rn))
    : (rn = t[224]);
  let an;
  return (
    t[225] !== Gt ||
    t[226] !== Bt ||
    t[227] !== Ht ||
    t[228] !== Wt ||
    t[229] !== l ||
    t[230] !== u ||
    t[231] !== d ||
    t[232] !== f ||
    t[233] !== p ||
    t[234] !== qt ||
    t[235] !== Jt ||
    t[236] !== Zt ||
    t[237] !== Qt ||
    t[238] !== $t ||
    t[239] !== en ||
    t[240] !== tn ||
    t[241] !== nn ||
    t[242] !== rn
      ? ((an = (0, Y.jsxs)(`div`, {
          ref: re,
          className: qt,
          "data-testid": `artifact-docx-comment-layer`,
          style: Jt,
          onPointerDown: Bt,
          onPointerMove: Ht,
          onPointerUp: Wt,
          onPointerCancel: Yt,
          onPointerLeave: Xt,
          onClick: Gt,
          onTouchCancel: l,
          onTouchEnd: u,
          onTouchMove: d,
          onTouchStart: f,
          onWheel: p,
          children: [Zt, Qt, $t, en, tn, nn, rn],
        })),
        (t[225] = Gt),
        (t[226] = Bt),
        (t[227] = Ht),
        (t[228] = Wt),
        (t[229] = l),
        (t[230] = u),
        (t[231] = d),
        (t[232] = f),
        (t[233] = p),
        (t[234] = qt),
        (t[235] = Jt),
        (t[236] = Zt),
        (t[237] = Qt),
        (t[238] = $t),
        (t[239] = en),
        (t[240] = tn),
        (t[241] = nn),
        (t[242] = rn),
        (t[243] = an))
      : (an = t[243]),
    an
  );
}
function Et(e) {
  return e.stopPropagation();
}
function Dt(e) {
  return e === `image` || e === `drawing`;
}
var Ot,
  J,
  Y,
  kt,
  At = e(() => {
    ((Ot = f()),
      oe(),
      c(),
      s(),
      (J = t(u(), 1)),
      O(),
      we(),
      I(),
      l(),
      n(),
      z(),
      Ce(),
      M(),
      (Y = m()),
      (kt = () => {}));
  });
function jt(e) {
  let t = (0, Wt.c)(82),
    {
      bytes: n,
      chromeMode: r,
      disableAnnotations: a,
      disableFileActions: s,
      hostId: c,
      onBeforeOpen: l,
      path: u,
      ref: d,
      tabId: f,
      title: p,
    } = e,
    m = r === void 0 ? `default` : r,
    h = a === void 0 ? !1 : a,
    ee = s === void 0 ? !1 : s,
    g = o(pe),
    _ = (0, Z.use)(Zt),
    v = ne(),
    {
      bodyContainerElementRef: x,
      cancelPageScroll: ae,
      flushPendingPageScroll: T,
      navigateToPage: ke,
    } = zt({ zoomScale: v }),
    se = {
      bodyContainerElementRef: x,
      bytes: n,
      onPagesRendered: T,
      renderAsync: _,
      styleText: qt,
    };
  let {
      bodyContainerElementRef: ce,
      bodyContainerRef: ue,
      loadState: E,
      pageElements: de,
      styleContainerRef: fe,
      totalPages: D,
    } = X(se),
    O;
  t[7] === g.value
    ? (O = t[8])
    : ((O = me(g.value)), (t[7] = g.value), (t[8] = O));
  let he = O,
    k;
  t[9] === he
    ? (k = t[10])
    : ((k = he ?? ge({ entrypoint: `home` })), (t[9] = he), (t[10] = k));
  let _e = k,
    ve = i(y, _e),
    ye;
  t[11] !== _e || t[12] !== g
    ? ((ye = (e) => {
        b(g, _e, e);
      }),
      (t[11] = _e),
      (t[12] = g),
      (t[13] = ye))
    : (ye = t[13]);
  let be = ye,
    A,
    j;
  t[14] !== ve || t[15] !== u
    ? ((A = B(ve, u).filter(Mt)),
      (j = Me(A)),
      (t[14] = ve),
      (t[15] = u),
      (t[16] = A),
      (t[17] = j))
    : ((A = t[16]), (j = t[17]));
  let M = j,
    {
      handleTouchCancel: xe,
      handleTouchEnd: Se,
      handleTouchMove: N,
      handleTouchStart: Ce,
      handleWheel: P,
      fitToWidth: we,
      isZoomToFitSelected: Te,
      previewStyle: F,
      resizeRef: Ee,
      setZoomPercent: De,
      zoomPercent: I,
    } = Nt({
      bodyContainerElementRef: ce,
      computePinchZoomPercent,
      computeWheelZoomPercent,
      measureTouchDistance,
      normalizeZoomPercent,
      useResizeObserverRef,
    }),
    L = E === `ready`,
    Ae,
    z;
  (t[21] === ke
    ? ((Ae = t[22]), (z = t[23]))
    : ((Ae = () => ({ navigateToPage: ke })),
      (z = [ke]),
      (t[21] = ke),
      (t[22] = Ae),
      (t[23] = z)),
    (0, Z.useImperativeHandle)(d, Ae, z));
  let je, Ne;
  (t[24] !== u || t[25] !== be
    ? ((je = () => () => {
        (ae(),
          be((e) => {
            let t = e.filter((e) => !Ht(e, u));
            return t.length === e.length ? e : t;
          }));
      }),
      (Ne = [ae, u, be]),
      (t[24] = u),
      (t[25] = be),
      (t[26] = je),
      (t[27] = Ne))
    : ((je = t[26]), (Ne = t[27])),
    (0, Z.useEffect)(je, Ne));
  let H;
  t[28] === fe
    ? (H = t[29])
    : ((H = (0, Q.jsx)(`div`, {
        ref: fe,
        "aria-hidden": !0,
        className: `hidden`,
      })),
      (t[28] = fe),
      (t[29] = H));
  let Pe;
  t[30] !== m ||
  t[31] !== ee ||
  t[32] !== we ||
  t[33] !== c ||
  t[34] !== L ||
  t[35] !== Te ||
  t[36] !== l ||
  t[37] !== u ||
  t[38] !== De ||
  t[39] !== p ||
  t[40] !== I
    ? ((Pe = L
        ? (0, Q.jsx)(C, {
            artifactType: `DOC`,
            hideMetadata: m === `standalone`,
            title: It(p),
            centerContent: null,
            rightContent: (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Q.jsx)(S, {
                  triggerTestId: `docx-preview-zoom-trigger`,
                  zoomPercent: I,
                  zoomOptions: le,
                  onZoomPercentChange: De,
                  fitOption: { selected: Te, onSelect: we },
                }),
                m === `default` && !ee
                  ? (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(w, { hostId: c, path: u }),
                        (0, Q.jsx)(re, {
                          hostId: c,
                          onBeforeOpen: l,
                          path: u,
                          showLabel: !0,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[30] = m),
      (t[31] = ee),
      (t[32] = we),
      (t[33] = c),
      (t[34] = L),
      (t[35] = Te),
      (t[36] = l),
      (t[37] = u),
      (t[38] = De),
      (t[39] = p),
      (t[40] = I),
      (t[41] = Pe))
    : (Pe = t[41]);
  let U;
  t[42] !== ue || t[43] !== Ee
    ? ((U = Oe(ue, Ee)), (t[42] = ue), (t[43] = Ee), (t[44] = U))
    : (U = t[44]);
  let Fe = L ? Kt : `hidden`,
    W;
  t[45] !== xe ||
  t[46] !== Se ||
  t[47] !== N ||
  t[48] !== Ce ||
  t[49] !== P ||
  t[50] !== F ||
  t[51] !== U ||
  t[52] !== Fe ||
  t[53] !== p
    ? ((W = (0, Q.jsx)(`div`, {
        ref: U,
        "aria-label": p,
        className: Fe,
        "data-testid": `docx-preview-panel`,
        onTouchCancel: xe,
        onTouchEnd: Se,
        onTouchMove: N,
        onTouchStart: Ce,
        onWheel: P,
        style: F,
      })),
      (t[45] = xe),
      (t[46] = Se),
      (t[47] = N),
      (t[48] = Ce),
      (t[49] = P),
      (t[50] = F),
      (t[51] = U),
      (t[52] = Fe),
      (t[53] = p),
      (t[54] = W))
    : (W = t[54]);
  let Ie;
  t[55] !== _e ||
  t[56] !== h ||
  t[57] !== A ||
  t[58] !== xe ||
  t[59] !== Se ||
  t[60] !== N ||
  t[61] !== Ce ||
  t[62] !== P ||
  t[63] !== L ||
  t[64] !== M ||
  t[65] !== de ||
  t[66] !== u ||
  t[67] !== be ||
  t[68] !== f ||
  t[69] !== he ||
  t[70] !== p ||
  t[71] !== D ||
  t[72] !== I
    ? ((Ie =
        L && !h
          ? de.map((e, t) => {
              let n = t + 1;
              return (0, Gt.createPortal)(
                (0, Q.jsx)(Tt, {
                  comments: A,
                  conversationId: _e,
                  isCommentMode: !1,
                  nextCommentNumber: M,
                  onCommentsChange: be,
                  onTouchCancel: xe,
                  onTouchEnd: Se,
                  onTouchMove: N,
                  onTouchStart: Ce,
                  onWheel: P,
                  pageCount: D,
                  pageNumber: n,
                  pageSize: Vt(e, I),
                  path: u,
                  tabId: f,
                  threadId: he,
                  title: p,
                  zoomScale: I / 100,
                }),
                e,
                `${u}:${n}:browse`,
              );
            })
          : null),
      (t[55] = _e),
      (t[56] = h),
      (t[57] = A),
      (t[58] = xe),
      (t[59] = Se),
      (t[60] = N),
      (t[61] = Ce),
      (t[62] = P),
      (t[63] = L),
      (t[64] = M),
      (t[65] = de),
      (t[66] = u),
      (t[67] = be),
      (t[68] = f),
      (t[69] = he),
      (t[70] = p),
      (t[71] = D),
      (t[72] = I),
      (t[73] = Ie))
    : (Ie = t[73]);
  let G;
  t[74] === E ? (G = t[75]) : ((G = V(E)), (t[74] = E), (t[75] = G));
  let Le;
  return (
    t[76] !== H || t[77] !== Pe || t[78] !== W || t[79] !== Ie || t[80] !== G
      ? ((Le = (0, Q.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children: [H, Pe, W, Ie, G],
        })),
        (t[76] = H),
        (t[77] = Pe),
        (t[78] = W),
        (t[79] = Ie),
        (t[80] = G),
        (t[81] = Le))
      : (Le = t[81]),
    Le
  );
}
function Mt(e) {
  return e.localArtifactAnnotationContext?.artifactKind === `document`;
}
function Ht(e, t) {
  return (
    a(e) &&
    e.localArtifactAnnotationContext?.artifactKind === `document` &&
    e.localArtifactAnnotationContext.path === t
  );
}
var Wt, Z, Gt, Q, qt, Zt;
e(() => {
  ((Wt = f()),
    c(),
    s(),
    (Z = t(u(), 1)),
    (Gt = t(ae(), 1)),
    se(),
    _(),
    k(),
    g(),
    D(),
    te(),
    R(),
    je(),
    fe(),
    Ne(),
    de(),
    At(),
    (Q = m()),
    d(),
    (qt = createDocxPreviewStyleText(v)),
    (Zt = p(
      async () => {
        let { renderAsync: e } = await import(`./docx-preview`);
        return { renderAsync: e };
      },
      __vite__mapDeps([0]),
      import.meta.url,
    ).then(
      ({ renderAsync: e }) => e,
      () => null,
    )));
})();
export { jt as DocxPreviewPanel };
