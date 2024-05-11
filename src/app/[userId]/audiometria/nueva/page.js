'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';
import { getUserById } from '@/app/db/user';

function AudiometriaNueva({ params }) {
  const { userId } = params;
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      const newUser = await getUserById(userId);
      setUser(newUser);
    };
    getUser();
  }, []);

  return (
    <Layout>
      <h1 className="title text-center section1">Nueva audiometría</h1>
      {!user && <Identify />}
      {user && <Audiogram user={user} />}
    </Layout>
  );
}

export default AudiometriaNueva;
