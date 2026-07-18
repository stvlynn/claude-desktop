// Restored from ref/.vite/build/index.js

import type { WebContents } from "electron";
import {
  LocalSessionSshService,
  type SshConfig,
} from "../infrastructure/local-session-ssh-service";

const MAX_ATTACHMENTS = 20;
const MAX_ATTACHMENT_BYTES = 30 * 1024 * 1024;

type RemoteAttachment = {
  name: string;
  blobUuid: string;
};

function remoteAttachment(value: unknown): RemoteAttachment | null {
  if (
    typeof value !== "object" ||
    value === null ||
    typeof Reflect.get(value, "name") !== "string" ||
    typeof Reflect.get(value, "blobUuid") !== "string"
  ) {
    return null;
  }
  return {
    name: Reflect.get(value, "name") as string,
    blobUuid: Reflect.get(value, "blobUuid") as string,
  };
}

export class LocalSessionAttachmentService {
  constructor(private readonly ssh: LocalSessionSshService) {}

  async prepareRemoteMessage(
    config: SshConfig,
    sessionId: string,
    message: string,
    value: unknown,
    sender?: WebContents,
  ): Promise<string> {
    if (value === undefined || value === null) return message;
    if (!Array.isArray(value)) {
      throw new TypeError("Attachments must be an array");
    }
    if (!sender || sender.isDestroyed()) return message;

    const attachments = [];
    let failed = Math.max(0, value.length - MAX_ATTACHMENTS);
    for (const [index, valueItem] of value
      .slice(0, MAX_ATTACHMENTS)
      .entries()) {
      const item = remoteAttachment(valueItem);
      if (!item) {
        failed += 1;
        continue;
      }
      const bytes = await sender.session
        .getBlobData(item.blobUuid)
        .catch(() => null);
      if (!bytes || bytes.byteLength > MAX_ATTACHMENT_BYTES) {
        failed += 1;
        continue;
      }
      attachments.push({
        name: item.name || `attachment-${index + 1}`,
        bytes,
      });
    }

    const remotePaths = await this.ssh.uploadAttachments(
      config,
      sessionId,
      attachments,
    );
    const prefix = remotePaths.length
      ? `Attached files on the remote host:\n${remotePaths.map((filePath) => `- ${filePath}`).join("\n")}\n\n`
      : "";
    const warning = failed
      ? `(${failed} attachment${failed === 1 ? "" : "s"} could not be sent to the remote host.)\n\n`
      : "";
    return `${prefix}${warning}${message}`;
  }
}
