import type { Meta, StoryObj } from '@storybook/react'
import image001 from '../../../public/images/img_plant-001.png'
import DraggableBouncingImage from "../../components/molecules/DraggableBouncingImage";

const meta: Meta<typeof DraggableBouncingImage> = {
    title: 'DraggableBouncingImage',
    component: DraggableBouncingImage
}

export default meta
type Story = StoryObj<typeof DraggableBouncingImage>

export const LocalImage: Story = {
    args: {
        isFixed: false,
        src: image001,
        alt: 'plant-image-001',
        width: 300
    }
}
export const RemoteImage: Story = {
    args: {
        isFixed: false,
        src: "https://plus.unsplash.com/premium_photo-1674941668322-5705baf56926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: 'black-background',
        width: 480,
        height: 270
    }
}