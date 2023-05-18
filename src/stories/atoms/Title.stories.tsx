import PrimaryTitle from "../../components/atoms/PrimaryTitle";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PrimaryTitle> = {
    title: 'Title',
    component: PrimaryTitle
}

export default meta
type Story = StoryObj<typeof PrimaryTitle>

export const Primary: Story = {
    args: {
        children: "Title Here!"
    }
}