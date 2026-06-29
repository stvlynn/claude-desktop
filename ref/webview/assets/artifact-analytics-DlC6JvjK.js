import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Bl as t,
  Kp as n,
  Rl as r,
  au as i,
  cu as a,
  iu as o,
  lu as s,
  nu as c,
  ou as l,
  ru as u,
  su as d,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function f(e, n, { annotationModeEnabled: r, startSource: i }) {
  t(e, o, { ...g(n), annotationModeEnabled: r, startSource: v(i) });
}
function p(e, n) {
  t(e, s, { ...g(n) });
}
function m(e, n) {
  t(e, c, { ...g(n) });
}
function h(
  e,
  n,
  {
    annotationModeEnabled: r,
    annotationTargetKind: i,
    submitMode: a,
    submitSource: o,
  },
) {
  t(e, d, {
    ...g(n),
    annotationModeEnabled: r,
    annotationTargetKind: i,
    submitMode: y(a),
    submitSource: b(o),
  });
}
function g({ artifactTabId: e, artifactType: t, importKind: n, threadId: r }) {
  return {
    artifactKind: _(t),
    artifactImportKind: n,
    artifactTabId: e ?? void 0,
    threadId: r ?? void 0,
  };
}
function _(e) {
  switch (e) {
    case `document`:
      return a.CODEX_ARTIFACT_KIND_DOCUMENT;
    case `notebook`:
      return a.CODEX_ARTIFACT_KIND_NOTEBOOK;
    case `pdf`:
      return a.CODEX_ARTIFACT_KIND_PDF;
    case `slides`:
      return a.CODEX_ARTIFACT_KIND_PRESENTATION;
    case `spreadsheet`:
      return a.CODEX_ARTIFACT_KIND_SPREADSHEET;
  }
}
function v(e) {
  switch (e) {
    case `annotation_mode_pointer`:
      return u.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER;
    case `ask_codex_button`:
      return u.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON;
    case `ask_codex_shortcut`:
      return u.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT;
  }
}
function y(e) {
  switch (e) {
    case `direct`:
      return i.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT;
    case `saved`:
      return i.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED;
  }
}
function b(e) {
  switch (e) {
    case `button`:
      return l.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON;
    case `dictation`:
      return l.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION;
    case `keyboard`:
      return l.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD;
  }
}
var x = e(() => {
  (n(), r());
});
export { p as a, h as i, m as n, f as r, x as t };
//# sourceMappingURL=artifact-analytics-DlC6JvjK.js.map
