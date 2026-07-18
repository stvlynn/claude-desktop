// Restored from ref/package.json

import {
  claudeBundleIdentity,
  mainProcessEntries,
} from "../domain/application-bundle";
import {
  mainProcessRestorationFrontier,
  rendererRestorationFrontier,
} from "../domain/restoration-frontier";
import { extractedBundleLayout } from "../infrastructure/extracted-bundle-layout";

export function createRestoreManifest() {
  return {
    bundle: {
      identity: claudeBundleIdentity,
      mainProcess: mainProcessEntries,
    },
    layout: extractedBundleLayout,
    restoration: {
      mainProcess: mainProcessRestorationFrontier,
      renderer: rendererRestorationFrontier,
    },
  };
}

export const restoreManifest = createRestoreManifest();
