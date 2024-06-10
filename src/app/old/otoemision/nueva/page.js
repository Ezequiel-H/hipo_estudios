'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Otoemision from '@/app/components/studies/otoemision/Otoemision';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import { getUserById } from '@/app/db/user';
import SelectPatient from '@/app/components/studies/SelectPatient';

function OtoemisionNueva({ params }) {
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
      <h1 className="title text-center section1">Nueva Otoemisión</h1>
      {user && <DatosDelPaciente user={user} />}
      {selectPatient ? <SelectPatient /> : null}

      <Otoemision />
    </Layout>
  );
}

export default OtoemisionNueva;
