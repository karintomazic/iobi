import "@/app/globals.css";
import { openSans, playfairDisplay } from "@/app/utils/fonts";
import { LanguageProvider } from "@/app/context/LanguageContext";
import Navigation from "@/app/components/navigation/Navigation";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage, languages } from "@/app/data/translations";

export const metadata: Metadata = {
  title: "IOBI",
  description: "Izdelovanje okrasnih betonskih izdelkov",
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <html lang={lang} className={`${openSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans">
        <LanguageProvider language={lang}>
          <Navigation />
          <div className="pt-19">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
