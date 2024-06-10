/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */

'use client';

import React, { useReducer, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Row, Container,
} from 'react-bootstrap';
import Image from 'next/image';
import localStorageNames from '@/app/constants/localStorage';

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

const Casillero = styled.div`
  margin: 0;
  background-color: transparent;
  padding: 0!important;
  border-radius: 0%;
  height:10px;

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

function LogoAudiogramCompleto() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.D_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.I_AEREA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });
  // const [isMobile, setIsMobile] = useState(false);

  const [lineasElementos, setLineas] = useState([]);

  const agregarCurva = () => {
    const newLineas = [];
    Object.entries(STUDIES).forEach(([nombre, valores]) => {
      const puntos = valores.map((punto, index) => {
        const elemento = document.getElementById(`b-${punto}-${index}`);
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

  useEffect(() => {
    const datosJSONRecuperados = localStorage.getItem(localStorageNames.LOGOAUDIOGRAM);
    const datosRecuperados = JSON.parse(datosJSONRecuperados);
    setStudies(datosRecuperados);
  }, []);

  useEffect(() => {
    if (Object.values(STUDIES).some((array) => array.some((value) => value !== ''))) {
      agregarCurva(STUDIES_NAMES.D_AEREA);
      agregarCurva(STUDIES_NAMES.I_AEREA);
    }
    forceUpdate();
  }, [STUDIES]);

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
      const studiesImages = studies.filter((study) => (STUDIES[study][col] == `${row}`));
      // eslint-disable-next-line eqeqeq
      return studiesImages.map((study) => (STUDIES_IMAGES[study]));
    };

    for (let row = 0; row < 22; row++) {
      const cols = [];
      for (let col = 0; col < 11; col++) {
        const neededImages = allImagesNeeded(row, col);
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
                <button style={{ zIndex: 50, marginLeft: `${neededImages.length === 1 ? '0px' : '-5px'}` }} onClick={() => {}} id={`b-${row}-${col}`}>
                  <div style={{ marginTop: `${neededImages.length > 2 ? '-20px' : '0px'}` }}>
                    <Image
                      src={isOn(row, col) ? neededImages[0] : STUDIES_IMAGES[STUDIES_NAMES.D_AEREA]}
                      alt="Circulo rojo audiometria"
                      width={16}
                      height={16}
                      className={isOn(row, col) ? 'opacity-100' : 'opacity-0'}
                    />
                    {neededImages.length >= 2 && (
                    <Image
                      src={neededImages[1]}
                      alt="Circulo rojo audiometria"
                      width={16}
                      height={16}
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

  return (
    <main style={{ minWidth: 'fit-content', backgroundColor: 'white!important' }}>
      <Container>
        <p className="sub-title this-section mb-0">LogoAudiograma</p>
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
            </Row>

          </Container>

        </Template>
      </Container>
      <Container />

    </main>
  );
}

export default LogoAudiogramCompleto;
