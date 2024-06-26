'use client';

import React, { useState, useEffect } from 'react';
import {
  Container, Button, Row, Col, Form, Table,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import { getAllStudiesForPatient } from '@/app/db/patient';
import { getPatientById } from '@/app/db/user';
import { createVisits } from '@/app/helpers';

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

function PatientProfile() {
  // eslint-disable-next-line no-unused-vars
  const [patient, setPatient] = useState('');
  const [originalPatient, setOriginalPatient] = useState('');
  const [visits, setVisits] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  // const [studies, setStudies] = useState([]);
  // const [filterType, setFilterType] = useState('');
  // const [professionals, setProfessionals] = useState({});

  const fetchData = async () => {
    const fetchedPatient = await getPatientById(localStorage.getItem('userId'));
    setPatient(fetchedPatient);
    setOriginalPatient(fetchedPatient);
    const fetchedStudies = await getAllStudiesForPatient(localStorage.getItem('userId'));
    setVisits(createVisits(fetchedStudies));

    // if (response.professionals.length > 0) {
    //   const professionalsArray = [];
    //   response.professionals.forEach(async (oneProfessional) => {
    //     const thisStudy = await getProfessionalById(oneProfessional);
    //     professionalsArray.push(thisStudy);
    //   });
    //   // setProfessionals(professionalsArray);
    //   console.log(professionalsArray);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredVisits = visits.filter((visit) => {
    // if (filterType && visit.type !== filterType) return false;
    if (fromDate && visit.date < fromDate) return false;
    if (toDate && visit.date > toDate) return false;
    return true;
  });

  function handleChange(e) {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  }

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
            <h3 className="text-center color-black" id="estudios">Mis visitas</h3>

            <div className="study-filter mx-auto text-center mt-4 mb-4">
              {/* <Form.Label>
                <select className="input" value={filterType}
                onChange={(e) => setFilterType(e.target.value)}>
                  <option value="">Todos</option>
                  <option value="estudios">Estudios</option>
                  <option value="formularios">Formularios</option>
                </select>
              </Form.Label> */}
              <Form.Label>
                Desde
                <input type="date" className="input" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
              </Form.Label>
              <Form.Label>
                Hasta
                <input type="date" className="input" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              </Form.Label>
            </div>
            {filteredVisits.length === 0 ? (
              <p>No hay visitas para el filtro aplicado.</p>
            ) : (
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>Estudios</th>
                    <th>Profesional</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVisits.map((visit, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{visit.date}</td>
                      <td>
                        {
                          visit.studies.map((oneStudy, index2) => (
                            <a key={index2} className="visita-item" target="_blank" href={`/paciente/estudios/${oneStudy._id}`} rel="noreferrer">
                              {oneStudy.type}
                            </a>
                          ))
                        }
                      </td>
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
                  <Form.Control name="name" onChange={handleChange} placeholder="Nombre" type="text" className="input" value={patient.name} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control name="surname" onChange={handleChange} placeholder="Apellido" className="input" value={patient.surname} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control name="os" onChange={handleChange} placeholder="Obra social" className="input" value={patient.os} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control name="numeroAfiliado" onChange={handleChange} placeholder="Número de afiliado" className="input" value={patient.numeroAfiliado} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control name="birthdate" onChange={handleChange} placeholder="Fecha de nacimiento" className="input" value={patient.birthdate} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control name="email" onChange={handleChange} placeholder="Email" type="email" className="input" value={patient.email} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Form.Control type="number" name="phone" onChange={handleChange} placeholder="Celular" className="input" value={patient.phone} />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <Button
                    className="btn btn-primary input"
                    style={{ backgroundColor: 'var(--primaryColor)' }}
                    disabled={patient === originalPatient}
                  >
                    Actualizar datos
                  </Button>
                </Col>
              </Row>
            </Form>
          </Area>

        </div>
      </Container>
    </Layout>
  );
}

export default PatientProfile;
