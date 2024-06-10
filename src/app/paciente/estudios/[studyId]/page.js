// TODO: una pagina que agarra el study id, lo obtiene y
//  dependiendo del type, muestra el componente correcto

'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';

const STUDIES = {
  AUDIOMETRIA: (params) => <Audiogram params={params} />,
  // LOGOAUDIOMETRIA: <Logo></>,
  // AUDIOMETRIA: <Audiometria></>,
  // AUDIOMETRIA: <Audiometria></>,
  // AUDIOMETRIA: <Audiometria></>,
};
console.log(STUDIES);

function PeachNuevo() {
  return (
    <Layout>
      <Container>
        {/* {STUDIES[type](results)} */}
      </Container>
    </Layout>
  );
}

export default PeachNuevo;
