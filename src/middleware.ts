import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { user } from "./lib/_data";

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    // In a real application, you would check for a session or token
    // For now, we'll just use our constant user
    if (!user.isAdmin) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
