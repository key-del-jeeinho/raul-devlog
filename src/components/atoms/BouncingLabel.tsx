import { useCallback, useState } from "react";
import LabelSize from "../../interfaces/LabelSize";
import LabelStyle from "../../interfaces/LabelStyle";
import Label from "./Label";
import styled from "styled-components";

interface Props {
    children: string,
    style: LabelStyle,
}

const BouncingLabelStyle = styled.span`
    & > * {
        transition: all 50ms;
    }
`

export default function BouncingLabel({children, style}: Props) {
    const [size, setSize] = useState<LabelSize>('regular')
    const [mouseDown, setMouseDown] = useState(false)
    return (<BouncingLabelStyle 
        onMouseDown={() => { setMouseDown(true); setSize('bigger') }} 
        onMouseLeave={() => setSize('regular')}
        onMouseEnter={() => { if(mouseDown) setSize('bigger') }}
        onMouseUp={() => { setMouseDown(false); setSize('regular') }}
    ><Label style={style} size={size}>{children}</Label>
    </BouncingLabelStyle>)
}