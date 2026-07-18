// Restored from ref/.vite/build/index.pre.js

import { createPublicKey, verify } from "node:crypto";

const CDP_AUTH_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEApH/vaEiLV0sNY/eS+Ct/IMbMqw8i/vC/cNC84BAbBq8=
-----END PUBLIC KEY-----`;
const CDP_AUTH_MAX_AGE_MS = 5 * 60 * 1000;

export interface CdpAuthorizationEnvironment {
  readonly [name: string]: string | undefined;
  readonly CLAUDE_CDP_AUTH?: string;
  readonly CLAUDE_USER_DATA_DIR?: string;
}

export function verifyCdpAuthorization(
  environment: CdpAuthorizationEnvironment = process.env,
  now: number = Date.now(),
): boolean {
  const token = environment.CLAUDE_CDP_AUTH;
  const userDataDirectory = environment.CLAUDE_USER_DATA_DIR;
  if (!token || !userDataDirectory) return false;

  const reject = (reason: string): false => {
    console.warn(`CDP auth rejected: ${reason}`);
    return false;
  };
  const segments = token.split(".");
  if (segments.length !== 3) {
    return reject("malformed token (expected 3 dot-separated parts)");
  }

  const [timestampText, encodedPath, signature] = segments;
  const signedValue = `${timestampText}.${encodedPath}`;
  if (Buffer.from(encodedPath, "base64").toString() !== userDataDirectory) {
    return reject("userData path mismatch");
  }

  const timestamp = Number.parseInt(timestampText, 10);
  if (Number.isNaN(timestamp)) return reject("invalid timestamp");
  const age = now - timestamp;
  if (age < 0 || age > CDP_AUTH_MAX_AGE_MS) {
    return reject(`token expired (age: ${Math.round(age / 1000)}s)`);
  }

  try {
    const publicKey = createPublicKey(CDP_AUTH_PUBLIC_KEY);
    return verify(
      null,
      Buffer.from(signedValue),
      publicKey,
      Buffer.from(signature, "base64"),
    )
      ? true
      : reject("invalid signature");
  } catch {
    return reject("signature verification threw");
  }
}
