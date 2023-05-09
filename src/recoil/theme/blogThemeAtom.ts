import BlogTheme from "@/interfaces/BlogTheme";
import { atom } from "recoil";

export const DEFAULT_THEME: BlogTheme = 'light'
const themeState = atom<BlogTheme>({
    key: 'blogThemeState',
    default: DEFAULT_THEME,
})
export default  themeState