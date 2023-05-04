import styled from "styled-components"

const TitleStyle = styled.div`
    display: inline-block;
    font-family: ${(props) => props.theme.font_famillies.title};
    font-size: ${(props) => props.theme.font_sizes.title};
    font-weight: ${(props) => props.theme.font_weights.title};
`

interface Props {
    children: string
}

export default function Title({children}: Props) {
    return (<TitleStyle>{children}</TitleStyle>)
}