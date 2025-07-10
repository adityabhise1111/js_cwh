import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  // REDIRECT: /home → / 
  // SEO Impact: GOOD - 301 redirect, search engines understand
  if(request.nextUrl.pathname.startsWith('/home')){
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // REDIRECT: /Aditya → /about 
  // SEO Impact: GOOD - Avoids duplicate content, proper 301 redirect
  if(request.nextUrl.pathname.startsWith('/Aditya')){
    return NextResponse.redirect(new URL('/about', request.url), 301)
  }
}

// SEO TIP: Use matcher to limit middleware scope
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
}

