import "./globals.css";
import { openSans, playfairDisplay } from "./utils/fonts";
import { LanguageProvider } from "./context/LanguageContext";
import { themeScript } from "@/lib/theme";
import Navigation from "./components/navigation/Navigation";

export const metadata = {
  title: "IOBI",
  description: "Izdelovanje okrasnih betonskih izdelkov",
};

export default function RootLayout({ children }) {
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
