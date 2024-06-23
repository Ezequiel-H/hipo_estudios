/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */

'use client';

import React, { useReducer, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container, Form,
} from 'react-bootstrap';
import Image from 'next/image';
import FinishStudyBtn from '../FinishStudyBtn';

const Template = styled.div`
  background-color: white;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Audiograma = styled.div`
  position: relative;
  width: 581px;
`;

const Frecuencia = styled.div`
  margin: 0;
  background-color: transparent;
  padding: 0!important;
  border-radius: 0%;
  color: black;
  padding: 0;
  text-align: right;
  min-width: 43.7px;
  margin-bottom: 0!important;

  p {
    position: relative;
    margin-bottom: 0;
  }
  
`;

const TextInputDiv = styled.div`
  margin: 0 !important;
  padding: 0!important;
  background-color: transparent;
  border-radius: 0%;
  color: white;
  display: flex;
  justify-content: flex-end;
  text-align: right;
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
  margin: 0 auto;
`;

const Casillero = styled.div`
  margin: 0;
  background-color: transparent;
  padding: 0!important;
  border-radius: 0%;
  height:21px;

  p {
    color: black;
    margin: 0;
    padding: 0;
    position: relative;
    bottom: -6px; 
    right: 58px; 
    text-align: right;
  }

  button {
    background-color: transparent;
    padding:0;
    border: 0;
    font-size:10px;
    position: relative;
    bottom: -5px; 
    right: 11px; 
    transition: all .5s ease;
    transform: scale(1.5);
  }
