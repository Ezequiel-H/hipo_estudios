/* eslint-disable no-const-assign */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import React, { useReducer, useState } from 'react';
import {
  Row, Col, Container, Form,
} from 'react-bootstrap';
import styled from '@emotion/styled';

const Timpanograma = styled.div`
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

  div {
    background-color: transparent;
    padding:0;
    border: 0;
    font-size:10px;
    position: relative;
    bottom: -9px; 
    right: 11px; 
    transition: all .5s ease;
    transform: scale(1);
  }
`;

const CeldaTextsInput = styled.div`
  margin: 0!important;
  padding: 2px 5px;
  height: 40px;
  max-width: 70px;
  width: 100%;
  background-color: transparent;
  color: black;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

// const TextInputDiv = styled.div`
//   margin: 0 !important;
//   padding: 0!important;
//   background-color: transparent;
//   border-radius: 0%;
//   color: white;
//   display: flex;
//   justify-content: flex-end;
//   text-align: right;
// `;

const STUDIES_NAMES = {
  DERECHA: 'derecha',
  IZQUIERDA: 'izquierda',
};

function Timpanometria() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // const [proceso, setProceso] = useState(1);
  // const [proximoEstudio, setProximoEstudio] = useState('');
  const [lineasElementos, setLineas] = useState([]);
  const [STUDIES, setStudies] = useState({
    [STUDIES_NAMES.DERECHA]: ['', '', '', '', '', '', '', '', '', '', ''],
    [STUDIES_NAMES.IZQUIERDA]: ['', '', '', '', '', '', '', '', '', '', ''],
  });

  const agregarCurva = () => {
    const newLineas = [];
    Object.entries(STUDIES).forEach(([nombre, valores]) => {
      console.log(valores);
      const puntos = valores.map((punto, index) => {
        const valorDelPunto = parseFloat(punto).toFixed(1) * (-10) + 28;
        const elemento = document.getElementById(`b-${valorDelPunto}-${index}`);
        const lineas = document.getElementById('lineas');
        return (elemento && punto !== '')
          ? {
            x: elemento.getBoundingClientRect().x - lineas.getBoundingClientRect().x + 11,
            y: elemento.offsetTop + 11,
          }
          : {
            x: undefined,
            y: undefined,
          };
      }).filter((value) => value.x !== undefined);

      for (let i = 0; i < puntos.length - 1; i++) {
        const puntoActual = puntos[i];
        const puntoSiguiente = puntos[i + 1];
        newLineas.push(
          <line
            key={`${i}${nombre}`}
            x1={puntoActual.x}
            y1={puntoActual.y}
            x2={puntoSiguiente.x}
            y2={puntoSiguiente.y}
            stroke={nombre === STUDIES_NAMES.DERECHA ? 'red' : 'blue'}
            strokeWidth="3"
            strokeOpacity="1"
          />,
        );
      }
    });
    setLineas(newLineas);
  };

  const addValueToResults = (row, col, estudio) => {
    const newRow = parseFloat(row);
    const newStudy = STUDIES[estudio];
    newStudy[col] = newRow === 0 ? '0' : newRow ? `${newRow}` : '';
    setStudies({ ...STUDIES, [estudio]: newStudy });
    agregarCurva();
    forceUpdate();
  };

  function TimpanometriaComp() {
    const rows = [];

    for (let row = 0; row < 30; row++) {
      const cols = [];
      for (let col = 0; col < 20; col++) {
        cols.push(
          <Casillero
            id={`c-${row}-${col}`}
            key={`c-${row}-${col}`}
            className="aud-3"
            style={{
              borderTop: row === 0 ? '2px solid rgba(0, 0, 0, 1)' : '',
              borderBottom: '2px solid rgba(0, 0, 0, 1)',
              borderLeft: '2px solid rgba(0, 0, 0, 1)',
              borderRight: col === 19 ? '2px solid rgba(0, 0, 0, 1)' : '',
            }}
          >
            {row === 29
              ? (col % 2 === 0 ? (
                <p style={{
                  color: 'black',
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  bottom: '-20px',
                  left: '-10px',
                  textAlign: 'left',
                  fontSize: '12px',
                }}
                >
                  {Math.abs(500 - (col * 50))}
                </p>
              ) : null) : (
                <div id={`b-${row}-${col}`} />
              )}
            {col === 9
              ? (row % 2 !== 0 && row !== 29 ? (
                <p style={{
                  color: 'black',
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  bottom: '0px',
                  textAlign: 'right',
                  fontSize: '12px',
                }}
                >
                  {(2.9 - row * 0.1).toFixed(1).toString() }
                </p>
              ) : null)
              : null}
          </Casillero>,
        );
      }
      rows.push(<Row key={`${row}`}>{cols}</Row>);
    }
    return rows;
  }

  return (
    <Container style={{ margin: '0 auto' }}>
      <Row className="mt-4" style={{ padding: '30px 0' }}>
        <Col style={{ maxWidth: 'fit-content' }}>
          <Form style={{ maxWidth: 'fit-content' }}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <div>
                <CeldaTextsInput>
                  Oido
                </CeldaTextsInput>
                <CeldaTextsInput>
                  Derecho
                </CeldaTextsInput>
                <CeldaTextsInput>
                  Izquierdo
                </CeldaTextsInput>
              </div>
              {[-500, -400, -300, -200, -100, 0, 100, 200, 300, 400].map((volumen, index) => (
                <div key={`container: ${volumen}`}>
                  <CeldaTextsInput key={`title: ${volumen}`}>
                    {volumen}
                  </CeldaTextsInput>
                  <CeldaTextsInput
                    key={`input: d-${volumen}`}
                    style={{
                      padding: 0,
                    }}
                  >
                    <Form.Control
                      style={{ width: '100%' }}
                      size="sm"
                      type="number"
                      name="txtNumber"
                      key={`input: formd-${volumen}`}
                      value={STUDIES[STUDIES_NAMES.DERECHA][index] ? `${STUDIES[STUDIES_NAMES.DERECHA][index]}` : ''}
                      onChange={(event) => addValueToResults(event.target.value, index, STUDIES_NAMES.DERECHA)}
                    />
                  </CeldaTextsInput>
                  <CeldaTextsInput
                    key={`input: i-${volumen}`}
                    style={{
                      padding: 0,
                    }}
                  >
                    <Form.Control
                      style={{ width: '100%' }}
                      size="sm"
                      type="number"
                      name="txtNumber"
                      key={`input: formi-${volumen}`}
                      value={STUDIES[STUDIES_NAMES.IZQUIERDA][index]}
                      onChange={(event) => addValueToResults(event.target.value, index, STUDIES_NAMES.IZQUIERDA)}
                    />
                  </CeldaTextsInput>
                </div>
              ))}
            </div>
          </Form>
        </Col>
      </Row>
      <Timpanograma>
        {TimpanometriaComp()}
        <svg
          style={{
            position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 10,
          }}
          id="lineas"
        >
          {lineasElementos}
        </svg>
      </Timpanograma>
    </Container>
  );
}

