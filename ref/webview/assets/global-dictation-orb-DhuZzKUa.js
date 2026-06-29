import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _ as n,
  _c as r,
  gc as i,
  lc as a,
  v as o,
  y as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as c,
  Om as l,
  hh as u,
  mh as d,
  op as f,
  sp as p,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as m,
  Vy as h,
  nv as g,
  tv as _,
  zy as v,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Fm as y,
  Pm as b,
  _m as x,
  dm as S,
  fm as C,
  gm as w,
  hm as T,
  mm as E,
  pm as D,
  um as O,
  vm as k,
  ym as A,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  Di as j,
  Oi as M,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
async function N(e, t, n, r) {
  if (H?.sessionId === e || W === e) return;
  ((U = null), H != null && P(H.sessionId));
  let i = null;
  try {
    ((W = e),
      await _.systemPermissions?.requestMicrophoneAccess().catch(() => {}),
      (i = await w({ channelCount: 1 })),
      t.startWaveformCapture(i));
    let a = new MediaRecorder(i),
      o = {
        sessionId: e,
        recorder: a,
        stream: i,
        chunks: [],
        startedAtMs: Date.now(),
        isStopping: !1,
        cleanupEnabled: n,
        pendingStreamingSession: null,
        streamingSession: null,
        controls: t,
      };
    if (
      (a.addEventListener(`dataavailable`, (e) => {
        e.data.size > 0 && o.chunks.push(e.data);
      }),
      a.start(),
      (H = o),
      W === e && (W = null),
      G === e && ((G = null), P(e)),
      r && !o.isStopping)
    ) {
      let e = new k();
      o.pendingStreamingSession = e;
      try {
        if ((await e.start(i), o.pendingStreamingSession !== e)) return;
        ((o.pendingStreamingSession = null),
          H === o && !o.isStopping ? (o.streamingSession = e) : e.close());
      } catch {
        o.pendingStreamingSession === e &&
          ((o.pendingStreamingSession = null), e.close());
      }
    }
  } catch (n) {
    throw (
      i?.getTracks().forEach((e) => {
        e.stop();
      }),
      t.stopWaveformCapture(),
      t.resetWaveformDisplay(),
      W === e && (W = null),
      G === e && (G = null),
      o.dispatchMessage(`global-dictation-failed`, {
        sessionId: e,
        stage: `recording`,
      }),
      n
    );
  }
}
function P(e) {
  let t = H;
  if (t == null || t.sessionId !== e) {
    G = e;
    return;
  }
  t.isStopping ||
    ((t.isStopping = !0),
    t.pendingStreamingSession?.close(),
    (t.pendingStreamingSession = null),
    o.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
    F(t));
}
async function F(e) {
  let t = null;
  try {
    try {
      await B(e.recorder);
    } finally {
      (e.stream.getTracks().forEach((e) => {
        e.stop();
      }),
        e.controls.stopWaveformCapture(),
        e.controls.resetWaveformDisplay(),
        H === e && (H = null));
    }
    if (e.chunks.length === 0 || Date.now() - e.startedAtMs < V) {
      (e.streamingSession?.close(),
        o.dispatchMessage(`global-dictation-completed`, {
          sessionId: e.sessionId,
          text: ``,
        }));
      return;
    }
    ((t = {
      sessionId: e.sessionId,
      audio: new Blob(e.chunks),
      onTranscriptionFailed: e.controls.onTranscriptionFailed,
    }),
      await L(t, e.cleanupEnabled, e.streamingSession));
  } catch (n) {
    z(e.sessionId, e.controls.onTranscriptionFailed, n, t);
  }
}
async function I(e, t) {
  if (K === e) return;
  let n = U;
  if (n == null || n.sessionId !== e)
    throw Error(`No dictation audio to retry`);
  K = e;
  try {
    await L(n, t);
  } catch (t) {
    throw (z(e, n.onTranscriptionFailed, t, n), t);
  } finally {
    K === e && (K = null);
  }
}
async function L(e, t, n = null) {
  let r = await T({
    transcript: n == null ? await D(e.audio) : await R(n, e.audio),
    cleanupEnabled: t,
  });
  (U === e && (U = null),
    o.dispatchMessage(`global-dictation-completed`, {
      sessionId: e.sessionId,
      text: r,
    }));
}
async function R(e, t) {
  try {
    let t = await e.finish();
    if (t.trim().length > 0) return t;
  } catch {}
  return D(t);
}
function z(e, t, n, r) {
  ((U = r),
    t(n),
    o.dispatchMessage(`global-dictation-failed`, {
      sessionId: e,
      stage: `transcription`,
    }));
}
function B(e) {
  return e.state === `inactive`
    ? Promise.resolve()
    : new Promise((t) => {
        (e.addEventListener(
          `stop`,
          () => {
            t();
          },
          { once: !0 },
        ),
          e.stop());
      });
}
var V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (n(),
      g(),
      A(),
      x(),
      E(),
      C(),
      (V = 250),
      (H = null),
      (U = null),
      (W = null),
      (G = null),
      (K = null));
  }),
  J,
  Y,
  X = e(() => {
    ((J = `_recordingOrb_1csnm_1`), (Y = { recordingOrb: J }));
  });
