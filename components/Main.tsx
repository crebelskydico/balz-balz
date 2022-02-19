import {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import clsx from 'clsx';
import { MenuContext } from './MenuContext';

interface Props {
    title: string;
    content: string;
    path: ParsedUrlQuery['path'];
    BASE_CLASS?: string;
}
const Main = ({BASE_CLASS, title, content, path}: Props) => {

  const { menuIsOpen } = useContext(MenuContext);
  const { overlayIsOpen, toggleOverlay } = useContext(MenuContext)

  const overlayClass = clsx(!path && '-translate-y-full');
  const menuiconClassName = clsx(
    'BB_overlayicon',
    'BB_overlayicon--main',
    !overlayIsOpen && 'hidden'
  );
  return (
    <>
      <main
        className={`${BASE_CLASS}_content flex flex-col items-center w-full px-4 pt-28 md:max-w-3xl z-10`}
      >
        <section className={`${BASE_CLASS}_content-logo`}>
          <Image
            src="/svg/wt-logo-wt.svg"
            height={117}
            width={180}
            alt="Balz und Balz Logo"
          />
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
      <div
        className={`${BASE_CLASS}_overlay absolute bg-overlay w-full min-h-full md:min-h-screen z-20 top-0 left-0 transition-all duration-300 ease-linear flex flex-col items-center px-4 py-28 ${overlayClass}`}
      >
        <div className="w-full md:max-w-3xl px-4">
          <h2 className="text-3xl pb-2">{title}</h2>
          <div className="spacer"></div>
          <div className="vertical-space"></div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <Link href={`/`} passHref>
          <button
            className={`text-gray-500 w-10 h-10 absolute top-2 right-1 focus:outline-none self-center ${menuiconClassName}`}
            onClick={() => {
              toggleOverlay(false);
            }}
            aria-label={`${menuIsOpen ? 'Menü schließen' : 'Menü öffnen'}`}
          >
            <div className="block w-5 relative">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out rotate-45`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out -rotate-45`}
              ></span>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Main;
