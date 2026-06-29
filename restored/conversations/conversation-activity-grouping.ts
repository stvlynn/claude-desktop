// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Grouping passes that fold a conversation turn's raw render entries into
// web-search / multi-agent / pending-MCP / dynamic-tool-call / collapsed-tool
// activity groups for the local conversation thread (localConversation domain).
import {
  getMcpToolCallItem,
  isMcpToolCallExcludedFromGrouping,
  getMcpToolCallGroupKey,
  getDynamicToolCallItem,
  findToolActivityDescriptor,
  shouldGroupDynamicToolCalls,
  isDynamicToolCallUnit,
  toToolActivitySummaryUnit,
  buildToolActivitySummaries,
  findIndexAfterLastAssistantMessage,
  shouldCollapseGroupedUnits,
  buildCollapsedActivityKey,
  adjustCollapsedActivitySummary,
} from "../boundaries/onboarding-commons-externals.facade";

export type ConversationDetailLevel = "STEPS_PROSE" | (string & {});

export type ToolActivityItem = {
  type: string;
  action?: string;
  id?: string;
  callId?: string;
  query?: string;
  completed?: boolean;
  [key: string]: unknown;
};

export type RenderEntry =
  | { kind: "item"; item: ToolActivityItem }
  | { kind: "exploration"; items: ToolActivityItem[] }
  | { kind: string; [key: string]: unknown };

export type ActivityGroup =
  | { kind: "entry"; entry: RenderEntry }
  | { kind: "multi-agent-group"; items: ToolActivityItem[] }
  | { kind: "web-search-group"; items: ToolActivityItem[] };

export type ActivityUnit =
  | ActivityGroup
  | {
      kind:
        | "collapsed-tool-activity"
        | "pending-mcp-tool-calls"
        | "dynamic-tool-call-group";
      key: string;
      items?: ToolActivityItem[];
      units?: ActivityUnit[];
      summary?: unknown;
    };

export type GroupPendingMcpToolCallsOptions = {
  units: ActivityUnit[];
  isActivitySliceClosed: boolean;
  mcpServerStatuses: unknown;
  shouldAutoExpandMcpApps?: boolean;
  resolvedApps: unknown;
  keepLatestLiveActivityInGroup?: boolean;
};

export type GroupDynamicToolCallsOptions = {
  units: ActivityUnit[];
  keepLatestLiveActivityInGroup?: boolean;
};

export type CollapseToolActivityOptions = {
  units: ActivityUnit[];
  isActivitySliceClosed: boolean;
  conversationDetailLevel: ConversationDetailLevel;
  mcpServerStatuses: unknown;
  resolvedApps: unknown;
  shouldAutoExpandMcpApps?: boolean;
  modelProvider?: unknown;
  isTurnCancelled?: boolean;
  collapseMixedDynamicToolActivity?: boolean;
};

// Hit: fold consecutive web-search items into a single web-search-group and
// consecutive multi-agent actions sharing an action into a multi-agent-group;
// everything else passes through as a plain entry.
export function groupConversationActivityEntries(
  entries: RenderEntry[],
): ActivityGroup[] {
  const groups: ActivityGroup[] = [];
  let pendingWebSearches: ToolActivityItem[] = [];

  const flushWebSearches = () => {
    if (pendingWebSearches.length !== 0) {
      groups.push({ kind: "web-search-group", items: pendingWebSearches });
      pendingWebSearches = [];
    }
  };

  for (const entry of entries) {
    if (entry.kind === "item" && (entry as any).item.type === "web-search") {
      pendingWebSearches.push((entry as any).item);
      continue;
    }
    flushWebSearches();
    if (
      entry.kind === "item" &&
      (entry as any).item.type === "multi-agent-action"
    ) {
      const item = (entry as any).item as ToolActivityItem;
      const last = groups[groups.length - 1];
      if (
        last?.kind === "multi-agent-group" &&
        last.items[0]?.action === item.action
      ) {
        last.items.push(item);
        continue;
      }
      groups.push({ kind: "multi-agent-group", items: [item] });
      continue;
    }
    groups.push({ kind: "entry", entry });
  }

  flushWebSearches();
  return groups;
}

