import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";
import { colors as sharedColors } from "./shared";

export const blueTheme = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#69BE28",
      secondary: "#002244",
      accent: "#A5ACAF",
    },
    background: {
      body: sharedColors.white,
    },
    text: {
      primary: sharedColors.black,
      inverted: sharedColors.white,
    },
  },
});

export const blueThemeDark = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#78D82A",
      secondary: "#003366",
      accent: "#B5BCBF",
    },
    background: {
      body: "#1a1a1a",
    },
    text: {
      primary: sharedColors.grey[100],
      inverted: sharedColors.black,
    },
  },
});
