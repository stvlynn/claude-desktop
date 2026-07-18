// Restored from ref/.vite/build/index.js (empty compiled partner registry)

export type GrandPrixStatus = {
  paired: Record<string, boolean>;
  installed: Record<string, boolean>;
  displayNames: Record<string, string>;
  iconDataUris: Record<string, string>;
  credentialNudge?: { partnerId: string; at: number };
};

export type GrandPrixRequestResult = {
  status:
    "approved" | "not_provided" | "invalid" | "unavailable" | "transport_error";
  reason?: string;
};

export class GrandPrixService {
  pair(
    _partnerId: string,
    _context?: { hasUserActivation: boolean },
  ): { paired: boolean; error?: string } {
    return { paired: false, error: "unknownPartner" };
  }

  disconnect(_partnerId: string): void {}

  request(_request: object): GrandPrixRequestResult {
    return { status: "unavailable" };
  }

  getStatus(): GrandPrixStatus {
    return {
      paired: {},
      installed: {},
      displayNames: {},
      iconDataUris: {},
    };
  }
}
