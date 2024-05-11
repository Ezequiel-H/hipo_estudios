'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import PeachForm from '@/app/components/forms/PeachForm';

function PeachNuevo() {
  const persona = {
    nombre: 'Marta',
    apellido: 'Gomez',
    nacimiento: '15/04/2000',
    obraSocial: 'Swiss Medical Group',
    afiliado: '540004 400449 010 0010',
  };

  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1 pb-0">Nuevo PEACH</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Escala de Evaluación de los Padres sobre el Desempeño Auditivo/Oral Infantil</h2>
        <DatosDelPaciente datos={persona} />
        <PeachForm />
      </Container>
    </Layout>
  );
}

export default PeachNuevo;
