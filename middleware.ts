// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ---------- AREA & CREDS ----------
// Multiple users via env var list: user:pass,user2:pass2
//   PORTAL_USERS="partner1:delta,investor:echo"
const AREA = {
  prefix: "/portal/private",
  realm: "PRIVEE-PORTAL",
  envVar: "PORTAL_USERS",
} as const;

function parseUsers(envVal: string | undefined): Array<[string, string]> {
  if (!envVal) return [];
  return envVal
    .split(",")
    .map((pair) => pair.trim())
    .filter(Boolean)
    .map((pair) => {
      const idx = pair.indexOf(":");
      if (idx === -1) return ["", ""];
      return [pair.slice(0, idx), pair.slice(idx + 1)];
    })
    .filter(([u, p]) => u && p);
}

function unauthorized(realm: string) {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": `Basic realm="${realm}"` },
  });
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

  const users = parseUsers(process.env[AREA.envVar as keyof NodeJS.ProcessEnv] as string | undefined);
  if (users.length === 0) return unauthorized(AREA.realm);

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized(AREA.realm);

  try {
    const base64 = auth.split(" ")[1] ?? "";
    const [user, pass] = Buffer.from(base64, "base64").toString().split(":");
    const ok = users.some(([u, p]) => u === user && p === pass);
    if (ok) return NextResponse.next();
  } catch {
    // fall through
  }

  return unauthorized(AREA.realm);
}

export const config = {
  matcher: [
    "/portal/private",
    "/portal/private/:path*",
    "/logout",
  ],
};
