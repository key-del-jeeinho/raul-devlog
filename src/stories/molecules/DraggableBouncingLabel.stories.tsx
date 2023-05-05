import DraggableBouncingLabel from "../../components/molecules/DraggableBouncingLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DraggableBouncingLabel> = {
    title: 'DraggableBouncingLabel',
    component: DraggableBouncingLabel
}

export default meta
type Story = StoryObj<typeof DraggableBouncingLabel>

export const Label: Story = {
    args: {
        children: 'TEXT HERE',
        style: 'colored',
        isFixed: false,
    }
}