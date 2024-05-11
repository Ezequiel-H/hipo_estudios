'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import LogoAudiogram from '@/app/components/studies/audiogram/LogoAudiogram';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';

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
      <h1 className="title text-center section1 pb-0">Nueva logoaudiometría</h1>
      {/* <Identify /> */}
      <DatosDelPaciente datos={persona} />

      <LogoAudiogram />
    </Layout>
  );
}

export default AudiometriaNueva;
