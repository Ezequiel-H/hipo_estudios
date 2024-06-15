// TODO: agregar pantalla para usuario ver todos sus estudios y cuestionarios
// (estos deberian ser un estudio mas, no deberian tener una carpeta separada,
// solo ser otro componente)

'use client';

import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';

function Estudios() {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Container>
        <h1>Estudios</h1>

        {
        userType === 'patient' ? (
          <>
            <h4>Tus estudios</h4>
            <h4>Que signfica cada estudio</h4>
            <h4>Profesionales que hacen cada estudios</h4>
          </>
        ) : null
      }
        {
        userType === 'professional' ? (
          <>
            <h1>Soy un profesional, haces clic para crear</h1>
            <p>abajo los ultimos hechos y abajo algo mas?.</p>
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
              Mostrar que es el estudio y abajo profesionales que lo hacen
            </p>
            <Slider />
            <Testimonials />
          </>
        ) : null
      }

      </Container>
    </Layout>
  );
}

export default Estudios;
