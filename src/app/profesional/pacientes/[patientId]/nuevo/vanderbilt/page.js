'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';

function VanderbiltNuevo({ params }) {
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
        <h1 className="title text-center section1 pb-0">Nuevo Vanderbilt</h1>
        <h2 className="text-center mt-3" style={{ fontSize: '20px' }}>Este formulario lo completan por separado: padres, ninos y docentes.</h2>
        {user && <DatosDelPaciente user={user} />}
        <section style={{ marginTop: '100px' }}>
          <a href="nuevo/docentes">Docentes</a>
          <a href="nuevo/padres">padres</a>
          <a href="nuevo/ninos">ninos</a>

        </section>
      </Container>
    </Layout>
  );
}

export default VanderbiltNuevo;
