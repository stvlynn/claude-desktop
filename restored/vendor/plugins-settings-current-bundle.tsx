// Restored from ref/webview/assets/plugins-settings-BqBINsWY.js
// Current PluginsSettings backing bundle with restored dependency imports.

import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime } from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  currentAppInitialSharedMember0505 as pluginDirectoryEntrypoints,
  remoteControlRefreshSourceEnum as initRemoteControlRefreshSourceEnum,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  initPluginsPageChunk,
  PluginsPage,
} from "../runtime/current-app-initial/plugins-page-current-runtime";
function PluginsSettings() {
  return (
    <SettingsContentLayout>
      <PluginsPage
        directoryEntrypoint={
          pluginDirectoryEntrypoints.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS
        }
      />
    </SettingsContentLayout>
  );
}
rolldownRuntimeN(() => {
  initReactCompilerRuntime();
  initRemoteControlRefreshSourceEnum();
  initPluginsPageChunk();
  initSettingsContentLayoutChunk();
})();
export { PluginsSettings };
