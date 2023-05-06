import styled from "styled-components"
import BouncingImage from "./BouncingImage"
import logoImage from "../../../public/images/img_logo.png"

interface Props {
    link: string
}

export default function NavLogo({link}: Props) {
    return (<a href={link}><BouncingImage src={logoImage} alt="logo" width={162} height={184}/></a>)
}