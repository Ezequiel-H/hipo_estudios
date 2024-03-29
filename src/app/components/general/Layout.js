import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
