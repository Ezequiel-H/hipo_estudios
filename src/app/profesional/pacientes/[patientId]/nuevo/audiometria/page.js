'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';
import { getPatientById } from '@/app/db/user';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import SelectPatient from '@/app/components/studies/SelectPatient';

function AudiometriaNueva({ params }) {
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

  // function saveStudy() {
  //   // TODO: setCronReminder() ?
  //   // TODO DB: saveStudy();
  //   // TODO: guardar y luego crear uno nuevo y router o listo.
  // }

  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nueva audiometría</h1>
      {user && <DatosDelPaciente user={user} /> }
      {selectPatient ? <SelectPatient /> : null}
      <Audiogram patientId={patientId} />

    </Layout>
  );
}

export default AudiometriaNueva;
