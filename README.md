[![Netlify Status](https://api.netlify.com/api/v1/badges/49a79160-2218-407b-b178-b05b19930050/deploy-status)](https://app.netlify.com/projects/bucolic-kheer-f91cb4/deploys)

# 🧁 Vanilla Extract - Proof of Concept

This repository demonstrates a **Proof of Concept (PoC)** for integrating **🧁 Vanilla Extract** with **Storybook** in a React project. The PoC showcases:

- **Props-based styling**: Dynamically change a React component's styling based on its props.
- **Custom theming**: Create and apply themes using 🧁 Vanilla Extract to define colors, spacings, and other design tokens.
- **Color schemes**: Implement multiple color schemes to show how global styles can adapt based on a selected theme or scheme.

## Features

1. **React Component with Dynamic Styling**  
   Includes a `Button` component styled dynamically based on props such as `variant` (e.g., primary, secondary, tertiary) and integrates with the 🧁 Vanilla Extract theme for consistent styling.

2. **Theming with 🧁 Vanilla Extract**  
   Demonstrates how to define a custom theme in 🧁 Vanilla Extract and apply it globally across components.

3. **Color Schemes**  
   Illustrates how to implement and switch between different color schemes within the same theme, providing flexibility for design systems.

4. **Storybook Integration**  
   Configures Storybook to showcase components styled with 🧁 Vanilla Extract and use the defined theme and color schemes consistently.

## Getting Started

To get started with this PoC, follow these steps:

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Run Storybook**:

   ```bash
   pnpm storybook
   ```

4. **Explore the components**:
   Open your browser and navigate to the Storybook URL provided in the terminal to explore the components styled with 🧁 Vanilla Extract.

## References

- [🧁 Vanilla Extract](https://vanilla-extract.style/a)
