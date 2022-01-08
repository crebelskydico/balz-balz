import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { MenuContextProvider } from '../components/MenuContext';
import PNEL from '../components/pnel';
import GA from '../components/gtag';

function BalzBalz({ Component, pageProps }: AppProps) {
  return (
    <div id="balzbalz">
      <Head>
        <title>Balz und Balz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Balz und Balz - Café und feine Kost in Hamburg Hoheluft."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6e6e6e" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MenuContextProvider>
        <Component {...pageProps} />
      </MenuContextProvider>
      <PNEL />
      <GA />
    </div>
  );
}

export default BalzBalz;
