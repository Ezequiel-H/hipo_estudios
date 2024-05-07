'use client';

import React from 'react';
import {
  Table, Container, Form, Button, Row, Col,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';

const Area = styled.div`
    border: 7px solid var(--quartyColor);
    padding: 30px;
    border-radius: 30px;
`;

const Area2 = styled(Area)`
    border: 7px solid var(--tertiaryColor);
    margin-top: 30px;
    .input {
        margin: 10px;
        max-width: 95%;
        border: 1px solid transparent;
        background-color:  var(--tertiaryColor);
        border-radius: 25px;
        padding: 10px 15px;
    }
`;

const Boton = styled(Button)`
    padding: 5px;
    margin-right: 10px;
    background-color: transparent;
    &:hover {
        transform: scale(1.3);
    }
`;

function Pacientes() {
  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1">Mis pacientes</h1>
        <Area>
          <Form.Control
            type="text"
            id="identifier"
            placeholder="Buscá por nombre, apellido o DNI..."
            className="mb-3"
          />
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Obra Social</th>
                <th>Número de Afiliado</th>
                <th>Última visita</th>
                <th>Próxima visita</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Gomez</td>
                <td>Juan</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 951</td>
                <td>16/05/2023</td>
                <td>-</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Boton>
                      <img src="/img/estudios/markers/eye.png" alt="Ver paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/edit.png" alt="Editar paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/new-file.png" alt="Nuevo estudio" width="35px" />
                    </Boton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Boton>
                      <img src="/img/estudios/markers/eye.png" alt="Ver paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/edit.png" alt="Editar paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/new-file.png" alt="Nuevo estudio" width="35px" />
                    </Boton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Boton>
                      <img src="/img/estudios/markers/eye.png" alt="Ver paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/edit.png" alt="Editar paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/new-file.png" alt="Nuevo estudio" width="35px" />
                    </Boton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Boton>
                      <img src="/img/estudios/markers/eye.png" alt="Ver paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/edit.png" alt="Editar paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/new-file.png" alt="Nuevo estudio" width="35px" />
                    </Boton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Boton>
                      <img src="/img/estudios/markers/eye.png" alt="Ver paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/edit.png" alt="Editar paciente" width="35px" />
                    </Boton>
                    <Boton>
                      <img src="/img/estudios/markers/new-file.png" alt="Nuevo estudio" width="35px" />
                    </Boton>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Area>

        <Area2>
          <h3 className="text-center color-black">Paciente nuevo</h3>
          <Form>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control placeholder="Nombre" type="text" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control placeholder="Apellido" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control placeholder="Fecha de nacimiento" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control placeholder="Obra social" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control type="number" placeholder="Numero de afiliado" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control type="email" placeholder="Email" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control type="number" placeholder="Celular" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Button className="btn btn-primary input" style={{ backgroundColor: 'var(--primaryColor)' }}>Registrar</Button>
              </Col>
            </Row>
          </Form>
        </Area2>

      </Container>
    </Layout>
  );
}

export default Pacientes;
