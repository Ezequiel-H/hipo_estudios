import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';
import Link from 'next/link';

const Area = styled.div`
    background-image: url('img/web/home-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
`;

function Slider() {
  return (
    <Area>
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="centered-div-vertical">
              <h1 className="title" style={{ fontSize: '55px' }}>
                Estudios audiologicos,
                <br />
                a donde vayas.
              </h1>
              <p style={{ fontSize: '18px' }}>
                Todo en un solo lugar, sin importar de cuando sea o donde te lo hayas hecho.
                <br />
                {' '}
                Tenelo al alcance de tu mano, siempre.
              </p>
              <Link href="/" className="btn btn-secondary">Soy audiologo</Link>
              <Link href="/" className="btn btn-nofill mx-3">Ver estudios</Link>
            </div>
          </Col>
          <Col lg={5} md={5} xs={12}>
            <div className="centered-div-vertical">
              <img
                src="/img/web/kid-headphones.jpg"
                alt="Niño con auriculares"
                width="500px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Area>
  );
}

export default Slider;
