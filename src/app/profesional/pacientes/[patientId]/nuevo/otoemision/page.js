'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Otoemision from '@/app/components/studies/otoemision/Otoemision';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';

function OtoemisionNueva({ params }) {
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
      <h1 className="title text-center section1">Nueva Otoemisión</h1>
      {user && <DatosDelPaciente user={user} />}
      <Otoemision />
    </Layout>
  );
}

export default OtoemisionNueva;
