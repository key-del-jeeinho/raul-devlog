import styled from "styled-components"
import BouncingImage from "./BouncingImage"
import logoImage from "../../../public/images/img_logo.png"

export default function Logo() {
    return (<BouncingImage src={logoImage} alt="logo" width={162} height={184}/>)
}