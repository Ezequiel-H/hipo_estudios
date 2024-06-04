'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';

function AudiometriaNueva({ params }) {
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
      <h1 className="title text-center section1 pb-0">Nueva audiometría</h1>
      {user && <DatosDelPaciente user={user} /> }
      <Audiogram userId={userId} />
    </Layout>
  );
}

export default AudiometriaNueva;
