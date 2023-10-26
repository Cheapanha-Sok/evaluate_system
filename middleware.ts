export { default } from "next-auth/middleware"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let isLogged = request.cookies.get("next-auth.session-token");
  if (!isLogged) {
    if (request.nextUrl.pathname.startsWith("/")) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  } else {
    if (url.pathname === "/login") {
      url.pathname = "/"; 
      return NextResponse.redirect(url);
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/award", "/e-day/:path*" , "/:path"],
};
