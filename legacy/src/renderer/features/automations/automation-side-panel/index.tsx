// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactElement } from "react";
import { AutomationSidePanelBody } from "./body";
import { AutomationSidePanelFooter } from "./footer";
import { useAutomationSidePanelController } from "./use-automation-side-panel-controller";
import type { AutomationSidePanelProps } from "../../../entities/automation-schedule/types";

export {
  AutomationDetailPill,
  AutomationDetailRow,
  AutomationDetailSection,
  AutomationStatusBadge,
} from "./status-components";
export type { AutomationSession, AutomationSidePanelProps } from "../../../entities/automation-schedule/types";

export function AutomationSidePanel(
  props: AutomationSidePanelProps,
): ReactElement {
  const controller = useAutomationSidePanelController(props);

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      <AutomationSidePanelBody controller={controller} />
      <AutomationSidePanelFooter controller={controller} />
    </div>
  );
}
