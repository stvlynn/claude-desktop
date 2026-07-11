// @ts-nocheck
// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js
// Reads legacy setting values and serializes/deserializes setting values.

import {
  deserializeSettingFromToml,
  getDesktopSettingDefinition,
  getDesktopSettingSchema,
  readDefaultServiceTierAtom,
  serializeSettingForToml,
} from "../application/desktop-settings";
import {
  getComposerEnterBehaviorSettingKey,
  getDefaultServiceTierSettingKey,
  getKeepRemoteControlAwakeSettingKey,
  getPreventSleepWhileRunningSettingKey,
} from "../domain/desktop-setting-keys";
import { PERSISTED_ATOM_STATE_KEY } from "../domain/desktop-state-keys";
import { isRecord } from "./desktop-runtime-utils";
import type {
  DesktopSettingDefinition,
  KeyValueStore,
} from "./desktop-runtime-types";

export function readLegacySettingValue(
  definition: DesktopSettingDefinition,
  globalState: KeyValueStore,
  persistedAtoms: unknown,
): unknown {
  switch (definition.hostStorage.kind) {
    case "configuration": {
      const storedValue = globalState.getStored?.(definition.hostStorage.key);
      if (storedValue !== undefined) return storedValue;
      if (
        definition.key === getComposerEnterBehaviorSettingKey() &&
        isRecord(persistedAtoms) &&
        Object.prototype.hasOwnProperty.call(persistedAtoms, "enter-behavior")
      ) {
        return persistedAtoms["enter-behavior"];
      }
      if (definition.key === getKeepRemoteControlAwakeSettingKey()) {
        return globalState.getStored?.(getPreventSleepWhileRunningSettingKey());
      }
      return undefined;
    }
    case "global-state":
      return globalState.getStored?.(definition.hostStorage.key);
    case "persisted-atom":
      if (
        !isRecord(persistedAtoms) ||
        !Object.prototype.hasOwnProperty.call(
          persistedAtoms,
          definition.hostStorage.key,
        )
      ) {
        return undefined;
      }
      if (definition.key === getDefaultServiceTierSettingKey()) {
        return readDefaultServiceTierAtom(persistedAtoms) ?? undefined;
      }
      return persistedAtoms[definition.hostStorage.key];
  }
}

export function clearMigratedLegacySettings(
  keys: Set<string>,
  globalState: KeyValueStore,
): void {
  if (keys.size === 0) return;
  const persistedAtoms = globalState.getStored?.(PERSISTED_ATOM_STATE_KEY);
  const nextPersistedAtoms = isRecord(persistedAtoms)
    ? {
        ...persistedAtoms,
      }
    : null;
  let persistedAtomsChanged = false;
  for (const key of keys) {
    const definition = getDesktopSettingDefinition(key);
    if (definition == null) continue;
    if (
      key === getComposerEnterBehaviorSettingKey() &&
      nextPersistedAtoms != null &&
      Object.prototype.hasOwnProperty.call(nextPersistedAtoms, "enter-behavior")
    ) {
      delete nextPersistedAtoms["enter-behavior"];
      persistedAtomsChanged = true;
    }
    switch (definition.hostStorage.kind) {
      case "configuration":
      case "global-state":
        globalState.delete?.(definition.hostStorage.key);
        break;
      case "persisted-atom":
        if (
          nextPersistedAtoms != null &&
          Object.prototype.hasOwnProperty.call(
            nextPersistedAtoms,
            definition.hostStorage.key,
          )
        ) {
          delete nextPersistedAtoms[definition.hostStorage.key];
          persistedAtomsChanged = true;
        }
        break;
    }
  }
  if (persistedAtomsChanged) {
    globalState.set(
      PERSISTED_ATOM_STATE_KEY,
      Object.keys(nextPersistedAtoms ?? {}).length === 0
        ? undefined
        : (nextPersistedAtoms ?? undefined),
    );
  }
}

export function parseSettingInputValue(key: string, value: unknown): unknown {
  const schema = getDesktopSettingSchema(key);
  if (schema == null || typeof schema !== "object") return value;
  const parser = schema as {
    parse?: (input: unknown) => unknown;
  };
  return typeof parser.parse === "function" ? parser.parse(value) : value;
}

export function safeParseSettingValue(
  key: string,
  value: unknown,
  fromToml: boolean,
):
  | {
      success: true;
      value: unknown;
    }
  | {
      success: false;
    } {
  const schema = getDesktopSettingSchema(key);
  if (schema == null || typeof schema !== "object") {
    return {
      success: true,
      value,
    };
  }
  const input = fromToml ? deserializeDesktopSettingValue(key, value) : value;
  const parsed = (
    schema as {
      safeParse?: (input: unknown) => unknown;
    }
  ).safeParse?.(input);
  if (isRecord(parsed) && parsed.success === true) {
    return {
      success: true,
      value: parsed.data,
    };
  }
  if (parsed == null) {
    const parser = schema as {
      parse?: (input: unknown) => unknown;
    };
    if (typeof parser.parse !== "function") {
      return {
        success: true,
        value: input,
      };
    }
    try {
      return {
        success: true,
        value: parser.parse(input),
      };
    } catch {
      return {
        success: false,
      };
    }
  }
  return {
    success: false,
  };
}

export function serializeDesktopSettingValue(
  key: string,
  value: unknown,
): unknown {
  const schema = getDesktopSettingSchema(key);
  return schema != null
    ? serializeSettingForToml(schema, value)
    : value;
}

function deserializeDesktopSettingValue(key: string, value: unknown): unknown {
  const schema = getDesktopSettingSchema(key);
  return schema != null
    ? deserializeSettingFromToml(schema, value)
    : value;
}
