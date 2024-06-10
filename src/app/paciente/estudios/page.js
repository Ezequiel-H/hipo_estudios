// TODO: agregar pantalla para usuario ver todos sus estudios y cuestionarios
// (estos deberian ser un estudio mas, no deberian tener una carpeta separada,
// solo ser otro componente)

'use client';

import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';

function PeachNuevo() {
  return (
    <Layout>
      <Container>
        <Button>estudios de un paciente</Button>
      </Container>
    </Layout>
  );
}

export default PeachNuevo;
