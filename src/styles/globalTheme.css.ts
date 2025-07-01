import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { colors, fontSizes, spacing } from "./themes/shared/index.css";
import { tokens } from "./themes/theme.css";

createGlobalTheme("body", {
  colors,
  spacing,
  fontSizes,
});

globalStyle("body", {
  backgroundColor: tokens.semanticColors.bg,
  padding: "0",
});
