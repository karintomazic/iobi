import "./globals.css";
import { openSans, playfairDisplay } from "./utils/fonts";
import { LanguageProvider } from "./context/LanguageContext";
import { themeScript } from "@/lib/theme";
import Navigation from "./components/navigation/Navigation";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IOBI",
  description: "Izdelovanje okrasnih betonskih izdelkov",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="sl"
      className={`${openSans.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <Navigation />
          <div className="pt-19">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
