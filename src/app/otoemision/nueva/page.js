'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import Otoemision from '@/app/components/studies/otoemision/Otoemision';

function OtoemisionNueva() {
  return (
    <Layout>
      <h1 className="title text-center section1">Nueva Otoemisión</h1>
      <Identify />
      <Otoemision />
    </Layout>
  );
}

export default OtoemisionNueva;
