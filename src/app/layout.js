import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './globals.css';
import React from 'react';
import PropTypes from 'prop-types';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Decibele: historia clínica audiológica',
  description: 'tus estudios y formularios en internet.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