function ee(e) {
  let t = (0, Z.c)(39),
    {
      cleanupEnabled: n,
      streamingEnabled: r,
      onActiveSessionIdChange: i,
      registerNativePetRenderer: a,
      onVisibilityChange: c,
    } = e,
    l = a === void 0 ? !0 : a,
    u = h(),
    [d, f] = (0, Q.useState)(null),
    [p, m] = (0, Q.useState)(`idle`),
    [g, _] = (0, Q.useState)(null),
    [v, y] = (0, Q.useState)(!1),
    b = (0, Q.useRef)(null),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { variant: `orb` }), (t[0] = x))
    : (x = t[0]);
  let {
      waveformCanvasRef: C,
      startWaveformCapture: w,
      stopWaveformCapture: T,
      resetWaveformDisplay: E,
    } = S(x),
    D;
  t[1] === u
    ? (D = t[2])
    : ((D = (e, t) => {
        let n = j(u, e, t);
        (_(n.message), y(n.canRetry), m(`error`));
      }),
      (t[1] = u),
      (t[2] = D));
  let O = D,
    k;
  t[3] !== d || t[4] !== n || t[5] !== O
    ? ((k = () => {
        d != null &&
          (_(null),
          y(!1),
          m(`transcribing`),
          I(d, n).catch((e) => {
            O(`transcription`, e);
          }));
      }),
      (t[3] = d),
      (t[4] = n),
      (t[5] = O),
      (t[6] = k))
    : (k = t[6]);
  let A = k,
    M;
  t[7] !== i || t[8] !== c
    ? ((M = () => {
        ((b.current = null),
          f(null),
          i?.(null),
          _(null),
          y(!1),
          m(`idle`),
          c?.(!1));
      }),
      (t[7] = i),
      (t[8] = c),
      (t[9] = M))
    : (M = t[9]);
  let F;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = []), (t[10] = F))
    : (F = t[10]),
    s(`global-dictation-idle`, M, F));
  let L;
  t[11] !== n ||
  t[12] !== i ||
  t[13] !== c ||
  t[14] !== E ||
  t[15] !== O ||
  t[16] !== w ||
  t[17] !== T ||
  t[18] !== r
    ? ((L = (e) => {
        ((b.current = e.sessionId),
          f(e.sessionId),
          i?.(e.sessionId),
          _(null),
          y(!1),
          m(`listening`),
          c?.(!0),
          N(
            e.sessionId,
            {
              startWaveformCapture: w,
              stopWaveformCapture: T,
              resetWaveformDisplay: E,
              onTranscriptionFailed: (e) => {
                O(`transcription`, e);
              },
            },
            n,
            r,
          ).catch((e) => {
            O(`start`, e);
          }));
      }),
      (t[11] = n),
      (t[12] = i),
      (t[13] = c),
      (t[14] = E),
      (t[15] = O),
      (t[16] = w),
      (t[17] = T),
      (t[18] = r),
      (t[19] = L))
    : (L = t[19]);
  let R;
  (t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = []), (t[20] = R))
    : (R = t[20]),
    s(`global-dictation-start`, L, R));
  let z, B;
  (t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (_(null), y(!1), m(`transcribing`), P(e.sessionId));
      }),
      (z = []),
      (t[21] = z),
      (t[22] = B))
    : ((z = t[21]), (B = t[22])),
    s(`global-dictation-stop`, B, z));
  let V, H;
  (t[23] !== i || t[24] !== c || t[25] !== l
    ? ((V = () => {
        let e = !0;
        return (
          l &&
            queueMicrotask(() => {
              e &&
                o.dispatchMessage(`global-dictation-pet-renderer-ready`, {
                  ready: !0,
                });
            }),
          () => {
            e = !1;
            let t = b.current;
            (t != null && P(t),
              i?.(null),
              c?.(!1),
              l &&
                o.dispatchMessage(`global-dictation-pet-renderer-ready`, {
                  ready: !1,
                }));
          }
        );
      }),
      (H = [i, c, l]),
      (t[23] = i),
      (t[24] = c),
      (t[25] = l),
      (t[26] = V),
      (t[27] = H))
    : ((V = t[26]), (H = t[27])),
    (0, Q.useEffect)(V, H));
  let U = p === `error` && v,
    W;
  t[28] !== d || t[29] !== A || t[30] !== U || t[31] !== p
    ? ((W = (e) => {
        if ((e.stopPropagation(), p === `listening` && d != null)) {
          o.dispatchMessage(`global-dictation-stop-requested`, {
            sessionId: d,
          });
          return;
        }
        if (U) {
          A();
          return;
        }
        p === `error` &&
          d != null &&
          o.dispatchMessage(`global-dictation-dismiss`, { sessionId: d });
      }),
      (t[28] = d),
      (t[29] = A),
      (t[30] = U),
      (t[31] = p),
      (t[32] = W))
    : (W = t[32]);
  let G = W;
  if (p === `idle`) return null;
  let K;
  return (
    t[33] !== v || t[34] !== g || t[35] !== G || t[36] !== p || t[37] !== C
      ? ((K = (0, $.jsx)(te, {
          canRetryError: v,
          errorMessage: g,
          onClick: G,
          status: p,
          waveformCanvasRef: C,
        })),
        (t[33] = v),
        (t[34] = g),
        (t[35] = G),
        (t[36] = p),
        (t[37] = C),
        (t[38] = K))
      : (K = t[38]),
    K
  );
}
function te(e) {
  let t = (0, Z.c)(40),
    {
      canRetryError: n,
      errorMessage: r,
      onClick: i,
      status: a,
      waveformCanvasRef: o,
    } = e,
    s = h(),
    l = a === `transcribing`,
    u = a === `error` && n,
    p;
  if (u) {
    let e;
    (t[0] !== r || t[1] !== s
      ? ((e =
          r == null
            ? s.formatMessage({
                id: `globalDictation.orb.retry`,
                defaultMessage: `Retry dictation`,
                description: `Accessible label for retrying system-wide dictation from the floating dictation orb`,
              })
            : s.formatMessage(
                {
                  id: `globalDictation.orb.retryWithError`,
                  defaultMessage: `Retry dictation: {errorMessage}`,
                  description: `Accessible label for retrying system-wide dictation from the floating dictation orb after an error`,
                },
                { errorMessage: r },
              )),
        (t[0] = r),
        (t[1] = s),
        (t[2] = e))
      : (e = t[2]),
      (p = e));
  } else if (a === `error`) {
    let e;
    (t[3] !== r || t[4] !== s
      ? ((e =
          r == null
            ? s.formatMessage({
                id: `globalDictation.orb.dismiss`,
                defaultMessage: `Dismiss dictation`,
                description: `Accessible label for dismissing a system-wide dictation error from the floating dictation orb`,
              })
            : s.formatMessage(
                {
                  id: `globalDictation.orb.dismissWithError`,
                  defaultMessage: `Dismiss dictation: {errorMessage}`,
                  description: `Accessible label for dismissing a system-wide dictation error from the floating dictation orb after an error`,
                },
                { errorMessage: r },
              )),
        (t[3] = r),
        (t[4] = s),
        (t[5] = e))
      : (e = t[5]),
      (p = e));
  } else if (l) {
    let e;
    (t[6] === s
      ? (e = t[7])
      : ((e = s.formatMessage({
          id: `globalDictation.orb.transcribing`,
          defaultMessage: `Transcribing`,
          description: `Accessible label for the floating dictation orb while system-wide dictation is transcribing`,
        })),
        (t[6] = s),
        (t[7] = e)),
      (p = e));
  } else {
    let e;
    (t[8] === s
      ? (e = t[9])
      : ((e = s.formatMessage({
          id: `globalDictation.orb.stop`,
          defaultMessage: `Stop dictation`,
          description: `Accessible label for stopping system-wide dictation from the floating dictation orb`,
        })),
        (t[8] = s),
        (t[9] = e)),
      (p = e));
  }
  let m = p,
    g;
  t[10] === a
    ? (g = t[11])
    : ((g = d(
        `no-drag pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25`,
        a === `listening`
          ? d(`cursor-interaction text-white`, Y.recordingOrb)
          : `bg-token-dropdown-background text-token-text-secondary`,
        a === `error` && `cursor-interaction`,
      )),
      (t[10] = a),
      (t[11] = g));
  let _;
  t[12] !== a || t[13] !== o
    ? ((_ =
        a === `listening`
          ? (0, $.jsx)(`canvas`, {
              ref: o,
              className: `size-10 text-white`,
              "aria-hidden": `true`,
            })
          : null),
      (t[12] = a),
      (t[13] = o),
      (t[14] = _))
    : (_ = t[14]);
  let y;
  t[15] === l
    ? (y = t[16])
    : ((y = l ? (0, $.jsx)(c, { className: `icon-sm` }) : null),
      (t[15] = l),
      (t[16] = y));
  let x;
  t[17] === u
    ? (x = t[18])
    : ((x = u ? (0, $.jsx)(b, { className: `icon-sm` }) : null),
      (t[17] = u),
      (t[18] = x));
  let S;
  t[19] !== n || t[20] !== a
    ? ((S =
        a === `error` && !n ? (0, $.jsx)(f, { className: `icon-sm` }) : null),
      (t[19] = n),
      (t[20] = a),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === a
    ? (C = t[23])
    : ((C =
        a === `listening`
          ? (0, $.jsx)(v, {
              id: `globalDictation.orb.listening`,
              defaultMessage: `Listening`,
              description: `Status text for the floating dictation orb while system-wide dictation is listening`,
            })
          : null),
      (t[22] = a),
      (t[23] = C));
  let w;
  t[24] === l
    ? (w = t[25])
    : ((w = l
        ? (0, $.jsx)(v, {
            id: `globalDictation.orb.transcribingStatus`,
            defaultMessage: `Transcribing`,
            description: `Status text for the floating dictation orb while system-wide dictation is transcribing`,
          })
        : null),
      (t[24] = l),
      (t[25] = w));
  let T = a === `error` && r != null ? r : null,
    E;
  t[26] !== C || t[27] !== w || t[28] !== T
    ? ((E = (0, $.jsxs)(`span`, { className: `sr-only`, children: [C, w, T] })),
      (t[26] = C),
      (t[27] = w),
      (t[28] = T),
      (t[29] = E))
    : (E = t[29]);
  let D;
  return (
    t[30] !== p ||
    t[31] !== l ||
    t[32] !== i ||
    t[33] !== E ||
    t[34] !== g ||
    t[35] !== _ ||
    t[36] !== y ||
    t[37] !== x ||
    t[38] !== S
      ? ((D = (0, $.jsxs)(`button`, {
          type: `button`,
          "aria-label": m,
          className: g,
          disabled: l,
          onClick: i,
          children: [_, y, x, S, E],
        })),
        (t[30] = p),
        (t[31] = l),
        (t[32] = i),
        (t[33] = E),
        (t[34] = g),
        (t[35] = _),
        (t[36] = y),
        (t[37] = x),
        (t[38] = S),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
var Z,
  Q,
  $,
  ne = e(() => {
    ((Z = i()),
      u(),
      (Q = t(r(), 1)),
      m(),
      l(),
      O(),
      y(),
      p(),
      n(),
      M(),
      q(),
      X(),
      ($ = a()));
  });
export { N as a, I as i, ne as n, P as o, q as r, ee as t };
//# sourceMappingURL=global-dictation-orb-DhuZzKUa.js.map
