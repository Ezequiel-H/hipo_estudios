'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Impedanciometria from '@/app/components/studies/impedanciometria/Impedanciometria';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getPatientById } from '@/app/db/user';
import SelectPatient from '@/app/components/studies/SelectPatient';

function ImpedanciometriaNueva({ params }) {
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
      <h1 className="title text-center section1 pb-0">Nueva impedanciometria</h1>
      {user && <DatosDelPaciente user={user} />}
      {selectPatient ? <SelectPatient /> : null}

      <Impedanciometria />
    </Layout>
  );
}

export default ImpedanciometriaNueva;
