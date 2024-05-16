'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '../../../../../components/patient/DatosDelPaciente';
import { getUserById } from '@/app/db/user';
import VanderbiltParentsForm from '@/app/components/forms/VanderbiltParentsForm';

function VanderbiltPadres({ params }) {
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
        <h1 className="title text-center section1 pb-0">VANDERBILT PARA PADRES</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Esta escala está concebida para evaluar la fatiga relacionada con la audición en niños/as.</h2>
        {user && <DatosDelPaciente user={user} />}
        <VanderbiltParentsForm />

      </Container>
    </Layout>
  );
}

export default VanderbiltPadres;
