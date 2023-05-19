import useBlogTheme from "@/hooks/useBlogTheme"
import { useIsMobile } from "@/hooks/useIsMobile"
import toggleDarkModeCommentImage from "@/../public/images/img_toggle-dark-mode-comment.png"
import toggleLightModeCommentImage from "@/../public/images/img_toggle-light-mode-comment.png"
import BouncingImage from "./BouncingImage"

export default function ToggleThemeComment() {
    const [blogTheme] = useBlogTheme()
    const isMobile = useIsMobile()
    const toggleThemeCommentImage = blogTheme == 'light' ? toggleDarkModeCommentImage : toggleLightModeCommentImage
    return (<div className="absolute bottom-0vh left-0vw">
                {!isMobile
                    ? <span  className="absolute translate-x-155% translate-y--170% transition-all-500">
                        <BouncingImage src={toggleThemeCommentImage} width={100} alt="다크모드 토글 안내 말풍선"/>
                    </span>
                    : <></>}
            </div>)
}