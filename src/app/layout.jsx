import "./globals.css";
import { opensans } from "./utils/fonts";

export const metadata = {
  title: "IOBI",
  description: "Izdelovanje okrasnih betonskih izdelkov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${opensans.className}`}>{children}</body>
    </html>
  );
}
