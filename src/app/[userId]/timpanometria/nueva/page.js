'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';
import DatosDelPaciente from '../../../components/patient/DatosDelPaciente';

function Timpanometria() {
  const persona = {
    nombre: 'Marta',
    apellido: 'Gomez',
    nacimiento: '15/04/2000',
    obraSocial: 'Swiss Medical Group',
    afiliado: '540004 400449 010 0010',
  };

  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nueva Timpanometría</h1>
      <DatosDelPaciente datos={persona} />
      <PotencialEvocado />
    </Layout>
  );
}

export default Timpanometria;
