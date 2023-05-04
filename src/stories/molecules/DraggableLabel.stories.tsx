import DraggableLabel from "../../components/molecules/DraggableLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DraggableLabel> = {
    title: 'DraggableLabel',
    component: DraggableLabel
}

export default meta
type Story = StoryObj<typeof DraggableLabel>

export const Label: Story = {
    args: {
        children: 'TEXT HERE',
        type: 'colored',
        isFixed: false,
    }
}