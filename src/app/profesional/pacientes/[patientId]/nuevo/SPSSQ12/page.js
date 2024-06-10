'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';
import SpSSQ12Form from '@/app/components/forms/SpSSQ12Form';
import SelectPatient from '@/app/components/studies/SelectPatient';

function VanderbiltDocentes({ params }) {
  const { userId } = params;
  const [user, setUser] = useState('');
  const [selectPatient, setSelectPatient] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const newUser = await getPatientById(userId);
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
        <h1 className="title text-center section1 pb-0">Sp-SSQ12</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Cuestionario sobre el Habla, Audición Espacial y Cualidades Auditivas.</h2>
        {user && <DatosDelPaciente user={user} />}
        {selectPatient ? <SelectPatient /> : null}
        <SpSSQ12Form />

      </Container>
    </Layout>
  );
}

export default VanderbiltDocentes;
