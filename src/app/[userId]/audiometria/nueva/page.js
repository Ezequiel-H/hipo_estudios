'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';

function AudiometriaNueva() {
  return (
    <Layout>
      <h1 className="title text-center section1">Nueva audiometría</h1>
      <Identify />
      <Audiogram />
    </Layout>
  );
}

export default AudiometriaNueva;
