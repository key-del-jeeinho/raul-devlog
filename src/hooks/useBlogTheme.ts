import BlogTheme, { getNextTheme } from "@/interfaces/BlogTheme";
import themeState from "@/recoil/theme/blogThemeAtom";
import { useRecoilState } from "recoil";

export default function useBlogTheme(): [
    theme: BlogTheme,
    setTheme: (theme: BlogTheme) => void,
    toggleTheme: () => void
] {
    const [theme, setTheme] = useRecoilState(themeState)
    const toggleTheme = () => setTheme(getNextTheme)
    return [theme, setTheme, toggleTheme]
}