// Uit: while the activity slice is open, merge runs of adjacent MCP tool calls
// that share a group key into a single pending-mcp-tool-calls unit.
export function groupPendingMcpToolCalls({
  units,
  isActivitySliceClosed,
  mcpServerStatuses,
  shouldAutoExpandMcpApps = false,
  resolvedApps,
  keepLatestLiveActivityInGroup = false,
}: GroupPendingMcpToolCallsOptions): ActivityUnit[] {
  if (isActivitySliceClosed) return units;

  const result: ActivityUnit[] = [];
  for (let index = 0; index < units.length; ) {
    const grouped: ToolActivityItem[] = [];
    let groupKey: string | null = null;
    let cursor = index;

    for (; cursor < units.length; ) {
      const item = getMcpToolCallItem(units[cursor]);
      if (
        item == null ||
        isMcpToolCallExcludedFromGrouping(
          item,
          mcpServerStatuses,
          shouldAutoExpandMcpApps,
        )
      )
        break;
      const key = getMcpToolCallGroupKey({ item, resolvedApps });
      if (groupKey != null && key !== groupKey) break;
      groupKey = key;
      grouped.push(item);
      cursor += 1;
    }

    if (
      grouped.length > 1 ||
      (keepLatestLiveActivityInGroup &&
        grouped.length > 0 &&
        cursor === units.length)
    ) {
      result.push({
        kind: "pending-mcp-tool-calls",
        key: grouped[0]?.callId ?? `${index}`,
        items: grouped,
      });
      index = cursor;
      continue;
    }

    const unit = units[index];
    if (unit != null) result.push(unit);
    index += 1;
  }
  return result;
}

// Wit: fold runs of dynamic-tool-call items into a dynamic-tool-call-group,
// honoring descriptors that must stand alone in the conversation.
export function groupDynamicToolCalls({
  units,
  keepLatestLiveActivityInGroup = false,
}: GroupDynamicToolCallsOptions): ActivityUnit[] {
  const result: ActivityUnit[] = [];
  for (let index = 0; index < units.length; ) {
    const grouped: ToolActivityItem[] = [];
    let firstUnit: ActivityUnit | null = null;
    let cursor = index;

    for (; cursor < units.length; ) {
      const item = getDynamicToolCallItem(units[cursor]);
      if (item == null) break;
      if (findToolActivityDescriptor(item)?.standaloneInConversation === true) {
        if (grouped.length > 0) break;
        grouped.push(item);
        firstUnit = units[cursor] ?? null;
        cursor += 1;
        break;
      }
      grouped.push(item);
      const unit = units[cursor];
      if (firstUnit == null && unit != null) firstUnit = unit;
      cursor += 1;
    }

    if (cursor === index) {
      const unit = units[index];
      if (unit != null) result.push(unit);
      index += 1;
      continue;
    }

    if (grouped.length === 0) {
      index = cursor;
      continue;
    }

    if (
      shouldGroupDynamicToolCalls({
        items: grouped,
        keepLatestLiveActivityInGroup:
          keepLatestLiveActivityInGroup && cursor === units.length,
      })
    ) {
      result.push({
        kind: "dynamic-tool-call-group",
        key: grouped[0]?.callId ?? `${index}`,
        items: grouped,
      });
      index = cursor;
      continue;
    }

    if (firstUnit != null) result.push(firstUnit);
    index = cursor;
  }
  return result;
}

// YG: in prose detail mode, a group is renderable only if it contains an item
// other than automatic-approval-review / exec / patch; otherwise always.
export function shouldRenderActivityGroup(
  conversationDetailLevel: ConversationDetailLevel,
  units: ActivityGroup[],
): boolean {
  return conversationDetailLevel === "STEPS_PROSE"
    ? units.some((unit) =>
        unit.kind !== "entry" || (unit as any).entry.kind !== "item"
          ? true
          : (unit as any).entry.item.type !== "automatic-approval-review" &&
            (unit as any).entry.item.type !== "exec" &&
            (unit as any).entry.item.type !== "patch",
      )
    : true;
}

