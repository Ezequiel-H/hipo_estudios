'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '../../../../../components/patient/DatosDelPaciente';
import { getUserById } from '@/app/db/user';
import VanderbiltForm from '@/app/components/forms/VanderbiltKidsForm';
import VanderbiltTeachersForm from '@/app/components/forms/VanderbiltTeachersForm';

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
        <h1 className="title text-center section1 pb-0">VANDERBILT PARA DOCENTES</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Esta escala está concebida para evaluar la fatiga relacionada con la audición en niños/as.</h2>
        {user && <DatosDelPaciente user={user} />}
        <VanderbiltTeachersForm />

      </Container>
    </Layout>
  );
}

export default VanderbiltDocentes;
