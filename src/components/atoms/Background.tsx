import { ReactNode } from "react";
import styled from "styled-components";

const BackgroundStyle = styled.div`
    background-image: url(${({theme}) => theme.images.box_texture__page});
    background-repeat: repeat;
    width: 100%;
    height: 100%;
`

interface Props {
    children: ReactNode
}

export default function Background({children}: Props) {
    return <BackgroundStyle>{children}</BackgroundStyle>
}