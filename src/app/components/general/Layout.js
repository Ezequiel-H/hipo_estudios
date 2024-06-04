import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  function checkLogIn() {
    if (!localStorage.getItem('token')) {
      router.push('/iniciar-sesion');
      setLogin(false);
    } else {
      setLogin(true);
    }
  }
  useEffect(() => {
    checkLogIn();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <Navigation login={login} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
