import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function BalzBalz({ Component, pageProps }: AppProps) {
  return (
    <div id="balzbalz">
      <Head>
        <title>Balz und Balz</title>
        <meta
          name="description"
          content="Balz und Balz - Café und feine Kost in Hamburg Hoheluft."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default BalzBalz;
