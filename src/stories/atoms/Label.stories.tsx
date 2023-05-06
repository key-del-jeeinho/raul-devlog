import Label from "../../components/atoms/Label";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
    title: 'Label',
    component: Label
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
    args: {
        children: "Text",
        labelStyle: "random",
        labelSize: "regular"
    }
}