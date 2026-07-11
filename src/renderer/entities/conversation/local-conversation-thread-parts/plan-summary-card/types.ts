// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Plan summary card type definitions.

export type PlanSummaryItem = {
  content: string;
  completed: boolean;
};

export type PlanSummaryCardProps = {
  item: PlanSummaryItem;
  conversationId: string;
  cwd: string | null;
  turnId?: string;
  hideCodeBlocks?: boolean;
  defaultCollapsed?: boolean;
  hasArtifacts?: boolean;
  reportEntityType?: string;
  showOpenButton?: boolean;
  isThreadPreview?: boolean;
  isThreadPreviewCollapsed?: boolean;
  onOpenInSidePanel?: () => void;
};
