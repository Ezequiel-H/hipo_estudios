'use client';

import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container, Form, Button,
} from 'react-bootstrap';
import Image from 'next/image';
import Slider from './components/home/Slider';
import Banner2 from './components/home/Banner2';
import ParaCadaPersona from './components/home/ParaCadaPersona';
import Estudios from './components/home/Estudios';
import Testimonials from './components/home/Testimonials';
import Layout from './components/general/Layout';

function Home() {
  return (
    <Layout>
      <Slider />
      <Banner2 />
      <ParaCadaPersona />
      <Estudios />
      <Testimonials />
    </Layout>
  );
}

export default Home;
