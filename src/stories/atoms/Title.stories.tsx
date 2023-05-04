import Title from "../../components/atoms/Title";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
    title: 'Title',
    component: Title
}

export default meta
type Story = StoryObj<typeof Title>

export const Primary: Story = {
    args: {
        children: "Title Here!"
    }
}