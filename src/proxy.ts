import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_PASSWORD = () => process.env.ADMIN_PASSWORD || 'deviloftech-admin'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('admin_session')?.value
  const authed = token === ADMIN_PASSWORD()

  // Protect API routes — return 401 JSON (except login/logout which handle their own auth)
  const publicApiRoutes = ['/api/admin/login', '/api/admin/logout']
  if (pathname.startsWith('/api/admin') && !publicApiRoutes.includes(pathname)) {
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.next()
  }

  // Protect admin pages — redirect to login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!authed) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Pass pathname to root layout so Nav/Footer can be hidden on admin pages
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/((?!_next/static|_next/image|favicon.ico).*)'],
}
