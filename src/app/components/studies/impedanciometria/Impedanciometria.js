/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Container, Table, Row, Col, Form,
} from 'react-bootstrap';

import FinishStudyBtn from '../FinishStudyBtn';
import { STUDY_TYPES } from '@/app/constants/study';

function Impedanciometria({ patientId }) {
  const [contralateral, setContralateral] = useState(Array(12));
  const [ipsilateral, setIpsilateral] = useState(Array(12));
  const [observations, setObservations] = useState('');

  const numRows = 4;
  const numCols = 7;

  function handleChange(tipo, posicion, valor) {
    let newData = [];
    if (`${tipo}` === 'contralateral') {
      newData = contralateral;
      newData[posicion] = valor;
      setContralateral(newData);
    } else if (`${tipo}` === 'izquierdo') {
      newData = ipsilateral;
      newData[posicion] = valor;
      setIpsilateral(newData);
    }
  }

  // TODO EZE:¿como harias esto?

  // La columna I s/u reste las anteriores y actualice el resultado. Ahora como se genera afuera, no va actualizando.

  // function getValue(index, table) {
  //   if (table === 'contralateral') {
  //     return contralateral[index - 1] - contralateral[index - 2] || '';
  //   }
  //   return ipsilateral[index - 1] - ipsilateral[index - 2];
  // }

  const tableHead = () => (
    <>
      <tr className="text-center">
        <th colSpan={4}>OIDO DERECHO</th>
        <th colSpan={1} />
        <th colSpan={4}>OIDO IZQUIERDO</th>
      </tr>
      <tr>
        <th className="impedancio-cell">U</th>
        <th className="impedancio-cell">UR</th>
        <th className="impedancio-cell" colSpan={2}>
          I
          <strong>s/u</strong>
        </th>
        <th className="impedancio-cell">FREC</th>
        <th className="impedancio-cell">U</th>
        <th className="impedancio-cell">UR</th>
        <th className="impedancio-cell" colSpan={2}>
          I
          <strong>s/u</strong>
        </th>
      </tr>
    </>
  );

  const generateCells = () => {
    const cells = [];
    let cellIndex = 1;
    for (let i = 0; i < numRows; i++) {
      const rowCells = [];
      for (let j = 0; j < numCols; j++) {
        if (j !== 3) {
          if (j === 2 || j === 6) {
            rowCells.push(
              <td key={cellIndex} className="impedancio-cell" colSpan={2}>
                <input type="number" name={`c-${cellIndex}`} value={contralateral[cellIndex]} disabled />
              </td>,

            );
            cellIndex++;
          } else {
            rowCells.push(
              <td key={cellIndex} className="impedancio-cell">
                <input type="number" name={`c-${cellIndex}`} value={contralateral[cellIndex]} onChange={(e) => handleChange('derecho', cellIndex, e.target.value)} />
              </td>,
            );
            cellIndex++;
          }
        } else {
          rowCells.push(
            <td key={`strong-${i}-${j}`} className="impedancio-cell">
              <strong>{['500', '1.000', '2.000', '4.000'][i]}</strong>
            </td>,
          );
        }
      }
      cells.push(<tr key={`row-${i}`}>{rowCells}</tr>);
    }
    return cells;
  };

  return (
    <main style={{ backgroundColor: 'white' }}>
      <Container style={{ marginTop: '40px' }}>
        {/* <p className="sub-title this-section mb-0">Impedanciometria</p> */}
        <Row>
          <Col className="mx-auto" sm={12} md={12} lg={4} xl={4}>
            <p className="text-center sub-title mb-0">CONTRALATERAL</p>
            <Table className="text-center">
              <thead>
                {tableHead()}
              </thead>
              <tbody>
                {generateCells()}
              </tbody>
            </Table>
          </Col>
          <Col className="mx-auto" sm={12} md={12} lg={4} xl={4}>
            <p className="text-center sub-title mb-0">IPSILATERAL</p>
            <Table className="text-center">
              <thead>
                {tableHead()}
              </thead>
              <tbody>
                {generateCells()}
              </tbody>
            </Table>
          </Col>

          <Col sm={12} md={12} lg={3} xl={3}>

            <div className="mt-4 select-tools-audiogram">
              <p className="m-0 mb-2" style={{ fontSize: '22px' }}>Observaciones</p>
              <Form.Control
                type="textarea"
                placeholder="Escribir acá observaciones"
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
              />
            </div>
            <FinishStudyBtn
              observations={observations}
              results={{
                contralateral, ipsilateral,
              }}
              patientId={patientId}
              type={STUDY_TYPES.IMPEDANCIOMETER}
            />
            {/* TODO DB: en guardar da error: '`IMPEDANCIOMETER` is not a valid enum value for path `type`.', */}

          </Col>
        </Row>

      </Container>
    </main>
  );
}

export default Impedanciometria;
