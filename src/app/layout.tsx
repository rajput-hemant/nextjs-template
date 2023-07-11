import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn("bg-black", poppins.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
