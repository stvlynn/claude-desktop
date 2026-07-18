// Restored from ref/webview/assets/locale-resolver-C_BYupit.js

type LocaleMessages = Record<string, string>;
type LocaleModule = Record<string, unknown>;
type LocaleDescriptor = {
  locale: string;
  normalized: string;
  language: string;
  load: () => Promise<LocaleModule>;
};
const DEFAULT_LOCALE = "en-US";
const localeLoaders: Record<string, () => Promise<LocaleModule>> = {
  "./locales/am.json": () => import("./locales/am"),
  "./locales/ar.json": () => import("./locales/ar"),
  "./locales/bg-bg.json": () => import("./locales/bg-bg"),
  "./locales/bn-bd.json": () => import("./locales/bn-bd"),
  "./locales/bs-ba.json": () => import("./locales/bs-ba"),
  "./locales/ca-es.json": () => import("./locales/ca-es"),
  "./locales/cs-cz.json": () => import("./locales/cs-cz"),
  "./locales/da-dk.json": () => import("./locales/da-dk"),
  "./locales/de-de.json": () => import("./locales/de-de"),
  "./locales/el-gr.json": () => import("./locales/el-gr"),
  "./locales/es-419.json": () => import("./locales/es-419"),
  "./locales/es-es.json": () => import("./locales/es-es"),
  "./locales/et-ee.json": () => import("./locales/et-ee"),
  "./locales/fa.json": () => import("./locales/fa"),
  "./locales/fi-fi.json": () => import("./locales/fi-fi"),
  "./locales/fr-ca.json": () => import("./locales/fr-ca"),
  "./locales/fr-fr.json": () => import("./locales/fr-fr"),
  "./locales/gu-in.json": () => import("./locales/gu-in"),
  "./locales/hi-in.json": () => import("./locales/hi-in"),
  "./locales/hr-hr.json": () => import("./locales/hr-hr"),
  "./locales/hu-hu.json": () => import("./locales/hu-hu"),
  "./locales/hy-am.json": () => import("./locales/hy-am"),
  "./locales/id-id.json": () => import("./locales/id-id"),
  "./locales/is-is.json": () => import("./locales/is-is"),
  "./locales/it-it.json": () => import("./locales/it-it"),
  "./locales/ja-jp.json": () => import("./locales/ja-jp"),
  "./locales/ka-ge.json": () => import("./locales/ka-ge"),
  "./locales/kk.json": () => import("./locales/kk"),
  "./locales/kn-in.json": () => import("./locales/kn-in"),
  "./locales/ko-kr.json": () => import("./locales/ko-kr"),
  "./locales/lt.json": () => import("./locales/lt"),
  "./locales/lv-lv.json": () => import("./locales/lv-lv"),
  "./locales/mk-mk.json": () => import("./locales/mk-mk"),
  "./locales/ml.json": () => import("./locales/ml"),
  "./locales/mn.json": () => import("./locales/mn"),
  "./locales/mr-in.json": () => import("./locales/mr-in"),
  "./locales/ms-my.json": () => import("./locales/ms-my"),
  "./locales/my-mm.json": () => import("./locales/my-mm"),
  "./locales/nb-no.json": () => import("./locales/nb-no"),
  "./locales/nl-nl.json": () => import("./locales/nl-nl"),
  "./locales/pa.json": () => import("./locales/pa"),
  "./locales/pl-pl.json": () => import("./locales/pl-pl"),
  "./locales/pt-br.json": () => import("./locales/pt-br"),
  "./locales/pt-pt.json": () => import("./locales/pt-pt"),
  "./locales/ro-ro.json": () => import("./locales/ro-ro"),
  "./locales/ru-ru.json": () => import("./locales/ru-ru"),
  "./locales/sk-sk.json": () => import("./locales/sk-sk"),
  "./locales/sl-si.json": () => import("./locales/sl-si"),
  "./locales/so-so.json": () => import("./locales/so-so"),
  "./locales/sq-al.json": () => import("./locales/sq-al"),
  "./locales/sr-rs.json": () => import("./locales/sr-rs"),
  "./locales/sv-se.json": () => import("./locales/sv-se"),
  "./locales/sw-tz.json": () => import("./locales/sw-tz"),
  "./locales/ta-in.json": () => import("./locales/ta-in"),
  "./locales/te-in.json": () => import("./locales/te-in"),
  "./locales/th-th.json": () => import("./locales/th-th"),
  "./locales/tl.json": () => import("./locales/tl"),
  "./locales/tr-tr.json": () => import("./locales/tr-tr"),
  "./locales/uk-ua.json": () => import("./locales/uk-ua"),
  "./locales/ur.json": () => import("./locales/ur"),
  "./locales/vi-vn.json": () => import("./locales/vi-vn"),
  "./locales/zh-cn.json": () => import("./locales/zh-cn"),
  "./locales/zh-hk.json": () => import("./locales/zh-hk"),
  "./locales/zh-tw.json": () => import("./locales/zh-tw"),
};
const supportedLocales = Object.entries(localeLoaders)
  .map(([path, load]): LocaleDescriptor | null => {
    const match = path.match(/\/([^/]+)\.json$/);
    if (!match) return null;
    const locale = match[1];
    const normalized = normalizeLocale(locale);
    if (!normalized) return null;
    const [language] = normalized.split("-");
    return {
      locale,
      normalized,
      language,
      load,
    };
  })
  .filter((item): item is LocaleDescriptor => item != null)
  .sort((left, right) => left.locale.localeCompare(right.locale));
