import { NextRequest, NextResponse } from "next/server";
import { languages } from "./app/data/translations";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLanguage = languages.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
  );

  // do nothing show page normally
  if (hasLanguage) return;

  // no language int he url - send to slo
  request.nextUrl.pathname = `/sl${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // skip next own files and anything witha dot
  matcher: ["/((?!_next|.*\\..*).*)"],
};
