'use client';

import React from 'react';
import {
  Table, Container, Form, Button, Row, Col,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import PatientActions from '@/app/components/professional/profile/PatientActions';

const Area = styled.div`
    border: 7px solid var(--quartyColor);
    padding: 30px;
    border-radius: 30px;
`;

const Area2 = styled(Area)`
    border: 7px solid var(--tertiaryColor);
    margin: 30px 0 60px 0;

    .input {
        margin: 10px;
        max-width: 95%;
        border: 1px solid transparent;
        background-color:  var(--tertiaryColor);
        border-radius: 25px;
        padding: 10px 15px;
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
                <th>Centro</th>
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
                <PatientActions patientID="idDeEzequiel123123" />

              </tr>
              <tr>
                <td>2</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <PatientActions patientID="idDeEzequiel123123" />

              </tr>
              <tr>
                <td>3</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <PatientActions patientID="idDeEzequiel123123" />
              </tr>
              <tr>
                <td>4</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <PatientActions patientID="idDeEzequiel123123" />

              </tr>
              <tr>
                <td>5</td>
                <td>Gomez</td>
                <td>Carmen</td>
                <td>Swiss Medical Group</td>
                <td>60004 00445 005 952</td>
                <td>10/01/2020</td>
                <td>-</td>
                <PatientActions patientID="idDeEzequiel123123" />

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
              <Col xs={12} sm={12} md={4} lg={3}>
                <Form.Control type="text" placeholder="Médico" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={3}>
                <Form.Select aria-label="Seleccionar centro" className="input">
                  <option disabled selected>Seleccionar consultorio</option>
                  <option value="1">Av. Cramer 1234</option>
                  <option value="2">ORL PALERMO</option>
                  <option value="3">Balvin 1222</option>
                </Form.Select>
              </Col>
              <Col xs={12} sm={12} md={4} lg={2}>
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
