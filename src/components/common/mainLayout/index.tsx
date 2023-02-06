import React, { FC } from 'react';
import './layout.scss'
import Navbar from '../navigation';
import Footer from '../footer';
import { LayoutProps } from '../../../interfaceTypes';


const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className={'layout'}>
      <Navbar />

      <div className={'main'}>
        <div className={'mainWrapper'}>
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;