import BouncingImage from "./BouncingImage"
import logoImage_light from "../../../public/images/img_logo.png"
import logoImage_dark from "../../../public/images/img_logo-dark.png"
import useBlogTheme from "@/hooks/useBlogTheme"
import BlogTheme from "@/interfaces/BlogTheme"

const Z_INDEX_MAX = 2147483647
export default function Logo() {
    const [theme] = useBlogTheme()
    const image = getLogoImageByTheme(theme)
    return (<span style={{zIndex: Z_INDEX_MAX, position: "relative"}}>
                <BouncingImage 
                    src={image}
                    alt="logo" width={162}
                    height={184}
                />
            </span>)
}

function getLogoImageByTheme(theme: BlogTheme) {
    switch(theme) {
        case "light": return logoImage_light
        case "dark": return logoImage_dark
    }
}
