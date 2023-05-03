import GlobalStyle from '@/styles/GlobalStyle'
import '@/styles/globals.css'
import { lightTheme } from '@/styles/theme'
import withTheme from '@/styles/withTheme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>{
      withTheme(
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
      )
    }</>
  )
}
