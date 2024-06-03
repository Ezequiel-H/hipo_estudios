'use client';

import React from 'react';

import Slider from './components/home/Slider';
import Testimonials from './components/home/Testimonials';
import Layout from './components/general/Layout';

function Home() {
  return (
    <Layout>
      <Slider />
      <Testimonials />
    </Layout>
  );
}

export default Home;
