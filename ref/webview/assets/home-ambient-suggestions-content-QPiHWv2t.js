import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  Dt as r,
  E as i,
  Go as a,
  Gs as o,
  Js as s,
  Ko as c,
  O as l,
  Ua as u,
  Va as d,
  Vo as f,
  _c as p,
  c as m,
  ct as h,
  gc as g,
  lc as _,
  qo as v,
  qs as y,
  u as b,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Kp as x,
  qp as S,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Cs as C,
  Dd as w,
  Dp as ee,
  Ds as T,
  Ed as te,
  Ep as ne,
  Gl as E,
  If as D,
  Il as re,
  Jd as ie,
  Ku as O,
  Lf as ae,
  Mu as k,
  Nc as A,
  Nf as oe,
  Pf as j,
  Ss as se,
  Um as ce,
  Xu as M,
  _s as N,
  bl as P,
  bp as F,
  bs as le,
  cc as ue,
  ef as de,
  gl as fe,
  gp as pe,
  hh as me,
  hl as he,
  ic as ge,
  kc as _e,
  ks as ve,
  mh as I,
  mp as ye,
  op as be,
  qu as xe,
  sp as Se,
  vl as Ce,
  vs as we,
  ws as Te,
  xp as Ee,
  xs as De,
  yl as Oe,
  yp as ke,
  ys as Ae,
  zc as je,
  zl as Me,
  zm as Ne,
  zu as Pe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as Fe,
  Bl as L,
  Fa as Ie,
  Gd as Le,
  Gl as Re,
  Iy as R,
  Jd as ze,
  Jn as z,
  Kl as Be,
  Kp as Ve,
  Py as B,
  Qp as He,
  Rl as V,
  Ul as Ue,
  Ur as H,
  Vy as We,
  Wd as U,
  Wl as Ge,
  Wr as Ke,
  Yd as qe,
  Yn as Je,
  am as W,
  dc as Ye,
  fc as Xe,
  om as Ze,
  oy as Qe,
  ry as $e,
  sy as et,
  ty as tt,
  vg as nt,
  xa as rt,
  yg as G,
  zy as it,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Bf as at,
  Cp as K,
  Dp as ot,
  Ff as st,
  Gf as ct,
  Lf as lt,
  Mf as ut,
  Nf as q,
  Np as J,
  Pf as dt,
  Pp as ft,
  Rf as pt,
  Vf as mt,
  Yf as ht,
  am as gt,
  gp as _t,
  hp as vt,
  kp as yt,
  om as bt,
  wp as xt,
  zf as St,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  Ci as Ct,
  bi as wt,
  wi as Tt,
  xi as Et,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  r as Dt,
  t as Ot,
} from "./app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js";
import {
  E as kt,
  M as At,
  _ as jt,
  b as Mt,
  j as Nt,
  x as Pt,
} from "./app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js";
import {
  a as Ft,
  i as It,
  n as Lt,
  r as Rt,
  t as zt,
} from "./onboarding-plugin-suggestions-CPl54WAy.js";
import {
  n as Bt,
  t as Vt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~cldi24d6-B1D9-E0F.js";
import {
  i as Ht,
  n as Ut,
  o as Wt,
  r as Gt,
  t as Kt,
} from "./app-initial~app-main~onboarding-page~pending-request-item-panel~home-ambient-suggestions-content-B1ROILfQ.js";
import {
  i as qt,
  n as Jt,
} from "./ambient-suggestions-connected-apps-consent-BnmCW-mt.js";
import {
  i as Yt,
  n as Xt,
  r as Zt,
  t as Qt,
} from "./home-row-layout-CcGOwHDw.js";
import {
  b as $t,
  y as en,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-DHWk0JvV.js";
import {
  a as tn,
  d as nn,
  f as rn,
  i as an,
  l as on,
  o as sn,
  p as cn,
  r as ln,
  s as un,
  t as dn,
  u as fn,
} from "./home-onboarding-assistant-tutorial-card-CacqQsHt.js";
function pn({ sourceId: e, prompts: t }) {
  return t.slice(0, 3).map(({ appIds: t, prompt: n, title: r }, i) => ({
    id: `welcome-v2-role-${e}-${i + 1}`,
    title: r,
    description: r,
    prompt: n,
    appIds: t ?? [],
    status: `pending`,
    createdAtMs: 0,
    updatedAtMs: 0,
    analyticsType: `onboarding_starter`,
    homeAction: { type: `fill-composer` },
    showTooltip: !1,
    source: `default`,
  }));
}
function mn(e) {
  let t = (0, hn.c)(10),
    { enabled: n } = e,
    r = We(),
    i = s(kt),
    a = i.roles.length > 0 || i.workMode != null;
  if (!n || !a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { connectAppsRowLabel: null, suggestions: [] }), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o, c;
  if (t[1] !== r || t[2] !== i.roles) {
    let e = It({ roles: i.roles });
    o = r.formatMessage(e.connectAppsRowMessage);
    let n;
    (t[5] === r
      ? (n = t[6])
      : ((n = (e) => ({
          appIds: e.appIds,
          prompt: r.formatMessage(e.promptMessage),
          title: r.formatMessage(e.titleMessage),
        })),
        (t[5] = r),
        (t[6] = n)),
      (c = pn({ sourceId: e.role, prompts: e.suggestionPrompts.map(n) })),
      (t[1] = r),
      (t[2] = i.roles),
      (t[3] = o),
      (t[4] = c));
  } else ((o = t[3]), (c = t[4]));
  let l;
  return (
    t[7] !== o || t[8] !== c
      ? ((l = { connectAppsRowLabel: o, suggestions: c }),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var hn,
  gn = e(() => {
    ((hn = g()), o(), R(), Nt(), Ft());
  });
function _n(e, t) {
  return u({ selectedModel: e, selectedModelDisplayName: t });
}
function vn({ intl: e }) {
  return [
    yn({
      id: `default-life-sciences-blast`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.blast.title`,
        defaultMessage: `BLAST a sample protein sequence and return the top hits using the NCBI BLAST skill`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: Cn,
      skillNameToMention: Sn,
    }),
    yn({
      id: `default-life-sciences-lrrk2`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.lrrk2.title`,
        defaultMessage: `Assess LRRK2 as a Parkinson's target via parallel evidence lanes with subagents`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: wn,
    }),
    yn({
      id: `default-life-sciences-assay`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.assay.title`,
        defaultMessage: `Optimize a sample 96-well luminescence inhibition assay with CMPD-327`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: Tn,
    }),
  ];
}
function yn({ id: e, prompt: t, skillNameToMention: n, title: r }) {
  return {
    id: e,
    title: r,
    description: ``,
    prompt: t,
    appIds: [],
    status: `pending`,
    createdAtMs: bn,
    updatedAtMs: bn,
    homeAction: {
      type: `start-thread`,
      pluginNameToInstall: xn,
      skillNameToMention: n,
    },
    showTooltip: !1,
    source: `default`,
  };
}
var bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En = e(() => {
    (l(),
      (bn = 0),
      (xn = `life-science-research`),
      (Sn = `ncbi-blast-skill`),
      (Cn = `BLAST this protein sequence and return the top hits MQIFVKTLTGKTITLEVEPSDTIENVKAKIQDKEGIPPDQQRLIFAGKQLEDGRTLSDYNIQKESTLHLVLRLRGG`),
      (wn = [
        `Evaluate whether LRRK2 is a credible therapeutic target for Parkinson's disease.`,
        ``,
        `Spawn parallel subagents and treat each as an independent evidence lane. At minimum, create subagents for:`,
        `1. Human genetics - causal evidence, GWAS, rare variants, locus-to-gene`,
        `2. Disease biology - mechanism fit and pathway relevance`,
        `3. Expression context - tissue, cell type, disease-relevant expression`,
        `4. Direction of effect - whether inhibition or activation is supported`,
        `5. Safety / tolerability| - constraint, essentiality, on-target risk`,
        `6. Tractability - modality fit, structure, druggability`,
        `7. Clinical landscape - prior programs, competition, biomarker strategy`,
        ``,
        `Return:`,
        `- a short executive verdict: Prioritize / Conditional / Deprioritize`,
        `- a pillar-by-pillar scorecard with confidence and key caveats`,
        `- an overall target validation score`,
        `- the top risks / contradictions`,
        `- the most important next experiment or analysis`,
        ``,
        `Be skeptical, concise, and explicit about uncertainty. Separate causal evidence, mechanistic plausibility, and therapeutic actionability.`,
      ].join(`
`)),
      (Tn = [
        `You are a translational assay scientist optimizing a drug-discovery assay that is giving mixed or unstable results.`,
        ``,
        `The assay is a 96-well Ba/F3-EGFR cellular phospho-ERK luminescence inhibition assay with CMPD-327. Your job is to separate likely technical noise from real biology, recommend the smallest protocol changes that materially improve signal and reproducibility, and generate a compact, presentation-ready output.`,
        ``,
        `Generate local artifacts in the current working directory, including at minimum:`,
        ``,
        "1. `plate_qc_overview.png`",
        "   - a plate QC overview with clear `accept`, `salvage`, or `reject` labeling",
        `   - thresholds or annotations explaining why each plate was classified that way`,
        ``,
        "2. `dose_response_curves.png`",
        `   - dose-response curves for each variant`,
        `   - per-well or per-replicate points shown`,
        `   - included vs excluded wells clearly distinguished`,
        `   - control-normalized fitting`,
        `   - if a curve is not bracketed, label it clearly instead of forcing a precise IC50`,
        ``,
        `Also generate:`,
        `- a short optimization memo`,
        `- a small summary table of plate decisions`,
        `- a compact explanation of which wells were excluded and why`,
        `- any code needed to reproduce the figures`,
        ``,
        `Analysis Rules`,
        ``,
        `- Reconstruct well-level sample positions from the embedded payload.`,
        "- `layout.doses_nM` gives the dose order.",
        "- `layout.replicate_1_columns` and `layout.replicate_2_columns` map the two technical replicates to plate columns.",
        "- `layout.row_to_variant` maps plate rows to variants.",
        "- Edge wells are columns `1` and `12`.",
        "- For each plate and variant, `samples[variant]` contains:",
        "  - first array = replicate 1 net RLU values ordered by `doses_nM`",
        "  - second array = replicate 2 net RLU values ordered by `doses_nM`",
        "- `issue_tags` are hints about likely technical artifacts, not the final answer.",
        `- Use the provided plate QC table for overview and cross-checks, but derive the dose-response analysis from the reconstructed plate data and controls.`,
        `- Prefer the smallest protocol changes that address the dominant failure modes.`,
        ``,
        `Embedded Data`,
        ``,
        "```json",
        JSON.stringify(
          {
            assay: `96-well Ba/F3-EGFR cellular phospho-ERK luminescence inhibition assay with CMPD-327`,
            minimal_metadata: {
              incubation_hours: 20,
              plate_seal: `none`,
              dispense_method: `manual multichannel`,
              edge_wells_used: !0,
            },
            layout: {
              doses_nM: [3, 10, 30, 100, 300, 1e3],
              replicate_1_columns: [1, 2, 3, 4, 5, 6],
              replicate_2_columns: [7, 8, 9, 10, 11, 12],
              row_to_variant: {
                B: `EGFR_WT`,
                C: `EGFR_L858R`,
                D: `EGFR_T790M`,
                E: `EGFR_C797S`,
                F: `EGFR_T790M_C797S`,
                G: `EGFR_G796D`,
              },
              edge_columns: [1, 12],
            },
            plate_qc: [
              {
                plate_id: `P1`,
                z_prime: 0.717,
                dmso_cv_pct: 7.2,
                high_ctrl_cv_pct: 7.2,
                blank_mean_net_rlu: 695,
                matched_edge_bias_pct: 3.6,
                matched_column12_bias_pct: -0.6,
                mean_replicate_cv_pct: 4.7,
              },
              {
                plate_id: `P2`,
                z_prime: 0.165,
                dmso_cv_pct: 18.7,
                high_ctrl_cv_pct: 24.9,
                blank_mean_net_rlu: 688.2,
                matched_edge_bias_pct: 22.9,
                matched_column12_bias_pct: 25.2,
                mean_replicate_cv_pct: 9.6,
              },
              {
                plate_id: `P3`,
                z_prime: 0.537,
                dmso_cv_pct: 11.8,
                high_ctrl_cv_pct: 11.2,
                blank_mean_net_rlu: 1247.2,
                matched_edge_bias_pct: 18,
                matched_column12_bias_pct: 24.5,
                mean_replicate_cv_pct: 6.9,
              },
            ],
            operator_notes: [
              `Plate P2 sat on the bench slightly longer than intended before incubation.`,
              `Controls were concentrated on the plate edges for convenience.`,
              `A few wells on the far-right side of Plate P3 looked bubbly after dispense.`,
              `No adhesive seal was used during incubation.`,
              `The team reported that the assay worked overall, but plate-to-plate potency estimates felt unstable.`,
            ],
            plates: {
              P1: {
                controls: {
                  dmso: [
                    41017.09, 43330.81, 41105.2, 41429.35, 35220.52, 44887.32,
                    39000.94, 39128.58,
                  ],
                  high: [
                    4623.54, 5664.08, 5496.58, 5204.96, 5267.91, 5603.54,
                    5214.81, 5881.64,
                  ],
                  blank: [
                    737.12, 661.46, 721.15, 631.41, 664.53, 747.34, 654.22,
                    742.77,
                  ],
                },
                samples: {
                  EGFR_C797S: [
                    [
                      41590.79, 40553.03, 41739.13, 34010.45, 31512.27,
                      21531.92,
                    ],
                    [
                      41614.15, 40901.71, 41567.31, 40977.12, 29653.66,
                      19688.35,
                    ],
                  ],
                  EGFR_G796D: [
                    [53857.13, 41733.49, 39495.48, 34260.84, 29643.7, 20607.23],
                    [40493.83, 40806.44, 42736.9, 32553.45, 27329.13, 20182.03],
                  ],
                  EGFR_L858R: [
                    [43988.38, 38715.75, 27797.69, 15901.74, 8418.65, 6667.54],
                    [42580.36, 41604.11, 34354.3, 13803.6, 9051.5, 6790.57],
                  ],
                  EGFR_T790M: [
                    [37463.25, 38803.2, 38067.8, 32387.95, 22040.1, 12656.06],
                    [
                      39782.46, 40883.04, 37980.98, 31754.39, 21218.54,
                      12974.49,
                    ],
                  ],
                  EGFR_T790M_C797S: [
                    [
                      48038.04, 41774.41, 41114.25, 40758.59, 38480.96,
                      31834.89,
                    ],
                    [
                      45281.86, 41967.02, 48258.96, 39564.83, 36502.14,
                      35022.91,
                    ],
                  ],
                  EGFR_WT: [
                    [42876.82, 34480.13, 28111.53, 16843.69, 9983.17, 6811.41],
                    [38874.4, 33162.82, 31014.36, 16394.41, 10115.28, 6307.75],
                  ],
                },
              },
              P2: {
                controls: {
                  dmso: [
                    48418.99, 64590.46, 35278.71, 41390.47, 46064.47, 47572.78,
                    55895.87, 55889.24,
                  ],
                  high: [
                    10716.22, 10788.41, 7053.48, 7972.23, 5389.3, 11330.28,
                    8318.82, 7152.18,
                  ],
                  blank: [
                    721.5, 771.13, 659.86, 686.36, 669.08, 511.26, 639.52,
                    846.98,
                  ],
                },
                samples: {
                  EGFR_C797S: [
                    [
                      38574.72, 43461.38, 39128.36, 36761.35, 27852.97,
                      23431.67,
                    ],
                    [40963.35, 42436.03, 42424.25, 37080.9, 31891.8, 26102.99],
                  ],
                  EGFR_G796D: [
                    [50231.25, 49434.18, 36723.57, 34020, 29802.1, 17980.09],
                    [
                      43053.39, 44667.21, 41914.99, 40825.26, 31838.43,
                      25216.01,
                    ],
                  ],
                  EGFR_L858R: [
                    [60021.09, 37634.69, 28504.02, 18910.43, 9740.18, 6760.41],
                    [44291.58, 33634.08, 36257.87, 17437.72, 9742.21, 11826.52],
                  ],
                  EGFR_T790M: [
                    [
                      68314.34, 41230.19, 40462.34, 30385.04, 24452.28,
                      14006.37,
                    ],
                    [
                      43268.41, 46219.03, 47079.98, 33016.57, 24660.81,
                      13155.44,
                    ],
                  ],
                  EGFR_T790M_C797S: [
                    [
                      41757.58, 43150.48, 46354.72, 44522.97, 38118.19,
                      30115.76,
                    ],
                    [45284.3, 43650.54, 50205.14, 35024.61, 40422.36, 32616.33],
                  ],
                  EGFR_WT: [
                    [48204.59, 37119, 34611.38, 17924.73, 10830.35, 7632.01],
                    [38039.09, 46344.75, 31294.07, 17051.06, 10693, 9335.5],
                  ],
                },
                issue_tags: {
                  A1: `edge_evaporation`,
                  A2: `edge_evaporation`,
                  A3: `edge_evaporation`,
                  A4: `edge_evaporation`,
                  A5: `poor_high_control_separation`,
                  A6: `poor_high_control_separation`,
                  A7: `poor_high_control_separation`,
                  A8: `poor_high_control_separation`,
                  B1: `edge_evaporation`,
                  B12: `edge_evaporation`,
                  C1: `edge_evaporation`,
                  C12: `edge_evaporation`,
                  D1: `edge_evaporation`,
                  D12: `edge_evaporation`,
                  E1: `edge_evaporation`,
                  E12: `edge_evaporation`,
                  F1: `edge_evaporation`,
                  F12: `edge_evaporation`,
                  G1: `edge_evaporation`,
                  G12: `edge_evaporation`,
                  H1: `edge_evaporation`,
                  H2: `edge_evaporation`,
                  H3: `edge_evaporation`,
                  H4: `edge_evaporation`,
                  H5: `poor_high_control_separation`,
                  H6: `poor_high_control_separation`,
                  H7: `poor_high_control_separation`,
                  H8: `poor_high_control_separation`,
                },
              },
              P3: {
                controls: {
                  dmso: [
                    33858.4, 38195.88, 38303.09, 42099.59, 46993.51, 37565.92,
                    44793.34, 46928.69,
                  ],
                  high: [
                    5301.89, 5462.17, 5424.84, 5482.29, 5952.36, 6482.39,
                    4480.46, 6261.95,
                  ],
                  blank: [
                    754.17, 748.12, 714.92, 4891.26, 791.64, 619.76, 775.49,
                    682.55,
                  ],
                },
                samples: {
                  EGFR_C797S: [
                    [
                      41957.31, 39366.72, 37922.81, 39415.34, 29183.75,
                      18740.25,
                    ],
                    [
                      38538.26, 43838.55, 41072.36, 35808.42, 31697.34,
                      21736.73,
                    ],
                  ],
                  EGFR_G796D: [
                    [45479.5, 35037.2, 37989.65, 36674.59, 26748.64, 18770.23],
                    [40290.5, 37767.67, 39988.87, 37050.26, 31412.13, 27192.71],
                  ],
                  EGFR_L858R: [
                    [47788.96, 35644.59, 31172.32, 15737.21, 9075.43, 7044.8],
                    [43062.55, 39469.7, 29809.57, 15233.11, 9705.58, 7115.11],
                  ],
                  EGFR_T790M: [
                    [
                      50168.28, 37410.08, 37818.79, 31637.46, 22773.14,
                      13412.42,
                    ],
                    [44648.59, 33479.66, 41036.7, 30558.01, 20378.58, 12105.33],
                  ],
                  EGFR_T790M_C797S: [
                    [45229.87, 39646.31, 41546.66, 38687.5, 37753.54, 25545.69],
                    [
                      40799.43, 39841.43, 41583.87, 38148.46, 39858.74,
                      41118.53,
                    ],
                  ],
                  EGFR_WT: [
                    [43777.65, 36741.76, 27198.58, 15750.43, 11024.56, 6691.11],
                    [38627.31, 37238.9, 26932.74, 16015.78, 9686.14, 8952.54],
                  ],
                },
                issue_tags: {
                  A12: `blank_contamination`,
                  B12: `column12_dispense_issue;bubble_or_low_volume`,
                  C12: `column12_dispense_issue`,
                  D12: `column12_dispense_issue`,
                  E12: `column12_dispense_issue`,
                  F12: `column12_dispense_issue`,
                  G12: `column12_dispense_issue`,
                },
              },
            },
          },
          null,
          2,
        ),
        "```",
      ].join(`
`)));
  });
function Dn({
  dismissedDefaultSuggestionIds: e,
  generatedSuggestions: t,
  intl: n,
  onboardingSuggestions: r = [],
  selectedModel: i,
  selectedModelDisplayName: a = null,
}) {
  let o = t.map((e) => ({
    ...e,
    analyticsType: `generated`,
    homeAction: { type: `fill-composer` },
    source: `generated`,
  }));
  return r.some((e) => e.homeAction.type === `connect-plugin-onboarding`)
    ? r.slice(0, On)
    : (o.push(...r.filter((t) => !e.includes(t.id))),
      _n(i, a) && o.push(...vn({ intl: n }).filter((t) => !e.includes(t.id))),
      o.slice(0, On));
}
var On,
  kn = e(() => {
    (En(), (On = 3));
  });
function An(e) {
  return {
    source: e.source,
    action: e.homeAction.type,
    threadAction: `new-thread`,
  };
}
var jn = e(() => {});
function Mn(e) {
  let t = (0, In.c)(25),
    {
      suggestions: n,
      apps: r,
      activeSuggestionId: i,
      disabled: a,
      headline: o,
      trailingAction: s,
      onStartSuggestion: c,
      onDismissSuggestion: l,
      onShowSuggestionTooltip: u,
      showDismissActions: d,
    } = e,
    f = a === void 0 ? !1 : a,
    p = d === void 0 ? !0 : d,
    m = We(),
    h,
    g,
    _,
    v;
  if (
    t[0] !== i ||
    t[1] !== r ||
    t[2] !== f ||
    t[3] !== o ||
    t[4] !== m ||
    t[5] !== l ||
    t[6] !== u ||
    t[7] !== c ||
    t[8] !== p ||
    t[9] !== n ||
    t[10] !== s
  ) {
    let e = r == null ? void 0 : st(r);
    ((h = s != null && (o != null || n.length > 0)),
      (g = `mx-auto -my-1.5 flex w-full min-w-0 flex-col divide-y divide-token-border/70 select-none`),
      t[15] === o
        ? (_ = t[16])
        : ((_ =
            o == null
              ? null
              : (0, Y.jsx)(Nn, {
                  icon: (0, Y.jsx)(en, { className: `icon-xs shrink-0` }),
                  label: o,
                  labelClassName: `!overflow-visible !text-clip !whitespace-normal break-words`,
                })),
          (t[15] = o),
          (t[16] = _)),
      (v = n.map((t) => {
        let n = t.id === i,
          r = t.title.charAt(0).toLocaleUpperCase() + t.title.slice(1),
          a;
        for (let n of new Set(t.appIds)) {
          let t = T(n);
          if (t != null) {
            a = { appId: n, Icon: t };
            break;
          }
          let r = e?.get(n);
          if (r?.logoUrl != null || r?.logoUrlDark != null) {
            a = { appId: n, app: r };
            break;
          }
        }
        return (0, Y.jsx)(
          Nn,
          {
            dismissAction:
              p && l != null
                ? {
                    ariaLabel: m.formatMessage(
                      {
                        id: `home.ambientSuggestions.dismissSuggestion`,
                        defaultMessage: `Dismiss {title}`,
                        description: `Accessible label for dismissing an ambient suggestion row`,
                      },
                      { title: r },
                    ),
                    disabled: n,
                    onClick: () => {
                      l(t);
                    },
                  }
                : void 0,
            disabled: f || n,
            icon: Pn(a),
            label: r,
            onClick: () => {
              c(t);
            },
            onTooltipShown: () => {
              u?.(t);
            },
            tooltipContent:
              t.showTooltip === !1
                ? void 0
                : (0, Y.jsx)(Fn, { description: t.description }),
          },
          t.id,
        );
      })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = f),
      (t[3] = o),
      (t[4] = m),
      (t[5] = l),
      (t[6] = u),
      (t[7] = c),
      (t[8] = p),
      (t[9] = n),
      (t[10] = s),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v));
  } else ((h = t[11]), (g = t[12]), (_ = t[13]), (v = t[14]));
  let y;
  t[17] !== h || t[18] !== s
    ? ((y = h
        ? (0, Y.jsx)(Nn, {
            dismissAction: s.dismissAction,
            icon: s.icon,
            label: s.label,
            onClick: s.onClick,
          })
        : null),
      (t[17] = h),
      (t[18] = s),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== g || t[21] !== _ || t[22] !== v || t[23] !== y
      ? ((b = (0, Y.jsxs)(`div`, { className: g, children: [_, v, y] })),
        (t[20] = g),
        (t[21] = _),
        (t[22] = v),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
function Nn(e) {
  let t = (0, In.c)(21),
    {
      dismissAction: n,
      disabled: r,
      icon: i,
      label: a,
      labelClassName: o,
      onClick: s,
      onTooltipShown: c,
      tooltipContent: l,
    } = e,
    u = r === void 0 ? !1 : r,
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = (0, Y.jsx)(Xt, { "aria-hidden": `true`, children: i })),
      (t[0] = i),
      (t[1] = d));
  let f;
  t[2] !== a || t[3] !== o
    ? ((f = (0, Y.jsx)(Zt, { className: o, children: a })),
      (t[2] = a),
      (t[3] = o),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== d || t[6] !== f
    ? ((p = (0, Y.jsxs)(Qt, { children: [d, f] })),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] !== m || t[9] !== u || t[10] !== s
    ? ((h =
        s == null
          ? (0, Y.jsx)(`div`, {
              className: `flex min-w-0 flex-1 py-row-y pr-1 pl-3.5 text-left text-token-description-foreground`,
              children: m,
            })
          : (0, Y.jsx)(`button`, {
              type: `button`,
              className: `flex min-w-0 flex-1 cursor-interaction py-row-y pr-1 pl-3.5 text-left text-token-description-foreground outline-hidden enabled:group-focus-within/ambient-suggestion-row:text-token-foreground enabled:group-hover/ambient-suggestion-row:text-token-foreground disabled:cursor-default disabled:opacity-70`,
              disabled: u,
              onClick: s,
              children: m,
            })),
      (t[8] = m),
      (t[9] = u),
      (t[10] = s),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _;
  t[12] !== c || t[13] !== g || t[14] !== l
    ? ((_ =
        l == null
          ? g
          : (0, Y.jsx)(F, {
              children: (0, Y.jsx)(ke, {
                delayDuration: Ln,
                side: `top`,
                align: `center`,
                onOpenChange: (e) => {
                  e && c?.();
                },
                tooltipBodyClassName: `text-token-text-primary leading-5`,
                tooltipMaxWidth: `min(420px, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
                tooltipContent: l,
                children: g,
              }),
            })),
      (t[12] = c),
      (t[13] = g),
      (t[14] = l),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === n
    ? (v = t[17])
    : ((v =
        n == null
          ? null
          : (0, Y.jsx)(`button`, {
              type: `button`,
              className: I(
                `no-drag mr-0.5 flex size-4 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground opacity-0 select-none group-hover/ambient-suggestion-row:opacity-100 hover:bg-token-list-hover-background hover:opacity-100 focus:opacity-100 focus:outline-none`,
                n.disabled === !0 && `!opacity-40`,
              ),
              "aria-label": n.ariaLabel,
              disabled: n.disabled,
              onClick: n.onClick,
              children: (0, Y.jsx)(be, { className: `icon-2xs` }),
            })),
      (t[16] = n),
      (t[17] = v));
  let y;
  return (
    t[18] !== _ || t[19] !== v
      ? ((y = (0, Y.jsxs)(`div`, {
          className: `group/ambient-suggestion-row flex min-w-0 items-center py-1.5`,
          children: [_, v],
        })),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
function Pn(e) {
  return e == null
    ? (0, Y.jsx)(x, { className: `icon-xs shrink-0` })
    : e.Icon == null
      ? (0, Y.jsx)(C, {
          alt: ``,
          className: I(`icon-xs shrink-0 object-contain`, zn),
          logoUrl: e.app?.logoUrl,
          logoDarkUrl: e.app?.logoUrlDark,
          fallback: (0, Y.jsx)(x, { className: `icon-xs shrink-0` }),
        })
      : (0, Y.jsx)(e.Icon, {
          className: I(
            `icon-xs shrink-0 object-contain`,
            Rn.has(e.appId) && zn,
          ),
        });
}
function Fn({ description: e }) {
  let t = e.split(/(`[^`]+`)/g);
  return t.length === 1
    ? e
    : t.map((e, t) =>
        e.startsWith("`") && e.endsWith("`")
          ? (0, Y.jsx)(
              `code`,
              {
                className: `inline rounded-sm border border-token-border bg-token-foreground/5 px-1 font-mono text-[10px] leading-[14px] text-token-text-secondary`,
                children: e.slice(1, -1),
              },
              t,
            )
          : e,
      );
}
var In,
  Y,
  Ln,
  Rn,
  zn,
  Bn = e(() => {
    ((In = g()),
      me(),
      R(),
      ve(),
      Te(),
      Ee(),
      Yt(),
      S(),
      $t(),
      Se(),
      lt(),
      (Y = _()),
      (Ln = 750),
      (Rn = new Set([
        `figma`,
        `file-csv`,
        `file-pdf`,
        `file-presentation`,
        `file-spreadsheet`,
        `file-word-document`,
        `gmail`,
        `google-calendar`,
        `google-drive`,
        `slack`,
      ])),
      (zn = `opacity-85`));
  });
function Vn(e) {
  let t = (0, Un.c)(31),
    {
      composerMode: n,
      suggestions: r,
      leadingCard: a,
      appByAmbientSuggestionAppId: o,
      disabled: s,
      dismissAction: l,
      hostId: u,
    } = e,
    d = s === void 0 ? !1 : s,
    f = c(i),
    { openPluginInstall: p } = fe(),
    m = r.length + (a == null ? 0 : 1),
    h = m >= 2 && `[@container_(min-width:212px)]:grid-cols-2`,
    g = m === 3 && `[@container_(min-width:324px)]:grid-cols-3`,
    _ = m >= 4 && `[@container_(min-width:436px)]:grid-cols-4`,
    v;
  t[0] !== h || t[1] !== g || t[2] !== _
    ? ((v = I(
        `peer/onboarding-plugin-tiles grid grid-cols-1 items-stretch gap-3`,
        h,
        g,
        _,
      )),
      (t[0] = h),
      (t[1] = g),
      (t[2] = _),
      (t[3] = v))
    : (v = t[3]);
  let y;
  if (
    t[4] !== o ||
    t[5] !== n ||
    t[6] !== d ||
    t[7] !== u ||
    t[8] !== p ||
    t[9] !== f ||
    t[10] !== r
  ) {
    let e;
    (t[12] !== o ||
    t[13] !== n ||
    t[14] !== d ||
    t[15] !== u ||
    t[16] !== p ||
    t[17] !== f
      ? ((e = (e, t) => {
          let r =
            e.homeAction.plugin.plugin.installed &&
            e.homeAction.plugin.plugin.enabled;
          return (0, X.jsxs)(
            `button`,
            {
              type: `button`,
              className: I(
                `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
                r || d
                  ? `cursor-default`
                  : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
                d && !r && `opacity-70`,
                !r && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
              ),
              disabled: d || r,
              onClick: () => {
                (L(f, ze, {
                  promptId: e.id,
                  promptIndex: t,
                  promptType: e.analyticsType ?? e.source,
                  mode: n,
                }),
                  L(f, Ue, An(e)),
                  p(u, e.homeAction.plugin, {
                    postInstallComposerPrefill: e.prompt,
                  }));
              },
              children: [
                (0, X.jsx)(`span`, {
                  className: I(
                    `flex h-5 shrink-0 items-center`,
                    r && `opacity-30`,
                  ),
                  children: Hn(e, o),
                }),
                (0, X.jsxs)(`span`, {
                  className: I(
                    `flex w-full min-w-0 flex-col gap-1 text-base`,
                    r && `opacity-30`,
                  ),
                  children: [
                    (0, X.jsx)(`span`, {
                      className: `line-clamp-1 leading-[18px] text-token-text-primary`,
                      children: e.title,
                    }),
                    (0, X.jsx)(`span`, {
                      className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
                      children: e.description,
                    }),
                  ],
                }),
                r
                  ? (0, X.jsx)(De, {
                      "aria-hidden": `true`,
                      className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
                    })
                  : null,
              ],
            },
            e.id,
          );
        }),
        (t[12] = o),
        (t[13] = n),
        (t[14] = d),
        (t[15] = u),
        (t[16] = p),
        (t[17] = f),
        (t[18] = e))
      : (e = t[18]),
      (y = r.map(e)),
      (t[4] = o),
      (t[5] = n),
      (t[6] = d),
      (t[7] = u),
      (t[8] = p),
      (t[9] = f),
      (t[10] = r),
      (t[11] = y));
  } else y = t[11];
  let b;
  t[19] !== a || t[20] !== v || t[21] !== y
    ? ((b = (0, X.jsxs)(`div`, { className: v, children: [a, y] })),
      (t[19] = a),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b))
    : (b = t[22]);
  let x;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(be, { className: `icon-2xs` })), (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] !== l.ariaLabel || t[25] !== l.disabled || t[26] !== l.onClick
    ? ((S = (0, X.jsx)(`button`, {
        type: `button`,
        "aria-label": l.ariaLabel,
        className: `absolute top-4 right-0 cursor-interaction rounded-xl p-1 text-token-text-tertiary opacity-0 peer-hover/onboarding-plugin-tiles:opacity-100 hover:bg-token-foreground/5 hover:text-token-text-primary hover:opacity-100 focus-visible:opacity-100`,
        disabled: l.disabled,
        onClick: l.onClick,
        children: x,
      })),
      (t[24] = l.ariaLabel),
      (t[25] = l.disabled),
      (t[26] = l.onClick),
      (t[27] = S))
    : (S = t[27]);
  let C;
  return (
    t[28] !== b || t[29] !== S
      ? ((C = (0, X.jsxs)(`div`, {
          className: `@container relative mx-auto w-full max-w-3xl min-w-0 px-8 pt-4 select-none`,
          children: [b, S],
        })),
        (t[28] = b),
        (t[29] = S),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function Hn(e, t) {
  let n = e.homeAction.plugin.plugin.name,
    r = T(n);
  if (r != null)
    return (0, X.jsx)(r, {
      "aria-hidden": !0,
      className: `size-5 shrink-0 object-contain`,
    });
  let i = e.homeAction.plugin.logoPath,
    a = e.homeAction.plugin.logoDarkPath;
  if (i != null || a != null)
    return (0, X.jsx)(C, {
      alt: ``,
      className: `size-5 shrink-0 object-contain`,
      logoDarkUrl: a,
      logoUrl: i,
      fallback: (0, X.jsx)(`span`, {
        className: `size-5 shrink-0 object-contain`,
      }),
    });
  let o = t?.get(dt(n));
  return (0, X.jsx)(C, {
    alt: ``,
    appInfo: o,
    className: `size-5 shrink-0 object-contain`,
    fallback: (0, X.jsx)(`span`, {
      className: `block size-5 rounded bg-token-foreground/15`,
    }),
  });
}
var Un,
  X,
  Wn = e(() => {
    ((Un = g()),
      Ve(),
      me(),
      f(),
      ve(),
      Te(),
      se(),
      Se(),
      he(),
      V(),
      n(),
      lt(),
      jn(),
      (X = _()));
  });
function Gn({ intl: e, mailProvider: t = `other`, plugins: n }) {
  return tr.map((r) => ({
    id: r.id,
    starterPrompt: e.formatMessage(r.starterPrompt),
    suggestions: r.suggestions.map((r) =>
      Kn({ intl: e, mailProvider: t, plugins: n, suggestion: r }),
    ),
    title: e.formatMessage(r.title),
  }));
}
function Kn({ intl: e, mailProvider: t, plugins: n, suggestion: r }) {
  let i = e.formatMessage(r.title),
    a = $n[t];
  return {
    id: r.id,
    title: i,
    description: i,
    prompt: e.formatMessage(
      r.prompt,
      r.artifact == null ? a : { ...a, artifact: Jn(r.artifact) },
    ),
    appIds: r.appIds.map((e) => Ht(e, t)),
    status: `pending`,
    createdAtMs: 0,
    updatedAtMs: 0,
    analyticsType: `new_chat_page_suggestion`,
    homeAction: qn({
      artifact: r.artifact,
      pluginKey: Ht(r.pluginKey, t),
      plugins: n,
    }),
    showTooltip: !1,
    source: `default`,
  };
}
function qn({ artifact: e, pluginKey: t, plugins: n }) {
  let r = n.find((e) => e.plugin.id === t || e.plugin.name === t);
  return e != null || r == null || (r.plugin.installed && r.plugin.enabled)
    ? { type: `fill-composer` }
    : { type: `connect-plugin-onboarding`, plugin: r };
}
function Jn({ label: e, pluginId: t }) {
  return Ke(`@${e}`, k(t));
}
var Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr = e(() => {
    (R(),
      Pe(),
      H(),
      Wt(),
      (Yn = `presentations@openai-primary-runtime`),
      (Xn = `documents@openai-primary-runtime`),
      (Zn = `spreadsheets@openai-primary-runtime`),
      (Qn = `sites@openai-bundled`),
      ($n = {
        google: {
          calendarApp: `Google Calendar`,
          chatApp: `Slack`,
          fileApp: `Google Drive`,
          mailApp: `Gmail`,
        },
        microsoft: {
          calendarApp: `Outlook Calendar`,
          chatApp: `Microsoft Teams`,
          fileApp: `SharePoint`,
          mailApp: `Outlook`,
        },
        other: {
          calendarApp: `Google Calendar or Outlook Calendar`,
          chatApp: `Slack or Microsoft Teams`,
          fileApp: `Google Drive or SharePoint`,
          mailApp: `Gmail or Outlook`,
        },
      }),
      (er = B({
        id: `home.newChatPageSuggestions.create.prompt`,
        defaultMessage: `Create a `,
        description: `Composer prefill for creation tasks`,
      })),
      (tr = [
        {
          id: `create`,
          starterPrompt: er,
          title: B({
            id: `home.newChatPageSuggestions.create`,
            defaultMessage: `Create a file or site`,
            description: `Top-level new chat suggestion for creation tasks`,
          }),
          suggestions: [
            {
              appIds: [`file-word-document`],
              artifact: { label: `Document`, pluginId: Xn },
              id: `new-chat-page-create-document`,
              pluginKey: Xn,
              prompt: B({
                id: `home.newChatPageSuggestions.createDocument.prompt`,
                defaultMessage: `Create a {artifact} about `,
                description: `Composer prefill for creating a document`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.createDocument`,
                defaultMessage: `Create a document`,
                description: `New chat follow-up suggestion for creating a document`,
              }),
            },
            {
              appIds: [`file-spreadsheet`],
              artifact: { label: `Spreadsheet`, pluginId: Zn },
              id: `new-chat-page-create-spreadsheet`,
              pluginKey: Zn,
              prompt: B({
                id: `home.newChatPageSuggestions.createSpreadsheet.prompt`,
                defaultMessage: `Create a {artifact} for `,
                description: `Composer prefill for creating a spreadsheet`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.createSpreadsheet`,
                defaultMessage: `Create a spreadsheet`,
                description: `New chat follow-up suggestion for creating a spreadsheet`,
              }),
            },
            {
              appIds: [`file-presentation`],
              artifact: { label: `Presentation`, pluginId: Yn },
              id: `new-chat-page-create-presentation`,
              pluginKey: Yn,
              prompt: B({
                id: `home.newChatPageSuggestions.createPresentation.prompt`,
                defaultMessage: `Create a {artifact} about `,
                description: `Composer prefill for creating a presentation`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.createPresentation`,
                defaultMessage: `Create a presentation`,
                description: `New chat follow-up suggestion for creating a presentation`,
              }),
            },
            {
              appIds: [`sites`],
              artifact: { label: `Site`, pluginId: Qn },
              id: `new-chat-page-create-site`,
              pluginKey: Qn,
              prompt: B({
                id: `home.newChatPageSuggestions.createSite.prompt`,
                defaultMessage: `Create a {artifact} for `,
                description: `Composer prefill for creating a site`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.createSite`,
                defaultMessage: `Create a site`,
                description: `New chat follow-up suggestion for creating a site`,
              }),
            },
          ],
        },
        {
          id: `research`,
          starterPrompt: B({
            id: `home.newChatPageSuggestions.research.prompt`,
            defaultMessage: `Research `,
            description: `Composer prefill for research tasks`,
          }),
          title: B({
            id: `home.newChatPageSuggestions.research`,
            defaultMessage: `Research and plan`,
            description: `Top-level new chat suggestion for research tasks`,
          }),
          suggestions: [
            {
              appIds: [`google-drive`, `slack`, `gmail`, `notion`],
              id: `new-chat-page-research-topic`,
              pluginKey: `google-drive`,
              prompt: B({
                id: `home.newChatPageSuggestions.researchTopic.prompt`,
                defaultMessage: `Research a topic I choose using files in {fileApp}, messages in {chatApp}, emails in {mailApp}, or docs in Notion. If I have not named one, ask which topic.`,
                description: `Composer prefill for researching a topic`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.researchTopic`,
                defaultMessage: `Research a topic…`,
                description: `New chat follow-up suggestion for researching a topic`,
              }),
            },
            {
              appIds: [`google-drive`, `slack`, `notion`],
              id: `new-chat-page-research-options-and-tradeoffs`,
              pluginKey: `google-drive`,
              prompt: B({
                id: `home.newChatPageSuggestions.researchOptionsAndTradeoffs.prompt`,
                defaultMessage: `Research options and tradeoffs for a choice I name using files in {fileApp}, messages in {chatApp}, docs in Notion, or files in Dropbox. If I have not named one, ask which choice.`,
                description: `Composer prefill for researching options and tradeoffs`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.researchOptionsAndTradeoffs`,
                defaultMessage: `Research options and tradeoffs…`,
                description: `New chat follow-up suggestion for researching options and tradeoffs`,
              }),
            },
            {
              appIds: [`google-calendar`, `gmail`, `slack`, `google-drive`],
              id: `new-chat-page-plan-upcoming-meeting`,
              pluginKey: `google-calendar`,
              prompt: B({
                id: `home.newChatPageSuggestions.planUpcomingMeeting.prompt`,
                defaultMessage: `Plan for an upcoming meeting I choose using {calendarApp}, emails in {mailApp}, messages in {chatApp}, or files in {fileApp}. If I have not named one, ask which meeting.`,
                description: `Composer prefill for planning an upcoming meeting`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.planUpcomingMeeting`,
                defaultMessage: `Plan for an upcoming meeting…`,
                description: `New chat follow-up suggestion for planning an upcoming meeting`,
              }),
            },
            {
              appIds: [`google-drive`, `slack`, `notion`],
              id: `new-chat-page-plan-strategy-or-roadmap`,
              pluginKey: `google-drive`,
              prompt: B({
                id: `home.newChatPageSuggestions.planStrategyOrRoadmap.prompt`,
                defaultMessage: `Plan a strategy or roadmap I choose using files in {fileApp}, messages in {chatApp}, docs in Notion, or customer data in Salesforce. If I have not named one, ask which strategy or roadmap.`,
                description: `Composer prefill for planning a strategy or roadmap`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.planStrategyOrRoadmap`,
                defaultMessage: `Plan a strategy or roadmap…`,
                description: `New chat follow-up suggestion for planning a strategy or roadmap`,
              }),
            },
          ],
        },
        {
          id: `briefing`,
          starterPrompt: B({
            id: `home.newChatPageSuggestions.briefing.prompt`,
            defaultMessage: `Brief me on `,
            description: `Composer prefill for briefing tasks`,
          }),
          title: B({
            id: `home.newChatPageSuggestions.briefing`,
            defaultMessage: `Give me a briefing`,
            description: `Top-level new chat suggestion for briefing tasks`,
          }),
          suggestions: [
            {
              appIds: [`slack`, `google-drive`, `notion`],
              id: `new-chat-page-brief-project`,
              pluginKey: `slack`,
              prompt: B({
                id: `home.newChatPageSuggestions.briefProject.prompt`,
                defaultMessage: `Brief me on a project I choose from messages in {chatApp}, files in {fileApp}, docs in Notion, or files in Dropbox. If I have not named one, ask which project.`,
                description: `Composer prefill for briefing on a project`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.briefProject`,
                defaultMessage: `Brief me on a project…`,
                description: `New chat follow-up suggestion for briefing on a project`,
              }),
            },
            {
              appIds: [`slack`, `google-drive`, `gmail`, `notion`],
              id: `new-chat-page-brief-recent-decisions`,
              pluginKey: `slack`,
              prompt: B({
                id: `home.newChatPageSuggestions.briefRecentDecisions.prompt`,
                defaultMessage: `Brief me on recent decisions from messages in {chatApp}, files in {fileApp}, emails in {mailApp}, or docs in Notion. If I have not named a scope, ask what to cover.`,
                description: `Composer prefill for briefing on recent decisions`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.briefRecentDecisions`,
                defaultMessage: `Brief me on recent decisions…`,
                description: `New chat follow-up suggestion for briefing on recent decisions`,
              }),
            },
            {
              appIds: [`google-drive`, `slack`, `notion`, `gmail`],
              id: `new-chat-page-brief-stakeholder-updates`,
              pluginKey: `google-drive`,
              prompt: B({
                id: `home.newChatPageSuggestions.briefStakeholderUpdates.prompt`,
                defaultMessage: `Brief me on key updates for stakeholders from files in {fileApp}, messages in {chatApp}, docs in Notion, or emails in {mailApp}. If I have not named a scope, ask what to cover.`,
                description: `Composer prefill for briefing on stakeholder updates`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.briefStakeholderUpdates`,
                defaultMessage: `Brief me on key updates for stakeholders…`,
                description: `New chat follow-up suggestion for briefing on stakeholder updates`,
              }),
            },
            {
              appIds: [`gmail`, `slack`, `google-drive`],
              id: `new-chat-page-brief-customer-feedback`,
              pluginKey: `gmail`,
              prompt: B({
                id: `home.newChatPageSuggestions.briefCustomerFeedback.prompt`,
                defaultMessage: `Brief me on customer feedback from emails in {mailApp}, messages in {chatApp}, Salesforce, or files in {fileApp}. If I have not named a scope, ask what to cover.`,
                description: `Composer prefill for briefing on customer feedback`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.briefCustomerFeedback`,
                defaultMessage: `Brief me on customer feedback…`,
                description: `New chat follow-up suggestion for briefing on customer feedback`,
              }),
            },
          ],
        },
        {
          id: `automate`,
          starterPrompt: B({
            id: `home.newChatPageSuggestions.automate.prompt`,
            defaultMessage: `Schedule `,
            description: `Composer prefill for scheduled tasks`,
          }),
          title: B({
            id: `home.newChatPageSuggestions.automate`,
            defaultMessage: `Schedule ongoing work`,
            description: `Top-level new chat suggestion for scheduled tasks`,
          }),
          suggestions: [
            {
              appIds: [`google-drive`, `slack`, `gmail`],
              id: `new-chat-page-automate-recurring-report`,
              pluginKey: `google-drive`,
              prompt: B({
                id: `home.newChatPageSuggestions.automateRecurringReport.prompt`,
                defaultMessage: `Schedule a recurring report I choose from files in {fileApp}, messages in {chatApp}, emails in {mailApp}, or Salesforce data. If I have not named one, ask which report and schedule.`,
                description: `Composer prefill for scheduling a recurring report`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.automateRecurringReport`,
                defaultMessage: `Schedule a recurring report`,
                description: `New chat follow-up suggestion for scheduling a recurring report`,
              }),
            },
            {
              appIds: [`google-calendar`, `gmail`, `slack`, `google-drive`],
              id: `new-chat-page-automate-morning-prep`,
              pluginKey: `google-calendar`,
              prompt: B({
                id: `home.newChatPageSuggestions.automateMorningPrep.prompt`,
                defaultMessage: `Schedule my morning prep with {calendarApp}, emails in {mailApp}, messages in {chatApp}, or files in {fileApp}.`,
                description: `Composer prefill for scheduling morning prep`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.automateMorningPrep`,
                defaultMessage: `Schedule my morning prep`,
                description: `New chat follow-up suggestion for morning prep`,
              }),
            },
            {
              appIds: [`gmail`, `slack`, `notion`],
              id: `new-chat-page-automate-triage`,
              pluginKey: `gmail`,
              prompt: B({
                id: `home.newChatPageSuggestions.automateTriage.prompt`,
                defaultMessage: `Schedule triage of incoming emails in {mailApp}, incoming messages in {chatApp}, new requests in Notion, or new Salesforce records. Ask which queue and rules to use.`,
                description: `Composer prefill for scheduling triage`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.automateTriage`,
                defaultMessage: `Schedule triage…`,
                description: `New chat follow-up suggestion for scheduling triage`,
              }),
            },
            {
              appIds: [`slack`, `gmail`, `google-calendar`, `google-drive`],
              id: `new-chat-page-monitor-changes`,
              pluginKey: `slack`,
              prompt: B({
                id: `home.newChatPageSuggestions.monitorChanges.prompt`,
                defaultMessage: `Monitor important changes in {chatApp} messages, {mailApp} emails, {calendarApp}, or {fileApp} files. Ask which changes matter.`,
                description: `Composer prefill for monitoring important changes`,
              }),
              title: B({
                id: `home.newChatPageSuggestions.monitorChanges`,
                defaultMessage: `Monitor important changes…`,
                description: `New chat follow-up suggestion for monitoring important changes`,
              }),
            },
          ],
        },
      ]));
  });
function rr(e) {
  let t = (0, dr.c)(62),
    {
      activeSuggestionId: n,
      apps: r,
      categories: a,
      composerPrompt: o,
      disabled: s,
      initialCategoryId: l,
      onDismiss: u,
      onBackToCategories: d,
      onSelectCategory: f,
      onStartSuggestion: p,
    } = e,
    m = s === void 0 ? !1 : s,
    h = l === void 0 ? null : l,
    g = c(i),
    _ = We(),
    [v, y] = (0, Z.useState)(h),
    [b, x] = (0, Z.useState)(null),
    S,
    C;
  t[0] !== a || t[1] !== o || t[2] !== v
    ? ((S = a.find((e) => e.id === v) ?? null),
      (C = S != null && cr(o, S.starterPrompt)),
      (t[0] = a),
      (t[1] = o),
      (t[2] = v),
      (t[3] = S),
      (t[4] = C))
    : ((S = t[3]), (C = t[4]));
  let w = C,
    ee = S != null && b?.id === S.id && b.previousPrompt === o;
  S != null &&
    (w ? b != null && x(null) : ee || (y(null), b != null && x(null)));
  let T = S != null && (w || ee) ? S : null,
    te;
  t[5] === _
    ? (te = t[6])
    : ((te = _.formatMessage({
        id: `home.newChatPageSuggestions.dismiss`,
        defaultMessage: `Dismiss new chat suggestions`,
        description: `Accessible label for dismissing the new chat suggestion surface`,
      })),
      (t[5] = _),
      (t[6] = te));
  let E = te,
    D = (0, Z.useRef)(!1),
    re;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = new Set()), (t[7] = re))
    : (re = t[7]);
  let ie = (0, Z.useRef)(re),
    O,
    ae;
  (t[8] === g
    ? ((O = t[9]), (ae = t[10]))
    : ((O = () => {
        D.current ||
          ((D.current = !0),
          ur(g, { action: U.CODEX_NEW_CHAT_SUGGESTION_ACTION_DISPLAYED }));
      }),
      (ae = [g]),
      (t[8] = g),
      (t[9] = O),
      (t[10] = ae)),
    (0, Z.useEffect)(O, ae));
  let k, A;
  (t[11] !== g || t[12] !== T
    ? ((k = () => {
        T == null ||
          ie.current.has(T.id) ||
          (ie.current.add(T.id),
          L(g, qe, {
            promptIds: T.suggestions.map(ar).join(`,`),
            promptTypes: T.suggestions.map(ir).join(`,`),
            promptCount: T.suggestions.length,
          }),
          ur(g, {
            action: U.CODEX_NEW_CHAT_SUGGESTION_ACTION_FOLLOW_UPS_DISPLAYED,
            categoryId: T.id,
            suggestionCount: T.suggestions.length,
          }));
      }),
      (A = [g, T]),
      (t[11] = g),
      (t[12] = T),
      (t[13] = k),
      (t[14] = A))
    : ((k = t[13]), (A = t[14])),
    (0, Z.useEffect)(k, A));
  let oe;
  t[15] !== u || t[16] !== g || t[17] !== v
    ? ((oe = () => {
        (ur(g, {
          action: U.CODEX_NEW_CHAT_SUGGESTION_ACTION_DISMISSED,
          categoryId: v ?? void 0,
        }),
          u());
      }),
      (t[15] = u),
      (t[16] = g),
      (t[17] = v),
      (t[18] = oe))
    : (oe = t[18]);
  let j = oe,
    se;
  t[19] !== o || t[20] !== f || t[21] !== g
    ? ((se = (e) => {
        (ur(g, {
          action: U.CODEX_NEW_CHAT_SUGGESTION_ACTION_CATEGORY_SELECTED,
          categoryId: e.id,
        }),
          f(e),
          x({ id: e.id, previousPrompt: o }),
          y(e.id));
      }),
      (t[19] = o),
      (t[20] = f),
      (t[21] = g),
      (t[22] = se))
    : (se = t[22]);
  let ce = se;
  if (T != null) {
    let e;
    t[23] !== m || t[24] !== j || t[25] !== E
      ? ((e = { ariaLabel: E, disabled: m, onClick: j }),
        (t[23] = m),
        (t[24] = j),
        (t[25] = E),
        (t[26] = e))
      : (e = t[26]);
    let i, a;
    t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(Ae, { className: `icon-xs shrink-0` })),
        (a = (0, Q.jsx)(it, {
          id: `home.newChatPageSuggestions.back`,
          defaultMessage: `Back`,
          description: `Row label for returning from new chat follow-up suggestions`,
        })),
        (t[27] = i),
        (t[28] = a))
      : ((i = t[27]), (a = t[28]));
    let o;
    t[29] === d
      ? (o = t[30])
      : ((o = () => {
          (d(), x(null), y(null));
        }),
        (t[29] = d),
        (t[30] = o));
    let s;
    t[31] !== e || t[32] !== o
      ? ((s = { dismissAction: e, icon: i, label: a, onClick: o }),
        (t[31] = e),
        (t[32] = o),
        (t[33] = s))
      : (s = t[33]);
    let c;
    t[34] !== p || t[35] !== g || t[36] !== T.id || t[37] !== T.suggestions
      ? ((c = (e) => {
          let t = T.suggestions.findIndex((t) => t.id === e.id);
          (ur(g, {
            action: U.CODEX_NEW_CHAT_SUGGESTION_ACTION_FOLLOW_UP_SELECTED,
            categoryId: T.id,
            suggestionId: e.id,
            suggestionIndex: t,
          }),
            p(e, t));
        }),
        (t[34] = p),
        (t[35] = g),
        (t[36] = T.id),
        (t[37] = T.suggestions),
        (t[38] = c))
      : (c = t[38]);
    let l;
    return (
      t[39] !== n ||
      t[40] !== r ||
      t[41] !== m ||
      t[42] !== T.suggestions ||
      t[43] !== s ||
      t[44] !== c
        ? ((l = (0, Q.jsx)(`div`, {
            className: `group/new-chat-page-suggestions flex flex-col`,
            children: (0, Q.jsx)(Mn, {
              activeSuggestionId: n,
              apps: r,
              disabled: m,
              suggestions: T.suggestions,
              trailingAction: s,
              onStartSuggestion: c,
              showDismissActions: !1,
            }),
          })),
          (t[39] = n),
          (t[40] = r),
          (t[41] = m),
          (t[42] = T.suggestions),
          (t[43] = s),
          (t[44] = c),
          (t[45] = l))
        : (l = t[45]),
      l
    );
  }
  let M;
  if (t[46] !== a || t[47] !== m || t[48] !== ce) {
    let e;
    (t[50] !== m || t[51] !== ce
      ? ((e = (e) =>
          (0, Q.jsx)(
            or,
            {
              disabled: m,
              icon: lr(e.id),
              label: e.title,
              onClick: () => {
                ce(e);
              },
              trailingIcon: (0, Q.jsx)(ne, { className: `icon-2xs shrink-0` }),
            },
            e.id,
          )),
        (t[50] = m),
        (t[51] = ce),
        (t[52] = e))
      : (e = t[52]),
      (M = a.map(e)),
      (t[46] = a),
      (t[47] = m),
      (t[48] = ce),
      (t[49] = M));
  } else M = t[49];
  let N;
  t[53] === M
    ? (N = t[54])
    : ((N = (0, Q.jsx)(`div`, {
        className: `mx-auto -my-1.5 flex w-full min-w-0 flex-col divide-y divide-token-border/70 select-none`,
        children: M,
      })),
      (t[53] = M),
      (t[54] = N));
  let P;
  t[55] !== m || t[56] !== j || t[57] !== E
    ? ((P = (0, Q.jsx)(sr, { ariaLabel: E, disabled: m, onClick: j })),
      (t[55] = m),
      (t[56] = j),
      (t[57] = E),
      (t[58] = P))
    : (P = t[58]);
  let F;
  return (
    t[59] !== N || t[60] !== P
      ? ((F = (0, Q.jsxs)(`div`, {
          className: `group/new-chat-page-suggestions flex flex-col`,
          children: [N, P],
        })),
        (t[59] = N),
        (t[60] = P),
        (t[61] = F))
      : (F = t[61]),
    F
  );
}
function ir(e) {
  return e.analyticsType ?? e.source;
}
function ar(e) {
  return e.id;
}
function or(e) {
  let t = (0, dr.c)(14),
    { disabled: n, icon: r, label: i, onClick: a, trailingIcon: o } = e,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = (0, Q.jsx)(Xt, { "aria-hidden": `true`, children: r })),
      (t[0] = r),
      (t[1] = s));
  let c;
  t[2] === i
    ? (c = t[3])
    : ((c = (0, Q.jsx)(Zt, { children: i })), (t[2] = i), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, Q.jsxs)(Qt, { children: [s, c] })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === o
    ? (u = t[8])
    : ((u =
        o == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `ml-auto text-token-description-foreground`,
              children: o,
            })),
      (t[7] = o),
      (t[8] = u));
  let d;
  return (
    t[9] !== n || t[10] !== a || t[11] !== l || t[12] !== u
      ? ((d = (0, Q.jsx)(`div`, {
          className: `flex min-w-0 items-center py-1.5`,
          children: (0, Q.jsxs)(`button`, {
            type: `button`,
            className: `flex min-w-0 flex-1 cursor-interaction items-center py-row-y pr-1 pl-3.5 text-left text-token-description-foreground outline-hidden enabled:hover:text-token-foreground enabled:focus:text-token-foreground disabled:cursor-default disabled:opacity-70`,
            disabled: n,
            onClick: a,
            children: [l, u],
          }),
        })),
        (t[9] = n),
        (t[10] = a),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function sr(e) {
  let t = (0, dr.c)(8),
    { ariaLabel: n, disabled: r, onClick: i } = e,
    a = r && `!opacity-40`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = I(
        `flex size-4 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground opacity-0 select-none group-hover/new-chat-page-suggestions:opacity-100 hover:bg-token-list-hover-background hover:opacity-100 focus:opacity-100 focus:outline-none`,
        a,
      )),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(be, { className: `icon-2xs` })), (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== o
      ? ((c = (0, Q.jsx)(`div`, {
          className: `mt-2 flex justify-end pr-0.5`,
          children: (0, Q.jsx)(`button`, {
            type: `button`,
            className: o,
            "aria-label": n,
            disabled: r,
            onClick: i,
            children: s,
          }),
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function cr(e, t) {
  return e == null || e.startsWith(t);
}
function lr(e) {
  switch (e) {
    case `create`:
      return (0, Q.jsx)(N, { className: `icon-xs shrink-0` });
    case `research`:
      return (0, Q.jsx)(ut, { className: `icon-xs shrink-0` });
    case `briefing`:
      return (0, Q.jsx)(x, { className: `icon-xs shrink-0` });
    case `automate`:
      return (0, Q.jsx)(gt, { className: `icon-xs shrink-0` });
  }
}
function ur(e, t) {
  L(e, Le, t);
}
var dr,
  Z,
  Q,
  fr = e(() => {
    ((dr = g()),
      Ve(),
      me(),
      f(),
      (Z = t(p(), 1)),
      R(),
      Yt(),
      le(),
      S(),
      ee(),
      bt(),
      q(),
      we(),
      Se(),
      V(),
      n(),
      Bn(),
      (Q = _()));
  });
function pr({
  domain: e,
  generatedSuggestionsEnabled: t,
  hostId: n,
  onLocalConversationCreated: o,
  projectRoot: l,
  selectedModel: u,
  selectedModelDisplayName: d,
}) {
  let f = c(i),
    p = We(),
    m = Ie(),
    g = a(an, { domain: e, hostId: n, projectRoot: l }),
    _ = a(cn, { domain: e, hostId: n, projectRoot: l }),
    x = a(sn, { domain: e, hostId: n, projectRoot: l }),
    S = a(fn, { domain: e, hostId: n, projectRoot: l }),
    { openPluginInstall: C } = fe(),
    [, w] = Ze(`composer_prefill`),
    {
      agentMode: ee,
      isAgentModePending: T,
      permissionProfileId: ne,
      shouldSendPermissionOverrides: E,
    } = ht({ conversationId: null, cwdOverride: l, hostId: n }),
    D = l === `~`,
    ie = a(re, te({ cwd: l, hostId: n })),
    O = Fe(n),
    k = j(n),
    { data: A, isLoading: oe } = Je(l, O, `home_page`),
    se = $e(`505458`),
    M = et(),
    { access: N } = Tt(),
    P = A?.root ?? null,
    F = D
      ? `local`
      : wt({
          composerMode: ie,
          cloudAccess: N,
          fallbackMode: `local`,
          isAvailabilityLoading: oe || M,
          isCloudAvailable: P != null,
          isLocalAvailable: !0,
          isWorktreeAvailable: l != null && P != null && se && !r(l, k),
        }),
    le = v(Me),
    { activeMode: me } = _t(null),
    { serviceTierSettings: he } = mt(null),
    ge = ae(),
    { headline: _e } = Dt(),
    { data: ve } = de(),
    I = $e(`4285716042`),
    ye = ce(h.enabled) === !0,
    be = s(kt),
    xe = s(jt),
    Se = v(At),
    [Ce, we] = y(Mt),
    Te = s(Pt),
    Ee = $e(`4132970629`),
    De = $e(`4214671466`),
    Oe = Qe(Cr),
    ke = Ut(ge.email),
    Ae = t ? !ye || x : !0,
    Ne = Ce && Ee && Ae,
    { connectAppsRowLabel: Pe, suggestions: Le } = mn({ enabled: D }),
    R =
      v(Jt) === !1
        ? mr({
            dismissAction: {
              ariaLabel: p.formatMessage({
                id: `home.connectAppsRow.dismiss`,
                defaultMessage: `Dismiss connect apps row`,
                description: `Accessible label for dismissing the home page row that opens the plugins and apps browser`,
              }),
              onClick: () => {
                f.set(Jt, !0);
              },
            },
            label: Pe,
            navigate: m,
          })
        : void 0,
    z = xe === `v1` || (xe == null && !Te && Ne),
    Ve = S?.includes(Sr) ?? !1,
    B =
      Ae &&
      D &&
      be.workMode === `non_coding` &&
      !z &&
      !Ve &&
      Oe.get(`enabled`, !1),
    He = a(Kt, ke, { enabled: Se == null && (z || B) }),
    V = Gt({
      debugOverride: Se,
      detectedProvider: He.data?.provider,
      emailDomain: ke,
      isError: He.isError,
    }),
    H = B && V != null,
    U = l != null && Ae && (!B || V != null),
    Ke = Ae && _n(u, d),
    W = je(n, [], { enabled: z || Ke || H }),
    { availablePlugins: Ye } = W,
    Xe =
      z && V != null && !W.isLoading
        ? zt({
            intl: p,
            mailProvider: V,
            plan: ve?.plan_type ?? ge.planAtLogin,
            plugins: Ye,
            roles: be.roles,
          })
        : [],
    tt = z && (De || xe === `v1`),
    nt = S?.includes(`onboarding-assistant`) ?? !1,
    rt =
      (Xe.length > 0 || tt) &&
      Xe.every((e) =>
        e.homeAction.type === `connect-plugin-onboarding`
          ? e.homeAction.plugin.plugin.installed &&
            e.homeAction.plugin.plugin.enabled
          : !1,
      ) &&
      (!tt || nt);
  (0, xr.useEffect)(() => {
    z && rt && we(!1);
  }, [rt, we, z]);
  let G = Xe.length > 0,
    at = Dn({
      dismissedDefaultSuggestionIds: S ?? [],
      generatedSuggestions: t && ye ? _ : [],
      intl: p,
      onboardingSuggestions: G ? Xe : Le,
      selectedModel: u,
      selectedModelDisplayName: d,
    }),
    K = !I || _e == null ? void 0 : _e.message_body,
    ot = H ? Gn({ intl: p, mailProvider: V ?? `other`, plugins: Ye }) : [],
    ct = ot.flatMap((e) => e.suggestions),
    lt = at.filter((e) => e.homeAction.type === `connect-plugin-onboarding`),
    ut = at.length > 0 && lt.length === at.length,
    q = U ? at : [],
    J = H ? [] : q,
    dt = [...q, ...ct].flatMap(({ appIds: e }) => e),
    ft = U && (ut || pt(dt)),
    gt = St({ appIds: dt, enabled: ft, hostId: n }),
    vt = ue({ apps: gt, enabled: ft && gt != null }),
    yt = vt == null ? void 0 : st(vt),
    bt = J.map((e) => e.id).join(`,`),
    xt = J.map(br).join(`,`),
    Ct = J.filter((e) => e.source === `generated`)
      .map((e) => e.id)
      .join(`,`),
    Et = (0, xr.useRef)(null),
    Ot = (0, xr.useRef)(new Set()),
    Nt = b(`ambient-suggestion-set-status`, {
      onMutate: (e) => {
        nn(
          f,
          { domain: e.domain, hostId: n, projectRoot: e.projectRoot },
          e.suggestionId,
          e.status,
        );
      },
      onSuccess: (e, t) => {
        f.query.setData(
          tn,
          { domain: t.domain, hostId: n, projectRoot: t.projectRoot },
          e,
        );
      },
    }),
    Ft = (t, r) => {
      if (t.source === `default`) {
        rn(f, { domain: e, hostId: n, projectRoot: l }, t.id, r);
        return;
      }
      l != null &&
        Nt.mutate({
          domain: e,
          hostId: n,
          projectRoot: l,
          suggestionId: t.id,
          status: r,
        });
    };
  if (
    ((0, xr.useEffect)(() => {
      if (!(J.length === 0 || Et.current === bt)) {
        if (((Et.current = bt), Ct.length > 0))
          for (let e of Ct.split(`,`))
            Ot.current.has(e) ||
              (Ot.current.add(e),
              L(f, Re, {
                source: `generated`,
                action: `fill-composer`,
                threadAction: `new-thread`,
              }));
        L(f, qe, { promptIds: bt, promptTypes: xt, promptCount: J.length });
      }
    }, [ge.accountId, ge.userId, f, Ct, J.length, bt, xt]),
    !U || (!H && K == null && q.length === 0))
  )
    return null;
  let It = async (t, r, i) => {
      if (T) return;
      f.set(an, { domain: e, hostId: n, projectRoot: l }, t.id);
      let a = r ?? q.findIndex((e) => e.id === t.id);
      (L(f, ze, { promptId: t.id, promptIndex: a, promptType: br(t), mode: F }),
        L(f, Ue, An(t)));
      try {
        switch (t.homeAction.type) {
          case `fill-composer`:
            (Ft(t, `accepted`), w({ text: t.prompt }));
            break;
          case `connect-plugin-onboarding`:
            C(n, t.homeAction.plugin, {
              postInstallComposerPrefill: t.prompt,
              telemetry: i,
            });
            break;
          case `start-thread`: {
            if (l == null) break;
            let e = await hr({
                pluginName: t.homeAction.pluginNameToInstall,
                plugins: Ye,
                refetchPlugins: W.refetch,
              }),
              r = await _r({
                forceReloadPlugins: W.forceReload,
                hostId: n,
                invalidateSkills: () => {
                  f.queryClient.invalidateQueries({ queryKey: [`skills`] });
                },
                plugin: e,
              }),
              i = await vr({
                hostId: n,
                prompt: t.prompt,
                skillName: t.homeAction.skillNameToMention,
                skillsResponse: r,
              });
            (await yr({
              agentMode: ee,
              collaborationMode: me,
              hostId: n,
              onLocalConversationCreated: o,
              permissionProfileId: ne,
              projectRoot: l,
              serviceTier: he.serviceTierForRequest,
              shouldSendPermissionOverrides: E,
              prompt: i,
            }),
              Ft(t, `accepted`));
            break;
          }
        }
      } catch {
        f.get(pe).danger(
          (0, $.jsx)(it, {
            id: `home.ambientSuggestions.startError`,
            defaultMessage: `Unable to start this suggestion`,
            description: `Toast shown when launching an ambient suggestion fails`,
          }),
          { id: `ambient-suggestion-start-error` },
        );
      } finally {
        f.set(an, { domain: e, hostId: n, projectRoot: l }, null);
      }
    },
    Lt = (t) => {
      (f.set(an, { domain: e, hostId: n, projectRoot: l }, t.id),
        L(f, Ge, An(t)));
      try {
        Ft(t, `dismissed`);
      } finally {
        f.set(an, { domain: e, hostId: n, projectRoot: l }, null);
      }
    };
  return H
    ? (0, $.jsx)(rr, {
        activeSuggestionId: g,
        apps: vt,
        categories: ot,
        composerPrompt: le,
        disabled: T || W.isLoading,
        onDismiss: () => {
          rn(f, { domain: e, hostId: n, projectRoot: l }, Sr, `dismissed`);
        },
        onBackToCategories: () => {
          w({ text: ``, clearText: !0 });
        },
        onSelectCategory: (e) => {
          w({ text: e.starterPrompt });
        },
        onStartSuggestion: (e, t) => {
          It(e, t, { source: `new_chat_page_suggestions`, suggestionId: e.id });
        },
      })
    : ut && z
      ? (0, $.jsxs)($.Fragment, {
          children: [
            K == null
              ? null
              : (0, $.jsx)(Mn, {
                  suggestions: [],
                  apps: void 0,
                  activeSuggestionId: null,
                  headline: K,
                  onStartSuggestion: (e) => {
                    It(e);
                  },
                  onDismissSuggestion: Lt,
                }),
            (0, $.jsx)(Vn, {
              hostId: n,
              composerMode: F,
              suggestions: lt,
              leadingCard: tt
                ? (0, $.jsx)(dn, {
                    completed: nt,
                    domain: e,
                    hostId: n,
                    onLocalConversationCreated: o,
                    projectRoot: l,
                  })
                : void 0,
              appByAmbientSuggestionAppId: yt,
              disabled: T,
              dismissAction: {
                ariaLabel: p.formatMessage({
                  id: `home.ambientSuggestions.dismissOnboardingPluginSuggestions`,
                  defaultMessage: `Dismiss onboarding plugin suggestions`,
                  description: `Accessible label for permanently dismissing the onboarding plugin suggestion cards`,
                }),
                disabled: T,
                onClick: () => {
                  we(!1);
                },
              },
            }),
          ],
        })
      : (0, $.jsx)($.Fragment, {
          children:
            K != null || q.length > 0
              ? (0, $.jsx)(Mn, {
                  suggestions: q,
                  apps: vt,
                  activeSuggestionId: g,
                  disabled: T,
                  headline: K,
                  trailingAction: R,
                  onStartSuggestion: (e) => {
                    It(e);
                  },
                  onDismissSuggestion: Lt,
                  onShowSuggestionTooltip: (e) => {
                    L(f, Be, An(e));
                  },
                })
              : null,
        });
}
function mr({ dismissAction: e, label: t, navigate: n }) {
  return {
    dismissAction: e,
    icon: (0, $.jsx)(Vt, { className: `icon-xs shrink-0` }),
    label: t ?? (0, $.jsx)(it, { ...Rt }),
    onClick: () => {
      n(`/skills`);
    },
  };
}
async function hr({ pluginName: e, plugins: t, refetchPlugins: n }) {
  return e == null ? null : (gr(t, e) ?? gr((await n()).availablePlugins, e));
}
function gr(e, t) {
  let n = e.filter(
    (e) =>
      !(e.plugin.installed && e.plugin.enabled) &&
      [
        e.plugin.id,
        e.plugin.name,
        e.displayName,
        e.marketplaceDisplayName,
      ].some((e) => {
        let n = dt(e ?? ``);
        return n === t || n.startsWith(t + `-`);
      }),
  );
  return (
    n.find((e) => dt(e.marketplaceName).startsWith(`openai`)) ?? n[0] ?? null
  );
}
async function _r({
  forceReloadPlugins: e,
  hostId: t,
  invalidateSkills: n,
  plugin: r,
}) {
  if (r == null) return null;
  await G(`install-plugin`, { hostId: t, ..._e(r) });
  let [, i] = await Promise.all([
    e(),
    G(`list-skills-for-host`, { forceReload: !0, hostId: t }),
  ]);
  return (n(), i);
}
async function vr({ hostId: e, prompt: t, skillName: n, skillsResponse: r }) {
  if (n == null) return t;
  let i = O(
    r ?? (await G(`list-skills-for-host`, { forceReload: !0, hostId: e })),
    n,
  );
  return i == null ? t : `${t} ${xe({ name: n, path: i.path })}`;
}
async function yr({
  agentMode: e,
  collaborationMode: t,
  hostId: n,
  onLocalConversationCreated: r,
  permissionProfileId: i,
  projectRoot: a,
  serviceTier: o,
  shouldSendPermissionOverrides: s,
  prompt: c,
}) {
  let l = [a],
    u = P(l),
    d = [{ type: `text`, text: c, text_elements: [] }],
    f = await Ce(l, { prompt: c }),
    p = f.cwd ?? a;
  if (u && f.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: m } = await G(`read-config-for-host`, {
    hostId: n,
    includeLayers: !1,
    cwd: p,
  });
  await r(
    await G(`start-conversation`, {
      hostId: n,
      ...K({
        input: d,
        workspaceRoots: f.workspaceRoots,
        cwd: p,
        fileAttachments: [],
        addedFiles: [],
        agentMode: e,
        permissionProfileId: i,
        shouldSendPermissionOverrides: s,
        model: null,
        serviceTier: o,
        reasoningEffort: null,
        collaborationMode: t,
        config: Ye(m),
        ...(u
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: f.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
function br(e) {
  return e.analyticsType ?? e.source;
}
var xr,
  $,
  Sr,
  Cr,
  wr = e(() => {
    (Ve(),
      o(),
      f(),
      l(),
      (xr = t(p(), 1)),
      R(),
      rt(),
      Ot(),
      nt(),
      Xe(),
      D(),
      Ct(),
      ie(),
      ye(),
      xt(),
      Et(),
      w(),
      E(),
      vt(),
      ct(),
      z(),
      gn(),
      oe(),
      at(),
      Bt(),
      Oe(),
      Wt(),
      Lt(),
      Nt(),
      Ft(),
      he(),
      A(),
      V(),
      ge(),
      n(),
      Ne(),
      He(),
      W(),
      M(),
      tt(),
      m(),
      lt(),
      kn(),
      jn(),
      qt(),
      Bn(),
      on(),
      ln(),
      Wn(),
      En(),
      nr(),
      fr(),
      ($ = _()),
      (Sr = `new-chat-page-suggestions`),
      (Cr = `452956359`));
  });
function Tr(e) {
  let t = (0, kr.c)(13),
    { domain: n, enabled: r, hostId: a, projectRoot: o, routeEntryKey: s } = e,
    l = c(i),
    u;
  t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== o || t[4] !== l
    ? ((u = () => {
        r &&
          o != null &&
          l.query.fetch(tn, { domain: n, hostId: a, projectRoot: o }).catch(Er);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d;
  (t[6] !== n ||
  t[7] !== r ||
  t[8] !== a ||
  t[9] !== o ||
  t[10] !== s ||
  t[11] !== l
    ? ((d = [n, r, a, o, s, l]),
      (t[6] = n),
      (t[7] = r),
      (t[8] = a),
      (t[9] = o),
      (t[10] = s),
      (t[11] = l),
      (t[12] = d))
    : (d = t[12]),
    (0, Ar.useEffect)(u, d));
}
function Er() {}
function Dr(e) {
  let t = (0, kr.c)(10),
    { domain: n, enabled: r, hostId: a, plan: o, projectRoot: s } = e,
    l = c(i),
    u;
  t[0] !== n ||
  t[1] !== r ||
  t[2] !== a ||
  t[3] !== o ||
  t[4] !== s ||
  t[5] !== l
    ? ((u = () => {
        r &&
          s != null &&
          l.query
            .fetch(un, { domain: n, hostId: a, plan: o, projectRoot: s })
            .catch(Or);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d = (0, Ar.useEffectEvent)(u),
    f;
  t[7] === d
    ? (f = t[8])
    : ((f = () => {
        if (window.electronBridge?.sendMessageFromView != null)
          return () => {
            globalThis.setTimeout(d, 0);
          };
      }),
      (t[7] = d),
      (t[8] = f));
  let p;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = []), (t[9] = p))
    : (p = t[9]),
    (0, Ar.useEffect)(f, p));
}
function Or() {}
var kr,
  Ar,
  jr = e(() => {
    ((kr = g()), f(), (Ar = t(p(), 1)), n(), on());
  });
function Mr(e) {
  let t = (0, Nr.c)(26),
    {
      generatedSuggestionsEnabled: n,
      hostId: r,
      onLocalConversationCreated: i,
      plan: a,
      projectRoot: o,
      routeEntryKey: s,
    } = e,
    { modelSettings: c } = yt(null),
    l;
  t[0] === r ? (l = t[1]) : ((l = { hostId: r }), (t[0] = r), (t[1] = l));
  let { data: u } = ft(l),
    f,
    p;
  t[2] !== u?.models || t[3] !== c.model
    ? ((f = u?.models.find((e) => e.model === c.model)?.displayName ?? null),
      (p = d({ selectedModel: c.model, selectedModelDisplayName: f })),
      (t[2] = u?.models),
      (t[3] = c.model),
      (t[4] = f),
      (t[5] = p))
    : ((f = t[4]), (p = t[5]));
  let m = p,
    h;
  (t[6] !== m || t[7] !== n || t[8] !== r || t[9] !== o || t[10] !== s
    ? ((h = {
        domain: m,
        enabled: n,
        hostId: r,
        projectRoot: o,
        routeEntryKey: s,
      }),
      (t[6] = m),
      (t[7] = n),
      (t[8] = r),
      (t[9] = o),
      (t[10] = s),
      (t[11] = h))
    : (h = t[11]),
    Tr(h));
  let g;
  (t[12] !== m || t[13] !== n || t[14] !== r || t[15] !== a || t[16] !== o
    ? ((g = { domain: m, enabled: n, hostId: r, plan: a, projectRoot: o }),
      (t[12] = m),
      (t[13] = n),
      (t[14] = r),
      (t[15] = a),
      (t[16] = o),
      (t[17] = g))
    : (g = t[17]),
    Dr(g));
  let _;
  return (
    t[18] !== m ||
    t[19] !== n ||
    t[20] !== r ||
    t[21] !== c.model ||
    t[22] !== i ||
    t[23] !== o ||
    t[24] !== f
      ? ((_ = (0, Pr.jsx)(pr, {
          domain: m,
          generatedSuggestionsEnabled: n,
          hostId: r,
          onLocalConversationCreated: i,
          projectRoot: o,
          selectedModel: c.model,
          selectedModelDisplayName: f,
        })),
        (t[18] = m),
        (t[19] = n),
        (t[20] = r),
        (t[21] = c.model),
        (t[22] = i),
        (t[23] = o),
        (t[24] = f),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
var Nr, Pr;
e(() => {
  ((Nr = g()), l(), ot(), J(), wr(), jr(), (Pr = _()));
})();
export { Mr as HomeAmbientSuggestionsContent };
//# sourceMappingURL=home-ambient-suggestions-content-QPiHWv2t.js.map
