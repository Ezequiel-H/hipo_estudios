'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import { getUserById } from '@/app/db/user';

function PotencialesEvocados({ params }) {
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
      <h1 className="title text-center section1 pb-0">Nuevo Potencial Evocado</h1>
      {user && <DatosDelPaciente user={user} />}
      <PotencialEvocado />
    </Layout>
  );
}

export default PotencialesEvocados;
