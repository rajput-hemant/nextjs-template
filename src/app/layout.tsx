import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/layout.css";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "layout min-h-screen bg-black/90 p-8 !pb-0 text-white antialiased lg:p-16",
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
