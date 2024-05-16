import React, { useState } from 'react';
import {
  Row, Col, Container, Form, Table, Button,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Finished from '../Finished';

const TdCell = styled.td`
    margin: 0!important;
    input {
        background-color: transparent;
        border: 1px solid var(--primaryColor);
        width: 100%;
    }

`;

function Timpanometria() {
  const [proceso, setProceso] = useState(1);
  const [proximoEstudio, setProximoEstudio] = useState('');
  return (
    <Container>
      <Row className="mt-4">
        <Col style={{ maxWidth: 'fit-content' }}>
          <Form style={{ maxWidth: 'fit-content' }}>
            <Table bordered hover style={{ maxWidth: '600px' }}>
              <thead>
                <tr>
                  <th>OIDO</th>
                  <th className="text-center">500</th>
                  <th className="text-center">404</th>
                  <th className="text-center">300</th>
                  <th className="text-center">200</th>
                  <th className="text-center">100</th>
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
