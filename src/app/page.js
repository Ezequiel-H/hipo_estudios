'use client';

import React, { useEffect, useState } from 'react';
import Slider from './components/home/Slider';
import Testimonials from './components/home/Testimonials';
import Layout from './components/general/Layout';
import ProfessionalFirstSlide from './components/home/ProfessionalFirstSlide';
import PatientFirstBanner from './components/home/PatientFirstBanner';
import NoUserFirstSlide from './components/home/NoUserFirstSlide';

function Home() {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    setUserType(localStorage.getItem('userType') || '');
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      {
        userType === 'patient' ? (
          <>
            <PatientFirstBanner />
            {/* <h1>Soy un paciente, entonces te doy tus estudios y visitas</h1> */}
            {/* <p>recomendaciones, videos destacados, encuentros, cosas de la fundacion.</p> */}
            <Slider />
            <Testimonials />
          </>
        ) : null
      }
      {
        userType === 'professional' ? (
          <>
            <ProfessionalFirstSlide />
            <Slider />
            <Testimonials />
          </>
        ) : null
      }
      {
        userType === '' ? (
          <>
            <NoUserFirstSlide />
            <Slider />
            <Testimonials />
          </>
        ) : null
      }
    </Layout>
  );
}

export default Home;
