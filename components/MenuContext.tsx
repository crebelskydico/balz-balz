import React, {useState} from 'react';

type ContextProps = {
    menuIsOpen: boolean;
    toggleMenu: (param: boolean) => void;
    overlayIsOpen: boolean;
    toggleOverlay: (param: boolean) => void;
}
interface Props {
  children: React.ReactNode;
}

const MenuContext = React.createContext({} as ContextProps);

const MenuContextProvider: React.FC<Props> = ({ children }) => {
    const [menuIsOpen, menuSetOpen] = useState(false);
    const [overlayIsOpen, overlaySetOpen] = useState(false);

    function toggleMenu() {
        menuSetOpen(!menuIsOpen);
    }

    function toggleOverlay() {
        overlaySetOpen(!overlayIsOpen);
    }


    return (
    <MenuContext.Provider value={{menuIsOpen, overlayIsOpen, toggleMenu, toggleOverlay}}>
        {children}
    </MenuContext.Provider>
    )
}


export {MenuContextProvider, MenuContext};