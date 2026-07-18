// Restored from ref/.vite/build/index.js

import { session, type App, type WebContents } from "electron";
import type { DesktopUpdateManager } from "../infrastructure/desktop-runtime-types";
import { registerCurrentAutoUpdaterIpc } from "../interfaces/current-auto-updater-ipc";
import { registerCurrentClaudeAiImportIpc } from "../interfaces/current-claude-ai-import-ipc";
import { registerCurrentClaudeCodeIpc } from "../interfaces/current-claude-code-ipc";
import { registerCurrentComputerUseTccIpc } from "../interfaces/current-computer-use-tcc-ipc";
import { registerCurrentCoworkSpacesIpc } from "../interfaces/current-cowork-spaces-ipc";
import { registerCurrentCoworkArtifactsIpc } from "../interfaces/current-cowork-artifacts-ipc";
import { registerCurrentDeviceRegistryIpc } from "../interfaces/current-device-registry-ipc";
import { registerCurrentGrandPrixIpc } from "../interfaces/current-grand-prix-ipc";
import { registerCurrentPluginBridgeMcpIpc } from "../interfaces/current-plugin-bridge-mcp-ipc";
import { registerCurrentScheduledTasksIpc } from "../interfaces/current-scheduled-tasks-ipc";
import { registerCurrentLaunchIpc } from "../interfaces/current-launch-ipc";
import { registerCurrentClaudeVmIpc } from "../interfaces/current-claude-vm-ipc";
import { registerCurrentFileSystemIpc } from "../interfaces/current-file-system-ipc";
import { registerCurrentDocumentFunnelIpc } from "../interfaces/current-document-funnel-ipc";
import { registerCurrentExtensionsIpc } from "../interfaces/current-extensions-ipc";
import { registerCurrentCustom3pSetupIpc } from "../interfaces/current-custom-3p-setup-ipc";
import { registerCurrentLocalPluginsIpc } from "../interfaces/current-local-plugins-ipc";
import { registerCurrentCustomPluginsIpc } from "../interfaces/current-custom-plugins-ipc";
import { registerCurrentLocalAgentModeSessionsIpc } from "../interfaces/current-local-agent-mode-sessions-ipc";
import { registerCurrentLocalSessionsIpc } from "../interfaces/current-local-sessions-ipc";
import { AutoUpdaterService } from "./auto-updater-service";
import { ClaudeAiImportService } from "./claude-ai-import-service";
import { ClaudeCodeService } from "./claude-code-service";
import { ComputerUseTccService } from "./computer-use-tcc-service";
import { CoworkSpacesService } from "./cowork-spaces-service";
import { CoworkArtifactsService } from "./cowork-artifacts-service";
import { DeviceRegistryService } from "./device-registry-service";
import { GrandPrixService } from "./grand-prix-service";
import { PluginBridgeMcpService } from "./plugin-bridge-mcp-service";
import { ScheduledTasksService } from "./scheduled-tasks-service";
import { LaunchService } from "./launch-service";
import { ClaudeVmService } from "./claude-vm-service";
import { FileSystemService } from "./file-system-service";
import { DocumentFunnelService } from "./document-funnel-service";
import { ExtensionsService } from "./extensions-service";
import { Custom3pSetupService } from "./custom-3p-setup-service";
import { LocalPluginsService } from "./local-plugins-service";
import { CustomPluginsService } from "./custom-plugins-service";
import { LocalAgentModeSessionsService } from "./local-agent-mode-sessions-service";
import { LocalSessionRuntimeService } from "./local-session-runtime-service";
import { LocalSessionsService } from "./local-sessions-service";
import { CoworkSpaceRepository } from "../infrastructure/cowork-space-repository";
import type { CoworkUserFilesService } from "../infrastructure/cowork-user-files-service";

export function registerCurrentCoreCapabilityIpc({
  app,
  trustedWebContents,
  updateManager,
  coworkUserFilesService,
}: {
  app: App;
  trustedWebContents: ReadonlySet<WebContents>;
  updateManager: DesktopUpdateManager;
  coworkUserFilesService: CoworkUserFilesService;
}): () => void {
  const localSessionRuntime = new LocalSessionRuntimeService(app);
  const localSessionsService = new LocalSessionsService(
    app,
    localSessionRuntime,
  );
  const localAgentModeSessionsService = new LocalAgentModeSessionsService(
    app,
    localSessionRuntime,
  );
  const disposers = [
    registerCurrentAutoUpdaterIpc({
      service: new AutoUpdaterService(updateManager, () =>
        localSessionRuntime.runningSessions(),
      ),
      trustedWebContents,
    }),
    registerCurrentDeviceRegistryIpc({
      service: new DeviceRegistryService(),
      trustedWebContents,
    }),
    registerCurrentClaudeAiImportIpc({
      service: new ClaudeAiImportService(),
      trustedWebContents,
    }),
    registerCurrentClaudeCodeIpc({
      service: new ClaudeCodeService(app),
      trustedWebContents,
    }),
    registerCurrentComputerUseTccIpc({
      service: new ComputerUseTccService(),
      trustedWebContents,
    }),
    registerCurrentGrandPrixIpc({
      service: new GrandPrixService(),
      trustedWebContents,
    }),
    registerCurrentPluginBridgeMcpIpc({
      service: new PluginBridgeMcpService(),
      trustedWebContents,
    }),
    registerCurrentCoworkSpacesIpc({
      service: new CoworkSpacesService(
        new CoworkSpaceRepository(app, session.defaultSession),
      ),
      trustedWebContents,
    }),
    registerCurrentCoworkArtifactsIpc({
      service: new CoworkArtifactsService(
        app,
        session.defaultSession,
        async () => (await coworkUserFilesService.getInfo()).currentRoot,
      ),
      trustedWebContents,
    }),
    registerCurrentScheduledTasksIpc({
      service: new ScheduledTasksService(app, session.defaultSession, "cowork"),
      trustedWebContents,
    }),
    registerCurrentScheduledTasksIpc({
      service: new ScheduledTasksService(app, session.defaultSession, "ccd"),
      trustedWebContents,
    }),
    registerCurrentLaunchIpc({
      service: new LaunchService(),
      trustedWebContents,
    }),
    registerCurrentClaudeVmIpc({
      service: new ClaudeVmService(app),
      trustedWebContents,
    }),
    registerCurrentFileSystemIpc({
      service: new FileSystemService(),
      trustedWebContents,
    }),
    registerCurrentDocumentFunnelIpc({
      service: new DocumentFunnelService(app, session.defaultSession),
      trustedWebContents,
    }),
    registerCurrentExtensionsIpc({
      service: new ExtensionsService(app),
      trustedWebContents,
    }),
    registerCurrentCustom3pSetupIpc({
      service: new Custom3pSetupService(app),
      trustedWebContents,
    }),
    registerCurrentLocalPluginsIpc({
      service: new LocalPluginsService(),
      trustedWebContents,
    }),
    registerCurrentCustomPluginsIpc({
      service: new CustomPluginsService(),
      trustedWebContents,
    }),
    registerCurrentLocalAgentModeSessionsIpc({
      service: localAgentModeSessionsService,
      trustedWebContents,
    }),
    registerCurrentLocalSessionsIpc({
      service: localSessionsService,
      trustedWebContents,
    }),
  ];
  return () => {
    for (const dispose of disposers.reverse()) dispose();
    localAgentModeSessionsService.dispose();
    localSessionsService.dispose();
  };
}
