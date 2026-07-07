// Restored from ref/.vite/renderer/about_window/assets/AboutWindow-DJTf96rn.js

import type { ReactNode } from "react";
import { FormattedMessage as ReactIntlFormattedMessage } from "react-intl";

export type FormattedMessageProps = {
  id: string;
  defaultMessage: string;
  description?: string;
  values?: Record<string, ReactNode | ((chunks: ReactNode[]) => ReactNode)>;
};

export function FormattedMessage(props: FormattedMessageProps) {
  return <ReactIntlFormattedMessage {...props} />;
}
