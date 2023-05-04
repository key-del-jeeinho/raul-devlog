import styled from "styled-components"

const TitleStyle = styled.span`
    display: inline-block;
    font-family: ${(props) => props.theme.font_families.title};
    font-size: ${(props) => props.theme.font_sizes.title};
    font-weight: ${(props) => props.theme.font_weights.title};
    color: ${(props) => props.theme.colors.text_fill__title}
`

interface Props {
    children: string
}

export default function Title({children}: Props) {
    return (<TitleStyle>{children}</TitleStyle>)
}