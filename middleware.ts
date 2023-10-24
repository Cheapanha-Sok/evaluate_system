import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  let isLogged = request.cookies.get('logged')
  if(!isLogged){
    if(request.nextUrl.pathname.startsWith("/login")){
      return NextResponse.rewrite(new URL("/",request.url))
    }
  }else{
    if(url.pathname === "/"){
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/award" , "/e-day/:path*"],
};
    