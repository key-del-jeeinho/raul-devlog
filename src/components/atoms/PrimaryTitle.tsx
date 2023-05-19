import styled from "styled-components"

const TitleStyle = styled.h1`
    font-family: ${(props) => props.theme.font_families.primary_title};
    font-size: ${(props) => props.theme.font_sizes.primary_title};
    font-weight: ${(props) => props.theme.font_weights.primary_title};
    color: ${(props) => props.theme.colors.text_fill__primary_title};
    transition: all 300ms;
`

interface Props {
    children: string
}

export default function PrimaryTitle({children}: Props) {
    return (<TitleStyle>{children}</TitleStyle>)
}