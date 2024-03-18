/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */

'use client';

import React, { useReducer, useState } from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container, Form, Button,
} from 'react-bootstrap';
import Image from 'next/image';

const Template = styled.div`
  background-color: white;
  background-size: cover;
  width: 100vw;
  display: flex;
  // justify-content: center;
`;

const LogoAudiograma = styled.div`
  position: relative;
  width: 581px;
  height: 609px;
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
    bottom: -12px; 
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
    right: 9px; 
    transition: all .5s ease;
    transform: scale(1.5);
  }
`;

const LogoCol = styled(Col)`
  color: black;
  text-align:center;
  margin-top:10px;
  
  div {
    background-color: var(--tertiaryColor);
    border-radius: 40px;
    padding: 10px;
    margin: 0 5px;
    font-weight: bold;
  }

  button {
    background-color: transparent;
    margin: 0;
    border: none;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const STUDIES_NAMES = {
  D_AEREA: 'dAerea',
  I_AEREA: 'iAerea',
  D_OSEA: 'dOsea',
  I_OSEA: 'iOsea',
};

const STUDIES_IMAGES = {
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/aerea_izquierda.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/osea_derecha.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/osea_izquierda.png',
};

const PARALLEL_STUDIES_IMAGES = {
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/aerea_izquierda.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/osea_derecha_doble.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/osea_izquierda_doble.png',
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

function LogoAudiogram() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [evaluando, setEvaluando] = useState('dAerea');
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.D_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.D_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });

  // const getResultFromRow = (row) => row * 5 - 10;

  // const getFrequencyFromCol = (col) => {
  //   const frequencies = [125, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
  //   return frequencies[col - 1];
  // };

  const [lineasElementos, setLineas] = useState([]);

  function removeFirstA(str) {
    if (str?.toString()?.charAt(0) === 'a') {
      return str.substring(1);
    }
    return str;
  }

  const agregarCurva = (estudioActual = evaluando) => {
    const puntos = STUDIES[estudioActual].map((punto, index) => {
      const elemento = document.getElementById(`b-${removeFirstA(punto)}-${index}`);
      return punto !== ''
        ? { x: elemento.getBoundingClientRect().x - 48, y: elemento.offsetTop + 8 }
        : { x: undefined, y: undefined };
    }).filter((value) => value.x !== undefined);

    const newLineas = [];
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
          strokeDasharray="10,8"
          strokeWidth="4"
        />,
      );
    }
    setLineas(newLineas);
  };

  const addValueToResults = (row, col, estudio, textInput = false) => {
    const newRow = textInput ? (parseInt(row, 10) + 10) / 5 : row;
    const newStudy = STUDIES[estudio];
    newStudy[col] = newStudy[col] === newRow ? `a${newRow}` : newStudy[col] === `a${newRow}` ? '' : newRow || '';
    setStudies({ ...STUDIES, [estudio]: newStudy });
    agregarCurva();
    forceUpdate();
  };

  function AudiometriaComp() {
    const rows = [];

    for (let row = 0; row < 29; row++) {
      const cols = [];
      for (let col = 0; col < 12; col++) {
        cols.push(
          <Casillero
            id={`c-${row}-${col}`}
            key={`c-${row}-${col}`}
            className={`aud-${col === 1 || col === 2 ? '2' : '1'}`}
            style={{
              borderBottom: row === 2 ? '5px solid rgba(0, 0, 0, 1)' : row % 2 === 0 ? '2px solid rgba(0, 0, 0, 1)' : null,
              borderLeft: col === 0 ? '2px solid rgba(0, 0, 0, 1)' : null,
              borderRight: [3, 5, 7, 9].includes(col) ? '2px dashed rgba(0, 0, 0, 1)' : '2px solid rgba(0, 0, 0, 1)',
            }}
          >
            {col === 0
              ? (row % 2 === 0 ? (<p>{row * 5 - 10}</p>) : null)
              : (
                <button style={{ zIndex: 50 }} onClick={() => addValueToResults(row, col, evaluando)} id={`b-${row}-${col}`}>
                  <Image
                    src={STUDIES[evaluando][col] === `a${row}` ? PARALLEL_STUDIES_IMAGES[evaluando] : STUDIES_IMAGES[evaluando]}
                    alt="Circulo rojo audiometria"
                    width={16}
                    height={16}
                    className={STUDIES[evaluando][col] === row || STUDIES[evaluando][col] === `a${row}` ? 'opacity-100' : 'opacity-0'}
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
    <main style={{ backgroundColor: 'white!important' }}>
      <Container>
        <p className="sub-title this-section mb-0">Logoaudiograma</p>
        <Template>
          {/* <Container style={{
            position: 'relative',
            margin: 0,
            paddingTop: '30px',
            paddingLeft: '60px',
            // maxWidth: 'none',
            display: 'flex',
            height: '100vh',
            maxWidth: '950px',
          }}
          > */}
          <Row
            style={{
              zIndex: 50,
              display: 'flex',
              justifyContent: 'start',
              position: 'relative',
            }}
            key={1}
          >
            <Col xs={12} md={12} lg={7} xl={7} style={{ maxWidth: '581px!important' }}>
              <Row style={{ width: '581px' }} key={1}>
                <Frecuencia key="1" className="aud-1 freq-up">
                  <p>125</p>
                </Frecuencia>
                <Frecuencia key="2" className="aud-2 freq-up">
                  <p>250</p>
                </Frecuencia>
                <Frecuencia key="3" className="aud-2 freq-up">
                  <p>500</p>
                </Frecuencia>
                <Frecuencia key="4" className="aud-1 freq-down">
                  <p>750</p>
                </Frecuencia>
                <Frecuencia key="5" className="aud-1 freq-up">
                  <p>1.000</p>
                </Frecuencia>
                <Frecuencia key="6" className="aud-1 freq-down">
                  <p>1.500</p>
                </Frecuencia>
                <Frecuencia key="7" className="aud-1 freq-up">
                  <p>2.000</p>
                </Frecuencia>
                <Frecuencia key="8" className="aud-1 freq-down">
                  <p>3.000</p>
                </Frecuencia>
                <Frecuencia key="9" className="aud-1 freq-up">
                  <p>4.000</p>
                </Frecuencia>
                <Frecuencia key="10" className="aud-1 freq-down">
                  <p>6.000</p>
                </Frecuencia>
                <Frecuencia key="11" className="aud-1 freq-up">
                  <p>8.000</p>
                </Frecuencia>
              </Row>
              <LogoAudiograma key={2}>
                {AudiometriaComp()}
                <svg style={{
                  position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 10,
                }}
                >
                  {lineasElementos}
                </svg>
              </LogoAudiograma>
              <Form style={{ width: '581px', padding: 0, margin: 20 }} key={3}>
                <Row style={{ width: '100%' }}>
                  {[1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1].map((size, index) => (
                    <TextInputDiv
                      className={`form-${size}`}
                      style={{
                        padding: 0,
                      }}
                      key={`${index}FormControl`}
                    >
                      <Form.Control
                        style={{ maxWidth: '35px' }}
                        size="sm"
                        type="number"
                        name="txtNumber"
                        value={(STUDIES[evaluando][index + 1] !== '' ? removeFirstA(STUDIES[evaluando][index + 1]) * 5 - 10 : '').toString()}
                        onChange={(event) => addValueToResults(event.target.value, index + 1, evaluando, true)}
                        step="5"
                      />
                    </TextInputDiv>
                  ))}
                </Row>
              </Form>
            </Col>
            <Col xs={12} md={12} lg={4} xl={4} key={4} className="col-estudio-info">
              <Row style={{ maxWidth: '375px!important' }}>
                <Col xs={6} lg={6} xl={6}>
                  <p className={`color-primary text-center ${(evaluando === 'dAerea' || evaluando === 'iAerea') ? 'opacity-100' : 'opacity-25'}`}>
                    Vía aérea
                  </p>
                </Col>
                <Col xs={6} lg={6} xl={6}>
                  <p className={`color-primary text-center ${(evaluando === 'dOsea' || evaluando === 'iOsea') ? 'opacity-100' : 'opacity-25'}`}>
                    Vía ósea
                  </p>
                </Col>
                <Col xs={12} md={12} lg={12} xl={12} className="mb-4">
                  <Row>
                    {Object.values(STUDIES_NAMES).map((name, index) => (
                      <Col>
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
                          // className={evaluando === name ? 'opacity-100' : 'opacity-25'}
                            style={{ margin: '10px auto' }}
                          />
                          {STUDIES_SIDE[name]}
                        </SeleccionEstudio>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <LogoCol xs={12} md={6}>
                  Intensidad
                  <div>25 dB</div>
                </LogoCol>
                <LogoCol xs={12} md={6}>
                  Palabra
                  <div>Sastre</div>
                </LogoCol>
                <LogoCol xs={12} md={6}>
                  Respuesta
                  <div style={{ backgroundColor: 'white' }}>
                    <button>
                      <Image
                        src="/img/web/Close.png"
                        alt="Correcta"
                        width={45}
                        height={45}
                      />
                    </button>
                    <button>
                      <Image
                        src="/img/web/Check.png"
                        alt="Correcta"
                        width={45}
                        height={45}
                      />
                    </button>
                  </div>
                </LogoCol>
                <LogoCol xs={12} md={6}>
                  Conteo
                  <div>15%</div>
                </LogoCol>
              </Row>
              <div className="mt-4">
                <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p>
                <p className="mb-0">
                  Apellido:
                  <strong> Gomez</strong>
                </p>
                <p className="mb-0">
                  Nombre:
                  <strong> Jorge</strong>
                </p>
                <p className="mb-0">
                  Fecha de nacimiento:
                  <strong> 25/02/1976</strong>
                </p>
              </div>
              <div className="mt-4">
                <p className="m-0" style={{ fontSize: '22px' }}>Observaciones</p>
                <p>
                  ____________________
                  <br />
                  ____________________
                </p>
              </div>
              <div className="mt-4">
                <Button className="btn btn-secondary">Guardar estudio</Button>
              </div>
            </Col>
          </Row>
        </Template>
      </Container>
    </main>
  );
}

export default LogoAudiogram;
