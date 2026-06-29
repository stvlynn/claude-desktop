import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Ko as r,
  Vo as i,
  gc as a,
  lc as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  An as s,
  Dm as c,
  Em as l,
  Om as u,
  Tm as d,
  eo as f,
  gp as p,
  kn as m,
  mp as h,
  no as g,
  oo as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as v,
  Vy as y,
  zy as b,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Fn as x,
  In as S,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as C,
  R as w,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  a as T,
  o as E,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js";
import {
  J as D,
  d as O,
  f as k,
  q as A,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as j,
  t as M,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import { a as N, o as P, r as F } from "./cloud-preferences-B7VkZ8HI.js";
function I() {
  let e = (0, z.c)(8),
    t = r(n),
    i = y(),
    a = N(),
    o = P(),
    { canManageCreditSettings: s } = E(),
    l,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(b, {
        id: `settings.codeReview.title`,
        defaultMessage: `Code review`,
        description: `Title for automatic code review settings`,
      })),
      (u = (0, B.jsx)(b, {
        id: `settings.codeReview.subtitle`,
        defaultMessage: `Set up Codex to automatically review pull requests`,
        description: `Subtitle for automatic code review settings`,
      })),
      (e[0] = l),
      (e[1] = u))
    : ((l = e[0]), (u = e[1]));
  let f;
  return (
    e[2] !== s || e[3] !== i || e[4] !== a || e[5] !== t || e[6] !== o
      ? ((f = (0, B.jsx)(M, {
          title: l,
          subtitle: u,
          children:
            a.data == null
              ? (0, B.jsx)(O, {
                  children: (0, B.jsx)(O.Content, {
                    children: (0, B.jsx)(A, {
                      children: (0, B.jsx)(x, {
                        label: a.isError
                          ? (0, B.jsx)(b, {
                              id: `settings.codeReview.error`,
                              defaultMessage: `Unable to load code review settings`,
                              description: `Error state for code review settings`,
                            })
                          : (0, B.jsx)(b, {
                              id: `settings.codeReview.loading`,
                              defaultMessage: `Loading code review settings…`,
                              description: `Loading state for code review settings`,
                            }),
                        control: a.isError
                          ? (0, B.jsx)(d, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                a.refetch();
                              },
                              children: (0, B.jsx)(b, {
                                id: `settings.codeReview.retry`,
                                defaultMessage: `Retry`,
                                description: `Button to retry loading code review settings`,
                              }),
                            })
                          : (0, B.jsx)(c, { className: `icon-xs` }),
                      }),
                    }),
                  }),
                })
              : (0, B.jsx)(L, {
                  disabled: o.isPending,
                  showCreditPreference: s,
                  preferences: a.data,
                  onUpdate: (e) => {
                    o.mutate(e, {
                      onError: () => {
                        t.get(p).danger(
                          i.formatMessage({
                            id: `settings.codeReview.save.error`,
                            defaultMessage: `Unable to save code review settings`,
                            description: `Toast shown when saving code review settings fails`,
                          }),
                        );
                      },
                    });
                  },
                }),
        })),
        (e[2] = s),
        (e[3] = i),
        (e[4] = a),
        (e[5] = t),
        (e[6] = o),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