export default Timpanometria;

//  <Col style={{ maxWidth: 'fit-content', marginLeft: '50px;' }}>
//           <div>
//             <p className="m-0 mb-2" style={{ fontSize: '22px' }}>Observaciones</p>
//             <Form.Control type="textarea" placeholder="Escribir acá observaciones" />
//           </div>
//           <div className="mt-4">
//             {proceso === 1 ? (
//               <Button
//                 onClick={() => {
//                   setProceso(2);
//                 }}
//                 className="btn btn-secondary"
//               >
//                 Guardar estudio
//               </Button>
//             ) : null}
//             {(proceso === 2) ? (
//               <>
//                 <p>¿Terminaste con este paciente?</p>
//                 <Button
//                   onClick={() => {
//                     setProceso(3);
//                   }}
//                   className="btn btn-secondary"
//                   style={{ marginRight: '10px' }}
//                 >
//                   Si
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     setProceso(4);
//                   }}
//                   className="btn btn-primary"
//                   style={{ marginLeft: '10px!important;' }}
//                 >
//                   Realizar otro estudio
//                 </Button>
//               </>
//             ) : null}
//             {(proceso === 3) ? (<Finished modal />)
//               : null}
//             {(proceso === 4) ? (
//               <>
//                 <p className="color-black mt-4">Realizar otro estudio</p>
//                 <div style={{ display: 'flex' }}>
//                   <Form.Select
//                     aria-label="Seleccionar estudio a realizar"
//                     style={{ marginRight: '10px' }}
//                     value={proximoEstudio}
//                     onChange={(e) => setProximoEstudio(e.target.value)}
//                   >
//                     <option>Seleccionar estudio</option>
//                     <option value="logoaudiometria">Logoaudiometría</option>
//                     <option value="impedanciometria">Impedanciometría</option>
//                     <option value="timpanometria">Timpanometría</option>
//                     <option value="potenciales-evocados">Potenciales evocados</option>
//                     <option value="otoemision">Otoemisión</option>
//                   </Form.Select>
//                   <Button
//                     className="btn btn-primary"
//                     // onClick={() => realizarProximoEstudio()}
//                   >
//                     Realizar
//                   </Button>
//                 </div>
//               </>
//             ) : null}
//           </div>
//         </Col>
