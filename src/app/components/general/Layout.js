import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [userType, setUserType] = useState('');
  function checkLogIn() {
    if (!localStorage.getItem('token')) {
      router.push('/iniciar-sesion');
      setLogin(false);
    } else {
      setLogin(true);
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
      <Navigation login={login} userType={userType} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
