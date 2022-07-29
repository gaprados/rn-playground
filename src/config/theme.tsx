import { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export type ThemeProps = typeof theme;

export const theme = {
  colors: {
    background: "#fff",
  },
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
