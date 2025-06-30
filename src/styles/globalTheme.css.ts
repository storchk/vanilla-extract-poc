import { createGlobalTheme } from "@vanilla-extract/css";
import { colors, fontSizes, spacing } from "./themes/shared/index.css";

createGlobalTheme("body", {
  colors,
  spacing,
  fontSizes,
});
