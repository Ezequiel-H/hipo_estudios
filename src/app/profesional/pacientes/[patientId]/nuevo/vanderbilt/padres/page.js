'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import { getPatientById } from '@/app/db/user';
import VanderbiltParentsForm from '@/app/components/forms/VanderbiltParentsForm';
import SelectPatient from '@/app/components/studies/SelectPatient';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';

function VanderbiltPadres({ params }) {
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
        <h1 className="title text-center section1 pb-0">VANDERBILT PARA PADRES</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Esta escala está concebida para evaluar la fatiga relacionada con la audición en niños/as.</h2>
        {user && <DatosDelPaciente user={user} />}
        {selectPatient ? <SelectPatient /> : null}

        <VanderbiltParentsForm />

      </Container>
    </Layout>
  );
}

export default VanderbiltPadres;
