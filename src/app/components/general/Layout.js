import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  function checkLogIn() {
    if (!localStorage.getItem('token')) {
      if (!(window.location.href.includes('iniciar-sesion')
        || window.location.href.includes('registro')
        || window.location.href.includes('recordar')
        || window.location.pathname === '/')) {
        router.push('/iniciar-sesion');
      }
    } else {
      setUserType(localStorage.getItem('userType'));
    }
  }
  useEffect(() => {
    checkLogIn();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <Navigation userType={userType} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
