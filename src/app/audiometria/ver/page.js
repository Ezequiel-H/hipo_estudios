'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import AudiogramCompletoEjemplo from '@/app/components/studies/audiogram/AudiogramCompletoEjemplo';

function VerAudiometria() {
  return (
    <Layout>
      {/* <h1 className="title text-center">Audiometria de Lucas Adlerstein</h1> */}
      <div className="pt-4 text-center" style={{ backgroundColor: 'white' }}>
        <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p>
        <p className="mb-0">
          <strong>Gomez, Jorge </strong>
          <br />
          25/02/1976 (55 años)
        </p>
      </div>
      <AudiogramCompletoEjemplo />
    </Layout>
  );
}

export default VerAudiometria;
