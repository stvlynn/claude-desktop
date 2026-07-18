// Restored from ref/.vite/build/index.js

export type CoworkSpaceFolder = { path: string };
export type CoworkSpaceProject = { uuid: string };
export type CoworkSpaceLink = {
  url: string;
  title?: string;
  provider?: string;
};

export type CoworkSpace = {
  id: string;
  name: string;
  description?: string;
  folders: CoworkSpaceFolder[];
  projects: CoworkSpaceProject[];
  links: CoworkSpaceLink[];
  instructions?: string;
  ccdFolderPath?: string;
  origin?: "auto" | "user";
  autoMountFolders?: boolean;
  createdAt: number;
  updatedAt: number;
};

export type RemoteSessionSpace = {
  sessionId: string;
  spaceId?: string;
  folders: string[];
  memoryEnabled?: boolean;
};

export type CoworkSpaceEvent = {
  type: "created" | "updated" | "deleted";
  space: CoworkSpace;
};

export function normalizeRemoteSessionId(sessionId: string): string {
  return sessionId.replace(/^cse_/, "session_");
}

export function parseCoworkSpace(value: unknown): CoworkSpace | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  const item = value as Record<string, unknown>;
  if (
    typeof item.id !== "string" ||
    typeof item.name !== "string" ||
    typeof item.createdAt !== "number" ||
    typeof item.updatedAt !== "number" ||
    !Array.isArray(item.folders) ||
    !Array.isArray(item.projects) ||
    !Array.isArray(item.links)
  ) {
    return null;
  }
  const folders = item.folders.filter(
    (entry): entry is CoworkSpaceFolder =>
      typeof entry === "object" &&
      entry !== null &&
      "path" in entry &&
      typeof entry.path === "string",
  );
  const projects = item.projects.filter(
    (entry): entry is CoworkSpaceProject =>
      typeof entry === "object" &&
      entry !== null &&
      "uuid" in entry &&
      typeof entry.uuid === "string",
  );
  const links = item.links.filter(
    (entry): entry is CoworkSpaceLink =>
      typeof entry === "object" &&
      entry !== null &&
      "url" in entry &&
      typeof entry.url === "string",
  );
  return {
    ...(item as CoworkSpace),
    folders,
    projects,
    links,
  };
}

export function parseRemoteSessionSpace(
  value: unknown,
): RemoteSessionSpace | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  const item = value as Record<string, unknown>;
  if (
    typeof item.sessionId !== "string" ||
    !Array.isArray(item.folders) ||
    !item.folders.every((folder) => typeof folder === "string") ||
    !(item.spaceId === undefined || typeof item.spaceId === "string") ||
    !(
      item.memoryEnabled === undefined ||
      typeof item.memoryEnabled === "boolean"
    )
  ) {
    return null;
  }
  return {
    sessionId: normalizeRemoteSessionId(item.sessionId),
    spaceId: item.spaceId,
    folders: item.folders,
    memoryEnabled: item.memoryEnabled,
  };
}
