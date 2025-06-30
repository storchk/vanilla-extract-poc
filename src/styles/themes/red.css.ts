import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";
import { colors as sharedColors } from "./shared";

export const redTheme = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#E31837",
      secondary: "#FFB81C",
      accent: "#FFB81C",
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

export const redThemeDark = createTheme(themeContract, {
  colors: {
    brand: {
      primary: "#F32847",
      secondary: "#FFC82C",
      accent: "#FFC82C",
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
