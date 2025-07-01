import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { colors, fontSizes, spacing } from "./themes/shared/index.css";
import { themeVars } from "./themes/theme.css";

createGlobalTheme("body", {
  colors,
  spacing,
  fontSizes,
});

globalStyle("body", {
  backgroundColor: themeVars.semanticColors.bg,
  padding: "0",
});
