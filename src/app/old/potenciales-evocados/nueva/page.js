'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';
import { getUserById } from '@/app/db/user';
import SelectPatient from '@/app/components/studies/SelectPatient';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';

function PotencialesEvocados({ params }) {
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
      <h1 className="title text-center section1 pb-0">Nuevo Potencial Evocado</h1>
      {user && <DatosDelPaciente user={user} />}
      {selectPatient ? <SelectPatient /> : null}
      <PotencialEvocado />
    </Layout>
  );
}

export default PotencialesEvocados;
