import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { CustomButton } from "./CustomButton";

const meta = {
  component: CustomButton,
  args: {
    label: "Click Me",
    onClick: action("button-click"),
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {} satisfies Story;
