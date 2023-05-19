import styled from "styled-components";

const SubTitleStyle = styled.h2`
    font-family: ${({theme}) => theme.font_families.secondary_sub_title};
    font-size: ${({theme}) => theme.font_sizes.secondary_sub_title};
    font-weight: ${({theme}) => theme.font_weights.secondary_sub_title};
    color: ${({theme}) => theme.colors.text_fill__secondary_sub_title};
`

interface Props {
    children: string
}

export default function ScondarySubTitle({children}: Props) {
    return (<SubTitleStyle>{children}</SubTitleStyle>)
}