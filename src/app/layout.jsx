import "./globals.css";
import { opensans } from "./utils/fonts";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "IOBI",
  description: "Izdelovanje okrasnih betonskih izdelkov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sl">
      <body className={opensans.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
