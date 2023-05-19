import styled from "styled-components";

const SubTitleStyle = styled.h2`
    font-family: ${(props) => props.theme.font_families.primary_sub_title};
    font-size: ${(props) => props.theme.font_sizes.primary_sub_title};
    font-weight: ${(props) => props.theme.font_weights.primary_sub_title};
    color: ${(props) => props.theme.colors.text_fill__primary_sub_title};
`

interface Props {
    children: string
}

export default function PrimarySubTitle({children}: Props) {
    return (<SubTitleStyle>{children}</SubTitleStyle>)
}