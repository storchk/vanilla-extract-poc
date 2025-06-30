import type { StorybookConfig } from "@storybook/react-webpack5";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },
  webpackFinal: (config) => {
    config.plugins?.push(new VanillaExtractPlugin());

    return config;
  },
};
export default config;
