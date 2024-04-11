'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import Impedanciometria from '@/app/components/studies/impedanciometria/Impedanciometria';

function ImpedanciometriaNueva() {
  return (
    <Layout>
      <h1 className="title text-center section1">Nueva impedanciometria</h1>
      <Identify />
      <Impedanciometria />
    </Layout>
  );
}

export default ImpedanciometriaNueva;
