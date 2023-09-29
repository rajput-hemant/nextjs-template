import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import "@/styles/globals.css";
import "@/styles/layout.css";

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "layout min-h-screen bg-black/90 px-8 pt-4 text-white antialiased md:pt-2 lg:px-16",
          poppins.className
        )}
      >
        <Providers>{children}</Providers>

        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
