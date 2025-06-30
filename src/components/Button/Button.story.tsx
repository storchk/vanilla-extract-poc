import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { Button } from "./Button";

const meta = {
  component: Button,
  args: {
    label: "Click Me",
    variant: "primary",
    size: "medium",
    onClick: action("button-click"),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {} satisfies Story;
