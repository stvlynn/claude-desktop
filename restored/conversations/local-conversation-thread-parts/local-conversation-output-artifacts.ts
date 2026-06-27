// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Output artifact collection for local conversation turns.
import { once } from "../../runtime/commonjs-interop";
import {
  Aj as resolveWorkspacePathFromCwd,
  DL as normalizeWorkspacePath,
  Hv as collectTurnFileArtifacts,
  Kg as initNormalizedPathUtilities,
  Nv as initConversationArtifactRuntime,
  Oj as normalizeArtifactPathKey,
  Pv as renderConversationTurnForArtifacts,
  Qg as initArtifactPathDetectionHelpers,
  Ug as collectAssistantOutputArtifacts,
  Uv as initMarkdownArtifactHelpers,
  Wg as initMarkdownResourceHelpers,
  bF as initPathHelpers,
  bR as isFileUrlLikeTarget,
  e_ as isFileReferencePath,
  lD as initMarkdownArtifactRenderingHelpers,
  qg as isResourcePathInsideProjectlessOutput,
  uD as mapTurnStatusToOutputStatus,
  vR as normalizeHref,
  wj as initArtifactPreviewRuntime,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import type { LocalConversationOutputArtifact } from "./artifact-summary";

type ConversationTurnItemLike = {
  id?: string;
  src?: string | null;
  text?: string;
  type?: string;
};

type ConversationTurnLike = {
  items: readonly (ConversationTurnItemLike | null | undefined)[];
  params: {
    collaborationMode?: string | null;
    cwd?: string | null;
  };
  status: string;
};

type TurnFileArtifactsLike = {
  referencedFilePaths: readonly string[];
};

type AssistantRenderedArtifact = Exclude<
  LocalConversationOutputArtifact,
  { type: "generated-image" }
>;

export type LocalConversationOutputArtifactsOptions = {
  includeGeneratedImages?: boolean;
  projectlessOutputDirectory?: string | null;
};

export function collectLocalConversationOutputArtifacts(
  turns: readonly ConversationTurnLike[],
  {
    includeGeneratedImages = false,
    projectlessOutputDirectory = null,
  }: LocalConversationOutputArtifactsOptions = {},
): LocalConversationOutputArtifact[] {
  let artifactGroups: LocalConversationOutputArtifact[][] = [];
  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    artifactGroups.push(
      collectOutputArtifactsForTurn(
        turns[turnIndex],
        projectlessOutputDirectory,
        includeGeneratedImages,
      ),
    );
  }
  return mergeUniqueOutputArtifacts(artifactGroups);
}

export function mergeUniqueOutputArtifacts(
  artifactGroups: readonly (readonly LocalConversationOutputArtifact[])[],
): LocalConversationOutputArtifact[] {
  let mergedArtifacts: LocalConversationOutputArtifact[] = [],
    artifactIndexByKey = new Map<string, number>();

  for (let artifactGroup of artifactGroups)
    for (let artifact of artifactGroup) {
      let artifactKey = getOutputArtifactKey(artifact),
        existingIndex = artifactIndexByKey.get(artifactKey);
      if (existingIndex != null) {
        let existingArtifact = mergedArtifacts[existingIndex];
        existingArtifact?.type === "file" &&
          artifact.type === "generated-image" &&
          (mergedArtifacts[existingIndex] = {
            ...existingArtifact,
            type: "generated-image",
          });
        continue;
      }
      artifactIndexByKey.set(artifactKey, mergedArtifacts.length);
      mergedArtifacts.push(artifact);
    }
  return mergedArtifacts;
}

function collectOutputArtifactsForTurn(
  turn: ConversationTurnLike,
  projectlessOutputDirectory: string | null,
  includeGeneratedImages: boolean,
): LocalConversationOutputArtifact[] {
  let status = mapTurnStatusToOutputStatus(turn.status),
    turnArtifacts = collectTurnFileArtifacts(turn) as TurnFileArtifactsLike,
    cwd =
      turn.params.cwd == null ? null : normalizeWorkspacePath(turn.params.cwd);
  return collectOutputArtifactsFromTurnDetails({
    assistantContent:
      status === "complete" ? getLatestAgentMessageText(turn) : null,
    cwd,
    includeGeneratedImages,
    projectlessOutputDirectory,
    status,
    turn,
    turnArtifacts,
  });
}

function getLatestAgentMessageText(turn: ConversationTurnLike): string | null {
  for (let itemIndex = turn.items.length - 1; itemIndex >= 0; --itemIndex) {
    let item = turn.items[itemIndex];
    if (item?.type === "agentMessage") return item.text ?? null;
  }
  return null;
}

