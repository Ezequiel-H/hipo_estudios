/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */

'use client';

import React, { useReducer, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container, Form, Button,
} from 'react-bootstrap';
import Image from 'next/image';
import localStorageNames from '@/app/constants/localStorage';
import Finished from '../Finished';
import { addStudyForUser } from '@/app/db/studies';

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
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/sr_aerea_derecha.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/sr_aerea_izquierda.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/sr_osea_derecha.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/sr_osea_izquierda.png',
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

const tools = (
  {
    evaluando,
    setEvaluando,
    agregarCurva,
    STUDIES,
    isMobile,
    userId,
    proceso,
    setProceso,
    proximoEstudio,
    setProximoEstudio,
    realizarProximoEstudio,
  },
) => (
  <Col md={12} lg={4} xl={4} key={4} className="col-estudio-info" style={{ width: 'fit-content' }}>
    <Row className={isMobile ? 'select-tools-audiogram-mobile' : 'select-tools-audiogram'}>
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
      <Form.Control type="textarea" placeholder="Escribir acá observaciones" />

    </div>
    <div className="mt-4">
      {
        proceso === 1 ? (
          <Button
            onClick={() => {
              const datosJSON = JSON.stringify(STUDIES);
              localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);
              addStudyForUser(userId, STUDIES);
              setProceso(2);
            }}
            className="btn btn-secondary"
          >
            Guardar estudio
          </Button>
        ) : (proceso === 2) ? (
          <>
            <p>¿Terminaste con este paciente?</p>
            <Button
              onClick={() => {
                const datosJSON = JSON.stringify(STUDIES);
                localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);
                setProceso(3);
              }}
              className="btn btn-secondary"
              style={{ marginRight: '10px' }}
            >
              Si
            </Button>
            <Button
              onClick={() => {
                const datosJSON = JSON.stringify(STUDIES);
                localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);
                setProceso(4);
              }}
              className="btn btn-primary"
              style={{ marginLeft: '10px!important;' }}
            >
              Realizar otro estudio
            </Button>
          </>
        ) : proceso === 3 ? (
          <Finished modal />
        ) : proceso === 4 ? (
          <>
            <p className="color-black mt-4">Realizar otro estudio</p>
            <div style={{ display: 'flex' }}>
              <Form.Select
                aria-label="Seleccionar estudio a realizar"
                style={{ marginRight: '10px' }}
                value={proximoEstudio}
                onChange={(e) => setProximoEstudio(e.target.value)}
              >
                <option>Seleccionar estudio</option>
                <option value="logoaudiometria">Logoaudiometría</option>
                <option value="impedanciometria">Impedanciometría</option>
                <option value="timpanometria">Timpanometría</option>
                <option value="potenciales-evocados">Potenciales evocados</option>
                <option value="otoemision">Otoemisión</option>
              </Form.Select>
              <Button
                className="btn btn-primary"
                onClick={() => realizarProximoEstudio()}
              >
                Realizar
              </Button>
            </div>
          </>
        ) : null
      }
    </div>
  </Col>
);

function Audiogram({ userId }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [evaluando, setEvaluando] = useState('dAerea');
  const [proximoEstudio, setProximoEstudio] = useState('');
  const [proceso, setProceso] = useState(1);
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.D_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.D_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });
  const [isMobile, setIsMobile] = useState(false);

  const [lineasElementos, setLineas] = useState([]);

  useEffect(() => {
    const { userAgent } = navigator;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    // eslint-disable-next-line
  }, [])

  function removeFirstA(str) {
    if (str?.toString()?.charAt(0) === 'a') {
      return str.substring(1);
    }
    return str;
  }

  function realizarProximoEstudio() {
    // TODO: guardarEstudio();
    const datosJSON = JSON.stringify(STUDIES);
    localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);

    window.location.href = `/idDeEzequiel123123/${proximoEstudio}/nueva`;
  }

  const agregarCurva = (estudioActual = evaluando) => {
    const newLineas = [];
    const puntos = STUDIES[estudioActual].map((punto, index) => {
      const elemento = document.getElementById(`b-${removeFirstA(punto)}-${index}`);
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
          strokeWidth="4"
        />,
      );
    }
    setLineas(newLineas);
  };

  const addValueToResults = (row, col, estudio, textInput = false) => {
    const newRow = textInput ? (parseInt(row, 10) + 10) / 5 : row;
    const newStudy = STUDIES[estudio];
    newStudy[col] = newStudy[col] === `${newRow}` ? `a${newRow}` : newStudy[col] === `a${newRow}` ? '' : `${newRow}` || '';
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
                    width={STUDIES[evaluando][col] === `a${row}` ? 22 : 22}
                    // antes decia 22 : 16
                    height={STUDIES[evaluando][col] === `a${row}` ? 22 : 22}
                    className={STUDIES[evaluando][col] === `${row}` || STUDIES[evaluando][col] === `a${row}` ? 'opacity-100' : 'opacity-0'}
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
        {/* <p className="sub-title this-section mb-0">Audiograma</p> */}
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
              <Row style={{ width: '581px', marginBottom: '15px' }}>
                {[
                  {
                    name: '125', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '250', aud: '2', freq: 'up', izq: '12',
                  },
                  {
                    name: '500', aud: '2', freq: 'up', izq: '12',
                  },
                  {
                    name: '750', aud: '1', freq: 'down', izq: '12',
                  },
                  {
                    name: '1k', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '1.5k', aud: '1', freq: 'down', izq: '0',
                  },
                  {
                    name: '2k', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '3k', aud: '1', freq: 'down', izq: '0',
                  },
                  {
                    name: '4k', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '6k', aud: '1', freq: 'down', izq: '-10',
                  },
                  {
                    name: '8k', aud: '1', freq: 'up', izq: '0',
                  },
                ].map(({
                  name, aud, freq, izq,
                }) => (
                  <Frecuencia key={name} className={`aud-${aud} freq-${freq}`}>
                    <p style={{ marginRight: `-${izq}px` }}>{name}</p>
                  </Frecuencia>
                ))}
              </Row>
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
              <Form style={{ width: '581px', padding: 0, margin: 20 }}>
                <Row style={{ width: '100%' }}>
                  {[1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1].map((size, index) => (
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
                        value={STUDIES[evaluando][index + 1] ? `${removeFirstA(STUDIES[evaluando][index + 1]) * 5 - 10}` : ''}
                        onChange={(event) => addValueToResults(event.target.value, index + 1, evaluando, true)}
                        step="5"
                      />
                    </TextInputDiv>
                  ))}
                </Row>
              </Form>
            </Row>
            {
              !isMobile && tools(
                {
                  evaluando,
                  setEvaluando,
                  agregarCurva,
                  STUDIES,
                  isMobile,
                  userId,
                  proceso,
                  setProceso,
                  proximoEstudio,
                  setProximoEstudio,
                  realizarProximoEstudio,
                },
              )
            }

          </Container>

        </Template>
      </Container>
      <Container>
        {
          isMobile && tools({
            evaluando,
            setEvaluando,
            agregarCurva,
            STUDIES,
            isMobile,
            userId,
            proceso,
            setProceso,
            proximoEstudio,
            setProximoEstudio,
            realizarProximoEstudio,
          })
        }
      </Container>

    </main>
  );
}

export default Audiogram;

// const getResultFromRow = (row) => row * 5 - 10;

// const getFrequencyFromCol = (col) => {
//   const frequencies = [125, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
//   return frequencies[col - 1];
// };
