// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js

import { useEffect, useState, type ReactNode } from "react";
import { IntlProvider } from "react-intl";

type LocaleProviderProps = {
  children?: ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<string | undefined>(window.initialLocale);
  const [messages, setMessages] = useState<Record<string, string> | undefined>(
    window.initialMessages,
  );

  useEffect(() => {
    const desktopIntl = window.claude?.hybrid?.DesktopIntl;
    const unsubscribe = desktopIntl?.onLocaleChanged?.(
      (newLocale: string, newMessages: Record<string, string>) => {
        setLocale(newLocale);
        setMessages(newMessages);
      },
    );

    return () => {
      unsubscribe?.();
    };
  }, []);

  return (
    <IntlProvider locale={locale ?? "en"} messages={messages ?? {}}>
      {children}
    </IntlProvider>
  );
}
