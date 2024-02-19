'use client';

import React from 'react';
import Layout from '@/app/components/general/Layout';
import Identify from '@/app/components/patient/Identify';
import {Container} from 'react-bootstrap';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';

const AudiometriaNueva = () => {
    return (
        <Layout>
            <Identify />
            <Audiogram />
        </Layout>
    );
}
 
export default AudiometriaNueva;