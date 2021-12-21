import type { NextPage } from 'next';
import Image from 'next/image';
import MainMenu from '../components/menu/main';

const BASE_CLASS = 'Homepage';

const Home: NextPage = () => {
  return (
    <div
      className={`${BASE_CLASS}_wrapper flex h-screen w-screen flex-col items-center`}
    >
      <MainMenu />
      <main
        className={`${BASE_CLASS}_content flex flex-col items-center w-full px-4 md:max-w-3xl`}
      >
        <section className={`${BASE_CLASS}_content-logo`}>
          <Image src="/svg/wt-logo-wt.svg" height={117} width={180} />
        </section>
        <section className={`${BASE_CLASS}_content-text`}>
          <h2
            className={`${BASE_CLASS}_title text-xl pt-4 pb-4 flex justify-center`}
          >
            CAFÉ UND FEINE KOST
          </h2>
          <div className="spacer w-full h-px bg-white"></div>
          <p className={`${BASE_CLASS}_text pt-4 pb-4`}>
            Wir sind Kathrin und Chris. Geschwister, Gastgeber aus Leidenschaft
            und total versessen auf spitzenmäßigen Kaffee. Unsere
            Herausforderung ist es, euch mit dem Bestmöglichen aus kostbaren
            Bohnen, außergewöhnlich gut belegten Stullen und hausgemachtem
            Blechkuchen glücklich zu machen. <br />
            <br />
            Schaut vorbei, wir freuen uns auf euch!
          </p>
        </section>
        <section className={`${BASE_CLASS}_content-video pt-4 w-full`}>
          <video
            width="100%"
            controls
            poster="videos/balzubalz-video-poster.jpg"
          >
            <source src="videos/BalzuBalz.mp4" type="video/mp4" />
            <source src="videos/BalzuBalz.ogv" type="video/ogg" />
          </video>
        </section>
      </main>
    </div>
  );
};

export default Home;
