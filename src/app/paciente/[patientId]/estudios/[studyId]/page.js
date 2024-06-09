// TODO: una pagina que agarra el study id, lo obtiene y
//  dependiendo del type, muestra el componente correcto

'use client';

import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';

function PeachNuevo() {
  return (
    <Layout>
      <Container>
        <Button>un estudio especifico</Button>
      </Container>
    </Layout>
  );
}

export default PeachNuevo;
