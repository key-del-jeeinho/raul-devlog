import { useEffect, useMemo, useState } from "react";
import LabelSize from "../../interfaces/LabelSize";
import LabelStyle from "../../interfaces/LabelStyle";
import Label from "../atoms/Label";
import styled from "styled-components";
import useMouseDown from "@/hooks/useMouseDown";

interface BouncingLabelStyleProps {
    sizeRatio: number
}

const BouncingLabelStyle = styled.span<BouncingLabelStyleProps>`
    & > * > * {
        transition: color 500ms, font-size 500ms;
        font-size: ${(props) => props.sizeRatio}em;
    }
`

interface Props {
    children: string,
    style: LabelStyle,
    size: LabelSize
}

export default function BouncingLabel({children, style, size}: Props) {
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

    return (<BouncingLabelStyle 
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onMouseDown={() => setMouseDownInElement(true)}
        sizeRatio={sizeRatio??1}
    >
        <Label 
            style={style}
            size={size}
        >{children}</Label>
    </BouncingLabelStyle>)
}