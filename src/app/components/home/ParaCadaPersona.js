/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';
import Link from 'next/link';

const Area = styled.div`
    background-color: var(--slowBackground);
    color: var(--primaryColor);
`;

const Box = styled.div`
    max-width: 80%;
`;

function ParaCadaPersona() {
  return (
    <Area>
      <Container className="pb-5">
        <h3 className="title text-center pt-5 mb-5 pb-5" style={{ fontSize: '40px' }}>
          Pensado para cada persona
        </h3>
        <Row>
          <Col lg={3} md={6} xs={12}>
            <Box>
              <p className="title">Paciente</p>
              <p>Acceso muy facil y rapido para ver y enviar estudios audiologicos de toda la vida. Posibilidad de completar formularios online.</p>
              <Link href="#" className="btn btn-nofill">Ver más</Link>
            </Box>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <Box>
              <p className="title">Audióloga</p>
              <p>
                Creá los perfiles de tus pacientes, sus estudios y guardalos de por vida. Habilitalos a que completen formularios y accedé a estadísticas.
              </p>
              <Link href="#" className="btn btn-nofill">Registrarme</Link>
            </Box>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <Box>
              <p className="title">Rehabilitadora</p>
              <p>
                Encontrá el perfil de cada paciente, trabajá junto a la calibradora para ... ... .. . .. .
              </p>
              <Link href="#" className="btn btn-nofill">Registrarme</Link>
            </Box>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <Box>
              <p className="title">Otólogo</p>
              <p>
                Recibí los estudios en un mismo formato, mirá la progresión del caso y todo lo que tenés disponible para mejorar la consulta.
              </p>
              <Link href="#" className="btn btn-nofill">Ver mas</Link>
            </Box>
          </Col>
        </Row>
      </Container>
    </Area>
  );
}

export default ParaCadaPersona;
