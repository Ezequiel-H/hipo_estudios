/* eslint-disable max-len */
import React from 'react';
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
    a {
        margin-bottom: 10px;
        font-size: 18px;
        transition: all .3s ease;
    }
    a:hover {
        font-weight: bold;
    }
    h5 {
        font-size: 30px;
        margin-bottom: 25px;
    }
`;

const TertiaryBox = styled(Box)`
    background-color: var(--tertiaryColor);
    a, h5, p {
        color: black!important;
    }
`;
const QuartyBox = styled(Box)`
    background-color: var(--quartyColor);
    a, h5, p {
        color: black!important;
    }
`;
const SlowYellowBox = styled(Box)`
    background-color: var(--slowYellow);
    a, h5, p {
        color: black!important;
    }
`;

function PatientFirstBanner() {
  return (
    <Container className="my-10">
      <h1 className="mb-4">Te damos la bienvenida a Decibele,</h1>
      <Row>
        <TertiaryBox xs={12} sm={12} md={3} lg={3}>
          <h5>Mi perfil</h5>
          <Link href="/">
            🌞 Mis datos personales
          </Link>
          <Link href="/">
            🫂 Compartir estudios
          </Link>
        </TertiaryBox>

        <QuartyBox xs={12} sm={12} md={3} lg={3}>
          <h5>Mis estudios</h5>
          <Link href="/paciente/perfil#estudios">
            🦻 Ver mis últimos estudios
          </Link>
          <Link href="/paciente/perfil">
            🧿 Ver últimas atenciones
          </Link>
        </QuartyBox>
        <SlowYellowBox xs={12} sm={12} md={4} lg={4}>
          <h5>Formularios</h5>
          <Link href="/paciente/perfil#estudios">
            🦻 Ver mis últimos formularios
          </Link>
          <Link href="/paciente/perfil">
            🧿 Ver últimas atenciones
          </Link>
        </SlowYellowBox>

      </Row>

    </Container>

  );
}

export default PatientFirstBanner;
