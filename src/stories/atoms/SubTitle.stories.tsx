import PrimarySubTitle from "../../components/atoms/PrimarySubTitle";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PrimarySubTitle> = {
    title: 'SubTitle',
    component: PrimarySubTitle
}

export default meta
type Story = StoryObj<typeof PrimarySubTitle>

export const Primary: Story = {
    args: {
        children: "sub title here!"
    }
}