// Xit: collapse contiguous tool-activity into collapsed-tool-activity units with
// rolled-up summaries, keeping the current (open) activity expanded.
export function collapseToolActivityUnits({
  units,
  isActivitySliceClosed,
  conversationDetailLevel,
  mcpServerStatuses,
  resolvedApps,
  shouldAutoExpandMcpApps = false,
  modelProvider = null,
  isTurnCancelled = false,
  collapseMixedDynamicToolActivity = false,
}: CollapseToolActivityOptions): ActivityUnit[] {
  const summaryUnits = units.map((unit) =>
    collapseMixedDynamicToolActivity && isDynamicToolCallUnit(unit)
      ? {
          type: "mcp-tool-call",
          isInProgress: !(unit as any).entry.item.completed,
          source: null,
        }
      : toToolActivitySummaryUnit(unit, {
          mcpServerStatuses,
          resolvedApps,
          shouldKeepMcpAppToolCallsExpandedByDefault: shouldAutoExpandMcpApps,
          modelProvider,
          isTurnCancelled,
        }),
  );

  const ranges: Array<{
    startIndex: number;
    endIndex: number;
    summary: unknown;
  }> = [
    ...buildToolActivitySummaries({
      units: summaryUnits,
      isActivitySliceClosed,
    }),
  ];

  if (!isActivitySliceClosed) {
    const tailStart = findIndexAfterLastAssistantMessage(summaryUnits);
    const tailUnits: any[] = [];
    for (const unit of summaryUnits.slice(tailStart)) {
      if (unit.type === "mcp-tool-call") {
        tailUnits.push({ type: "other" });
        continue;
      }
      tailUnits.push(unit);
    }
    for (const range of buildToolActivitySummaries({
      units: tailUnits,
      isActivitySliceClosed: true,
    })) {
      ranges.push({
        startIndex: range.startIndex + tailStart,
        endIndex: range.endIndex + tailStart,
        summary: range.summary,
      });
    }
  }

  const collapsibleRanges = ranges.filter((range) =>
    shouldCollapseGroupedUnits(units.slice(range.startIndex, range.endIndex)),
  );
  if (collapsibleRanges.length === 0) return units;
  collapsibleRanges.sort((a, b) => a.startIndex - b.startIndex);

  const result: ActivityUnit[] = [];
  let rangeIndex = 0;
  for (let index = 0; index < units.length; ) {
    const range = collapsibleRanges[rangeIndex];
    if (range && index === range.startIndex) {
      const groupedUnits = units.slice(range.startIndex, range.endIndex);
      const firstUnit = groupedUnits[0];
      const isCurrentToolActivity =
        !isActivitySliceClosed && range.endIndex === units.length;

      if (
        groupedUnits.length === 1 &&
        firstUnit != null &&
        firstUnit.kind === "entry" &&
        (firstUnit as any).entry.kind === "item"
      ) {
        const item = (firstUnit as any).entry.item;
        if (
          item.type === "mcp-tool-call" ||
          (conversationDetailLevel !== "STEPS_PROSE" &&
            item.type === "exec" &&
            !isCurrentToolActivity)
        ) {
          result.push(firstUnit);
          index = range.endIndex;
          rangeIndex += 1;
          continue;
        }
      }

      if (firstUnit != null) {
        const summary = adjustCollapsedActivitySummary({
          groupedUnits,
          isCurrentToolActivity,
          summary: range.summary,
        });
        result.push({
          kind: "collapsed-tool-activity",
          key: buildCollapsedActivityKey(firstUnit, range.startIndex),
          units: groupedUnits,
          summary,
        });
      }
      index = range.endIndex;
      rangeIndex += 1;
      continue;
    }

    const unit = units[index];
    if (unit != null) result.push(unit);
    index += 1;
  }
  return result;
}
