import "@/styles/index.scss";
import "@/apps/App/App.scss";

import { isNullOrEmpty } from '@/lib/utils';
import { ReactNode, Suspense } from 'react';
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inconsolata as InconsolataFont } from "next/font/google";
import Nav from "@/apps/App/Nav";
import { lazyRouteComponents } from "@/apps/App/App";
import AppThemeSelector from "@/apps/App/AppThemeSelector";
import { UseGoogleAnalyticsPageviews } from "@/apps/App/App.analytics";

export const metadata: Metadata = {
  title: {
    template: 'Minkiele - The wrong website, by definition - #%s',
    default: 'Minkiele - The wrong website, by definition',
  }
};

/** {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets} */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  interactiveWidget: 'overlays-content',
  colorScheme: 'dark light',
  themeColor: '#000000',
};

const inconsolata = InconsolataFont({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/manifest.json" />
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
      </head>
      <body className={inconsolata.className}>
      {!isNullOrEmpty(process.env.NEXT_PUBLIC_GTM_ID) &&
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>}
        <div className="App">
          <aside>
            <Nav menu={lazyRouteComponents} />
            <AppThemeSelector />
          </aside>
          <article id="main-article">{children}</article>
        </div>
        <Suspense fallback={null}>
          <UseGoogleAnalyticsPageviews />
        </Suspense>
      </body>
    </html>
  )
}
