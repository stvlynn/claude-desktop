import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  C as t,
  S as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Cf as r,
  Kp as i,
  Sf as a,
  nv as o,
  tv as s,
  wf as c,
  xf as l,
  yf as u,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function d() {
  return m.size > 0;
}
function f({ hostId: e }) {
  let t = s.primaryRuntime;
  return t == null
    ? Promise.reject(Error(`Primary runtime is unavailable`))
    : Promise.resolve(t.cancelInstall({ hostId: e }));
}
function p({ hostId: e, request: t, release: n }) {
  let r = JSON.stringify({ hostId: e, release: n }),
    i = m.get(r);
  if (i != null) return i;
  let a = h.then(() => {
    let r = s.primaryRuntime;
    if (r == null) throw Error(`Primary runtime is unavailable`);
    return r[t]({ hostId: e, release: n });
  });
  return (
    m.set(r, a),
    (h = a.then(
      () => void 0,
      () => void 0,
    )),
    a
      .finally(() => {
        m.delete(r);
      })
      .catch(() => void 0),
    a
  );
}
var m,
  h,
  g = e(() => {
    (o(), (m = new Map()), (h = Promise.resolve()));
  }),
  _,
  v,
  y = e(() => {
    ((_ = `3026692602`), (v = `3502101112`));
  });
function b({ bundleVersion: e, durationMs: t, release: n, status: r }) {
  return { durationMs: t, release: w(n), status: T(r), ...D(e) };
}
function x({ diagnostics: e, durationMs: t }) {
  return {
    durationMs: t,
    problemCount: e.problems.length,
    status: e.installed
      ? u.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : u.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...D(e.bundleVersion),
  };
}
function S({ durationMs: e }) {
  return {
    durationMs: e,
    status: u.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED,
  };
}
function C({ bundleVersion: e, durationMs: t, status: n }) {
  return { durationMs: t, status: E(n), ...D(e) };
}
function w(e) {
  switch (e) {
    case `latest`:
      return c.CODEX_PRIMARY_RUNTIME_RELEASE_LATEST;
    case `latest-alpha`:
      return c.CODEX_PRIMARY_RUNTIME_RELEASE_LATEST_ALPHA;
  }
}
function T(e) {
  switch (e) {
    case `already-current`:
      return r.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return r.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_CANCELED;
    case `failed`:
      return r.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_FAILED;
    case `installed`:
      return r.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_INSTALLED;
  }
}
function E(e) {
  switch (e) {
    case `already-current`:
      return l.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return l.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case `failed`:
      return l.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case `installed`:
      return l.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
  }
}
function D(e) {
  return e == null || e.length === 0 ? {} : { bundleVersion: e };
}
var O = e(() => {
  i();
});
async function k({
  formatMessage: e,
  hostId: n,
  productLogger: r,
  release: i,
  toast: o,
}) {
  let s = Date.now(),
    c = o.info(
      e({
        id: `codex.command.installPrimaryRuntime.installing`,
        defaultMessage: `Installing Codex runtime…`,
        description: `Toast shown while the Codex runtime installer is running`,
      }),
      { duration: 120, hasCloseButton: !1, id: `install-primary-runtime` },
    );
  try {
    let t = await p({ hostId: n, release: i, request: `install` });
    if (
      (r.logProductEvent(
        a,
        b({
          bundleVersion: t.bundleVersion,
          durationMs: Date.now() - s,
          release: i,
          status: t.status,
        }),
      ),
      t.status === `already-current`)
    ) {
      o.info(
        e({
          id: `codex.command.installPrimaryRuntime.alreadyDownloaded`,
          defaultMessage: `Latest Codex runtime is already downloaded`,
          description: `Toast shown when the Codex runtime installer exits because the latest runtime is already downloaded`,
        }),
        { id: `install-primary-runtime` },
      );
      return;
    }
    o.success(
      e({
        id: `codex.command.installPrimaryRuntime.installed`,
        defaultMessage: `Codex runtime installed`,
        description: `Toast shown when the Codex runtime finishes installing`,
      }),
      { id: `install-primary-runtime` },
    );
  } catch (n) {
    if (A(n)) {
      (r.logProductEvent(
        a,
        b({
          bundleVersion: null,
          durationMs: Date.now() - s,
          release: i,
          status: `canceled`,
        }),
      ),
        o.info(
          e({
            id: `codex.command.installPrimaryRuntime.canceled`,
            defaultMessage: `Codex runtime install canceled`,
            description: `Toast shown when the Codex runtime installer is canceled`,
          }),
          { id: `install-primary-runtime` },
        ));
      return;
    }
    (t.error(`Error installing primary runtime`, {
      safe: { release: i },
      sensitive: { error: n },
    }),
      r.logProductEvent(
        a,
        b({
          bundleVersion: null,
          durationMs: Date.now() - s,
          release: i,
          status: `failed`,
        }),
      ),
      o.danger(
        e({
          id: `codex.command.installPrimaryRuntime.failed`,
          defaultMessage: `Couldn’t install Codex runtime`,
          description: `Toast shown when the Codex runtime installer fails`,
        }),
        { id: `install-primary-runtime` },
      ));
  } finally {
    c.close();
  }
}
function A(e) {
  return e instanceof Error || e instanceof DOMException
    ? e.name === `AbortError` || e.message.toLowerCase().includes(`aborted`)
    : !1;
}
var j = e(() => {
  (i(), n(), O(), g());
});
export {
  S as a,
  v as c,
  f as d,
  d as f,
  x as i,
  _ as l,
  p as m,
  A as n,
  C as o,
  g as p,
  k as r,
  O as s,
  j as t,
  y as u,
};
//# sourceMappingURL=app-initial~app-main~agent-settings-D9wGrgBN.js.map
