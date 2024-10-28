import "./globals.css";

import React from "react";

import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import * as fonts from "~/lib/fonts";
import { TRPCReactProvider } from "~/lib/trpc/rq-client";
import { cn } from "~/lib/utils";

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

const RootLayout: React.FCC = ({ children }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(Object.values(fonts).map((font) => font.variable))}
    >
      <body className="min-h-dvh scroll-smooth font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>

        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
