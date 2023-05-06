import styled from "styled-components"
import LabelStyle, { getRandomLabelStyle } from "../../interfaces/LabelStyle"
import LabelSize from "../../interfaces/LabelSize"

interface LabelWapperStyleProps {
    labelSize: LabelSize
}

const LabelWapperStyle = styled.span<LabelWapperStyleProps>`
    font-size: ${(props) => { switch(props.labelSize) {
        case 'regular': return props.theme.font_sizes.label
        case 'bigger': return props.theme.font_sizes.bigger_label
    }}};
`

interface LabelStyleProps {
    labelStyle: LabelStyle,
    labelSize: LabelSize,
}

const LabelDesign = styled.span<LabelStyleProps>`
    user-select: none;
    padding: 0px 10px 0px 10px;
    ${(props) => {switch(props.labelStyle) {
        case 'texture': return 'background-image: url(' + props.theme.textures.box_texture__label_texture + ');'
    }}};
    border: 1px solid ${(props) => {switch(props.labelStyle) {
        case 'colored': return props.theme.colors.box_outline__label_colored
        case 'frame': return props.theme.colors.box_outline__label_frame
        case 'texture': return props.theme.colors.box_outline__label_texture
        case 'monotone': return props.theme.colors.box_outline__label_monotone
    }}};;
    background-color: ${(props) => {switch(props.labelStyle) {
        case 'colored': return props.theme.colors.box_fill__label_colored
        case 'frame': return props.theme.colors.box_fill__label_frame
        case 'monotone': return props.theme.colors.box_fill__label_monotone
    }}};
    color: ${(props) => {switch(props.labelStyle) {
        case 'colored': return props.theme.colors.text_fill__label_colored
        case 'frame': return props.theme.colors.text_fill__label_frame
        case 'texture': return props.theme.colors.text_fill__label_texture
        case 'monotone': return props.theme.colors.text_fill__label_monotone
    }}};
    ${(props) => {switch(props.labelStyle) {
        case 'frame': return '-webkit-text-stroke: 1px ' + props.theme.colors.text_outline__label_frame
    }}};
    font-weight: ${(props) => props.theme.font_weights.label};
    font-size: ${(props) => { switch(props.labelSize) {
        case 'regular': return props.theme.font_sizes.label
        case 'bigger': return props.theme.font_sizes.bigger_label
    }}};
`

interface Props {
    children: string,
    labelStyle: LabelStyle,
    labelSize: LabelSize,
}

export default function Label({children, labelStyle, labelSize}: Props) {
    const calculatedStyle = labelStyle == 'random' ? getRandomLabelStyle() : labelStyle
    return (<LabelWapperStyle labelSize={labelSize}><LabelDesign labelStyle={calculatedStyle} labelSize={labelSize}>{children}</LabelDesign></LabelWapperStyle>)
}