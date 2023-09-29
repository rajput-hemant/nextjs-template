import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Overpass,
  Poppins,
} from "next/font/google";

export const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontMono = FontMono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "600",
});

export const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  display: "swap",
});
