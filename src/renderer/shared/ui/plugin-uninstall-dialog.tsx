// @ts-nocheck
// Restored from ref/webview/assets/plugin-uninstall-dialog-B-C7-Phm.js
// Also matches ref/webview/assets/plugin-uninstall-dialog-B0r3acO1.js.
// Confirmation dialog for uninstalling or removing a plugin.

import type { ReactNode } from "react";
import { Button } from "./main-button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  DialogTitle,
} from "./dialog-layout";

export type PluginUninstallDialogProps = {
  dialogMode?: "card" | "detail";
  isDisabling?: boolean;
  isUninstalling?: boolean;
  onConfirm: () => void;
  onDisable?: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  pluginDisplayName: ReactNode;
};

const messages = {
  disable: "Disable plugin",
  confirmTitle: "Uninstall {name} plugin?",
  removeTitle: "Remove {name} plugin from Codex",
  confirmDescription:
    "This will uninstall the plugin, but it will not uninstall any bundled apps.",
  removeDescription:
    "This removes the plugin from Codex. Bundled apps will remain installed.",
  cancel: "Cancel",
  confirm: "Uninstall",
  removeConfirm: "Remove from Codex",
};

function formatTitle(
  template: string,
  pluginDisplayName: ReactNode,
): ReactNode {
  const parts = template.split("{name}");
  return (
    <>
      {parts[0]}
      <strong key="plugin-name" className="font-semibold text-token-text-primary">
        {pluginDisplayName}
      </strong>
      {parts[1]}
    </>
  );
}

export function PluginUninstallDialog({
  dialogMode = "card",
  isDisabling = false,
  isUninstalling,
  onDisable,
  onConfirm,
  onOpenChange,
  open,
  pluginDisplayName,
}: PluginUninstallDialogProps) {
  const isDetailDialog = dialogMode === "detail";
  const title = formatTitle(
    isDetailDialog ? messages.removeTitle : messages.confirmTitle,
    pluginDisplayName,
  );
  const description = isDetailDialog
    ? messages.removeDescription
    : messages.confirmDescription;
  return (
    <DialogLayout
      open={open}
      contentProps={{
        "aria-describedby": undefined,
      }}
      onOpenChange={onOpenChange}
    >
      <DialogBody>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogSection>
          <DialogHeader
            title={title}
            subtitle={description}
            subtitleClassName="mt-2"
          />
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="outline" onClick={() => onOpenChange(false)}>
              {messages.cancel}
            </Button>
            {onDisable == null ? null : (
              <Button color="outline" loading={isDisabling} onClick={onDisable}>
                {messages.disable}
              </Button>
            )}
            <Button color="danger" loading={isUninstalling} onClick={onConfirm}>
              {isDetailDialog ? messages.removeConfirm : messages.confirm}
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
// Added to satisfy relative import checks.
export const initPluginUninstallDialogChunk = undefined as never;
