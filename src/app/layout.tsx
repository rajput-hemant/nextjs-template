import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn("bg-black", inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
