import { StaticImageData } from "next/image"
import BouncingImage from "./BouncingImage"
import DraggableComponent from "./DraggableComponent"

interface Props {
    isFixed: boolean,
    src: string | StaticImageData,
    alt: string,
    width?: number,
    height?: number,
    fadeIn?: boolean
}

export default function DraggableBouncingImage({src, alt, isFixed, width, height, fadeIn}: Props) {
    return (
        <DraggableComponent isFixed={isFixed}>
            <BouncingImage src={src} alt={alt} width={width} height={height} fadeIn={fadeIn}/>
        </DraggableComponent>
    )
}