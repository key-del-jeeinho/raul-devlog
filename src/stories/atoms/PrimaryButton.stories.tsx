import PrimaryButton from "../../components/atoms/PrimaryButton"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PrimaryButton> = {
    title: 'PrimaryButton',
    component: PrimaryButton
}

export default meta
type Story = StoryObj<typeof PrimaryButton>

export const Button: Story = {
    args: {
        children: "Click Me!",
        onClick: () => console.log("primary button clicked!")
    },
}