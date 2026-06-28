// Restored from ref/webview/assets/onboarding-mail-provider-DwX9H-oo.js

import { _appScopeT } from "../boundaries/app-scope";
import { vscodeApiI } from "../boundaries/vscode-api";
import { isEnterpriseLikeSku } from "../utils/skus";
const emailDomainMailProviderQuery = vscodeApiI(
  _appScopeT,
  "email-domain-mail-provider",
  (domain: string | null | undefined) => ({
    enabled: domain != null,
    params:
      domain == null
        ? undefined
        : {
            domain,
          },
    staleTime: Infinity,
  }),
);
function getEmailDomain(email: string | null | undefined) {
  if (email == null) return null;
  const atIndex = email.lastIndexOf("@");
  if (atIndex <= 0) return null;
  const domain = email
    .slice(atIndex + 1)
    .trim()
    .toLowerCase();
  return domain.length === 0 ? null : domain;
}
function normalizeMailProviderForSku(
  provider: string,
  sku: string | null | undefined,
) {
  return provider === "other"
    ? isEnterpriseLikeSku(sku)
      ? "microsoft"
      : "google"
    : provider;
}
export {
  getEmailDomain,
  normalizeMailProviderForSku,
  emailDomainMailProviderQuery,
};
