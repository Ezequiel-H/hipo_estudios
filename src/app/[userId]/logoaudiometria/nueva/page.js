'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import LogoAudiogram from '@/app/components/studies/audiogram/LogoAudiogram';

function AudiometriaNueva() {
  return (
    <Layout>
      <h1 className="title text-center section1">Nueva logoaudiometría</h1>
      <Identify />
      <LogoAudiogram />
    </Layout>
  );
}

export default AudiometriaNueva;
