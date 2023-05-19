import styled from "styled-components"

const TitleStyle = styled.h1`
    font-family: ${({theme}) => theme.font_families.secondary_title};
    font-size: ${({theme}) => theme.font_sizes.secondary_title};
    font-weight: ${({theme}) => theme.font_weights.secondary_title};
    color: ${({theme}) => theme.colors.text_fill__secondary_title};
    transition: all 300ms;
`

interface Props {
    children: string
}

export default function SecondaryTitle({children}: Props) {
    return (<TitleStyle>{children}</TitleStyle>)
}