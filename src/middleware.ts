import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./constant/authKey";

const authRoutes = ["/login", "/register"];
const protectedRoutes = [
  "/feed",
  "/messege",
  "/jobs",
  "/my_networks",
  "/profile/:page*",
  "/recruiter/:page*",
];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get(authKey.ACCESS_TOKEN);

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
  }

  if (pathname === "/feed") {
    if (accessToken) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirect to login for protected routes if access token is missing
  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !accessToken
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (accessToken) {
    return NextResponse.next();
  }

  if (!accessToken) {
    if (pathname === "/feed") {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.next();
    }
  }


  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/feed",
    "/messege",
    "/jobs",
    "/my_networks",
    "/profile/:page*",
    "/recruiter/:page*",
  ],
};
