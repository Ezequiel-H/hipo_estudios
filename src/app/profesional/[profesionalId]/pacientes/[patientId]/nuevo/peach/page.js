'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import PeachForm from '@/app/components/forms/PeachForm';
import { getPatientById } from '@/app/db/user';

function PeachNuevo({ params }) {
  const { userId } = params;
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const newUser = await getPatientById(userId);
      setUser(newUser);
    };

    fetchData();
  }, [userId]);

  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1 pb-0">Nuevo PEACH</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Escala de Evaluación de los Padres sobre el Desempeño Auditivo/Oral Infantil</h2>
        {user && <DatosDelPaciente user={user} />}
        <PeachForm />
        <section style={{ marginTop: '100px' }}>
          <h2 className="text-center mt-3" style={{ fontSize: '35px' }}>Información sobre el PEACH</h2>
          <h3 className="text-center mt-3" style={{ fontSize: '20px' }}>¿Qué es el PEACH?</h3>

        </section>
      </Container>
    </Layout>
  );
}

export default PeachNuevo;
