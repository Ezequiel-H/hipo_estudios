/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import {
  Row, Col, Container, Form, Table, Button,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Image from 'next/image';
import Finished from '../Finished';

const Audiograma = styled.div`
  position: relative;
  width: 581px;
  height: 609px;
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
    right: 11px; 
    transition: all .5s ease;
    transform: scale(1.5);
  }
`;

const TdCell = styled.td`
    margin: 0!important;
    input {
        background-color: transparent;
        border: 1px solid var(--primaryColor);
        width: 100%;
    }

`;

const STUDIES_NAMES = {
  DERECHA: 'derecha',
  IZQUIERDA: 'izquierda',
};

const STUDIES_IMAGES = {
  [STUDIES_NAMES.DERECHA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.IZQUIERDA]: '/img/estudios/markers/aerea_izquierda.png',
};

function Timpanometria({ patientId }) {
  const [proceso, setProceso] = useState(1);
  const [proximoEstudio, setProximoEstudio] = useState('');
  const [evaluando, setEvaluando] = useState(STUDIES_NAMES.DERECHA);
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.DERECHA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.IZQUIERDA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });

  const addValueToResults = (row, col, estudio, textInput = false) => {
    const newRow = textInput ? (parseInt(row, 10) + 10) / 5 : row;
    const newStudy = STUDIES[estudio];
    newStudy[col] = newStudy[col] === `${newRow}` ? `a${newRow}` : newStudy[col] === `a${newRow}` ? '' : `${newRow}` || '';
    setStudies({ ...STUDIES, [estudio]: newStudy });
    // agregarCurva();
    // forceUpdate();
  };

  const [lineasElementos, setLineas] = useState([]);

  // const agregarCurva = () => {
  //   const newLineas = [];
  //   Object.entries(STUDIES).forEach(([nombre, valores]) => {
  //     const puntos = valores.map((punto, index) => {
  //       const elemento = document.getElementById(`b-${removeFirstA(punto)}-${index}`);
  //       const lineas = document.getElementById('lineas');
  //       return (elemento && punto !== '')
  //         ? {
  //           x: elemento.getBoundingClientRect().x - lineas.getBoundingClientRect().x + 17,
  //           y: elemento.offsetTop + 8,
  //         }
  //         : {
  //           x: undefined,
  //           y: undefined,
  //         };
  //     }).filter((value) => value.x !== undefined);

  //     for (let i = 0; i < puntos.length - 1; i++) {
  //       const puntoActual = puntos[i];
  //       const puntoSiguiente = puntos[i + 1];
  //       newLineas.push(
  //         <line
  //           key={`${i}${nombre}${modo.toString()}`}
  //           x1={puntoActual.x}
  //           y1={puntoActual.y}
  //           x2={puntoSiguiente.x}
  //           y2={puntoSiguiente.y}
  //           stroke={nombre === STUDIES_NAMES.D_AEREA || nombre === STUDIES_NAMES.D_OSEA ? 'red' : 'blue'}
  //           strokeDasharray={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '10,8' : 'none'}
  //           strokeWidth={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '3' : '2'}
  //           strokeOpacity={nombre === STUDIES_NAMES.I_OSEA || nombre === STUDIES_NAMES.D_OSEA ? '0.3' : '0.4'}
  //         />,
  //       );
  //     }
  //   });
  //   setLineas(newLineas.concat(lineasElementos));
  // };

  function AudiometriaComp() {
    // TODO: Karina habia pedido poder ver lo compeltado anteriormente.
    // EJ: si hizo viaOseaDerecha y ahora esta en la izquierda, poder ver la derecha
    // Podria estar bueno que se vea con menos opacidad o algo asi y no sea editable, claro.
    const rows = [];

    for (let row = 0; row < 35; row++) {
      const cols = [];
      for (let col = 0; col < 20; col++) {
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
                    src={STUDIES_IMAGES[evaluando]}
                    alt="Circulo rojo audiometria"
                    width={22}
                    height={22}
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
    <Container>
      <Audiograma>
        {AudiometriaComp()}
        {/* <svg
          style={{
            position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 10,
          }}
          id="lineas"
        >
          {lineasElementos}
        </svg> */}
      </Audiograma>
      <Row className="mt-4">
        <Col style={{ maxWidth: 'fit-content' }}>
          <Form style={{ maxWidth: 'fit-content' }}>
            <Table bordered hover style={{ maxWidth: '600px' }}>
              <thead>
                <tr>
                  <th>OIDO</th>
                  <th className="text-center">-500</th>
                  <th className="text-center">-400</th>
                  <th className="text-center">-300</th>
                  <th className="text-center">-200</th>
                  <th className="text-center">-100</th>
                  <th className="text-center">0</th>
                  <th className="text-center">100</th>
                  <th className="text-center">200</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TdCell>IZQUIERDO</TdCell>
                  <TdCell>
                    <input type="number" name="i-500" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-404" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-300" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-200" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-100" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-0" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-100" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="i-200" />
                  </TdCell>
                </tr>
                <tr>
                  <TdCell>DERECHO</TdCell>
                  <TdCell>
                    <input type="number" name="d-500" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-404" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-300" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-200" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-100" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-0" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-100" />
                  </TdCell>
                  <TdCell>
                    <input type="number" name="d-200" />
                  </TdCell>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Col>
        <Col style={{ maxWidth: 'fit-content', marginLeft: '50px;' }}>
          <div>
            <p className="m-0 mb-2" style={{ fontSize: '22px' }}>Observaciones</p>
            <Form.Control type="textarea" placeholder="Escribir acá observaciones" />
          </div>
          <div className="mt-4">
            {
              proceso === 1 ? (
                <Button
                  onClick={() => {
                    // TODO: guardar estudio
                    setProceso(2);
                  }}
                  className="btn btn-secondary"
                >
                  Guardar estudio
                </Button>
              ) : null
            }
            {(proceso === 2) ? (
              <>
                <p>¿Terminaste con este paciente?</p>
                <Button
                  onClick={() => {
                    setProceso(3);
                  }}
                  className="btn btn-secondary"
                  style={{ marginRight: '10px' }}
                >
                  Si
                </Button>
                <Button
                  onClick={() => {
                    setProceso(4);
                  }}
                  className="btn btn-primary"
                  style={{ marginLeft: '10px!important;' }}
                >
                  Realizar otro estudio
                </Button>
              </>
            ) : null}

            {(proceso === 3) ? (<Finished modal />) : null}

            {(proceso === 4) ? (
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
                    // onClick={() => realizarProximoEstudio()}
                  >
                    Realizar
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Timpanometria;
