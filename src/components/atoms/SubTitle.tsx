import styled from "styled-components";

const SubTitleStyle = styled.span`
    display: inline-block;
    font-family: ${(props) => props.theme.font_families.sub_title};
    font-size: ${(props) => props.theme.font_sizes.sub_title};
    font-weight: ${(props) => props.theme.font_weights.sub_title};
    color: ${(props) => props.theme.colors.text_fill__sub_title};
`

interface Props {
    children: string
}

export default function SubTitle({children}: Props) {
    return (<SubTitleStyle>{children}</SubTitleStyle>)
}