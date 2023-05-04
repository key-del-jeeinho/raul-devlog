import styled from "styled-components"

type LabelType = 'colored'|'frame'|'texture'|'monotone'|'random'

interface LabelStyleProps {
    type: LabelType
}

const LabelStyle = styled.div<LabelStyleProps>`
    display: inline-block;
    padding: 0px 10px 0px 10px;
    ${(props) => {switch(props.type) {
        case 'texture': return 'background-image: url(' + props.theme.textures.box_texture__label_texture + ');'
    }}};
    border: 1px solid ${(props) => {switch(props.type) {
        case 'colored': return props.theme.colors.box_outline__label_colored
        case 'frame': return props.theme.colors.box_outline__label_frame
        case 'texture': return props.theme.colors.box_outline__label_texture
        case 'monotone': return props.theme.colors.box_outline__label_monotone
    }}};;
    background-color: ${(props) => {switch(props.type) {
        case 'colored': return props.theme.colors.box_fill__label_colored
        case 'frame': return props.theme.colors.box_fill__label_frame
        case 'monotone': return props.theme.colors.box_fill__label_monotone
    }}};
    color: ${(props) => {switch(props.type) {
        case 'colored': return props.theme.colors.text_fill__label_colored
        case 'frame': return props.theme.colors.text_fill__label_frame
        case 'texture': return props.theme.colors.text_fill__label_texture
        case 'monotone': return props.theme.colors.text_fill__label_monotone
    }}};
    ${(props) => {switch(props.type) {
        case 'frame': return '-webkit-text-stroke: 1px ' + props.theme.colors.text_outline__label_frame
    }}};
    font-weight: ${(props) => props.theme.font_weights.label};
    font-size: ${(props) => props.theme.font_sizes.label};
`

interface Props {
    text: string,
    type: LabelType
}

export default function Label(props: Props) {
    return (<LabelStyle type={props.type}>{props.text}</LabelStyle>)
}