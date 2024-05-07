'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';
import DatosDelPaciente from '../../../components/patient/DatosDelPaciente';

function AudiometriaNueva() {
  const persona = {
    nombre: 'Marta',
    apellido: 'Gomez',
    nacimiento: '15/04/2000',
    obraSocial: 'Swiss Medical Group',
    afiliado: '540004 400449 010 0010',
  };

  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nueva audiometría</h1>
      <DatosDelPaciente datos={persona} />
      <Audiogram />
    </Layout>
  );
}

export default AudiometriaNueva;
