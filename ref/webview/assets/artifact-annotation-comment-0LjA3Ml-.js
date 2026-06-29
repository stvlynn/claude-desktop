import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ji as t,
  O as n,
  qi as r,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
function i({ line: e, path: t, payload: n, title: i }) {
  switch (n.target.type) {
    case `presentation-element-selection`:
    case `presentation-region`:
    case `workbook-floating-element`:
    case `workbook-range`:
      return r({
        annotationId: n.annotationId,
        artifactKind: n.artifactKind,
        body: n.body,
        label: n.label,
        line: e,
        metadata: { target: n.target },
        path: t,
        title: i,
      });
  }
}
function a(e, n) {
  return e.filter((e) => t(e) && e.localArtifactAnnotationContext?.path === n);
}
function o({ currentComments: e, path: t, previousComments: n }) {
  let r = new Set();
  for (let n of a(e, t)) {
    let e = n.localArtifactAnnotationContext?.annotationId;
    e != null && r.add(e);
  }
  let i = [];
  for (let e of a(n, t)) {
    let t = e.localArtifactAnnotationContext?.annotationId;
    t != null && !r.has(t) && i.push(t);
  }
  return i;
}
function s(e, n) {
  let r = e.filter(
    (e) => !t(e) || e.localArtifactAnnotationContext?.path !== n,
  );
  return r.length === e.length ? e : r;
}
function c(e) {
  return Math.max(0, ...e.map((e) => e.position.line)) + 1;
}
var l = e(() => {
  n();
});
export { l as a, o as i, a as n, s as o, c as r, i as t };
//# sourceMappingURL=artifact-annotation-comment-0LjA3Ml-.js.map
