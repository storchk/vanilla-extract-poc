import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";
import { colors as sharedColors } from "./shared/index.css";

export const blueTheme = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#69BE28",
      secondary: "#002244",
      accent: "#A5ACAF",
    },
    ...sharedColors,
  },
  semanticColors: {
    bg: sharedColors.white,
  },
});

export const blueThemeDark = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#69BE28",
      secondary: "#002244",
      accent: "#A5ACAF",
    },
    ...sharedColors,
  },
  semanticColors: {
    bg: sharedColors.black,
  },
});
