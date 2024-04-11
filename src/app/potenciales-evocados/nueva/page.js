'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';

function PotencialesEvocados() {
  return (
    <Layout>
      <h1 className="title text-center section1">Nuevo Potencial Evocado</h1>
      <Identify />
      <PotencialEvocado />
    </Layout>
  );
}

export default PotencialesEvocados;
