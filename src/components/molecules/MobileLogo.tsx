import BouncingImage from "./BouncingImage"
import logoImage from "../../../public/images/img_logo.png"

const Z_INDEX_MAX = 2147483647
export default function MobileLogo() {
    return (<span style={{zIndex: Z_INDEX_MAX, position: "relative"}}>
                <BouncingImage 
                    src={logoImage}
                    alt="logo" width={100}
                />
            </span>)
}