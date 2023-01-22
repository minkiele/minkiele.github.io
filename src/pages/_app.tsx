import "@/styles/index.scss";
import "@/apps/App/App.scss";
import "@/apps/Snake/Snake.scss";
import "@/apps/Minesweeper/Minesweeper.scss";
import '@/apps/TheArchive/TheArchive.scss';
import '@/apps/Cruciverba/Cruciverba.scss';

import type { AppProps } from "next/app";
import Nav from "@/apps/App/Nav";
import { lazyRouteComponents } from "@/apps/App/App";
import Head from "next/head";
import { LazyRouteComponent } from "@/apps/App/App.models";

export default function App({ Component, pageProps }: AppProps<LazyRouteComponent>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{'Minkiele - The wrong website, by definition.' + (pageProps.setTitle !== false ? ` - #${pageProps.name}` : '') }</title>
      </Head>
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