function getSupportedLocales() {
  return [...supportedLocales];
}
function getLocaleLanguageDisplayName(locale: string, displayLocale: string) {
  try {
    return (
      new Intl.DisplayNames([displayLocale], {
        type: "language",
        languageDisplay: "standard",
      }).of(locale) ?? locale
    );
  } catch {
    return locale;
  }
}
function normalizeLocale(locale: string | null | undefined) {
  if (!locale) return null;
  const trimmed = locale.trim();
  return trimmed ? trimmed.replace(/_/g, "-").toLowerCase() : null;
}
function isEnglishLocale(locale: string | null | undefined) {
  const normalized = normalizeLocale(locale);
  return (
    normalized != null && (normalized === "en" || normalized.startsWith("en-"))
  );
}
function areEquivalentLocales(
  leftLocale: string | null | undefined,
  rightLocale: string | null | undefined,
) {
  return isEnglishLocale(leftLocale)
    ? isEnglishLocale(rightLocale)
    : normalizeLocale(leftLocale) === normalizeLocale(rightLocale);
}
function resolveLocale(locale: string | null | undefined) {
  const normalized = normalizeLocale(locale);
  if (!normalized) return;
  const exactLocale = supportedLocales.find(
    (item) => item.normalized === normalized,
  );
  if (exactLocale) return exactLocale;
  const [language, region] = normalized.split("-");
  if (!language) return;
  const languageLocales = supportedLocales.filter(
    (item) => item.language === language,
  );
  if (languageLocales.length !== 0) {
    if (region) {
      const regionLocale = languageLocales.find(
        (item) => item.normalized === `${language}-${region}`,
      );
      if (regionLocale) return regionLocale;
    }
    return languageLocales[0];
  }
}
async function loadLocaleMessages(localeDescriptor: LocaleDescriptor) {
  const localeModule = await localeDescriptor.load();
  if (localeModule.default != null) return localeModule.default;
  const namedDefault = Object.entries(localeModule).find(([exportName]) =>
    exportName.endsWith("Default"),
  )?.[1];
  return namedDefault ?? localeModule;
}

function initLocaleResolverChunk(): void {
  void DEFAULT_LOCALE;
  void localeLoaders;
  void supportedLocales;
}

export {
  isEnglishLocale,
  normalizeLocale,
  getLocaleLanguageDisplayName,
  resolveLocale,
  areEquivalentLocales,
  getSupportedLocales,
  loadLocaleMessages,
  initLocaleResolverChunk,
  DEFAULT_LOCALE,
};
