import "@/styles/index.scss";
import "@/apps/App/App.scss";

import type { AppProps } from "next/app";
import Nav from "@/apps/App/Nav";
import { lazyRouteComponents } from "@/apps/App/App";
import Head from "next/head";
import { LazyRouteComponent } from "@/apps/App/App.models";
import Script from 'next/script';
import { isNullOrEmpty, useGoogleAnalyticsPageviews } from "@/apps/App/App.utils";

export default function App({ Component, pageProps }: AppProps<LazyRouteComponent>) {
  useGoogleAnalyticsPageviews();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      {!isNullOrEmpty(process.env.NEXT_PUBLIC_ANALYTICS_ID) &&
        <Script src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPTIMIZE_ID}`} />
      }
      <div className="App">
        <aside>
          <Nav menu={lazyRouteComponents} />
        </aside>
        <article>
          <h1>{pageProps.name}</h1>
          <Component {...pageProps} />
        </article>
      </div>
    </>
  );
}