`;

const STUDIES_NAMES = {
  D_AEREA: 'dAerea',
  I_AEREA: 'iAerea',
};

const STUDIES_IMAGES = {
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/aerea_izquierda.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/osea_derecha.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/osea_izquierda.png',
};

const STUDIES_FULL_NAMES = {
  [STUDIES_NAMES.D_AEREA]: 'Aérea derecha',
  [STUDIES_NAMES.I_AEREA]: 'Aérea izquierda',
  [STUDIES_NAMES.D_OSEA]: 'Ósea derecha',
  [STUDIES_NAMES.I_OSEA]: 'Ósea izquierda',
};

const STUDIES_SIDE = {
  [STUDIES_NAMES.D_AEREA]: 'derecha',
  [STUDIES_NAMES.I_AEREA]: 'izquierda',
  [STUDIES_NAMES.D_OSEA]: 'derecha',
  [STUDIES_NAMES.I_OSEA]: 'izquierda',
};

const tools = (evaluando, setEvaluando, agregarCurva, STUDIES, isMobile, observations, setObservations) => (
  <Col md={12} lg={4} xl={4} key={4} className="col-estudio-info" style={{ width: 'fit-content' }}>
    <Row className={isMobile ? 'select-tools-audiogram-mobile' : 'select-tools-audiogram'}>
      {Object.values(STUDIES_NAMES).map((name, index) => (
        <Col key={index}>
          <SeleccionEstudio
            onClick={() => {
              setEvaluando(name);
              agregarCurva(name);
            }}
            key={`${index}SeleccionEstudios`}
            className={evaluando === name ? 'opacity-100' : 'opacity-25'}
          >
            <Image
              src={STUDIES_IMAGES[name]}
              alt={STUDIES_FULL_NAMES[name]}
              width={55}
              height={55}
              className={evaluando === name ? 'opacity-100' : 'opacity-25'}
              style={{ margin: '10px auto' }}
            />
            {STUDIES_SIDE[name]}
          </SeleccionEstudio>
        </Col>
      ))}
    </Row>

    <div className="mt-4">
      <p className="m-0 mb-2" style={{ fontSize: '22px' }}>Observaciones</p>
      <Form.Control
        type="textarea"
        placeholder="Escribir acá observaciones"
        value={observations}
        onChange={(e) => setObservations(e.target.value)}
      />
    </div>
    <div className="mt-4">
      <FinishStudyBtn observations={observations} results={STUDIES} patientId="patientId" type="STUDY_TYPES.LOGOAUDIOGRAM" />
    </div>
  </Col>
);

function LogoAudiogram() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [evaluando, setEvaluando] = useState('dAerea');
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.D_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });
  const [isMobile, setIsMobile] = useState(false);
  const [observations, setObservations] = useState('');

  const [lineasElementos, setLineas] = useState([]);

  useEffect(() => {
    const { userAgent } = navigator;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    // eslint-disable-next-line
  }, [])

  const agregarCurva = (estudioActual = evaluando) => {
    const newLineas = [];
    const puntos = STUDIES[estudioActual].map((punto, index) => {
      const elemento = document.getElementById(`b-${punto}-${index}`);
      const lineas = document.getElementById('lineas');
      return (elemento && punto !== '')
        ? { x: elemento.getBoundingClientRect().x - lineas.getBoundingClientRect().x + 12, y: elemento.offsetTop + 8 }
        : { x: undefined, y: undefined };
    }).filter((value) => value.x !== undefined);

    for (let i = 0; i < puntos.length - 1; i++) {
      const puntoActual = puntos[i];
      const puntoSiguiente = puntos[i + 1];
      newLineas.push(
        <line
          key={i}
          x1={puntoActual.x}
          y1={puntoActual.y}
          x2={puntoSiguiente.x}
          y2={puntoSiguiente.y}
          stroke={estudioActual === STUDIES_NAMES.D_AEREA || estudioActual === STUDIES_NAMES.D_OSEA ? 'red' : 'blue'}
          strokeDasharray={estudioActual === STUDIES_NAMES.I_OSEA || estudioActual === STUDIES_NAMES.D_OSEA ? '10,8' : 'none'}
          strokeOpacity="0.6"
          strokeWidth="4"
        />,
      );
    }
    setLineas(newLineas);
  };

  const addValueToResults = (row, col, estudio, textInput = false) => {
    const newRow = textInput ? (parseInt(row, 10) + 10) / 5 : row;
    const newStudy = STUDIES[estudio];
    newStudy[col] = newStudy[col] === `${newRow}` ? '' : `${newRow}` || '';
    setStudies({ ...STUDIES, [estudio]: newStudy });
    agregarCurva();
    forceUpdate();
  };

  function AudiometriaComp() {
    const rows = [];

    for (let row = 0; row < 22; row++) {
      const cols = [];
      for (let col = 0; col < 11; col++) {
        cols.push(
          <Casillero
            id={`c-${row}-${col}`}
            key={`c-${row}-${col}`}
            className="aud-1"
            style={{
              borderBottom: row % 2 !== 0 ? '2px solid rgba(0, 0, 0, 1)' : null,
              borderTop: row === 0 ? '2px solid rgba(0, 0, 0, 1)' : null,
              borderLeft: col === 0 ? '2px solid rgba(0, 0, 0, 1)' : null,
              borderRight: '2px solid rgba(0, 0, 0, 1)',
            }}
          >
            {col === 0
              ? (row % 2 !== 0 ? (<p>{ 100 - row * 5 + 5 }</p>) : null)
              : (
                <button style={{ zIndex: 50 }} onClick={() => addValueToResults(row, col, evaluando)} id={`b-${row}-${col}`}>
                  <Image
                    src={STUDIES_IMAGES[evaluando]}
                    alt="Circulo rojo audiometria"
                    width={16}
                    height={16}
                    className={STUDIES[evaluando][col] === `${row}` ? 'opacity-100' : 'opacity-0'}
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
    <main style={{ minWidth: 'fit-content', backgroundColor: 'white!important' }}>
      <Container>
        {/* <p className="sub-title this-section mb-0">Logoaudiograma</p> */}
        <Template>
          <Container style={{
            position: 'relative', margin: 0, paddingTop: '30px', paddingLeft: '60px', maxWidth: 'none', display: 'flex', height: '800px',
          }}
          >
            <Row style={{
              zIndex: 50,
              display: 'flex',
              justifyContent: 'start',
              position: 'relative',
              maxWidth: '581px',
              maxHeight: '50px',
            }}
            >

              <Audiograma>
                {AudiometriaComp()}
                <svg
                  style={{
                    position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 10,
                  }}
                  id="lineas"
                >
                  {lineasElementos}
                </svg>
              </Audiograma>
              <Row style={{ width: '581px', paddingTop: '16px', marginLeft: '6px' }}>
                {[
                  {
                    name: '10', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '20', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '30', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '40', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '50', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '60', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '70', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '80', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '90', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '100', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: 'db', aud: '1', freq: 'up', izq: '0',
                  },
                ].map(({
                  name, aud, freq, izq,
                }) => (
                  <Frecuencia key={name} className={`aud-${aud} freq-${freq}`}>
                    <p style={{ marginLeft: `-${izq}px` }}>{name}</p>
                  </Frecuencia>
                ))}
              </Row>
              <Form style={{ width: '581px', padding: 0, margin: 20 }}>
                <Row style={{ width: '100%' }}>
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((size, index) => (
                    <TextInputDiv
                      key={index}
                      className={`form-${size}`}
                      style={{
                        padding: 0,
                      }}
                    >
                      <Form.Control
                        style={{ maxWidth: '35px' }}
                        size="sm"
                        type="number"
                        name="txtNumber"
                        value={STUDIES[evaluando][index + 1] ? `${105 - STUDIES[evaluando][index + 1] * 5}` : ''}
                        onChange={(event) => addValueToResults(event.target.value, index + 1, evaluando, true)}
                        step="5"
                      />
                    </TextInputDiv>
                  ))}
                </Row>
              </Form>
            </Row>
            {
              !isMobile && tools(evaluando, setEvaluando, agregarCurva, STUDIES, isMobile, observations, setObservations)
            }
          </Container>

        </Template>
      </Container>
      <Container>
        {
          isMobile && tools(evaluando, setEvaluando, agregarCurva, STUDIES, isMobile, observations, setObservations)
        }
      </Container>

    </main>
  );
}

export default LogoAudiogram;
