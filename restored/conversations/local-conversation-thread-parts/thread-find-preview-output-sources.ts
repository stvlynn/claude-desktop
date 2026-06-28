// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Source helpers for prompt-rail preview outputs in thread find.
import {
  ph as parseGitActionDirectives,
  Sj as getPathBasename,
  Ug as collectAssistantOutputArtifacts,
  UR as isAbsoluteOrWindowsPath,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

type AssistantOutputArtifact =
  | {
      path: string;
      type: "file";
    }
  | {
      title: string | null;
      type: "appgen-app" | "google-drive";
    }
  | {
      type: "website";
    };

type AssistantOutputArtifactsOptions = {
  assistantContent: string | null;
  isAppgenEndCardEnabled: boolean;
  projectlessOutputDirectory: string | null;
  turn: unknown;
};

type GitActionDirective =
  | {
      type: "commit" | "create-pr";
    }
  | {
      type: "create-branch" | "push" | "stage";
    };

export function collectThreadFindAssistantOutputArtifacts(
  options: AssistantOutputArtifactsOptions,
): AssistantOutputArtifact[] {
  return collectAssistantOutputArtifacts(options) as AssistantOutputArtifact[];
}

export function getPreviewPathBasename(path: string): string {
  return getPathBasename(path);
}

export function isAbsoluteGeneratedImagePath(path: string): boolean {
  return isAbsoluteOrWindowsPath(path);
}

export function parseThreadFindGitActionDirectives(
  assistantContent: string | null,
): GitActionDirective[] {
  return parseGitActionDirectives(assistantContent) as GitActionDirective[];
}
