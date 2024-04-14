/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Container, Table, Row, Col, Button,
} from 'react-bootstrap';

function Impedanciometria() {
  // TODO: Faltaria hacer que la columna I s/u reste las anteriores y actualice el resultado. Ahora como se genera afuera, no va actualizando.

  const [contralateral, setContralateral] = useState(Array(12));
  const [ipsilateral, setIpsilateral] = useState(Array(12));

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
      <Container>
        <p className="sub-title this-section mb-0">Impedanciometria</p>
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
            <div style={{ marginLeft: '30px!important' }}>
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
            <div className="mt-4" style={{ marginLeft: '30px!important' }}>
              <p className="m-0" style={{ fontSize: '22px' }}>Observaciones</p>
              <p>
                ____________________
                <br />
                ____________________
              </p>
            </div>
            <div className="mt-4" style={{ marginLeft: '30px!important' }}>
              <Button className="btn btn-secondary">
                Guardar estudio
              </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </main>
  );
}

export default Impedanciometria;
