import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

export default class DefaultDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
          <link rel="stylesheet" type="text/css" href="https://webfontworld.github.io/PyeongChang/PyeongChang.css" />
          <link rel="stylesheet" type="text/css" href="https://webfontworld.github.io/PyeongChang/PyeongChangPeace.css"/>
          <meta charSet='utf-8'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}