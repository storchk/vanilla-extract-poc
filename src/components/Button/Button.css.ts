import { themeVars } from "../../styles/themes/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    borderWidth: "0.125rem",
    borderStyle: "solid",
    fontSize: `${themeVars.fontSizes.md}`,
    ":hover": {
      cursor: "pointer",
    },
    borderRadius: "0.75rem",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: `${themeVars.colors.brand.primary}`,
        borderColor: `${themeVars.colors.brand.primary}`,

        color: `${themeVars.colors.white}`,

        ":hover": {
          backgroundColor: `${themeVars.colors.brand.secondary}`,
          borderColor: `${themeVars.colors.brand.secondary}`,
        },
      },
      secondary: {
        backgroundColor: `${themeVars.colors.brand.secondary}`,
        borderColor: `${themeVars.colors.brand.secondary}`,

        color: `${themeVars.colors.white}`,

        ":hover": {
          backgroundColor: `${themeVars.colors.brand.primary}`,
          borderColor: `${themeVars.colors.brand.primary}`,
        },
      },
      tertiary: {
        backgroundColor: `${themeVars.colors.grey[800]}`,
        color: `${themeVars.colors.grey[200]}`,
        borderColor: `${themeVars.colors.grey[800]}`,
        ":hover": {
          backgroundColor: `${themeVars.colors.transparent}`,
          borderColor: `${themeVars.colors.grey[800]}`,
          color: `${themeVars.colors.grey[200]}`,
        },
      },
    },
    size: {
      extraSmall: {
        paddingBlock: `${themeVars.spacing.xxs}`,
        paddingInline: `${themeVars.spacing.sm}`,
      },
      small: {
        paddingBlock: `${themeVars.spacing.xs}`,
        paddingInline: `${themeVars.spacing.sm}`,
      },
      medium: {
        paddingBlock: `${themeVars.spacing.sm}`,
        paddingInline: `${themeVars.spacing.md}`,
      },
      large: {
        paddingBlock: `${themeVars.spacing.md}`,
        paddingInline: `${themeVars.spacing.lg}`,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
