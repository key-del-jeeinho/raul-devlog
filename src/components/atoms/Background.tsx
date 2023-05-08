import { ReactNode } from "react";
import styled from "styled-components";

const BackgroundStyle = styled.div`
    background-image: url(${({theme}) => theme.images.box_texture__page});
    width: 100vw;
    height: 100vh;
`

interface Props {
    children: ReactNode
}

export default function Background({children}: Props) {
    return <BackgroundStyle>{children}</BackgroundStyle>
}