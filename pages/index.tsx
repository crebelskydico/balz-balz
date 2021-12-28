import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import MainLayout from '../layouts/MainLayout';
import { getAllContent } from '../utils/content';
import { MenuContext } from '../components/MenuContext';

const BASE_CLASS = 'BB';

//TODO styling for overlay, menu, seo header, GA, cleanup

interface ContentPropTypes {
  data: {
    meta: {
      title: string;
      path: string;
    };
    content: string;
  }[];
}

const Home = ({ ...props }: ContentPropTypes) => {
  const router = useRouter();
  const { path } = router.query;
  const { menuIsOpen, toggleMenu } = useContext(MenuContext);
  const { overlayIsOpen, toggleOverlay } = useContext(MenuContext);

  const filteredContent = props.data.filter(
    (item) => item.meta.path === path
  )[0];

  const overlayClass = clsx(!path && '-translate-y-full');
  const menuiconClassName = clsx(
    'BB_overlayicon',
    'BB_overlayicon--main',
    !overlayIsOpen && 'hidden'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('absence') !== 'viewed') {
        router.push('/absence');
      }
      localStorage.setItem('absence', 'viewed');
    }
  }, []);

  return (
    <MainLayout>
      <main
        className={`${BASE_CLASS}_content flex flex-col items-center w-full px-4 pt-28 md:max-w-3xl`}
      >
        <section className={`${BASE_CLASS}_content-logo`}>
          <Image src="/svg/wt-logo-wt.svg" height={117} width={180} alt="" />
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
        className={`${BASE_CLASS}_overlay absolute bg-overlay w-full min-h-full overflow-y-scroll z-20 top-0 left-0 transition-all duration-300 ease-linear flex flex-col items-center w-full px-4 py-28 ${overlayClass}`}
      >
        <div className="w-full md:max-w-3xl px-4">
          <h2 className="text-3xl pb-2">{filteredContent?.meta.title}</h2>
          <div className="spacer"></div>
          <div className="vertical-space"></div>
          <div
            dangerouslySetInnerHTML={{ __html: filteredContent?.content }}
          ></div>
        </div>
        <Link href={`/`} passHref>
          <button
            className={`text-gray-500 w-10 h-10 absolute top-2 right-1 focus:outline-none self-center ${menuiconClassName}`}
            onClick={() => {
              toggleOverlay(false);
              toggleMenu(!menuIsOpen);
            }}
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
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await getAllContent();
  return {
    props: {
      data: content,
    },
  };
};

export default Home;
