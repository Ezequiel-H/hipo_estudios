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

function AudiogramCompletoEjemplo(readOnly = false) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [evaluando, setEvaluando] = useState('dAerea');
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
            stroke={nombre === STUDIES_NAMES.D_AEREA || nombre === STUDIES_NAMES.D_OSEA ? 'red' : 'blue'}
            strokeDasharray={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '10,8' : 'none'}
            strokeWidth={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '4' : '2'}
          />,
        );
      }
    });

    setLineas(newLineas.concat(lineasElementos));
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
                <button style={{ zIndex: 50 }} onClick={() => console.log('object')} id={`b-${row}-${col}`}>
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

  useEffect(() => {
    setStudies({
      [STUDIES_NAMES.D_AEREA]: [1, 2, 1, 5, 5, 5, 5, 5, 3, 2, 5, 4],
      [STUDIES_NAMES.I_AEREA]: [2, 1, 2, 5, 5, 5, 4, 3, 3, 2, 1, 4],
      [STUDIES_NAMES.D_OSEA]: [2, 1, 2, 5, 5, 3, 3, 3, 5, 4, 2, 4],
      [STUDIES_NAMES.I_OSEA]: [1, 2, 1, 5, 5, 5, 5, 3, 3, 2, 1, 4],
    });
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
            </Row>
          </Container>
          <Container>
            <div key={4} className="col-estudio-info">
              <div className="mt-4">
                <p className="m-0" style={{ fontSize: '22px' }}>Observaciones</p>
                <p>
                  Estudio realizado en cabina sonoamortiguada.
                </p>
              </div>
            </div>
          </Container>
        </Template>
      </Container>

    </main>
  );
}

export default AudiogramCompletoEjemplo;
