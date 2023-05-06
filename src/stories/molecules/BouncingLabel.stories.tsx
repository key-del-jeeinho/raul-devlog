import BouncingLabel from "../../components/molecules/BouncingLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BouncingLabel> = {
    title: 'BouncingLabel',
    component: BouncingLabel
}

export default meta
type Story = StoryObj<typeof BouncingLabel>

export const Default: Story = {
    args: {
        children: "Text",
        style: "random",
        size: "regular"
    }
}