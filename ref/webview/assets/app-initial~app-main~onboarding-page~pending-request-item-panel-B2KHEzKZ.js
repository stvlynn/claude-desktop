import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Gs as t,
  Zs as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Fy as r,
  Iy as i,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  E as a,
  j as o,
} from "./app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js";
function s(e) {
  return e.some((e) => f.has(e)) ? `coding` : `non_coding`;
}
function c(e) {
  return e.some((e) => d.has(e));
}
function l(e = Math.random) {
  let t = p.filter((e) => e !== `something_else`);
  for (let n = t.length - 1; n > 0; --n) {
    let r = Math.floor(e() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return [...t, `something_else`];
}
function u(e, t) {
  return { ...e, roles: t, workMode: s(t) };
}
var d,
  f,
  p,
  m,
  h,
  g = e(() => {
    (t(),
      i(),
      o(),
      (d = new Set([`engineering`, `data_science`])),
      (f = new Set([`default`, ...d])),
      (p = [
        `engineering`,
        `data_science`,
        `product_management`,
        `design`,
        `marketing`,
        `sales`,
        `finance`,
        `operations`,
        `people_hr`,
        `legal`,
        `student`,
        `something_else`,
      ]),
      (m = r({
        engineering: {
          id: `electron.onboarding.welcomeV2.role.engineering`,
          defaultMessage: `Engineering`,
          description: `Welcome v2 role option for engineering users`,
        },
        product_management: {
          id: `electron.onboarding.welcomeV2.role.product`,
          defaultMessage: `Product`,
          description: `Welcome v2 role option for product management users`,
        },
        data_science: {
          id: `electron.onboarding.welcomeV2.role.dataScience`,
          defaultMessage: `Data science`,
          description: `Welcome v2 role option for data science users`,
        },
        design: {
          id: `electron.onboarding.welcomeV2.role.design`,
          defaultMessage: `Design`,
          description: `Welcome v2 role option for design users`,
        },
        finance: {
          id: `electron.onboarding.welcomeV2.role.finance`,
          defaultMessage: `Finance`,
          description: `Welcome v2 role option for finance users`,
        },
        marketing: {
          id: `electron.onboarding.welcomeV2.role.marketing`,
          defaultMessage: `Marketing`,
          description: `Welcome v2 role option for marketing users`,
        },
        sales: {
          id: `electron.onboarding.welcomeV2.role.sales`,
          defaultMessage: `Sales`,
          description: `Welcome v2 role option for sales users`,
        },
        operations: {
          id: `electron.onboarding.welcomeV2.role.operations`,
          defaultMessage: `Operations`,
          description: `Welcome v2 role option for operations users`,
        },
        people_hr: {
          id: `electron.onboarding.welcomeV2.role.peopleHr`,
          defaultMessage: `People & HR`,
          description: `Welcome v2 role option for people and HR users`,
        },
        legal: {
          id: `electron.onboarding.welcomeV2.role.legal`,
          defaultMessage: `Legal`,
          description: `Welcome v2 role option for legal users`,
        },
        student: {
          id: `electron.onboarding.welcomeV2.role.student`,
          defaultMessage: `Student`,
          description: `Welcome v2 role option for student users`,
        },
        something_else: {
          id: `electron.onboarding.welcomeV2.role.somethingElse`,
          defaultMessage: `Something else`,
          description: `Welcome v2 role option for users who don't fit into the other categories`,
        },
      })),
      (h = n(null, (e, t, n) => {
        t(a, u(e(a), n));
      })));
  });
export { l as a, s as i, p as n, c as o, h as r, g as s, m as t };
//# sourceMappingURL=app-initial~app-main~onboarding-page~pending-request-item-panel-B2KHEzKZ.js.map
