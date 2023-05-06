import styled from "styled-components"
import Image, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useRef, useState } from "react";
import useMouseDown from "../../hooks/useMouseDown";

interface BouncableImageStyleProps {
  sizeRatio: number
}

const BouncableImageStyle = styled.span<BouncableImageStyleProps>`
  > *{
    transform: scale(${(props) => props.sizeRatio});
    transition: transform 500ms;
  }
`

interface Props {
  src: string | StaticImageData,
  alt: string,
  width?: number,
  height?: number
}

export default function BouncingImage(props : Props) {
    const [isMouseDown] = useMouseDown()
    const [isMouseDownInElement, setMouseDownInElement] = useState(false);
    const [isMouseEnter, setMouseEnter] = useState(false)
  
    useEffect(() => {
      if(!isMouseDown) setMouseDownInElement(false)
    }, [isMouseDown])

    const sizeRatio = useMemo(() => {
      if(isMouseDownInElement) return 1.05
      else if(isMouseEnter) return 0.95
    }, [isMouseDownInElement, isMouseEnter])

    return (
      <BouncableImageStyle 
        sizeRatio={sizeRatio??1}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onMouseDown={() => setMouseDownInElement(true)}
      ><Image 
        src={props.src}
        alt={props.alt}
        width={props.width??undefined}
        height={props.height??undefined}
        draggable={false}
      /></BouncableImageStyle>
    )
}