import "./globals.css";
import { opensans } from "./utils/fonts";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: "IOBI",
  description: "Izdelovanje okrasnih betonskih izdelkov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sl">
      <body className={`${opensans.className}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
