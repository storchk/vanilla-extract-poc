import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./colors";
import { spacing } from "./spacing";

createGlobalTheme(":root", {
  colors,
  spacing,
});
