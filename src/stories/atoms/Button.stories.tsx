import Button from "../../components/atoms/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: "click_me",
        visibleOverflowedShadow: true,
        fadeIn: true,
        onClick: () => console.log("clicked!")
    }
}