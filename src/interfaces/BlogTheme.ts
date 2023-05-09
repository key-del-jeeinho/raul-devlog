type BlogTheme = 'light' | 'dark'
export function getNextTheme(theme: BlogTheme): BlogTheme {
    switch(theme) {
        case "light": return 'dark'
        case "dark": return 'light'
    }
}
export default BlogTheme