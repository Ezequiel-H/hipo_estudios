'use client';

import React, { useState, useEffect } from 'react';
import {
  Container, Button, Row, Col, Form, Table,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import { getPatientById, getProfessionalById } from '../../db/user';
import { getStudyById } from '@/app/db/studies';

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
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});
  // const [studies, setStudies] = useState({});
  // const [professionals, setProfessionals] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getPatientById(localStorage.getItem('userId'));
      setUser(response);
      console.log(response);

      // FIXME: Se rompe el back en estas funciones de la DB: http://localhost:3000/paciente/perfil

      if (response.studies.length > 0) {
        const studiesArray = [];
        response.studies.forEach(async (oneStudy) => {
          const thisStudy = await getStudyById(oneStudy);
          studiesArray.push(thisStudy);
        });
        // setStudies(studiesArray);
        console.log(studiesArray);
      }
      if (response.professionals.length > 0) {
        const professionalsArray = [];
        response.professionals.forEach(async (oneProfessional) => {
          const thisStudy = await getProfessionalById(oneProfessional);
          professionalsArray.push(thisStudy);
        });
        // setProfessionals(professionalsArray);
        console.log(professionalsArray);
      }
    };

    fetchUser();
  }, []);

  // TODO LUCAS: hacer update de la info si quiere actualizar

  const [filterType, setFilterType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const filteredStudies = [];
  // const filteredStudies = studies.filter((study) => {
  //   if (filterType && study.type !== filterType) return false;
  //   if (fromDate && study.date < fromDate) return false;
  //   if (toDate && study.date > toDate) return false;
  //   return true;
  // });

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
            <a className="visita-item" href="/paciente/compartir">
              Compartir estudios
            </a>
          </div>

          <Area2>
            <h3 className="text-center color-black" id="estudios">Mis estudios</h3>

            <div className="study-filter mx-auto text-center mt-4 mb-4">
              <Form.Label>
                <select className="input" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                  <option value="">Todos</option>
                  <option value="estudios">Estudios</option>
                  <option value="formularios">Formularios</option>
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

        </div>
      </Container>
    </Layout>
  );
}

export default UserProfile;
