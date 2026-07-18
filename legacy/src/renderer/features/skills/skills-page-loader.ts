// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Prefetches the code-split Skills page chunk (and its module dependencies) so it
// is warm before the user navigates to it.

import { preloadDynamicImport } from "../../shared/runtime/dynamic-module-preload";

export async function prefetchSkillsPage(): Promise<void> {
  await preloadDynamicImport(
    () =>
      import(
        "../../shared/runtime/current-app-initial/skills-page-route-current-runtime"
      ),
    [],
    import.meta.url,
  );
}
