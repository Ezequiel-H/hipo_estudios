'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import LogoAudiogramCompleto from '@/app/components/studies/audiogram/LogoAudiogramCompleto';
import { getUserById } from '@/app/db/user';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getStudyById } from '@/app/db/studies';

function VerLogoaudiometria({ params }) {
  const { userId, studyId } = params;
  const [user, setUser] = useState('');
  const [study, setStudy] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUser = await getUserById(userId);
        setUser(newUser);

        const newStudy = await getStudyById(studyId);
        setStudy(newStudy);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId, studyId]);
  return (
    <Layout>
      {user && <DatosDelPaciente user={user} />}
      <LogoAudiogramCompleto />
    </Layout>
  );
}

export default VerLogoaudiometria;
