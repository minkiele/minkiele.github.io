import { isNullOrEmpty } from '@/apps/App/App.utils'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Minkiele"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Noto+Emoji&display=swap" rel="stylesheet" />
      </Head>
      <body>
      {!isNullOrEmpty(process.env.NEXT_PUBLIC_GTM_ID) &&
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
