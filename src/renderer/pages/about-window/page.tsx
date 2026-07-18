// Restored from ref/.vite/renderer/about_window/assets/AboutWindow-DJTf96rn.js

import { useCallback, useEffect, useState } from "react";
import {
  getAboutWindowApi,
  type AboutWindowBuildProps,
} from "../../shared/api/claude-desktop-api";
import { ClaudeLogo } from "../../shared/icons/claude-logo";
import { FormattedMessage } from "../../shared/i18n/formatted-message";
import { classNames } from "../../shared/lib/class-names";
import { Button } from "../../shared/ui/button";

declare const process: {
  version: string;
};

type AboutProductTitleProps = {
  className?: string;
};

function AboutProductTitle({ className }: AboutProductTitleProps) {
  const [appName, setAppName] = useState("");

  useEffect(() => {
    void getAboutWindowApi()
      ?.getAppName?.()
      .then((resolvedAppName) => {
        if (resolvedAppName) {
          setAppName(resolvedAppName);
        }
      });
  }, []);

  return (
    <h2
      className={classNames(
        className,
        "font-serif font-medium text-text-100 text-2xl select-none",
      )}
      style={{ maxWidth: "95%" }}
    >
      {appName || "Claude"} <em>for </em>Mac
    </h2>
  );
}

function getShortCommitHash(buildProps: AboutWindowBuildProps | null) {
  if (buildProps?.commitHash && buildProps.commitHash !== "unknown") {
    return buildProps.commitHash.slice(0, 6);
  }

  return "Unknown";
}

export function AboutWindowPage() {
  const [buildProps, setBuildProps] = useState<AboutWindowBuildProps | null>(
    null,
  );
  const [versionCopied, setVersionCopied] = useState(false);
  const shortCommitHash = getShortCommitHash(buildProps);
  const versionLabel = `${process.version} (${shortCommitHash})`;

  const openHelp = useCallback(() => {
    void getAboutWindowApi()?.openHelp?.();
  }, []);

  const openSupport = useCallback(() => {
    void getAboutWindowApi()?.getSupport?.();
  }, []);

  const copyVersionToClipboard = useCallback(async () => {
    try {
      const appName = await getAboutWindowApi()?.getAppName?.();
      const clipboardText =
        `${appName} ${process.version} (${shortCommitHash}) ${
          buildProps?.commitTimestamp || ""
        }`.trim();

      await navigator.clipboard.writeText(clipboardText);
      setVersionCopied(true);
      setTimeout(() => setVersionCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy version to clipboard:", error);
    }
  }, [buildProps, shortCommitHash]);

  useEffect(() => {
    void getAboutWindowApi()
      ?.getBuildProps?.()
      .then(setBuildProps)
      .catch((error) => {
        console.error("Failed to fetch build properties:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full pt-16 nc-drag">
      <ClaudeLogo width={84} height={84} />
      <AboutProductTitle className="mt-4" />
      <h3
        className="text-text-400 font-sans text-md mt-2 nc-no-drag cursor-pointer hover:text-text-300 transition-colors"
        onClick={copyVersionToClipboard}
      >
        {versionCopied ? (
          <FormattedMessage
            defaultMessage="Copied version to clipboard"
            id="mCXNyEdJat"
            description="Message shown briefly after copying version to clipboard"
          />
        ) : (
          <FormattedMessage
            defaultMessage="Version {version}"
            id="S3k5yXss2r"
            description="Version number display in the About window. {version} is the application version number"
            values={{ version: versionLabel }}
          />
        )}
      </h3>
      <div className="w-full px-16 mt-6 flex flex-col font-sans text-xl font-medium text-text-100 nc-no-drag">
        <Button variant="secondary" onClick={openHelp}>
          <FormattedMessage
            id="zAYm/Z684h"
            defaultMessage="Help"
            description="Label for the Help button in the About window"
          />
        </Button>
        <Button className="mt-4" variant="secondary" onClick={openSupport}>
          <FormattedMessage
            id="XfMPtFNO8C"
            defaultMessage="Get support"
            description="Label for the Get support button in the About window"
          />
        </Button>
      </div>
    </div>
  );
}

export default AboutWindowPage;
