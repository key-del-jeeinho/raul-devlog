import SubTitle from "../../components/atoms/SubTitle";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubTitle> = {
    title: 'SubTitle',
    component: SubTitle
}

export default meta
type Story = StoryObj<typeof SubTitle>

export const Primary: Story = {
    args: {
        children: "sub title here!"
    }
}