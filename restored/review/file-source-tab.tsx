// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Semantic wrapper around the current-ref workspace file-source tab export.
import { Iu as RawFileSourceTab } from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";

export interface FileSourceTabState {
  scrollLeft?: number;
  scrollTop?: number;
}

export interface FileSourceTabProps {
  cwd?: string | null;
  headerActions?: React.ReactNode;
  hostId?: string;
  initialEndLine?: number | null;
  initialLine?: number | null;
  onSelectFile?: (path: string) => void;
  path: string | null;
  setTabState?: (updater: (prev: FileSourceTabState) => FileSourceTabState) => void;
  tabId?: string;
  tabState?: FileSourceTabState;
  workspaceRoot?: string | null;
}

export function FileSourceTab(props: FileSourceTabProps) {
  return <RawFileSourceTab {...props} />;
}
