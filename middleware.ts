import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get("token")?.value;

  const role =
    request.cookies.get("role")?.value;

  const pathname =
    request.nextUrl.pathname;

  // Dashboard Route Based On Role
  const dashboardRoute =
    role === "vendor"
      ? "/dashboard/vendor"
      : "/dashboard/customer";

  // Protected Routes
  const protectedRoutes = [
    "/dashboard/customer",
    "/dashboard/vendor",
  ];

  const isProtectedRoute =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

  // =========================
  // If user NOT logged in
  // =========================
  if (
    isProtectedRoute &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // =========================
  // If logged in user opens:
  // /login
  // /register
  // /
  // =========================
  if (
    token &&
    (pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/")
  ) {
    return NextResponse.redirect(
      new URL(
        dashboardRoute,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/dashboard/:path*",
  ],
};