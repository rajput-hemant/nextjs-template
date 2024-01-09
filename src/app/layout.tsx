import "@/styles/globals.css";

import React from "react";

import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          "font-poppins min-h-screen scroll-smooth antialiased"
        )}
      >
        <Providers>{children}</Providers>

        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
