import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Button from "../atoms/Button";

type Content = {
    type: 'image',
    image: StaticImageData | string,
    alt: string,
    width?: number,
    height?: number,
    key: string,
    onClick: () => void,
} | {
    type: 'text',
    text: string,
    key: string,
    onClick: () => void,
}

interface Props {
    contents: Content[],
    fadeIn: boolean,
}

export default function ButtonList({ contents, fadeIn }: Props) {
    const children = contents.map((content, idx) => {
        const isLast = idx == contents.length - 1
        const children = getChildren(content)
        const { onClick, key } = content

        return (<div key={key}>
            <Button 
                visibleOverflowedShadow={isLast}
                fadeIn={fadeIn}
                onClick={onClick}
            >{children}</Button>
        </div>)
    })
    return (<div>{children}</div>)
}

function getChildren(content: Content): ReactNode {
    switch(content.type) {
        case "image": {
            const {image, alt, width, height} = content
            return (<Image
                src={image}
                alt={alt}
                width={width}
                height={height}
                draggable={false}
            />)
        }
        case "text": {
            const {text} = content
            return text
        }
    }
}