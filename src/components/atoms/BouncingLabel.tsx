import { useCallback, useEffect, useState } from "react";
import LabelSize from "../../interfaces/LabelSize";
import LabelStyle from "../../interfaces/LabelStyle";
import Label from "./Label";
import styled from "styled-components";
import useMouseDown from "@/hooks/useMouseDown";

interface Props {
    children: string,
    style: LabelStyle,
}

const BouncingLabelStyle = styled.span`
    & > * {
        transition: all 100ms;
    }
`

export default function BouncingLabel({children, style}: Props) {
    const [isMouseDown] = useMouseDown()
    const [size, setSize] = useState<LabelSize>('regular')
    
    useEffect(() => {
        if(!isMouseDown) setSize('regular')
    }, [isMouseDown])

    return (<BouncingLabelStyle 
        onMouseDown={() => setSize('bigger')} 
    ><Label style={style} size={size}>{children}</Label>
    </BouncingLabelStyle>)
}