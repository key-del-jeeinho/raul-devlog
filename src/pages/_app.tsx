import GlobalStyle from '@/styles/GlobalStyle'
import '@/styles/globals.css'
import { defaultTheme, lightTheme } from '@/styles/theme'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}
