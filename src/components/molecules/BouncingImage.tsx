import styled from "styled-components"
import Image, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useRef, useState } from "react";
import useMouseDown from "../../hooks/useMouseDown";

interface BouncableImageStyleProps {
  sizeRatio: number,
  fadeIn: boolean
}

const BouncableImageStyle = styled.span<BouncableImageStyleProps>`
  > *{
    transform: scale(${(props) => props.sizeRatio});
    transition: transform 500ms;
    ${(props) => props.fadeIn ? "animation: fadein 500ms;" : ""}

    @keyframes fadein {
        from { transform: scale(0.5); }
        to { transform: scale(1); }
    }
  }
`

interface Props {
  src: string | StaticImageData,
  alt: string,
  width?: number,
  height?: number,
  fadeIn?: boolean
}

export default function BouncingImage({src, alt, width, height, fadeIn} : Props) {
    const [isMouseDown] = useMouseDown()
    const [isMouseDownInElement, setMouseDownInElement] = useState(false);
    const [isMouseEnter, setMouseEnter] = useState(false)
  
    useEffect(() => {
      if(!isMouseDown) setMouseDownInElement(false)
    }, [isMouseDown])

    const sizeRatio = useMemo(() => {
      if(isMouseDownInElement) return 1.1
      else if(isMouseEnter) return 0.95
    }, [isMouseDownInElement, isMouseEnter])

    return (
      <BouncableImageStyle 
        sizeRatio={sizeRatio??1}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onMouseDown={() => setMouseDownInElement(true)}
        fadeIn={fadeIn??false}
      ><Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={false}
      /></BouncableImageStyle>
    )
}