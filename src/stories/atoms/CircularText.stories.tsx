import CircularText from "../../components/atoms/CircularText";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CircularText> = {
    title: 'CircularText',
    component: CircularText
}

export default meta
type Story = StoryObj<typeof CircularText>

export const Default: Story = {
    args: {
        radius: 210,
        text: 'HI! I AM A JUNIOR SERVER ENGINEER. I MAINLY USE KOTLIN AND SPRING',
        textBy: 'inside',
        fontColor: '#e0e0e0',
        fontSize: '32px',
        fontWeight: 'bold'
    }
}