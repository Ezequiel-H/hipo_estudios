'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Slider from './components/home/Slider';
import Testimonials from './components/home/Testimonials';
import Layout from './components/general/Layout';

function Home() {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  function checkLogIn() {
    if (!localStorage.getItem('token')) {
      if (!(window.location.href.includes('iniciar-sesion') || window.location.href.includes('registro'))) {
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
    <Layout>
      {
        userType === 'patient' ? (
          <>
            <h1>Soy un paciente, entonces te doy tus estudios y visitas</h1>
            <p>recomendaciones, videos destacados, encuentros, cosas de la fundacion.</p>
            <Slider />
            <Testimonials />
          </>
        ) : null
      }
      {
        userType === 'professional' ? (
          <>
            <h1>Soy un profesional, entonces te doy tus accesos directos y </h1>
            <p>abajo recomendaciones y tutoriales, guias, etc.</p>
            <Slider />
            <Testimonials />
          </>
        ) : null
      }
      {
        userType === '' ? (
          <>
            <h1>No tengo sesion, entonces no se quien soy </h1>
            <p>
              Pero podemos preguntar con un modal... ya es info por
              <br />
              si la persona vuelve a entrar y queremos hablarle mejor (vender)
              <br />
              Puede servir, podria ser mas comercial e informativo. el otro mas productivo.
            </p>
            <Slider />
            <Testimonials />
          </>
        ) : null
      }
    </Layout>
  );
}

export default Home;
