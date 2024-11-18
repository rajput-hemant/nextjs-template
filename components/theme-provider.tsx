"use client";

import * as React from "react";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import type { ThemeProviderProps } from "next-themes";

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return <NextThemeProvider {...props} />;
};
