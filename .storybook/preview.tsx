import type { Preview } from "@storybook/react-webpack5";

import { useEffect } from "react";
import { blueTheme, blueThemeDark } from "../src/styles/themes/blue.css";
import { redTheme, redThemeDark } from "../src/styles/themes/red.css";

import "../src/styles/globalTheme.css";

const THEME_MAP = {
  blueTheme: { light: blueTheme, dark: blueThemeDark },
  redTheme: { light: redTheme, dark: redThemeDark },
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
        title: "Mode",
        icon: "mirror",
        items: [
          { value: "light", title: "light" },
          { value: "dark", title: "dark" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "redTheme",
      toolbar: {
        title: "Chiefs",
        icon: "paintbrush",
        items: [
          { value: "redTheme", title: "Chiefs" },
          { value: "blueTheme", title: "Seahawks" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const { theme, mode } = ctx.globals;
      const themeClass = THEME_MAP[theme]?.[mode] || blueTheme;

      useEffect(() => {
        document.documentElement.classList.add(themeClass);

        return () => {
          document.documentElement.classList.remove(themeClass);
        };
      }, [themeClass]);

      return <Story {...ctx} />;
    },
  ],
  tags: ["autodocs"],
};

export default preview;
