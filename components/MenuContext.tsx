import React, {useState} from 'react';

type ContextProps = {
    menuIsOpen: boolean;
    toggleMenu: (param: boolean) => void;
    overlayIsOpen: boolean;
    toggleOverlay: (param: boolean) => void;
}

const MenuContext = React.createContext({} as ContextProps);

const MenuContextProvider: React.FunctionComponent = (props) => {
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
        {props.children}
    </MenuContext.Provider>
    )
}


export {MenuContextProvider, MenuContext};