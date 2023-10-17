import React from 'react';
import MainMenu from '../components/menu/main';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <div
      className={`BB_wrapper flex overflow-hidden flex-col items-center`}>
      <MainMenu />
      {children}
      
    </div>
  );
};

export default MainLayout;
