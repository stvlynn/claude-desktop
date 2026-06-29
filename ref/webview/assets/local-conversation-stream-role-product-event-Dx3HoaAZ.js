import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Go as i,
  Ko as a,
  Vo as o,
  _ as s,
  _c as c,
  gc as l,
  qo as u,
  v as d,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Bl as f,
  Hi as p,
  Kp as m,
  N as h,
  Np as g,
  Q as _,
  Ri as v,
  Rl as y,
  St as b,
  et as x,
  q as S,
  ry as C,
  ty as w,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  _t as T,
  vt as E,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  a as D,
  i as O,
  n as k,
  o as A,
  r as j,
  t as M,
} from "./app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-CnYocBk6.js";
function N(e) {
  let t = (0, P.c)(17),
    { conversationId: n } = e,
    o = a(r),
    s = C(`1488233300`),
    c = i(T, n),
    l = i(S, n),
    f = i(D, n),
    p = u(O)?.[n],
    m;
  t[0] !== p ||
  t[1] !== n ||
  t[2] !== c.isEligible ||
  t[3] !== c.reason ||
  t[4] !== s ||
  t[5] !== l ||
  t[6] !== o
    ? ((m = () => {
        let e = o.get(x, n),
          t = o.get(_, n),
          r = k(e, t),
          i = j(e, t, p);
        (s && r != null && o.set(O, (e) => M(e ?? {}, n, r)),
          d.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: s ? n : null,
            isEligible: s && c.isEligible,
            collaborationMode: s ? l : null,
            permissions: s ? i : null,
            reason: s ? c.reason : null,
          }));
      }),
      (t[0] = p),
      (t[1] = n),
      (t[2] = c.isEligible),
      (t[3] = c.reason),
      (t[4] = s),
      (t[5] = l),
      (t[6] = o),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== p ||
    t[9] !== n ||
    t[10] !== c.isEligible ||
    t[11] !== c.reason ||
    t[12] !== s ||
    t[13] !== f ||
    t[14] !== l ||
    t[15] !== o
      ? ((h = [p, n, c.isEligible, c.reason, f, s, l, o]),
        (t[8] = p),
        (t[9] = n),
        (t[10] = c.isEligible),
        (t[11] = c.reason),
        (t[12] = s),
        (t[13] = f),
        (t[14] = l),
        (t[15] = o),
        (t[16] = h))
      : (h = t[16]),
    (0, F.useEffect)(m, h),
    null
  );
}
var P,
  F,
  I = e(() => {
    ((P = l()), o(), (F = t(c(), 1)), h(), s(), n(), w(), E(), A());
  });
function L(e) {
  let t = (0, R.c)(4),
    { conversationId: n } = e,
    r = a(v),
    i,
    o;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () => {
          let e = !1;
          return r.watch((t) => {
            let { get: i } = t,
              a = i(b, n);
            a == null || e || ((e = !0), f(r, g, { streamRole: a.role }));
          });
        }),
        (o = [n, r]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o))
      : ((i = t[2]), (o = t[3])),
    (0, z.useEffect)(i, o),
    null
  );
}
var R,
  z,
  B = e(() => {
    ((R = l()), m(), o(), (z = t(c(), 1)), h(), y(), p());
  });
export { I as i, B as n, N as r, L as t };
//# sourceMappingURL=local-conversation-stream-role-product-event-Dx3HoaAZ.js.map
