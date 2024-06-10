'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';
import DatosDelPaciente from '../../../../components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';
import SelectPatient from '@/app/components/studies/SelectPatient';

function AudiometriaNueva({ params }) {
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
      <h1 className="title text-center section1 pb-0">Nueva audiometría</h1>
      {user && <DatosDelPaciente user={user} />}
      {selectPatient ? <SelectPatient /> : null}
      <Audiogram userId={userId} />
    </Layout>
  );
}

export default AudiometriaNueva;
