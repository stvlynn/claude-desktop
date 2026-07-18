// Restored from ref/.vite/build/index.js

import { Notification } from "electron";

export type DesktopNotificationAuthorizationStatus =
  "notDetermined" | "denied" | "authorized" | "provisional" | "ephemeral";

export class DesktopNotificationService {
  private readonly notifications = new Map<string, Notification>();

  async getAuthorizationStatus(): Promise<DesktopNotificationAuthorizationStatus> {
    return "authorized";
  }

  async requestAuthorization(): Promise<"granted" | "denied" | "error"> {
    return "granted";
  }

  openNotificationSettings(): void {
    // The optional Swift bridge owns this operation; Electron exposes no settings endpoint.
  }

  showNotification({
    title,
    body,
    tag,
    onClick,
  }: {
    title: string;
    body: string;
    tag?: string;
    onClick?: () => void;
  }): void {
    if (!Notification.isSupported()) return;
    const notificationId = tag ?? `notification-${Date.now()}`;
    this.notifications.get(notificationId)?.close();
    const notification = new Notification({ title, body });
    const remove = (): void => {
      if (this.notifications.get(notificationId) === notification) {
        this.notifications.delete(notificationId);
      }
    };
    notification.once("click", () => {
      remove();
      onClick?.();
    });
    notification.once("close", remove);
    this.notifications.set(notificationId, notification);
    notification.show();
  }

  dispose(): void {
    for (const notification of this.notifications.values()) {
      notification.close();
    }
    this.notifications.clear();
  }
}
