'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Otoemision from '@/app/components/studies/otoemision/Otoemision';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';

function OtoemisionNueva() {
  const persona = {
    nombre: 'Marta',
    apellido: 'Gomez',
    nacimiento: '15/04/2000',
    obraSocial: 'Swiss Medical Group',
    afiliado: '540004 400449 010 0010',
  };
  return (
    <Layout>
      <h1 className="title text-center section1">Nueva Otoemisión</h1>
      <DatosDelPaciente datos={persona} />
      <Otoemision />
    </Layout>
  );
}

export default OtoemisionNueva;
