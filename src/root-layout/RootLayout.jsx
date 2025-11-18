import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared-page/footer/Footer';
import Navbar from '../pages/shared-page/nav-bar/Navbar';

const RootLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;