import styled, { useTheme } from "styled-components";
import Logo from "../molecules/Logo";
import Icon from "../atoms/Icon";
import { ReactNode, useContext } from "react";
import Direction from "../../interfaces/Direction";
import { createContext } from "react";
import Link from "next/link";
import MobileLogo from "../molecules/MobileLogo";
import { useIsMobile } from "@/hooks/useIsMobile";

type NavBarContextProp = {
    direction: Direction,
}

const NavBarContext = createContext<NavBarContextProp | null>(null)

export const NAV_BAR_HEIGHT_PX = 110
export const MOBILE_NAV_BAR_HEIGHT_PX = 80
const NavBarStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: ${NAV_BAR_HEIGHT_PX}px;
    @media screen and (max-width:599px) {
        height: ${MOBILE_NAV_BAR_HEIGHT_PX}px;
        .logo {
            visibility: hidden;
        }
    }
    background-color: ${({theme}) => theme.colors.box_fill__nav_bar};
    backdrop-filter: blur(20px);

    border-bottom: 1px solid ${({theme}) => theme.colors.box_outline__nav_bar};
`

interface Props {

}

export default function NavBar({}: Props) {
    const theme = useTheme()
    const iconColor = theme.colors.icon_fill__nav_bar
    const isMobile = useIsMobile()
    const logo = isMobile ? (<NavBar.MobileLogo/>) : (<NavBar.Logo/>)
    return (
        <>
        <NavBarStyle>
            <NavBar.Left>
                <Link href="/#home">
                    {logo}
                </Link>
            </NavBar.Left>
            <NavBar.Right>
                <NavBar.Attribute><Link href="/about-me">About.me</Link></NavBar.Attribute>
                <NavBar.Attribute><Link href="/dev-post">Dev.post</Link></NavBar.Attribute>
                <NavBar.Attribute isLast={true}><Icon type='ic32_menu' color={iconColor} /></NavBar.Attribute>
            </NavBar.Right>
        </NavBarStyle>
        </>
    )
}

export const NavBarSpace = styled.div`
    width: 100vw;
    height: ${NAV_BAR_HEIGHT_PX}px;
    @media screen and (max-width:599px) {
        height: ${MOBILE_NAV_BAR_HEIGHT_PX}px;
    }
`

interface NavBarComponentProps {
    children: ReactNode,
}

NavBar.Logo = function NavBarLogo(): JSX.Element {
    return (
        <div style={{paddingTop: "126px", paddingLeft: "30px"}}>
            <Logo/>
        </div>
    )
}

NavBar.MobileLogo = function LabBarMobileLogo(): JSX.Element {
    return (
        <div style={{paddingTop: "80px", paddingLeft: "30px"}}>
            <MobileLogo/>
        </div>
    )
}

const NavBarLeftStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: ${NAV_BAR_HEIGHT_PX / 2}px;
    @media screen and (max-width:599px) {
        padding-right: ${MOBILE_NAV_BAR_HEIGHT_PX / 2}px;
    }
`

NavBar.Left = function NavBarLeft({children}: NavBarComponentProps): JSX.Element {
    const direction: Direction = "Left"
    const providerValue: NavBarContextProp = { direction }
    return (<NavBarLeftStyle>
                <NavBarContext.Provider value={providerValue}>
                    {children}
                </NavBarContext.Provider>
            </NavBarLeftStyle>)
}

const NavBarRightStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: ${NAV_BAR_HEIGHT_PX / 2}px;
    @media screen and (max-width:599px) {
        padding-right: ${MOBILE_NAV_BAR_HEIGHT_PX / 2}px;
    }
`

NavBar.Right = function NavBarRight({children}: NavBarComponentProps): JSX.Element {
    const direction: Direction = "Right"
    const providerValue: NavBarContextProp = { direction }
    return (<NavBarRightStyle>
                <NavBarContext.Provider value={providerValue}>
                    {children}
                </NavBarContext.Provider>
            </NavBarRightStyle>)
}

interface NavBarAttributeStyleProp {
    isLast: boolean,
    direction: Direction,
}

const NavBarAttributeStyle = styled.div<NavBarAttributeStyleProp>`
    display: inline-block;
    font-size: ${({theme}) => theme.font_sizes.nav_bar};
    align-items: center;
    ${({isLast, direction}) => {
        if(isLast) {
            switch(direction) {
                case "Right": return "padding-left: 2.5vw"
                case "Left": return "padding-right: 2.5vw"
            }
        } else return "padding: 0 2.5vw"
    }}
`

interface NavBarAttributeProps {
    children: ReactNode,
    isLast?: boolean,
}

NavBar.Attribute = function NavBarAttribute({children, isLast}: NavBarAttributeProps): JSX.Element | null {
    const context = useContext(NavBarContext)
    if(context == null) return null

    const { direction } = context
    return (<NavBarAttributeStyle isLast={isLast??false} direction={direction}>{children}</NavBarAttributeStyle>)
}
