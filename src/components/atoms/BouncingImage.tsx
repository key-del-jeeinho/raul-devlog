import styled from "styled-components"
import Image from 'next/image';
import { useRef, useState } from "react";

interface BouncableImageProps {
  isAnimating: boolean
}

const BouncableImage = styled.div<BouncableImageProps>`
  &.animate > *{
    transform: scale(1.05);
    transition: transform 0.1s;
  }
  & > * {
    transform: scale(1);
    transition: transform 0.1s;
  }  
`

interface Props {
  src: string,
  alt: string,
  width: number | null,
  height: number | null
}

export default function BouncingImage(props : Props) {
    const bouncableImageRef = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);
  
    const handleMouseDown = () => {
      if (!isAnimating.current) {
        if(!bouncableImageRef.current) return
        isAnimating.current = true;
        bouncableImageRef.current.classList.add("animate");
      }
    };

    const handleMouseUp = () => {
      if (isAnimating.current) {
        if(!bouncableImageRef.current) return
        bouncableImageRef.current.classList.remove("animate");
        isAnimating.current = false;
      }
    }

    return (
      <BouncableImage 
      ref={bouncableImageRef} 
      isAnimating={isAnimating.current}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ><Image 
        src={props.src}
        alt={props.alt}
        width={props.width??undefined}
        height={props.height??undefined}
        draggable={false}
      /></BouncableImage>
    )
}