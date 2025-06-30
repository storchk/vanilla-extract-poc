import { themeVars } from "../../styles/themes/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  borderWidth: "0.125rem",
  borderStyle: "solid",
  fontSize: "md",
  ":hover": {
    cursor: "pointer",
  },
  borderRadius: "0.75rem",
});

export const colors = styleVariants({
  primary: [
    base,
    {
      backgroundColor: "primary",
      borderColor: "primary",

      color: "white",

      _hover: {
        backgroundColor: "secondary",
        borderColor: "secondary",
      },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: "secondary",
      borderColor: "secondary",

      color: "white",
      _hover: {
        backgroundColor: "primary",
        borderColor: "primary",
      },
    },
  ],
  tertiary: [
    base,
    {
      backgroundColor: "grey.800",
      color: "grey.200",
      borderColor: "grey.800",
      _hover: {
        backgroundColor: "transparent",
        borderColor: "grey.800",
        color: "grey.200",
      },
    },
  ],
});

export const sizes = styleVariants({
  extraSmall: {
    paddingBlock: `${themeVars.shared.spacing.xxs}`,
    paddingInline: `${themeVars.shared.spacing.sm}`,
  },
  small: {
    paddingBlock: `${themeVars.shared.spacing.xs}`,
    paddingInline: `${themeVars.shared.spacing.sm}`,
  },
  medium: {
    paddingBlock: `${themeVars.shared.spacing.sm}`,
    paddingInline: `${themeVars.shared.spacing.md}`,
  },
  large: {
    paddingBlock: `${themeVars.shared.spacing.md}`,
    paddingInline: `${themeVars.shared.spacing.lg}`,
  },
});
