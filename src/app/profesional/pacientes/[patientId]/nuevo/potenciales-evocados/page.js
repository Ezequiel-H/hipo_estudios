'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';
import SelectPatient from '@/app/components/studies/SelectPatient';

function PotencialesEvocados({ params }) {
  const { patientId } = params;
  const [user, setUser] = useState('');
  const [selectPatient, setSelectPatient] = useState(false);
  const fetchData = async () => {
    const newUser = await getPatientById(patientId);
    setUser(newUser);
  };
  useEffect(() => {
    if (window.location.href.includes('seleccionar')) {
      setSelectPatient(true);
    } else {
      fetchData();
    }
  }, [patientId]);

  return (
    <Layout>
      <h1 className="title text-center section1 pb-0">Nuevo Potencial Evocado</h1>
      {user && <DatosDelPaciente user={user} /> }
      {selectPatient ? <SelectPatient /> : null}

      <PotencialEvocado patientId={patientId} />
    </Layout>
  );
}

export default PotencialesEvocados;
