import "@/styles/index.scss";
import "@/apps/App/App.scss";

import type { AppProps } from "next/app";
import Nav from "@/apps/App/Nav";
import { lazyRouteComponents } from "@/apps/App/App";
import Head from "next/head";
import { LazyRouteComponent } from "@/apps/App/App.models";
import Script from 'next/script';
import { isNullOrEmpty, useGoogleAnalyticsPageviews } from "@/apps/App/App.utils";
import useTheme from "@/hooks/useTheme";
import ThemeSelector from "@/apps/ThemeSelector/ThemeSelector";

export default function App({ Component, pageProps }: AppProps<LazyRouteComponent>) {
  const { theme, setTheme } = useTheme();
  useGoogleAnalyticsPageviews();
  return (
    <>
      <Head>
        {/** {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets} */}
        <meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=overlays-content" />
        <title>{'Minkiele - The wrong website, by definition.' + (pageProps.setTitle !== false ? ` - #${pageProps.name}` : '') }</title>
      </Head>
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
        <Script dangerouslySetInnerHTML={{__html: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');</script>
<!-- End Google Tag Manager -->`}} id="googleTagManagerSetup" />}
      {!isNullOrEmpty(process.env.NEXT_PUBLIC_ANALYTICS_ID) &&
        <Script src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPTIMIZE_ID}`} />
      }
      <div className="App">
        <aside>
          <Nav menu={lazyRouteComponents} />
          <ThemeSelector onChange={setTheme} theme={theme} />
        </aside>
        <article id="main-article">
          <h1>{pageProps.name}</h1>
          <Component {...pageProps} />
        </article>
      </div>
    </>
  );
}
