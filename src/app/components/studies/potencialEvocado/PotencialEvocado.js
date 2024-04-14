/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Container, Table, Row, Col, Button, Form,
} from 'react-bootstrap';
import styled from '@emotion/styled';

const MicrofonicasCocleares = styled.div`
    margin-top: 10px;
    button {
        opacity: .6;
        background-color: var(--primaryColor);
        color: white;
    }
    button:hover {
        color: white;
        background-color: var(--tertiaryColor);
    }
    .active {
        opacity: 1;
        background-color: var(--primaryColor);
    }
    #presentes {
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
    }
    
    #ausentes {
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
    }
`;

function PotencialEvocado() {
  const [potencial, setPotencial] = useState({
    clic: '',
    tono: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    coclear: '',
  });

  const numRows = 4;
  const numCols = 5;

  const tableHead = () => (
    <tr>
      <th className="impedancio-cell" />
      <th className="impedancio-cell">500 Hz</th>
      <th className="impedancio-cell">1.000 Hz</th>
      <th className="impedancio-cell">2.000 Hz</th>
      <th className="impedancio-cell">4.000 Hz</th>
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
              <strong className="text-center">{['Vía aérea derecha', 'Vía aérea izquierda', 'Vía ósea derecha', 'Vía ósea izquierda'][i]}</strong>
            </td>,
          );
        }
      }
      cells.push(<tr key={`row-${i}`}>{rowCells}</tr>);
    }
    return cells;
  };

  return (
    <main style={{ backgroundColor: 'white', marginBottom: '5rem' }}>
      <Container>
        <p className="sub-title this-section mb-0">Potenciales Evocados</p>
        <Row>
          <Col sm={12} md={12} lg={6} xl={6}>
            <p className="sub-title mb-0">Por clic</p>
            <div style={{ maxWidth: '500px' }}>
              <Form.Range />

              <p className="sub-title mb-0 mt-5">Por tonos (Burst)</p>
              <Table className="text-center">
                <thead>
                  {tableHead()}
                </thead>
                <tbody>
                  {generateCells()}
                </tbody>
              </Table>

              <p className="sub-title mb-0 mt-5">Microfónicas Cocleares</p>
              <MicrofonicasCocleares>
                <Button id="presentes" className="active">Presentes</Button>
                <Button id="ausentes">Ausentes</Button>
              </MicrofonicasCocleares>
            </div>

          </Col>

          <Col sm={12} md={12} lg={5} xl={5}>
            <div>
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

export default PotencialEvocado;
