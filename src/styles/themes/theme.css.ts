import { createThemeContract } from "@vanilla-extract/css";
import { colors as sharedColors, spacing as sharedSpacing } from "./shared";

export const themeContract = createThemeContract({
  colors: {
    brand: {
      primary: null,
      secondary: null,
      accent: null,
    },
    background: {
      body: null,
    },
    text: {
      primary: null,
      inverted: null,
    },
  },
});

export const themeVars = {
  ...themeContract,
  shared: {
    colors: sharedColors,
    spacing: sharedSpacing,
  },
};
