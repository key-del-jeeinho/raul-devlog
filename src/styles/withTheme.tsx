import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./theme"

export default function withTheme(contentFn: JSX.Element) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {contentFn}
    </ThemeProvider>
  )
}