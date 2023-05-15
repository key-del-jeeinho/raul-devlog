import useBlogTheme from "@/hooks/useBlogTheme";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";
import { ReactNode } from "react";
import BlogTheme from "@/interfaces/BlogTheme";
import { lightTheme } from "@/styles/lightTheme";
import { darkTheme } from "@/styles/darkTheme";

interface Prop {
    children: ReactNode,
}

export default function ThemeProvider({children}: Prop) {
    const [theme] = useBlogTheme()
    return (
        <StyledThemeProvider theme={getStyledComponentTheme(theme)}>
            {children}
        </StyledThemeProvider>
    )
}

export function getStyledComponentTheme(theme: BlogTheme): DefaultTheme {
    switch(theme) {
        case "light": return lightTheme
        case "dark": return darkTheme
    }
}