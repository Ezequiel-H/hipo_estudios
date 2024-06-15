'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import LogoAudiogram from '@/app/components/studies/audiogram/LogoAudiogram';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
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

  // function saveStudy() {
  //   // TODO: setCronReminder() ?
  //   // TODO DB: saveStudy();
  //   // TODO: guardar y luego crear uno nuevo y router o listo.
  // }

  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nueva logoaudiometría</h1>
      {user && <DatosDelPaciente user={user} />}
      <LogoAudiogram />
    </Layout>
  );
}

export default AudiometriaNueva;
