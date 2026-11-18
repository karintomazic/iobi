import { Open_Sans, Playfair_Display } from "next/font/google";

// Each font becomes a CSS variable (put on <html> in layout.jsx).
// globals.css turns them into Tailwind fonts: font-sans and font-display.

/** Headings */
export const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
  display: "swap",
});

/** Body text */
export const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  display: "swap",
});
