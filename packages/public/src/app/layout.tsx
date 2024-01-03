import "@/styles/index.scss";
import "@/apps/App/App.scss";

import { isNullOrEmpty } from '@/lib/utils';
import { ReactNode } from 'react';
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: 'Minkiele - The wrong website, by definition - #%s',
    default: 'Minkiele - The wrong website, by definition',
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        {/** {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets} */}
        <meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=overlays-content" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Noto+Emoji&display=swap" rel="stylesheet" />
        {!isNullOrEmpty(process.env.NEXT_PUBLIC_ANALYTICS_ID) &&
          <>
            <Script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`
            }} id="googleAnalyticsSetup" />
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
          </>
        }
        {!isNullOrEmpty(process.env.NEXT_PUBLIC_GTM_ID) &&
          <Script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`
          }} id="googleTagManagerSetup" />}
        {!isNullOrEmpty(process.env.NEXT_PUBLIC_ANALYTICS_ID) &&
          <Script src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPTIMIZE_ID}`} />
        }
      </head>
      <body>
      {!isNullOrEmpty(process.env.NEXT_PUBLIC_GTM_ID) &&
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>}
        {children}
      </body>
    </html>
  )
}
