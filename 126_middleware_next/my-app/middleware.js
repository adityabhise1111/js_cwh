import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  // REDIRECT: /home → / 
  // SEO Impact: GOOD - 301 redirect, search engines understand
  if(request.nextUrl.pathname.startsWith('/home')){
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(request.nextUrl.pathname.startsWith('/Aditya')){
    return NextResponse.rewrite(new URL('/about', request.url))
  }
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

