import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Determine which locale this request belongs to.
  let locale: Locale = defaultLocale;
  let rewrittenPath: string | null = null;

  const prefixLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (prefixLocale) {
    locale = prefixLocale;
  } else {
    // Unprefixed → default locale. Internally rewrite to /{defaultLocale}{pathname}.
    rewrittenPath = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  }

  // Forward resolved locale via request header so the root layout can render <html lang>.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  if (rewrittenPath) {
    const url = request.nextUrl.clone();
    url.pathname = rewrittenPath;
    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!_next|api|studio|.*\\..*).*)",
  ],
};
