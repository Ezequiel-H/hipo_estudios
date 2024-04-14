/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */

'use client';

import React, { useReducer, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Row, Container } from 'react-bootstrap';
import Image from 'next/image';
import localStorageNames from '@/app/constants/localStorage';

const Template = styled.div`
  background-color: white;
  background-size: cover;
  /* width: 90vw; */
  display: block;
  justify-content: center;
  overflow-x:visible;
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

function AudiogramCompletoEjemplo() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.D_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.D_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_OSEA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });

  const [lineasElementos, setLineas] = useState([]);

  function removeFirstA(str) {
    if (str?.toString()?.charAt(0) === 'a') {
      return str.substring(1);
    }
    return str;
  }

  const agregarCurva = () => {
    const newLineas = [];
    Object.entries(STUDIES).forEach(([nombre, valores]) => {
      const puntos = valores.map((punto, index) => {
        const elemento = document.getElementById(`b-${removeFirstA(punto)}-${index}`);
        const lineas = document.getElementById('lineas');
        return (elemento && punto !== '')
          ? { x: elemento.getBoundingClientRect().x - lineas.getBoundingClientRect().x + 17, y: elemento.offsetTop + 8 }
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
            stroke={nombre === STUDIES_NAMES.D_AEREA || nombre === STUDIES_NAMES.D_OSEA ? 'red' : 'blue'}
            strokeDasharray={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '10,8' : 'none'}
            strokeWidth={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '3' : '2'}
            strokeOpacity={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '0.3' : '0.4'}
          />,
        );
      }
    });
    setLineas(newLineas.concat(lineasElementos));
  };

  function AudiometriaComp() {
    const rows = [];

    const isOn = (row, col) => {
      const studies = Object.values(STUDIES_NAMES);
      // eslint-disable-next-line eqeqeq
      return studies.some((study) => STUDIES[study][col] == `${row}` || STUDIES[study][col] == `a${row}`);
    };

    const allImagesNeeded = (row, col) => {
      const studies = Object.values(STUDIES_NAMES);
      // eslint-disable-next-line eqeqeq
      const studiesImages = studies.filter((study) => (STUDIES[study][col] == `a${row}` || STUDIES[study][col] == `${row}`));
      // eslint-disable-next-line eqeqeq
      return studiesImages.map((study) => (STUDIES[study][col] == `a${row}` ? PARALLEL_STUDIES_IMAGES[study] : STUDIES_IMAGES[study]));
    };

    for (let row = 0; row < 29; row++) {
      const cols = [];
      for (let col = 0; col < 12; col++) {
        const neededImages = allImagesNeeded(row, col);
        cols.push(
          <Casillero
            id={`c-${row}-${col}`}
            key={`c-${row}-${col}`}
            className={`aud-${col === 1 || col === 2 ? '2' : '1'}`}
            style={{
              borderBottom: row === 2 ? '5px solid rgba(0, 0, 0, 0.6)' : row % 2 === 0 ? '2px solid rgba(0, 0, 0, 0.6)' : null,
              borderLeft: col === 0 ? '2px solid rgba(0, 0, 0, 0.6)' : null,
              borderRight: [3, 5, 7, 9].includes(col) ? '2px dashed rgba(0, 0, 0, 0.6)' : '2px solid rgba(0, 0, 0, 0.6)',
            }}
          >
            {col === 0
              ? (row % 2 === 0 ? (<p>{row * 5 - 10}</p>) : null)
              : (
                <button style={{ zIndex: 50, marginLeft: `${neededImages.length === 1 ? '0px' : '-5px'}` }} onClick={() => {}} id={`b-${row}-${col}`}>
                  <div style={{ marginTop: `${neededImages.length > 2 ? '-20px' : '0px'}` }}>
                    <Image
                      src={isOn(row, col) ? neededImages[0] : STUDIES_IMAGES[STUDIES_NAMES.D_AEREA]}
                      alt="Circulo rojo audiometria"
                      width={16}
                      height={16}
                    // eslint-disable-next-line eqeqeq
                      className={isOn(row, col) ? 'opacity-100' : 'opacity-0'}
                    />
                    {neededImages.length >= 2 && (
                    <Image
                      src={neededImages[1]}
                      alt="Circulo rojo audiometria"
                      width={16}
                      height={16}
                    // eslint-disable-next-line eqeqeq
                      className="opacity-100"
                      style={{ marginLeft: '-2px' }}
                    />
                    )}
                  </div>
                  {neededImages.length >= 3 && (
                  <div style={{ marginTop: '-4px' }}>
                    <Image
                      src={neededImages[2]}
                      alt="Circulo rojo audiometria"
                      width={16}
                      height={16}
                    // eslint-disable-next-line eqeqeq
                      className={isOn(row, col) ? 'opacity-100' : 'opacity-0'}
                    />
                    {neededImages.length >= 4 && (
                    <Image
                      src={neededImages[3]}
                      alt="Circulo rojo audiometria"
                      width={16}
                      height={16}
                    // eslint-disable-next-line eqeqeq
                      className="opacity-100"
                      style={{ marginLeft: '-2px' }}
                    />
                    )}
                  </div>
                  )}
                </button>
              )}
          </Casillero>,
        );
      }
      rows.push(<Row key={`${row}`}>{cols}</Row>);
    }
    return rows;
  }

  useEffect(() => {
    const datosJSONRecuperados = localStorage.getItem(localStorageNames.AUDIOGRAM);
    const datosRecuperados = JSON.parse(datosJSONRecuperados);
    setStudies(datosRecuperados);
    // setStudies({
    //   [STUDIES_NAMES.D_AEREA]: [0, 10, 10, 10, 11, 6, 11, 12, 12, 14, 16, 19],
    //   [STUDIES_NAMES.I_AEREA]: [0, 12, 12, 13, 11, 6, 14, 15, 14, 14, 15, 16],
    //   [STUDIES_NAMES.D_OSEA]: [0, 3, 3, 3, 4, 6, 4, 5, 5, 6, 9, 9],
    //   [STUDIES_NAMES.I_OSEA]: [0, 5, 5, 6, 6, 6, 7, 8, 7, 7, 8, 7],
    // });
    // setStudies({
    //   [STUDIES_NAMES.D_AEREA]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [STUDIES_NAMES.I_AEREA]: [0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    //   [STUDIES_NAMES.D_OSEA]: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //   [STUDIES_NAMES.I_OSEA]: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    // });
  }, []);

  useEffect(() => {
    if (Object.values(STUDIES).some((array) => array.some((value) => value !== ''))) {
      agregarCurva(STUDIES_NAMES.D_AEREA);
      agregarCurva(STUDIES_NAMES.I_AEREA);
      agregarCurva(STUDIES_NAMES.D_OSEA);
      agregarCurva(STUDIES_NAMES.I_OSEA);
    }
    forceUpdate();
  }, [STUDIES]);

  return (
    <main style={{ backgroundColor: 'white!important' }}>
      <Container>
        <p className="sub-title this-section mb-0">Audiometría</p>
        <Template>
          <Container style={{
            position: 'relative', margin: 0, paddingTop: '30px', paddingLeft: '50px', maxWidth: 'none', display: 'flex', height: '100vh',
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
                    name: '1.000', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '1.500', aud: '1', freq: 'down', izq: '12',
                  },
                  {
                    name: '2.000', aud: '1', freq: 'up', izq: '12',
                  },
                  {
                    name: '3.000', aud: '1', freq: 'down', izq: '12',
                  },
                  {
                    name: '4.000', aud: '1', freq: 'up', izq: '0',
                  },
                  {
                    name: '6.000', aud: '1', freq: 'down', izq: '0',
                  },
                  {
                    name: '8.000', aud: '1', freq: 'up', izq: '0',
                  },
                ].map(({
                  name, aud, freq, izq,
                }) => (
                  <Frecuencia className={`aud-${aud} freq-${freq}`}>
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
              <div key={4} className="col-estudio-info">
                <div className="mt-4">
                  <p className="m-0" style={{ fontSize: '22px' }}>Observaciones</p>
                  <p>
                    Estudio realizado en cabina sonoamortiguada.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </Template>
      </Container>

    </main>
  );
}

export default AudiogramCompletoEjemplo;