type CollectOutputArtifactsFromTurnDetailsOptions = {
  assistantContent: string | null;
  cwd: string | null;
  includeGeneratedImages: boolean;
  projectlessOutputDirectory: string | null;
  status: string;
  turn: ConversationTurnLike;
  turnArtifacts: TurnFileArtifactsLike;
};

function collectOutputArtifactsFromTurnDetails({
  assistantContent,
  cwd,
  includeGeneratedImages,
  projectlessOutputDirectory,
  status,
  turn,
  turnArtifacts,
}: CollectOutputArtifactsFromTurnDetailsOptions): LocalConversationOutputArtifact[] {
  let artifacts: LocalConversationOutputArtifact[] = [],
    artifactIndexByKey = new Map<string, number>(),
    addArtifact = (artifact: LocalConversationOutputArtifact) => {
      let artifactKey = getOutputArtifactKey(artifact),
        existingIndex = artifactIndexByKey.get(artifactKey);
      if (existingIndex == null) {
        artifactIndexByKey.set(artifactKey, artifacts.length);
        artifacts.push(artifact);
        return;
      }
      (artifacts[existingIndex]?.type === "file" ||
        artifacts[existingIndex]?.type === "generated-image") &&
        (artifact.type === "website" || artifact.type === "generated-image") &&
        (artifacts[existingIndex] = artifact);
    };

  for (let referencedFilePath of turnArtifacts.referencedFilePaths)
    isFileReferencePath(referencedFilePath) &&
      isResourcePathInsideProjectlessOutput({
        cwd,
        projectlessOutputDirectory,
        resourcePath: referencedFilePath,
      }) &&
      addArtifact({
        type: "file",
        path:
          cwd == null
            ? referencedFilePath
            : resolveWorkspacePathFromCwd(cwd, referencedFilePath),
      });

  let itemsToScan = includeGeneratedImages
    ? turn.items.slice().reverse()
    : turn.items;
  for (let item of itemsToScan)
    item?.type === "imageGeneration" &&
      item.src != null &&
      isFileReferencePath(item.src) &&
      (includeGeneratedImages ||
        isResourcePathInsideProjectlessOutput({
          cwd,
          projectlessOutputDirectory,
          resourcePath: item.src,
        })) &&
      addArtifact({
        type: includeGeneratedImages ? "generated-image" : "file",
        path:
          cwd == null ? item.src : resolveWorkspacePathFromCwd(cwd, item.src),
      });

  if (status !== "complete") return artifacts;

  let renderedArtifacts = collectAssistantOutputArtifacts({
    assistantContent,
    isAppgenEndCardEnabled: true,
    projectlessOutputDirectory,
    turn: {
      artifacts: turnArtifacts,
      collaborationMode: turn.params.collaborationMode ?? null,
      cwd,
      items: renderConversationTurnForArtifacts(turn, []).items,
      status,
    },
  }) as AssistantRenderedArtifact[];

  for (let artifact of renderedArtifacts)
    switch (artifact.type) {
      case "file":
        addArtifact({
          type: "file",
          path:
            cwd == null
              ? artifact.path
              : resolveWorkspacePathFromCwd(cwd, artifact.path),
        });
        break;
      case "google-drive":
        addArtifact({
          resourceKind: artifact.resourceKind,
          title: artifact.title,
          type: "google-drive",
          url: artifact.url,
        });
        break;
      case "appgen-app":
        addArtifact({
          projectId: artifact.projectId,
          title: artifact.title,
          type: "appgen-app",
          url: artifact.url,
        });
        break;
      case "website":
        addArtifact({
          type: "website",
          target:
            isFileUrlLikeTarget(artifact.target) || cwd == null
              ? artifact.target
              : resolveWorkspacePathFromCwd(cwd, artifact.target),
        });
        break;
    }

  return artifacts;
}

function getOutputArtifactKey(
  artifact: LocalConversationOutputArtifact,
): string {
  switch (artifact.type) {
    case "file":
    case "generated-image":
      return `path:${normalizeArtifactPathKey(artifact.path)}`;
    case "google-drive":
      return `google-drive:${artifact.url}`;
    case "appgen-app":
      return `appgen-app:${artifact.projectId}`;
    case "website":
      return isFileUrlLikeTarget(artifact.target)
        ? `url:${normalizeHref(artifact.target)}`
        : `path:${normalizeArtifactPathKey(artifact.target)}`;
  }
}

export const initOutputArtifactCollectorDependencies = once(() => {
  initPathHelpers();
  initArtifactPathDetectionHelpers();
  initMarkdownArtifactHelpers();
  initMarkdownArtifactRenderingHelpers();
  initConversationArtifactRuntime();
  initMarkdownResourceHelpers();
  initNormalizedPathUtilities();
  initArtifactPreviewRuntime();
});
