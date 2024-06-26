'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import LogoAudiogram from '@/app/components/studies/audiogram/LogoAudiogram';
import { getPatientById } from '@/app/db/user';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import SelectPatient from '@/app/components/studies/SelectPatient';

function LogoAudiometriaNueva({ params }) {
  const { patientId } = params;
  const [user, setUser] = useState('');
  const [selectPatient, setSelectPatient] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('seleccionar')) {
      setSelectPatient(true);
    } else {
      const fetchData = async () => {
        const newUser = await getPatientById(patientId);
        setUser(newUser);
      };
      fetchData();
    }
  }, [patientId]);

  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nueva logoaudiometría</h1>
      {user && <DatosDelPaciente user={user} /> }
      {selectPatient ? <SelectPatient /> : null}
      <LogoAudiogram patientId={patientId} />
    </Layout>
  );
}

export default LogoAudiometriaNueva;
