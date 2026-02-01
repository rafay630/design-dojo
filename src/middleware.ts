import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  // Simple protection for now
  const isLoggedIn = !!req.auth
  // const userRole = req.auth?.user?.role
  
  const isProtected = req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/modules") || req.nextUrl.pathname.startsWith("/portfolio")

  if (isProtected && !isLoggedIn) {
     return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl))
  }
  
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
