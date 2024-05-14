'use client';

import React, { useEffect, useState } from 'react';
import {
  Container, Table, Button, Col, Row, Form,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getUserById } from '@/app/db/user';

const Area = styled.div`
  border: 7px solid var(--quartyColor);
  padding: 30px;
  border-radius: 30px;
  margin-top: 35px;
`;

const Area2 = styled(Area)`
  border: 7px solid var(--tertiaryColor);
  margin: 30px 0 60px 0;

  .input {
    margin: 10px;
    max-width: 95%;
    border: 1px solid transparent;
    background-color: var(--tertiaryColor);
    border-radius: 25px;
    padding: 10px 15px;
  }
`;

function Perfil({ params }) {
  const { userId } = params;
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const newUser = await getUserById(userId);
      setUser(newUser);
    };

    fetchData();
  }, [userId]);
  // TODO: Que existan disable estudios que no se pueden ver pero estan.

  return (
    <Layout>
      <Container>
        {user && <DatosDelPaciente user={user} alignLeft />}

        <Area>
          <h3 className="text-center color-black">Visitas</h3>

          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Estudios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>15/04/2022</td>
                <td>
                  <a className="visita-item" href="#logoaudiometria">
                    Audiometria
                  </a>
                  <a className="visita-item" href="#logoaudiometria">
                    Logoaudiometria
                  </a>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>15/04/2019</td>
                <td>
                  <a className="visita-item" href="/test">
                    Audiometria
                  </a>
                  <a className="visita-item" href="/test">
                    Selección de audífonos
                  </a>
                  <a className="visita-item" href="/test">
                    PEACH
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>15/04/2018</td>
                <td>
                  <a className="visita-item" href="/test">
                    Audiometria
                  </a>
                  <a className="visita-item" href="/test">
                    Logoaudiometria
                  </a>
                  <a className="visita-item" href="/test">
                    Timpanometría
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>15/04/2001</td>
                <td>
                  <a className="visita-item" href="/test">
                    Selección de audífonos
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Area>
        <Area2>
          <h3 className="text-center color-black">Actualizar datos del paciente</h3>
          <Form>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  placeholder="Nombre"
                  type="text"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control placeholder="Apellido" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  placeholder="Fecha de nacimiento"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control placeholder="Obra social" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  type="number"
                  placeholder="Numero de afiliado"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  type="number"
                  placeholder="Celular"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  type="text"
                  placeholder="Médico"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Button
                  className="btn btn-primary input"
                  style={{ backgroundColor: 'var(--primaryColor)' }}
                >
                  Registrar
                </Button>
              </Col>
            </Row>
          </Form>
        </Area2>
      </Container>
    </Layout>
  );
}

export default Perfil;
