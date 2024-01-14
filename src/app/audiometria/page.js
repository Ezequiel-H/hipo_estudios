/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */

'use client';

import React, { useReducer, useState } from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';
import Image from 'next/image';

const Template = styled.div`
  background-color: white;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Audiograma = styled.div`
  max-width: 850px;
  width: auto;
  margin-left:auto;
  margin-right:auto;
  padding-top: 30px;

`;

const Frecuencia = styled.div`
  margin: 0;
  background-color: transparent;
  padding: 0!important;
  border-radius: 0%;
  color: black;
  margin: 0;
  padding: 0;
  text-align: right;
  min-width: 43.7px;
  margin-bottom: 0!important;

  p {
    position: relative;
    margin-bottom: 0;
  }
  
`;

const SeleccionEstudio = styled.button`
  background-color:transparent;
  border: none;
  color: black;
  display: grid;
  max-width: 3
  img {
    margin:auto;
  }
`;

const Casillero = styled.div`
  border-right: 0.5px solid black;
  border-left: 0.5px solid black;
  margin: 0;
  background-color: transparent;
  padding: 0!important;
  border-radius: 0%;

  p {
    color: black;
    margin: 0;
    padding: 0;

    position: relative;
    bottom: -12px; /* Mover 5px hacia arriba */
    right: 58px; /* Mover 5px hacia la izquierda */
    text-align: right;
  }

  button {
    background-color: transparent;
    padding:0;
    border: 0;
    font-size:15px;
    position: relative;
    bottom: -11px; /* Mover 5px hacia arriba */
    right: 9px; /* Mover 5px hacia la izquierda */
    transition: all .5s ease;
    transform: scale(1.7);
  }
`;

const a = ` &:hover {
  color: white;
  img {
    visibility: visible;
  }
}`;

const STUDIES_NAMES = {
  D_AEREA: 'dAerea',
  D_OSEA: 'dOsea',
  I_AEREA: 'iAerea',
  I_OSEA: 'iOsea',
};

const STUDIES_IMAGES = {
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/osea_derecha.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/aerea_izquierda.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/osea_izquierda.png',
};

export default function Audiometria() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [evaluando, setEvaluando] = useState('iAerea');
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.D_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.D_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });

  // const getResultFromRow = (row) => row * 5 - 10;

  // const getFrequencyFromCol = (col) => {
  //   const frequencies = [125, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
  //   return frequencies[col - 1];
  // };

  const addValueToResults = (row, col, estudio) => {
    const newStudy = STUDIES[estudio];
    newStudy[col] = newStudy[col] === row ? '' : row;
    setStudies({ ...STUDIES, [estudio]: newStudy });
    forceUpdate();
  };

  function AudiometriaComp() {
    const rows = [];

    for (let row = 0; row < 29; row++) {
      const cols = [];
      for (let col = 0; col < 12; col++) {
        cols.push(
          <Casillero
            id={`${row}-${col}`}
            key={`${row}-${col}`}
            className={`aud-${col === 1 || col === 2 ? '2' : '1'} ${row % 2 === 0 ? 'border-bottom-active' : null}`}
          >
            {col === 0
              ? (row % 2 === 0 ? (<p>{row * 5 - 10}</p>) : null)
              : (
                <button onClick={() => addValueToResults(row, col, evaluando)}>
                  <Image
                    src={STUDIES_IMAGES[evaluando]}
                    alt="Circulo rojo audiometria"
                    width={18}
                    height={18}
                    className={STUDIES[evaluando][col] === row ? 'opacity-100' : 'opacity-0'}
                  />
                </button>
              )}
          </Casillero>,
        );
      }
      rows.push(<Row key={`${row}`}>{cols}</Row>);
    }
    return rows;
  }

  return (
    <main>
      <Template>
        <Container>
          <Row>
            <Col sm={2} lg={2}>
              <SeleccionEstudio onClick={() => setEvaluando('iAerea')}>
                <Image src="/img/estudios/markers/aerea_izquierda.png" alt="Via aérea izquierda" width={55} height={55} className={evaluando === 'iAerea' ? 'opacity-100' : 'opacity-25'} />
                Aérea izquierda
              </SeleccionEstudio>
            </Col>
            <Col sm={2} lg={2}>
              <SeleccionEstudio onClick={() => setEvaluando('iOsea')}>
                <Image src="/img/estudios/markers/osea_izquierda.png" alt="Via ósea izquierda" width={55} height={55} className={evaluando === 'iOsea' ? 'opacity-100' : 'opacity-25'} />
                Ósea izquierda
              </SeleccionEstudio>
            </Col>
            <Col sm={2} lg={2}>
              <SeleccionEstudio onClick={() => setEvaluando('dAerea')}>
                <Image src="/img/estudios/markers/aerea_derecha.png" alt="Via aérea derecha" width={55} height={55} className={evaluando === 'dAerea' ? 'opacity-100' : 'opacity-25'} />
                Aérea derecha
              </SeleccionEstudio>
            </Col>
            <Col sm={2} lg={2}>
              <SeleccionEstudio onClick={() => setEvaluando('dOsea')}>
                <Image src="/img/estudios/markers/osea_derecha.png" alt="Via ósea derecha" width={55} height={55} className={evaluando === 'dOsea' ? 'opacity-100' : 'opacity-25'} />
                Ósea derecha
              </SeleccionEstudio>
            </Col>
          </Row>
          <Audiograma>
            <Row>
              <Frecuencia className="aud-1 freq-up">
                <p>125</p>
              </Frecuencia>
              <Frecuencia className="aud-2 freq-up">
                <p>250</p>
              </Frecuencia>
              <Frecuencia className="aud-2 freq-up">
                <p>500</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-down">
                <p>750</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-up">
                <p>1.000</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-down">
                <p>1.500</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-up">
                <p>2.000</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-down">
                <p>3.000</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-up">
                <p>4.000</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-down">
                <p>6.000</p>
              </Frecuencia>
              <Frecuencia className="aud-1 freq-up">
                <p>8.000</p>
              </Frecuencia>
            </Row>
            <Row>
              {AudiometriaComp()}
            </Row>
          </Audiograma>
        </Container>
      </Template>
    </main>
  );
}
