// @ts-nocheck
// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { useIntl } from "../../../shared/runtime/react-intl";
import { toastControllerToken } from "../../../shared/runtime/onboarding-commons-externals.facade";

export function showAutomationSaveErrorToast(
  store: {
    get: (token: unknown) => {
      danger: (title: string, options: { description: string }) => void;
    };
  },
  intl: ReturnType<typeof useIntl>,
  message: string,
): void {
  store.get(toastControllerToken).danger(
    intl.formatMessage({
      id: "inbox.automations.saveError",
      defaultMessage: "Could not save scheduled task",
      description: "Toast title when saving a scheduled task fails",
    }),
    { description: message },
  );
}
