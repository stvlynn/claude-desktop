// Restored from ref/.vite/build/src-CoIhwwHr.js
// Application ports and runtime contracts for ambient-suggestions generation.

import type {
  AmbientGenerationTokenUsage,
  AmbientSuggestionCandidateResponse,
  AmbientSuggestionSafetyResponse,
  AppServerMarketplace,
  AppServerPathApi,
  AppServerThread,
  ConnectedApp,
} from "../../domain/ambient-suggestions";

export type AmbientStructuredLogger = {
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};

export type RuntimeSchema<T> = {
  safeParse(input: unknown): { success: true; data: T } | { success: false };
};

export type AmbientAppServerConnection = {
  listThreads(request: {
    limit: number;
    cursor: string | null;
    sortKey: "updated_at";
    modelProviders: null;
    sourceKinds: unknown[];
    archived: boolean;
  }): Promise<{ data: AppServerThread[]; nextCursor: string | null }>;
  listApps(request: {
    cursor: string | null;
    forceRefetch: boolean;
    limit: number;
    threadId: null;
  }): Promise<{ data: ConnectedApp[]; nextCursor: string | null }>;
  getUserSavedConfiguration(projectRoot: string): Promise<unknown>;
  getAuthToken(request: { refreshToken: boolean }): Promise<string | null>;
  listPlugins(
    request?: unknown,
  ): Promise<{ marketplaces: AppServerMarketplace[] }>;
  codexHome(): Promise<string>;
  platformPath(): Promise<AppServerPathApi>;
  readFile(path: string): Promise<Blob | ArrayBuffer | Uint8Array | string>;
  startThread(request: unknown): Promise<{ thread: { id: string } }>;
  startTurn(request: unknown): Promise<{ turn: { id: string } }>;
  interruptTurn?(request: { threadId: string; turnId: string }): Promise<void>;
  unsubscribeThread(threadId: string): Promise<void>;
  registerInternalNotificationHandler(
    handler: (notification: AppServerNotification) => void,
  ): () => void;
};

export type AppServerNotification =
  | {
      method: "error";
      params: {
        threadId: string;
        turnId?: string | null;
        error?: { message?: string; additionalDetails?: string };
      };
    }
  | {
      method: "turn/started";
      params: { threadId: string; turn: { id: string } };
    }
  | {
      method: "thread/tokenUsage/updated";
      params: {
        threadId: string;
        turnId?: string | null;
        tokenUsage: AmbientGenerationTokenUsage;
      };
    }
  | {
      method: "item/agentMessage/delta";
      params: { threadId: string; turnId?: string | null; delta: string };
    }
  | {
      method: "item/completed";
      params: {
        threadId: string;
        turnId?: string | null;
        item: { type: string; text?: string };
      };
    }
  | {
      method: "turn/completed";
      params: {
        threadId: string;
        turn: {
          id: string;
          status: string;
          error?: { message?: string; additionalDetails?: string } | null;
        };
      };
    };

export type {
  AmbientGenerationTokenUsage,
  AmbientSuggestionCandidateResponse,
  AmbientSuggestionSafetyResponse,
};
