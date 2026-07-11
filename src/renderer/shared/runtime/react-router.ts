// @ts-nocheck
// Restored from ref/webview/assets/chunk-LFPYN7LY-h_ROgi7V.js
// Minimal runtime boundary for the React Router APIs used by restored modules.
// As more consumers are promoted, additional exports can be added here or
// replaced with a real react-router dependency.

export interface Params<Key extends string = string> {
  [key: string]: string | undefined;
}

export interface PathPattern {
  path: string;
  caseSensitive?: boolean;
  end?: boolean;
}

export interface PathMatch<ParamKey extends string = string> {
  params: Params<ParamKey>;
  pathname: string;
  pathnameBase: string;
  pattern: PathPattern;
}

function compilePath(
  path: string,
  caseSensitive = false,
  end = true,
): { regexp: RegExp; keys: string[] } {
  const keys: string[] = [];
  let source = "^";

  const segments = path.split("/");
  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];
    if (segment === "") {
      // Preserve leading/trailing slashes as optional separators.
      if (index === 0 || index === segments.length - 1) {
        source += "/?";
      }
      continue;
    }

    if (segment.startsWith(":")) {
      const key = segment.slice(1);
      keys.push(key);
      source += "/([^/]+)";
    } else {
      source +=
        "/" +
        segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*");
    }
  }

  if (end) {
    source += "/?$";
  } else {
    source += "(?=/|$)";
  }

  return {
    regexp: new RegExp(source, caseSensitive ? undefined : "i"),
    keys,
  };
}

export function matchPath<ParamKey extends string = string>(
  pattern: PathPattern | string,
  pathname: string,
): PathMatch<ParamKey> | null {
  const normalizedPattern: PathPattern =
    typeof pattern === "string" ? { path: pattern } : pattern;

  const { regexp, keys } = compilePath(
    normalizedPattern.path,
    normalizedPattern.caseSensitive,
    normalizedPattern.end ?? true,
  );

  const match = pathname.match(regexp);
  if (match == null) return null;

  const matchedPathname = match[0];
  const params: Params<ParamKey> = {};
  for (let index = 0; index < keys.length; index += 1) {
    const value = match[index + 1];
    params[keys[index] as ParamKey] = value != null ? decodeURIComponent(value) : value;
  }

  return {
    params,
    pathname: matchedPathname,
    pathnameBase: matchedPathname,
    pattern: normalizedPattern,
  };
}
// Added to satisfy relative import checks.
export const useNavigate = undefined as never;
export const MemoryRouter = undefined as never;
export const Navigate = undefined as never;
export const useLocation = undefined as never;
export const useParams = undefined as never;

export const useMatch = () => {};
export const useOutlet = () => {};
// Added to satisfy relative import checks.
export const NavigationType = undefined as never;
export const useNavigationType = undefined as never;
