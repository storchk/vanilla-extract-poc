import { tokens } from "../../styles/themes/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    borderWidth: "0.125rem",
    borderStyle: "solid",
    fontSize: `${tokens.fontSizes.md}`,
    ":hover": {
      cursor: "pointer",
    },
    borderRadius: "0.75rem",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: `${tokens.colors.brand.primary}`,
        borderColor: `${tokens.colors.brand.primary}`,

        color: `${tokens.colors.white}`,

        ":hover": {
          backgroundColor: `${tokens.colors.brand.secondary}`,
          borderColor: `${tokens.colors.brand.secondary}`,
        },
      },
      secondary: {
        backgroundColor: `${tokens.colors.brand.secondary}`,
        borderColor: `${tokens.colors.brand.secondary}`,

        color: `${tokens.colors.white}`,

        ":hover": {
          backgroundColor: `${tokens.colors.brand.primary}`,
          borderColor: `${tokens.colors.brand.primary}`,
        },
      },
      tertiary: {
        backgroundColor: `${tokens.colors.grey[800]}`,
        color: `${tokens.colors.grey[200]}`,
        borderColor: `${tokens.colors.grey[800]}`,
        ":hover": {
          backgroundColor: `${tokens.colors.transparent}`,
          borderColor: `${tokens.colors.grey[800]}`,
          color: `${tokens.colors.grey[200]}`,
        },
      },
    },
    size: {
      extraSmall: {
        paddingBlock: `${tokens.spacing.xxs}`,
        paddingInline: `${tokens.spacing.sm}`,
      },
      small: {
        paddingBlock: `${tokens.spacing.xs}`,
        paddingInline: `${tokens.spacing.sm}`,
      },
      medium: {
        paddingBlock: `${tokens.spacing.sm}`,
        paddingInline: `${tokens.spacing.md}`,
      },
      large: {
        paddingBlock: `${tokens.spacing.md}`,
        paddingInline: `${tokens.spacing.lg}`,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
