import type { Preview } from "@storybook/react-webpack5";

import { useEffect } from "react";
import { blueTheme, blueThemeDark } from "../src/styles/themes/blue.css";
import { redTheme, redThemeDark } from "../src/styles/themes/red.css";
import { themeVars } from "../src/styles/themes/theme.css";

// IMPORTANT: Import the new global style file
import "../src/styles/globalTheme.css";

// Define the theme map
const THEME_MAP = {
  blue: { light: blueTheme, dark: blueThemeDark },
  red: { light: redTheme, dark: redThemeDark },
};

const preview: Preview = {
  initialGlobals: {
    theme: "redTheme",
    mode: "light",
  },
  globalTypes: {
    mode: {
      name: "Mode",
      description: "Global modes for components",
      defaultValue: "light",
      toolbar: {
        // The icon for the toolbar item
        title: "Mode",
        icon: "mirror",
        // Array of options
        items: [
          { value: "light", title: "light" },
          { value: "dark", title: "dark" },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "redTheme",
      toolbar: {
        // The icon for the toolbar item
        title: "Chiefs",
        icon: "paintbrush",
        // Array of options
        items: [
          { value: "redTheme", title: "Chiefs" },
          { value: "blueTheme", title: "Seahawks" },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const { theme, mode } = ctx.globals;
      const themeClass = THEME_MAP[theme]?.[mode] || blueTheme;
      const backgroundColor =
        theme === "blue" && mode === "dark"
          ? themeVars.semanticColors.bg
          : theme === "red" && mode === "dark"
            ? themeVars.semanticColors.bg
            : themeVars.semanticColors.bg;

      useEffect(() => {
        // This adds the theme class to the Storybook Docs page <html> element
        document.documentElement.classList.add(themeClass);
        return () => {
          document.documentElement.classList.remove(themeClass);
        };
      }, [themeClass]);

      return (
        <div
          className={themeClass}
          style={{
            backgroundColor: backgroundColor,
            minHeight: "100vh",
          }}
        >
          <Story {...ctx} />
        </div>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
