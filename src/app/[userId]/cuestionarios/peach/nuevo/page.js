'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import PeachForm from '@/app/components/forms/PeachForm';
import { getUserById } from '@/app/db/user';
import SelectPatient from '@/app/components/studies/SelectPatient';

function PeachNuevo({ params }) {
  const { userId } = params;
  const [user, setUser] = useState('');
  const [selectPatient, setSelectPatient] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const newUser = await getUserById(userId);
      setUser(newUser);
    };
    if (window.location.href.includes('seleccionar')) {
      setSelectPatient(true);
    }
    fetchData();
  }, [userId]);

  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1 pb-0">Nuevo PEACH</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Escala de Evaluación de los Padres sobre el Desempeño Auditivo/Oral Infantil</h2>
        {user && <DatosDelPaciente user={user} />}
        {selectPatient ? <SelectPatient /> : null}

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
