import { ImageProps } from "next/image"
import BouncingImage from "../atoms/BouncingImage"
import DraggableComponent from "./DraggableComponent"

interface Props {
    isFixed: boolean,
    src: string,
    alt: string,
    width: number | null,
    height: number | null
}

export default function DraggableBouncingImage({src, alt, isFixed, width, height}: Props) {
    return (
        <DraggableComponent isFixed={isFixed}>
            <BouncingImage src={src} alt={alt} width={width} height={height}/>
        </DraggableComponent>
    )
}