/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';
import Link from 'next/link';

const Box = styled(Col)`
    padding: 40px!important;
    border-radius: 35px;
    margin: 10px;
    display: grid;
    a,button {
        margin-bottom: 10px;
        font-size: 18px;
        transition: all .3s ease;
        background-color:transparent;
        border:none;
        text-align:left;
    }
    a:hover, button:hover {
        font-weight: bold;
    }
    h5 {
        font-size: 30px;
        margin-bottom: 25px;
    }
`;

const TertiaryBox = styled(Box)`
    background-color: var(--tertiaryColor);
    a, h5, p, button {
        color: black!important;
    }
`;
const QuartyBox = styled(Box)`
    background-color: var(--quartyColor);
    a, h5, p, button {
        color: black!important;
    }
`;
const SlowYellowBox = styled(Box)`
    background-color: var(--slowYellow);
    a, h5, p, button {
        color: black!important;
    }
`;

function ProfessionalFirstSlide() {
  const [mode, setMode] = useState('');
  return (
    <Container className="my-10">
      <h1 className="mb-4">Te damos la bienvenida a Decibele,</h1>
      <Row>
        <TertiaryBox xs={12} sm={12} md={3} lg={3}>
          <h5>Pacientes</h5>
          <Link href="/profesional/pacientes#nuevo">
            🌊 Paciente nuevo
          </Link>
          <Link href="profesional/pacientes">
            🔍 Buscar paciente
          </Link>
          <Link href="/">
            📆 Nueva visita
          </Link>
        </TertiaryBox>
        <QuartyBox xs={12} sm={12} md={4} lg={4}>
          <h5>Estudios</h5>

          {
            mode === 'newStudy' ? (
              <>
                <Link href="/profesional/pacientes/seleccionar/nuevo/audiometria">➕ Audiometría</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/logoaudiometria">➕ Logoaudiometría</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/timpanometria">➕ Timpanometría</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/impedanciometria">➕ Impedanciometría</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/otoemision">➕ Otoemisión</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/potenciales-evocados">➕ Potenciales evocados</Link>
              </>
            ) : (
              <>
                <button type="submit" onClick={() => setMode('newStudy')}>
                  🦻 Estudio nuevo
                </button>
                <Link href="/profesional/pacientes?focus=form">
                  🔍 Buscar estudio
                </Link>
                <Link href="/profesional/pacientes">
                  🧿 Ver últimas atenciones
                </Link>
              </>
            )
          }
        </QuartyBox>
        <SlowYellowBox xs={12} sm={12} md={3} lg={3}>
          <h5>Formularios</h5>
          {
            mode === 'newForm' ? (
              <>
                <Link href="/profesional/pacientes/seleccionar/nuevo/peach">➕ PEACH</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/SPSSQ12">➕ SP-SSQ12</Link>
                <Link href="/profesional/pacientes/seleccionar/nuevo/vanderbilt">➕ Vanderbilt</Link>
              </>
            ) : (
              <>
                <button type="submit" onClick={() => setMode('newForm')}>
                  🦻 Formulario nuevo
                </button>
                <Link href="/profesional/pacientes?focus=form">
                  🔍 Buscar formulario
                </Link>
                <Link href="/profesional/pacientes">
                  🧿 Ver últimas atenciones
                </Link>
              </>
            )
          }
        </SlowYellowBox>

      </Row>

    </Container>

  );
}

export default ProfessionalFirstSlide;
