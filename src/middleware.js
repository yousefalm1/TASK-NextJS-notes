import { NextResponse } from "next/server";

const privateRoutes = ['/users']
const publicRoutes = ['/login', '/register']

export default async function middleware(req) {
  const path = req.nextUrl.pathname
  const isPublicRoute = publicRoutes.includes(path)
  const isPrivateRoute = privateRoutes.includes(path)

  // Redirect to `/login` if a page is private!

  // Redirect to `/notes` if a page is public-only

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}