import "./globals.css";
import { openSans, playfairDisplay } from "./utils/fonts";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
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
    >
      <body className="font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <div className="pt-[76px]">{children}</div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
