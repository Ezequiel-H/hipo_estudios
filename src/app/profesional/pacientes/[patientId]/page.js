'use client';

import React, { useEffect, useState } from 'react';
import {
  Container, Table, Button, Col, Row, Form,
} from 'react-bootstrap';
import { useSearchParams } from 'next/navigation';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';
import { getPatientByIdWithStudies } from '@/app/db/patient';

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
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  const { patientId } = params;
  const [user, setUser] = useState('');
  const [visits, setVisits] = useState([]);

  function createVisits(studies) {
    return studies.reduce((acc, study) => {
      const dateOnly = study.date.split('T')[0];
      let group = acc.find((g) => g.date === dateOnly);
      if (!group) {
        group = { date: dateOnly, studies: [] };
        acc.push(group);
      }
      group.studies.push(study);
      return acc;
    }, []);
  }

  useEffect(() => {
    const fetchData = async (id) => {
      const newUser = await getPatientByIdWithStudies(id);
      setUser(newUser);
      setVisits(createVisits(newUser.studies));
    };
    fetchData(patientId);
  }, [patientId]);

  function updatePatient(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

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
                <th>Hecho por mi</th>
              </tr>
            </thead>
            <tbody>
              {
                visits.map((visit, index) => (
                  <tr key={visit._id}>
                    <td>{index + 1 }</td>
                    <td>{visit.date}</td>
                    <td>
                      {
                        visit.studies.map((oneStudy) => (
                          <a className="visita-item" target="_blank" href={`/paciente/estudios/${oneStudy._id}`} rel="noreferrer">
                            {oneStudy.type}
                          </a>
                        ))
                      }
                    </td>
                    <td>{visit.date}</td>

                  </tr>
                ))
              }

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
          <h3 className="text-center color-black">
            {
              mode === 'edit' ? 'Actualizar datos del paciente' : 'Datos del paciente'
            }
          </h3>
          <Form onSubmit={(e) => updatePatient(e)}>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  name="name"
                  value={user.name}
                  onChange={(e) => handleChange(e)}
                  placeholder="Nombre"
                  type="text"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  name="surname"
                  value={user.surname}
                  onChange={(e) => handleChange(e)}
                  placeholder="Apellido"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  name="birthdate"
                  value={user.birthdate}
                  onChange={(e) => handleChange(e)}
                  placeholder="Fecha de nacimiento"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  name="os"
                  value={user.os}
                  onChange={(e) => handleChange(e)}
                  placeholder="Obra social"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  type="number"
                  name="osNumber"
                  value={user.osNumber}
                  onChange={(e) => handleChange(e)}
                  placeholder="Numero de afiliado"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Email"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  disabled={mode !== 'edit'}
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={(e) => handleChange(e)}
                  placeholder="Celular"
                  className="input"
                />
              </Col>
              {
                mode === 'edit' ? (
                  <Col xs={12} sm={12} md={4} lg={4}>
                    <Button
                      type="submit"
                      className="btn btn-primary input"
                      style={{ backgroundColor: 'var(--primaryColor)' }}
                    >
                      Actualizar
                    </Button>
                  </Col>
                ) : null
              }
            </Row>
          </Form>
        </Area2>
      </Container>
    </Layout>
  );
}

export default Perfil;
