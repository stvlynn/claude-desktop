// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Image file data-url loader used by attachment previews.
import { sendHostRequest } from "./host-request-runtime";

export async function loadImageFileDataUrl(
  path: string,
  hostId?: string | null,
  queryClient?: {
    fetchQuery?(options: {
      queryKey: readonly unknown[];
      queryFn: () => Promise<string>;
    }): Promise<string | undefined>;
  } | null,
): Promise<string> {
  if (path.startsWith("data:")) return path;
  const queryKey = ["image-file-data-url", hostId ?? "local", path] as const;
  const queryFn = () =>
    sendHostRequest<string>("read-image-file-data-url", {
      params: { hostId, path },
    });
  if (queryClient?.fetchQuery == null) return queryFn();
  return (await queryClient.fetchQuery({ queryKey, queryFn })) ?? queryFn();
}
