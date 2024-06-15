'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';
import Timpanometria from '@/app/components/studies/timpanometria/Timpanometria';
import SelectPatient from '@/app/components/studies/SelectPatient';

function NuevaTimpanometria({ params }) {
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

  // function saveStudy() {
  //   // TODO: setCronReminder() ?
  //   // TODO DB: saveStudy();
  //   // TODO: guardar y luego crear uno nuevo y router o listo.
  // }
  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nueva Timpanometría</h1>
      {user && <DatosDelPaciente user={user} />}
      {selectPatient ? <SelectPatient /> : null}

      <Timpanometria />
    </Layout>
  );
}

export default NuevaTimpanometria;
