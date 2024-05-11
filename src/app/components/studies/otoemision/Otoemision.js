/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Container, Table, Row, Col, Button, Form,
} from 'react-bootstrap';

function Otoemision() {
  const [derecha, setDerecha] = useState(Array(12));
  const [izquierda, setIzquierda] = useState(Array(12));
  const [otoemisor, setOtoemisor] = useState(0);

  const numRows = 6;
  const numCols = 6;

  function handleChange() {
    // let newData = [];
    // if(tipo == 'contralateral'){
    //     newData = contralateral;
    //     newData[posicion] = valor;
    //     setContralateral(newData);
    // } else if (tipo == 'izquierdo') {
    //     newData = ipsilateral;
    //     newData[posicion] = valor;
    //     setIpsilateral(newData);
    // }
  }

  const tableHead = () => (
    <tr>
      <th className="impedancio-cell">F2</th>
      <th className="impedancio-cell">P1</th>
      <th className="impedancio-cell">P2</th>
      <th className="impedancio-cell">DP</th>
      <th className="impedancio-cell">NF</th>
      <th className="impedancio-cell">SN</th>
    </tr>
  );

  const generateCells = () => {
    const cells = [];
    let cellIndex = 1;
    for (let i = 0; i < numRows; i++) {
      const rowCells = [];
      for (let j = 0; j < numCols; j++) {
        if (j !== 0) {
          rowCells.push(
            <td key={cellIndex} className="impedancio-cell">
              <input type="number" name={`d-${cellIndex}`} />
            </td>,
          );
          cellIndex++;
        } else {
          rowCells.push(
            <td key={`strong-${i}-${j}`} className="impedancio-cell">
              <strong>{['2.000', '4.000', '6.000', '8.000', '10.000', '12.000'][i]}</strong>
            </td>,
          );
        }
      }
      cells.push(<tr key={`row-${i}`}>{rowCells}</tr>);
    }
    return cells;
  };

  function changeOtoemisor(e) {
    setOtoemisor(e.target.value);
  }

  return (
    <main style={{ backgroundColor: 'white' }}>
      <Container>
        <div
          style={{ display: 'flex' }}
          className="this-section"
        >
          <p className="sub-title mb-0">Otoemision</p>
          <Form.Select
            aria-label="Seleccionar otoemisor"
            value={otoemisor}
            onChange={(e) => changeOtoemisor(e)}
            className="mb-4"
            style={{ width: 'fit-content', marginLeft: '20px' }}
          >
            <option disabled>Seleccionar Otoemisor</option>
            <option value="1">Cada 1.500 Hz</option>
            <option value="2">Cada 2.000 Hz</option>
            <option value="3">Con todos los Hz</option>
          </Form.Select>
        </div>
        <Row>
          <Col className="mx-auto" sm={12} md={12} lg={4} xl={4}>
            <p className="text-center sub-title mb-0">IZQUIERDA</p>
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
            <p className="text-center sub-title mb-0">DERECHA</p>
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

            <div className="mt-4" style={{ marginLeft: '30px!important' }}>
              <p className="m-0 mb-2" style={{ fontSize: '22px' }}>Observaciones</p>
              <Form.Control type="textarea" placeholder="Escribir acá observaciones" />
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

export default Otoemision;
