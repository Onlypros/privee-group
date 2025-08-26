// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ---------- AREA & CREDS ----------
const AREA = {
  prefix: "/portal/private",
  realm: "PRIVEE-PORTAL",
  envVar: "PORTAL_USERS",
} as const;

/**
 * Parse env string like:
 *   "user1:pass1,user2:pass2"
 * Returns typed [user, pass] tuples.
 * - trims whitespace
 * - ignores malformed pairs
 * - splits only on the FIRST ":" so passwords may contain ":"
 */
function parseUsers(envVal?: string): [string, string][] {
  if (!envVal) return [];
  return envVal
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((pair) => {
      const idx = pair.indexOf(":");
      if (idx === -1) return null;
      const user = pair.slice(0, idx).trim();
      const pass = pair.slice(idx + 1).trim();
      if (!user || !pass) return null;
      return [user, pass] as [string, string];
    })
    .filter((v): v is [string, string] => v !== null);
}

/** Return a 401 Basic challenge for the given realm. */
function unauthorized(realm: string) {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": `Basic realm="${realm}"` },
  });
}

/** Decode Basic auth header and split only on the first ":" */
function decodeBasicAuth(header: string): [string, string] | null {
  try {
    const base64 = header.split(" ")[1] ?? "";
    // Use atob for Edge runtime compatibility
    const decoded = atob(base64);
    const idx = decoded.indexOf(":");
    if (idx === -1) return null;
    const user = decoded.slice(0, idx);
    const pass = decoded.slice(idx + 1);
    return [user, pass];
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Optional logout helper: /logout?area=portal to force a re-prompt
  if (pathname === "/logout") {
    const area = searchParams.get("area");
    const realm = area ? `PRIVEE-${area.toUpperCase()}-LOGOUT` : "PRIVEE-LOGOUT";
    return unauthorized(realm);
  }

  // Only protect /portal/private/*
  if (!pathname.startsWith(AREA.prefix)) {
    return NextResponse.next();
  }

  const users = new Map(parseUsers(process.env[AREA.envVar as keyof NodeJS.ProcessEnv]));
  if (users.size === 0) return unauthorized(AREA.realm);

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized(AREA.realm);

  const creds = decodeBasicAuth(auth);
  if (!creds) return unauthorized(AREA.realm);

  const [user, pass] = creds;
  const ok = users.get(user) === pass;
  if (ok) return NextResponse.next();

  return unauthorized(AREA.realm);
}

export const config = {
  matcher: ["/portal/private", "/portal/private/:path*", "/logout"],
};
