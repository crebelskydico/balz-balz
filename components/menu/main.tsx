import { useContext, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { MenuContext } from '../MenuContext';

type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>;

const menuItems: OptionalExceptFor<HTMLAnchorElement, 'href' | 'title'>[] = [
  { href: 'oeffnungszeiten', title: 'Öffnugszeiten' },
  { href: 'impressum', title: 'Impressum' },
  { href: 'datenschutz', title: 'Datenschutz' },
  {
    href: 'https://www.facebook.com/BalzundBalz/',
    title: 'Facebook',
    target: '_blank',
  },
  {
    href: 'https://www.instagram.com/balzundbalz/',
    title: 'Instagram',
    target: '_blank',
  },
];


const MainMenu = () => {
  const {menuIsOpen, toggleMenu} = useContext(MenuContext);
  const {overlayIsOpen, toggleOverlay} = useContext(MenuContext);

  useEffect(() => {
    if(overlayIsOpen) {
      toggleMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayIsOpen]);

  const headerClassName = clsx(
    menuIsOpen&& 'bg-overlay md:bg-transparent'
  );
  const navigationClassName = clsx(
    'BB_navigation',
    'BB_navigation--main',
    !menuIsOpen ? '-translate-y-full md:-translate-y-32' : 'md:translate-y-0',
  );
  const menuiconClassName = clsx(
    'BB_menuicon',
    'BB_menuicon--main',
    !menuIsOpen ? 'BB_menuicon--close' : 'BB_menuicon--open',
    overlayIsOpen && 'hidden'
  );
  return (
    <header className={`BB_header flex justify-center w-full h-full md:h-auto fixed top-0 z-20 px-2 transition-all duration-300 ease-linear ${headerClassName} pt-12 md:pt-0`}>
      <nav
        className={`${navigationClassName} transition-all duration-300 ease-linear`}
      >
        <ul className=" flex-row md:flex justify-center text-center">
          {menuItems.map((item) => {
            return (
              <li key={item.href} className="MainMenu_item p-4">
                <Link href={`/?path=${item.href}`} as={!item.target ? `/${item.href}` : `${item.href}`} passHref={true}>
                  <a
                    className="MainMenu_link text-white font-bold text-base md:text-xs p-4 min-w-max-content"
                    target={!item.target ? '_self' : item.target}
                    onClick={() => toggleOverlay(true)}
                  >
                    {item.title.toUpperCase()}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className={`text-gray-500 w-10 h-10 absolute top-2 md:top-auto right-5 focus:outline-none self-center ${menuiconClassName}`}
        onClick={() => toggleMenu(!menuIsOpen)}
        aria-label={menuIsOpen ? 'Menü schliessen' : 'Menü öffnen'}
      >
        <div className="block w-5 relative">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
              menuIsOpen ? 'rotate-45' : ' -translate-y-1.5'
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
              menuIsOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out ${
              menuIsOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default MainMenu;
