'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import { getUserById } from '@/app/db/user';
import SpSSQ12Form from '@/app/components/forms/SpSSQ12Form';

function VanderbiltDocentes({ params }) {
  const { userId } = params;
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const newUser = await getUserById(userId);
      setUser(newUser);
    };

    fetchData();
  }, [userId]);

  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1 pb-0">Sp-SSQ12</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Cuestionario sobre el Habla, Audición Espacial y Cualidades Auditivas.</h2>
        {user && <DatosDelPaciente user={user} />}
        <SpSSQ12Form />

      </Container>
    </Layout>
  );
}

export default VanderbiltDocentes;
