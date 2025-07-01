import { createThemeContract } from "@vanilla-extract/css";
import {
  colors as sharedColors,
  spacing as sharedSpacing,
  fontSizes as sharedFontSizes,
} from "./shared/index.css";

export const themeContract = createThemeContract({
  colors: {
    brand: {
      primary: null,
      secondary: null,
      accent: null,
    },
    transparent: null,
    white: null,
    black: null,
    grey: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },
  },
  semanticColors: {
    bg: null,
  },
});

export const tokens = {
  ...themeContract,
  colors: { ...themeContract.colors, ...sharedColors },
  spacing: sharedSpacing,
  fontSizes: sharedFontSizes,
};
