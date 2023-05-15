import GlobalStyle from '@/styles/GlobalStyle'
import '@/styles/globals.css'
import { defaultTheme, lightTheme } from '@/styles/theme'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

const DEFAULT_SEO: DefaultSeoProps = {
  title: "나무에 물 주듯 기술블로그",
  description: "Raul.devlog",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://raul-devlog.site",
    title: "나무에 물 주듯",
    site_name: "Raul.devlog",
    images: [
      {
        url: "http://raul-devlog.site/images/img_plant-001.png",
        width: 285,
        height: 167,
        alt: "나무에 물 주듯 기술블로그"
      }
    ]
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
      <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime" defer/>
    </>
  )
}
