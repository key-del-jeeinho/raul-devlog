import Icon from "../../components/atoms/Icon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
    title: 'Icon',
    component: Icon
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
    args: {
        type: "ic32_menu",
        color: "#000000",
        style: {},
        className: ""
    }
}