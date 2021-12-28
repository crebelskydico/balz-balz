import React from 'react';
import MainMenu from '../components/menu/main';

const MainLayout: React.FunctionComponent = ({children}) => {
  return (
    <div
      className={`BB_wrapper flex h-screen w-screen flex-col items-center`}    >
      <MainMenu />
      {children}
      
    </div>
  );
};

export default MainLayout;
