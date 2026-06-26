// Restored from ref/webview/assets/composer-footer-branch-switcher-GaN7fzcq.js
// Composer footer branch selector controls from the Codex webview bundle.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  AB as n,
  AN as r,
  Ao as i,
  BP as a,
  BV as o,
  DN as s,
  Ga as c,
  Gi as l,
  JV as u,
  ON as d,
  PB as f,
  TM as p,
  VP as m,
  Wa as h,
  Wl as g,
  Zi as ee,
  aM as te,
  fu as _,
  hM as v,
  iF as y,
  kN as b,
  ko as x,
  lF as ne,
  oM as S,
  ou as re,
  pM as ie,
  pu as ae,
  qV as C,
  qi as w,
  rF as T,
  sF as E,
  wM as oe,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
import {
  Hs as se,
  Vs as ce,
  on as D,
  zs as le,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js";
import {
  Al as ue,
  Kl as de,
  kl as fe,
  ql as pe,
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
import {
  at as O,
  ct as me,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js";
import {
  a as k,
  i as he,
  r as A,
} from "./app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js";
import {
  c as ge,
  l as _e,
  n as j,
  s as ve,
  t as M,
  u as ye,
} from "./git-branch-switcher-BokkKYIT.js";
import {
  initUseGitRecentBranchesChunk as be,
  useGitRecentBranches as xe,
} from "../utils/use-git-recent-branches";
function Se(e) {
  let {
    children,
    color = "bg-token-text-link-active-foreground",
    borderColor,
    badgeEnabled = true,
  } = e;
  if (!badgeEnabled) {
    let e;
    return <>{children}</>;
  }
  let l = !badgeEnabled && "hidden",
    u = a(
      "border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]",
      color,
      borderColor,
      l,
    );
  let d = <div className={u} />;
  return (
    <div className="relative">
      {children}
      {d}
    </div>
  );
}
var Ce,
  N,
  we = e(() => {
    Ce = C();
    m();
    N = o();
  });
function Te(e) {
  let {
      startingState,
      setStartingState,
      hostConfig,
      className,
      side = "top",
      gitRootOverride,
      branchSource,
    } = e,
    m = ne(),
    [g, ee] = L.useState(false),
    [_, v] = L.useState(false),
    [y, S] = L.useState(""),
    C = se(),
    T = {
      enabled: _,
    };
  let ce = me(T),
    D = gitRootOverride ?? ce,
    de = le(C),
    fe = de?.default_branch ?? "main",
    pe = de?.id ?? null,
    O = branchSource === "worktree" || !!gitRootOverride,
    k = ae(y, 300),
    A = (e) => {
      e && v(true);
      ee(e);
      e || S("");
    };
  let j = A,
    ve = !O && !!pe && g && !!k,
    M = {
      enabled: ve,
    };
  let {
      data,
      isFetching,
      error,
      hasNextPage,
      isFetchingNextPage,
      fetchNextPage,
      refetch,
    } = re(pe, k, M),
    P = O && _,
    F = {
      enabled: P,
    };
  let {
      data: _data,
      isLoading,
      refetch: _refetch,
    } = ue(D, hostConfig, "async_task_starting_state_dropdown", F),
    V = O && _ && !!D,
    H = {
      enabled: V,
    };
  let { data: __data } = ge(
      D,
      hostConfig,
      "async_task_starting_state_dropdown",
      H,
    ),
    {
      branches,
      defaultBranch,
      fetching,
      error: _error,
      refetch: __refetch,
    } = De({
      gitRoot: D,
      hostConfig,
      currentBranch: _data ?? "main",
      remoteDefaultBranch: fe,
      enabled: O && _,
    }),
    Ne = k.trim().toLowerCase(),
    K = Ne.length > 0,
    Pe = O && g && K,
    Fe = {
      cwd: D,
      hostConfig,
      operationSource: "async_task_starting_state_dropdown",
      query: k,
      enabled: Pe,
    };
  let {
      data: ___data,
      isFetching: _isFetching,
      error: __error,
      refetch: ___refetch,
    } = f(_e, Fe),
    Be = startingState.type === "branch" ? startingState.branchName : undefined,
    q = O ? defaultBranch : fe,
    Ve = O
      ? K
        ? ___data
        : branches
      : K
        ? data?.filter((e) => e.toLowerCase().includes(Ne))
        : undefined,
    He = !K || q.toLowerCase().includes(Ne),
    Ue = Ve?.filter((e) => e !== q),
    We = O ? (K ? _isFetching : fetching) : isFetching,
    Ge = O ? (K ? __error : _error) : error,
    Ke = O ? (K ? ___refetch : __refetch) : refetch,
    qe = !O && hasNextPage,
    Je = _data ?? q,
    Ye = startingState.type === "branch" ? startingState.branchName : Je,
    Xe =
      __data?.type === "success"
        ? __data.stagedCount + __data.unstagedCount + __data.untrackedCount > 0
        : false,
    Ze = O && Xe,
    Qe = startingState.type === "working-tree" && Xe,
    $e =
      startingState.type === "working-tree" ? (
        <E
          id="composer.remote.currentBranch"
          defaultMessage={"{branch} (current)"}
          description="Label for the current branch starting point in the composer"
          values={{
            branch: _data ?? q,
          }}
        />
      ) : (
        <E
          id="composer.remote.branch"
          defaultMessage={"{branch}"}
          description="Label for a specific branch starting point in the composer"
          values={{
            branch: startingState.branchName,
          }}
        />
      ),
    et = R.jsx(h, {
      electron: true,
      children: $e,
    });
  let tt = R.jsx(h, {
    browser: true,
    children: Ye,
  });
  let nt = (
      <>
        {et}
        {R.jsx(h, {
          extension: true,
          children: Qe ? (
            <E
              id="composer.remote.localWorkingTree"
              defaultMessage="Use local changes"
              description="Label for local working tree selection in remote composer"
            />
          ) : (
            Ye
          ),
        })}
        {tt}
      </>
    ),
    rt,
    it;
  rt = () => {
    g && (_refetch(), O && __refetch());
  };
  it = [g, _refetch, __refetch, O];
  L.useEffect(rt, it);
  let at = (
    <div className="flex flex-col gap-2">
      <E
        id="composer.remote.branchStartingPoint"
        defaultMessage="What branch should this task start from?"
        description="Section label for branch starting point selector"
      />
    </div>
  );
  let ot = (
    <E
      id="composer.startingState.footerCategory"
      defaultMessage="Starting from"
      description="Category label for the starting state control in the composer footer"
    />
  );
  let J = a("whitespace-nowrap", className);
  let st = startingState.type === "working-tree" && Xe,
    ct = R.jsx(x, {
      className: "icon-xs",
    });
  let lt = (
    <Se borderColor="border-token-side-bar-background" badgeEnabled={st}>
      {ct}
    </Se>
  );
  let Y = m.formatMessage({
    id: "codex.composer.searchBranches",
    defaultMessage: "Search branches",
    description: "Placeholder for the branch search input",
  });
  let ut = (event) => {
    S(event.currentTarget.value);
  };
  let X = (event) => {
    event.key === "Enter" && j(false);
  };
  let Z = R.jsx(w.SearchInput, {
    autoFocus: false,
    placeholder: Y,
    value: y,
    onChange: ut,
    onKeyDown: X,
  });
  let dt = Ze ? (
      <div className="flex flex-col">
        <Oe>
          <E
            id="composer.remote.localFileStateHeading"
            defaultMessage="Local file state"
            description="Section heading for local working tree selection"
          />
        </Oe>
        {R.jsx(w.Item, {
          LeftIcon: Ee,
          RightIcon: startingState.type === "working-tree" ? oe : undefined,
          SubText: Xe ? (
            <span className="text-token-description-foreground">
              <E
                id="composer.remote.currentEditsSuffix.useLocal"
                defaultMessage="with local code changes"
                description="Suffix text indicating the selection includes current edits"
              />
            </span>
          ) : undefined,
          onClick: () => {
            setStartingState({
              type: "working-tree",
            });
            j(false);
          },
          children: isLoading ? null : <>{_data ?? q}</>,
        })}
      </div>
    ) : null,
    Q = (
      <Oe>
        <E
          id="composer.remote.branchesSectionHeading"
          defaultMessage="Branches"
          description="Section heading for remote branch search results"
        />
      </Oe>
    );
  let ft =
      k && We ? (
        <div className="flex h-full items-center justify-center">
          {R.jsx(b, {
            className: "icon-xxs",
          })}
        </div>
      ) : k && Ge ? (
        <div className="flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground">
          <E
            id="composer.remote.errorLoadingBranches"
            defaultMessage="Error loading branches"
            description="Error message for remote starting point selector"
          />
          {R.jsx(s, {
            color: "ghost",
            size: "icon",
            className: "text-token-description-foreground",
            onClick: () => {
              Ke();
            },
            children: R.jsx(te, {
              className: "icon-xxs",
            }),
          })}
        </div>
      ) : (
        <div className="flex flex-col">
          {He &&
            R.jsx(w.Item, {
              LeftIcon: x,
              RightIcon: Be === q ? oe : undefined,
              onClick: () => {
                setStartingState({
                  type: "branch",
                  branchName: q,
                });
                j(false);
              },
              children: q,
            })}
          {Ue?.map((e) =>
            R.jsx(
              w.Item,
              {
                LeftIcon: x,
                RightIcon: e === Be ? oe : undefined,
                onClick: () => {
                  setStartingState({
                    type: "branch",
                    branchName: e,
                  });
                  j(false);
                },
                children: e,
              },
              e,
            ),
          )}
          {qe &&
            R.jsx(w.Item, {
              onClick: () => {
                isFetchingNextPage || fetchNextPage();
              },
              className: "w-full text-sm text-token-text-secondary",
              children: isFetchingNextPage ? (
                <E
                  id="composer.remote.loadingMoreBranches"
                  defaultMessage="Loading…"
                  description="Loading more branches"
                />
              ) : null,
            })}
        </div>
      ),
    $ = (
      <div className="vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto">
        {dt}
        {Q}
        {ft}
      </div>
    );
  let pt;
  return (
    (pt = (
      <div className="flex w-72 flex-col gap-1.5 overflow-hidden">
        {Z}
        {$}
      </div>
    )),
    R.jsx(l, {
      side: side,
      open: g,
      onOpenChange: j,
      triggerButton: R.jsx(ie, {
        tooltipContent: at,
        children: R.jsx(he, {
          categoryLabel: ot,
          className: J,
          collapse: "secondary",
          icon: lt,
          indicator: "collapsible-chevron",
          value: nt,
          valueClassName: "max-w-40",
        }),
      }),
      children: pt,
    })
  );
}
function Ee(e) {
  let { className } = e;
  return (
    <Se borderColor="border-token-side-bar-background">
      {R.jsx(x, {
        className,
      })}
    </Se>
  );
}
function De(e) {
  let { gitRoot, hostConfig, currentBranch, remoteDefaultBranch, enabled } = e,
    s = {
      enabled,
    };
  let { data, isLoading, isFetching, error, refetch } = pe(
      gitRoot,
      hostConfig,
      "async_task_starting_state_dropdown",
      s,
    ),
    p = {
      enabled,
    };
  let {
      data: _data,
      isLoading: _isLoading,
      isFetching: _isFetching,
      error: _error,
      refetch: _refetch,
    } = be(gitRoot, hostConfig, "async_task_starting_state_dropdown", p),
    _;
  {
    let e = [
        data,
        currentBranch,
        P({
          currentBranch,
          gitDefaultBranch: data,
          recentBranches: _data,
          remoteDefaultBranch,
        }),
        ...(_data ?? []),
      ],
      n = new Set();
    _ = [];
    e.forEach((item) => {
      F({
        branch: item,
        list: _,
        seen: n,
      });
    });
  }
  let v = _[0] ?? currentBranch ?? remoteDefaultBranch,
    y = isLoading || isFetching || _isLoading || _isFetching,
    b = error ?? _error,
    x = async () => {
      await Promise.all([refetch(), _refetch()]);
    };
  let ne = x;
  return {
    branches: _,
    defaultBranch: v,
    fetching: y,
    error: b,
    refetch: ne,
  };
}
function Oe(e) {
  let { className, children } = e,
    i = a(
      "text-sm text-token-description-foreground px-[var(--padding-row-x)] py-1",
      className,
    );
  return <div className={i}>{children}</div>;
}
function P({
  currentBranch,
  gitDefaultBranch,
  recentBranches,
  remoteDefaultBranch,
}) {
  return remoteDefaultBranch &&
    (remoteDefaultBranch === currentBranch ||
      remoteDefaultBranch === gitDefaultBranch ||
      recentBranches?.includes(remoteDefaultBranch))
    ? remoteDefaultBranch
    : null;
}
function F({ branch, list, seen }) {
  !branch || seen.has(branch) || (seen.add(branch), list.push(branch));
}
var I, L, R;
const z = e(() => {
  I = C();
  m();
  n();
  L = t(u(), 1);
  y();
  g();
  we();
  d();
  ee();
  r();
  v();
  c();
  ye();
  fe();
  de();
  xe();
  ve();
  i();
  p();
  S();
  O();
  _();
  ce();
  k();
  D();
  R = o();
});
function ke(e) {
  return <M {...e} renderStaticBranch={V} renderControl={B} />;
}
function B(e) {
  let { currentBranch, disabled, isPending, switchTooltipText } = e;
  return currentBranch == null
    ? null
    : U.jsx(ie, {
        tooltipContent: switchTooltipText,
        children: U.jsx(he, {
          categoryLabel: <E {...W.branchCategory} />,
          className: "px-0",
          collapse: "sm",
          disabled,
          icon: U.jsx(x, {
            className: "icon-xs",
          }),
          indicator: isPending ? "pending" : "collapsible-chevron",
          value: currentBranch,
          valueClassName: "max-w-40 text-sm",
        }),
      });
}
function V(e) {
  let { currentBranch } = e;
  return U.jsx(ie, {
    tooltipContent: currentBranch,
    children: (
      <A
        categoryLabel={<E {...W.branchCategory} />}
        className="text-token-description-foreground"
        collapse="sm"
        icon={U.jsx(x, {
          className: "icon-xs",
        })}
        value={currentBranch}
        valueClassName="max-w-40 text-sm"
      />
    ),
  });
}
var H, U, W;
const Ae = e(() => {
  H = C();
  y();
  v();
  i();
  j();
  k();
  U = o();
  W = T({
    branchCategory: {
      id: "composer.footer.branchCategory",
      defaultMessage: "Branch",
      description:
        "Category label for the branch control in the composer footer",
    },
  });
});
const ComposerFooterBranchBadge = Se;
const initComposerFooterBranchBadgeChunk = we;
const ComposerFooterBranchSwitcher = Te;
const initComposerFooterBranchSwitcherChunk = z;
const ComposerFooterInlineBranchSwitcher = ke;
const initComposerFooterInlineBranchSwitcherChunk = Ae;

export {
  ComposerFooterBranchBadge,
  ComposerFooterBranchSwitcher,
  ComposerFooterInlineBranchSwitcher,
  initComposerFooterBranchBadgeChunk,
  initComposerFooterBranchSwitcherChunk,
  initComposerFooterInlineBranchSwitcherChunk,
};
