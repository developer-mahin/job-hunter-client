import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./constant/authKey";

const authRoutes = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get(authKey.ACCESS_TOKEN);

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: ["/login", "/register"],
};