function L(e) {
  let t = (0, z.c)(46),
    { disabled: n, preferences: r, showCreditPreference: i, onUpdate: a } = e,
    o = y(),
    s = r.code_review_trigger_policy ?? V[0],
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, B.jsx)(O.Header, {
        title: (0, B.jsx)(b, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (t[0] = c))
    : (c = t[0]);
  let l, u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(b, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (u = (0, B.jsx)(b, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `Automatically review your pull requests in Codex-enabled repositories`,
        description: `Description for automatic code review preference`,
      })),
      (t[1] = l),
      (t[2] = u))
    : ((l = t[1]), (u = t[2]));
  let d;
  t[3] === o
    ? (d = t[4])
    : ((d = o.formatMessage({
        id: `settings.codeReview.personal.autoReview.aria`,
        defaultMessage: `Enable automatic code review`,
        description: `Accessible label for automatic code review`,
      })),
      (t[3] = o),
      (t[4] = d));
  let p = r.code_review_preference === `always`,
    h;
  t[5] === a
    ? (h = t[6])
    : ((h = (e) => {
        a({ code_review_preference: e ? `always` : `repo_default` });
      }),
      (t[5] = a),
      (t[6] = h));
  let _;
  t[7] !== n || t[8] !== d || t[9] !== p || t[10] !== h
    ? ((_ = (0, B.jsx)(x, {
        label: l,
        description: u,
        control: (0, B.jsx)(m, {
          ariaLabel: d,
          checked: p,
          disabled: n,
          onChange: h,
        }),
      })),
      (t[7] = n),
      (t[8] = d),
      (t[9] = p),
      (t[10] = h),
      (t[11] = _))
    : (_ = t[11]);
  let v, S;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, B.jsx)(b, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (S = (0, B.jsx)(b, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (t[12] = v),
      (t[13] = S))
    : ((v = t[12]), (S = t[13]));
  let C;
  t[14] === s ? (C = t[15]) : ((C = R(s)), (t[14] = s), (t[15] = C));
  let T;
  t[16] !== n || t[17] !== C
    ? ((T = (0, B.jsx)(w, { disabled: n, children: C })),
      (t[16] = n),
      (t[17] = C),
      (t[18] = T))
    : (T = t[18]);
  let E;
  t[19] === a
    ? (E = t[20])
    : ((E = V.map((e) =>
        (0, B.jsx)(
          g.Item,
          {
            onSelect: () => {
              a({ code_review_trigger_policy: e });
            },
            children: R(e),
          },
          e,
        ),
      )),
      (t[19] = a),
      (t[20] = E));
  let D;
  t[21] !== T || t[22] !== E
    ? ((D = (0, B.jsx)(x, {
        label: v,
        description: S,
        control: (0, B.jsx)(f, { triggerButton: T, children: E }),
      })),
      (t[21] = T),
      (t[22] = E),
      (t[23] = D))
    : (D = t[23]);
  let k, j;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, B.jsx)(b, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (j = (0, B.jsx)(b, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until Codex stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (t[24] = k),
      (t[25] = j))
    : ((k = t[24]), (j = t[25]));
  let M;
  t[26] === o
    ? (M = t[27])
    : ((M = o.formatMessage({
        id: `settings.codeReview.personal.exhaustive.aria`,
        defaultMessage: `Enable exhaustive code review`,
        description: `Accessible label for exhaustive code review`,
      })),
      (t[26] = o),
      (t[27] = M));
  let N;
  t[28] === a
    ? (N = t[29])
    : ((N = (e) => {
        a({ exhaustive_code_review: e });
      }),
      (t[28] = a),
      (t[29] = N));
  let P;
  t[30] !== n ||
  t[31] !== r.exhaustive_code_review ||
  t[32] !== M ||
  t[33] !== N
    ? ((P = (0, B.jsx)(x, {
        label: k,
        description: j,
        control: (0, B.jsx)(m, {
          ariaLabel: M,
          checked: r.exhaustive_code_review,
          disabled: n,
          onChange: N,
        }),
      })),
      (t[30] = n),
      (t[31] = r.exhaustive_code_review),
      (t[32] = M),
      (t[33] = N),
      (t[34] = P))
    : (P = t[34]);
  let F;
  t[35] !== n ||
  t[36] !== o ||
  t[37] !== a ||
  t[38] !== r.allow_credits_for_code_reviews ||
  t[39] !== i
    ? ((F = i
        ? (0, B.jsx)(x, {
            label: (0, B.jsx)(b, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, B.jsx)(b, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (0, B.jsx)(m, {
              ariaLabel: o.formatMessage({
                id: `settings.codeReview.personal.credits.aria`,
                defaultMessage: `Allow credits for code reviews`,
                description: `Accessible label for code review credits preference`,
              }),
              checked: r.allow_credits_for_code_reviews,
              disabled: n,
              onChange: (e) => {
                a({ allow_credits_for_code_reviews: e });
              },
            }),
          })
        : null),
      (t[35] = n),
      (t[36] = o),
      (t[37] = a),
      (t[38] = r.allow_credits_for_code_reviews),
      (t[39] = i),
      (t[40] = F))
    : (F = t[40]);
  let I;
  return (
    t[41] !== D || t[42] !== P || t[43] !== F || t[44] !== _
      ? ((I = (0, B.jsxs)(O, {
          children: [
            c,
            (0, B.jsx)(O.Content, {
              children: (0, B.jsxs)(A, { children: [_, D, P, F] }),
            }),
          ],
        })),
        (t[41] = D),
        (t[42] = P),
        (t[43] = F),
        (t[44] = _),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
function R(e) {
  switch (e) {
    case `pr_open`:
      return (0, B.jsx)(b, {
        id: `settings.codeReview.personal.trigger.prOpen`,
        defaultMessage: `On PR open`,
        description: `Code review trigger option for pull request creation`,
      });
    case `every_push`:
      return (0, B.jsx)(b, {
        id: `settings.codeReview.personal.trigger.everyPush`,
        defaultMessage: `On every push`,
        description: `Code review trigger option for every push`,
      });
    case `smart_detect`:
      return (0, B.jsx)(b, {
        id: `settings.codeReview.personal.trigger.smart`,
        defaultMessage: `Smart trigger`,
        description: `Experimental smart code review trigger option`,
      });
  }
}
var z, B, V;
e(() => {
  ((z = a()),
    i(),
    v(),
    l(),
    _(),
    u(),
    h(),
    s(),
    t(),
    j(),
    k(),
    S(),
    C(),
    D(),
    T(),
    F(),
    (B = o()),
    (V = [`pr_open`, `every_push`, `smart_detect`]));
})();
export { I as CodeReviewSettings };
//# sourceMappingURL=code-review-settings-z8ACadqs.js.map
