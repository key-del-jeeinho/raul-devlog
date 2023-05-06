import Color from "../../interfaces/Color";
import { ReactNode, useState } from "react";

type TextBy = 'inside'|'outside'
type PixelSize = `${number}px`
const pathId = 'path'

interface Props {
    radius: number,
    text: string,
    textBy: TextBy,
    fontSize: PixelSize,
    fontColor?: Color,
    fontWeight?: string,
    fontFamilly?: string
}

export default function CircularText({radius, text, textBy, fontSize, fontColor, fontWeight, fontFamilly}: Props) {
    const insidePath = calculatePath(radius, textBy, fontSize)
    const fontDiameter = Number(fontSize.replace('px', '')) * 2
    const diameter = radius * 2
    const length = textBy == 'inside' ? diameter : diameter + fontDiameter
    
    return (<>
        <svg width={length} height={length} >
            {insidePath}
            <text fontSize={fontSize} fill={fontColor} fontWeight={fontWeight} fontFamily={fontFamilly}>
                <textPath  href={'#' + pathId}>{text}</textPath>
            </text>
        </svg>
    </>)
}

function calculatePath(radius: number, textBy: TextBy, fontSize: PixelSize): ReactNode {
    const diameter = radius * 2
    let d: string
    const fontRadius = Number(fontSize.replace('px', ''))
    switch(textBy) {
        case 'inside': {
            `M 24,210
            a 162,162 0 1,1 372,0
            a 162,162 0 1,1 -372,0`
            const fontDiameter = fontRadius * 2
            d = `M ${fontRadius},${radius} 
            a ${radius - fontDiameter},${radius - fontDiameter} 0 1,1 ${diameter - fontDiameter},0 
            a ${radius - fontDiameter},${radius - fontDiameter} 0 1,1 ${-(diameter - fontDiameter)},0`
            break;
        }
        case 'outside': {
            d = `M ${fontRadius},${radius+fontRadius}
            a ${radius},${radius} 0 1,1 ${diameter},0
            a ${radius},${radius} 0 1,1 ${-diameter},0`
            break;
        }
    }
    return (<path id={pathId} d={d}stroke="transparent" strokeWidth="1" fill="none" />)
}