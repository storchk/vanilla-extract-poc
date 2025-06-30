import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";
import { colors as sharedColors } from "./shared/index.css";

export const redTheme = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#E31837",
      secondary: "#FFB81C",
      accent: "#FFB81C",
    },
    ...sharedColors,
  },
  semanticColors: {
    bg: sharedColors.grey[200],
  },
});

export const redThemeDark = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#E31837",
      secondary: "#FFB81C",
      accent: "#FFB81C",
    },
    ...sharedColors,
  },
  semanticColors: {
    bg: sharedColors.grey[900],
  },
});
