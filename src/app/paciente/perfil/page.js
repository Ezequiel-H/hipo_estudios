'use client';

import React, { useState } from 'react';
import {
  Container, Button, Row, Col, Form, Table,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';

const Area = styled.div`
  border: 7px solid var(--quartyColor);
  padding: 30px;
  border-radius: 30px;
  margin-top: 35px;
  .input {
        margin: 10px;
        max-width: 95%;
        border: 1px solid transparent;
        background-color:  var(--tertiaryColor);
        border-radius: 25px;
        padding: 10px 15px;
    }
`;

const Area2 = styled(Area)`
    border: 7px solid var(--tertiaryColor);
    margin-top: 30px; 
`;

function UserProfile() {
  const studies = [
    {
      id: 1, type: 'audiogram', date: '2024-02-02', title: 'Audiometria sin audifono',
    },
    {
      id: 2, type: 'audiogram', date: '2024-04-03', title: 'Audiometria con audifono',
    }];

  const user = {
    id: 1, name: 'Ezequiel', surname: 'Horowitz', birthdate: '18/09/2000',
  };
  const [filterType, setFilterType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const filteredStudies = studies.filter((study) => {
    if (filterType && study.type !== filterType) return false;
    if (fromDate && study.date < fromDate) return false;
    if (toDate && study.date > toDate) return false;
    return true;
  });

  return (
    <Layout>
      <Container>
        <div className="user-profile">
          <h1 className="title text-center section1 mb-3 pb-3">Mi perfil</h1>
          <div style={{ color: 'black', textAlign: 'center' }}>
            <a className="visita-item" href="#datos">
              Datos personales
            </a>
            <a className="visita-item" href="#estudios">
              Estudios
            </a>
            <a className="visita-item" href="#formularios">
              Formularios
            </a>
          </div>

          <Area>
            <h3 className="text-center color-black mb-4">Datos personales</h3>
            <Form>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control placeholder="Nombre" type="text" className="input" value={user.name} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control placeholder="Apellido" className="input" value={user.surname} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control placeholder="Fecha de nacimiento" className="input" value={user.birthdate} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control placeholder="Email" type="email" className="input" />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control type="number" placeholder="Celular" className="input" />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Button className="btn btn-primary input" style={{ backgroundColor: 'var(--primaryColor)' }}>Actualizar</Button>
                </Col>
              </Row>
            </Form>
          </Area>

          <Area2>
            <h3 className="text-center color-black">Mis estudios</h3>

            <div className="study-filter mx-auto text-center mt-4 mb-4">
              <Form.Label>
                <select className="input" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                  <option value="">Todos</option>
                  <option value="audiogram">Audiometría</option>
                  <option value="logoaudiogram">Logoaudiometría</option>
                </select>
              </Form.Label>
              <Form.Label>
                Desde
                <input type="date" className="input" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
              </Form.Label>
              <Form.Label>
                Hasta
                <input type="date" className="input" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              </Form.Label>
            </div>
            {filteredStudies.length === 0 ? (
              <p>No hay estudios para el filtro aplicado.</p>
            ) : (
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>Titulo</th>
                    <th>Estudio</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudies.map((study) => (
                    <tr key={study.id}>
                      <td>{study.id}</td>
                      <td>{study.title}</td>
                      <td>{study.type}</td>
                      <td>{study.date}</td>
                      <td><a href={`http://localhost:3000/${user.id}/estudios/${study.id}`} target="_blank" rel="noopener noreferrer">Link</a></td>
                    </tr>
                  ))}

                </tbody>
              </Table>
            )}
          </Area2>

        </div>
      </Container>
    </Layout>
  );
}

export default UserProfile;
