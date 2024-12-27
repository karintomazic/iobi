import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfairdisplay",
  weight: "400",
  display: "swap",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400", "600", "700"],
  display: "swap",
});

export { inter };
export { playfairDisplay };
export { opensans };

