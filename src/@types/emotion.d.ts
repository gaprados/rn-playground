import "@emotion/react";
import type { ThemeProps } from "../config/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeProps {}
}
